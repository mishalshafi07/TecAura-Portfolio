"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useSpring(-100, { stiffness: 320, damping: 28 });
  const cursorY = useSpring(-100, { stiffness: 320, damping: 28 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (typeof window === "undefined") return;

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (target) {
        const clickable = target.closest("a, button, input, select, textarea, [role='button']");
        setIsPointer(Boolean(clickable));
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReducedMotion, cursorX, cursorY]);

  if (!mounted || prefersReducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      className="fixed top-0 left-0 pointer-events-none z-[90] hidden lg:block -translate-x-1/2 -translate-y-1/2"
    >
      <div
        className={`rounded-full transition-all duration-300 ${
          isPointer
            ? "w-11 h-11 border border-[#21B8E8]/80 bg-[#7657FF]/15 scale-110"
            : "w-6 h-6 border border-[#7657FF]/60 bg-[#7657FF]/5"
        }`}
      />
    </motion.div>
  );
}

