
import fs from 'fs';

const content = fs.readFileSync('constants.tsx', 'utf8');
const lines = content.split('\n');

const hymns: any[] = [];
let currentHymn: any = null;
let inHymn = false;

// Basic parser for the HYMNS array
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.trim() === '{' && !inHymn) {
    inHymn = true;
    currentHymn = {};
    continue;
  }
  if (line.trim().startsWith('},') || (line.trim() === '}' && inHymn)) {
    inHymn = false;
    hymns.push(currentHymn);
    currentHymn = null;
    continue;
  }

  if (inHymn) {
    const titleMatch = line.match(/title:\s*"(.*)"/);
    if (titleMatch) currentHymn.title = titleMatch[1];
    
    const numberMatch = line.match(/number:\s*(\d+)/);
    if (numberMatch) currentHymn.number = parseInt(numberMatch[1]);

    const idMatch = line.match(/id:\s*(\d+)/);
    if (idMatch) currentHymn.id = parseInt(idMatch[1]);

    // Capture the whole block for each hymn to preserve it
    if (!currentHymn.lines) currentHymn.lines = [];
    currentHymn.lines.push(line);
  }
}

const uniqueHymns: any[] = [];
const seenTitles = new Set<string>();

for (const hymn of hymns) {
  if (!seenTitles.has(hymn.title)) {
    seenTitles.add(hymn.title);
    uniqueHymns.push(hymn);
  }
}

// Re-number
uniqueHymns.forEach((h, index) => {
  const newNum = index + 1;
  h.lines = h.lines.map((line: string) => {
    if (line.includes('id:')) return line.replace(/id:\s*\d+/, `id: ${newNum}`);
    if (line.includes('number:')) return line.replace(/number:\s*\d+/, `number: ${newNum}`);
    return line;
  });
});

const newContent = [
  "import { Hymn } from './types';",
  "",
  "export const HYMNS: Hymn[] = [",
  uniqueHymns.map(h => "  {\n" + h.lines.join('\n') + "\n  }").join(',\n'),
  "];"
].join('\n');

fs.writeFileSync('constants.tsx', newContent);
console.log(`Removed duplicates. Unique hymns: ${uniqueHymns.length}`);
