import { BookOpen, Gamepad2, CheckCircle2, Trophy } from 'lucide-react';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

export function Home({ 
  title,
  description,
  modulesData,
  onSelectModule, 
  onStartQuiz,
  completedModules,
  quizScore
}: { 
  title: string,
  description: string,
  modulesData: any[],
  onSelectModule: (id: string) => void, 
  onStartQuiz: () => void,
  completedModules: string[],
  quizScore: number | null
}) {
  const progressPercentage = Math.round((completedModules.length / modulesData.length) * 100);

  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold text-indigo-900"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', bounce: 0.5 }}
        >
          {title}
        </motion.h2>
        <p className="text-lg md:text-xl text-indigo-700 max-w-2xl mx-auto">
          {description}
        </p>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mt-8 bg-white p-5 rounded-3xl shadow-sm border border-indigo-50">
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-indigo-800">Progress Belajar</span>
            <span className="font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full text-sm">
              {completedModules.length} / {modulesData.length} Modul
            </span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden">
            <motion.div 
              className="bg-emerald-500 h-4 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-indigo-500 rounded-xl text-white shadow-md">
            <BookOpen size={28} />
          </div>
          <h3 className="text-2xl font-bold text-slate-800">Pilih Modul Belajar</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modulesData.map((mod, index) => {
            const Icon = Icons[mod.icon as keyof typeof Icons] as any;
            const isCompleted = completedModules.includes(mod.id);

            return (
              <motion.button
                key={mod.id}
                onClick={() => onSelectModule(mod.id)}
                className={`relative overflow-hidden group rounded-3xl p-6 text-left shadow-lg hover:shadow-xl transition-all duration-300 ${mod.color} text-white`}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {isCompleted && (
                  <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm p-2 rounded-full z-20 shadow-sm">
                    <CheckCircle2 size={24} className="text-white" />
                  </div>
                )}
                <div className="absolute -right-6 -top-6 opacity-20 group-hover:scale-110 transition-transform duration-500">
                  {Icon ? <Icon size={160} /> : <span className="text-[160px] leading-none select-none">{mod.icon}</span>}
                </div>
                <div className="relative z-10">
                  <div className="bg-white/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
                    {Icon ? <Icon size={32} className="text-white" /> : <span className="text-3xl select-none">{mod.icon}</span>}
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
      </section>

      <section className="mt-12">
        <motion.div 
          className="bg-white rounded-3xl p-8 shadow-xl border-4 border-indigo-100 text-center relative overflow-hidden"
          whileHover={{ y: -5 }}
        >
          {quizScore !== null && (
            <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 font-bold px-6 py-2 rounded-bl-3xl flex items-center gap-2 shadow-md">
              <Trophy size={20} /> Skor Tertinggi: {quizScore}
            </div>
          )}
          <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
            <Gamepad2 size={40} />
          </div>
          <h3 className="text-3xl font-bold text-slate-800 mb-4">Waktunya Bermain!</h3>
          <p className="text-slate-600 mb-8 text-lg">
            Sudah selesai membaca semua modul? Yuk uji pengetahuanmu dengan kuis seru ini!
          </p>
          <button
            onClick={onStartQuiz}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all transform hover:scale-105 active:scale-95"
          >
            {quizScore !== null ? 'Mainkan Lagi' : 'Mulai Kuis Sekarang'}
          </button>
        </motion.div>
      </section>
    </div>
  );
}