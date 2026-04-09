# 🎓 Akademi Cilik

Akademi Cilik adalah aplikasi web edukasi interaktif berbasis React dan TypeScript. Aplikasi ini menyediakan modul pembelajaran komprehensif dan kuis untuk 9 mata pelajaran: Energi & Al-Qur'an, Matematika, IPA, IPS, Sejarah, Bahasa Indonesia, Bahasa Inggris, Tajwid, dan Komputer Dasar.

## ✨ Fitur Utama

- **📚 63 Modul Pembelajaran Interaktif:** Materi yang mudah dipahami dilengkapi dengan ikon dan penjelasan menarik.
- **🧠 Kuis Evaluasi:** Tersedia di setiap akhir pelajaran untuk menguji pemahaman anak.
- **🔍 Pencarian Global:** Fitur pencarian cerdas untuk menemukan modul, materi, atau kata kunci dengan cepat.
- **🧭 Navigasi Cepat:** Bilah navigasi sekunder untuk berpindah antar mata pelajaran tanpa harus kembali ke menu utama.
- **💾 Penyimpanan Progres Lokal:** Menyimpan riwayat belajar dan skor kuis secara otomatis menggunakan *Local Storage*.
- **🎨 UI/UX Ramah Anak:** Desain antarmuka yang ceria, responsif, dengan animasi halus menggunakan Framer Motion dan Tailwind CSS.

## 🛠️ Teknologi yang Digunakan

Aplikasi ini dibangun menggunakan teknologi web modern:

- **[React 19](https://react.dev/)** - Library UI
- **[TypeScript](https://www.typescriptlang.org/)** - Bahasa pemrograman (Static Typing)
- **[Vite](https://vitejs.dev/)** - Build tool & Development server yang sangat cepat
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework CSS utillity-first untuk styling
- **[Motion (Framer Motion)](https://motion.dev/)** - Library animasi untuk React
- **[Lucide React](https://lucide.dev/)** - Kumpulan ikon SVG yang indah

## 🚀 Cara Menjalankan di Komputer Lokal (Local Development)

Ikuti langkah-langkah berikut untuk menjalankan aplikasi ini di komputer Anda:

### Prasyarat
Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi 18 atau lebih baru) di komputer Anda.

### Instalasi

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/username-anda/akademi-cilik.git
   cd akademi-cilik
   ```

2. **Instal dependensi (paket yang dibutuhkan):**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```

4. **Buka aplikasi:**
   Buka browser Anda dan kunjungi URL yang muncul di terminal (biasanya `http://localhost:5173` atau `http://localhost:3000`).

## 📂 Struktur Folder Utama

- `src/App.tsx`: Komponen utama aplikasi yang mengatur navigasi (routing manual) dan state progres belajar.
- `src/components/`: Berisi komponen-komponen UI yang dapat digunakan kembali (`Home.tsx`, `ModuleDetail.tsx`, `Quiz.tsx`).
- `src/*Data.ts`: File-file data yang berisi konten materi dan pertanyaan kuis untuk masing-masing mata pelajaran (misal: `mathData.ts`, `tajwidData.ts`, `computerData.ts`).

## 🤝 Kontribusi

Kontribusi selalu diterima! Jika Anda ingin menambahkan modul pelajaran baru, memperbaiki bug, atau meningkatkan fitur, silakan buat *Pull Request* atau buka *Issue* baru.

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE). Anda bebas menggunakan, memodifikasi, dan mendistribusikan kode ini.
