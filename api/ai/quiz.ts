import { VercelRequest, VercelResponse } from '@vercel/node';
import { callAI } from '../../src/lib/ai';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { topic } = req.body;
    const system = `Buatkan 3 soal kuis pilihan ganda untuk anak SD tentang: ${topic}. Kembalikan HANYA dalam format JSON dengan struktur yang valid: { "questions": [ { "question": "...", "options": ["A", "B", "C", "D"], "correctAnswer": 0, "explanation": "..." } ] }`;
    const result = await callAI(system, `Buat kuis sekarang.`, true);
    
    let parsed;
    try {
      parsed = JSON.parse(result);
    } catch (parseErr) {
      const match = result.match(/\{[\s\S]*\}/);
      if (match) {
        parsed = JSON.parse(match[0]);
      } else {
        throw new Error("Invalid JSON format from AI");
      }
    }
    res.json(parsed);
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: e.message || "Gagal memuat kuis AI" });
  }
}
