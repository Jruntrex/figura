import { TrendingDown } from 'lucide-react';
import { TechDivider } from '@/components/visuals/TechDivider';
import { PricingStack } from '@/components/visuals/PricingStack';
import { useLang } from '@/app/context/LanguageContext';
import { translations } from '@/app/i18n/translations';

export const PricingSection = () => {
    const { lang } = useLang();
    const t = translations[lang].pricing;
    return (
        <section className="relative w-full py-24 bg-carbon-light">
            <TechDivider />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-rajdhani uppercase mb-4 text-white">
                        {t.title} <span className="text-defense">{t.titleHighlight}</span>
                    </h2>
                    <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">{t.description}</p>
                </div>

                <PricingStack />

                <div className="flex flex-col items-center gap-6 mt-12">
                    <div className="flex items-center gap-3 text-defense bg-defense-dim/50 px-6 py-2 rounded-full border border-defense-glow/20">
                        <TrendingDown size={20} />
                        <span className="font-mono font-bold uppercase tracking-wider text-sm">{t.volumeNote}</span>
                    </div>
                    <p className="text-gray-300 font-mono text-xs uppercase tracking-widest">
                        {t.costNote}
                    </p>
                </div>
            </div>
        </section>
    );
};
