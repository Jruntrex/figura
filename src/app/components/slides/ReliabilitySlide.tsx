import { motion } from 'motion/react';
import { ServerCrash, Wrench, Activity, ShieldCheck } from 'lucide-react';

const ReliabilitySlide = () => {
  const pillars = [
    {
      icon: <ServerCrash size={32} className="text-[#FF0000]" />,
      title: "Запасні принтери",
      desc: "У нас завжди є резерв потужностей. Якщо один юніт виходить з ладу, його роботу миттєво підхоплює інший.",
      highlight: "Моментальна заміна"
    },
    {
      icon: <Wrench size={32} className="text-[#FF0000]" />,
      title: "Планова профілактика",
      desc: "Ми не чекаємо поломки. Регламентні роботи проводяться за графіком, щоб виключити несподівані зупинки.",
      highlight: "Прогнозований сервіс"
    },
    {
      icon: <Activity size={32} className="text-[#FF0000]" />,
      title: "Live Моніторинг",
      desc: "Оператори бачать стан кожного сопла і температуру камери в реальному часі через центральну консоль.",
      highlight: "24/7 Контроль"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col p-16 relative">
      {/* Header */}
      <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-12">
        <div>
          <div className="text-[#FF0000] font-mono tracking-widest text-sm mb-2 uppercase">07 // Reliability</div>
          <h2 className="text-5xl font-bold uppercase tracking-tight text-white">
            Безперебійне <span className="text-gray-500">Виробництво</span>
          </h2>
        </div>
        <div className="flex items-center gap-2 text-white/40 text-sm font-mono">
          <ShieldCheck size={16} className="text-[#FF0000]" />
          <span>UPTIME GUARANTEE</span>
        </div>
      </div>

      {/* Pillars */}
      <div className="flex-1 grid grid-cols-3 gap-8 mb-12">
        {pillars.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-white/5 border border-white/10 p-8 flex flex-col justify-between group hover:border-[#FF0000]/50 transition-colors relative overflow-hidden"
          >
            {/* Background Number */}
            <div className="absolute -right-4 -bottom-8 text-9xl font-bold text-white/5 font-mono select-none group-hover:text-[#FF0000]/10 transition-colors">
              0{index + 1}
            </div>

            <div>
              <div className="mb-6 bg-black/50 w-16 h-16 rounded-sm border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{item.desc}</p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF0000] flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FF0000] rounded-full animate-pulse" />
                {item.highlight}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Equation Accent */}
      <motion.div
        initial={{ opacity: 0, width: "0%" }}
        animate={{ opacity: 1, width: "100%" }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative h-20 bg-[#FF0000]/10 border-t border-b border-[#FF0000]/30 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />

        <div className="relative z-10 font-mono text-lg sm:text-xl text-white tracking-wider flex items-center gap-4">
          <span className="opacity-70">Запасні принтери</span>
          <span className="text-[#FF0000] text-2xl font-bold">+</span>
          <span className="opacity-70">Прогнозоване обслуговування</span>
          <span className="text-[#FF0000] text-2xl font-bold">=</span>
          <span className="font-bold text-white bg-[#FF0000] text-black px-2 py-1">БЕЗПЕРЕБІЙНЕ ВИРОБНИЦТВО</span>
        </div>
      </motion.div>
    </div>
  );
};

export default ReliabilitySlide;
