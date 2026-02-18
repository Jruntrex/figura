import { motion } from 'motion/react';
import { Calculator, Box, Zap, Wrench, Settings, TrendingDown } from 'lucide-react';

const PricingSlide = () => {
  const components = [
    { icon: <Box size={24} />, label: "Матеріал (філамент)", color: "text-blue-400", border: "border-blue-400/30" },
    { icon: <Wrench size={24} />, label: "Обслуговування", color: "text-orange-400", border: "border-orange-400/30" },
    { icon: <Zap size={24} />, label: "Електроенергія", color: "text-yellow-400", border: "border-yellow-400/30" },
    { icon: <Settings size={24} />, label: "Операційні витрати", color: "text-gray-400", border: "border-gray-400/30" }
  ];

  return (
    <div className="w-full h-full flex flex-col p-16 relative">
      {/* Header */}
      <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-12">
        <div>
          <div className="text-[#FF0000] font-mono tracking-widest text-sm mb-2 uppercase">08 // Financial Structure</div>
          <h2 className="text-5xl font-bold uppercase tracking-tight text-white">
            Прозора <span className="text-gray-500">Структура ціни</span>
          </h2>
        </div>
        <div className="flex items-center gap-2 text-white/40 text-sm font-mono">
          <Calculator size={16} className="text-[#FF0000]" />
          <span>OPEN BOOK MODEL</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center">

        <div className="text-xl text-gray-400 mb-12 font-light text-center max-w-2xl">
          Ціна формується індивідуально під ваш обʼєм і деталь.
        </div>

        {/* Visual Cost Components - Abstract Blocks */}
        <div className="flex gap-4 mb-16 w-full max-w-4xl h-32">
          {components.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex-1 bg-white/5 border ${item.border} p-6 flex flex-col items-center justify-center gap-4 relative group hover:bg-white/10 transition-colors`}
            >
              <div className={`${item.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                {item.icon}
              </div>
              <div className="text-white font-mono text-sm uppercase tracking-wider text-center">
                {item.label}
              </div>

              {/* Decorative lines */}
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20" />
            </motion.div>
          ))}
        </div>

        {/* Volume Logic Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-[#FF0000]/10 border border-[#FF0000]/30 px-8 py-4 flex items-center gap-4 rounded-sm"
        >
          <TrendingDown className="text-[#FF0000]" size={24} />
          <div className="text-white font-mono text-sm sm:text-base">
            <span className="text-[#FF0000] font-bold">МАСШТАБ = ЕКОНОМІЯ:</span> Більший обʼєм замовлення → Краща ціна за кг
          </div>
        </motion.div>

        <div className="mt-12 text-gray-500 text-sm font-mono max-w-lg text-center border-t border-white/10 pt-6">
          "Ми точно знаємо свою собівартість і будуємо ціну прозоро. Деталі — обговорюємо особисто."
        </div>

      </div>
    </div>
  );
};

export default PricingSlide;
