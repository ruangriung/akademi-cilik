import { ArrowLeft, Lightbulb, CheckCircle2, Bot, Send, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function ModuleDetail({ 
  module, 
  onBack,
  isCompleted,
  onComplete
}: { 
  module: any, 
  onBack: () => void,
  isCompleted: boolean,
  onComplete: () => void
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isArabic = /[\u0600-\u06FF]/.test(module.arabic);

  // AI States
  const [aiChat, setAiChat] = useState<{role: 'user'|'ai', text: string}[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [story, setStory] = useState('');
  const [isStoryLoading, setIsStoryLoading] = useState(false);
  
  // Dynamic Fact States
  const [dynamicFact, setDynamicFact] = useState<string | null>(null);
  const [isFactLoading, setIsFactLoading] = useState(false);

  const fetchFact = async (forceNew = false) => {
    if ((dynamicFact && !forceNew) || isFactLoading) return;
    setIsFactLoading(true);
    try {
      const res = await fetch('/api/ai/fact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: module.title + ' - ' + module.explanation })
      });
      const data = await res.json();
      setDynamicFact(data.fact);
    } catch (e) {
      if (!dynamicFact) setDynamicFact(module.fact);
    }
    setIsFactLoading(false);
  };

  const handleFlip = () => {
    if (!isFlipped && !dynamicFact) {
      fetchFact();
    }
    setIsFlipped(!isFlipped);
  };

  const askAI = async () => {
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setAiChat(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatInput('');
    setIsChatLoading(true);
    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userMsg, context: module.title + ' - ' + module.explanation })
      });
      const data = await res.json();
      setAiChat(prev => [...prev, { role: 'ai', text: data.reply }]);
    } catch (e) {
      setAiChat(prev => [...prev, { role: 'ai', text: 'Maaf, Guru AI sedang istirahat. Coba lagi nanti ya!' }]);
    }
    setIsChatLoading(false);
  };

  const getStory = async () => {
    setIsStoryLoading(true);
    try {
      const res = await fetch('/api/ai/story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: module.title })
      });
      const data = await res.json();
      setStory(data.story);
    } catch (e) {
      setStory('Maaf, cerita tidak bisa dimuat saat ini.');
    }
    setIsStoryLoading(false);
  };

  return (
    <div className="space-y-8 pb-12">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
      >
        <ArrowLeft size={20} /> Kembali ke Menu
      </button>

      <div className={`rounded-3xl p-8 md:p-12 text-white shadow-xl ${module.color} relative overflow-hidden`}>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">{module.title}</h2>
          <p className="text-xl opacity-90">Mari kita lihat apa kata Al-Qur'an tentang energi ini.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-bold mb-6">
            {module.verseLabel || "Ayat Al-Qur'an"}
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-6">{module.verse}</h3>
          <p className={`text-2xl md:text-3xl leading-loose mb-6 text-slate-800 ${isArabic ? 'font-arabic text-right' : 'font-sans font-bold text-center text-4xl'}`} dir={isArabic ? 'rtl' : 'ltr'}>
            {module.arabic}
          </p>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <p className="text-slate-600 italic">"{module.translation}"</p>
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div 
            className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-bold mb-6">
              {module.explanationLabel || "Penjelasan Sains"}
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
              {module.explanation}
            </p>
          </motion.div>

          <motion.div 
            className="perspective-1000 h-48 md:h-56"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="w-full h-full relative preserve-3d cursor-pointer"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              onClick={handleFlip}
            >
              {/* Front */}
              <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-amber-300 to-orange-400 rounded-3xl p-6 shadow-lg flex flex-col items-center justify-center text-white text-center">
                <Lightbulb size={48} className="mb-4 text-white" />
                <h3 className="text-2xl font-bold">Tahukah Kamu?</h3>
                <p className="mt-2 font-medium opacity-90">Klik untuk membalik kartu!</p>
              </div>
              
              {/* Back */}
              <div 
                className="absolute w-full h-full backface-hidden bg-white rounded-3xl p-6 shadow-lg border-4 border-amber-300 flex flex-col items-center justify-center text-center"
                style={{ transform: 'rotateY(180deg)' }}
              >
                {isFactLoading ? (
                  <div className="flex flex-col items-center text-amber-500">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500 mb-2"></div>
                    <p className="text-sm font-bold animate-pulse">Mencari fakta unik...</p>
                  </div>
                ) : (
                  <>
                    <p className="text-base md:text-lg font-bold text-slate-800 mb-4">{dynamicFact || module.fact}</p>
                    <button 
                      onClick={(e) => { e.stopPropagation(); fetchFact(true); }}
                      className="text-xs bg-amber-100 hover:bg-amber-200 text-amber-700 px-3 py-1.5 rounded-full font-bold transition-colors shadow-sm"
                    >
                      Cari Fakta Lain 🔄
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center pt-4"
          >
            {isCompleted ? (
              <div className="flex items-center gap-3 text-emerald-600 font-bold bg-emerald-50 px-6 py-4 rounded-full border border-emerald-200 w-full justify-center">
                <CheckCircle2 size={24} />
                <span>Kamu sudah menyelesaikan modul ini!</span>
              </div>
            ) : (
              <button
                onClick={onComplete}
                className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:scale-105 active:scale-95 w-full"
              >
                <CheckCircle2 size={24} />
                Tandai Selesai Dibaca
              </button>
            )}
          </motion.div>
        </div>
      </div>

      {/* AI Features Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* AI Storyteller */}
        <motion.div 
          className="bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-3xl p-6 md:p-8 shadow-lg border border-fuchsia-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-fuchsia-100 p-3 rounded-2xl text-fuchsia-600">
              <BookOpen size={28} />
            </div>
            <h3 className="text-2xl font-bold text-fuchsia-900">Pendongeng Pintar</h3>
          </div>
          
          {!story && !isStoryLoading ? (
            <div className="text-center py-8">
              <p className="text-fuchsia-700 mb-6">Mau dengar cerita seru tentang {module.title}?</p>
              <button 
                onClick={getStory}
                className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold px-6 py-3 rounded-full shadow-md transition-colors"
              >
                Ceritakan Kisahnya! ✨
              </button>
            </div>
          ) : isStoryLoading ? (
            <div className="flex flex-col items-center justify-center py-12 text-fuchsia-500">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fuchsia-500 mb-4"></div>
              <p className="font-medium animate-pulse">Sedang mengarang cerita...</p>
            </div>
          ) : (
            <div className="bg-white/60 backdrop-blur-sm p-5 md:p-6 rounded-2xl text-slate-700 leading-relaxed whitespace-pre-line border border-fuchsia-100 shadow-inner text-sm md:text-base">
              {story}
            </div>
          )}
        </motion.div>

        {/* AI Chatbot */}
        <motion.div 
          className="bg-gradient-to-br from-sky-50 to-indigo-50 rounded-3xl p-6 md:p-8 shadow-lg border border-sky-100 flex flex-col h-[500px] lg:h-[600px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-sky-100 p-3 rounded-2xl text-sky-600">
              <Bot size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-sky-900">Tanya Guru AI</h3>
              <p className="text-sky-600 text-sm">Ada yang belum jelas? Tanya saja!</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto bg-white/60 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-sky-100 shadow-inner space-y-4 no-scrollbar">
            {aiChat.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-sky-400/80 text-center px-4">
                <Bot size={48} className="mb-4 opacity-50" />
                <p className="text-sm md:text-base">Ketik pertanyaanmu di bawah ini ya!</p>
              </div>
            ) : (
              aiChat.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[90%] md:max-w-[85%] p-3 md:p-4 rounded-2xl text-sm md:text-base leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-sky-500 text-white rounded-tr-sm' 
                      : 'bg-white text-slate-700 border border-sky-100 rounded-tl-sm shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))
            )}
            {isChatLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-slate-500 border border-sky-100 p-3 md:p-4 rounded-2xl rounded-tl-sm shadow-sm flex gap-2 items-center">
                  <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              <button 
                onClick={() => {
                  setChatInput("Tolong berikan contoh lain dari materi ini agar lebih mudah dipahami.");
                  setTimeout(askAI, 100);
                }}
                disabled={isChatLoading}
                className="bg-emerald-100 hover:bg-emerald-200 text-emerald-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-sm transition-colors text-xs md:text-sm font-bold whitespace-nowrap"
              >
                Beri Contoh 💡
              </button>
              <button 
                onClick={() => {
                  setChatInput("Tolong jelaskan materi ini dengan bahasa yang lebih sederhana untuk anak-anak.");
                  setTimeout(askAI, 100);
                }}
                disabled={isChatLoading}
                className="bg-sky-100 hover:bg-sky-200 text-sky-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-sm transition-colors text-xs md:text-sm font-bold whitespace-nowrap"
              >
                Jelaskan Lebih Sederhana 👶
              </button>
            </div>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && askAI()}
                placeholder="Tanya sesuatu..."
                className="flex-1 px-4 py-3 rounded-full border border-sky-200 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all text-sm md:text-base"
              />
              <button 
                onClick={askAI}
                disabled={isChatLoading || !chatInput.trim()}
                className="bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 text-white p-3 rounded-full shadow-md transition-colors flex items-center justify-center shrink-0"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}