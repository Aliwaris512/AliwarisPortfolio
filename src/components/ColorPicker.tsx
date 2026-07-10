"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Check } from "lucide-react";

const palettes = [
    { name: "ruby", color: "#D44040", label: "Ruby" },
    { name: "ocean", color: "#4090D4", label: "Ocean" },
    { name: "forest", color: "#40B870", label: "Forest" },
    { name: "amber", color: "#D4A020", label: "Amber" },
    { name: "violet", color: "#9040D4", label: "Violet" },
    { name: "sunset", color: "#D46A30", label: "Sunset" },
];

const STORAGE_KEY = "custom-palette";

export default function ColorPicker() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && palettes.find((p) => p.name === saved)) {
            setActive(saved);
            document.documentElement.classList.add(`palette-${saved}`);
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectPalette = (name: string) => {
        palettes.forEach((p) => document.documentElement.classList.remove(`palette-${p.name}`));

        if (active === name) {
            setActive(null);
            localStorage.removeItem(STORAGE_KEY);
        } else {
            setActive(name);
            document.documentElement.classList.add(`palette-${name}`);
            localStorage.setItem(STORAGE_KEY, name);
        }
        setIsOpen(false);
    };

    if (!mounted) return null;

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Choose color theme"
                className={`p-2 rounded-full transition-colors cursor-none ${
                    active
                        ? "bg-accent text-accent-fg"
                        : "bg-accent/10 hover:bg-accent/20 text-accent"
                }`}
            >
                <Palette size={20} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full right-0 mt-2 bg-background border border-foreground/10 rounded-xl p-3 shadow-xl z-50 min-w-[180px]"
                    >
                        <p className="text-xs text-foreground/50 uppercase tracking-wider mb-2 px-1">
                            Color Theme
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                            {palettes.map((p) => (
                                <button
                                    key={p.name}
                                    onClick={() => selectPalette(p.name)}
                                    className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all cursor-none ${
                                        active === p.name
                                            ? "bg-foreground/10"
                                            : "hover:bg-foreground/5"
                                    }`}
                                    aria-label={`${p.label} theme`}
                                >
                                    <div className="relative">
                                        <div
                                            className="w-7 h-7 rounded-full transition-all"
                                            style={{
                                                backgroundColor: p.color,
                                                boxShadow:
                                                    active === p.name
                                                        ? `0 0 0 2px var(--background), 0 0 0 4px ${p.color}`
                                                        : `0 0 0 2px var(--background), 0 0 0 3px var(--foreground)`,
                                            }}
                                        />
                                        {active === p.name && (
                                            <Check
                                                size={14}
                                                className="absolute inset-0 m-auto text-white drop-shadow-md"
                                            />
                                        )}
                                    </div>
                                    <span className="text-[10px] text-foreground/60">{p.label}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
