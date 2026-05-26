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

    for (const model of modelsToTry) {
      try {
        console.log(`[Proxy] Trying model ${model} for request...`);
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
          res.json({ text: textOutput });
          return;
        } else {
          throw new Error("Empty text output returned.");
        }
      } catch (err: any) {
        console.error(`[Proxy] Model ${model} failed:`, err);
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
          break; // Don't keep hammering if the key is bad
        }
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
