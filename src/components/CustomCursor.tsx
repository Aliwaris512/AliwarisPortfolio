"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const supportsPointerFine = window.matchMedia("(pointer: fine)").matches;
        if (!supportsPointerFine) {
            setIsVisible(false);
            return;
        }

        const updatePosition = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
            setIsVisible(true);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        const trackedElements = document.querySelectorAll("a, button, [data-cursor-hover]");
        trackedElements.forEach((element) => {
            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseleave", handleMouseLeave);
        });

        window.addEventListener("mousemove", updatePosition);
        window.addEventListener("mouseleave", () => setIsVisible(false));
        window.addEventListener("mouseenter", () => setIsVisible(true));

        const observer = new MutationObserver(() => {
            const elements = document.querySelectorAll("a, button, [data-cursor-hover]");
            elements.forEach((element) => {
                element.addEventListener("mouseenter", handleMouseEnter);
                element.addEventListener("mouseleave", handleMouseLeave);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            window.removeEventListener("mouseleave", () => setIsVisible(false));
            window.removeEventListener("mouseenter", () => setIsVisible(true));
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-accent shadow-[0_0_0_2px_rgba(255,255,255,0.8),0_0_22px_rgba(139,58,58,0.55)]"
                style={{
                    width: "14px",
                    height: "14px",
                    border: "2px solid rgba(255,255,255,0.9)",
                    background: "rgba(139, 58, 58, 0.95)",
                    boxShadow: "0 0 0 2px rgba(255,255,255,0.8), 0 0 30px rgba(139,58,58,0.7)",
                }}
                animate={{
                    x: position.x - 9,
                    y: position.y - 9,
                    scale: isHovering ? 1.7 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.5 }}
            />

            <motion.div
                className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border border-accent/80 bg-accent/5 backdrop-blur-[1px]"
                style={{
                    width: "38px",
                    height: "38px",
                }}
                animate={{
                    x: position.x - 19,
                    y: position.y - 19,
                    scale: isHovering ? 1.4 : 1,
                    opacity: isVisible ? (isHovering ? 1 : 0.75) : 0,
                }}
                transition={{ type: "spring", stiffness: 240, damping: 18, mass: 0.8 }}
            />
        </>
    );
}
