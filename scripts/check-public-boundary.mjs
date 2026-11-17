import {execFileSync} from 'node:child_process';
import {existsSync, lstatSync, readdirSync, readFileSync} from 'node:fs';
import {resolve, relative, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const failures = [];
const forbidden = /(^|\/)(private|\.obsidian|\.trash)(\/|$)/i;
const tracked = execFileSync('git', ['ls-files', '-z'], {cwd: root, encoding: 'utf8'}).split('\0').filter(Boolean);
for (const file of tracked) {
  if (forbidden.test(file)) failures.push(`Local-only file tracked by Git: ${file}`);
}
// Refuse symlinks in publication inputs. They can bypass the intended directory boundary.
function walk(folder, fn) {
  if (!existsSync(folder)) return;
  for (const name of readdirSync(folder)) {
    const path = join(folder, name);
    const stat = lstatSync(path);
    fn(path, stat);
    if (stat.isDirectory() && !stat.isSymbolicLink()) walk(path, fn);
  }
}
for (const folder of ['docs']) {
  const input = join(root, folder);
  if (existsSync(input) && lstatSync(input).isSymbolicLink()) {
    failures.push(`Symlink publication root: ${folder}`);
    continue;
  }
  walk(input, (path, stat) => {
    const file = relative(root, path);
    if (stat.isSymbolicLink()) failures.push(`Symlink in publication input/output: ${file}`);
    if (forbidden.test(file)) failures.push(`Local-only directory in publication input/output: ${file}`);
    if (stat.isFile() && /\.md$/.test(path)) {
      const source = readFileSync(path, 'utf8');
      if (/(?:\.\.\/|\/|\[\[)private\//i.test(source)) failures.push(`Reference to local-only material: ${file}`);
    }
  });
}
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Public-boundary structural checks passed. This is NOT a sensitive-content audit.');
}
