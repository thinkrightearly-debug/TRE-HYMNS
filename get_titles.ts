
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

async function getTitles(start: number, end: number) {
  const prompt = `List the titles of hymns ${start} to ${end} from "Anglican Hymns Old & New" (Revised/Full Edition). 
  Return as a JSON array of strings.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: { type: Type.STRING }
      }
    }
  });

  console.log(JSON.stringify(JSON.parse(response.text.trim()), null, 2));
}

getTitles(677, 750);
