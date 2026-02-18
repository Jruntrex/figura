import { TechDivider } from '@/components/visuals/TechDivider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { QUALITY_PROTOCOLS } from '@/app/data/landing-content';
import { useLang } from '@/app/context/LanguageContext';
import { translations } from '@/app/i18n/translations';

export const QualitySection = () => {
    const { lang } = useLang();
    const t = translations[lang].quality;
    const protocols = QUALITY_PROTOCOLS.map((p, i) => ({
        ...p,
        title: t.protocols[i].title,
        desc: t.protocols[i].desc,
    }));
    return (
        <section className="relative w-full py-24 bg-carbon-light">
            <TechDivider />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32">
                <div className="mb-20">
                    <SectionHeader title={t.title} subtitle={t.subtitle} />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {protocols.map((item) => (
                        <div key={item.title} className="flex flex-col relative group">
                            <div className="relative z-10 border-l border-white/10 pl-6 pb-12 group-hover:border-defense transition-colors duration-500">
                                <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-defense rounded-full shadow-[0_0_10px_var(--color-defense)] opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="mb-4 text-defense"><item.icon size={32} /></div>
                                <h3 className="text-xl font-bold text-white uppercase mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
