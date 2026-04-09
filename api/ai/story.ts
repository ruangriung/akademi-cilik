import { VercelRequest, VercelResponse } from '@vercel/node';
import { callAI } from '../../src/lib/ai';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { topic } = req.body;
    const system = `Kamu adalah pendongeng anak yang hebat. Buatkan cerita pendek (maksimal 3 paragraf) yang menyenangkan dan edukatif tentang: ${topic}.`;
    const story = await callAI(system, `Ceritakan kisahnya!`);
    res.json({ story });
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: e.message || "Gagal memuat cerita AI" });
  }
}
