"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SectionItem {
  id: string;
  number: string;
  label: string;
}

const HOME_SECTIONS: SectionItem[] = [
  { id: "home", number: "01", label: "HOME" },
  { id: "about", number: "02", label: "ABOUT TECAURA" },
  { id: "services", number: "03", label: "OUR SERVICES" },
  { id: "work", number: "04", label: "FEATURED PROJECTS" },
  { id: "process", number: "05", label: "OUR PROCESS" },
];

export function RightSectionScrollIndicator() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct =
        docHeight > 0
          ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100))
          : 0;
      setScrollProgress(pct);

      const viewportMid = window.innerHeight * 0.42;
      let currentIdx = 0;

      for (let i = 0; i < HOME_SECTIONS.length; i++) {
        const el = document.getElementById(HOME_SECTIONS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportMid) {
            currentIdx = i;
          }
        }
      }

      setActiveIndex(currentIdx);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToSection = (index: number) => {
    const target = HOME_SECTIONS[index];
    if (!target) return;
    const el = document.getElementById(target.id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isLastSection = activeIndex === HOME_SECTIONS.length - 1;
  const activeSection = HOME_SECTIONS[activeIndex] || HOME_SECTIONS[0];

  const handleNextScroll = () => {
    if (isLastSection) {
      scrollToSection(0);
    } else {
      scrollToSection(activeIndex + 1);
    }
  };

  return (
    <div
      className="fixed right-2.5 sm:right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-2.5 select-none pointer-events-none"
      aria-label="Section Scroll Indicator"
    >
      {/* Active Section Name Pill — Animates whenever the visible section changes */}
      <div className="pointer-events-auto flex items-center gap-2">
        <AnimatePresence mode="wait">
          <motion.button
            key={activeSection.id}
            type="button"
            onClick={() => scrollToSection(activeIndex)}
            initial={{ opacity: 0, x: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: 12, filter: "blur(6px)" }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#050914]/90 backdrop-blur-md border border-[#21B8E8]/45 shadow-[0_0_25px_rgba(33,184,232,0.3)] hover:border-[#21B8E8] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#21B8E8] shadow-[0_0_8px_#21B8E8] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-heading font-semibold tracking-[0.16em] uppercase text-[#F5F5FA] whitespace-nowrap">
              {activeSection.label}
            </span>
          </motion.button>
        </AnimatePresence>
      </div>

      {/* Compact Vertical Progress Rail + Section Nodes + Animated Scroll Down Button */}
      <div className="pointer-events-auto flex flex-col items-center gap-2 px-2 py-3 rounded-full bg-[#050914]/85 backdrop-blur-md border border-[#21B8E8]/30 shadow-[0_10px_30px_rgba(0,0,0,0.65)]">
        {/* Section Dots */}
        <div className="flex flex-col items-center gap-2">
          {HOME_SECTIONS.map((sec, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToSection(idx)}
                title={`${sec.number} — ${sec.label}`}
                aria-label={`Scroll to ${sec.label}`}
                className="group relative flex items-center justify-center w-4 h-4"
              >
                <motion.span
                  animate={{
                    height: isActive ? 14 : 5,
                    width: isActive ? 5 : 5,
                    backgroundColor: isActive
                      ? "#21B8E8"
                      : "rgba(165, 180, 200, 0.35)",
                    boxShadow: isActive
                      ? "0 0 12px rgba(33, 184, 232, 0.95)"
                      : "0 0 0px rgba(0,0,0,0)",
                  }}
                  transition={{ duration: 0.25 }}
                  className="rounded-full group-hover:bg-[#7CE8FF]"
                />
              </button>
            );
          })}
        </div>

        {/* Animated Laser Scroll Track */}
        <div className="relative w-[2px] h-9 rounded-full bg-[#142238] overflow-hidden my-0.5">
          {/* Overall page progress fill */}
          <div
            className="w-full bg-[#21B8E8]/35 transition-all duration-150"
            style={{ height: `${scrollProgress}%` }}
          />
          {/* Continuous animated falling light drop */}
          <motion.div
            animate={{ y: ["-100%", "220%"] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-4 rounded-full bg-gradient-to-b from-transparent via-[#21B8E8] to-[#FFFFFF] shadow-[0_0_10px_#21B8E8]"
          />
        </div>

        {/* Animated Scroll Down / Top Action Button */}
        <motion.button
          type="button"
          onClick={handleNextScroll}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.94 }}
          title={
            isLastSection
              ? "Back to Top (Home)"
              : `Scroll to ${HOME_SECTIONS[activeIndex + 1]?.label}`
          }
          aria-label={
            isLastSection
              ? "Scroll back to top"
              : `Scroll down to ${HOME_SECTIONS[activeIndex + 1]?.label}`
          }
          className="w-7 h-7 rounded-full bg-gradient-to-b from-[#0E3B66] to-[#081A30] border border-[#21B8E8]/60 flex items-center justify-center text-[#21B8E8] hover:text-white hover:border-[#21B8E8] shadow-[0_0_15px_rgba(33,184,232,0.4)] transition-colors"
        >
          <motion.div
            animate={{ y: isLastSection ? [1, -2, 1] : [-1.5, 2, -1.5] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            {isLastSection ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
