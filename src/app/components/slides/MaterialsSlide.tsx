import { motion } from 'motion/react';
import { Layers, Plus, Hexagon } from 'lucide-react';

const MaterialsSlide = () => {
  const materials = [
    { name: "PLA", type: "Standard", desc: "Швидке прототипування, візуальні моделі" },
    { name: "PETG", type: "Engineering", desc: "Хімстійкість, деталі корпусів" },
    { name: "ABS", type: "Engineering", desc: "Термостійкість, механічна міцність" },
    { name: "ASA", type: "Outdoor", desc: "UV-стійкість, зовнішнє використання" },
    { name: "TPU", type: "Flexible", desc: "Гнучкі деталі, ущільнювачі, демпфери" },
    { name: "Nylon", type: "Advanced", desc: "Зносостійкість, шестерні, механізми" },
    { name: "CF-PA", type: "Composite", desc: "Карбон-наповнений поліамід. Надвисока міцність." },
  ];

  return (
    <div className="w-full h-full flex flex-col p-16 relative">
      {/* Header */}
      <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-12">
        <div>
          <div className="text-[#FF0000] font-mono tracking-widest text-sm mb-2 uppercase">05 // Material Science</div>
          <h2 className="text-5xl font-bold uppercase tracking-tight text-white">
            Повний спектр <span className="text-gray-500">FDM-пластиків</span>
          </h2>
        </div>
        <div className="flex items-center gap-2 text-white/40 text-sm font-mono">
          <Layers size={16} className="text-[#FF0000]" />
          <span>MULTI-MATERIAL CAPABILITY</span>
        </div>
      </div>

      <div className="flex-1 relative">
        {/* Grid Layout */}
        <div className="grid grid-cols-4 gap-6">
          {materials.map((mat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`
                  p-6 border relative group flex flex-col justify-between h-48
                  ${mat.type === 'Composite'
                  ? 'bg-[#FF0000]/10 border-[#FF0000] col-span-2'
                  : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'}
                  transition-all
                `}
            >
              <div className="flex justify-between items-start">
                <span className={`
                       font-mono text-xs uppercase tracking-widest px-2 py-1 rounded-sm
                       ${mat.type === 'Composite' ? 'bg-[#FF0000] text-black font-bold' : 'bg-white/10 text-white/60'}
                    `}>
                  {mat.type}
                </span>
                <Hexagon size={16} className={mat.type === 'Composite' ? 'text-[#FF0000]' : 'text-white/20'} />
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white mb-2">{mat.name}</h3>
                <p className={`text-sm leading-tight ${mat.type === 'Composite' ? 'text-red-100' : 'text-gray-400'}`}>
                  {mat.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* "More" Block */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="p-6 border border-dashed border-white/20 bg-transparent flex flex-col justify-center items-center text-center h-48 group hover:border-[#FF0000]/50 transition-colors cursor-default"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-[#FF0000]/20 transition-colors">
              <Plus className="text-white/40 group-hover:text-[#FF0000]" />
            </div>
            <p className="text-white font-bold mb-1">Ваш матеріал</p>
            <p className="text-xs text-gray-500 px-4">Відкриті до роботи з будь-якими FDM-матеріалами за запитом.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MaterialsSlide;
