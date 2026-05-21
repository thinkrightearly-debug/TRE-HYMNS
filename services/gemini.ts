import { Hymn, Note } from "../types";
import { get, set } from 'idb-keyval';
import { getAccurateMelody } from "./hymnMelodies";

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
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`;
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
  // Check for pre-programmed 100% accurate tunes first
  const accurate = getAccurateMelody(tune, hymnTitle);
  if (accurate) {
    return accurate;
  }

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

export const translateHymn = async (hymnTitle: string, lyrics: string, targetLanguage: string): Promise<string> => {
  const cacheKey = `translate_${hymnTitle}_${targetLanguage.toLowerCase()}`;
  try {
    const cached = await get(cacheKey);
    if (cached) return cached;

    const apiKey = getApiKey();
    if (!apiKey) {
      return `Translations in ${targetLanguage} are resting. Please configure your GEMINI_API_KEY.`;
    }

    const prompt = `You are an expert theologian and bilingual translator specializing in sacred hymns.
    Translate the following hymn lyrics into extremely beautiful, poetic, and rhythmically appropriate ${targetLanguage}.
    Ensure the translation captures the absolute full depth, spiritual meaning, and emotional resonance of the original text.
    If translating into African languages like Yoruba, Igbo, or Hausa, ensure proper tone markings (diacritics) where applicable to maintain extreme accuracy and respect standard pronunciation.
    
    Hymn Title: "${hymnTitle}"
    
    Original English Lyrics:
    ${lyrics}
    
    Provide only the translated verses, separated by double newlines. Do not include any translation notes, introductory text, or titles. Just output the translation itself.`;

    const text = await callGemini(prompt);
    await set(cacheKey, text);
    return text;
  } catch (error) {
    console.error("Gemini Translation Error:", error);
    return `Could not translate into ${targetLanguage} at this time.`;
  }
};

export const verifyAndCompleteLyrics = async (
  hymnNumber: number,
  title: string,
  currentLyrics: string
): Promise<{ verses: string[]; chorus?: string | null; author?: string; tune?: string } | null> => {
  try {
    const apiKey = getApiKey();
    if (!apiKey) return null;

    const prompt = `You are a world-class sacred hymnal expert and archivist. Verify and retrieve the absolute 100% complete and accurate traditional English lyrics for the following hymn:
    Number: ${hymnNumber}
    Title: "${title}"
    
    Current version text:
    ${currentLyrics}
    
    Compare this against the official traditional hymnal registry. Correct any typos, recover any completely missing traditional verses, and critically, make sure any traditional chorus (if the hymn has a chorus) is completely restored in its accurate, full form. Also verify and re-identify the correct traditional Tune (e.g. NICAEA, BEECHER, EVENTIDE, etc.) and Author.
    
    Return the result strictly as a JSON object of this structure:
    {
      "verses": ["fully formatted verse 1 text", "fully formatted verse 2 text", ...],
      "chorus": "chorus text if any, or null",
      "author": "verified author name",
      "tune": "verified tune name"
    }
    
    Provide only the raw JSON. Do not write markdown wrapping.`;

    const text = await callGemini(prompt, "application/json");
    return JSON.parse(text.trim());
  } catch (error) {
    console.error("verifyAndCompleteLyrics Error:", error);
    return null;
  }
};

