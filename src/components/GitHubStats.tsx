"use client";

import { motion } from "framer-motion";
import { Github, GitFork, Star, Users, BookOpen } from "lucide-react";

const stats = [
    { label: "Public Repos", value: "10+", icon: BookOpen },
    { label: "GitHub Stars", value: "20+", icon: Star },
    { label: "Followers", value: "15+", icon: Users },
    { label: "Forks", value: "5+", icon: GitFork },
];

export default function GitHubStats() {
    const username = "Aliwaris512";

    return (
        <section id="githubstats" className="py-24 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">GitHub Activity</h2>
                    <div className="h-1 w-20 bg-accent rounded-full"></div>
                    <p className="mt-4 text-foreground/70">
                        A live snapshot of my open-source contributions and coding habits.
                    </p>
                </motion.div>

                {/* Stat Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6 flex flex-col items-center text-center hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group"
                        >
                            <stat.icon className="text-accent mb-3 group-hover:scale-110 transition-transform duration-300" size={28} />
                            <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                            <p className="text-sm text-foreground/60 mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* GitHub Stats Cards from github-readme-stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6 flex flex-col items-center hover:border-accent/40 transition-all duration-300"
                    >
                        <p className="text-sm font-medium text-foreground/50 uppercase tracking-widest mb-4">Overall Stats</p>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6 flex flex-col items-center hover:border-accent/40 transition-all duration-300"
                    >
                        <p className="text-sm font-medium text-foreground/50 uppercase tracking-widest mb-4">Top Languages</p>

                    </motion.div>
                </div>

                {/* GitHub Contribution Graph */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6 md:p-8 overflow-hidden mb-6"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Github size={22} className="text-accent" />
                        <h3 className="text-lg font-semibold text-foreground">Contribution Graph</h3>
                        <span className="ml-auto text-xs text-foreground/40 font-mono">@{username}</span>
                    </div>
                    <div className="w-full overflow-x-auto">
                        <img
                            src={`https://ghchart.rshah.org/C9956A/${username}`}
                            alt={`${username}'s GitHub contribution chart`}
                            className="w-full min-w-[600px] rounded-xl"
                            style={{ filter: "brightness(1.15) saturate(1.3)" }}
                        />
                    </div>
                    {/* Legend */}
                    <div className="flex items-center gap-2 mt-4 justify-end text-xs text-foreground/40">
                        <span>Less</span>
                        <span className="w-3 h-3 rounded-sm bg-foreground/10 inline-block border border-foreground/20"></span>
                        <span className="w-3 h-3 rounded-sm bg-accent/25 inline-block"></span>
                        <span className="w-3 h-3 rounded-sm bg-accent/55 inline-block"></span>
                        <span className="w-3 h-3 rounded-sm bg-accent inline-block" style={{ boxShadow: "0 0 8px #C9956Aff" }}></span>
                        <span>More</span>
                    </div>
                </motion.div>

                {/* View Profile CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex justify-center mt-10"
                >
                    <a
                        href={`https://github.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 border border-accent text-accent px-8 py-3 rounded-full hover:bg-accent hover:text-background transition-all duration-300 font-medium text-lg group"
                    >
                        <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                        View GitHub Profile
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
