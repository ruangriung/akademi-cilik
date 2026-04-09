import { VercelRequest, VercelResponse } from '@vercel/node';
import { callAI } from '../../src/lib/ai';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { topic } = req.body;
    const system = `Berikan 3 contoh singkat dan mudah dipahami untuk anak SD tentang: ${topic}.`;
    const example = await callAI(system, `Beri contoh lain.`);
    res.json({ example });
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: e.message || "Gagal memuat contoh AI" });
  }
}
