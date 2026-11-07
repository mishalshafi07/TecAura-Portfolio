"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const INTRO_STORAGE_KEY = "tecaura_intro_completed_v8";

const BRAND_LETTERS = [
  { char: "T", originX: -65, originY: 100, rotate: -18, isAccent: false },
  { char: "e", originX: -38, originY: -85, rotate: 14, isAccent: false },
  { char: "c", originX: -16, originY: 95, rotate: -12, isAccent: false },
  { char: "A", originX: 0, originY: -115, rotate: 0, isAccent: true },
  { char: "u", originX: 18, originY: 95, rotate: 12, isAccent: true },
  { char: "r", originX: 40, originY: -85, rotate: -14, isAccent: true },
  { char: "a", originX: 65, originY: 100, rotate: 18, isAccent: true },
];

const BACK_SKYLINE_TOWERS = [
  { left: "2%", width: "6%", height: "34%", delay: 0.1 },
  { left: "9%", width: "5%", height: "44%", delay: 0.2 },
  { left: "15%", width: "7%", height: "38%", delay: 0.15 },
  { left: "23%", width: "5.5%", height: "52%", delay: 0.3 },
  { left: "30%", width: "6%", height: "41%", delay: 0.25 },
  { left: "37%", width: "8%", height: "58%", delay: 0.35 },
  { left: "46%", width: "7.5%", height: "64%", delay: 0.4 },
  { left: "55%", width: "8%", height: "56%", delay: 0.32 },
  { left: "64%", width: "6%", height: "43%", delay: 0.22 },
  { left: "71%", width: "6.5%", height: "50%", delay: 0.28 },
  { left: "79%", width: "7%", height: "39%", delay: 0.18 },
  { left: "87%", width: "5.5%", height: "46%", delay: 0.24 },
  { left: "93%", width: "6%", height: "35%", delay: 0.12 },
];

const FRONT_SHADOW_BUILDINGS = [
  { left: "0%", width: "8%", height: "24%", delay: 0.25 },
  { left: "7%", width: "7%", height: "31%", delay: 0.35 },
  { left: "13%", width: "9%", height: "22%", delay: 0.2 },
  { left: "21%", width: "6.5%", height: "37%", delay: 0.45 },
  { left: "27%", width: "8.5%", height: "28%", delay: 0.3 },
  { left: "35%", width: "7%", height: "42%", delay: 0.5 },
  { left: "42%", width: "9%", height: "33%", delay: 0.4 },
  { left: "50%", width: "8.5%", height: "45%", delay: 0.55 },
  { left: "58%", width: "7.5%", height: "32%", delay: 0.38 },
  { left: "65%", width: "8%", height: "39%", delay: 0.48 },
  { left: "73%", width: "9%", height: "27%", delay: 0.28 },
  { left: "81%", width: "7%", height: "34%", delay: 0.42 },
  { left: "88%", width: "6.5%", height: "25%", delay: 0.22 },
  { left: "94%", width: "7%", height: "29%", delay: 0.3 },
];

