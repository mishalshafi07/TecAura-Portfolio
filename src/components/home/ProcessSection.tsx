"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PROCESS_STEPS } from "@/data/company";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      id="process"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#050811] border-t border-[#21B8E8]/20 overflow-hidden"
    >
      {/* Animated Background Glow & Sweeping Beam */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.18, 0.35, 0.18],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[620px] h-[360px] sm:h-[620px] rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(33,184,232,0.22) 0%, rgba(11,42,82,0.12) 55%, transparent 75%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl space-y-3 sm:space-y-4 mb-10 sm:mb-14"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1322] border border-[#21B8E8]/35 text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-[#21B8E8]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#21B8E8] animate-ping" />
            <span>OUR PROCESS</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-heading font-bold text-[clamp(1.85rem,4vw,3.25rem)] text-[#F5F5FA] tracking-tight leading-[1.08]"
          >
            FROM VISION TO{" "}
            <span className="bg-gradient-to-r from-[#21B8E8] via-[#7CE8FF] to-[#38BDF8] bg-clip-text text-transparent">
              EXECUTION.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base text-[#A5B4C8] leading-relaxed"
          >
            Select any phase below to inspect how we take your project from
            initial discovery to production launch.
          </motion.p>
        </motion.div>

        {/* Interactive Step Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-2.5 mb-7 sm:mb-8">
          {PROCESS_STEPS.map((step, index) => {
            const isSelected = activeStep === index;
            return (
              <button
                key={step.title}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`p-3 sm:p-3.5 rounded-xl border text-center transition-all duration-300 ${
                  isSelected
                    ? "bg-gradient-to-b from-[#0E3B66] to-[#0A1F38] border-[#21B8E8] text-[#F5F5FA] shadow-[0_0_25px_rgba(33,184,232,0.35)] scale-[1.02]"
                    : "bg-[#0B111E]/85 border-[#21B8E8]/20 text-[#A5B4C8] hover:border-[#21B8E8]/60 hover:text-[#F5F5FA]"
                }`}
              >
                <div className="font-heading font-semibold text-xs sm:text-sm truncate">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Single Active Step Information Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={PROCESS_STEPS[activeStep].title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl sm:rounded-3xl bg-[#0A1120]/95 border border-[#21B8E8]/50 p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.65)] overflow-hidden"
          >
            {/* Top animated glowing laser line */}
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#21B8E8] to-transparent"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                <div className="inline-flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#21B8E8]">
                  <span>{PROCESS_STEPS[activeStep].subtitle}</span>
                </div>
                <h3 className="font-heading text-xl sm:text-3xl font-bold text-[#F5F5FA]">
                  {PROCESS_STEPS[activeStep].title}
                </h3>
                <p className="text-xs sm:text-base text-[#A5B4C8] leading-relaxed">
                  {PROCESS_STEPS[activeStep].description}
                </p>
              </div>
              <div className="lg:col-span-5 rounded-2xl bg-[#050912] border border-[#21B8E8]/25 p-5 sm:p-6 space-y-3.5">
                <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.18em] text-[#21B8E8]">
                  Key Phase Deliverables
                </div>
                <ul className="space-y-2.5">
                  {PROCESS_STEPS[activeStep].deliverables.map((del) => (
                    <li
                      key={del}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F5F5FA]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#21B8E8] shrink-0" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
