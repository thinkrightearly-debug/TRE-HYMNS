import { Hymn, Note } from "../types";
import { get, set } from 'idb-keyval';
import { getAccurateMelody } from "./hymnMelodies";

let customApiKey: string = "";

export const setCustomApiKey = (key: string) => {
  customApiKey = key;
  if (typeof window !== "undefined" && window.localStorage) {
    if (key) {
      window.localStorage.setItem("USER_CUSTOM_GEMINI_API_KEY", key);
    } else {
      window.localStorage.removeItem("USER_CUSTOM_GEMINI_API_KEY");
    }
  }
};

// Get API Key safely in the browser context across Vercel, Vite, and AI Studio
export const getApiKey = (): string => {
  if (customApiKey) return customApiKey;
  if (typeof window !== "undefined" && window.localStorage) {
    const stored = window.localStorage.getItem("USER_CUSTOM_GEMINI_API_KEY");
    if (stored) return stored;
  }

  // Try Vite's modern client-facing environment config
  // Vite replaces literal 'import.meta.env.VITE_*' strings at build time.
  try {
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      // @ts-ignore
      const viteKey = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_API_KEY;
      if (viteKey) return viteKey;
    }
  } catch (e) {
    // Avoid parsing errors in some older legacy environments
  }

  // Fallback to literal node process lookups. 
  // Vite replaces literal 'process.env.*' expressions at build-time using 'define' config in vite.config.ts!
  try {
    // @ts-ignore
    const processGeminiKey = process.env.GEMINI_API_KEY;
    if (processGeminiKey) return processGeminiKey;
  } catch (e) {}

  try {
    // @ts-ignore
    const processApiKey = process.env.API_KEY;
    if (processApiKey) return processApiKey;
  } catch (e) {}

  // Dynamic process lookups for local development node runtimes (non-static)
  try {
    if (typeof window !== 'undefined' && 'process' in window) {
      const proc = (window as any).process;
      if (proc && proc.env) {
        const dynamicGeminiKey = proc.env.GEMINI_API_KEY || proc.env.API_KEY || proc.env.VITE_GEMINI_API_KEY || proc.env.VITE_API_KEY;
        if (dynamicGeminiKey) return dynamicGeminiKey;
      }
    }
  } catch (e) {}

  return '';
};

export const parseRobustJson = (rawText: string) => {
  let cleaned = rawText.trim();
  
  // Try direct parse first
  try {
    return JSON.parse(cleaned);
  } catch (e) {
    // Continue cleanup
  }

  // Remove markdown code blocks if any (e.g., ```json or ```)
  cleaned = cleaned.replace(/^```(?:json)?\s*/i, "");
  cleaned = cleaned.replace(/\s*```$/, "");
  cleaned = cleaned.trim();

  try {
    return JSON.parse(cleaned);
  } catch (e) {
    // Attempt to extract the JSON object/array from surrounding conversational text
    const firstObject = cleaned.indexOf('{');
    const firstArray = cleaned.indexOf('[');
    
    let startIndex = -1;
    let endIndex = -1;
    
    if (firstObject !== -1 && (firstArray === -1 || firstObject < firstArray)) {
      startIndex = firstObject;
      endIndex = cleaned.lastIndexOf('}');
    } else if (firstArray !== -1) {
      startIndex = firstArray;
      endIndex = cleaned.lastIndexOf(']');
    }
    
    if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
      const extracted = cleaned.substring(startIndex, endIndex + 1);
      try {
        return JSON.parse(extracted);
      } catch (innerError) {
        throw new Error(`Robust JSON parsing failed. Cleaned: ${cleaned}. Extract: ${extracted}. Error: ${innerError}`);
      }
    }
    throw new Error(`No JSON structural markers ({} or []) found in response: ${rawText}`);
  }
};

