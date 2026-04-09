import { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { ModuleDetail } from './components/ModuleDetail';
import { Quiz } from './components/Quiz';
import { modules as energyModules, quizQuestions as energyQuiz } from './data';
import { mathModules, mathQuizQuestions } from './mathData';
import { scienceModules, scienceQuizQuestions } from './scienceData';
import { socialModules, socialQuizQuestions } from './socialData';
import { historyModules, historyQuizQuestions } from './historyData';
import { indonesianModules, indonesianQuizQuestions } from './indonesianData';
import { englishModules, englishQuizQuestions } from './englishData';
import { tajwidModules, tajwidQuizQuestions } from './tajwidData';
import { computerModules, computerQuizQuestions } from './computerData';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calculator, Sparkles, FlaskConical, Globe, Hourglass, BookA, MessageCircle, BookMarked, Monitor, Search } from 'lucide-react';
import * as Icons from 'lucide-react';
import { SEO } from './components/SEO';

export type ViewState = 'subject_select' | 'home' | 'module' | 'quiz';
export type Subject = 'energy' | 'math' | 'science' | 'social' | 'history' | 'indonesian' | 'english' | 'tajwid' | 'computer';

export default function App() {
  const [view, setView] = useState<ViewState>('subject_select');
  const [subject, setSubject] = useState<Subject>('energy');
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Dynamic SEO Title
  const getPageTitle = () => {
    if (view === 'module' && activeModule) return activeModule.title;
    if (view === 'quiz') return `Kuis ${subjectData[subject].title.replace('!', '')}`;
    if (view === 'home') return subjectData[subject].title.replace('!', '');
    return undefined;
  };

  // Auto-scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view, activeModuleId]);

  // Helper to create state with localStorage
  const usePersistentState = <T,>(key: string, initialValue: T) => {
    const [state, setState] = useState<T>(() => {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState] as const;
  };

  const [completedEnergyModules, setCompletedEnergyModules] = usePersistentState<string[]>('completedEnergyModules', []);
  const [energyQuizScore, setEnergyQuizScore] = usePersistentState<number | null>('energyQuizScore', null);

  const [completedMathModules, setCompletedMathModules] = usePersistentState<string[]>('completedMathModules', []);
  const [mathQuizScore, setMathQuizScore] = usePersistentState<number | null>('mathQuizScore', null);

  const [completedScienceModules, setCompletedScienceModules] = usePersistentState<string[]>('completedScienceModules', []);
  const [scienceQuizScore, setScienceQuizScore] = usePersistentState<number | null>('scienceQuizScore', null);

  const [completedSocialModules, setCompletedSocialModules] = usePersistentState<string[]>('completedSocialModules', []);
  const [socialQuizScore, setSocialQuizScore] = usePersistentState<number | null>('socialQuizScore', null);

  const [completedHistoryModules, setCompletedHistoryModules] = usePersistentState<string[]>('completedHistoryModules', []);
  const [historyQuizScore, setHistoryQuizScore] = usePersistentState<number | null>('historyQuizScore', null);

  const [completedIndonesianModules, setCompletedIndonesianModules] = usePersistentState<string[]>('completedIndonesianModules', []);
  const [indonesianQuizScore, setIndonesianQuizScore] = usePersistentState<number | null>('indonesianQuizScore', null);

  const [completedEnglishModules, setCompletedEnglishModules] = usePersistentState<string[]>('completedEnglishModules', []);
  const [englishQuizScore, setEnglishQuizScore] = usePersistentState<number | null>('englishQuizScore', null);

  const [completedTajwidModules, setCompletedTajwidModules] = usePersistentState<string[]>('completedTajwidModules', []);
  const [tajwidQuizScore, setTajwidQuizScore] = usePersistentState<number | null>('tajwidQuizScore', null);

  const [completedComputerModules, setCompletedComputerModules] = usePersistentState<string[]>('completedComputerModules', []);
  const [computerQuizScore, setComputerQuizScore] = usePersistentState<number | null>('computerQuizScore', null);

  const handleModuleComplete = (id: string) => {
    switch (subject) {
      case 'energy':
        if (!completedEnergyModules.includes(id)) setCompletedEnergyModules([...completedEnergyModules, id]);
        break;
      case 'math':
        if (!completedMathModules.includes(id)) setCompletedMathModules([...completedMathModules, id]);
        break;
      case 'science':
        if (!completedScienceModules.includes(id)) setCompletedScienceModules([...completedScienceModules, id]);
        break;
      case 'social':
        if (!completedSocialModules.includes(id)) setCompletedSocialModules([...completedSocialModules, id]);
        break;
      case 'history':
        if (!completedHistoryModules.includes(id)) setCompletedHistoryModules([...completedHistoryModules, id]);
        break;
      case 'indonesian':
        if (!completedIndonesianModules.includes(id)) setCompletedIndonesianModules([...completedIndonesianModules, id]);
        break;
      case 'english':
        if (!completedEnglishModules.includes(id)) setCompletedEnglishModules([...completedEnglishModules, id]);
        break;
      case 'tajwid':
        if (!completedTajwidModules.includes(id)) setCompletedTajwidModules([...completedTajwidModules, id]);
        break;
      case 'computer':
        if (!completedComputerModules.includes(id)) setCompletedComputerModules([...completedComputerModules, id]);
        break;
    }
  };

  const handleQuizComplete = (score: number) => {
    switch (subject) {
      case 'energy':
        if (energyQuizScore === null || score > energyQuizScore) setEnergyQuizScore(score);
        break;
      case 'math':
        if (mathQuizScore === null || score > mathQuizScore) setMathQuizScore(score);
        break;
      case 'science':
        if (scienceQuizScore === null || score > scienceQuizScore) setScienceQuizScore(score);
        break;
      case 'social':
        if (socialQuizScore === null || score > socialQuizScore) setSocialQuizScore(score);
        break;
      case 'history':
        if (historyQuizScore === null || score > historyQuizScore) setHistoryQuizScore(score);
        break;
      case 'indonesian':
        if (indonesianQuizScore === null || score > indonesianQuizScore) setIndonesianQuizScore(score);
        break;
      case 'english':
        if (englishQuizScore === null || score > englishQuizScore) setEnglishQuizScore(score);
        break;
      case 'tajwid':
        if (tajwidQuizScore === null || score > tajwidQuizScore) setTajwidQuizScore(score);
        break;
      case 'computer':
        if (computerQuizScore === null || score > computerQuizScore) setComputerQuizScore(score);
        break;
    }
  };

  const subjectData = {
    energy: { modules: energyModules, quiz: energyQuiz, completed: completedEnergyModules, score: energyQuizScore, title: 'Halo, Sahabat Cilik! 👋', desc: "Mari kita belajar tentang berbagai macam energi yang ada di bumi dan bagaimana Al-Qur'an menceritakannya." },
    math: { modules: mathModules, quiz: mathQuizQuestions, completed: completedMathModules, score: mathQuizScore, title: 'Mari Berhitung! 🔢', desc: "Ayo pelajari operasi matematika dasar agar kamu makin pintar berhitung!" },
    science: { modules: scienceModules, quiz: scienceQuizQuestions, completed: completedScienceModules, score: scienceQuizScore, title: 'Jelajah Alam! 🌿', desc: "Mari kita pelajari rahasia alam semesta, dari tata surya hingga ekosistem di sekitar kita." },
    social: { modules: socialModules, quiz: socialQuizQuestions, completed: completedSocialModules, score: socialQuizScore, title: 'Kenali Duniamu! 🌍', desc: "Ayo pelajari tentang peta, kegiatan ekonomi, dan keberagaman budaya di Indonesia." },
    history: { modules: historyModules, quiz: historyQuizQuestions, completed: completedHistoryModules, score: historyQuizScore, title: 'Mesin Waktu! ⏳', desc: "Mari kita kembali ke masa lalu dan pelajari sejarah bangsa kita yang hebat." },
    indonesian: { modules: indonesianModules, quiz: indonesianQuizQuestions, completed: completedIndonesianModules, score: indonesianQuizScore, title: 'Mari Membaca! 📖', desc: "Ayo pelajari pantun, dongeng, dan cara menulis surat dalam Bahasa Indonesia." },
    english: { modules: englishModules, quiz: englishQuizQuestions, completed: completedEnglishModules, score: englishQuizScore, title: 'Hello Friends! 👋', desc: "Let's learn English together! Mari belajar Bahasa Inggris bersama-sama!" },
    tajwid: { modules: tajwidModules, quiz: tajwidQuizQuestions, completed: completedTajwidModules, score: tajwidQuizScore, title: 'Belajar Tajwid! 📖', desc: "Mari kita pelajari hukum-hukum tajwid agar bacaan Al-Qur'an kita semakin baik dan benar." },
    computer: { modules: computerModules, quiz: computerQuizQuestions, completed: completedComputerModules, score: computerQuizScore, title: 'Dunia Digital! 💻', desc: "Mari belajar tentang komputer, internet, dan cara aman menggunakannya." },
  };

  const currentData = subjectData[subject];
  const activeModule = currentData.modules.find(m => m.id === activeModuleId);

  const allModules = Object.entries(subjectData).flatMap(([subjKey, data]) => 
    data.modules.map(mod => ({ 
      ...mod, 
      subjectId: subjKey as Subject, 
      subjectTitle: data.title 
    }))
  );

  const searchResults = searchQuery 
    ? allModules.filter(mod => 
        mod.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (mod.explanation && mod.explanation.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (mod.fact && mod.fact.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (mod.verse && mod.verse.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (mod.translation && mod.translation.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  const subjectsList: { id: Subject; label: string; icon: React.ReactNode }[] = [
    { id: 'energy', label: 'Energi', icon: <Sparkles size={16} /> },
    { id: 'tajwid', label: 'Tajwid', icon: <BookMarked size={16} /> },
    { id: 'math', label: 'Matematika', icon: <Calculator size={16} /> },
    { id: 'science', label: 'IPA', icon: <FlaskConical size={16} /> },
    { id: 'social', label: 'IPS', icon: <Globe size={16} /> },
    { id: 'history', label: 'Sejarah', icon: <Hourglass size={16} /> },
    { id: 'indonesian', label: 'B. Indo', icon: <BookA size={16} /> },
    { id: 'english', label: 'B. Inggris', icon: <MessageCircle size={16} /> },
    { id: 'computer', label: 'Komputer', icon: <Monitor size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-indigo-100 font-sans text-slate-800 selection:bg-indigo-200">
      <SEO title={getPageTitle()} />
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 
            className="text-2xl font-bold text-indigo-600 flex items-center gap-2 cursor-pointer"
            onClick={() => setView('subject_select')}
          >
            <span className="text-3xl">🎓</span> Akademi Cilik
          </h1>
          {view !== 'subject_select' && (
            <button 
              onClick={() => setView('subject_select')}
              className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium hover:bg-indigo-200 transition-colors text-sm md:text-base"
            >
              Menu Utama
            </button>
          )}
        </div>
        
        {/* Secondary Navigation Bar */}
        {view !== 'subject_select' && (
          <div className="border-t border-slate-100 bg-white/50 backdrop-blur-md">
            <div className="max-w-4xl mx-auto px-4 py-3 flex overflow-x-auto no-scrollbar gap-2">
              {subjectsList.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setSubject(s.id);
                    setView('home');
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
                    subject === s.id 
                      ? 'bg-indigo-600 text-white shadow-md scale-105' 
                      : 'bg-white text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200'
                  }`}
                >
                  {s.icon}
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {view === 'subject_select' && (
            <motion.div
              key="subject_select"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900">
                  Mau belajar apa hari ini?
                </h2>
                <p className="text-lg text-indigo-700">Pilih petualangan belajarmu!</p>

                {/* Global Search Bar */}
                <div className="max-w-xl mx-auto mt-8 relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Search className="text-indigo-400" size={24} />
                  </div>
                  <input 
                    type="text"
                    placeholder="Cari modul, materi, atau kata kunci..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-6 py-4 rounded-full border-2 border-indigo-100 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 outline-none transition-all text-slate-700 shadow-sm text-lg"
                  />
                </div>
              </div>

              {searchQuery ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-indigo-900 text-center mb-8">
                    {searchResults.length > 0 ? `Hasil Pencarian: ${searchResults.length} modul ditemukan` : 'Modul tidak ditemukan 😔'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {searchResults.map((mod, index) => {
                      const Icon = Icons[mod.icon as keyof typeof Icons] as any;
                      const isCompleted = subjectData[mod.subjectId].completed.includes(mod.id);

                      return (
                        <motion.button
                          key={`${mod.subjectId}-${mod.id}`}
                          onClick={() => {
                            setSubject(mod.subjectId);
                            setActiveModuleId(mod.id);
                            setView('module');
                            setSearchQuery('');
                          }}
                          className={`relative overflow-hidden group rounded-3xl p-6 text-left shadow-lg hover:shadow-xl transition-all duration-300 ${mod.color} text-white`}
                          whileHover={{ scale: 1.03, y: -5 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          {isCompleted && (
                            <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm p-2 rounded-full z-20 shadow-sm">
                              <Icons.CheckCircle2 size={24} className="text-white" />
                            </div>
                          )}
                          <div className="absolute -right-6 -top-6 opacity-20 group-hover:scale-110 transition-transform duration-500">
                            {Icon ? <Icon size={160} /> : <span className="text-[160px] leading-none select-none">{mod.icon}</span>}
                          </div>
                          <div className="relative z-10">
                            <div className="bg-white/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
                              {Icon ? <Icon size={32} className="text-white" /> : <span className="text-3xl select-none">{mod.icon}</span>}
                            </div>
                            <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm">
                              {mod.subjectTitle}
                            </div>
                            <h4 className="text-2xl font-bold mb-2">{mod.title}</h4>
                            <p className="text-white/90 font-medium">
                              {isCompleted ? 'Pelajari lagi \u2192' : 'Mulai belajar \u2192'}
                            </p>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <motion.button
                  onClick={() => { setSubject('energy'); setView('home'); }}
                  className="bg-white rounded-3xl p-6 shadow-xl border-4 border-transparent hover:border-indigo-400 transition-all text-left group"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Sparkles size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Energi & Al-Qur'an</h3>
                  <p className="text-slate-600 text-sm">Pelajari macam-macam energi di bumi.</p>
                </motion.button>

                <motion.button
                  onClick={() => { setSubject('tajwid'); setView('home'); }}
                  className="bg-white rounded-3xl p-6 shadow-xl border-4 border-transparent hover:border-emerald-400 transition-all text-left group"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <BookMarked size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Tajwid</h3>
                  <p className="text-slate-600 text-sm">Belajar hukum bacaan Al-Qur'an.</p>
                </motion.button>

                <motion.button
                  onClick={() => { setSubject('math'); setView('home'); }}
                  className="bg-white rounded-3xl p-6 shadow-xl border-4 border-transparent hover:border-rose-400 transition-all text-left group"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    <Calculator size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Matematika Dasar</h3>
                  <p className="text-slate-600 text-sm">Belajar berhitung dengan mudah!</p>
                </motion.button>

                <motion.button
                  onClick={() => { setSubject('science'); setView('home'); }}
                  className="bg-white rounded-3xl p-6 shadow-xl border-4 border-transparent hover:border-cyan-400 transition-all text-left group"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                    <FlaskConical size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Ilmu Pengetahuan Alam</h3>
                  <p className="text-slate-600 text-sm">Jelajahi tata surya dan alam semesta.</p>
                </motion.button>

                <motion.button
                  onClick={() => { setSubject('social'); setView('home'); }}
                  className="bg-white rounded-3xl p-6 shadow-xl border-4 border-transparent hover:border-blue-400 transition-all text-left group"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Globe size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Ilmu Pengetahuan Sosial</h3>
                  <p className="text-slate-600 text-sm">Pelajari peta dan budaya kita.</p>
                </motion.button>

                <motion.button
                  onClick={() => { setSubject('history'); setView('home'); }}
                  className="bg-white rounded-3xl p-6 shadow-xl border-4 border-transparent hover:border-amber-400 transition-all text-left group"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <Hourglass size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Sejarah</h3>
                  <p className="text-slate-600 text-sm">Kembali ke masa lalu yang seru.</p>
                </motion.button>

                <motion.button
                  onClick={() => { setSubject('indonesian'); setView('home'); }}
                  className="bg-white rounded-3xl p-6 shadow-xl border-4 border-transparent hover:border-teal-400 transition-all text-left group"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <BookA size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Bahasa Indonesia</h3>
                  <p className="text-slate-600 text-sm">Belajar pantun dan dongeng.</p>
                </motion.button>

                <motion.button
                  onClick={() => { setSubject('english'); setView('home'); }}
                  className="bg-white rounded-3xl p-6 shadow-xl border-4 border-transparent hover:border-pink-400 transition-all text-left group"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                    <MessageCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Bahasa Inggris</h3>
                  <p className="text-slate-600 text-sm">Let's learn English together!</p>
                </motion.button>

                <motion.button
                  onClick={() => { setSubject('computer'); setView('home'); }}
                  className="bg-white rounded-3xl p-6 shadow-xl border-4 border-transparent hover:border-violet-400 transition-all text-left group"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-16 h-16 bg-violet-100 text-violet-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                    <Monitor size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Komputer Dasar</h3>
                  <p className="text-slate-600 text-sm">Belajar teknologi dan internet.</p>
                </motion.button>

              </div>
              )}
            </motion.div>
          )}

          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Home 
                title={currentData.title}
                description={currentData.desc}
                modulesData={currentData.modules}
                completedModules={currentData.completed}
                quizScore={currentData.score}
                onSelectModule={(id) => {
                  setActiveModuleId(id);
                  setView('module');
                }}
                onStartQuiz={() => setView('quiz')}
              />
            </motion.div>
          )}
          {view === 'module' && activeModule && (
            <motion.div
              key="module"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <ModuleDetail 
                module={activeModule} 
                isCompleted={currentData.completed.includes(activeModule.id)}
                onComplete={() => handleModuleComplete(activeModule.id)}
                onBack={() => setView('home')} 
              />
            </motion.div>
          )}
          {view === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
            >
              <Quiz 
                topic={currentData.title}
                questions={currentData.quiz}
                onBack={() => setView('home')} 
                onComplete={handleQuizComplete}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}