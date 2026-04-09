export const mathModules = [
  {
    id: 'penambahan',
    title: 'Penambahan',
    icon: 'Plus',
    color: 'bg-rose-400',
    textColor: 'text-rose-600',
    verseLabel: 'Konsep Dasar',
    verse: 'Apa itu Penambahan?',
    arabic: '1 + 1 = 2',
    translation: 'Penambahan adalah menggabungkan dua angka atau lebih menjadi satu jumlah yang lebih besar.',
    explanationLabel: 'Contoh Sehari-hari',
    explanation: 'Ketika kamu memiliki 2 apel dan temanmu memberimu 3 apel lagi, kamu sekarang memiliki 5 apel. Itulah penambahan!',
    fact: 'Simbol tambah (+) pertama kali digunakan pada abad ke-15 di Eropa.'
  },
  {
    id: 'pengurangan',
    title: 'Pengurangan',
    icon: 'Minus',
    color: 'bg-blue-400',
    textColor: 'text-blue-600',
    verseLabel: 'Konsep Dasar',
    verse: 'Apa itu Pengurangan?',
    arabic: '5 - 2 = 3',
    translation: 'Pengurangan adalah mengambil sejumlah angka dari angka lain sehingga jumlahnya menjadi lebih sedikit.',
    explanationLabel: 'Contoh Sehari-hari',
    explanation: 'Jika kamu punya 5 permen dan kamu memakan 2 permen, sisa permenmu adalah 3. Itulah pengurangan!',
    fact: 'Pengurangan adalah kebalikan dari penambahan.'
  },
  {
    id: 'perkalian',
    title: 'Perkalian',
    icon: 'X',
    color: 'bg-emerald-400',
    textColor: 'text-emerald-600',
    verseLabel: 'Konsep Dasar',
    verse: 'Apa itu Perkalian?',
    arabic: '3 × 4 = 12',
    translation: 'Perkalian adalah penambahan berulang dari angka yang sama.',
    explanationLabel: 'Contoh Sehari-hari',
    explanation: 'Jika ada 3 kotak dan setiap kotak berisi 4 donat, maka total donat adalah 4 + 4 + 4 = 12 donat.',
    fact: 'Simbol kali (×) diperkenalkan oleh matematikawan Inggris William Oughtred pada tahun 1631.'
  },
  {
    id: 'pembagian',
    title: 'Pembagian',
    icon: 'Divide',
    color: 'bg-purple-400',
    textColor: 'text-purple-600',
    verseLabel: 'Konsep Dasar',
    verse: 'Apa itu Pembagian?',
    arabic: '10 ÷ 2 = 5',
    translation: 'Pembagian adalah membagi sesuatu menjadi bagian-bagian yang sama rata.',
    explanationLabel: 'Contoh Sehari-hari',
    explanation: 'Jika kamu punya 10 potong cokelat dan ingin membaginya sama rata kepada 2 temanmu, masing-masing akan mendapat 5 potong.',
    fact: 'Pembagian adalah kebalikan dari perkalian. Ingat, tidak ada angka yang bisa dibagi dengan nol!'
  },
  {
    id: 'pecahan',
    title: 'Pecahan',
    icon: 'PieChart',
    color: 'bg-orange-400',
    textColor: 'text-orange-600',
    verseLabel: 'Konsep Dasar',
    verse: 'Apa itu Pecahan?',
    arabic: '1/2, 1/4, 3/4',
    translation: 'Pecahan adalah bagian dari keseluruhan. Angka di atas disebut pembilang, angka di bawah disebut penyebut.',
    explanationLabel: 'Contoh Sehari-hari',
    explanation: 'Jika kamu memotong sebuah pizza menjadi 4 bagian sama besar dan memakan 1 bagian, kamu memakan 1/4 (seperempat) pizza.',
    fact: 'Orang Mesir kuno sudah menggunakan pecahan sejak ribuan tahun yang lalu!'
  },
  {
    id: 'bangun-datar',
    title: 'Bangun Datar',
    icon: 'Square',
    color: 'bg-teal-400',
    textColor: 'text-teal-600',
    verseLabel: 'Konsep Dasar',
    verse: 'Mengenal Bentuk 2D',
    arabic: 'Persegi, Segitiga, Lingkaran',
    translation: 'Bangun datar adalah bangun dua dimensi yang memiliki panjang dan lebar, tapi tidak memiliki ketebalan.',
    explanationLabel: 'Contoh Sehari-hari',
    explanation: 'Permukaan meja berbentuk persegi panjang, roda sepeda berbentuk lingkaran, dan rambu lalu lintas ada yang berbentuk segitiga.',
    fact: 'Lingkaran adalah bangun datar yang tidak memiliki sudut sama sekali.'
  },
  {
    id: 'bangun-ruang',
    title: 'Bangun Ruang',
    icon: 'Box',
    color: 'bg-indigo-400',
    textColor: 'text-indigo-600',
    verseLabel: 'Konsep Dasar',
    verse: 'Mengenal Bentuk 3D',
    arabic: 'Kubus, Balok, Bola',
    translation: 'Bangun ruang adalah bangun tiga dimensi yang memiliki ruang atau volume di dalamnya.',
    explanationLabel: 'Contoh Sehari-hari',
    explanation: 'Dadu adalah contoh kubus, lemari es adalah balok, dan bola basket adalah contoh bangun ruang bola.',
    fact: 'Piramida di Mesir adalah salah satu contoh bangun ruang limas raksasa!'
  }
];

export const mathQuizQuestions = [
  {
    question: 'Berapakah hasil dari 7 + 5?',
    options: ['11', '12', '13', '14'],
    answer: 1
  },
  {
    question: 'Jika kamu punya 15 kelereng dan memberikan 6 kepada temanmu, sisa kelerengmu adalah...',
    options: ['8', '9', '10', '11'],
    answer: 1
  },
  {
    question: 'Berapakah hasil dari 6 × 4?',
    options: ['20', '22', '24', '26'],
    answer: 2
  },
  {
    question: 'Ada 20 apel yang akan dibagikan kepada 4 anak. Berapa apel yang didapat setiap anak?',
    options: ['4', '5', '6', '7'],
    answer: 1
  },
  {
    question: 'Operasi matematika apa yang merupakan kebalikan dari perkalian?',
    options: ['Penambahan', 'Pengurangan', 'Pembagian', 'Pecahan'],
    answer: 2
  },
  {
    question: 'Jika sebuah kue dipotong menjadi 2 bagian sama besar, satu bagiannya disebut...',
    options: ['Seperempat (1/4)', 'Setengah (1/2)', 'Sepertiga (1/3)', 'Satu (1)'],
    answer: 1
  },
  {
    question: 'Bangun datar yang tidak memiliki sudut sama sekali adalah...',
    options: ['Persegi', 'Segitiga', 'Lingkaran', 'Layang-layang'],
    answer: 2
  }
];
