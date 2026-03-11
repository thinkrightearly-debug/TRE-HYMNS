
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const titles = [
  "A Charge to Keep I Have",
  "A Debtor to Mercy Alone",
  "A Gladsome Hymn of Praise We Sing",
  "A New Heart, Lord, Create in Me",
  "A Pilgrim Through This Lonely World",
  "Above the Clear Blue Sky",
  "According to Thy Gracious Word",
  "All for Jesus, All for Jesus",
  "All Glory Be to God on High",
  "All My Hope on God Is Founded",
  "All Praise to Thee, for Thou, O King Divine",
  "All Praise to Thee, My God, This Night",
  "All the Way My Savior Leads Me",
  "Alleluia! Alleluia! Let the Holy Anthem Rise",
  "Almighty Father, Bless the Word",
  "Almighty Father, Who Dost Give",
  "Ancient of Days, Who Sittest Throned in Glory",
  "And Now, O Father, Mindful of the Love",
  "Angels from the Realms of Glory",
  "Angels, Holy, High and Lowly",
  "Approach, My Soul, the Mercy-Seat",
  "Arm of the Lord, Awake, Awake!",
  "Around the Throne of God in Heaven"
];

async function fetchHymns() {
  const prompt = `For each of the following hymn titles, provide the author, tune, category, and full lyrics (verses and chorus if applicable). 
  Titles: ${titles.join(', ')}.
  Return as a JSON array of objects with fields: title, author, tune, category, chorus, verses.`;

  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: prompt,
    config: { responseMimeType: "application/json" }
  });

  console.log(response.text);
}

fetchHymns();