export function CinematicIntro() {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [scene, setScene] = useState<1 | 2 | 3 | 4>(1);
  const [activeLetterIndex, setActiveLetterIndex] = useState<number>(-1);
  const [runKey, setRunKey] = useState<number>(0);

  const completeIntro = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
    } catch {
      // Ignore storage restrictions
    }
    setScene(4);
    setTimeout(() => {
      setIsVisible(false);
    }, 850);
  }, []);

  const replayIntroFromStart = useCallback(() => {
    try {
      sessionStorage.removeItem(INTRO_STORAGE_KEY);
    } catch {
      // ignore
    }
    setActiveLetterIndex(-1);
    setScene(1);
    setRunKey((prev) => prev + 1);
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleReplay = () => {
      replayIntroFromStart();
    };
    window.addEventListener("techaura:replay-intro", handleReplay);
    return () =>
      window.removeEventListener("techaura:replay-intro", handleReplay);
  }, [replayIntroFromStart]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(INTRO_STORAGE_KEY) === "true";
    } catch {
      alreadySeen = false;
    }

    if (!alreadySeen) {
      setIsVisible(true);
      setScene(1);
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!isVisible) return;

    const tScene2 = setTimeout(() => setScene(2), 1000);

    const letterTimers = BRAND_LETTERS.map((_, idx) =>
      setTimeout(() => {
        setActiveLetterIndex(idx);
      }, 1150 + idx * 400)
    );

    const tScene3 = setTimeout(() => setScene(3), 4950);
    const tComplete = setTimeout(() => completeIntro(), 8400);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        completeIntro();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(tScene2);
      letterTimers.forEach(clearTimeout);
      clearTimeout(tScene3);
      clearTimeout(tComplete);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, runKey, completeIntro]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={`tecaura-cinematic-intro-${runKey}`}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(14px)",
            transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 w-screen h-[100dvh] z-[100] flex items-center justify-center bg-[#020408] text-[#F5F5FA] overflow-hidden select-none"
          role="dialog"
          aria-label="TecAura Brand Introduction"
        >
          {/* ATMOSPHERIC LIGHTING, ORBITAL RINGS & RISING DARK BUILDING SILHOUETTES */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(14, 46, 84, 0.48) 0%, rgba(5, 13, 26, 0.90) 52%, #010205 100%)",
              }}
            />

            {/* Animated Rotating Cyber-Orbital Rings Behind the Logo */}
            <motion.div
              animate={{ rotate: 360, scale: [0.96, 1.04, 0.96] }}
              transition={{
                rotate: { duration: 32, repeat: Infinity, ease: "linear" },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute w-[88vw] max-w-[680px] aspect-square rounded-full border border-dashed border-[#21B8E8]/20"
            >
              <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#21B8E8] shadow-[0_0_16px_#21B8E8]" />
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#7657FF] shadow-[0_0_14px_#7657FF]" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute w-[68vw] max-w-[500px] aspect-square rounded-full border border-[#7657FF]/20"
            >
              <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#21B8E8] shadow-[0_0_12px_#21B8E8]" />
            </motion.div>

            {/* Volumetric Core Bloom */}
            <motion.div
              initial={{ opacity: 0, scale: 0.65 }}
              animate={{
                opacity: scene >= 3 ? 0.9 : scene >= 2 ? 0.7 : 0.4,
                scale: scene >= 3 ? 1.2 : scene >= 2 ? 1.05 : 0.85,
              }}
              transition={{ duration: 2.2, ease: "easeOut" }}
              className="absolute w-[80vw] max-w-[760px] aspect-square rounded-full blur-[90px] sm:blur-[125px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(118,87,255,0.28) 0%, rgba(33,184,232,0.16) 44%, rgba(2,4,8,0) 70%)",
              }}
            />

            {/* Rising Dark Building Shadows at the Bottom with Animated Light Elevators */}
            <div className="absolute inset-x-0 bottom-0 h-[36dvh] sm:h-[42dvh] overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.55, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-x-0 bottom-0 h-36 sm:h-48"
                style={{
                  background:
                    "linear-gradient(to top, rgba(33, 184, 232, 0.20) 0%, rgba(10, 38, 68, 0.10) 55%, transparent 100%)",
                }}
              />

              {BACK_SKYLINE_TOWERS.map((b, idx) => (
                <motion.div
                  key={`back-tower-${idx}`}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 0.42 }}
                  transition={{
                    duration: 2.4,
                    delay: b.delay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    left: b.left,
                    width: b.width,
                    height: b.height,
                  }}
                  className="absolute bottom-0 rounded-t-sm bg-gradient-to-t from-[#010306] via-[#050E1B] to-[#0A1C34] border-t border-x border-[#21B8E8]/20 overflow-hidden"
                >
                  {/* Animated vertical light pulse rising up the tower */}
                  <motion.div
                    animate={{ y: ["120%", "-120%"] }}
                    transition={{
                      duration: 3.2 + (idx % 3),
                      delay: idx * 0.25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-[1.5px] h-16 mx-auto bg-gradient-to-t from-transparent via-[#21B8E8]/60 to-transparent"
                  />
                </motion.div>
              ))}

              {FRONT_SHADOW_BUILDINGS.map((b, idx) => (
                <motion.div
                  key={`front-tower-${idx}`}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 0.86 }}
                  transition={{
                    duration: 2.1,
                    delay: b.delay + 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    left: b.left,
                    width: b.width,
                    height: b.height,
                  }}
                  className="absolute bottom-0 bg-gradient-to-t from-[#010204] via-[#03060C] to-[#060C18] border-t border-x border-[#21B8E8]/15 shadow-[0_-4px_20px_rgba(0,0,0,0.9)]"
                >
                  {idx % 3 === 0 && (
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#21B8E8] shadow-[0_0_8px_#21B8E8] animate-ping" />
                  )}
                </motion.div>
              ))}

              <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 bg-gradient-to-t from-[#020408] via-[#020408]/90 to-transparent" />
            </div>

            {/* Rising Starlight & Cyber Particles */}
            {[
              { left: "16%", top: "30%", delay: 0.1, color: "#7657FF" },
              { left: "82%", top: "26%", delay: 0.3, color: "#21B8E8" },
              { left: "22%", top: "70%", delay: 0.5, color: "#21B8E8" },
              { left: "78%", top: "66%", delay: 0.2, color: "#7657FF" },
              { left: "50%", top: "18%", delay: 0.4, color: "#F5F5FA" },
              { left: "35%", top: "42%", delay: 0.6, color: "#21B8E8" },
              { left: "65%", top: "45%", delay: 0.25, color: "#7657FF" },
            ].map((p, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.85, 0],
                  scale: [0.4, 1.4, 0.7],
                  y: [0, -35, -70],
                }}
                transition={{
                  duration: 4.2,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                style={{ left: p.left, top: p.top, backgroundColor: p.color }}
                className="absolute w-1.5 h-1.5 rounded-full shadow-[0_0_10px_#21B8E8]"
              />
            ))}
          </div>

          {/* CENTER STAGE: Naturally Fits Both Mobile Phones & Laptop Screens */}
          <div className="relative z-10 flex items-center justify-center w-full h-full px-3 sm:px-6">
            {/* Split-Ribbon "A" Monolith Scaled Automatically to Viewport Minimum Dimension */}
            <motion.svg
              viewBox="0 0 600 600"
              className="absolute w-[min(86vw,68dvh)] max-w-[620px] aspect-square pointer-events-none"
              initial={{ opacity: 0, scale: 0.84 }}
              animate={{
                opacity: scene >= 2 ? 0.36 : 0.24,
                scale: scene >= 3 ? 1.04 : 1,
              }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <defs>
                <linearGradient id="ribbonLeftOrig" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7657FF" />
                  <stop offset="100%" stopColor="#0E1528" />
                </linearGradient>
                <linearGradient id="ribbonRightOrig" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F5F5FA" />
                  <stop offset="100%" stopColor="#21B8E8" />
                </linearGradient>
              </defs>

              <motion.polygon
                points="250,70 300,235 185,235"
                fill="url(#ribbonLeftOrig)"
                stroke="#7657FF"
                strokeWidth="1.8"
                initial={{ opacity: 0, y: -45 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.polygon
                points="250,70 350,70 415,235 300,235"
                fill="url(#ribbonRightOrig)"
                stroke="#21B8E8"
                strokeWidth="1.8"
                initial={{ opacity: 0, y: -45 }}
                animate={{ opacity: 0.88, y: 0 }}
                transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />

              <motion.polygon
                points="155,365 270,365 235,510 110,510"
                fill="url(#ribbonLeftOrig)"
                stroke="#7657FF"
                strokeWidth="1.8"
                initial={{ opacity: 0, y: 45 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.polygon
                points="330,365 445,365 490,510 365,510"
                fill="url(#ribbonRightOrig)"
                stroke="#21B8E8"
                strokeWidth="1.8"
                initial={{ opacity: 0, y: 45 }}
                animate={{ opacity: 0.88, y: 0 }}
                transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.svg>

            {/* "TecAura" Wordmark Centered Dead-Center Inside the "A" — Fluid clamp() Fits Any Mobile or Laptop Screen */}
            <div
              className="relative z-20 flex items-center justify-center"
              aria-label="TecAura"
              style={{ perspective: "1000px" }}
            >
              <div className="flex items-baseline justify-center gap-1 sm:gap-2.5 md:gap-3.5">
                {BRAND_LETTERS.map((item, index) => {
                  const letterDelay = 1.0 + index * 0.38;

                  return (
                    <div
                      key={index}
                      className="relative inline-flex flex-col items-center"
                    >
                      {/* Expanding Shockwave Halo on Letter Arrival */}
                      <motion.span
                        initial={{ opacity: 0, scale: 0.2 }}
                        animate={{
                          opacity: [0, 0.85, 0],
                          scale: [0.3, 1.8, 2.3],
                        }}
                        transition={{
                          duration: 1.15,
                          delay: letterDelay,
                          ease: "easeOut",
                        }}
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-20 sm:h-20 rounded-full pointer-events-none blur-xl ${
                          item.isAccent ? "bg-[#21B8E8]/40" : "bg-[#7657FF]/40"
                        }`}
                      />

                      {/* Original Bold Font with Fluid clamp() Sizing for Mobile & Laptop */}
                      <motion.span
                        initial={{
                          opacity: 0,
                          x: item.originX,
                          y: item.originY,
                          scale: 0.25,
                          rotateZ: item.rotate,
                          rotateX: -75,
                          filter: "blur(14px)",
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          y: 0,
                          scale: [0.25, 1.16, 1],
                          rotateZ: 0,
                          rotateX: 0,
                          filter: "blur(0px)",
                        }}
                        transition={{
                          duration: 1.18,
                          delay: letterDelay,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        style={{
                          fontSize: "clamp(2.85rem, 11vw, 9.2rem)",
                        }}
                        className={`font-heading font-bold leading-none tracking-[0.04em] inline-block relative z-10 ${
                          item.isAccent
                            ? "bg-gradient-to-b from-[#F5F5FA] via-[#7657FF] to-[#21B8E8] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(118,87,255,0.45)]"
                            : "text-[#F5F5FA] drop-shadow-[0_0_25px_rgba(245,245,250,0.25)]"
                        }`}
                      >
                        {item.char}
                      </motion.span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tagline Positioned Below Using Responsive Viewport Offset */}
            <div className="absolute top-[calc(50%+min(18vw,155px))] left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 flex flex-col items-center">
              <motion.div
                initial={{ width: "0%", opacity: 0 }}
                animate={{
                  width:
                    scene === 1
                      ? "18%"
                      : scene === 2
                      ? `${Math.min(100, ((activeLetterIndex + 1) / 7) * 100)}%`
                      : "100%",
                  opacity: scene >= 2 ? 0.85 : 0.3,
                }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="h-[1px] max-w-xs sm:max-w-md w-full bg-gradient-to-r from-transparent via-[#21B8E8] to-transparent mb-4 sm:mb-5"
              />

              <AnimatePresence>
                {scene >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-5 text-[10px] sm:text-xs md:text-sm tracking-[0.24em] sm:tracking-[0.3em] uppercase font-heading text-center"
                  >
                    <motion.span
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      className="text-[#F5F5FA] font-semibold"
                    >
                      INNOVATING TODAY.
                    </motion.span>
                    <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-[#7657FF] shadow-[0_0_12px_#7657FF]" />
                    <motion.span
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.35 }}
                      className="text-[#21B8E8] font-semibold"
                    >
                      ENGINEERING TOMORROW.
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
