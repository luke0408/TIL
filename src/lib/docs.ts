import {unified} from 'unified';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkDirective from 'remark-directive';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import {visit} from 'unist-util-visit';

type FrontMatter = {
  title?: string;
  description?: string;
  created_at?: string;
  tags?: string[];
  sidebar_position?: string;
};

export type DocHeading = {
  id: string;
  text: string;
  level: number;
};

export type DocItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  dateLabel: string;
  readTimeLabel: string;
  tag: string;
  tags: string[];
  category: string;
  subcategory?: string;
  sidebarPosition: number;
  html: string;
  headings: DocHeading[];
};

export type DirectoryTreeNode = {
  type: 'directory' | 'file';
  name: string;
  path: string;
  slug?: string;
  children?: DirectoryTreeNode[];
};

const rawDocs = import.meta.glob('/docs/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

function remarkAdmonitionToBlockquote() {
  return (tree: unknown) => {
    visit(tree, (node: any) => {
      if (!node || node.type !== 'containerDirective') return;

      const admonitionType = String(node.name ?? 'note').toLowerCase();
      const label = typeof node.label === 'string' ? node.label.trim() : '';
      const titledByAttr =
        typeof node.attributes?.title === 'string' && node.attributes.title.trim()
          ? node.attributes.title.trim()
          : '';

      const title =
        label || titledByAttr || admonitionType.charAt(0).toUpperCase() + admonitionType.slice(1);

      node.type = 'blockquote';
      node.data = {
        hProperties: {
          className: ['admonition-box', `admonition-${admonitionType}`],
        },
      };

      node.children = [
        {
          type: 'paragraph',
          data: {hProperties: {className: ['admonition-title']}},
          children: [{type: 'text', value: title}],
        },
        ...(node.children ?? []),
      ];
    });
  };
}

const markdownProcessor = unified()
  .use(remarkParse)
  .use(remarkFrontmatter, ['yaml'])
  .use(remarkDirective)
  .use(remarkAdmonitionToBlockquote)
  .use(remarkGfm)
  .use(remarkRehype, {allowDangerousHtml: true})
  .use(rehypeRaw)
  .use(rehypeSlug)
  .use(rehypeHighlight)
  .use(rehypeStringify, {allowDangerousHtml: true});

function slugifyText(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9가-힣\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function toSlug(path: string) {
  return path.replace('/docs/', '').replace('.md', '').replaceAll('/', '__').toLowerCase();
}

function getPathParts(path: string) {
  return path.replace('/docs/', '').split('/').filter(Boolean);
}

function toTagFromPath(path: string) {
  const parts = getPathParts(path);
  if (parts.length <= 1) {
    return 'docs';
  }

  return parts[parts.length - 2]!.replaceAll('_', '-');
}

function toCategoryFromPath(path: string) {
  const parts = getPathParts(path);
  return (parts[0] ?? 'docs').replaceAll('_', ' ');
}

function toSubcategoryFromPath(path: string) {
  const parts = getPathParts(path);
  return parts.length >= 3 ? parts[1]!.replaceAll('_', ' ') : undefined;
}

function formatDateLabel(value: string | undefined) {
  if (!value) {
    return 'Unknown date';
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function toDescription(markdownBody: string, fallback: string) {
  const firstLine = markdownBody
    .split('\n')
    .map((line) => line.trim())
    .find((line) => line && !line.startsWith('#'));

  return firstLine ?? fallback;
}

function toReadTimeLabel(markdownBody: string) {
  const plain = markdownBody.replace(/[`#>*\-_[\]()]/g, ' ');
  const words = plain.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));

  return `${minutes} min read`;
}

function parseSimpleFrontMatter(rawContent: string) {
  if (!rawContent.startsWith('---\n')) {
    return {data: {} as FrontMatter, content: rawContent};
  }

  const endIndex = rawContent.indexOf('\n---\n', 4);
  if (endIndex === -1) {
    return {data: {} as FrontMatter, content: rawContent};
  }

  const frontMatterBlock = rawContent.slice(4, endIndex);
  const content = rawContent.slice(endIndex + 5);
  const data: FrontMatter = {};

  for (const line of frontMatterBlock.split('\n')) {
    const [rawKey, ...rawValueParts] = line.split(':');
    if (!rawKey || rawValueParts.length === 0) continue;

    const key = rawKey.trim();
    const value = rawValueParts.join(':').trim();

    if (key === 'title') data.title = value.replace(/^['"]|['"]$/g, '');
    if (key === 'description') data.description = value.replace(/^['"]|['"]$/g, '');
    if (key === 'created_at') data.created_at = value.replace(/^['"]|['"]$/g, '');
    if (key === 'sidebar_position') data.sidebar_position = value.replace(/^['"]|['"]$/g, '');
    if (key === 'tags') {
      const cleaned = value.replace(/\[|\]/g, '').trim();
      data.tags = cleaned
        ? cleaned.split(',').map((tag) => tag.trim().replace(/^['"]|['"]$/g, ''))
        : [];
    }
  }

  return {data, content};
}

function toHeadings(markdownBody: string) {
  const headingRegex = /^(##|###)\s+(.+)$/gm;
  const headings: DocHeading[] = [];
  let matched: RegExpExecArray | null = headingRegex.exec(markdownBody);

  while (matched) {
    const levelToken = matched[1]!;
    const rawText = matched[2]!.trim();
    const text = rawText.replace(/[#*_`]/g, '').trim();
    headings.push({
      id: slugifyText(text),
      text,
      level: levelToken.length,
    });

    matched = headingRegex.exec(markdownBody);
  }

  return headings;
}

function normalizeListLikeLines(markdownBody: string) {
  const lines = markdownBody.split('\n');
  const normalized: string[] = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index] ?? '';

    if (line.trim() === '대표 방식:') {
      normalized.push(line);

      let cursor = index + 1;
      while (cursor < lines.length) {
        const candidate = (lines[cursor] ?? '').trim();
        if (!candidate) {
          normalized.push(lines[cursor] ?? '');
          cursor += 1;
          break;
        }

        if (/^[A-Za-z0-9가-힣][^:]{0,40}:\s+.+$/.test(candidate) && !candidate.startsWith('- ')) {
          normalized.push(`- ${candidate}`);
          cursor += 1;
          continue;
        }

        break;
      }

      index = cursor - 1;
      continue;
    }

    normalized.push(line);
  }

  return normalized.join('\n');
}

function normalizeAdmonitionSyntax(markdownBody: string) {
  return markdownBody.replace(
    /^:::(note|tip|info|warning|danger)\s+(.+)$/gm,
    (_matched, kind, title) => `:::${kind}[${String(title).trim()}]`,
  );
}

function normalizeBrokenBoldMarkers(markdownBody: string) {
  const blocks = markdownBody.split(/(```[\s\S]*?```)/g);

  return blocks
    .map((block) => {
      if (block.startsWith('```')) {
        return block;
      }

      return block
        .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
        .replace(/__([^_\n]+)__/g, '<strong>$1</strong>');
    })
    .join('');
}

function normalizeMarkdownForDisplay(markdownBody: string) {
  const withHeadings = markdownBody.replace(
    /^(Summary|Details|Practical Example|How it works|요약|상세)$/gm,
    '## $1',
  );

  const withAdmonitions = normalizeAdmonitionSyntax(withHeadings);
  const withLists = normalizeListLikeLines(withAdmonitions);
  return normalizeBrokenBoldMarkers(withLists);
}

function decodeHtmlCode(value: string) {
  return value
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'");
}

function mapCodeBlocksToDesign(html: string) {
  return html.replace(/<pre><code(?: class="([^"]+)")?>([\s\S]*?)<\/code><\/pre>/g, (_match, classNames, code) => {
    const decodedCode = decodeHtmlCode(code).trim();

    const languageFromClass =
      String(classNames ?? '')
        .split(' ')
        .find((name) => name.startsWith('language-'))
        ?.replace('language-', '') ?? '';

    const looksLikeMermaid = /^(graph|flowchart|sequenceDiagram|classDiagram|stateDiagram|erDiagram|journey|gantt|pie|mindmap)\b/.test(
      decodedCode,
    );

    const normalizedLang = (languageFromClass || (looksLikeMermaid ? 'mermaid' : 'text')).toLowerCase();

    if (normalizedLang === 'mermaid') {
      return `<div class="mermaid">${decodedCode}</div>`;
    }

    const language = normalizedLang.toUpperCase();

    return [
      `<div class="md-code-block md-code-block--${normalizedLang}">`,
      '<div class="md-code-block__header">',
      `<span>${language}</span>`,
      '<button type="button"><span class="material-symbols-outlined">content_copy</span>Copy Code</button>',
      '</div>',
      `<pre><code>${code}</code></pre>`,
      '</div>',
    ].join('');
  });
}

