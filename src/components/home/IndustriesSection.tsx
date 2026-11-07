"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Building2,
  Landmark,
  Truck,
  Rocket,
  Briefcase,
} from "lucide-react";
import { INDUSTRIES_DATA } from "@/data/company";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const INDUSTRY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Building2,
  Landmark,
  Truck,
  Rocket,
  Briefcase,
};

export function IndustriesSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#171721] border-y border-[#30303B] overflow-hidden">
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
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101018] border border-[#30303B] text-xs font-mono uppercase tracking-[0.22em] text-[#21B8E8]"
          >
            <span>10 // INDUSTRIES WE SERVE</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#F5F5FA] tracking-tight leading-[1.1]"
          >
            TAILORED FOR DIVERSE{" "}
            <span className="bg-gradient-to-r from-[#7657FF] to-[#21B8E8] bg-clip-text text-transparent">
              GLOBAL SECTORS.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base text-[#A5A5B5] leading-relaxed"
          >
            Every industry carries distinct workflows, user expectations, and
            regulatory realities. We adapt our engineering architecture to fit
            your sector.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {INDUSTRIES_DATA.map((industry) => {
            const Icon = INDUSTRY_ICONS[industry.iconName] || Briefcase;
            return (
              <motion.div
                key={industry.id}
                variants={fadeInUp}
                className="group p-6 rounded-2xl bg-[#101018] border border-[#30303B] hover:border-[#7657FF]/60 transition-all duration-300 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-[#171721] border border-[#30303B] group-hover:border-[#21B8E8] flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5 text-[#21B8E8]" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#F5F5FA]">
                    {industry.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A5A5B5] leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#30303B]/70 flex flex-wrap gap-1.5">
                  {industry.focusAreas.map((focus) => (
                    <span
                      key={focus}
                      className="px-2 py-0.5 rounded bg-[#171721] border border-[#30303B] text-[10px] font-mono text-[#A5A5B5]"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

