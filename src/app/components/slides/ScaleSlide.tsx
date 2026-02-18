import { motion } from 'motion/react';
import { Box, TrendingUp, Calendar, Zap, AlertCircle } from 'lucide-react';

const ScaleSlide = () => {
   return (
      <div className="w-full h-full flex flex-col p-16 relative">
         {/* Header */}
         <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-12">
            <div>
               <div className="text-[#FF0000] font-mono tracking-widest text-sm mb-2 uppercase">03 // Capacity</div>
               <h2 className="text-5xl font-bold uppercase tracking-tight text-white">
                  Масштабування <span className="text-gray-500">під ваш обʼєм</span>
               </h2>
            </div>
            <div className="flex items-center gap-2 text-white/40 text-sm font-mono">
               <Zap size={16} className="text-[#FF0000]" />
               <span>HIGH THROUGHPUT</span>
            </div>
         </div>

         {/* Main Content: 2 Cards */}
         <div className="flex-1 flex gap-8 mb-8">

            {/* Scenario A */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="flex-1 bg-white/5 border border-white/10 p-8 relative overflow-hidden group hover:border-[#FF0000]/30 transition-colors"
            >
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Box size={120} />
               </div>

               <h3 className="text-xl text-[#FF0000] font-mono uppercase tracking-widest mb-2">Сценарій A</h3>
               <div className="text-4xl font-bold text-white mb-8">20 Принтерів</div>

               <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-400 font-mono">ESTIMATED OUTPUT</span>
                  <div className="text-6xl font-bold text-white tracking-tighter">
                     168 <span className="text-2xl text-[#FF0000] font-normal">кг/місяць</span>
                  </div>
               </div>

               <div className="mt-8 pt-8 border-t border-dashed border-white/10 text-sm text-gray-400">
                  Базовий рівень для серійного виробництва дрібних партій.
               </div>
            </motion.div>

            {/* Scenario B */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="flex-1 bg-[#FF0000]/10 border border-[#FF0000]/30 p-8 relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 p-4 opacity-10 text-[#FF0000]">
                  <TrendingUp size={120} />
               </div>

               <h3 className="text-xl text-[#FF0000] font-mono uppercase tracking-widest mb-2">Сценарій B</h3>
               <div className="text-4xl font-bold text-white mb-8">50 Принтерів</div>

               <div className="flex flex-col gap-2">
                  <span className="text-sm text-red-200/70 font-mono">SCALED OUTPUT</span>
                  <div className="text-6xl font-bold text-white tracking-tighter">
                     420+ <span className="text-2xl text-[#FF0000] font-normal">кг/місяць</span>
                  </div>
               </div>

               <div className="mt-8 pt-8 border-t border-dashed border-[#FF0000]/30 text-sm text-gray-300">
                  Розширене виробництво для забезпечення потреб бригад або великих замовлень.
               </div>
            </motion.div>
         </div>

         {/* Footer Info Area */}
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-between bg-black/40 border border-white/10 p-6 backdrop-blur-sm"
         >
            {/* Schedule Note */}
            <div className="flex items-center gap-4">
               <Calendar className="text-[#FF0000]" size={24} />
               <div>
                  <div className="text-xs text-white/40 uppercase font-mono mb-1">Production Schedule</div>
                  <div className="text-sm text-gray-200">
                     <span className="text-white font-bold">Пн–Пт</span>: 20 год/день • <span className="text-white font-bold">Сб</span>: Резерв
                  </div>
               </div>
            </div>

            {/* Formula */}
            <div className="flex items-center gap-4 pl-8 border-l border-white/10">
               <div className="text-right">
                  <div className="text-xs text-white/40 uppercase font-mono mb-1">Calculation Logic</div>
                  <div className="font-mono text-lg text-[#FF0000]">
                     <span className="text-white">PRINTERS</span> × 0.4 кг × 21 день
                  </div>
               </div>
               <AlertCircle className="text-[#FF0000]" size={24} />
            </div>
         </motion.div>
      </div>
   );
};

export default ScaleSlide;
