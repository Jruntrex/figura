import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';

const UnderConstruction = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-carbon text-white font-rajdhani flex flex-col">
            {/* Optional: Include Navbar if desired, or keep it isolated */}
            <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-carbon to-transparent opacity-80" />
            </div>

            <main className="flex-grow flex flex-col items-center justify-center p-6 relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-defense-dim blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 text-center max-w-md w-full border border-white/10 bg-carbon-light/50 backdrop-blur-md p-12 rounded-sm relative overflow-hidden group">
                    {/* Decorative corners */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-defense" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-defense" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-defense" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-defense" />

                    <div className="mb-6 flex justify-center">
                        <div className="relative">
                            <Construction className="w-16 h-16 text-defense" />
                            <div className="absolute inset-0 bg-defense blur-xl opacity-20 animate-pulse" />
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold mb-4 tracking-wider text-white">
                        PAGE UNDER<br />
                        <span className="text-defense">CONSTRUCTION</span>
                    </h1>

                    <p className="text-white/60 mb-8 font-mono text-sm leading-relaxed">
                        // ACCESS DENIED
                        <br />
                        This sector is currently being fortified.
                        <br />
                        Please check back later for updates.
                    </p>

                    <button
                        onClick={() => navigate('/')}
                        className="group relative px-6 py-3 bg-transparent overflow-hidden rounded-sm transition-all duration-300 hover:bg-defense/10 border border-white/20 hover:border-defense/50 w-full"
                    >
                        <div className="relative z-10 flex items-center justify-center gap-2">
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            <span className="tracking-wider uppercase text-sm font-semibold">Return to Base</span>
                        </div>
                    </button>

                    {/* Scanline effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[5px] w-full animate-[scan_3s_ease-in-out_infinite] opacity-30 pointer-events-none" />
                </div>
            </main>
        </div>
    );
};

export default UnderConstruction;
