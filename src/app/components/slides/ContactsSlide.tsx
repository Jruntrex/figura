import { motion } from 'motion/react';
import { Send, FileSearch, Play, Phone, Mail, MessageSquare, Radio } from 'lucide-react';

const ContactSlide = () => {
  const steps = [
    {
      icon: <Send size={32} className="text-white" />,
      text: "Ви надсилаєте STL-файл",
      subtext: "Telegram / Email"
    },
    {
      icon: <FileSearch size={32} className="text-white" />,
      text: "Аналіз та розрахунок",
      subtext: "Lead time + Вартість"
    },
    {
      icon: <Play size={32} className="text-white" />,
      text: "Запуск виробництва",
      subtext: "Миттєвий старт"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col p-16 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF0000]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay" />

      {/* Header / Main CTA */}
      <div className="mb-20 relative z-10">
        <div className="flex items-center gap-3 text-[#FF0000] font-mono mb-4">
          <Radio className="animate-pulse" size={20} />
          <span className="tracking-[0.2em] uppercase">Ready to Deploy</span>
        </div>

        <h2 className="text-6xl sm:text-7xl font-bold uppercase leading-tight text-white max-w-4xl">
          Надішліть нам STL — <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] to-red-600">
            ми порахуємо строки
          </span>
        </h2>
      </div>

      <div className="flex-1 flex gap-16 relative z-10">

        {/* Steps Flow */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex items-center gap-6 group"
              >
                {/* Number */}
                <div className="font-mono text-[#FF0000]/50 text-xl font-bold">0{i + 1}</div>

                {/* Icon Box */}
                <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm group-hover:bg-[#FF0000] group-hover:border-[#FF0000] transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  {step.icon}
                </div>

                {/* Text */}
                <div>
                  <div className="text-2xl font-bold text-white uppercase tracking-wide">{step.text}</div>
                  <div className="text-gray-500 font-mono text-sm">{step.subtext}</div>
                </div>

                {/* Connector Line (except last) */}
                {i < steps.length - 1 && (
                  <div className="h-8 w-[1px] bg-white/10 absolute left-[3.25rem] -bottom-4 hidden" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Information Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-1/3 bg-black/80 border border-white/20 backdrop-blur-sm p-8 flex flex-col justify-between h-fit self-end shadow-2xl relative"
        >
          {/* Decorative corner markers */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#FF0000]" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#FF0000]" />

          <div className="mb-8 border-b border-white/10 pb-4">
            <h3 className="text-white text-xl font-bold uppercase tracking-widest mb-1">Контакти</h3>
            <p className="text-gray-500 text-xs font-mono">SECURE CHANNEL OPEN</p>
          </div>

          <div className="space-y-6">
            <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
              <Phone size={20} className="text-[#FF0000]" />
              <span className="font-mono text-lg tracking-wider group-hover:translate-x-2 transition-transform">+380 99 000 00 00</span>
            </a>
            <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
              <Mail size={20} className="text-[#FF0000]" />
              <span className="font-mono text-lg tracking-wider group-hover:translate-x-2 transition-transform">hello@figura.ua</span>
            </a>
            <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
              <MessageSquare size={20} className="text-[#FF0000]" />
              <span className="font-mono text-lg tracking-wider group-hover:translate-x-2 transition-transform">@figura_manager</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <div className="text-[#FF0000] font-black text-2xl tracking-tighter uppercase">Figura</div>
            <div className="text-[10px] text-gray-600 font-mono tracking-[0.5em] uppercase">Defense Manufacturing</div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ContactSlide;
