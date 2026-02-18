import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CEOSection } from '@/features/landing/sections/CEOSection';
import { ContactSection } from '@/features/landing/sections/ContactSection';
import { LanguageProvider } from '@/app/context/LanguageContext';
import { HelmetProvider } from 'react-helmet-async';

const ContactPage = () => {
    return (
        <LanguageProvider>
            <HelmetProvider>
                <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans selection:bg-defense selection:text-white">
                    <Helmet>
                        <title>FIGURA | Contact Us</title>
                        <meta name="description" content="Зв'яжіться з FIGURA Defense Manufacturing. Розрахунок вартості та запуск виробництва." />
                        <meta name="theme-color" content="#FF0000" />
                    </Helmet>

                    <Navbar />

                    <main className="pt-20">
                        <CEOSection />
                        <ContactSection />
                    </main>

                    <Footer />
                </div>
            </HelmetProvider>
        </LanguageProvider>
    );
};

export default ContactPage;
