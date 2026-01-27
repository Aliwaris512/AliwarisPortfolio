"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Layout, Bot } from "lucide-react";

const services = [
    {
        icon: <Globe size={40} />,
        title: "Web Development",
        description: "Building responsive, fast, and SEO-friendly websites that look great on all devices."
    },
    {
        icon: <Code2 size={40} />,
        title: "Full-Stack Apps",
        description: "End-to-end application development using modern frameworks like Next.js and Node.js."
    },
    {
        icon: <Layout size={40} />,
        title: "UI/UX Design",
        description: "Creating intuitive and aesthetically pleasing user interfaces with a focus on user experience."
    },
    {
        icon: <Bot size={40} />,
        title: "AI Integration",
        description: "Enhancing applications with intelligent features using the latest AI models and APIs."
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Do</h2>
                    <div className="h-1 w-20 bg-accent rounded-full mx-auto md:mx-0"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-foreground/5 p-8 rounded-xl border border-foreground/10 hover:border-accent/50 hover:bg-foreground/10 transition-all duration-300 group"
                        >
                            <div className="text-accent mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                            <p className="text-foreground/70 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
