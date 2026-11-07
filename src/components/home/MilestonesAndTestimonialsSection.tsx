"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Quote, ShieldCheck, FileEdit } from "lucide-react";
import {
  MILESTONES_PLACEHOLDERS,
  TESTIMONIALS_PLACEHOLDERS,
} from "@/data/company";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function MilestonesAndTestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#171721] border-y border-[#30303B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        {/* SECTION 12: COMPANY MILESTONES */}
        <div>
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
                <span>12 // COMPANY MILESTONES &amp; CREDENTIALS</span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#F5F5FA] tracking-tight leading-[1.1]"
              >
                BUILT ON AUTHENTICITY &amp;{" "}
                <span className="bg-gradient-to-r from-[#7657FF] to-[#21B8E8] bg-clip-text text-transparent">
                  VERIFIED PROGRESS.
                </span>
              </motion.h2>
            </div>

            <motion.div
              variants={fadeInUp}
              className="px-4 py-2.5 rounded-xl bg-[#101018] border border-[#30303B] text-xs text-[#A5A5B5] flex items-center gap-2.5 max-w-md"
            >
              <ShieldCheck className="w-4 h-4 text-[#7657FF] shrink-0" />
              <span>
                Zero fabricated metrics policy: future certifications and awards
                use structured editable slots until formally issued.
              </span>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MILESTONES_PLACEHOLDERS.map((item) => (
              <div
                key={item.id}
                className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                  item.isEditablePlaceholder
                    ? "bg-[#101018]/70 border-dashed border-[#30303B]"
                    : "bg-[#101018] border-[#30303B] hover:border-[#7657FF]/60"
                } space-y-4`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider ${
                      item.isEditablePlaceholder
                        ? "bg-[#171721] text-[#A5A5B5] border border-[#30303B]"
                        : "bg-[#7657FF]/20 text-[#21B8E8] border border-[#7657FF]/40"
                    }`}
                  >
                    {item.statusBadge}
                  </span>
                  <span className="text-xs font-mono text-[#A5A5B5]">
                    {item.period}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="text-xs font-mono text-[#7657FF]">
                    {item.category}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#F5F5FA] flex items-start gap-2">
                    <Award className="w-5 h-5 text-[#21B8E8] shrink-0 mt-1" />
                    <span>{item.title}</span>
                  </h3>
                </div>

                <p className="text-sm text-[#A5A5B5] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 13: TESTIMONIALS */}
        <div className="pt-12 border-t border-[#30303B]">
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
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101018] border border-[#30303B] text-xs font-mono uppercase tracking-[0.22em] text-[#7657FF]"
              >
                <span>13 // CLIENT TESTIMONIALS</span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="font-heading font-bold text-3xl sm:text-4xl text-[#F5F5FA] tracking-tight leading-[1.1]"
              >
                PARTNER FEEDBACK{" "}
                <span className="text-[#21B8E8]">ARCHITECTURE.</span>
              </motion.h2>
            </div>

            <motion.div
              variants={fadeInUp}
              className="px-4 py-2.5 rounded-xl bg-[#101018] border border-[#30303B] text-xs text-[#A5A5B5] flex items-center gap-2.5 max-w-md"
            >
              <FileEdit className="w-4 h-4 text-[#21B8E8] shrink-0" />
              <span>
                Only verified client reviews with explicit permission are
                published. Editable in <code className="text-[#F5F5FA]">src/data/company.ts</code>.
              </span>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS_PLACEHOLDERS.map((t) => (
              <div
                key={t.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#101018] border border-dashed border-[#30303B] flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-[#171721] border border-[#30303B] text-[10px] font-mono text-[#21B8E8]">
                      {t.badge}
                    </span>
                    <Quote className="w-6 h-6 text-[#7657FF]/50" />
                  </div>
                  <p className="text-sm sm:text-base text-[#A5A5B5] italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#30303B]/70 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-heading font-semibold text-sm text-[#F5F5FA]">
                      {t.clientName}
                    </div>
                    <div className="text-xs text-[#A5A5B5]">
                      {t.clientRole} • {t.companyName}
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#171721] text-[10px] font-mono text-[#7657FF]">
                    {t.projectType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

