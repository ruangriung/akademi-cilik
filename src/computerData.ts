export const computerModules = [
  {
    id: 'apa-itu-komputer',
    title: 'Apa itu Komputer?',
    icon: '💻',
    color: 'bg-indigo-500',
    textColor: 'text-indigo-700',
    verseLabel: 'Dasar Komputer',
    verse: 'Mesin Pintar Pembantu Manusia',
    arabic: 'Komputer adalah alat elektronik yang dapat memproses data.',
    translation: 'Komputer menerima perintah, memprosesnya, dan memberikan hasil.',
    explanationLabel: 'Penjelasan',
    explanation: 'Komputer bisa berupa PC (di meja), laptop (bisa dibawa), tablet, atau bahkan smartphone yang kamu pakai! Komputer membantu kita belajar, bermain, dan berkomunikasi.',
    fact: 'Komputer pertama di dunia bernama ENIAC, ukurannya sangat besar hingga memenuhi satu ruangan penuh!'
  },
  {
    id: 'hardware',
    title: 'Perangkat Keras (Hardware)',
    icon: '🖥️',
    color: 'bg-slate-500',
    textColor: 'text-slate-700',
    verseLabel: 'Bagian Komputer',
    verse: 'Bagian yang Bisa Disentuh',
    arabic: 'Hardware adalah komponen fisik dari komputer.',
    translation: 'Contohnya: Monitor, Keyboard, Mouse, dan CPU.',
    explanationLabel: 'Penjelasan',
    explanation: 'Monitor untuk menampilkan gambar. Keyboard untuk mengetik huruf. Mouse untuk menggerakkan kursor. CPU (Central Processing Unit) adalah otak dari komputer yang berpikir.',
    fact: 'Mouse komputer pertama kali terbuat dari kayu, bukan plastik seperti sekarang!'
  },
  {
    id: 'software',
    title: 'Perangkat Lunak (Software)',
    icon: '💿',
    color: 'bg-sky-500',
    textColor: 'text-sky-700',
    verseLabel: 'Bagian Komputer',
    verse: 'Program di Dalam Komputer',
    arabic: 'Software adalah program atau instruksi yang menjalankan komputer.',
    translation: 'Software tidak bisa disentuh secara fisik.',
    explanationLabel: 'Penjelasan',
    explanation: 'Contoh software adalah sistem operasi (seperti Windows atau Android), aplikasi pengolah kata (Microsoft Word), browser (Google Chrome), dan game yang kamu mainkan.',
    fact: 'Tanpa software, hardware komputer hanyalah benda mati yang tidak bisa melakukan apa-apa.'
  },
  {
    id: 'mengetik',
    title: 'Mengetik Dasar',
    icon: '⌨️',
    color: 'bg-emerald-500',
    textColor: 'text-emerald-700',
    verseLabel: 'Keterampilan',
    verse: 'Mengenal Tombol Keyboard',
    arabic: 'Keyboard memiliki banyak tombol dengan fungsi berbeda.',
    translation: 'Ada tombol huruf, angka, dan tombol khusus.',
    explanationLabel: 'Penjelasan',
    explanation: 'Tombol SPACE (Spasi) untuk memberi jarak. ENTER untuk pindah baris atau menyetujui perintah. BACKSPACE untuk menghapus huruf di sebelah kiri. SHIFT untuk membuat huruf kapital.',
    fact: 'Susunan huruf di keyboard disebut QWERTY, diambil dari 6 huruf pertama di baris paling atas kiri.'
  },
  {
    id: 'internet',
    title: 'Mengenal Internet',
    icon: '🌐',
    color: 'bg-blue-500',
    textColor: 'text-blue-700',
    verseLabel: 'Jaringan',
    verse: 'Jaringan Komputer Dunia',
    arabic: 'Internet menghubungkan komputer di seluruh dunia.',
    translation: 'Kita bisa mencari informasi apa saja di internet.',
    explanationLabel: 'Penjelasan',
    explanation: 'Dengan internet, kita bisa menonton video, membaca berita, dan mengirim pesan ke teman di negara lain. Kita menggunakan aplikasi bernama Browser (seperti Chrome atau Safari) untuk menjelajahi internet.',
    fact: 'Website pertama di dunia dibuat pada tahun 1991 dan hanya berisi teks tanpa gambar sama sekali!'
  },
  {
    id: 'keamanan-digital',
    title: 'Keamanan di Internet',
    icon: '🛡️',
    color: 'bg-red-500',
    textColor: 'text-red-700',
    verseLabel: 'Keamanan',
    verse: 'Berinternet dengan Aman',
    arabic: 'Kita harus berhati-hati saat menggunakan internet.',
    translation: 'Jangan sembarangan membagikan informasi pribadi.',
    explanationLabel: 'Penjelasan',
    explanation: 'Jangan pernah memberikan nama lengkap, alamat rumah, nomor telepon, atau password kepada orang yang tidak dikenal di internet. Jika ada yang mencurigakan, segera beritahu orang tua atau guru.',
    fact: 'Password yang kuat ibarat kunci rumah yang kokoh. Gunakan campuran huruf, angka, dan simbol agar tidak mudah ditebak.'
  },
  {
    id: 'algoritma',
    title: 'Berpikir Komputasional',
    icon: '🧩',
    color: 'bg-purple-500',
    textColor: 'text-purple-700',
    verseLabel: 'Logika',
    verse: 'Langkah demi Langkah',
    arabic: 'Algoritma adalah urutan langkah untuk menyelesaikan masalah.',
    translation: 'Komputer bekerja berdasarkan algoritma yang dibuat manusia.',
    explanationLabel: 'Penjelasan',
    explanation: 'Berpikir komputasional berarti memecahkan masalah besar menjadi langkah-langkah kecil. Contoh algoritma membuat teh: 1. Siapkan gelas, 2. Masukkan teh celup, 3. Tuang air panas, 4. Tambahkan gula, 5. Aduk.',
    fact: 'Setiap game yang kamu mainkan memiliki ribuan baris algoritma agar karakternya bisa bergerak dan melompat!'
  }
];

