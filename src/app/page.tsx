"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [loading]);

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-white">
            {loading && <Loader onComplete={() => setLoading(false)} />}

            {/* Main Content - Visible behind loader but static, interactive after loader gone */}
            <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                <Navbar />
                <Hero />
                <About />
                <Projects />
                <Services />
                <Contact />
                <Footer />
            </div>
        </main>
    );
}
