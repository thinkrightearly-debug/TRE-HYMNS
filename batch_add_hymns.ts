
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

async function getBatchOfTitles(startIndex: number, count: number, existingTitles: string[]) {
  const prompt = `Provide ${count} unique, well-known English hymn titles for a comprehensive hymnal. 
  These should be different from the following list: ${existingTitles.slice(-50).join(', ')}.
  Return as a JSON array of strings.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: { responseMimeType: "application/json" }
  });

  return JSON.parse(response.text);
}

async function getHymnDetails(titles: string[]) {
  const prompt = `For each of the following hymn titles, provide the author, tune, category (choose from: Morning, Evening, Praise, Worship, Passion, Resurrection, Communion, Comfort, Dedication, Missionary, Children, Burial, Other), and full lyrics (verses as an array of strings, and an optional chorus string).
  
  Titles: ${titles.join(', ')}
  
  Return as a JSON array of objects with fields: title, author, tune, category, chorus, verses.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: { 
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            author: { type: Type.STRING },
            tune: { type: Type.STRING },
            category: { type: Type.STRING },
            chorus: { type: Type.STRING, nullable: true },
            verses: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["title", "author", "tune", "category", "verses"]
        }
      }
    }
  });

  return JSON.parse(response.text);
}

async function main() {
  const fs = require('fs');
  const content = fs.readFileSync('constants.tsx', 'utf8');
  const existingTitles = content.match(/title: "(.*)"/g).map(t => t.match(/"(.*)"/)[1]);
  const lastIdMatch = content.match(/id: (\d+)/g);
  const lastId = lastIdMatch ? parseInt(lastIdMatch[lastIdMatch.length - 1].match(/\d+/)[0]) : 0;

  console.log(`Current hymn count: ${existingTitles.length}. Last ID: ${lastId}`);

  try {
    const newTitles = await getBatchOfTitles(existingTitles.length, 10, existingTitles);
    console.log(`Fetched ${newTitles.length} new titles.`);
    
    const hymnDetails = await getHymnDetails(newTitles);
    console.log(`Fetched details for ${hymnDetails.length} hymns.`);

    let appendContent = "";
    hymnDetails.forEach((hymn, index) => {
      const id = lastId + index + 1;
      appendContent += `  {\n`;
      appendContent += `    id: ${id},\n`;
      appendContent += `    number: ${id},\n`;
      appendContent += `    title: "${hymn.title}",\n`;
      appendContent += `    category: "${hymn.category}",\n`;
      appendContent += `    author: "${hymn.author}",\n`;
      appendContent += `    tune: "${hymn.tune}",\n`;
      if (hymn.chorus) {
        appendContent += `    chorus: ${JSON.stringify(hymn.chorus)},\n`;
      }
      appendContent += `    verses: ${JSON.stringify(hymn.verses, null, 2).replace(/\n/g, '\n    ')}\n`;
      appendContent += `  }${index === hymnDetails.length - 1 ? "" : ",\n"}`;
    });

    // Insert before the closing bracket of the array
    const lastBracketIndex = content.lastIndexOf('];');
    const updatedContent = content.slice(0, lastBracketIndex).trimEnd();
    const finalContent = updatedContent + ",\n" + appendContent + "\n];";

    fs.writeFileSync('constants.tsx', finalContent);
    console.log(`Successfully added ${hymnDetails.length} hymns. New total: ${existingTitles.length + hymnDetails.length}`);
  } catch (error) {
    console.error("Error in batch process:", error);
  }
}

main();
