"use client";

import { motion } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            onAnimationComplete={onComplete}
        >
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-bold text-accent tracking-tighter"
                >
                    AW.
                </motion.div>

                {/* Loading Bar */}
                <motion.div
                    className="absolute -bottom-4 left-0 h-1 bg-accent/20 w-full rounded-full overflow-hidden"
                >
                    <motion.div
                        className="h-full bg-accent"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-10 text-xs text-gray-500 font-mono"
            >
                INITIALIZING...
            </motion.p>
        </motion.div>
    );
}
