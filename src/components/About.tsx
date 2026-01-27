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
        <section
            id="about"
            className="py-16 md:py-24 bg-background relative overflow-hidden"
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Image / Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 relative order-1"
                    >
                        <div className="aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden bg-gray-800 relative z-10 border border-white/10 max-w-xs sm:max-w-sm mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent mix-blend-overlay z-20" />
                            <img
                                src="/profile.jpg"
                                alt="Ali Waris"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Decorative blobs */}
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent/5 rounded-full blur-3xl -z-10" />
                        <div className="absolute -top-8 -left-8 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 order-2"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            About Me
                        </h2>

                        <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-5 leading-relaxed">
                            I am a motivated and detail-oriented computer science student at Superior University with a strong passion for learning new technologies and solving real-world problems.
                        </p>

                        <p className="text-sm sm:text-base text-foreground/70 mb-8 leading-relaxed">
                            I enjoy working on hands-on projects involving web development, robotics, and software engineering. My experience involves building frontend applications using modern frameworks like Vue.js and React.
                        </p>

                        {/* Education */}
                        <div className="mb-10">
                            <h3 className="text-lg font-semibold mb-4">Education</h3>
                            <div className="space-y-4">
                                {education.map((edu, index) => (
                                    <div
                                        key={index}
                                        className="border-l-2 border-accent/20 pl-4"
                                    >
                                        <h4 className="font-medium">{edu.school}</h4>
                                        <p className="text-sm text-foreground/70">
                                            {edu.degree}
                                        </p>
                                        <p className="text-xs text-accent">
                                            {edu.year}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Skills Marquee */}
                        <div className="overflow-hidden">
                            <h3 className="text-lg font-semibold mb-4">
                                Tech Stack & Tools
                            </h3>

                            <motion.div
                                className="flex gap-3 w-max"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 25,
                                    ease: "linear",
                                }}
                            >
                                {[...skills, ...skills].map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm bg-foreground/5 rounded-full text-foreground/80 border border-foreground/10 whitespace-nowrap"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