const callGeminiDirect = async (prompt: string, responseMimeType?: string): Promise<string> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error("No Gemini API key supplied. Please make sure GEMINI_API_KEY is configured.");
  }

  const modelsToTry = [
    "gemini-2.5-flash",
    "gemini-1.5-flash",
    "gemini-1.5-pro"
  ];

  let lastError: any = null;

  for (const model of modelsToTry) {
    try {
      console.log(`[Client Fallback] Attempting direct browser call using model: ${model}`);
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      
      const payload = {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ],
        generationConfig: responseMimeType ? { responseMimeType } : undefined
      };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        let errMsg = `HTTP error ${res.status}`;
        try {
          const jsonErr = await res.json();
          if (jsonErr?.error?.message) {
            errMsg = jsonErr.error.message;
          }
        } catch (e) {}
        throw new Error(errMsg);
      }

      const resData = await res.json();
      const text = resData?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) {
        return text;
      } else {
        throw new Error("Invalid response format or empty text content.");
      }
    } catch (err: any) {
      console.warn(`[Client Fallback] Model ${model} direct call failed:`, err);
      lastError = err;
      
      const errStr = String(err?.message || err || "").toLowerCase();
      if (
        errStr.includes("api key") ||
        errStr.includes("key is not valid") ||
        errStr.includes("403") ||
        errStr.includes("401") ||
        errStr.includes("unauthorized") ||
        errStr.includes("permission denied") ||
        errStr.includes("invalid key")
      ) {
        break;
      }
    }
  }

  throw lastError || new Error("Direct client-side fallback failed for all models.");
};

