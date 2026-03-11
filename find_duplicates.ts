
import fs from 'fs';

const content = fs.readFileSync('constants.tsx', 'utf8');
const lines = content.split('\n');
const titles: { title: string, number: number }[] = [];

let currentNumber = -1;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const numMatch = line.match(/number:\s*(\d+)/);
  if (numMatch) {
    currentNumber = parseInt(numMatch[1]);
  }
  const titleMatch = line.match(/title:\s*"(.*)"/);
  if (titleMatch && currentNumber !== -1) {
    titles.push({ title: titleMatch[1], number: currentNumber });
  }
}

const titleMap = new Map<string, number[]>();
titles.forEach(t => {
  if (!titleMap.has(t.title)) {
    titleMap.set(t.title, []);
  }
  titleMap.get(t.title)!.push(t.number);
});

console.log("Duplicate Hymns:");
titleMap.forEach((numbers, title) => {
  if (numbers.length > 1) {
    console.log(`"${title}": ${numbers.join(', ')}`);
  }
});
