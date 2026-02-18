import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TitleSlide from './slides/TitlesSlide';
import AboutSlide from './slides/AboutSlide';
import ScaleSlide from './slides/ScaleSlide';
import QualitySlide from './slides/QualitySlide';
import MaterialsSlide from './slides/MaterialsSlide';
import LeadTimeSlide from './slides/LeadTimeSlide';
import ReliabilitySlide from './slides/ReliabilitySlide';
import PricingSlide from './slides/PricingSlide';
import ContactSlide from './slides/ContactsSlide';

// Assets (reusing from previous context)
import hudTexture from 'figma:asset/2b86e5767365843c0b4ac437098e727e6485892f.png';

const Deck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <TitleSlide onNext={() => setCurrentSlide(1)} />,
    <AboutSlide image="/assets/printer.png" />,
    <ScaleSlide />,
    <QualitySlide />,
    <MaterialsSlide />,
    <LeadTimeSlide />,
    <ReliabilitySlide />,
    <PricingSlide />,
    <ContactSlide />
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(curr => curr + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(curr => curr - 1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slides.length]); // Updated dependency

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#111] p-4 sm:p-8 overflow-hidden select-none">
      {/* 16:9 Slide Container */}
      <div
        className="relative w-full max-w-[1920px] aspect-video bg-black text-white shadow-2xl overflow-hidden border border-[#333]"
        style={{ fontFamily: '"Rajdhani", sans-serif' }}
      >
        {/* === Global Background Layers === */}

        {/* 1. Base Gradient */}
        <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-[#1a1a1a] to-black opacity-80 pointer-events-none" />

        {/* 2. Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* 3. HUD Texture Overlay */}
        <div
          className="absolute inset-0 opacity-15 mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: `url(${hudTexture})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* 4. Red Glow Accents (Global) */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#FF0000] opacity-5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#FF0000] opacity-5 blur-[120px] rounded-full pointer-events-none" />

        {/* === Slide Content === */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>

        {/* === Navigation UI (Hover to see) === */}
        <div className="absolute bottom-8 right-8 z-50 flex gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 bg-white/10 hover:bg-[#FF0000] disabled:opacity-30 disabled:hover:bg-white/10 transition-colors rounded-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center px-4 bg-white/10 font-mono text-sm">
            {currentSlide + 1} / {slides.length}
          </div>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-2 bg-white/10 hover:bg-[#FF0000] disabled:opacity-30 disabled:hover:bg-white/10 transition-colors rounded-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 bg-radial-[circle_at_center_transparent_0%,rgba(0,0,0,0.8)_100%] pointer-events-none" />

      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(25%); }
        }
      `}</style>
    </div>
  );
};

export default Deck;
