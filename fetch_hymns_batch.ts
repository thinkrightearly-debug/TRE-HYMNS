
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || process.env.API_KEY || '' });

async function getHymns(start: number, end: number) {
  const prompt = `Provide the full lyrics (all verses), title, category, author, and tune for hymns ${start} to ${end} from "Anglican Hymns Old & New" (Revised Edition).
  
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

  console.log(response.text);
}

getHymns(686, 700);
