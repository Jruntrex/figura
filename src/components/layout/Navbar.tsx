import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import type { MouseEvent } from 'react';
import { useLang } from '@/app/context/LanguageContext';
import { translations } from '@/app/i18n/translations';

// VARIANT B — split islands navbar (active)
// Left island: language switcher | Right island: nav links
// Mobile: single floating island button (bottom-right) → popup panel

export const Navbar = () => {
    const { lang, setLang } = useLang();
    const t = translations[lang].nav;
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const navLinks = [
        { label: t.capabilities, href: '#capabilities' },
        { label: t.materials, href: '#materials' },
        { label: t.price, href: '#pricing' },
    ];

    const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileOpen(false);

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
        setMobileOpen(false);
        navigate('/contact');
    };

    return (
        <>
            {/* ── DESKTOP header ── */}
            <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
                {/* pl-16 lg:pl-20 = offset for the left sidebar */}
                <div className="w-full pl-20 lg:pl-28 pr-4 pt-5 flex items-start justify-between">

                    {/* LEFT ISLAND — Language Switcher (desktop only) */}
                    <div className="pointer-events-auto hidden md:flex items-center bg-black/90 backdrop-blur-md border border-white/15 overflow-hidden">
                        <button
                            onClick={() => setLang('ua')}
                            className={`relative font-mono text-xs tracking-[0.25em] uppercase px-6 py-2.5 transition-all duration-200 ${lang === 'ua'
                                ? 'text-white bg-defense/20'
                                : 'text-gray-500 hover:text-gray-200 hover:bg-white/5'
                                }`}
                        >
                            {lang === 'ua' && (
                                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-defense" />
                            )}
                            UA
                        </button>
                        <span className="w-[1px] h-5 bg-white/15" />
                        <button
                            onClick={() => setLang('en')}
                            className={`relative font-mono text-xs tracking-[0.25em] uppercase px-6 py-2.5 transition-all duration-200 ${lang === 'en'
                                ? 'text-white bg-defense/20'
                                : 'text-gray-500 hover:text-gray-200 hover:bg-white/5'
                                }`}
                        >
                            {lang === 'en' && (
                                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-defense" />
                            )}
                            EN
                        </button>
                    </div>

                    {/* RIGHT ISLAND — Nav Links (desktop only) */}
                    <nav className="pointer-events-auto hidden md:flex items-center bg-black/90 backdrop-blur-md border border-white/15 overflow-hidden">
                        {navLinks.map((link, i) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="relative group font-mono text-xs tracking-[0.2em] uppercase px-7 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                            >
                                {/* separator between items */}
                                {i > 0 && (
                                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-5 bg-white/15" />
                                )}
                                {/* red bottom accent on hover */}
                                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-defense scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                                {link.label}
                            </a>
                        ))}

                        <span className="w-[1px] h-5 bg-white/15" />

                        <button
                            onClick={handleContactClick}
                            className="relative group font-mono text-xs tracking-[0.2em] uppercase px-7 py-2.5 text-white bg-defense hover:bg-red-600 transition-colors duration-200 font-bold"
                        >
                            {t.contactUs}
                        </button>
                    </nav>

                </div>
            </header>

            {/* ── MOBILE floating island + popup ── */}
            <div className="md:hidden">

                {/* Backdrop — closes menu when tapped outside */}
                {mobileOpen && (
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setMobileOpen(false)}
                    />
                )}

                {/* Popup panel — slides up above the button */}
                <div
                    className={`
                        fixed bottom-[72px] right-4 z-50
                        bg-black/95 backdrop-blur-md border border-white/15
                        w-52 overflow-hidden
                        transition-all duration-300 ease-out
                        ${mobileOpen
                            ? 'opacity-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 translate-y-3 pointer-events-none'}
                    `}
                >
                    {/* Nav links */}
                    <div className="border-b border-white/10">
                        {navLinks.map((link, i) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`
                                    relative group flex items-center
                                    font-mono text-xs tracking-[0.2em] uppercase
                                    px-5 py-3.5 text-gray-400 hover:text-white hover:bg-white/5
                                    transition-all duration-200
                                    ${i > 0 ? 'border-t border-white/10' : ''}
                                `}
                            >
                                {/* red left accent on hover */}
                                {link.label}
                            </a>
                        ))}
                        <button
                            onClick={handleContactClick}
                            className="relative group flex items-center w-full text-left font-mono text-xs tracking-[0.2em] uppercase px-5 py-3.5 text-white bg-defense hover:bg-red-600 transition-all duration-200 border-t border-white/10 font-bold"
                        >
                            {t.contactUs}
                        </button>
                    </div>

                    {/* Language switcher */}
                    <div className="flex items-center">
                        <button
                            onClick={() => setLang('ua')}
                            className={`relative flex-1 font-mono text-xs tracking-[0.25em] uppercase py-3 transition-all duration-200 ${lang === 'ua'
                                ? 'text-white bg-defense/20'
                                : 'text-gray-500 hover:text-gray-200 hover:bg-white/5'
                                }`}
                        >
                            {lang === 'ua' && (
                                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-defense" />
                            )}
                            UA
                        </button>
                        <span className="w-[1px] h-5 bg-white/15" />
                        <button
                            onClick={() => setLang('en')}
                            className={`relative flex-1 font-mono text-xs tracking-[0.25em] uppercase py-3 transition-all duration-200 ${lang === 'en'
                                ? 'text-white bg-defense/20'
                                : 'text-gray-500 hover:text-gray-200 hover:bg-white/5'
                                }`}
                        >
                            {lang === 'en' && (
                                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-defense" />
                            )}
                            EN
                        </button>
                    </div>
                </div>

                {/* Floating trigger button */}
                <button
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label="Menu"
                    className={`
                        fixed bottom-4 right-4 z-50
                        w-14 h-14
                        bg-black/95 backdrop-blur-md border border-white/15
                        flex items-center justify-center
                        transition-all duration-200
                        ${mobileOpen ? 'border-defense/60 bg-defense/10' : 'hover:border-white/30 hover:bg-white/5'}
                    `}
                >
                    {/* Animated hamburger → X */}
                    <span className="relative w-5 h-4 flex flex-col justify-between">
                        <span className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[7.5px] text-defense' : 'text-gray-300'}`} />
                        <span className={`block h-[1.5px] bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0 text-defense' : 'text-gray-300'}`} />
                        <span className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7.5px] text-defense' : 'text-gray-300'}`} />
                    </span>
                </button>

            </div>
        </>
    );
};
