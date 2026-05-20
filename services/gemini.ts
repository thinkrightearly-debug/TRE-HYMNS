import { Hymn, Note } from "../types";
import { get, set } from 'idb-keyval';

// Get API Key safely in the browser context
const getApiKey = (): string => {
  if (typeof window !== 'undefined' && 'process' in window) {
    const proc = (window as any).process;
    if (proc && proc.env) {
      return proc.env.GEMINI_API_KEY || proc.env.API_KEY || '';
    }
  }
  return '';
};

const callGemini = async (prompt: string, responseMimeType?: string): Promise<string> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured.");
  }
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: prompt }]
      }],
      generationConfig: responseMimeType ? {
        responseMimeType
      } : undefined
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error("Empty response from Gemini API");
  }
  return text;
};

export const getCachedData = async (key: string) => {
  return await get(key);
};

export const getHymnReflection = async (hymnTitle: string, lyrics: string) => {
  const cacheKey = `reflection_${hymnTitle}`;
  try {
    const cached = await get(cacheKey);
    if (cached) return cached;

    const apiKey = getApiKey();
    if (!apiKey) {
      return "Spiritual reflections are currently resting. Please set your GEMINI_API_KEY to see them.";
    }

    const prompt = `You are a theologian and devotional writer. Provide a short, inspiring spiritual reflection (3-4 sentences) on the following hymn titled "${hymnTitle}". Then suggest one Bible verse that fits the theme. 
    Lyrics: ${lyrics.substring(0, 1000)}`;

    const text = await callGemini(prompt);
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

    const apiKey = getApiKey();
    if (!apiKey) {
      return "Modernized translation is unavailable without a configured GEMINI_API_KEY.";
    }

    const prompt = `Rewrite the following hymn lyrics in modern English. Maintain original meaning but use contemporary language.
    Hymn: ${hymnTitle}
    Lyrics: ${lyrics}`;

    const text = await callGemini(prompt);
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

    const apiKey = getApiKey();
    if (!apiKey) {
      throw new Error("Gemini API is not configured");
    }

    const prompt = `You are a world-class organist and musicologist. Provide the mathematically and musically accurate main melody for the hymn "${hymnTitle}" (Tune: ${tune}).
    ${firstVerse ? `Context (First Verse): "${firstVerse}"` : ''}
    Provide a sequence of 20-32 notes that represent the full first verse or the primary melodic theme.
    Format the output as a JSON array of objects with "pitch" (frequency in Hz), "duration" (in seconds), and "name" (e.g. "C4").
    Ensure the frequencies (Hz) are precise (e.g., A4 = 440Hz) and the rhythm is faithful to the traditional meter.
    
    Return ONLY a raw JSON array. Do not wrap in markdown code block layout.
    Example: [{"pitch": 261.63, "duration": 0.8, "name": "C4"}]`;

    const text = await callGemini(prompt, "application/json");
    const notes = JSON.parse(text.trim());
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
    const apiKey = getApiKey();
    if (!apiKey) {
      console.warn("Cannot fetch from archive: Gemini API key is missing.");
      return null;
    }

    const prompt = `You are a hymnal archivist specializing in the English Anglican and Iwe Orin Mimo (IOM) traditions. 
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
    }`;

    const text = await callGemini(prompt, "application/json");
    const data = JSON.parse(text.trim());
    return {
      id: Date.now(), // Dynamic ID for archive hymns
      ...data
    };
  } catch (error) {
    console.error("Archive Retrieval Error:", error);
    return null;
  }
};
