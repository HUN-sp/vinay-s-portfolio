// Lists every TODO(vinay) in the content files. Run: npm run todos
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dirs = ['src/data', 'src/components', 'index.html'];
const hits = [];

function scan(path) {
  let entries;
  try {
    entries = readdirSync(path, { withFileTypes: true });
  } catch {
    // a single file
    const lines = readFileSync(path, 'utf8').split('\n');
    lines.forEach((l, i) => l.includes('TODO(vinay)') && hits.push(`${path}:${i + 1}  ${l.trim()}`));
    return;
  }
  for (const e of entries) {
    const p = join(path, e.name);
    if (e.isDirectory()) scan(p);
    else if (/\.(ts|tsx|html)$/.test(e.name) && e.name !== 'types.ts') {
      readFileSync(p, 'utf8')
        .split('\n')
        .forEach((l, i) => l.includes('TODO(vinay)') && hits.push(`${p}:${i + 1}  ${l.trim()}`));
    }
  }
}

dirs.forEach(scan);
console.log(hits.length ? hits.join('\n') : 'No TODO(vinay) left.');
console.log(`\n${hits.length} open`);
