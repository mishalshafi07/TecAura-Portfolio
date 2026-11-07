"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Terminal } from "lucide-react";
import { TECH_CATEGORIES } from "@/data/company";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function TechnologySection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("all");

  const displayedCategories =
    activeCategoryId === "all"
      ? TECH_CATEGORIES
      : TECH_CATEGORIES.filter((c) => c.id === activeCategoryId);

  return (
    <section
      id="technologies"
      className="relative py-24 sm:py-32 bg-[#171721] border-y border-[#30303B] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6"
        >
          <div className="max-w-2xl space-y-4">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101018] border border-[#30303B] text-xs font-mono uppercase tracking-[0.22em] text-[#21B8E8]"
            >
              <span>08 // TECHNOLOGY EXPERTISE</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#F5F5FA] tracking-tight leading-[1.1]"
            >
              POWERED BY THE{" "}
              <span className="bg-gradient-to-r from-[#7657FF] to-[#21B8E8] bg-clip-text text-transparent">
                RIGHT TECHNOLOGY.
              </span>
            </motion.h2>
          </div>

          <motion.div variants={fadeInUp}>
            <Link
              href="/technologies"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#101018] hover:bg-[#7657FF] border border-[#30303B] hover:border-[#7657FF] text-xs font-mono uppercase tracking-[0.18em] text-[#F5F5FA] transition-all duration-300"
            >
              <span>Deep-Dive Architecture Stack</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Interactive Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveCategoryId("all")}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
              activeCategoryId === "all"
                ? "bg-[#7657FF] text-[#F5F5FA] shadow-[0_0_20px_rgba(118,87,255,0.35)]"
                : "bg-[#101018] text-[#A5A5B5] border border-[#30303B] hover:text-[#F5F5FA]"
            }`}
          >
            All Capabilities (06)
          </button>
          {TECH_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategoryId(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeCategoryId === cat.id
                  ? "bg-[#7657FF] text-[#F5F5FA] shadow-[0_0_20px_rgba(118,87,255,0.35)]"
                  : "bg-[#101018] text-[#A5A5B5] border border-[#30303B] hover:text-[#F5F5FA]"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((cat) => (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-[#101018] border border-[#30303B] p-6 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-2 border-b border-[#30303B]/80 pb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7657FF]">
                      {cat.category}
                    </span>
                    <Terminal className="w-4 h-4 text-[#21B8E8]" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#F5F5FA]">
                    {cat.subtitle}
                  </h3>
                  <p className="text-xs text-[#A5A5B5] leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="p-3 rounded-xl bg-[#171721]/90 border border-[#30303B] hover:border-[#21B8E8]/60 transition-colors flex flex-col justify-between gap-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-heading font-semibold text-sm text-[#F5F5FA]">
                          {tech.name}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#101018] border border-[#30303B] text-[10px] font-mono text-[#21B8E8]">
                          {tech.codeSymbol}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#A5A5B5] leading-snug">
                        {tech.role}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

