import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import readingTime from 'reading-time';

const ROOT_DIR = process.cwd();
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const OUTPUT_DIR = path.join(ROOT_DIR, 'src', 'generated');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'reading-time.ts');
const DATE_LOCALE = 'en-US';

function toDocId(absolutePath) {
  const relativePath = path.relative(DOCS_DIR, absolutePath);
  return relativePath.replace(/\.md$/i, '').replace(/\\/g, '/');
}

function splitFrontMatter(markdown) {
  if (!markdown.startsWith('---\n')) {
    return {frontMatter: '', content: markdown};
  }

  const endIndex = markdown.indexOf('\n---\n', 4);
  if (endIndex === -1) {
    return {frontMatter: '', content: markdown};
  }

  return {
    frontMatter: markdown.slice(4, endIndex),
    content: markdown.slice(endIndex + 5),
  };
}

function parseFrontMatterField(frontMatter, key) {
  const line = frontMatter
    .split('\n')
    .find((row) => row.trimStart().startsWith(`${key}:`));

  if (!line) {
    return undefined;
  }

  const value = line.slice(line.indexOf(':') + 1).trim().replace(/^['"]|['"]$/g, '');
  return value || undefined;
}

function parseCreatedAt(frontMatter) {
  const value = parseFrontMatterField(frontMatter, 'created_at');

  if (!value) {
    return undefined;
  }

  const normalized = value.includes('T') ? value : value.replace(' ', 'T');
  const date = new Date(normalized);

  if (Number.isNaN(date.getTime())) {
    return undefined;
  }

  return new Intl.DateTimeFormat(DATE_LOCALE, {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(date);
}

function toReadTimeText(minutes) {
  const rounded = Math.max(1, Math.round(minutes));
  return `${rounded} min read`;
}

async function collectMarkdownFiles(directory) {
  const entries = await fs.readdir(directory, {withFileTypes: true});
  const files = await Promise.all(
    entries.map(async (entry) => {
      const absolutePath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return collectMarkdownFiles(absolutePath);
      }

      if (!entry.isFile() || !entry.name.toLowerCase().endsWith('.md')) {
        return [];
      }

      return [absolutePath];
    }),
  );

  return files.flat();
}

async function main() {
  const files = await collectMarkdownFiles(DOCS_DIR);
  const result = {};

  for (const filePath of files) {
    const raw = await fs.readFile(filePath, 'utf8');
    const {frontMatter, content} = splitFrontMatter(raw);
    const stats = readingTime(content);
    const id = toDocId(filePath);

    result[id] = {
      minutes: Math.max(1, Math.round(stats.minutes)),
      text: toReadTimeText(stats.minutes),
      words: stats.words,
      dateText: parseCreatedAt(frontMatter) ?? '',
      title: parseFrontMatterField(frontMatter, 'title') ?? '',
      description: parseFrontMatterField(frontMatter, 'description') ?? '',
    };
  }

  const output = `export interface ReadTimeInfo {\n  readonly minutes: number;\n  readonly text: string;\n  readonly words: number;\n  readonly dateText: string;\n  readonly title: string;\n  readonly description: string;\n}\n\nexport const READING_TIME_BY_DOC_ID: Record<string, ReadTimeInfo> = ${JSON.stringify(
    result,
    null,
    2,
  )} as const;\n`;

  await fs.mkdir(OUTPUT_DIR, {recursive: true});
  await fs.writeFile(OUTPUT_FILE, output, 'utf8');
  console.log(`Generated ${OUTPUT_FILE} (${Object.keys(result).length} docs)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
