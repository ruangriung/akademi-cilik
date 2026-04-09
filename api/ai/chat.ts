import { VercelRequest, VercelResponse } from '@vercel/node';
import { callAI } from '../_lib/ai.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { question, context } = req.body;
    const system = `Kamu adalah Guru SD yang ramah dan menyenangkan. Jawab pertanyaan siswa tentang materi: ${context}. Gunakan bahasa yang sangat sederhana, analogi yang mudah dipahami anak, dan selalu berikan pujian. JANGAN gunakan format markdown seperti **teks** atau simbol #. Gunakan teks biasa saja agar mudah dibaca anak-anak.`;
    const reply = await callAI(system, question);
    res.json({ reply });
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: e.message || "Gagal memuat jawaban AI" });
  }
}
