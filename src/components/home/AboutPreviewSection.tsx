"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Eye, Lightbulb } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function AboutPreviewSection() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#04070E] border-t border-[#21B8E8]/15 overflow-hidden"
    >
      {/* Animated Deep Black & Electric Blue Background Visuals */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.25, 0.48, 0.25],
            x: [-25, 25, -25],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-24 w-[380px] sm:w-[580px] h-[380px] sm:h-[580px] rounded-full blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, rgba(33,184,232,0.26) 0%, rgba(11,48,88,0.14) 50%, transparent 75%)",
          }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
          className="absolute -right-32 top-1/2 -translate-y-1/2 w-[360px] sm:w-[540px] h-[360px] sm:h-[540px] rounded-full border border-dashed border-[#21B8E8]/20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -right-12 top-1/2 -translate-y-1/2 w-[240px] sm:w-[380px] h-[240px] sm:h-[380px] rounded-full border border-[#7657FF]/15"
        />
        {/* Sweeping horizontal light beam */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-[#21B8E8]/75 to-transparent"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
        >
          {/* Left Column: Heading, Intro & CTA (6 cols) */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1220] border border-[#21B8E8]/35 text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-[#21B8E8]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#21B8E8] animate-ping" />
              <span>ABOUT TecAura</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-heading font-bold text-[clamp(1.85rem,4vw,3.25rem)] text-[#F5F5FA] tracking-tight leading-[1.08]"
            >
              MORE THAN TECHNOLOGY.{" "}
              <span className="bg-gradient-to-r from-[#21B8E8] via-[#7CE8FF] to-[#38BDF8] bg-clip-text text-transparent">
                WE BUILD POSSIBILITIES.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base lg:text-lg text-[#B5C4D8] leading-relaxed"
            >
              TecAura is a software development and digital technology company
              focused on turning ambitious business concepts into reliable,
              scalable software systems and refined digital brand experiences.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-xs sm:text-sm lg:text-base text-[#94A3B8] leading-relaxed"
            >
              We work with startups, entrepreneurs, small and medium-sized
              businesses, and international clients—combining disciplined
              engineering in React, Next.js, TypeScript, Java, Python, and
              relational databases with thoughtful product design and applied AI.
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0B2545] to-[#134074] hover:from-[#123868] hover:to-[#21B8E8] border border-[#21B8E8]/45 text-[#F5F5FA] font-heading font-semibold text-xs sm:text-sm transition-all duration-300 shadow-[0_0_25px_rgba(33,184,232,0.25)]"
              >
                <span>Learn More About TecAura</span>
                <ArrowUpRight className="w-4 h-4 text-[#7CE8FF] group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Mission, Vision, Philosophy Cards (6 cols) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {[
              {
                icon: Compass,
                tag: "OUR MISSION",
                title: "Engineering Practical Digital Excellence",
                description:
                  "To empower businesses in India and worldwide with dependable custom software, intelligent AI workflows, and high-performing digital platforms that solve real operational problems.",
              },
              {
                icon: Eye,
                tag: "OUR VISION",
                title: "A Trusted Global Technology Partner",
                description:
                  "To grow into a globally respected technology studio recognized for architectural integrity, creative clarity, and long-term commitment to every client's success.",
              },
              {
                icon: Lightbulb,
                tag: "OUR PHILOSOPHY",
                title: "Clarity Over Complexity",
                description:
                  "Great software feels effortless to the user and remains clean under the hood. We reject bloated templates in favor of tailored, maintainable engineering and honest communication.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.tag}
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.015 }}
                  className="relative p-5 sm:p-7 rounded-2xl bg-[#0A101D]/90 border border-[#21B8E8]/20 hover:border-[#21B8E8]/80 transition-all duration-300 flex items-start gap-4 sm:gap-5 group overflow-hidden shadow-[0_14px_40px_rgba(0,0,0,0.55)]"
                >
                  {/* Animated sweeping top border light */}
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 4.8,
                      delay: idx * 0.6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-0 left-0 w-1/3 h-[1.5px] bg-gradient-to-r from-transparent via-[#21B8E8]/70 to-transparent pointer-events-none"
                  />

                  {/* Animated subtle corner pulse */}
                  <motion.div
                    animate={{ opacity: [0.15, 0.45, 0.15] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      delay: idx * 0.8,
                    }}
                    className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-[#21B8E8]/15 blur-2xl pointer-events-none"
                  />

                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#050912] border border-[#21B8E8]/30 group-hover:border-[#21B8E8] flex items-center justify-center shrink-0 transition-colors shadow-[0_0_15px_rgba(33,184,232,0.2)]">
                    <Icon className="w-5 h-5 text-[#21B8E8]" />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 relative z-10">
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-[#21B8E8]">
                      {item.tag}
                    </span>
                    <h3 className="font-heading text-base sm:text-xl font-bold text-[#F5F5FA]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A5B4C8] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
