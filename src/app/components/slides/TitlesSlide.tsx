import React from 'react';
import { motion } from 'motion/react';
import { Scan, Shield, Target, Cpu, Activity, ChevronRight } from 'lucide-react';

// Assets
import redLogo from 'figma:asset/55bc3f5b6dbd462acfa949bdd95ea39793d0ba69.png';
import diagonalStripes from 'figma:asset/ad25f8ee450118f224a5c1bca765c3ee971af245.png';
import droneImage from 'figma:asset/792a7420976113e8562229857a65dcff9a8cb65e.png';

interface SlideProps {
  onNext: () => void;
}

const TitleSlide: React.FC<SlideProps> = ({ onNext }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-16">
          
      {/* Header Bar */}
      <div className="flex justify-between items-start border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-white/40">
          <Scan size={14} className="text-[#FF0000]" />
          <span>SYSTEM: ONLINE</span>
          <span className="mx-2">|</span>
          <span>SECURE CONNECTION</span>
        </div>
        <div className="text-right">
          <div className="text-xs font-mono text-[#FF0000] tracking-widest">RESTRICTED ACCESS // LEVEL 5</div>
          <div className="text-[10px] text-white/30 font-mono mt-1">DEFENSE PROTOCOLS ACTIVE</div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-row items-center relative">
        
        {/* Left Column: Text */}
        <div className="w-7/12 flex flex-col justify-center z-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 flex items-center gap-4"
          >
              <img src={redLogo} alt="Figura Logo" className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]" />
              <div className="h-12 w-[2px] bg-white/20"></div>
              <span className="font-mono text-[#FF0000] tracking-[0.3em] text-sm uppercase">Advanced Manufacturing</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[140px] leading-[0.85] font-bold tracking-tighter text-white uppercase mb-2 drop-shadow-2xl"
          >
            Figura
          </motion.h1>

          {/* Decorative line under title */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-2 bg-[#FF0000] mb-8 relative overflow-hidden"
          >
              <div className="absolute inset-0 bg-white/50 w-full animate-[shimmer_2s_infinite]" />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl font-light text-gray-200 leading-tight max-w-2xl border-l-4 border-[#FF0000]/50 pl-6"
          >
            Виробнича платформа 3D-друку <br/>
            <span className="font-semibold text-white">для оборонної промисловості</span>
          </motion.p>
          
          {/* Tech Stats / Specs */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex gap-8"
          >
            <div className="flex items-center gap-3">
                <Shield className="text-[#FF0000]" size={24} />
                <div>
                  <div className="text-xs text-white/40 font-mono uppercase">Standard</div>
                  <div className="text-lg font-bold">MIL-STD-810G</div>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <Cpu className="text-[#FF0000]" size={24} />
                <div>
                  <div className="text-xs text-white/40 font-mono uppercase">Precision</div>
                  <div className="text-lg font-bold">±0.05 mm</div>
                </div>
            </div>
              <div className="flex items-center gap-3">
                <Activity className="text-[#FF0000]" size={24} />
                <div>
                  <div className="text-xs text-white/40 font-mono uppercase">Output</div>
                  <div className="text-lg font-bold">24/7 Rapid</div>
                </div>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Visual */}
        <div className="w-5/12 h-full relative flex items-center justify-center">
          {/* Background decorative elements for the image */}
          <div className="absolute inset-0 border border-white/5 bg-white/5 transform skew-x-[-12deg] translate-x-12" />
          
          <motion.div
            initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative z-10 w-full"
          >
            <div className="relative">
              {/* Drone Image */}
              <img 
                src={droneImage} 
                alt="Defense Drone" 
                className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(255,0,0,0.15)] grayscale-[30%] contrast-125 hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Overlay UI on top of drone */}
              <div className="absolute top-10 right-10 flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1">
                    <Target size={16} className="text-[#FF0000] animate-pulse" />
                    <span className="text-[10px] font-mono text-[#FF0000]">TARGET LOCKED</span>
                  </div>
                  <div className="w-24 h-[1px] bg-[#FF0000]/50"></div>
              </div>

              {/* Corner markers */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#FF0000]" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#FF0000]" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative h-16 flex items-end justify-between border-t border-white/10 pt-4">
          {/* Scrolling ticker */}
          <div className="absolute bottom-4 left-0 right-0 h-full overflow-hidden opacity-20 pointer-events-none flex items-center justify-center">
            <div className="whitespace-nowrap font-mono text-[10px] text-[#FF0000] animate-marquee">
              3D PRINTING // ADDITIVE MANUFACTURING // DEFENSE SECTOR // UKRAINE // MILTECH // FIGURA // INNOVATION // RAPID PROTOTYPING // 
              3D PRINTING // ADDITIVE MANUFACTURING // DEFENSE SECTOR // UKRAINE // MILTECH // FIGURA // INNOVATION // RAPID PROTOTYPING //
            </div>
          </div>

          <div className="flex gap-12 z-10 bg-black/50 backdrop-blur-sm px-4 py-2">
            <div className="text-left">
              <h4 className="text-[10px] text-white/40 font-mono uppercase tracking-widest mb-1">Location</h4>
              <p className="font-bold text-sm tracking-wide">KYIV, UKRAINE</p>
            </div>
            <div className="text-left">
              <h4 className="text-[10px] text-white/40 font-mono uppercase tracking-widest mb-1">Date</h4>
              <p className="font-bold text-sm tracking-wide">2026.02.12</p>
            </div>
          </div>

          <div 
            onClick={onNext}
            className="z-10 bg-black/50 backdrop-blur-sm px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-white/5 transition-colors group"
          >
            <span className="text-sm font-bold tracking-widest group-hover:text-[#FF0000] transition-colors">START PRESENTATION</span>
            <ChevronRight className="text-[#FF0000] animate-bounce-x" size={16} />
          </div>
          
          {/* Diagonal stripe decoration */}
          <div 
            className="absolute bottom-0 right-0 w-64 h-2 opacity-50" 
            style={{ backgroundImage: `url(${diagonalStripes})`, backgroundSize: '10px 10px' }} 
          />
      </div>
    </div>
  );
};

export default TitleSlide;
