"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function ContactCtaSection() {
  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#04070E] border-t border-[#21B8E8]/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#081020] via-[#0B172E] to-[#050A14] border border-[#21B8E8]/45 p-7 sm:p-14 lg:p-20 text-center overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.75)]"
        >
          {/* Animated ambient radial glow + rotating orbital ring */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.45, 0.8, 0.45],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(33,184,232,0.32) 0%, rgba(118,87,255,0.14) 45%, transparent 75%)",
            }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[580px] h-[320px] sm:h-[580px] rounded-full border border-dashed border-[#21B8E8]/15 pointer-events-none"
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#050912]/90 border border-[#21B8E8]/35 text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-[#21B8E8]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#21B8E8]" />
              <span>INITIATE PARTNERSHIP</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-heading font-bold text-[clamp(1.9rem,4.8vw,3.75rem)] text-[#F5F5FA] tracking-tight leading-[1.06]"
            >
              HAVE AN IDEA?{" "}
              <span className="bg-gradient-to-r from-[#21B8E8] via-[#F5F5FA] to-[#38BDF8] bg-clip-text text-transparent">
                LET&apos;S BUILD IT TOGETHER.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-lg md:text-xl text-[#A5B4C8] leading-relaxed max-w-2xl mx-auto"
            >
              Tell us what you are planning. Let&apos;s explore how technology
              can bring your ideas to life.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 sm:px-9 py-4 rounded-full bg-gradient-to-r from-[#0E4A7B] via-[#1768AC] to-[#21B8E8] text-[#F5F5FA] font-heading font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase transition-all duration-300 shadow-[0_0_35px_rgba(33,184,232,0.45)] hover:shadow-[0_0_50px_rgba(33,184,232,0.75)]"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#050912]/90 hover:bg-[#0E182B] border border-[#21B8E8]/35 hover:border-[#21B8E8] text-[#F5F5FA] font-heading font-medium text-xs sm:text-sm transition-all"
              >
                <span>Explore Services</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
