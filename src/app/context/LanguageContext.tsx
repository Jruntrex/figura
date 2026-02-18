import { createContext, useContext, useState, type ReactNode } from 'react';

export type Lang = 'ua' | 'en';

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: 'ua',
    setLang: () => { },
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<Lang>('ua');
    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLang = () => useContext(LanguageContext);
