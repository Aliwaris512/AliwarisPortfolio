"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#projects" },
    { name: "Activity", href: "#githubstats" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        document.documentElement.classList.add("dark");
        document.documentElement.style.colorScheme = "dark";

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
                <a href="#hero" className="text-2xl font-bold text-accent tracking-tighter">
                    AW.
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors cursor-none"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Controls */}
                <div className="flex items-center md:hidden">
                    <button
                        onClick={() => setIsOpen((open) => !open)}
                        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-foreground/5 text-foreground/80 shadow-sm transition-colors hover:text-accent"
                    >
                        {isOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-md"
                    >
                        <div className="container mx-auto flex max-h-[70vh] flex-col items-center justify-center space-y-6 px-4 py-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl font-medium text-foreground/80 transition-colors hover:text-accent"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
