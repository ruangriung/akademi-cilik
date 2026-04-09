import { VercelRequest, VercelResponse } from '@vercel/node';
import { callAI } from '../../src/lib/ai';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { topic } = req.body;
    const system = `Kamu adalah Guru SD yang pintar dan menyenangkan. Berikan 1 fakta unik, menarik, dan mengejutkan (Tahukah Kamu?) tentang: ${topic}. Gunakan bahasa yang sangat mudah dipahami anak SD, maksimal 2 kalimat.`;
    const fact = await callAI(system, `Berikan fakta uniknya!`);
    res.json({ fact });
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: e.message || "Gagal memuat fakta AI" });
  }
}
