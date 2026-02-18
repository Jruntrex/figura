import React from 'react';
import { motion } from 'motion/react';
import { Printer, Users, TrendingUp, Cpu } from 'lucide-react';

interface SlideProps {
  image: string;
}

const AboutSlide: React.FC<SlideProps> = ({ image }) => {
  const bullets = [
    {
      icon: <Printer className="text-[#FF0000]" size={24} />,
      title: "Єдина екосистема Bambu Lab P1S",
      desc: "Стабільність і повторюваність результату на кожному принтері"
    },
    {
      icon: <Cpu className="text-[#FF0000]" size={24} />,
      title: "FDM-технологія промислового рівня",
      desc: "Високоточний друк технічними пластиками (ABS, ASA, PA-CF)"
    },
    {
      icon: <Users className="text-[#FF0000]" size={24} />,
      title: "Команда з протоколами контролю",
      desc: "Власний відділ якості та стандартизовані процеси виробництва"
    },
    {
      icon: <TrendingUp className="text-[#FF0000]" size={24} />,
      title: "Масштабування під ваші потреби",
      desc: "Гнучке розширення потужностей в залежності від обсягу замовлення"
    }
  ];

  return (
    <div className="w-full h-full flex flex-row p-16 relative">
      {/* Decorative header line */}
      <div className="absolute top-16 left-16 right-16 h-[1px] bg-white/10 flex justify-between items-center">
        <div className="h-1 w-16 bg-[#FF0000]"></div>
        <div className="text-[10px] font-mono text-[#FF0000] tracking-widest uppercase">02 // Who We Are</div>
      </div>

      {/* Left Content */}
      <div className="w-1/2 flex flex-col justify-center pr-12 pt-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-[#FF0000] font-mono tracking-widest text-sm mb-2 uppercase">Про нас</h4>
          <h2 className="text-6xl font-bold uppercase tracking-tight text-white mb-12">
            Виробнича <br /> <span className="text-white/50">Платформа</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {bullets.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-4 group"
            >
              <div className="p-3 bg-white/5 border border-white/10 rounded-sm group-hover:border-[#FF0000]/50 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400 font-light text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Visual */}
      <div className="w-1/2 flex items-center justify-center relative pl-8 pt-12">
        {/* Frame decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-12 right-0 w-32 h-32 border-t-2 border-r-2 border-[#FF0000]/30 rounded-tr-3xl" />
          <div className="absolute bottom-0 left-8 w-32 h-32 border-b-2 border-l-2 border-[#FF0000]/30 rounded-bl-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'grayscale(100%)' }}
          animate={{ opacity: 1, scale: 1, filter: 'grayscale(0%)' }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full aspect-[4/3] overflow-hidden border border-white/10 bg-black"
        >
          <img
            src={image}
            alt="3D Printer Farm"
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
          />

          {/* HUD Overlay on image */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-24" />
          <div className="absolute bottom-4 left-4 flex gap-4">
            <div className="text-xs font-mono text-[#FF0000]">
              STATUS: OPERATIONAL
            </div>
            <div className="text-xs font-mono text-white/50">
              TEMP: 220°C
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSlide;
