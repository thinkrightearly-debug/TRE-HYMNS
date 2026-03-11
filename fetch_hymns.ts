
import { GoogleGenAI, Type } from "@google/genai";
import * as fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

async function fetchBatch(start, end) {
  const prompt = `You are a hymnal archivist. Provide the 100% accurate and complete lyrics (all verses) and the correct tune name for Anglican Hymns Old & New, numbers ${start} to ${end}.
  
  Return as a JSON array of objects:
  {
    "number": number,
    "title": "string",
    "category": "string",
    "author": "string",
    "tune": "string",
    "verses": ["string array"],
    "chorus": "string or null"
  }`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              number: { type: Type.NUMBER },
              title: { type: Type.STRING },
              category: { type: Type.STRING },
              author: { type: Type.STRING },
              tune: { type: Type.STRING },
              verses: { type: Type.ARRAY, items: { type: Type.STRING } },
              chorus: { type: Type.STRING, nullable: true }
            },
            required: ["number", "title", "category", "verses"]
          }
        }
      }
    });

    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error(`Error fetching batch ${start}-${end}:`, error);
    return [];
  }
}

async function main() {
  const start = parseInt(process.argv[2]);
  const end = parseInt(process.argv[3]);
  const results = await fetchBatch(start, end);
  console.log(JSON.stringify(results, null, 2));
}

main();
