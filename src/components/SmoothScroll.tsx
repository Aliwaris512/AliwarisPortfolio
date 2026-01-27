"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Expose lenis to window for usage in other components if needed, 
        // or just handle anchor clicks globally here.

        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');

            if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const id = anchor.getAttribute('href');
                if (id && id !== '#') {
                    const element = document.querySelector(id);
                    if (element) {
                        lenis.scrollTo(element as HTMLElement, {
                            offset: 0, // Navbar height is handled by scroll-padding usually, or we add offset here.
                            // Navbar is 80px (h-20), so let's offset slightly to be safe if scroll-padding isn't perfect?
                            // Actually css scroll-padding is best, but let's just let lenis handle it naturally 
                            // or give it a slight offset if needed.
                        });
                    }
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            lenis.destroy();
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);

    return null;
}