export const computerQuizQuestions = [
  {
    question: 'Bagian komputer yang berfungsi sebagai "otak" untuk berpikir dan memproses data adalah...',
    options: ['Monitor', 'Mouse', 'Keyboard', 'CPU'],
    answer: 3
  },
  {
    question: 'Program atau aplikasi yang ada di dalam komputer dan tidak bisa disentuh secara fisik disebut...',
    options: ['Hardware', 'Software', 'Brainware', 'Malware'],
    answer: 1
  },
  {
    question: 'Tombol pada keyboard yang digunakan untuk menghapus huruf di sebelah kiri adalah...',
    options: ['Enter', 'Space', 'Shift', 'Backspace'],
    answer: 3
  },
  {
    question: 'Susunan huruf standar pada keyboard komputer dikenal dengan nama...',
    options: ['ABCDEF', 'QWERTY', 'ASDFGH', 'ZXCVBN'],
    answer: 1
  },
  {
    question: 'Aplikasi yang digunakan untuk menjelajahi internet (seperti Google Chrome) disebut...',
    options: ['Browser', 'Sistem Operasi', 'Antivirus', 'Hardware'],
    answer: 0
  },
  {
    question: 'Apa yang TIDAK BOLEH kita bagikan kepada orang asing di internet?',
    options: ['Cerita lucu', 'Alamat rumah dan password', 'Hobi', 'Warna kesukaan'],
    answer: 1
  },
  {
    question: 'Urutan langkah-langkah yang logis untuk menyelesaikan suatu masalah disebut...',
    options: ['Program', 'Hardware', 'Algoritma', 'Internet'],
    answer: 2
  }
];
