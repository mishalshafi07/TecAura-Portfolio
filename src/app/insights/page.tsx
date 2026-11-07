import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";
import { ARTICLES_DATA } from "@/data/articles";

export const metadata: Metadata = {
  title: "Insights & Articles — AI, Software Engineering, Automation & Cybersecurity",
  description:
    "Read technical insights and engineering articles from TecAura covering Artificial Intelligence, Software Development, Technology Trends, Business Automation, Digital Transformation, and Cybersecurity.",
  alternates: {
    canonical: "/insights",
  },
};

export default function InsightsPage() {
  return (
    <div className="bg-[#101018] text-[#F5F5FA] pt-32">
      {/* Header */}
      <section className="pb-20 sm:pb-24 border-b border-[#30303B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171721] border border-[#30303B] text-xs font-mono uppercase tracking-[0.22em] text-[#21B8E8]">
            <span>INSIGHTS &amp; ARTICLES // TECHNICAL PUBLICATIONS</span>
          </div>
          <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.06]">
            THOUGHTS. TECHNOLOGY.{" "}
            <span className="bg-gradient-to-r from-[#7657FF] via-[#F5F5FA] to-[#21B8E8] bg-clip-text text-transparent">
              INNOVATION.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[#A5A5B5] max-w-3xl leading-relaxed">
            Deep-dive perspectives from TecAura&apos;s engineering and design
            practice across Artificial Intelligence, Software Development,
            Technology Trends, Business Automation, Digital Transformation, and
            Cybersecurity.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 sm:py-28 border-b border-[#30303B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES_DATA.map((article) => (
            <article key={article.id}>
              <Link
                href={`/insights/${article.slug}`}
                className="group h-full flex flex-col justify-between p-7 rounded-3xl bg-[#171721]/90 border border-[#30303B] hover:border-[#7657FF] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#101018] border border-[#30303B] text-[10px] font-mono uppercase tracking-wider text-[#21B8E8]">
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-[#A5A5B5]">
                      <Clock className="w-3.5 h-3.5 text-[#7657FF]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="font-heading text-2xl font-bold text-[#F5F5FA] group-hover:text-[#21B8E8] transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-sm text-[#A5A5B5] leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#30303B]/70 flex items-center justify-between text-xs">
                  <span className="font-mono text-[#A5A5B5] inline-flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#7657FF]" />
                    <span>{article.publishedAt}</span>
                  </span>
                  <span className="font-heading font-semibold text-[#F5F5FA] group-hover:text-[#21B8E8] inline-flex items-center gap-1">
                    <span>Read Full Article</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

