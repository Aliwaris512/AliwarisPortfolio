"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Send } from "lucide-react";

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitted(true);
        setIsSubmitting(false);
        setFormState({ name: "", email: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-foreground/70 max-w-xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach out.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-foreground/5 rounded-lg text-accent border border-foreground/10">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-foreground">Email & Phone</h3>
                                <a href="mailto:aliwariskhan512@gmail.com" className="block text-foreground/70 hover:text-accent transition-colors">aliwariskhan512@gmail.com</a>
                                <a href="tel:03094501187" className="block text-foreground/70 hover:text-accent transition-colors mt-1">03094501187</a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-foreground/5 rounded-lg text-accent border border-foreground/10">
                                <Github size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-foreground">Socials</h3>
                                <div className="flex space-x-4">
                                    <a href="https://x.com/Aliwaris0505" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors"><Twitter size={20} /></a>
                                    <a href="https://www.linkedin.com/in/ali-waris-b1a9ab318/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors"><Linkedin size={20} /></a>
                                    <a href="https://www.instagram.com/yeah._.itz_ali?igsh=dHY4eDB1eTRnZnQ1" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors"><Instagram size={20} /></a>
                                    <a href="https://github.com/Aliwaris512" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors"><Github size={20} /></a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-foreground/5 rounded-lg text-accent border border-foreground/10">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-foreground">Location</h3>
                                <p className="text-foreground/70 mb-6">Lahore, Pakistan</p>
                            </div>
                        </div>

                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-foreground/5 p-8 rounded-2xl border border-foreground/10"
                    >
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-10">
                                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-foreground">Message Sent!</h3>
                                <p className="text-foreground/70">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 text-accent hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-foreground/70 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-background/50 border border-foreground/10 rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground/70 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-background/50 border border-foreground/10 rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground/70 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full bg-background/50 border border-foreground/10 rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                                        placeholder="How can I help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-accent text-background font-bold py-4 rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
