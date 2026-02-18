
import { motion, useScroll, useTransform } from 'motion/react';
import {
   Activity, ChevronDown, Printer, ShieldCheck,
   Layers, Zap, TrendingUp, Cpu, MonitorCheck, Settings,
   RotateCw, RefreshCcw, Box, Timer, Wrench, CheckCircle2,
   TrendingDown, Send, Mail, Phone, ExternalLink,
   PenTool
} from 'lucide-react';
// import bambuPrinterImg from 'figma:asset/784715ab52832cff85910287f0a864d4627a870d.png';
// import recMaterialImg from 'figma:asset/df5c564981730e90f086d3a5ddfad2b922a8b13e.png';
// import heroLogo from 'figma:asset/55bc3f5b6dbd462acfa949bdd95ea39793d0ba69.png';

const bambuPrinterImg = "/assets/printer.png";
// import recMaterialImg from 'figma:asset/df5c564981730e90f086d3a5ddfad2b922a8b13e.png';
const heroLogo = "/assets/figura-logo.png";

// === VISUAL ASSETS ===

const GridBackground = () => (
   <div
      className="absolute inset-0 opacity-10 pointer-events-none"
      style={{
         backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
         backgroundSize: '40px 40px',
         maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
      }}
   />
);

const TechDivider = () => (
   <div className="w-full h-16 relative flex items-center justify-center overflow-hidden my-12 opacity-50">
      {/* Center Line */}
      <div className="absolute inset-0 flex items-center">
         <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF0000]/30 to-transparent" />
      </div>

      {/* Central Hex/Node */}
      <div className="relative z-10 w-4 h-4 rotate-45 border border-[#FF0000]/50 bg-black flex items-center justify-center">
         <div className="w-1 h-1 bg-[#FF0000] rounded-full" />
      </div>

      {/* Decorative Brackets */}
      <div className="absolute left-[20%] text-[#FF0000]/20 font-mono text-[10px] tracking-[0.5em] hidden md:block">
      // SECTION_BREAK //
      </div>
      <div className="absolute right-[20%] text-[#FF0000]/20 font-mono text-[10px] tracking-[0.5em] hidden md:block">
      // SYSTEM_SYNC //
      </div>
   </div>
);

// New component to replace the background number markers
const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
   <div className="mb-16 border-l-2 border-[#FF0000] pl-6 py-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF0000]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
      {subtitle && (
         <div className="text-[#FF0000] font-mono text-sm tracking-widest uppercase mb-2">
            {subtitle}
         </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold font-rajdhani uppercase leading-tight text-white relative z-10">
         {title}
      </h2>
   </div>
);

const FeatureBlock = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
   <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start gap-4 p-6 border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-[#FF0000]/50 hover:bg-black/80 transition-all group"
   >
      <div className="p-3 bg-white/5 rounded-sm text-[#FF0000] group-hover:bg-[#FF0000] group-hover:text-white transition-colors">
         <Icon size={24} />
      </div>
      <div>
         <h3 className="text-xl font-bold font-rajdhani uppercase tracking-wide mb-2 text-white group-hover:text-[#FF0000] transition-colors">{title}</h3>
         <p className="text-gray-400 text-sm font-light leading-relaxed">{desc}</p>
      </div>
   </motion.div>
);


// Replaced simple block with complex TechCard for materials
const HazardStripes = ({ className = "" }: { className?: string }) => (
   <div className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
         backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 5px, #FF0000 5px, #FF0000 10px)'
      }}
   />
);

const CornerBrackets = () => (
   <>
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#FF0000]" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#FF0000]" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#FF0000]" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#FF0000]" />
   </>
);

const TechCard = ({
   title,
   subtitle,
   type = 'standard',
   className = '',
   icon: Icon
}: {
   title: string,
   subtitle?: string,
   type?: 'hero' | 'wide' | 'standard',
   className?: string,
   icon?: any
}) => {
   const isHero = type === 'hero';

   return (
      <motion.div
         whileHover={{ scale: 1.02 }}
         className={`relative bg-[#050505] border border-[#FF0000]/20 overflow-hidden group flex flex-col ${className}`}
      >
         {/* Background Tech Elements */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

         {/* Hero Style (PETG) */}
         {isHero && (
            <>
               <HazardStripes className="opacity-10" />

               <div className="absolute inset-4 border border-[#FF0000]/30 pointer-events-none">
                  <CornerBrackets />
               </div>
            </>
         )}

         {/* Content Container */}
         <div className={`relative z-10 flex flex-col ${isHero ? 'h-full items-center justify-center py-12' : 'p-6 h-full justify-between'}`}>

            {/* Icon */}
            {Icon && (
               <div className={`${isHero ? 'mb-6 text-[#FF0000]' : 'mb-4 text-gray-500 group-hover:text-[#FF0000] transition-colors'}`}>
                  <Icon size={isHero ? 64 : 24} />
               </div>
            )}

            {/* Text */}
            <div className={isHero ? 'text-center' : 'text-left'}>
               <h3 className={`font-bold font-rajdhani uppercase ${isHero ? 'text-6xl text-white drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]' : 'text-2xl text-gray-200 group-hover:text-white'}`}>
                  {title}
               </h3>
               {subtitle && (
                  <p className={`font-mono text-xs uppercase mt-2 ${isHero ? 'text-[#FF0000] bg-black/50 px-2 py-1 inline-block border border-[#FF0000]/30' : 'text-gray-600 group-hover:text-[#FF0000]'}`}>
                     {subtitle}
                  </p>
               )}
            </div>

            {/* Standard/Wide Decorations */}
            {!isHero && (
               <>
                  <div className="absolute top-0 right-0 p-2">
                     <CornerBrackets />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF0000]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
               </>
            )}
         </div>
      </motion.div>
   );
};

