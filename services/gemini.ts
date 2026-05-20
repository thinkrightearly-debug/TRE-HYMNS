import { GoogleGenAI, Type } from "@google/genai";
import { Hymn, Note } from "../types";
import { get, set } from 'idb-keyval';

let aiClient: GoogleGenAI | null = null;

const getAI = (): GoogleGenAI | null => {
  if (aiClient) return aiClient;
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (!apiKey) {
    console.warn("Gemini API key is not configured. Some AI features may be unavailable.");
    return null;
  }
  try {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
    return aiClient;
  } catch (err) {
    console.error("Failed to initialize GoogleGenAI client:", err);
    return null;
  }
};

export const getCachedData = async (key: string) => {
  return await get(key);
};

export const getHymnReflection = async (hymnTitle: string, lyrics: string) => {
  const cacheKey = `reflection_${hymnTitle}`;
  try {
    const cached = await get(cacheKey);
    if (cached) return cached;

    const ai = getAI();
    if (!ai) {
      return "Spiritual reflections are currently resting. Please set your GEMINI_API_KEY to see them.";
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: `You are a theologian and devotional writer. Provide a short, inspiring spiritual reflection (3-4 sentences) on the following hymn titled "${hymnTitle}". Then suggest one Bible verse that fits the theme. 
      Lyrics: ${lyrics.substring(0, 1000)}`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });
    const text = response.text;
    await set(cacheKey, text);
    return text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Could not generate reflection at this time.";
  }
};

export const modernizeHymn = async (hymnTitle: string, lyrics: string) => {
  const cacheKey = `modern_${hymnTitle}`;
  try {
    const cached = await get(cacheKey);
    if (cached) return cached;

    const ai = getAI();
    if (!ai) {
      return "Modernized translation is unavailable without a configured GEMINI_API_KEY.";
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: `Rewrite the following hymn lyrics in modern English. Maintain original meaning but use contemporary language.
      Hymn: ${hymnTitle}
      Lyrics: ${lyrics}`,
    });
    const text = response.text;
    await set(cacheKey, text);
    return text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error modernizing text.";
  }
};

export const generateHymnMelody = async (hymnTitle: string, tune: string, firstVerse?: string): Promise<Note[]> => {
  const cacheKey = `melody_${hymnTitle}_${tune}`;
  try {
    const cached = await get(cacheKey);
    if (cached) return cached;

    const ai = getAI();
    if (!ai) {
      throw new Error("Gemini API is not configured");
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: `You are a world-class organist and musicologist. Provide the mathematically and musically accurate main melody for the hymn "${hymnTitle}" (Tune: ${tune}).
      ${firstVerse ? `Context (First Verse): "${firstVerse}"` : ''}
      Provide a sequence of 20-32 notes that represent the full first verse or the primary melodic theme.
      Format the output as a JSON array of objects with "pitch" (frequency in Hz), "duration" (in seconds), and "name" (e.g. "C4").
      Ensure the frequencies (Hz) are precise (e.g., A4 = 440Hz) and the rhythm is faithful to the traditional meter.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              pitch: { type: Type.NUMBER },
              duration: { type: Type.NUMBER },
              name: { type: Type.STRING }
            },
            required: ["pitch", "duration", "name"]
          }
        }
      }
    });

    const notes = JSON.parse(response.text.trim());
    await set(cacheKey, notes);
    return notes;
  } catch (error) {
    console.error("Melody Generation Error:", error);
    return [
      { pitch: 261.63, duration: 0.8, name: "C4" },
      { pitch: 293.66, duration: 0.8, name: "D4" },
      { pitch: 329.63, duration: 0.8, name: "E4" },
      { pitch: 349.23, duration: 1.2, name: "F4" }
    ];
  }
};

export const fetchHymnFromArchive = async (query: string): Promise<Hymn | null> => {
  try {
    const ai = getAI();
    if (!ai) {
      console.warn("Cannot fetch from archive: Gemini API key is missing.");
      return null;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: `You are a hymnal archivist specializing in the English Anglican and Iwe Orin Mimo (IOM) traditions. 
      Retrieve the following hymn details for: "${query}". 
      If a number is provided, find that specific number from the standard 600+ English hymnal.
      
      Return as a JSON object:
      {
        "number": number,
        "title": "string",
        "category": "string",
        "author": "string",
        "tune": "string",
        "verses": ["string array"],
        "chorus": "string or null"
      }`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
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
    });

    const data = JSON.parse(response.text.trim());
    return {
      id: Date.now(), // Dynamic ID for archive hymns
      ...data
    };
  } catch (error) {
    console.error("Archive Retrieval Error:", error);
    return null;
  }
};
