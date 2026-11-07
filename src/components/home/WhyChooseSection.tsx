"use client";

import React from "react";
import { motion } from "framer-motion";
import { WHY_CHOOSE_DATA } from "@/data/company";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function WhyChooseSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#101018] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl space-y-4 mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171721] border border-[#30303B] text-xs font-mono uppercase tracking-[0.22em] text-[#7657FF]"
          >
            <span>11 // WHY CHOOSE TecAura?</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#F5F5FA] tracking-tight leading-[1.1]"
          >
            YOUR VISION.{" "}
            <span className="text-[#21B8E8]">OUR TECHNOLOGY.</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base text-[#A5A5B5] leading-relaxed"
          >
            We combine the technical rigor of a systems engineering firm with the
            design sensitivity of an international creative studio.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {WHY_CHOOSE_DATA.map((item) => (
            <motion.div
              key={item.number}
              variants={fadeInUp}
              className="p-6 sm:p-7 rounded-2xl bg-[#171721]/90 border border-[#30303B] hover:border-[#21B8E8]/60 transition-all duration-300 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#7657FF]">
                  //{item.number}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#21B8E8]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#F5F5FA] leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A5A5B5] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

