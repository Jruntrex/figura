import { motion } from 'motion/react';
import { Timer, ArrowRight, FileType, Zap } from 'lucide-react';

const LeadTimeSlide = () => {
   return (
      <div className="w-full h-full flex flex-col p-16 relative">
         {/* Header */}
         <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-12">
            <div>
               <div className="text-[#FF0000] font-mono tracking-widest text-sm mb-2 uppercase">06 // Speed & Agility</div>
               <h2 className="text-5xl font-bold uppercase tracking-tight text-white">
                  Прозорий <span className="text-gray-500">Lead Time</span>
               </h2>
            </div>
            <div className="flex items-center gap-2 text-white/40 text-sm font-mono">
               <Timer size={16} className="text-[#FF0000]" />
               <span>RAPID RESPONSE PROTOCOL</span>
            </div>
         </div>

         <div className="flex-1 flex flex-col gap-8">
            {/* Main Formula Block */}
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6 }}
               className="w-full bg-white/5 border border-white/10 p-12 flex flex-col items-center justify-center relative overflow-hidden group"
            >
               <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_10s_infinite]" />

               <div className="flex items-center gap-8 text-4xl sm:text-6xl font-bold font-mono text-white tracking-tighter">
                  <span className="text-gray-400">Lead Time</span>
                  <span className="text-[#FF0000]">=</span>
                  <span className="bg-black/40 px-6 py-2 border border-white/10 rounded-sm">Час друку STL</span>
                  <span className="text-[#FF0000]">+</span>
                  <span className="text-[#FF0000]">1 година</span>
               </div>

               <div className="mt-6 flex items-center gap-2 text-gray-400 font-mono text-sm uppercase tracking-widest">
                  <Zap size={14} className="text-[#FF0000]" />
                  <span>Instant Calculation System</span>
               </div>
            </motion.div>

            {/* Bottom Content Split */}
            <div className="flex gap-8 h-full">

               {/* Left: Explanation */}
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-1/2 bg-black/40 border border-white/10 p-8 flex flex-col justify-center"
               >
                  <h3 className="text-2xl font-bold text-white mb-4">Без сюрпризів</h3>
                  <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#FF0000] pl-6">
                     Точний строк повідомляємо <span className="text-white font-semibold">одразу після аналізу</span> вашого файлу. Ми не обіцяємо "приблизно" — ми кажемо точно.
                  </p>
               </motion.div>

               {/* Right: Agile Switching */}
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="w-1/2 bg-[#FF0000]/5 border border-[#FF0000]/20 p-8 flex items-center justify-between group hover:bg-[#FF0000]/10 transition-colors"
               >
                  <div className="max-w-md">
                     <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <FileType className="text-[#FF0000]" />
                        Миттєве переключення
                     </h3>
                     <p className="text-gray-300">
                        Зміна задачі не потребує переналаштування лінії. Просто завантажуємо новий STL і запускаємо процес.
                     </p>
                  </div>

                  {/* Animated Icon Visual */}
                  <div className="relative w-24 h-24 flex items-center justify-center">
                     <div className="absolute inset-0 border-2 border-dashed border-[#FF0000]/30 rounded-full animate-[spin_10s_linear_infinite]" />
                     <ArrowRight size={32} className="text-[#FF0000] group-hover:translate-x-2 transition-transform" />
                  </div>
               </motion.div>
            </div>
         </div>
      </div>
   );
};

export default LeadTimeSlide;
