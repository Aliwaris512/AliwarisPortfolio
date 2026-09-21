"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoMissing, setVideoMissing] = useState(false);

  useLayoutEffect(() => {
    if (!heroRef.current) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      if (reduceMotion) {
        gsap.set(
          ".hero-nav, .hero-small-text, .hero-name, .hero-person, .hero-line, .hero-bottom",
          { autoAlpha: 1 }
        );
        return;
      }

      tl.from(".hero-nav", {
        y: -28,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          ".hero-small-text",
          {
            y: 18,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ".hero-name",
          {
            scale: 1.2,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.2"
        )
        .from(
          ".hero-person",
          {
            y: 130,
            opacity: 0,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .from(
          ".hero-line",
          {
            scaleX: 0,
            transformOrigin: "left",
            duration: 0.8,
          },
          "-=0.7"
        )
        .from(
          ".hero-bottom",
          {
            y: 24,
            opacity: 0,
            duration: 0.65,
          },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="hero-shell relative h-[100vh] h-[100svh] w-full overflow-hidden bg-black text-white"
    >
      <div
        className={`hero-video-shell absolute inset-0 overflow-hidden ${
          videoMissing
            ? "bg-[radial-gradient(circle_at_top,_rgba(201,149,106,0.35),_rgba(8,4,5,0.88)_52%,_rgba(0,0,0,1)_100%)]"
            : "bg-black"
        }`}
      >
        <video
          className={`hero-video absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ${videoReady ? "opacity-100" : "opacity-0"}`}
          src="/videos/hero-loop.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Cinematic portfolio video background"
          onCanPlay={() => setVideoReady(true)}
          onLoadedData={() => setVideoReady(true)}
          onError={(event) => {
            const target = event.currentTarget;
            target.style.display = "none";
            setVideoMissing(true);
          }}
        />
      </div>
      {!videoMissing && <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />}
    </section>
  );
}