const PricingStack = () => {
   const layers = [
      { id: 1, label: "Операційні витрати", sub: "Operational Costs" },
      { id: 2, label: "Електроенергія", sub: "Energy Consumption" },
      { id: 3, label: "Обслуговування", sub: "Maintenance & Service" },
      { id: 4, label: "Матеріал", sub: "Raw Materials" }
   ];

   return (
      <div className="w-full max-w-5xl mx-auto py-12 flex justify-center items-center relative">
         <div className="w-full h-[600px] relative z-10">
            <svg viewBox="-100 -50 500 600" className="w-full h-full drop-shadow-[0_0_30px_rgba(255,0,0,0.15)]">
               <defs>
                  {/* Darker, Richer Red Gradient for Top Face (Less "bright/dead", more "deep glass") */}
                  <linearGradient id="glassTop" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" stopColor="rgba(180, 0, 0, 0.9)" />
                     <stop offset="50%" stopColor="rgba(120, 0, 0, 0.7)" />
                     <stop offset="100%" stopColor="rgba(160, 0, 0, 0.8)" />
                  </linearGradient>

                  {/* Darker Side Gradient */}
                  <linearGradient id="glassSide" x1="0%" y1="0%" x2="0%" y2="100%">
                     <stop offset="0%" stopColor="rgba(100, 0, 0, 0.95)" />
                     <stop offset="100%" stopColor="rgba(60, 0, 0, 1)" />
                  </linearGradient>

                  {/* Line Gradient: Fades in from 0 opacity (at pillow) to 100 opacity (at text) */}
                  <linearGradient id="lineGradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="#FF0000" stopOpacity="0" />
                     <stop offset="100%" stopColor="#FF0000" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="lineGradientLeft" x1="100%" y1="0%" x2="0%" y2="0%">
                     <stop offset="0%" stopColor="#FF0000" stopOpacity="0" />
                     <stop offset="100%" stopColor="#FF0000" stopOpacity="1" />
                  </linearGradient>
               </defs>

               {[...layers].reverse().map((layer, reverseIndex) => {
                  const index = layers.length - 1 - reverseIndex;

                  const yOffset = index * 90;
                  const startY = 50 + yOffset;
                  const isRight = index % 2 === 0;

                  // Geometry
                  const rightCorner = { x: 280, y: startY + 40 };
                  const leftCorner = { x: 20, y: startY + 40 };

                  // Text Connection Logic
                  // We want the line to end between the subtitle and title.
                  // The foreignObject is positioned relative to this.

                  // Line end points - reduced distance to text slightly for tighter integration
                  const lineLength = 120;
                  const lineEndRight = { x: rightCorner.x + lineLength, y: rightCorner.y };
                  const lineEndLeft = { x: leftCorner.x - lineLength, y: leftCorner.y };

                  return (
                     <g key={layer.id} className="group transition-all duration-300 hover:translate-y-[-5px]">

                        {/* CONNECTING LINES with Slide Effect */}
                        <path
                           d={isRight
                              ? `M ${rightCorner.x} ${rightCorner.y} L ${lineEndRight.x} ${lineEndRight.y}`
                              : `M ${leftCorner.x} ${leftCorner.y} L ${lineEndLeft.x} ${lineEndLeft.y}`
                           }
                           stroke={isRight ? "url(#lineGradientRight)" : "url(#lineGradientLeft)"}
                           strokeWidth="2"
                           fill="none"
                           strokeDasharray="200"
                           strokeDashoffset="200"
                           className="transition-all duration-1000 ease-out group-hover:stroke-dashoffset-0"
                           style={{ strokeDashoffset: 0 }} // Force show for now, but animation implies movement
                        />

                        {/* "Eye" / Dot at the text junction */}
                        <circle
                           cx={isRight ? lineEndRight.x : lineEndLeft.x}
                           cy={isRight ? lineEndRight.y : lineEndLeft.y}
                           r="5"
                           fill="#FF0000"
                           className="drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]"
                        />

                        {/* PILLOW SIDES (Solid Dark Red) */}
                        <path
                           d={`M 20 ${startY + 40} L 150 ${startY + 80} L 150 ${startY + 100} L 20 ${startY + 60} Z`}
                           fill="url(#glassSide)"
                           stroke="#880000"
                           strokeWidth="0.5"
                        />
                        <path
                           d={`M 280 ${startY + 40} L 150 ${startY + 80} L 150 ${startY + 100} L 280 ${startY + 60} Z`}
                           fill="url(#glassSide)"
                           stroke="#880000"
                           strokeWidth="0.5"
                        />

                        {/* PILLOW TOP FACE (Deep Glassy Red) */}
                        <path
                           d={`M 150 ${startY} L 280 ${startY + 40} L 150 ${startY + 80} L 20 ${startY + 40} Z`}
                           fill="url(#glassTop)"
                           stroke="#FF0000"
                           strokeWidth="1.5"
                           className="group-hover:brightness-110 transition-all duration-300"
                        />

                        {/* Inner Highlight for Glass Effect */}
                        <path
                           d={`M 30 ${startY + 42} L 150 ${startY + 75} L 270 ${startY + 42}`}
                           fill="none"
                           stroke="white"
                           strokeWidth="1"
                           strokeOpacity="0.15"
                           style={{ mixBlendMode: 'overlay' }}
                        />

                        {/* TEXT LABELS */}
                        {/* Positioned so the line ends exactly between the sub and title */}
                        <foreignObject
                           x={isRight ? lineEndRight.x + 15 : lineEndLeft.x - 315}
                           y={startY - 10}
                           width="300"
                           height="100"
                           className="overflow-visible"
                        >
                           <div className={`flex flex-col justify-center h-full ${isRight ? 'items-start text-left' : 'items-end text-right'}`}>
                              {/* Gap created by margins to let the line "enter" vertically centered */}
                              <div className="flex flex-col justify-center py-2">
                                 <span className="text-[#FF0000] font-mono text-xs uppercase tracking-widest mb-3 block">{layer.sub}</span>
                                 <h4 className="text-white font-rajdhani font-bold text-xl uppercase leading-none text-shadow-sm">{layer.label}</h4>
                              </div>
                           </div>
                        </foreignObject>
                     </g>
                  );
               })}
            </svg>
         </div>
      </div>
   );
};

