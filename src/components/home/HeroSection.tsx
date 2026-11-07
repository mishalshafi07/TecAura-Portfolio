"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const HEADLINE_TOP_WORDS = ["WE", "BUILD", "DIGITAL", "EXPERIENCES"];
const HEADLINE_BOTTOM_WORDS = ["THAT", "MOVE", "BUSINESSES", "FORWARD."];

const HERO_SHADOW_TOWERS = [
  { left: "1%", width: "7%", height: "22%", delay: 0.1 },
  { left: "9%", width: "6%", height: "30%", delay: 0.2 },
  { left: "16%", width: "8%", height: "25%", delay: 0.15 },
  { left: "25%", width: "6.5%", height: "36%", delay: 0.25 },
  { left: "33%", width: "8%", height: "28%", delay: 0.3 },
  { left: "42%", width: "7.5%", height: "40%", delay: 0.35 },
  { left: "51%", width: "8%", height: "38%", delay: 0.32 },
  { left: "60%", width: "7%", height: "29%", delay: 0.22 },
  { left: "68%", width: "6.5%", height: "34%", delay: 0.28 },
  { left: "76%", width: "8%", height: "26%", delay: 0.18 },
  { left: "85%", width: "6.5%", height: "31%", delay: 0.24 },
  { left: "92%", width: "7%", height: "23%", delay: 0.12 },
];

/**
 * Computes deterministic per-letter falling physics based on scroll progress (0 -> 1).
 * When scrollProgress === 0, returns exact normal text state (y=0, opacity=1, rotate=0).
 */
function getLetterFallStyle(
  scrollProgress: number,
  wordIdx: number,
  charIdx: number,
  isBottomLine: boolean
): React.CSSProperties {
  if (scrollProgress <= 0.005) {
    return {
      transform: "translate3d(0px, 0px, 0px) rotate(0deg)",
      opacity: 1,
      filter: "blur(0px)",
    };
  }

  // Deterministic pseudo-random seed per letter so each letter falls at a natural staggered rate
  const seed = (wordIdx * 13 + charIdx * 7 + (isBottomLine ? 29 : 3)) % 17;
  const staggerStart = (seed / 17) * 0.28; // letters start falling between 0% and 28% of hero scroll
  const localProgress = Math.max(
    0,
    Math.min(1, (scrollProgress - staggerStart) / (1 - staggerStart))
  );

  // Quadratic gravity curve so letters accelerate downward as you scroll
  const gravity = localProgress * localProgress;
  const fallDistance = (140 + (seed % 7) * 28) * gravity + localProgress * 45;
  const driftX = ((seed % 5) - 2) * 14 * localProgress;
  const tiltDeg = ((seed % 2 === 0 ? 1 : -1) * (8 + (seed % 6) * 4)) * localProgress;
  const opacity = Math.max(0, 1 - localProgress * 1.25);
  const blurPx = localProgress * 5;

  return {
    transform: `translate3d(${driftX.toFixed(1)}px, ${fallDistance.toFixed(1)}px, 0px) rotate(${tiltDeg.toFixed(1)}deg)`,
    opacity,
    filter: `blur(${blurPx.toFixed(1)}px)`,
    transition: "transform 60ms linear, opacity 60ms linear, filter 60ms linear",
    willChange: "transform, opacity, filter",
  };
}

