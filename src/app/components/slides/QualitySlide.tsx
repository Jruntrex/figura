import { motion } from 'motion/react';
import { ClipboardCheck, MonitorCheck, Network, Wrench, BarChart3 } from 'lucide-react';

const QualitySlide = () => {
  const pillars = [
    {
      icon: <ClipboardCheck size={32} className="text-white" />,
      title: "Протоколи контролю",
      desc: "Детальні чек-лісти для деталей, стану принтерів та умов у приміщенні."
    },
    {
      icon: <MonitorCheck size={32} className="text-white" />,
      title: "Farm Manager",
      desc: "Централізований цифровий моніторинг усіх процесів у реальному часі."
    },
    {
      icon: <Network size={32} className="text-white" />,
      title: "Єдина екосистема",
      desc: "Повна консистентність налаштувань між усіма принтерами ферми."
    },
    {
      icon: <Wrench size={32} className="text-white" />,
      title: "Планова профілактика",
      desc: "Регулярне обслуговування обладнання для запобігання збоям."
    }
  ];

  return (
    <div className="w-full h-full flex flex-col p-16 relative">
      {/* Header */}
      <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-12">
        <div>
          <div className="text-[#FF0000] font-mono tracking-widest text-sm mb-2 uppercase">04 // Quality Assurance</div>
          <h2 className="text-5xl font-bold uppercase tracking-tight text-white">
            Контроль якості <span className="text-gray-500">на кожному етапі</span>
          </h2>
        </div>
        <div className="flex items-center gap-2 text-white/40 text-sm font-mono">
          <ClipboardCheck size={16} className="text-[#FF0000]" />
          <span>ISO COMPLIANT PROTOCOLS</span>
        </div>
      </div>

      <div className="flex-1 flex gap-12">
        {/* Left: Pillars Grid */}
        <div className="w-2/3 grid grid-cols-2 gap-6">
          {pillars.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/5 border border-white/10 p-6 relative group hover:bg-white/10 transition-colors"
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-[#FF0000] transition-colors" />

              <div className="mb-4 w-12 h-12 bg-[#FF0000]/20 flex items-center justify-center rounded-sm text-[#FF0000] group-hover:bg-[#FF0000] group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{item.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Right: Stat Block */}
        <div className="w-1/3 flex flex-col">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-full bg-gradient-to-b from-[#FF0000]/10 to-transparent border border-[#FF0000]/30 p-8 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Background Chart Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute bottom-0 left-0 w-full h-32 flex items-end justify-around px-4">
                {[40, 60, 30, 80, 50, 90, 40].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className="w-4 bg-[#FF0000]" />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-[#FF0000] mb-6">
                <BarChart3 size={24} />
                <span className="font-mono text-sm tracking-widest uppercase">Scrap Rate Analysis</span>
              </div>

              <div className="text-6xl font-bold text-white mb-2">~10%</div>
              <div className="text-gray-400 text-sm font-mono uppercase tracking-wide mb-8 border-b border-white/10 pb-4">
                Стандарт галузі
              </div>

              <div className="text-4xl font-bold text-[#FF0000] mb-2">&lt; 2%</div>
              <div className="text-white/80 text-sm font-bold uppercase tracking-wide">
                При стабільному друку
              </div>
            </div>

            <div className="mt-8 text-xs text-gray-500 font-mono leading-relaxed">
              *Показники базуються на статистиці Bambu Lab P1S при використанні каліброваних матеріалів та дотриманні температурних режимів.
            </div>

            {/* Warning Tape Decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-repeating-linear-gradient(45deg, #FF0000, #FF0000 10px, transparent 10px, transparent 20px) opacity-50" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QualitySlide;
