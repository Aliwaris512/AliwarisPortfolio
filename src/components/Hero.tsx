"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

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
      <div className="hero-video-shell absolute inset-0 overflow-hidden">
        <video
          className="hero-video absolute inset-0 h-full w-full object-cover object-center"
          src="/videos/hero-loop.mp4"
          poster="/moodflick.png"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Cinematic portfolio video background"
          onError={(event) => {
            const target = event.currentTarget;
            target.style.display = "none";
          }}
        />
        {/* <div className="hero-video-overlay absolute inset-0" /> */}
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/15 blur-[140px] md:h-[38rem] md:w-[38rem]" />

      <div className="relative z-10 flex min-h-[100vh] min-h-[100svh] flex-col items-center justify-center px-4">
        <div className="hero-small-text absolute top-[18%] text-center md:top-[20%]">
          <div className="mx-auto mt-3 flex items-center justify-center gap-2">
            <span className="h-1 w-1 rounded-full bg-red-500" />
            <span className="h-1 w-1 rounded-full bg-red-500" />
            <span className="h-1 w-1 rounded-full bg-red-500" />
          </div>
        </div>

        <div className="hero-line absolute bottom-[18%] left-[8%] right-[8%] h-px bg-white/15 md:left-[10%] md:right-[10%]" />

        <div className="hero-bottom absolute inset-x-0 bottom-[7%] z-20 flex items-end justify-between gap-4 px-4 md:px-12">
          <div>
            <p className="text-[8px] uppercase tracking-[0.32em] text-white/40 md:text-[9px]">
              Full Stack Developer
            </p>    
            <p className="mt-1 text-[10px] tracking-[0.18em] text-white/75 md:text-xs md:tracking-[0.22em]">
              React · Next.js · Node.js
            </p>
          </div>

          <div className="text-right">
            <p className="text-[8px] uppercase tracking-[0.32em] text-white/40 md:text-[9px]">
              Scroll to explore
            </p>
            <div className="mx-auto mt-3 h-6 w-px bg-white/50 md:h-8" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 z-20 text-[7px] uppercase tracking-[0.3em] text-white/35 md:bottom-5 md:left-5 md:text-[8px]">
        © 2026
      </div>

      <div className="absolute bottom-4 right-4 z-20 text-[7px] uppercase tracking-[0.3em] text-white/35 md:bottom-5 md:right-5 md:text-[8px]">
        Portfolio / 01
      </div>
    </section>
  );
}