const ProcessStep = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
   <div className="flex flex-col relative group">
      <div className="relative z-10 border-l border-white/10 pl-6 pb-12 group-hover:border-[#FF0000] transition-colors duration-500">
         <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-[#FF0000] rounded-full shadow-[0_0_10px_#FF0000] opacity-0 group-hover:opacity-100 transition-opacity" />

         <div className="mb-4 text-[#FF0000]"><Icon size={32} /></div>
         <h3 className="text-xl font-bold text-white uppercase mb-2">{title}</h3>
         <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{desc}</p>
      </div>
   </div>
);

const StepCard = ({ number, title, desc, isActive }: { number: string, title: string, desc: string, isActive?: boolean }) => (
   <div className={`flex flex-col gap-6 relative group ${isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100 transition-opacity'}`}>
      <div className="relative">
         {/* Active Indicator Pulse */}
         {isActive && (
            <div className="absolute -inset-4 bg-[#FF0000]/20 rounded-full blur-xl animate-pulse z-0" />
         )}

         {/* Number Box */}
         <div className={`relative z-10 w-16 h-16 flex items-center justify-center rounded-md text-2xl font-bold font-mono transition-all duration-300 border
            ${isActive
               ? 'bg-[#FF0000] border-[#FF0000] text-black shadow-[0_0_30px_rgba(255,0,0,0.6)] scale-110'
               : 'bg-black border-[#FF0000]/30 text-[#FF0000] group-hover:border-[#FF0000] group-hover:bg-[#FF0000] group-hover:text-black'
            }`}
         >
            {number}
         </div>
      </div>

      <div className="relative z-10">
         <h3 className={`text-2xl font-bold font-rajdhani uppercase mb-3 ${isActive ? 'text-white' : 'text-gray-300'}`}>
            {title}
         </h3>
         <p className="text-gray-400 text-sm font-mono leading-relaxed max-w-xs border-l border-white/10 pl-4">
            {desc}
         </p>
      </div>
   </div>
);

const ContactItem = ({ icon: Icon, label, value, href }: { icon: any, label: string, value: string, href: string }) => (
   <a
      href={href}
      className="flex items-center gap-4 p-4 border border-white/10 hover:border-[#FF0000] hover:bg-[#FF0000]/5 transition-all group"
   >
      <div className="text-[#FF0000] group-hover:scale-110 transition-transform">
         <Icon size={24} />
      </div>
      <div className="flex flex-col">
         <span className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-1">{label}</span>
         <span className="text-white font-rajdhani font-bold text-lg">{value}</span>
      </div>
      <ExternalLink size={16} className="ml-auto text-gray-600 group-hover:text-[#FF0000] opacity-0 group-hover:opacity-100 transition-all" />
   </a>
);