function toHtml(markdownBody: string) {
  const file = markdownProcessor.processSync(markdownBody);
  return mapCodeBlocksToDesign(String(file));
}

function toSidebarPosition(value: string | undefined) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : Number.MAX_SAFE_INTEGER;
}

function parseDoc(path: string, rawContent: string): DocItem {
  const parsed = parseSimpleFrontMatter(rawContent);
  const normalizedContent = normalizeMarkdownForDisplay(parsed.content);
  const data = parsed.data;
  const rawTitle = data.title ?? path.split('/').pop()?.replace('.md', '') ?? 'Untitled';
  const title = rawTitle.replaceAll('_', ' ');
  const description = data.description ?? toDescription(normalizedContent, `${title} note`);
  const dateLabel = formatDateLabel(data.created_at);
  const readTimeLabel = toReadTimeLabel(normalizedContent);
  const tags = data.tags?.length ? data.tags : [toTagFromPath(path)];
  const tag = tags[0] ?? toTagFromPath(path);
  const category = toCategoryFromPath(path);
  const subcategory = toSubcategoryFromPath(path);
  const sidebarPosition = toSidebarPosition(data.sidebar_position);
  const headings = toHeadings(normalizedContent);
  const html = toHtml(normalizedContent);

  return {
    id: path,
    slug: toSlug(path),
    title,
    description,
    dateLabel,
    readTimeLabel,
    tag,
    tags,
    category,
    subcategory,
    sidebarPosition,
    headings,
    html,
  };
}

