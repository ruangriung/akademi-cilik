export const tajwidModules = [
  {
    id: 'idzhar-iqlab',
    title: 'Idzhar & Iqlab',
    icon: 'BookOpen',
    color: 'bg-red-500',
    textColor: 'text-red-700',
    verseLabel: 'Hukum Tajwid',
    verse: 'Nun Sukun & Tanwin',
    arabic: 'نْ / ً ٍ ٌ',
    translation: 'Idzhar berarti jelas, Iqlab berarti mengganti menjadi mim.',
    explanationLabel: 'Penjelasan',
    explanation: 'Idzhar Halqi dibaca jelas tanpa dengung (huruf: ء هـ ع ح غ خ). Iqlab mengganti bunyi Nun menjadi Mim + dengung (huruf: ب).',
    fact: 'Idzhar keluar dari tenggorokan, sedangkan Iqlab merapatkan bibir!'
  },
  {
    id: 'idgham-ikhfa',
    title: 'Idgham & Ikhfa',
    icon: 'Wind',
    color: 'bg-orange-500',
    textColor: 'text-orange-700',
    verseLabel: 'Hukum Tajwid',
    verse: 'Nun Sukun & Tanwin',
    arabic: 'نْ / ً ٍ ٌ',
    translation: 'Idgham berarti melebur, Ikhfa berarti menyamarkan.',
    explanationLabel: 'Penjelasan',
    explanation: 'Idgham Bighunnah dilebur dengan dengung (ي ن م و), Bilaghunnah tanpa dengung (ل ر). Ikhfa Haqiqi dibaca samar antara Idzhar dan Idgham + dengung (15 huruf).',
    fact: 'Pengecualian Idgham Bighunnah dalam 1 kata disebut Idzhar Mutlaq, contohnya الدُّنْيَا (Ad-Dunya) dibaca jelas!'
  },
  {
    id: 'mim-sukun',
    title: 'Hukum Mim Sukun',
    icon: 'MessageCircle',
    color: 'bg-blue-500',
    textColor: 'text-blue-700',
    verseLabel: 'Hukum Tajwid',
    verse: 'Mim Mati',
    arabic: 'مْ',
    translation: 'Terbagi menjadi Ikhfa Syafawi, Idgham Mimi, dan Idzhar Syafawi.',
    explanationLabel: 'Penjelasan',
    explanation: 'Ikhfa Syafawi (bertemu ب) dibaca samar di bibir. Idgham Mimi (bertemu م) dimasukkan dengan dengung. Idzhar Syafawi (bertemu selain م & ب) dibaca jelas dengan bibir tertutup rapat.',
    fact: 'Kata "Syafawi" berasal dari bahasa Arab yang berarti "Bibir", karena huruf Mim keluar dari bibir!'
  },
  {
    id: 'qalqalah',
    title: 'Hukum Qalqalah',
    icon: 'Activity',
    color: 'bg-amber-500',
    textColor: 'text-amber-700',
    verseLabel: 'Hukum Tajwid',
    verse: 'Pantulan Suara',
    arabic: 'ب ج د ط ق',
    translation: 'Qalqalah berarti pantulan suara pada huruf BAJU DI TOKO.',
    explanationLabel: 'Penjelasan',
    explanation: 'Qalqalah Sugra (Kecil) terjadi di tengah kata, pantulannya ringan. Qalqalah Kubra (Besar) terjadi karena waqaf (berhenti) di akhir kata, pantulannya kuat/jelas.',
    fact: 'Huruf Qalqalah disingkat menjadi "BAJU DI TOKO" (Ba, Jim, Dal, Tha, Qaf) agar mudah diingat!'
  },
  {
    id: 'alif-lam',
    title: 'Hukum Alif Lam',
    icon: 'Moon',
    color: 'bg-slate-500',
    textColor: 'text-slate-700',
    verseLabel: 'Hukum Tajwid',
    verse: 'Al-Ta\'rif',
    arabic: 'ال',
    translation: 'Cara membaca awalan \'Al\' pada kata benda.',
    explanationLabel: 'Penjelasan',
    explanation: 'Al-Qamariyah dibaca jelas (seperti melihat Bulan). Al-Syamsiyah dilebur ke huruf berikutnya (seperti Bintang hilang saat Matahari terbit).',
    fact: 'Huruf Syamsiyah selalu ditandai dengan tanda Tasydid (sydah) setelah huruf Alif Lam!'
  },
  {
    id: 'mad-thabii',
    title: 'Mad Thabi\'i',
    icon: 'Maximize2',
    color: 'bg-rose-500',
    textColor: 'text-rose-700',
    verseLabel: 'Hukum Tajwid',
    verse: 'Mad Asli',
    arabic: 'ـَ ا , ـِ يْ , ـُ وْ',
    translation: 'Memanjangkan bunyi huruf selama 2 harakat.',
    explanationLabel: 'Penjelasan',
    explanation: 'Terjadi apabila Fathah bertemu Alif, Kasrah bertemu Ya Sukun, atau Dhommah bertemu Waw Sukun. Panjangnya 2 harakat (1 ayunan).',
    fact: 'Mad artinya "panjang" dan Thabi\'i artinya "alami" atau "biasa". Ini adalah dasar dari semua hukum Mad!'
  },
  {
    id: 'mad-fari',
    title: 'Mad Far\'i',
    icon: 'Layers',
    color: 'bg-purple-500',
    textColor: 'text-purple-700',
    verseLabel: 'Hukum Tajwid',
    verse: 'Cabang Mad',
    arabic: 'جَاءَ , إِنَّا أَعْطَيْنَاكَ',
    translation: 'Mad cabang yang panjangnya lebih dari 2 harakat.',
    explanationLabel: 'Penjelasan',
    explanation: 'Mad Wajib Muttashil (bertemu Hamzah dalam 1 kata). Mad Jaiz Munfashil (bertemu Hamzah beda kata). Mad \'Aridh Lissukun (berhenti di akhir ayat).',
    fact: 'Tanda bendera (~) di atas huruf hijaiyah biasanya menunjukkan bahwa huruf tersebut harus dibaca panjang lebih dari 2 harakat!'
  }
];

