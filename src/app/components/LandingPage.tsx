import { Suspense, lazy } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from '@/app/context/LanguageContext';
import { Navbar } from '@/components/layout/Navbar';
import { GlobalProgressSpine } from '@/features/landing/components/GlobalProgressSpine';
import { HeroSection } from '@/features/landing/sections/HeroSection';
import { ProductionSection } from '@/features/landing/sections/ProductionSection';
import { Footer } from '@/components/layout/Footer';

// Lazy loaded heavy sections
const ScalingSection = lazy(() => import('@/features/landing/sections/ScalingSection').then(m => ({ default: m.ScalingSection })));
const QualitySection = lazy(() => import('@/features/landing/sections/QualitySection').then(m => ({ default: m.QualitySection })));
const MaterialsSection = lazy(() => import('@/features/landing/sections/MaterialsSection').then(m => ({ default: m.MaterialsSection })));
const LeadTimeSection = lazy(() => import('@/features/landing/sections/LeadTimeSection').then(m => ({ default: m.LeadTimeSection })));
const ReliabilitySection = lazy(() => import('@/features/landing/sections/ReliabilitySection').then(m => ({ default: m.ReliabilitySection })));
const PricingSection = lazy(() => import('@/features/landing/sections/PricingSection').then(m => ({ default: m.PricingSection })));
const FarmGallery = lazy(() => import('@/features/landing/sections/FarmGallery').then(m => ({ default: m.FarmGallery })));
const CEOSection = lazy(() => import('@/features/landing/sections/CEOSection').then(m => ({ default: m.CEOSection })));
const ContactSection = lazy(() => import('@/features/landing/sections/ContactSection').then(m => ({ default: m.ContactSection })));

// Loader placeholder
const SectionLoader = () => (
   <div className="w-full h-96 bg-carbon/50 animate-pulse flex items-center justify-center text-defense/20 font-mono text-sm tracking-widest">
      LOADING SYSTEM...
   </div>
);

const LandingPage = () => {
   return (
      <LanguageProvider>
         <HelmetProvider>
            <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans selection:bg-defense selection:text-white">
               <Helmet>
                  <title>FIGURA | Defense 3D Manufacturing</title>
                  <meta name="description" content="Виробничий продакшин 3D-друку для оборонної промисловості. Швидкість. Точність. Масштаб." />
                  <meta name="theme-color" content="#FF0000" />
               </Helmet>

               {/* === NAVBAR === */}
               <Navbar />

               {/* === GLOBAL PROGRESS SPINE === */}
               <GlobalProgressSpine />

               <main>
                  {/* Critical Sections (LCP) */}
                  <HeroSection />
                  <div id="capabilities">
                     <ProductionSection />
                  </div>

                  {/* Lazy Loaded Sections */}
                  <Suspense fallback={<SectionLoader />}>
                     <ScalingSection />
                     <QualitySection />
                     <div id="materials">
                        <MaterialsSection />
                     </div>
                     <LeadTimeSection />
                     <ReliabilitySection />
                     <div id="pricing">
                        <PricingSection />
                     </div>
                     <ContactSection />
                     <FarmGallery />
                     <CEOSection />
                  </Suspense>
               </main>

               <Footer />
            </div>
         </HelmetProvider>
      </LanguageProvider>
   );
};

export default LandingPage;