export function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    let rafId: number | null = null;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(380, window.innerHeight * 0.58);
      const ratio = Math.max(0, Math.min(1, scrollY / maxScroll));
      setScrollProgress(ratio);
      rafId = null;
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateScroll);
      }
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-14 sm:pt-24 sm:pb-16 overflow-hidden bg-[#030509]"
    >
      {/* Deep Obsidian Black & Electric Blue Animated Visuals */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 42%, rgba(15, 58, 102, 0.50) 0%, rgba(7, 20, 38, 0.88) 48%, #020307 100%)",
          }}
        />

        {/* Animated Perspective Cyber Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #21B8E8 1px, transparent 1px), linear-gradient(to bottom, #21B8E8 1px, transparent 1px)",
            backgroundSize: "68px 68px",
          }}
        />

        {/* Animated Sweeping Blue & Indigo Aurora Waves */}
        <motion.div
          animate={{
            scale: [1, 1.2, 0.95, 1],
            x: ["-7%", "7%", "-4%", "-7%"],
            opacity: [0.42, 0.75, 0.52, 0.42],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 w-[85vw] max-w-[820px] aspect-square rounded-full blur-[95px] sm:blur-[135px]"
          style={{
            background:
              "radial-gradient(circle, rgba(33,184,232,0.32) 0%, rgba(12,48,88,0.22) 45%, transparent 72%)",
          }}
        />

        <motion.div
          animate={{
            scale: [1.1, 0.9, 1.16, 1.1],
            x: ["7%", "-7%", "4%", "7%"],
            opacity: [0.35, 0.65, 0.42, 0.35],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 w-[80vw] max-w-[740px] aspect-square rounded-full blur-[95px] sm:blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(16,78,139,0.38) 0%, rgba(118,87,255,0.18) 50%, transparent 75%)",
          }}
        />

        {/* 3D Revolving Orbital Rings With Glowing Satellites */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
          className="absolute w-[min(86vw,74dvh)] max-w-[760px] aspect-square rounded-full border border-dashed border-[#21B8E8]/20"
        >
          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#21B8E8] shadow-[0_0_18px_#21B8E8]" />
          <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#7657FF] shadow-[0_0_14px_#7657FF]" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[min(66vw,56dvh)] max-w-[560px] aspect-square rounded-full border border-[#21B8E8]/15"
        >
          <span className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#21B8E8] shadow-[0_0_14px_#21B8E8]" />
          <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F5F5FA] shadow-[0_0_12px_#F5F5FA]" />
        </motion.div>

        {/* Animated Shooting Data Beams Across the Horizon */}
        <motion.div
          animate={{
            x: ["-110vw", "110vw"],
            opacity: [0, 0.85, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
          className="absolute top-[28%] w-44 sm:w-72 h-[1.5px] bg-gradient-to-r from-transparent via-[#21B8E8] to-transparent shadow-[0_0_16px_#21B8E8]"
        />
        <motion.div
          animate={{
            x: ["110vw", "-110vw"],
            opacity: [0, 0.75, 0],
          }}
          transition={{
            duration: 6.5,
            delay: 2.5,
            repeat: Infinity,
            repeatDelay: 2.5,
            ease: "easeInOut",
          }}
          className="absolute top-[72%] w-44 sm:w-72 h-[1.5px] bg-gradient-to-r from-transparent via-[#7657FF] to-transparent shadow-[0_0_16px_#7657FF]"
        />

        {/* Dark Architectural Skyline Shadow Along the Bottom Horizon with Rising Light Pulses */}
        <div className="absolute inset-x-0 bottom-0 h-[22dvh] sm:h-[28dvh] overflow-hidden">
          {HERO_SHADOW_TOWERS.map((tower, idx) => (
            <motion.div
              key={idx}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 0.58 }}
              transition={{
                duration: 1.8,
                delay: tower.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                left: tower.left,
                width: tower.width,
                height: tower.height,
              }}
              className="absolute bottom-0 bg-gradient-to-t from-[#010205] via-[#040914] to-[#081528]/90 border-t border-x border-[#21B8E8]/15 overflow-hidden"
            >
              <motion.div
                animate={{ y: ["120%", "-120%"] }}
                transition={{
                  duration: 3.5 + (idx % 3),
                  delay: idx * 0.3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-[1px] h-14 mx-auto bg-gradient-to-t from-transparent via-[#21B8E8]/50 to-transparent"
              />
            </motion.div>
          ))}
          <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#101018] via-[#050811]/90 to-transparent" />
        </div>

        {/* Floating Luminous Blue & Violet Embers */}
        {[
          { left: "14%", top: "26%", delay: 0.2, color: "#21B8E8" },
          { left: "84%", top: "24%", delay: 0.8, color: "#21B8E8" },
          { left: "20%", top: "66%", delay: 1.4, color: "#7657FF" },
          { left: "80%", top: "62%", delay: 0.5, color: "#21B8E8" },
          { left: "50%", top: "18%", delay: 1.1, color: "#F5F5FA" },
          { left: "34%", top: "38%", delay: 0.4, color: "#21B8E8" },
          { left: "66%", top: "40%", delay: 1.0, color: "#7657FF" },
        ].map((p, idx) => (
          <motion.span
            key={idx}
            animate={{
              y: [0, -36, 0],
              opacity: [0.25, 0.85, 0.25],
              scale: [0.8, 1.4, 0.8],
            }}
            transition={{
              duration: 5,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ left: p.left, top: p.top, backgroundColor: p.color }}
            className="absolute w-1.5 h-1.5 rounded-full shadow-[0_0_12px_#21B8E8]"
          />
        ))}
      </div>

      {/* Centered Monumental Screen Presence — Fits Naturally on Both Mobile & Laptop */}
      <div
        className="max-w-5xl mx-auto w-full relative z-10 text-center space-y-6 sm:space-y-8 lg:space-y-9"
        style={{ perspective: "1000px" }}
      >
        {/* Per-Letter Falling Scroll Animation Headline */}
        <h1
          aria-label="WE BUILD DIGITAL EXPERIENCES THAT MOVE BUSINESSES FORWARD."
          style={{ fontSize: "clamp(2.15rem, 5.5vw, 5.15rem)" }}
          className="font-heading font-bold tracking-tight leading-[1.08] sm:leading-[1.05]"
        >
          {/* Top Line: WE BUILD DIGITAL EXPERIENCES */}
          <span className="flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-4 gap-y-1">
            {HEADLINE_TOP_WORDS.map((word, wordIdx) => (
              <motion.span
                key={word}
                initial={{
                  opacity: 0,
                  y: 40,
                  rotateX: -45,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.85,
                  delay: 0.08 * wordIdx,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-flex whitespace-nowrap"
              >
                {word.split("").map((char, charIdx) => (
                  <span
                    key={`${word}-${charIdx}`}
                    style={getLetterFallStyle(
                      scrollProgress,
                      wordIdx,
                      charIdx,
                      false
                    )}
                    className="inline-block text-[#F5F5FA] drop-shadow-[0_10px_30px_rgba(0,0,0,0.85)]"
                  >
                    {char}
                  </span>
                ))}
              </motion.span>
            ))}
          </span>

          {/* Bottom Line: THAT MOVE BUSINESSES FORWARD. */}
          <span className="flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-4 gap-y-1 mt-1 sm:mt-2">
            {HEADLINE_BOTTOM_WORDS.map((word, wordIdx) => (
              <motion.span
                key={word}
                initial={{
                  opacity: 0,
                  y: 40,
                  rotateX: -45,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.32 + 0.09 * wordIdx,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-flex whitespace-nowrap"
              >
                {word.split("").map((char, charIdx) => (
                  <span
                    key={`${word}-${charIdx}`}
                    style={getLetterFallStyle(
                      scrollProgress,
                      wordIdx,
                      charIdx,
                      true
                    )}
                    className="inline-block bg-gradient-to-b from-[#F5F5FA] via-[#21B8E8] to-[#7657FF] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(33,184,232,0.35)]"
                  >
                    {char}
                  </span>
                ))}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(0.95rem, 1.8vw, 1.35rem)",
            transform: `translate3d(0px, ${(scrollProgress * 55).toFixed(1)}px, 0px)`,
            opacity: Math.max(0, 1 - scrollProgress * 1.15),
          }}
          className="text-[#A5A5B5] leading-relaxed max-w-2xl lg:max-w-3xl mx-auto px-2"
        >
          We transform ambitious ideas into powerful digital products through
          software engineering, intelligent technology and creative innovation.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transform: `translate3d(0px, ${(scrollProgress * 65).toFixed(1)}px, 0px)`,
            opacity: Math.max(0, 1 - scrollProgress * 1.15),
          }}
          className="flex items-center justify-center pt-2 px-2"
        >
          <Link
            href="/work"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-gradient-to-r from-[#0E4A7B] via-[#1768AC] to-[#21B8E8] text-[#F5F5FA] font-heading font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase transition-all duration-300 shadow-[0_0_35px_rgba(33,184,232,0.4)] hover:shadow-[0_0_50px_rgba(33,184,232,0.65)] hover:scale-[1.02]"
          >
            <span>EXPLORE OUR WORK</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
