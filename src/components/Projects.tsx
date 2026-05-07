"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Moodflik",
        description: "Full-stack web & mobile application focused on enhancing user engagement through personalized content. Built responsive UIs and integrated APIs.",
        tags: ["Web/Mobile", "Full-Stack", "API Integration", "UI/UX"],
        links: { demo: "https://www.moodflik.com/", git: "https://github.com/Aliwaris512" },
        image: "/moodflick.png"
    },
    {
        title: "SeniorThrive",
        description: "Healthcare SaaS platform supporting senior wellness. Implemented dashboard workflows, questionnaires, and profile management.",
        tags: ["SaaS", "Healthcare", "Dashboard", "Frontend"],
        links: { demo: "https://seniorthrive.com/", git: "https://github.com/Aliwaris512" },
        image: "/seniorthrive.png"
    },
    // {
    //     title: "The 95 Star",
    //     description: "Airport shuttle service app. Designed reusable components and built a responsive UI for a seamless user experience.",
    //     tags: ["Vue.js", "Node.js", "Shuttle Service", "Frontend"],
    //     links: { demo: "https://www.the95star.com/", git: "https://github.com/Aliwaris512" },
    //     image: "/the95star.png"
    // },
    {
        title: "Student Portal - Superior University",
        description: "University portal for managing student data (Student & Teacher Dashboards). Features role-based access, JWT auth, and REST API integration.",
        tags: ["React", "Python", "FastAPI", "JWT"],
        links: { demo: "#", git: "https://github.com/Aliwaris512" },
        image: "https://placehold.co/600x400/111/444/png?text=Student+Portal"
    },
    {
        title: "Expense Tracker",
        description: "Efficient expense tracking app using Vue 3 Composition API. Focuses on modular code and reactive state management for real-time data.",
        tags: ["Vue 3", "Composition API", "Finance", "State Mgmt"],
        links: { demo: "#", git: "https://github.com/Aliwaris512" },
        image: "https://placehold.co/600x400/111/444/png?text=Expense+Tracker"
    },
];

export default function Projects() {
    const [flipped, setFlipped] = useState<number | null>(null);

    return (
        <section id="projects" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
                    <div className="h-1 w-20 bg-accent rounded-full"></div>
                    <p className="mt-4 text-foreground/70">Click a card to flip it and learn more.</p>
                </motion.div>

                {/* Carousel Container */}
                <motion.div className="cursor-grab active:cursor-grabbing overflow-hidden">
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -((projects.length * 450) - 1000) }} // Approx width calc
                        className="flex space-x-8 pb-10"
                    >
                        {projects.map((project, index) => {
                            const isFlipped = flipped === index;

                            return (
                                <motion.div
                                    key={index}
                                    className="min-w-[85vw] md:min-w-[400px] group relative min-h-[680px]"
                                    whileHover={{ scale: 1.02, y: -10 }}
                                    style={{ perspective: 1200 }}
                                >
                                    <motion.div
                                        onClick={() => setFlipped(isFlipped ? null : index)}
                                        className="relative h-full w-full cursor-pointer"
                                        style={{ transformStyle: "preserve-3d" }}
                                        animate={{ rotateY: isFlipped ? 180 : 0 }}
                                        transition={{ duration: 0.6, ease: "easeInOut" }}
                                    >
                                        <div className="absolute inset-0 rounded-xl overflow-hidden border border-foreground/10 bg-foreground/5 shadow-xl"
                                            style={{ backfaceVisibility: "hidden" }}
                                        >
                                            <div className="relative h-64 w-full bg-gray-900 overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                                />
                                            </div>

                                            <div className="p-8 relative z-20">
                                                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">{project.title}</h3>
                                                <p className="text-foreground/70 mb-6 line-clamp-2">{project.description}</p>

                                                <div className="flex flex-wrap gap-2 mb-8">
                                                    {project.tags.map(tag => (
                                                        <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-foreground/5 text-foreground/80 border border-foreground/10">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="flex items-center space-x-4">
                                                    <a href={project.links.demo} className="flex items-center text-sm font-bold text-foreground hover:text-accent transition-colors">
                                                        <ExternalLink size={18} className="mr-2" /> Live Demo
                                                    </a>
                                                    <a href={project.links.git} className="flex items-center text-sm font-bold text-foreground hover:text-accent transition-colors">
                                                        <Github size={18} className="mr-2" /> GitHub
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 rounded-xl overflow-hidden border border-foreground/10 bg-background/95 shadow-xl px-8 py-8 text-foreground"
                                            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                                        >
                                            <div className="h-full flex flex-col justify-between">
                                                <div>
                                                    <h3 className="text-2xl font-bold mb-4">About this project</h3>
                                                    <p className="text-foreground/70 mb-6 leading-relaxed">{project.description}</p>
                                                    <div className="space-y-3 text-sm text-foreground/70">
                                                        <p><span className="font-semibold text-foreground">Stack:</span> {project.tags.join(", ")}</p>
                                                        <p><span className="font-semibold text-foreground">Focus:</span> {project.title.includes("Portal") ? "Authentication & role-based dashboard" : project.title.includes("Tracker") ? "Finance UI & state management" : "Responsive UI, API integration, and performance"}</p>
                                                    </div>
                                                </div>

                                                <div className="mt-8 flex flex-col gap-3">
                                                    <a href={project.links.demo} className="inline-flex items-center justify-center rounded-full border border-accent px-4 py-3 text-sm font-semibold text-accent hover:bg-accent/10 transition-colors">
                                                        View Demo
                                                    </a>
                                                    <a href={project.links.git} className="inline-flex items-center justify-center rounded-full border border-foreground/10 px-4 py-3 text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors">
                                                        View Code
                                                    </a>
                                                    <button
                                                        type="button"
                                                        onClick={() => setFlipped(null)}
                                                        className="mt-2 text-sm text-foreground/70 hover:text-accent underline"
                                                    >
                                                        Back to card
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
