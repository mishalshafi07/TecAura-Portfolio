"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function BrandStatementSection() {
  return (
    <section
      id="brand-statement"
      className="relative py-28 sm:py-36 bg-[#171721] border-y border-[#30303B] overflow-hidden"
    >
      {/* Subtle architectural gradient wash */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(118,87,255,0.14) 0%, rgba(33,184,232,0.05) 45%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101018] border border-[#30303B] text-xs font-mono uppercase tracking-[0.25em] text-[#21B8E8]"
          >
            <span>03 // BRAND STATEMENT</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F5F5FA] leading-[1.04]"
          >
            &ldquo;THE FUTURE IS BUILT{" "}
            <span className="bg-gradient-to-r from-[#7657FF] via-[#F5F5FA] to-[#21B8E8] bg-clip-text text-transparent">
              BY THOSE WHO CREATE IT.&rdquo;
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-[#A5A5B5] max-w-3xl mx-auto leading-relaxed"
          >
            At TecAura, we partner with founders, enterprises, and forward-thinking
            organizations to engineer software systems and digital experiences
            defined by clarity, speed, and enduring technical quality.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

