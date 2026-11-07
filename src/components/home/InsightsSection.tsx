"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";
import { ARTICLES_DATA } from "@/data/articles";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function InsightsSection() {
  return (
    <section
      id="insights"
      className="relative py-24 sm:py-32 bg-[#101018] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl space-y-4">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171721] border border-[#30303B] text-xs font-mono uppercase tracking-[0.22em] text-[#21B8E8]"
            >
              <span>14 // INSIGHTS &amp; ARTICLES</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#F5F5FA] tracking-tight leading-[1.1]"
            >
              THOUGHTS. TECHNOLOGY.{" "}
              <span className="bg-gradient-to-r from-[#7657FF] to-[#21B8E8] bg-clip-text text-transparent">
                INNOVATION.
              </span>
            </motion.h2>
          </div>

          <motion.div variants={fadeInUp}>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#171721] hover:bg-[#7657FF] border border-[#30303B] hover:border-[#7657FF] text-xs font-mono uppercase tracking-[0.18em] text-[#F5F5FA] transition-all duration-300"
            >
              <span>Read All 06 Engineering Articles</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ARTICLES_DATA.map((article) => (
            <motion.article key={article.id} variants={fadeInUp}>
              <Link
                href={`/insights/${article.slug}`}
                className="group h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#171721]/90 border border-[#30303B] hover:border-[#7657FF] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-[#101018] border border-[#30303B] text-[10px] font-mono uppercase tracking-wider text-[#21B8E8]">
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#A5A5B5]">
                      <Clock className="w-3 h-3 text-[#7657FF]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#F5F5FA] group-hover:text-[#21B8E8] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A5A5B5] leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#30303B]/70 flex items-center justify-between text-xs">
                  <span className="font-mono text-[#A5A5B5] inline-flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#7657FF]" />
                    <span>{article.publishedAt}</span>
                  </span>
                  <span className="font-heading font-semibold text-[#F5F5FA] group-hover:text-[#21B8E8] inline-flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

