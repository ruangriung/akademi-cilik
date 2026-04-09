import 'dotenv/config';
import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  const { callAI } = await import("./api/_lib/ai.ts");

  app.post("/api/ai/chat", async (req, res) => {
    try {
      const { question, context } = req.body;
      const system = `Kamu adalah Guru SD yang ramah dan menyenangkan. Jawab pertanyaan siswa tentang materi: ${context}. Gunakan bahasa yang sangat sederhana, analogi yang mudah dipahami anak, dan selalu berikan pujian.`;
      const reply = await callAI(system, question);
      res.json({ reply });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Gagal memuat jawaban AI" });
    }
  });

  app.post("/api/ai/story", async (req, res) => {
    try {
      const { topic } = req.body;
      const system = `Kamu adalah pendongeng anak yang hebat. Buatkan cerita pendek (maksimal 3 paragraf) yang menyenangkan dan edukatif tentang: ${topic}.`;
      const story = await callAI(system, `Ceritakan kisahnya!`);
      res.json({ story });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Gagal memuat cerita AI" });
    }
  });

  app.post("/api/ai/quiz", async (req, res) => {
    try {
      const { topic } = req.body;
      const system = `Buatkan 3 soal kuis pilihan ganda untuk anak SD tentang: ${topic}. Kembalikan HANYA dalam format JSON dengan struktur yang valid: { "questions": [ { "question": "...", "options": ["A", "B", "C", "D"], "correctAnswer": 0, "explanation": "..." } ] }`;
      const result = await callAI(system, `Buat kuis sekarang.`, true);
      
      let parsed;
      try {
        parsed = JSON.parse(result);
      } catch (parseErr) {
        // Fallback regex extraction if AI wraps in markdown
        const match = result.match(/\{[\s\S]*\}/);
        if (match) {
          parsed = JSON.parse(match[0]);
        } else {
          throw new Error("Invalid JSON format");
        }
      }
      res.json(parsed);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Gagal memuat kuis AI" });
    }
  });

  app.post("/api/ai/essay", async (req, res) => {
    try {
      const { topic, answer } = req.body;
      const system = `Kamu adalah Guru SD. Siswa menjawab pertanyaan esai tentang: ${topic}. Jawaban siswa: "${answer}". Berikan feedback positif, pujian, dan koreksi lembut jika perlu dalam 2-3 kalimat.`;
      const feedback = await callAI(system, `Berikan nilai dan feedback.`);
      res.json({ feedback });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Gagal memuat feedback AI" });
    }
  });

  app.post("/api/ai/fact", async (req, res) => {
    try {
      const { topic } = req.body;
      const system = `Kamu adalah Guru SD yang pintar dan menyenangkan. Berikan 1 fakta unik, menarik, dan mengejutkan (Tahukah Kamu?) tentang: ${topic}. Gunakan bahasa yang sangat mudah dipahami anak SD, maksimal 2 kalimat.`;
      const fact = await callAI(system, `Berikan fakta uniknya!`);
      res.json({ fact });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Gagal memuat fakta AI" });
    }
  });

  app.post("/api/ai/example", async (req, res) => {
    try {
      const { topic } = req.body;
      const system = `Berikan 3 contoh singkat dan mudah dipahami untuk anak SD tentang: ${topic}.`;
      const example = await callAI(system, `Beri contoh lain.`);
      res.json({ example });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Gagal memuat contoh AI" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
