import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import GitHubStats from "@/components/GitHubStats";
import JsonLd from "@/components/JsonLd";
import CustomCursor from "@/components/CustomCursor";
import { siteJsonLd } from "@/lib/seo";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [loading]);

  return (
    <>
      <JsonLd schema={siteJsonLd} id="schema-person" />
      <CustomCursor />
      <main className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-white">
        {loading && <Loader onComplete={() => setLoading(false)} />}

        <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <GitHubStats />
          <Services />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
