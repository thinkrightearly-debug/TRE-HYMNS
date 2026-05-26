import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/gemini/generate", async (req, res) => {
    const { prompt, responseMimeType, customApiKey } = req.body;

    if (!prompt) {
       res.status(400).json({ error: "Prompt is required." });
       return;
    }

    // Resolve API key
    const apiKey = customApiKey || process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || process.env.VITE_API_KEY || process.env.API_KEY || "";
    
    if (!apiKey) {
       res.status(400).json({ error: "Gemini API key is not configured on the server. Please check your system setting or provide a custom key." });
       return;
    }

    const modelsToTry = [
      "gemini-3.5-flash",
      "gemini-3.1-flash-lite",
      "gemini-flash-latest"
    ];

    let lastError: any = null;

    // Helper to identify retryable transient errors (503 Service Unavailable, 429 Rate Limit/Quota)
    const isRetryableError = (err: any): boolean => {
      try {
        const errStr = String(err?.message || JSON.stringify(err) || "").toLowerCase();
        
        // Check traditional status/code properties
        const code = err?.status || err?.statusCode || err?.code || (err?.error?.code);
        if (code === 503 || code === 429) {
          return true;
        }
        
        // Check message keywords
        if (
          errStr.includes("503") ||
          errStr.includes("429") ||
          errStr.includes("unavailable") ||
          errStr.includes("resource_exhausted") ||
          errStr.includes("high demand") ||
          errStr.includes("spikes in demand") ||
          errStr.includes("temporary") ||
          errStr.includes("overloaded") ||
          errStr.includes("rate limit") ||
          errStr.includes("too many requests") ||
          errStr.includes("quota")
        ) {
          return true;
        }
      } catch (e) {
        // Safer recovery
      }
      return false;
    };

    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    for (const model of modelsToTry) {
      const maxAttempts = 3;
      for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
          console.log(`[Proxy] Trying model ${model} (Attempt ${attempt}/${maxAttempts}) for request...`);
          const ai = new GoogleGenAI({
            apiKey,
            httpOptions: {
              headers: {
                "User-Agent": "aistudio-build",
              }
            }
          });

          const response = await ai.models.generateContent({
            model,
            contents: prompt,
            config: responseMimeType ? {
              responseMimeType
            } : undefined
          });

          const textOutput = response.text;
          if (textOutput) {
            if (attempt > 1) {
              console.log(`[Proxy] Succeeded on attempt ${attempt} for model ${model}!`);
            }
            res.json({ text: textOutput });
            return;
          } else {
            throw new Error("Empty text output returned.");
          }
        } catch (err: any) {
          console.error(`[Proxy] Model ${model} (Attempt ${attempt}/${maxAttempts}) failed:`, err);
          lastError = err;

          // Fast-fail if the issue is authentication or authorization (403/401)
          const errorStr = String(err?.message || "").toLowerCase();
          if (
            errorStr.includes("api key") || 
            errorStr.includes("key is not valid") || 
            errorStr.includes("403") || 
            errorStr.includes("401") ||
            errorStr.includes("unauthorized") ||
            errorStr.includes("permission denied")
          ) {
            console.log(`[Proxy] Auth/Permission error detected. Fast-failing...`);
            break; // Don't try other attempts or other models for bad keys
          }

          // If this is the last attempt or it is NOT a retryable error, break attempt loop and try next model
          if (attempt === maxAttempts || !isRetryableError(err)) {
            console.log(`[Proxy] Error is not retryable or max attempts reached for ${model}. Moving to fallback...`);
            break;
          }

          // Calculate backoff delay with jitter (Attempt 1: ~300ms, Attempt 2: ~800ms)
          const baseDelay = attempt === 1 ? 300 : 800;
          const jitter = Math.random() * (attempt === 1 ? 200 : 400);
          const backoffDelay = baseDelay + jitter;
          
          console.log(`[Proxy] Transient/Retryable error detected (e.g. 503/429). Retrying ${model} in ${Math.round(backoffDelay)}ms...`);
          await sleep(backoffDelay);
        }
      }

      // If the broken loop was due to auth/permission error, stop the model loop entirely
      const lastErrorStr = String(lastError?.message || "").toLowerCase();
      if (
        lastErrorStr.includes("api key") || 
        lastErrorStr.includes("key is not valid") || 
        lastErrorStr.includes("403") || 
        lastErrorStr.includes("401") ||
        lastErrorStr.includes("unauthorized") ||
        lastErrorStr.includes("permission denied")
      ) {
        break;
      }
    }

    res.status(500).json({ 
      error: lastError?.message || "All Gemini fallback models failed.",
      details: String(lastError)
    });
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
