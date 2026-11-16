// Checks links between notes in docs/.
// 1. Broken links: a relative .md link must point to an existing file, with the same letter case.
// 2. Orphan notes: every note needs at least one incoming link (a category README list counts).
// 3. Cycles: the "먼저 읽기:" (read first) links must not form a cycle.
import {existsSync, readdirSync, readFileSync, statSync} from 'node:fs';
import {dirname, join, relative, resolve, sep} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const docsRoot = join(root, 'docs');
const PREREQ_PREFIX = '먼저 읽기:';

function walk(folder) {
  return readdirSync(folder).flatMap((name) => {
    const path = join(folder, name);
    if (statSync(path).isDirectory()) return walk(path);
    return path.endsWith('.md') ? [path] : [];
  });
}

// Exact-case existence check. macOS file systems ignore case, but the web build does not.
function existsExactCase(path) {
  if (!existsSync(path)) return false;
  const parts = relative(root, path).split(sep);
  let current = root;
  for (const part of parts) {
    if (!readdirSync(current).includes(part)) return false;
    current = join(current, part);
  }
  return true;
}

function stripCode(markdown) {
  return markdown.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
}

function linksIn(text, fromFile) {
  const links = [];
  for (const [, href] of text.matchAll(/\]\(([^)\s]+?\.md)(?:#[^)\s]*)?\)/g)) {
    if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('/')) continue;
    links.push({href, target: resolve(dirname(fromFile), decodeURIComponent(href))});
  }
  return links;
}

const files = walk(docsRoot);
const rel = (path) => relative(docsRoot, path);
const isReadme = (path) => path.endsWith(`${sep}README.md`);
const isRootDoc = (path) => !rel(path).includes(sep);

const errors = [];
const incoming = new Map(files.map((file) => [file, 0]));
const prereqs = new Map();

for (const file of files) {
  const body = stripCode(readFileSync(file, 'utf8'));

  for (const {href, target} of linksIn(body, file)) {
    if (!existsExactCase(target)) {
      errors.push(`Broken link: ${rel(file)} -> ${href}`);
      continue;
    }
    if (target !== file) incoming.set(target, (incoming.get(target) ?? 0) + 1);
  }

  const prereqLine = body.split('\n').find((line) => line.trim().startsWith(PREREQ_PREFIX));
  if (prereqLine) {
    prereqs.set(file, linksIn(prereqLine, file).map(({target}) => target).filter((target) => existsExactCase(target)));
  }
}

for (const [file, count] of incoming) {
  if (count === 0 && !isReadme(file) && !isRootDoc(file)) errors.push(`Orphan note (no incoming link): ${rel(file)}`);
}

const state = new Map();
function visit(file, trail) {
  if (state.get(file) === 'done') return;
  if (state.get(file) === 'active') {
    const cycle = trail.slice(trail.indexOf(file)).concat(file).map(rel).join(' -> ');
    errors.push(`"${PREREQ_PREFIX}" cycle: ${cycle}`);
    return;
  }
  state.set(file, 'active');
  for (const next of prereqs.get(file) ?? []) visit(next, trail.concat(file));
  state.set(file, 'done');
}
for (const file of prereqs.keys()) visit(file, []);

if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`\n${errors.length} link problem(s) in docs/.`);
  process.exitCode = 1;
} else {
  console.log(`Link checks passed: ${files.length} files, ${prereqs.size} with "${PREREQ_PREFIX}".`);
}