const callGemini = async (prompt: string, responseMimeType?: string): Promise<string> => {
  let fallbackNeeded = false;
  let response: Response | null = null;

  try {
    const customApiKey = getApiKey();
    response = await fetch("/api/gemini/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        responseMimeType,
        customApiKey,
      }),
    });

    if (response.status === 404 || response.status === 502 || response.status === 504 || response.status === 405) {
      console.log(`[Proxy] Endpoint returned status ${response.status}. Triggering direct client-side fallback...`);
      fallbackNeeded = true;
    } else {
      // Check Content-Type to make sure we didn't receive HTML (e.g. index.html rewrite on static host)
      const contentType = response.headers.get("content-type") || "";
      if (contentType.toLowerCase().includes("text/html")) {
        console.log(`[Proxy] HTML fallback detected (Vercel routing). Triggering direct client-side fallback...`);
        fallbackNeeded = true;
      }
    }
  } catch (netErr) {
    console.log("[Proxy] Net/Connection error when connecting to backend. Falling back to direct client-side call...", netErr);
    fallbackNeeded = true;
  }

  if (fallbackNeeded) {
    return await callGeminiDirect(prompt, responseMimeType);
  }

  if (!response || !response.ok) {
    // If the call failed but we have an API key, try direct client fallback as a final effort!
    const apiKey = getApiKey();
    if (apiKey) {
      console.log(`[Proxy] Response failed with status ${response ? response.status : 'unknown'}. Client API key is present; attempting direct client fallback...`);
      try {
        return await callGeminiDirect(prompt, responseMimeType);
      } catch (fallbackErr) {
        console.error("[Proxy] Both proxy and client-side fallback failed:", fallbackErr);
      }
    }

    let message = response ? `HTTP error ${response.status}` : "Failed to contact proxy server";
    try {
      if (response) {
        const errData = await response.json();
        if (errData && errData.error) {
          message = errData.error;
        }
      }
    } catch (e) {
      // Ignore JSON parse errors
    }
    throw new Error(message);
  }

  try {
    const data = await response.json();
    if (!data || !data.text) {
      // If we got invalid JSON but have client-side key, try direct fallback
      const apiKey = getApiKey();
      if (apiKey) {
        console.log("[Proxy] Invalid JSON or missing text from proxy. Retrying via client-side fallback...");
        return await callGeminiDirect(prompt, responseMimeType);
      }
      throw new Error("Empty response from Gemini API proxy service.");
    }
    return data.text;
  } catch (parseOrEmptyErr) {
    const apiKey = getApiKey();
    if (apiKey) {
      console.log("[Proxy] JSON parse failed on response. Retrying via client-side fallback...", parseOrEmptyErr);
      return await callGeminiDirect(prompt, responseMimeType);
    }
    throw parseOrEmptyErr;
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
    const notes = parseRobustJson(text);
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
    const data = parseRobustJson(text);
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

    const prompt = `You are a world-class expert theologian, linguist, and bilingual translator specializing in sacred Christian hymns.
    Your task is to translate the following hymn lyrics into extremely high-fidelity, poetic, and rhythmically appropriate ${targetLanguage} text of 100% absolute accuracy.

    Follow these rules strictly to achieve 100% accuracy:
    1. STRICT SEMANTIC FIDELITY: Maintain the precise theological doctrines and spiritual meanings. Do not embellish or omit any message contained in the original verse lines.
    2. METRICAL & RHYTHMIC MATCHING: Adapt the syllables and rhythm so the translated lines can be seamlessly sung to the same original organ melody. Match original line and stanza boundaries (no summaries, no consolidations).
    3. EXTREME DIACRITICAL PRECISION: If translating into tone languages or languages that utilize diacritics (including African languages like Yorùbá, Igbo, Hausa, or European languages like Spanish, French, German), enforce perfect, precise, dictionary-accurate tone marking, underdots, accents, and pronunciation diacritics to ensure respectful, 100% correct pronunciation.
    4. ZERO CONVERSATIONAL NOISE: Output only the translated verses/chorus. Do not include introductory phrases (like "Sure, here is the translation..."), translator's notes, explanations, titles, or headers. Output ONLY the raw translated stanzas, separated by double newlines.

    Hymn Title: "${hymnTitle}"
    
    Original English Lyrics:
    ${lyrics}
    
    Raw ${targetLanguage} Poetic Translation:`;

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
): Promise<{ verses: string[]; chorus?: string | null; author?: string; tune?: string; melody?: Note[] } | null> => {
  try {
    const apiKey = getApiKey();
    if (!apiKey) return null;

    const prompt = `You are a world-class sacred hymnal expert, musicologist, and organist. Verify and retrieve the absolute 100% complete and accurate traditional English lyrics AND musical tune melody for the following hymn:
    Number: ${hymnNumber}
    Title: "${title}"
    
    Current version text:
    ${currentLyrics}
    
    Compare this against the official traditional hymnal registry. 
    1. Correct any typos, recover any completely missing traditional verses, and critically, make sure any traditional chorus is completely restored in its accurate, full form.
    2. Verify and re-identify the correct traditional Tune (e.g. NICAEA, BEECHER, EVENTIDE, etc.) and Author.
    3. Generate/Verify the absolute 100% accurate main melody notes for this verified traditional tune name. Provide a sequence of 16-32 Note structures representing the primary melody theme.
    
    Return the result strictly as a JSON object of this structure:
    {
      "verses": ["fully formatted verse 1 text", "fully formatted verse 2 text", ...],
      "chorus": "chorus text if any, or null",
      "author": "verified author name",
      "tune": "verified tune name",
      "melody": [
        {"pitch": 261.63, "duration": 0.8, "name": "C4"},
        ...
      ]
    }
    
    Ensure the frequencies (pitch in Hz) and durations (in seconds) are musically precise (e.g., A4 = 440Hz, 0.8s for quarter notes, 1.6s for half notes) and correspond faithfully to the traditional meter/notes of the verified tune.
    
    Provide only the raw JSON. Do not write markdown wrapping.`;

    const text = await callGemini(prompt, "application/json");
    return parseRobustJson(text);
  } catch (error) {
    console.error("verifyAndCompleteLyrics Error:", error);
    return null;
  }
};

