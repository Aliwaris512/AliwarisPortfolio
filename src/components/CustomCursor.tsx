"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Add event listeners for mouse movement
        window.addEventListener("mousemove", updatePosition);

        // Add hover listeners to links and buttons
        const handleLinkHover = () => {
            const links = document.querySelectorAll("a, button");
            links.forEach((link) => {
                link.addEventListener("mouseenter", handleMouseEnter);
                link.addEventListener("mouseleave", handleMouseLeave);
            });
        };

        handleLinkHover();

        // Re-apply listeners if DOM changes (optional but good for SPA)
        const observer = new MutationObserver(handleLinkHover);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* Main Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: position.x - 8,
                    y: position.y - 8,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
            />

            {/* Trailing Ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-accent rounded-full pointer-events-none z-[9998] mix-blend-difference"
                animate={{
                    x: position.x - 20,
                    y: position.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 1 : 0.5,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.8 }}
            />
        </>
    );
}
