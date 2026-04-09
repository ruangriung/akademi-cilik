import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, Award, ArrowLeft, RotateCcw, Sparkles, PenTool } from 'lucide-react';

export function Quiz({ topic, questions: initialQuestions, onBack, onComplete }: { topic: string, questions: any[], onBack: () => void, onComplete: (score: number) => void }) {
  const [questions, setQuestions] = useState(initialQuestions);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // AI States
  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState(false);
  const [essayMode, setEssayMode] = useState(false);
  const [essayAnswer, setEssayAnswer] = useState('');
  const [essayFeedback, setEssayFeedback] = useState('');
  const [isEssayLoading, setIsEssayLoading] = useState(false);

  const generateAIQuiz = async () => {
    setIsGeneratingQuiz(true);
    try {
      const res = await fetch('/api/ai/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic })
      });
      const data = await res.json();
      if (data.questions && data.questions.length > 0) {
        // Map AI format to our format
        const mappedQuestions = data.questions.map((q: any) => ({
          question: q.question,
          options: q.options,
          answer: q.correctAnswer
        }));
        setQuestions(mappedQuestions);
        resetQuiz();
      }
    } catch (e) {
      alert("Gagal membuat kuis AI. Coba lagi nanti.");
    }
    setIsGeneratingQuiz(false);
  };

  const submitEssay = async () => {
    if (!essayAnswer.trim()) return;
    setIsEssayLoading(true);
    try {
      const res = await fetch('/api/ai/essay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, answer: essayAnswer })
      });
      const data = await res.json();
      setEssayFeedback(data.feedback);
    } catch (e) {
      setEssayFeedback("Maaf, Guru AI sedang tidak bisa memberikan nilai saat ini.");
    }
    setIsEssayLoading(false);
  };

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(index);
    setIsAnswered(true);
    
    const isCorrect = index === questions[currentQ].answer;
    const newScore = isCorrect ? score + 100 : score;

    if (isCorrect) {
      setScore(newScore);
    }

    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        setShowResult(true);
        onComplete(newScore);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setEssayMode(false);
    setEssayAnswer('');
    setEssayFeedback('');
  };

  if (essayMode) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <button 
            onClick={() => setEssayMode(false)}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold transition-colors bg-indigo-50 px-4 py-2 rounded-full"
          >
            <ArrowLeft size={20} /> Kembali ke Pilihan Ganda
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-fuchsia-600 p-6 md:p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">Latihan Esai Singkat</h3>
            <p className="mt-2 text-fuchsia-100 text-sm md:text-base">Ceritakan apa yang kamu ketahui tentang {topic}!</p>
          </div>
          
          <div className="p-6 md:p-8 space-y-6">
            <textarea 
              value={essayAnswer}
              onChange={(e) => setEssayAnswer(e.target.value)}
              placeholder="Ketik jawabanmu di sini ya..."
              className="w-full h-40 md:h-48 p-4 md:p-6 rounded-2xl border-2 border-fuchsia-100 focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-50 outline-none transition-all text-slate-700 text-base md:text-lg resize-none"
            ></textarea>

            {!essayFeedback ? (
              <button 
                onClick={submitEssay}
                disabled={isEssayLoading || !essayAnswer.trim()}
                className="w-full bg-fuchsia-500 hover:bg-fuchsia-600 disabled:bg-fuchsia-300 text-white font-bold py-4 rounded-2xl shadow-md transition-colors flex items-center justify-center gap-2"
              >
                {isEssayLoading ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                ) : (
                  <>Kirim Jawaban ke Guru AI <Sparkles size={20} /></>
                )}
              </button>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-fuchsia-50 p-6 rounded-2xl border border-fuchsia-200"
              >
                <h4 className="font-bold text-fuchsia-800 mb-2">Feedback Guru AI:</h4>
                <p className="text-fuchsia-900 leading-relaxed text-sm md:text-base">{essayFeedback}</p>
                <button 
                  onClick={() => { setEssayAnswer(''); setEssayFeedback(''); }}
                  className="mt-4 text-fuchsia-600 font-semibold hover:text-fuchsia-800 text-sm md:text-base"
                >
                  Tulis jawaban lain
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <motion.div 
        className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Award size={80} className="mx-auto text-yellow-400 mb-6" />
        <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Kuis Selesai!</h2>
        <p className="text-xl text-slate-600 mb-8">Skor kamu adalah:</p>
        <div className="text-7xl font-black text-indigo-600 mb-12">{score}</div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={resetQuiz}
            className="flex items-center justify-center gap-2 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 font-bold py-4 px-8 rounded-full transition-colors"
          >
            <RotateCcw size={20} /> Ulangi Kuis
          </button>
          <button 
            onClick={onBack}
            className="flex items-center justify-center gap-2 bg-indigo-600 text-white hover:bg-indigo-700 font-bold py-4 px-8 rounded-full shadow-lg transition-colors"
          >
            <ArrowLeft size={20} /> Kembali ke Menu
          </button>
        </div>
      </motion.div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold transition-colors bg-indigo-50 px-4 py-2 rounded-full text-sm md:text-base"
          >
            <ArrowLeft size={20} /> Keluar
          </button>
          <div className="bg-white px-4 py-2 rounded-full shadow-sm font-bold text-indigo-600 border border-indigo-100 text-sm md:text-base">
            Soal {currentQ + 1} / {questions.length}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-end">
          <button 
            onClick={() => setEssayMode(true)}
            className="flex-1 sm:flex-none justify-center bg-fuchsia-100 text-fuchsia-700 px-4 py-2.5 rounded-full shadow-sm font-bold flex items-center gap-2 hover:bg-fuchsia-200 transition-colors text-sm"
          >
            <PenTool size={16} /> Latihan Esai
          </button>
          <button 
            onClick={generateAIQuiz}
            disabled={isGeneratingQuiz}
            className="flex-1 sm:flex-none justify-center bg-amber-100 text-amber-700 px-4 py-2.5 rounded-full shadow-sm font-bold flex items-center gap-2 hover:bg-amber-200 transition-colors text-sm disabled:opacity-50"
          >
            {isGeneratingQuiz ? <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-amber-700"></div> : <Sparkles size={16} />}
            Kuis Baru AI
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-indigo-600 p-8 text-white">
          <h3 className="text-2xl md:text-3xl font-bold leading-tight">{q.question}</h3>
        </div>
        
        <div className="p-8 space-y-4">
          <AnimatePresence mode="wait">
            {q.options.map((opt: string, index: number) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === q.answer;
              
              let btnClass = "w-full text-left p-6 rounded-2xl border-2 font-semibold text-lg transition-all duration-300 flex justify-between items-center ";
              
              if (!isAnswered) {
                btnClass += "border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 text-slate-700";
              } else {
                if (isCorrect) {
                  btnClass += "border-emerald-500 bg-emerald-50 text-emerald-700";
                } else if (isSelected && !isCorrect) {
                  btnClass += "border-red-500 bg-red-50 text-red-700";
                } else {
                  btnClass += "border-slate-200 text-slate-400 opacity-50";
                }
              }

              return (
                <motion.button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={isAnswered}
                  className={btnClass}
                  whileHover={!isAnswered ? { scale: 1.01 } : {}}
                  whileTap={!isAnswered ? { scale: 0.98 } : {}}
                >
                  <span>{opt}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="text-emerald-500" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="text-red-500" />}
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between items-center px-4">
        <div className="text-slate-500 font-medium">Skor Sementara: <span className="text-indigo-600 font-bold">{score}</span></div>
      </div>
    </div>
  );
}