const LandingPage = () => {
   const { scrollY } = useScroll();
   const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

   // Extended scroll range for the new section
   const progressHeight = useTransform(scrollY, [0, 10000], ["0%", "100%"]);

   return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans selection:bg-[#FF0000] selection:text-white">
         <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap');
        
        .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        
        html { scroll-behavior: smooth; }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

         {/* === GLOBAL PROGRESS SPINE === */}
         <div className="fixed left-0 top-0 bottom-0 w-12 md:w-24 z-50 hidden lg:flex flex-col items-center border-r border-white/5 bg-black/40 backdrop-blur-sm">
            <div className="h-full w-[1px] bg-gradient-to-b from-[#FF0000] via-white/5 to-transparent relative">
               <motion.div
                  style={{ height: progressHeight }}
                  className="w-[2px] bg-[#FF0000] absolute top-0 -left-[0.5px] shadow-[0_0_15px_#FF0000]"
               />
            </div>

            {/* Spine Terminator */}
            <div className="absolute bottom-12 text-[#FF0000]">
               <div className="w-2 h-2 bg-[#FF0000] rotate-45 mb-2 mx-auto shadow-[0_0_10px_#FF0000]" />
               <div className="text-[10px] font-mono text-[#FF0000] opacity-50 rotate-90 origin-center whitespace-nowrap translate-y-8">
                  SYSTEM END
               </div>
            </div>
         </div>

         {/* === HERO SECTION === */}
         <section className="relative w-full h-[110vh] flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black">
               <GridBackground />
               <div className="absolute top-0 right-0 w-[60vh] h-full bg-gradient-to-l from-[#FF0000]/5 to-transparent" />
            </div>

            <div className="relative z-10 w-full max-w-7xl px-8 lg:px-12 h-full grid lg:grid-cols-2 gap-12 items-center">
               {/* Hero Logo with Darkness Effect */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="hidden lg:flex justify-center items-center"
               >
                  <div className="relative w-[500px] h-[500px] opacity-90">
                     <img
                        src={heroLogo}
                        alt="Figura Emblem"
                        className="w-full h-full object-contain"
                        style={{
                           maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
                           WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)'
                        }}
                     />
                  </div>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative"
               >
                  <div className="flex items-center gap-4 mb-6">
                     <div className="h-[1px] w-12 bg-[#FF0000]" />
                     <span className="text-[#FF0000] font-mono text-sm tracking-[0.2em] uppercase">
                        Defense Manufacturing Factory
                     </span>
                  </div>
                  {/* Updated Logo: No Gradient, Fixed Dot Alignment */}
                  <h1 className="text-8xl sm:text-[10rem] font-bold font-rajdhani leading-[0.85] tracking-tighter mb-8 uppercase text-white flex items-baseline">
                     Figura
                     <span className="text-[#FF0000] text-6xl ml-1">.</span>
                  </h1>
                  <p className="max-w-xl text-xl sm:text-2xl text-gray-400 font-light leading-relaxed border-l-2 border-white/10 pl-6">
                     Виробничий продакшин 3D-друку для оборонної промисловості.
                     <span className="block mt-2 text-white font-medium">Швидкість. Точність. Масштаб.</span>
                  </p>
               </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 z-20 pointer-events-none">
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
               <motion.div
                  style={{ opacity: opacityText }}
                  className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
               >
                  <span className="text-[10px] font-mono uppercase tracking-widest">Scroll System</span>
                  <ChevronDown className="animate-bounce text-[#FF0000]" />
               </motion.div>
            </div>
         </section>

         {/* === SECTION: PRODUCTION PLATFORM === */}
         <section className="relative w-full min-h-screen flex flex-col justify-center py-24 bg-[#020202]">
            <TechDivider />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32 grid lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-12">
                  <SectionHeader
                     subtitle="Core Infrastructure"
                     title="Виробнича Платформа"
                  />

                  <div className="grid gap-6">
                     <FeatureBlock icon={Printer} title="Екосистема Bambu Lab" desc="Єдина мережа принтерів P1S забезпечує 100% повторюваність деталей та стабільність якості." delay={0.1} />
                     <FeatureBlock icon={Box} title="FDM-технологія" desc="Промисловий рівень друку інженерними пластиками для задач оборонного комплексу." delay={0.2} />
                     <FeatureBlock icon={ShieldCheck} title="Контроль Якості" desc="Виділена команда QA з чіткими протоколами перевірки кожної партії." delay={0.3} />
                     <FeatureBlock icon={TrendingUp} title="Гнучке Масштабування" desc="Миттєве розгортання додаткових потужностей під ваші об'єми." delay={0.4} />
                  </div>
               </div>

               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative h-[600px] w-full"
               >
                  <div className="absolute inset-0 border border-white/10 p-2">
                     <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#FF0000] -translate-x-1 -translate-y-1" />
                     <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#FF0000] translate-x-1 translate-y-1" />
                     <div className="w-full h-full overflow-hidden bg-gray-900 relative flex items-center justify-center p-8">
                        <img
                           src={bambuPrinterImg}
                           alt="Bambu Lab P2S Printer"
                           className="w-full h-full object-contain relative z-10"
                        />
                        {/* Glow effect behind the printer */}
                        <div className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent opacity-20" />
                     </div>
                  </div>
               </motion.div>


            </div>
         </section>

         {/* === SECTION: SCALING === */}
         <section className="relative w-full py-24 bg-black">
            <TechDivider />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32">
               <div className="mb-20 max-w-3xl">
                  <SectionHeader
                     subtitle="Capacity Planning"
                     title="Наші поточні можливості + можливості масштабування"
                  />
                  <p className="text-xl text-gray-400 font-light max-w-2xl mt-8">
                     Наша модель дозволяє гнучко адаптувати виробничі потужності під замовлення будь-якого розміру.
                  </p>
               </div>
               {/* NEW VERTICAL TIMELINE COMPONENT */}
               <div className="relative flex flex-col gap-16 md:gap-24 py-12 mb-20">
                  {/* Vertical Connecting Line */}
                  <div className="absolute left-[27px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#FF0000] via-[#FF0000]/50 to-white/10 -translate-x-1/2 hidden md:block" />
                  <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#FF0000] via-[#FF0000]/50 to-white/10 -translate-x-1/2 md:hidden" />

                  {/* Node 1: CURRENT STATUS */}
                  <div className="relative grid grid-cols-[56px_1fr] md:grid-cols-[1fr_56px_1fr] items-start md:items-center gap-8 group">
                     {/* Left Content (Desktop) */}
                     <div className="hidden md:flex flex-col items-end text-right order-1">
                        <div className="inline-block px-3 py-1 bg-[#FF0000] text-black font-bold font-mono text-xs rounded mb-4">
                           ДОСТУПНО ЗАРАЗ
                        </div>
                        <h3 className="text-6xl md:text-7xl font-bold font-rajdhani text-white mb-2">
                           170 кг <span className="text-2xl md:text-3xl text-gray-500 font-medium">/ міс</span>
                        </h3>
                        <p className="text-[#FF0000] font-mono text-base uppercase tracking-wider mb-2">20 Принтерів (Вільний слот)</p>
                        <p className="text-gray-400 text-lg max-w-sm">Вільні потужності, готові до старту вашого проекту вже сьогодні.</p>
                     </div>

                     {/* Center Marker */}
                     <div className="relative flex justify-center order-1 md:order-2 h-full">
                        <div className="sticky top-1/2 -translate-y-1/2 w-14 h-14 bg-black border-2 border-[#FF0000] rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                           <div className="w-4 h-4 bg-[#FF0000] rounded-full shadow-[0_0_10px_#FF0000]" />
                        </div>
                     </div>

                     {/* Right Content (Mobile) */}
                     <div className="md:hidden flex flex-col items-start text-left order-2">
                        <div className="inline-block px-3 py-1 bg-[#FF0000] text-black font-bold font-mono text-xs rounded mb-4">
                           ДОСТУПНО ЗАРАЗ
                        </div>
                        <h3 className="text-6xl font-bold font-rajdhani text-white mb-2">
                           170 кг <span className="text-2xl text-gray-500 font-medium">/ міс</span>
                        </h3>
                        <p className="text-[#FF0000] font-mono text-sm uppercase tracking-wider mb-2">20 Принтерів (Вільний слот)</p>
                        <p className="text-gray-400 text-base">Вільні потужності, готові до старту вашого проекту вже сьогодні.</p>
                     </div>

                     {/* Empty Right (Desktop) */}
                     <div className="hidden md:block order-3" />
                  </div>

                  {/* Node 2: SCALING */}
                  <div className="relative grid grid-cols-[56px_1fr] md:grid-cols-[1fr_56px_1fr] items-start md:items-center gap-8 group">
                     {/* Empty Left (Desktop) */}
                     <div className="hidden md:block order-1" />

                     {/* Center Marker */}
                     <div className="relative flex justify-center order-1 md:order-2 h-full">
                        <div className="sticky top-1/2 -translate-y-1/2 w-14 h-14 bg-black border-2 border-white/20 group-hover:border-[#FF0000] transition-colors rounded-full flex items-center justify-center z-10">
                           <span className="font-rajdhani font-bold text-xl text-white/50 group-hover:text-white transition-colors">02</span>
                        </div>
                     </div>

                     {/* Right Content */}
                     <div className="flex flex-col items-start text-left order-2 md:order-3">
                        <div className="inline-block px-3 py-1 border border-white/20 text-gray-400 font-mono text-xs rounded mb-4 uppercase">
                           Сценарій Масштабування
                        </div>
                        <h3 className="text-6xl md:text-7xl font-bold font-rajdhani text-white mb-2 group-hover:text-[#FF0000] transition-colors">
                           420+ кг <span className="text-2xl md:text-3xl text-gray-500 font-medium group-hover:text-[#FF0000]/50 transition-colors">/ міс</span>
                        </h3>
                        <p className="text-white font-mono text-base uppercase tracking-wider mb-2">50 Принтерів</p>
                        <p className="text-gray-400 text-lg max-w-sm mb-6">Розгортання додаткових потужностей за 2-3 тижні.</p>

                        {/* Readiness Matrix */}
                        <div className="w-full bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
                           <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                              <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Готовність до запуску</span>
                              <span className="text-[#FF0000] font-mono font-bold text-sm">100%</span>
                           </div>
                           <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                              {['Постачальник', 'Персонал', 'Приміщення'].map(item => (
                                 <div key={item} className="flex items-center gap-2 px-3 py-2 bg-black/40 border border-white/5 rounded text-xs text-gray-200 font-medium">
                                    <div className="w-1.5 h-1.5 bg-[#FF0000] rounded-full shadow-[0_0_8px_#FF0000]" />
                                    {item}
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Node 3: FUTURE */}
                  <div className="relative grid grid-cols-[56px_1fr] md:grid-cols-[1fr_56px_1fr] items-start md:items-center gap-8 group opacity-60 hover:opacity-100 transition-opacity">
                     {/* Left Content (Desktop) */}
                     <div className="hidden md:flex flex-col items-end text-right order-1">
                        <div className="inline-block px-3 py-1 border border-white/10 text-gray-500 font-mono text-xs rounded mb-4 uppercase">
                           Unlimited
                        </div>
                        <h3 className="text-6xl md:text-7xl font-bold font-rajdhani text-gray-300 mb-2">∞</h3>
                        <p className="text-gray-400 font-mono text-base uppercase tracking-wider mb-2">100+ Принтерів</p>
                        <p className="text-gray-600 text-lg max-w-sm">Індивідуальне масштабування під великий контракт.</p>
                     </div>

                     {/* Center Marker */}
                     <div className="relative flex justify-center order-1 md:order-2 h-full">
                        <div className="sticky top-1/2 -translate-y-1/2 w-14 h-14 bg-black border-2 border-white/10 rounded-full flex items-center justify-center z-10">
                           <span className="font-rajdhani font-bold text-xl text-white/20">03</span>
                        </div>
                     </div>

                     {/* Right Content (Mobile) */}
                     <div className="md:hidden flex flex-col items-start text-left order-2">
                        <div className="inline-block px-3 py-1 border border-white/10 text-gray-500 font-mono text-xs rounded mb-4 uppercase">
                           Unlimited
                        </div>
                        <h3 className="text-6xl font-bold font-rajdhani text-gray-300 mb-2">∞</h3>
                        <p className="text-gray-400 font-mono text-sm uppercase tracking-wider mb-2">100+ Принтерів</p>
                        <p className="text-gray-600 text-base">Індивідуальне масштабування під великий контракт.</p>
                     </div>

                     {/* Empty Right (Desktop) */}
                     <div className="hidden md:block order-3" />
                  </div>
               </div>
               {/* Garbage:
               <StatCard label="Сценарій B" value="420+ кг" subtext="Подуктивність на місяць (50 принтерів)" />
            */}


            </div>
         </section>

         {/* === SECTION: QUALITY CONTROL === */}
         <section className="relative w-full py-24 bg-[#020202]">
            <TechDivider />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32">
               <div className="mb-20">
                  <SectionHeader
                     subtitle="QC Protocols"
                     title="Контроль якості на кожному етапі"
                  />
               </div>
               <ProcessStep icon={MonitorCheck} title="Протоколи" desc="Комплексний чек-лист перевірки деталей, принтерів та простору перед запуском." />
               <ProcessStep icon={Cpu} title="Monitoring" desc="Централізований моніторинг через Bambu Lab Farm Manager 24/7." />
               <ProcessStep icon={RotateCw} title="Екосистема" desc="Ідентичні налаштування на всіх 20+ принтерах для повної консистентності." />
               <ProcessStep icon={Settings} title="Профілактика" desc="Регулярне технічне обслуговування для запобігання збоям." />
            </div>
         </section>

         {/* === SECTION: MATERIALS === */}
         <section className="relative w-full py-24 bg-black">
            <TechDivider />
            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32 flex flex-col items-start gap-12">
               <div className="w-full">
                  <SectionHeader title="Матеріали" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                     <p className="text-gray-400 font-light max-w-xl">Повний спектр FDM-пластиків для будь-яких задач.</p>
                     <div className="flex items-center gap-3 text-sm font-mono text-[#FF0000] uppercase border border-[#FF0000]/30 bg-[#FF0000]/5 px-4 py-2 rounded">
                        <PenTool size={16} />
                        <span className="font-bold tracking-wider">Можливе індивідуальне замовлення</span>
                     </div>
                  </div>
               </div>

               <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[minmax(140px,auto)]">
                  {/* PETG - Hero Item (2x2) */}
                  <TechCard
                     title="PETG"
                     type="hero"
                     icon={Box}
                     subtitle="Universal Defense Standard"
                     className="col-span-2 row-span-2 min-h-[300px]"
                  />

                  {/* Standard Items */}
                  <TechCard title="PLA" subtitle="Rapid Prototyping" icon={Layers} />
                  <TechCard title="TPU" subtitle="Flexible Components" icon={Activity} />
                  <TechCard title="ASA" subtitle="UV Resistant" icon={ShieldCheck} />
                  <TechCard title="ABS" subtitle="High Temp Resistance" icon={Zap} />

                  {/* Wide Items */}
                  <TechCard title="Nylon" type="wide" subtitle="Engineering Grade" icon={Settings} className="col-span-1 md:col-span-2" />
                  <TechCard title="Carbon Fiber" type="wide" subtitle="Max Strength" icon={Cpu} className="col-span-1 md:col-span-2" />
               </div>
            </div>
         </section>

         {/* === SECTION: LEAD TIME === */}
         <section className="relative w-full py-24 bg-[#020202] overflow-hidden">
            <TechDivider />
            <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#FF0000]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32 flex flex-col items-center text-center">

               <div className="mb-12">
                  <div className="flex items-center justify-center gap-3 text-[#FF0000] font-mono mb-4">
                     <Timer className="animate-pulse" />
                     <span className="uppercase tracking-[0.2em]">Efficiency Protocol</span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold font-rajdhani uppercase text-white mb-8">
                     Прозорий Lead Time
                  </h2>
               </div>

               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-full p-px bg-gradient-to-r from-transparent via-[#FF0000]/30 to-transparent mb-12"
               >
                  <div className="bg-black/80 border border-white/10 p-8 md:p-16 relative overflow-hidden">
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

                     <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-2xl md:text-4xl font-mono font-bold">
                        <span className="text-gray-400">Lead Time =</span>
                        {/* Increased contrast for the text and underline */}
                        <span className="text-white border-b-4 border-[#FF0000] pb-1 font-bold tracking-wide shadow-[0_4px_10px_rgba(255,0,0,0.3)]">Час Друку Вашого STL</span>
                        <span className="text-[#FF0000]">+</span>
                        <span className="text-white">1 година</span>
                     </div>

                     <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400 font-mono">
                        <div className="flex items-center gap-2">
                           <CheckCircle2 size={16} className="text-[#FF0000]" />
                           <span>Розрахунок одразу після аналізу</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <RefreshCcw size={16} className="text-[#FF0000]" />
                           <span>Зміна деталі = 0 годин затримки</span>
                        </div>
                     </div>
                  </div>
               </motion.div>

            </div>
         </section>

         {/* === SECTION: RELIABILITY === */}
         <section className="relative w-full py-24 bg-black">
            <TechDivider />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32">
               <SectionHeader title="Безперебійне Виробництво" />

               <div className="grid md:grid-cols-3 gap-6 mb-16">
                  {[
                     { icon: Zap, title: "Енергонезалежність", desc: "Виробництво не зупиняється. Маємо стабільне підключення та не залежимо від відключень." },
                     { icon: Printer, title: "Резервні Принтери", desc: "Миттєва заміна обладнання у випадку будь-якої н��справності." },
                     { icon: Wrench, title: "Планова Профілактика", desc: "Ми знаємо ресурс кожної деталі та замінюємо її завчасно." }
                  ].map((item, i) => (
                     <div key={i} className="p-8 bg-white/[0.02] border border-white/5 hover:border-[#FF0000]/30 transition-colors group">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[#FF0000] mb-6 group-hover:scale-110 transition-transform">
                           <item.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white uppercase mb-3">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                     </div>
                  ))}
               </div>

               {/* Reliability Formula UI - Updated to match screenshot */}
               <div className="w-full bg-[#120202] border border-[#FF0000]/30 flex flex-col md:flex-row items-stretch relative overflow-hidden group min-h-[100px]">
                  {/* Decorative Background */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,0,0,0.03)_10px,rgba(255,0,0,0.03)_20px)]" />

                  {/* Left Label Section */}
                  <div className="w-full md:w-auto bg-[#1F0505] border-b md:border-b-0 md:border-r border-[#FF0000]/30 flex flex-col justify-center px-8 py-6 relative shrink-0">
                     <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#FF0000]" />
                     <span className="text-[#FF0000] font-mono font-bold text-xs tracking-[0.2em] leading-relaxed block">
                        LIABILITY<br />FORMULA
                     </span>
                     <div className="w-12 h-[1px] bg-[#FF0000]/50 mt-3" />
                  </div>

                  {/* Right Content Section */}
                  <div className="flex-1 flex items-center overflow-hidden py-6 px-6 md:px-12 relative">
                     {/* Fade mask for mobile overflow */}
                     <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#120202] to-transparent z-10 pointer-events-none md:hidden" />

                     {/* Content Container - Scrollable on mobile if needed, fit on desktop */}
                     <div className="w-full overflow-x-auto md:overflow-visible no-scrollbar">
                        <p className="font-rajdhani font-medium text-white text-sm md:text-base lg:text-lg tracking-wide whitespace-nowrap text-center">
                           Енергонезалежність + Резервні Принтери + Прогнозоване Обслуговування
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* === SECTION: PRICING APPROACH === */}
         <section className="relative w-full py-24 bg-[#020202]">
            <TechDivider />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32">
               <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold font-rajdhani uppercase mb-4 text-white">
                     Прозора структура <span className="text-[#FF0000]">Ціни</span>
                  </h2>
                  <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">Ціна формується індивідуально під ваш обʼєм і деталь.</p>
               </div>

               <PricingStack />

               <div className="flex flex-col items-center gap-6 mt-12">
                  <div className="flex items-center gap-3 text-[#FF0000] bg-[#FF0000]/10 px-6 py-2 rounded-full border border-[#FF0000]/20">
                     <TrendingDown size={20} />
                     <span className="font-mono font-bold uppercase tracking-wider text-sm">Більший обʼєм = краща ц��на за кг</span>
                  </div>
                  <p className="text-gray-300 font-mono text-xs uppercase tracking-widest">
                     Ми точно знаємо свою собівартість. Деталі — обговорюємо особисто.
                  </p>
               </div>
            </div>
         </section>

         {/* === SECTION: CONTACT (FINAL CTA) === */}
         <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col justify-between pt-24">
            <TechDivider />

            {/* Subtle background glow for the finale */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_bottom,_var(--tw-gradient-stops))] from-[#FF0000]/10 via-black to-black opacity-50 pointer-events-none" />
            <GridBackground />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32 flex-1 flex flex-col justify-center">

               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mb-40 max-w-4xl mx-auto text-center flex flex-col items-center"
               >
                  <div className="flex items-center justify-center gap-4 mb-8">
                     <div className="h-[2px] w-16 bg-[#FF0000]" />
                     <span className="text-[#FF0000] font-mono text-sm tracking-[0.3em] uppercase">Ready To Launch</span>
                     <div className="h-[2px] w-16 bg-[#FF0000]" />
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold font-rajdhani uppercase leading-[0.9] mb-8 text-white">
                     Надішліть нам STL <br />
                     <span className="bg-[#FF0000] text-white px-3 py-1 inline-block transform -skew-x-6 my-2">ми порахуємо</span> <br />
                     строки і вартість.
                  </h2>
               </motion.div>

               {/* Steps Visual */}
               <div className="grid md:grid-cols-3 gap-16 lg:gap-32 mb-40 relative">
                  {/* Connecting Line (Desktop) */}
                  <div className="hidden md:block absolute top-8 left-8 right-8 h-[2px] bg-white/10 z-0 rounded-full overflow-hidden">
                     {/* Progressive active line showing we are at step 1 */}
                     <div className="h-full w-[20%] bg-gradient-to-r from-[#FF0000] via-[#FF0000] to-transparent shadow-[0_0_20px_#FF0000]" />
                  </div>

                  <StepCard
                     number="01"
                     title="Надсилаєте Файл"
                     desc="Надішліть нам STL-файл вашої де��алі через Telegram або Email."
                     isActive={true}
                  />
                  <StepCard
                     number="02"
                     title="Отримуєте Розрахунок"
                     desc="Ми аналізуємо геометрію та повідомляємо точний lead time та ціну."
                  />
                  <StepCard
                     number="03"
                     title="Старт Виробництва"
                     desc="Після погодження ми негайно запускаємо друк вашої партії."
                  />
               </div>

               {/* Contact Grid */}
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <ContactItem
                     icon={Send}
                     label="Telegram"
                     value="@haupttmann"
                     href="https://t.me/haupttmann"
                  />
                  <ContactItem
                     icon={Mail}
                     label="Email"
                     value="figtech.main@gmail.com"
                     href="mailto:figtech.main@gmail.com"
                  />
                  <ContactItem
                     icon={Phone}
                     label="Phone / Остап"
                     value="+38 (066) 244 67 34"
                     href="tel:+380662446734"
                  />
               </div>

            </div>

            {/* === FOOTER LOGO === */}
            <div className="w-full border-t border-white/5 py-12 mt-48 relative z-10 bg-black">
               <div className="w-full max-w-7xl mx-auto px-8 lg:pl-32 flex flex-col md:flex-row items-center justify-between gap-8 opacity-50 hover:opacity-100 transition-opacity">
                  <h2 className="text-4xl font-bold font-rajdhani uppercase text-white select-none">
                     Figu<span className="text-gray-600">ra</span><span className="text-[#FF0000]">.</span>
                  </h2>
                  <p className="text-xs font-mono text-gray-500 text-center md:text-right">
                     © 2024 Figura Defense Manufacturing. <br />
                     All rights reserved. Glory to Ukraine.
                  </p>
               </div>
            </div>
         </section>

      </div>
   );
};

export default LandingPage;
