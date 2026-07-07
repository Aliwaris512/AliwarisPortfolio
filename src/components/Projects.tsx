"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { CoverFlow } from "./Coverflow";
const projects = [
    {
        title: "Moodflik",
        description: "Full-stack web & mobile application focused on enhancing user engagement through personalized content. Built responsive UIs and integrated APIs.",
        tags: ["Web/Mobile", "Full-Stack", "API Integration", "UI/UX"],
        links: { demo: "https://www.moodflik.com/", git: "https://github.com/Aliwaris512" },
        image: "/moodflick.png"
    },
    {
        title: "Nexus E-Commerce",
        description: "Modern headless e-commerce storefront with real-time inventory tracking, secure payment gateways, and animated product showcases.",
        tags: ["Next.js", "TailwindCSS", "Stripe", "PostgreSQL"],
        links: { demo: "#", git: "https://github.com/Aliwaris512" },
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
        title: "Student Portal - Superior University",
        description: "University portal for managing student data (Student & Teacher Dashboards). Features role-based access, JWT auth, and REST API integration.",
        tags: ["React", "Python", "FastAPI", "JWT"],
        links: { demo: "#", git: "https://github.com/Aliwaris512" },
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
        title: "SeniorThrive",
        description: "Healthcare SaaS platform supporting senior wellness. Implemented dashboard workflows, questionnaires, and profile management.",
        tags: ["SaaS", "Healthcare", "Dashboard", "Frontend"],
        links: { demo: "https://seniorthrive.com/", git: "https://github.com/Aliwaris512" },
        image: "/seniorthrive.png"
    },
    {
        title: "Taskify Kanban",
        description: "A collaborative workflow management tool with drag-and-drop interfaces, real-time sync, and team permission controls.",
        tags: ["React", "TypeScript", "Firebase", "DnD"],
        links: { demo: "#", git: "https://github.com/Aliwaris512" },
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
        title: "Expense Tracker",
        description: "Efficient expense tracking app using Vue 3 Composition API. Focuses on modular code and reactive state management for real-time data.",
        tags: ["Vue 3", "Composition API", "Finance", "State Mgmt"],
        links: { demo: "#", git: "https://github.com/Aliwaris512" },
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
        title: "AI Code Companion",
        description: "An AI-powered developer tool that automatically formats and generates boilerplate code snippets directly within the browser.",
        tags: ["OpenAI", "React", "Node.js", "Tooling"],
        links: { demo: "#", git: "https://github.com/Aliwaris512" },
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=600"
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
                    <p className="mt-4 text-foreground/70">Swipe or scroll to explore my projects.</p>
                </motion.div>

                {/* Projects CoverFlow */}
                <div className="w-full h-[600px] md:h-[700px] pb-10">
                    <CoverFlow
                        items={projects.map((p, i) => ({
                            id: i,
                            title: p.title,
                            image: p.image,
                            subtitle: p.tags.join(" • ")
                        }))}
                        enableReflection={false}
                        enableAudio={true}
                        enableScroll={true}
                        enableClickToSnap={true}
                        initialIndex={3}
                        onItemClick={(item) => {
                            const project = projects[item.id as number];
                            if (project && project.links.demo !== "#") {
                                window.open(project.links.demo, "_blank");
                            } else if (project && project.links.git !== "#") {
                                window.open(project.links.git, "_blank");
                            }
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index, flipped, setFlipped }: any) {
    const isFlipped = flipped === index;
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isFlipped) return; // Don't tilt while flipped
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-[480px]"
            style={{ perspective: 1200, zIndex: isFlipped ? 50 : 1 }}
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative h-full w-full"
                style={{
                    transformStyle: "preserve-3d",
                    rotateX: isFlipped ? 0 : rotateX,
                    rotateY: isFlipped ? 0 : rotateY,
                }}
            >
                <motion.div
                    onClick={() => setFlipped(isFlipped ? null : index)}
                    className="relative h-full w-full cursor-pointer"
                    style={{ transformStyle: "preserve-3d" }}
                    animate={{ 
                        rotateY: isFlipped ? 180 : 0, 
                        scale: isFlipped ? 1.05 : 1,
                        y: isFlipped ? -20 : 0 
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    {/* Front of card */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden border border-foreground/10 bg-foreground/5 shadow-xl flex flex-col"
                        style={{ backfaceVisibility: "hidden" }}
                    >
                        <div className="relative h-48 w-full bg-gray-900 overflow-hidden shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                            />
                        </div>

                        <div className="p-6 relative z-20 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">{project.title}</h3>
                            <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-auto">
                                {project.tags.map((tag: string) => (
                                    <span key={tag} className="text-[10px] font-medium px-2 py-1 rounded-full bg-foreground/5 text-foreground/80 border border-foreground/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center space-x-4 mt-6">
                                <a href={project.links.demo} onClick={e => e.stopPropagation()} className="flex items-center text-sm font-bold text-foreground hover:text-accent transition-colors">
                                    <ExternalLink size={16} className="mr-1" /> Live Demo
                                </a>
                                <a href={project.links.git} onClick={e => e.stopPropagation()} className="flex items-center text-sm font-bold text-foreground hover:text-accent transition-colors">
                                    <Github size={16} className="mr-1" /> GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Back of card */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden border border-foreground/10 bg-background shadow-xl px-6 py-6 text-foreground"
                        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                    >
                        <div className="h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold mb-3">About this project</h3>
                                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">{project.description}</p>
                                <div className="space-y-2 text-sm text-foreground/70">
                                    <p><span className="font-semibold text-foreground">Stack:</span> {project.tags.join(", ")}</p>
                                    <p><span className="font-semibold text-foreground">Focus:</span> {project.title.includes("Portal") ? "Authentication & role-based dashboard" : project.title.includes("Tracker") ? "Finance UI & state management" : "Responsive UI, API integration, and performance"}</p>
                                </div>
                            </div>

                            <div className="mt-4 flex flex-col gap-2">
                                <a href={project.links.demo} onClick={e => e.stopPropagation()} className="inline-flex items-center justify-center rounded-full border border-accent px-4 py-2 text-sm font-semibold text-accent hover:bg-accent/10 transition-colors">
                                    View Demo
                                </a>
                                <a href={project.links.git} onClick={e => e.stopPropagation()} className="inline-flex items-center justify-center rounded-full border border-foreground/10 px-4 py-2 text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors">
                                    View Code
                                </a>
                                <button
                                    type="button"
                                    onClick={(e) => { e.stopPropagation(); setFlipped(null); }}
                                    className="mt-1 text-sm text-foreground/70 hover:text-accent underline"
                                >
                                    Back to card
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
