import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

/**
 * Combat-themed scroll progress component.
 * Features a drone flying towards a tank, triggering an explosion on hit.
 * Archived as per user request to return to the original minimalist slider.
 */
export const GlobalProgressSpineCombat = () => {
    const { scrollYProgress } = useScroll();
    const trackRef = useRef<HTMLDivElement>(null);
    const [trackHeight, setTrackHeight] = useState(0);

    useEffect(() => {
        if (trackRef.current) {
            setTrackHeight(trackRef.current.offsetHeight);
        }
        const handleResize = () => {
            if (trackRef.current) setTrackHeight(trackRef.current.offsetHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25,
        restDelta: 0.001
    });

    // Adjust mapping: drone stops at tank position (trackHeight - tankIconSize - tankOffset)
    // Tank is 64px (h-16), offset is 80px (bottom-20)
    const droneY = useTransform(smoothProgress, [0, 1], [0, trackHeight - 64 - 80]);
    const explosionScale = useTransform(smoothProgress, [0.97, 1], [0, 2.5]);
    const explosionOpacity = useTransform(smoothProgress, [0.97, 0.99, 1], [0, 1, 0]);
    const tankOpacity = useTransform(smoothProgress, [0.98, 1], [1, 0.2]);

    return (
        <div className="fixed left-0 top-0 bottom-0 w-16 md:w-24 z-50 hidden lg:flex flex-col items-center border-r border-white/10 bg-black/30 backdrop-blur-md pl-[2px]">
            <div
                ref={trackRef}
                className="h-full w-[2px] bg-white/5 relative my-20"
            >
                {/* Drone */}
                <motion.div
                    style={{ y: droneY }}
                    className="absolute left-[calc(50%+4px)] -translate-x-1/2 z-30"
                >
                    <div className="relative">
                        {/* Neon Drone Icon */}
                        <div
                            className="w-14 h-14 md:w-16 md:h-16 bg-defense shadow-[0_0_25px_rgba(255,0,0,1)]"
                            style={{
                                maskImage: 'url(/icons/drone.svg)',
                                WebkitMaskImage: 'url(/icons/drone.svg)',
                                maskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                maskSize: 'contain',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center',
                                WebkitMaskSize: 'contain',
                            }}
                        />

                        {/* Persistent Drone Tail/Glow */}
                        <div className="absolute inset-0 bg-defense/50 blur-2xl rounded-full -z-10 animate-pulse" />

                        {/* Motion Trail */}
                        <motion.div
                            style={{ opacity: useTransform(smoothProgress, [0, 1], [1, 0.5]) }}
                            className="absolute -top-8 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-gradient-to-t from-defense to-transparent"
                        />
                    </div>
                </motion.div>

                {/* Tank */}
                <motion.div
                    style={{ opacity: tankOpacity }}
                    className="absolute bottom-20 left-[calc(50%+4px)] -translate-x-1/2 z-20"
                >
                    <div className="relative">
                        {/* Neon Tank Icon */}
                        <div
                            className="w-16 h-16 md:w-20 md:h-20 bg-defense shadow-[0_0_20px_rgba(255,0,0,0.8)]"
                            style={{
                                maskImage: 'url(/icons/tank.svg)',
                                WebkitMaskImage: 'url(/icons/tank.svg)',
                                maskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                maskSize: 'contain',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center',
                                WebkitMaskSize: 'contain',
                            }}
                        />
                        <div className="absolute inset-x-0 -bottom-4 h-6 bg-defense/30 blur-xl rounded-full -z-10" />
                    </div>
                </motion.div>

                {/* Explosion/Hit Effect */}
                <motion.div
                    style={{
                        scale: explosionScale,
                        opacity: explosionOpacity,
                        y: trackHeight - 64 - 80 // Positioned at the hit point
                    }}
                    className="absolute top-0 left-[calc(50%+4px)] -translate-x-1/2 w-32 h-32 bg-defense rounded-full blur-[60px] z-40 pointer-events-none shadow-[0_0_100px_rgba(255,0,0,1)]"
                />
            </div>

            {/* Terminal Info */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <div className="text-[10px] font-mono text-defense font-black uppercase tracking-[0.5em] rotate-90 origin-center whitespace-nowrap drop-shadow-[0_0_8px_rgba(255,0,0,0.5)] opacity-30">
                    COMBAT.SPINE.V3.LOCKED
                </div>
            </div>
        </div>
    );
};
