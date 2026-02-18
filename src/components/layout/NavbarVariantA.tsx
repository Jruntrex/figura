import { useNavigate, useLocation } from 'react-router-dom';
import type { MouseEvent } from 'react';
import { useLang } from '@/app/context/LanguageContext';
import { translations } from '@/app/i18n/translations';

// VARIANT A — original single-bar navbar (full-width sticky bar)
// To restore: copy this file content into Navbar.tsx

export const NavbarVariantA = () => {
    const { lang, setLang } = useLang();
    const t = translations[lang].nav;
    const navigate = useNavigate();
    const location = useLocation();

    const navLinks = [
        { label: t.capabilities, href: '#capabilities' },
        { label: t.materials, href: '#materials' },
        { label: t.price, href: '#pricing' },
    ];

    const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/5">
            <div className="w-full max-w-7xl mx-auto px-8 lg:pl-32 h-14 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="text-xl font-bold font-rajdhani uppercase text-white select-none hover:opacity-80 transition-opacity"
                >
                    Figu<span className="text-gray-600">ra</span><span className="text-defense">.</span>
                </a>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-gray-400 hover:text-white font-mono text-xs tracking-widest uppercase transition-colors duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                    <button
                        onClick={handleContactClick}
                        className="text-white bg-defense hover:bg-red-600 font-mono text-xs tracking-widest uppercase px-4 py-1.5 transition-colors duration-200 font-bold"
                    >
                        {t.contactUs}
                    </button>
                </nav>

                {/* Language Switcher */}
                <div className="flex items-center gap-1">
                    <button
                        onClick={() => setLang('ua')}
                        className={`font-mono text-xs tracking-widest uppercase px-2 py-1 transition-colors duration-200 ${lang === 'ua'
                            ? 'text-defense border-b border-defense'
                            : 'text-gray-600 hover:text-gray-400'
                            }`}
                    >
                        UA
                    </button>
                    <span className="text-white/10 font-mono text-xs">|</span>
                    <button
                        onClick={() => setLang('en')}
                        className={`font-mono text-xs tracking-widest uppercase px-2 py-1 transition-colors duration-200 ${lang === 'en'
                            ? 'text-defense border-b border-defense'
                            : 'text-gray-600 hover:text-gray-400'
                            }`}
                    >
                        EN
                    </button>
                </div>

            </div>
        </header>
    );
};