function toDateValue(label: string) {
  const parsed = Date.parse(label);
  return Number.isNaN(parsed) ? 0 : parsed;
}

const parsedDocs: DocItem[] = Object.entries(rawDocs)
  .map(([path, content]) => parseDoc(path, content))
  .sort((a, b) => toDateValue(b.dateLabel) - toDateValue(a.dateLabel));

const readmeSlugByDirectory = new Map<string, string>();
for (const doc of parsedDocs) {
  if (!doc.id.endsWith('/README.md')) continue;

  const directoryPath = doc.id
    .replace('/docs/', '')
    .replace('/README.md', '');

  readmeSlugByDirectory.set(directoryPath, doc.slug);
}

export const docs: DocItem[] = parsedDocs.filter((doc) => !doc.id.endsWith('/README.md'));

function sortKeyParts(doc: DocItem) {
  const parts = doc.id.replace('/docs/', '').split('/').filter(Boolean);
  const category = parts[0] ?? '';
  const subcategory = parts.length >= 3 ? parts[1] ?? '' : '';
  const isReadme = doc.id.endsWith('/README.md');

  return {category, subcategory, isReadme};
}

const orderedDocsForDetail = parsedDocs.slice().sort((a, b) => {
  const aKey = sortKeyParts(a);
  const bKey = sortKeyParts(b);

  const categoryCompare = aKey.category.localeCompare(bKey.category, 'ko');
  if (categoryCompare !== 0) return categoryCompare;

  const subcategoryCompare = aKey.subcategory.localeCompare(bKey.subcategory, 'ko');
  if (subcategoryCompare !== 0) return subcategoryCompare;

  if (aKey.isReadme !== bKey.isReadme) {
    return aKey.isReadme ? -1 : 1;
  }

  const positionCompare = a.sidebarPosition - b.sidebarPosition;
  if (positionCompare !== 0) return positionCompare;

  return a.title.localeCompare(b.title, 'ko');
});

