"use client";

import { useEffect, useState } from "react";

export default function TechStack() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();

    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return (
    <section id="tech-stack" className="relative bg-background pt-6 md:pt-10 pb-10 md:pb-16">
      <div className="w-full">
        <div className="relative overflow-hidden bg-[#0b0d12] w-full">
          <video
            className="block h-[280px] w-full object-cover object-center md:h-[420px] lg:h-[500px]"
            src="/Developer_silhouette_with_techno…_20260918011944.mp4"
            poster="/moodflick.png"
            autoPlay={!reducedMotion}
            muted
            loop={!reducedMotion}
            playsInline
            preload="metadata"
            aria-hidden="true"
            onError={(event) => {
              const target = event.currentTarget;
              target.style.display = "none";
            }}
          />
        </div>
      </div>
    </section>
  );
}
