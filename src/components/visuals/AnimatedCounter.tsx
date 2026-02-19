import { useMotionValue, animate, useInView, useMotionValueEvent } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
    target: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

export const AnimatedCounter = ({
    target,
    duration = 2.5,
    suffix = '',
    className = ''
}: AnimatedCounterProps) => {
    const count = useMotionValue(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, target, {
                duration: duration,
                ease: "easeOut",
            });
            return controls.stop;
        }
    }, [isInView, count, target, duration]);

    useMotionValueEvent(count, "change", (latest) => {
        if (ref.current) {
            ref.current.textContent = Math.round(latest).toString() + suffix;
        }
    });

    return (
        <span ref={ref} className={className}>
            0{suffix}
        </span>
    );
};
