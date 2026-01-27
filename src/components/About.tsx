"use client";

import { motion } from "framer-motion";

const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Vue.js",
    "Node.js", "Python", "C++", "Tailwind CSS", "MySQL",
    "React Native", "Git"
];

const education = [
    { school: "Superior University", degree: "Bachelors in Robotics", year: "2023 - 2027" },
    { school: "Ripha College", degree: "Intermediate in Computer Science", year: "2021 - 2023" },
    { school: "Allied School", degree: "Matric in Computer", year: "2019 - 2021" },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
                        <p className="text-xl text-foreground/80 mb-6 leading-relaxed">
                            I am a motivated and detail-oriented computer science student at Superior University with a strong passion for learning new technologies and solving real-world problems.
                        </p>
                        <p className="text-foreground/70 mb-8 leading-relaxed">
                            I enjoy working on hands-on projects involving web development, robotics, and software engineering. My experience involves building frontend applications using modern frameworks like Vue.js and React. I'm eager to gain practical experience, collaborate with professionals, and contribute meaningfully in a dynamic environment.
                        </p>

                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-foreground mb-4">Education</h3>
                            <div className="space-y-4">
                                {education.map((edu, index) => (
                                    <div key={index} className="border-l-2 border-accent/20 pl-4">
                                        <h4 className="text-foreground font-medium">{edu.school}</h4>
                                        <p className="text-sm text-foreground/70">{edu.degree}</p>
                                        <p className="text-xs text-accent">{edu.year}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 overflow-hidden">
                            <h3 className="text-lg font-semibold text-foreground mb-4">Tech Stack & Tools</h3>

                            <motion.div
                                className="flex space-x-4 w-max"
                                animate={{ x: [0, -1000] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 20,
                                    ease: "linear",
                                }}
                            >
                                {[...skills, ...skills, ...skills].map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-6 py-3 bg-foreground/5 rounded-full text-sm text-foreground/80 border border-foreground/10 whitespace-nowrap"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-800 relative z-10 border-2 border-white/10 max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent mix-blend-overlay z-20" />
                            <img
                                src="/profile.jpg"
                                alt="Ali Waris"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-accent/5 rounded-full blur-3xl -z-10" />
                        <div className="absolute -top-10 -left-10 w-2/3 h-2/3 bg-blue-500/5 rounded-full blur-3xl -z-10" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