export const tajwidQuizQuestions = [
  {
    question: 'Hukum bacaan apa yang terjadi jika Nun Sukun bertemu huruf Ba (ب)?',
    options: ['Idzhar', 'Iqlab', 'Ikhfa', 'Idgham'],
    answer: 1
  },
  {
    question: 'Huruf Qalqalah terdiri dari 5 huruf yang biasa disingkat menjadi...',
    options: ['BAJU DI TOKO', 'YANMU', 'ALIF LAM', 'MIM NUN'],
    answer: 0
  },
  {
    question: 'Berapa harakat panjang bacaan Mad Thabi\'i?',
    options: ['1 Harakat', '2 Harakat', '4 Harakat', '6 Harakat'],
    answer: 1
  },
  {
    question: 'Jika Alif Lam bertemu huruf Qamariyah, maka cara membacanya adalah...',
    options: ['Dileburkan', 'Disamarkan', 'Jelas', 'Didengungkan'],
    answer: 2
  },
  {
    question: 'Hukum Mim Sukun bertemu dengan huruf Mim (م) disebut...',
    options: ['Ikhfa Syafawi', 'Idzhar Syafawi', 'Idgham Mimi', 'Iqlab'],
    answer: 2
  },
  {
    question: 'Qalqalah Kubra (Besar) terjadi apabila huruf Qalqalah mati karena...',
    options: ['Di awal kata', 'Di tengah kata', 'Waqaf (berhenti)', 'Bertemu tasydid'],
    answer: 2
  },
  {
    question: 'Mad Wajib Muttashil terjadi apabila Mad Thabi\'i bertemu Hamzah dalam...',
    options: ['1 kata', 'Beda kata', 'Awal ayat', 'Akhir ayat'],
    answer: 0
  }
];
