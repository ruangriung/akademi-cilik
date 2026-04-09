import { VercelRequest, VercelResponse } from '@vercel/node';
import { callAI } from '../_lib/ai.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { topic } = req.body;
    const nonce = Math.random().toString(36).substring(7);
    const system = `Kamu adalah Guru SD yang pintar dan menyenangkan. Berikan 1 fakta unik, menarik, dan mengejutkan (Tahukah Kamu?) tentang: ${topic}. 
    PENTING: Berikan fakta yang berbeda dan acak setiap kali diminta. Jangan memberikan fakta yang sama berulang kali.
    Gunakan bahasa yang sangat mudah dipahami anak SD, maksimal 2 kalimat. JANGAN gunakan format markdown seperti **teks** atau simbol #. Gunakan teks biasa saja agar mudah dibaca anak-anak. [ref: ${nonce}]`;
    const fact = await callAI(system, `Berikan fakta unik yang baru dan berbeda!`);
    res.json({ fact });
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: e.message || "Gagal memuat fakta AI" });
  }
}