export function getDocsByCategoryOrder() {
  return orderedDocsForDetail;
}

export function getDocBySlug(slug: string) {
  return parsedDocs.find((doc) => doc.slug === slug);
}

export function getReadmeSlugByDirectory(directoryPath: string) {
  return readmeSlugByDirectory.get(directoryPath);
}

export function getAdjacentDocs(slug: string) {
  const currentIndex = orderedDocsForDetail.findIndex((doc) => doc.slug === slug);
  if (currentIndex === -1) {
    return {previous: undefined, next: undefined};
  }

  return {
    previous: orderedDocsForDetail[currentIndex - 1],
    next: orderedDocsForDetail[currentIndex + 1],
  };
}

export function getPopularTags(limit = 8) {
  const counts = new Map<string, number>();

  for (const doc of docs) {
    counts.set(doc.tag, (counts.get(doc.tag) ?? 0) + 1);
  }

  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tag]) => tag);
}

export function getDocCategories() {
  const counts = new Map<string, number>();

  for (const doc of docs) {
    counts.set(doc.category, (counts.get(doc.category) ?? 0) + 1);
  }

  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({name, count}));
}

export function getDocCategoryTree() {
  const tree = new Map<string, Map<string, DocItem[]>>();

  for (const doc of docs) {
    const category = doc.category;
    const subcategory = doc.subcategory ?? 'General';

    if (!tree.has(category)) {
      tree.set(category, new Map<string, DocItem[]>());
    }

    const childMap = tree.get(category)!;
    if (!childMap.has(subcategory)) {
      childMap.set(subcategory, []);
    }

    childMap.get(subcategory)!.push(doc);
  }

  return Array.from(tree.entries())
    .map(([category, childMap]) => {
      const children = Array.from(childMap.entries())
        .map(([name, items]) => ({
          name,
          count: items.length,
          items: items
            .slice()
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((item) => ({title: item.title, slug: item.slug})),
        }))
        .sort((a, b) => b.count - a.count);

      const count = children.reduce((sum, child) => sum + child.count, 0);

      return {category, count, children};
    })
    .sort((a, b) => b.count - a.count);
}

export function getDocDirectoryTree() {
  const roots = new Map<string, DirectoryTreeNode>();

  for (const doc of docs) {
    const relativePath = doc.id.replace('/docs/', '');
    const segments = relativePath.split('/').filter(Boolean);

    if (segments.length < 2) continue;

    const top = segments[0]!;
    const hasSubcategory = segments.length >= 3;
    const sub = hasSubcategory ? segments[1]! : undefined;
    const fileName = segments[segments.length - 1]!;

    if (!roots.has(top)) {
      roots.set(top, {
        type: 'directory',
        name: top,
        path: top,
        children: [],
      });
    }

    const topNode = roots.get(top)!;
    if (!topNode.children) {
      topNode.children = [];
    }

    let targetChildren = topNode.children;

    if (sub) {
      const subPath = `${top}/${sub}`;
      let subNode = targetChildren.find((child) => child.type === 'directory' && child.path === subPath);

      if (!subNode) {
        subNode = {
          type: 'directory',
          name: sub,
          path: subPath,
          children: [],
        };
        targetChildren.push(subNode);
      }

      if (!subNode.children) {
        subNode.children = [];
      }

      targetChildren = subNode.children;
    }

    const filePath = `${top}${sub ? `/${sub}` : ''}/${fileName}`;
    const exists = targetChildren.some((child) => child.type === 'file' && child.path === filePath);

    if (!exists) {
      targetChildren.push({
        type: 'file',
        name: fileName,
        path: filePath,
        slug: doc.slug,
      });
    }
  }

  function sortNodes(nodes: DirectoryTreeNode[]): DirectoryTreeNode[] {
    return nodes
      .map((node) =>
        node.type === 'directory' && node.children
          ? {...node, children: sortNodes(node.children)}
          : node,
      )
      .sort((a, b) => {
        if (a.type !== b.type) {
          return a.type === 'directory' ? -1 : 1;
        }

        return a.name.localeCompare(b.name);
      });
  }

  return sortNodes(Array.from(roots.values()));
}
