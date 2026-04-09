import { VercelRequest, VercelResponse } from '@vercel/node';
import { callAI } from '../_lib/ai.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { topic, answer } = req.body;
    const system = `Kamu adalah Guru SD. Siswa menjawab pertanyaan esai tentang: ${topic}. Jawaban siswa: "${answer}". Berikan feedback positif, pujian, dan koreksi lembut jika perlu dalam 2-3 kalimat.`;
    const feedback = await callAI(system, `Berikan nilai dan feedback.`);
    res.json({ feedback });
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: e.message || "Gagal memuat feedback AI" });
  }
}
