import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Terminal, ShieldCheck, Layers } from "lucide-react";
import { TECH_CATEGORIES } from "@/data/company";

export const metadata: Metadata = {
  title: "Technology Expertise — React, Next.js, TypeScript, Python, Java, AI & Cloud",
  description:
    "Explore TecAura's full-stack technology capabilities across Frontend, Backend, Databases, AI & Machine Learning, Cloud & Infrastructure, and Developer Tools.",
  alternates: {
    canonical: "/technologies",
  },
};

export default function TechnologiesPage() {
  return (
    <div className="bg-[#101018] text-[#F5F5FA] pt-32">
      {/* Header */}
      <section className="pb-20 sm:pb-24 border-b border-[#30303B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171721] border border-[#30303B] text-xs font-mono uppercase tracking-[0.22em] text-[#21B8E8]">
            <span>ENGINEERING STACK // 06 CORE DOMAINS</span>
          </div>
          <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.06]">
            POWERED BY THE{" "}
            <span className="bg-gradient-to-r from-[#7657FF] via-[#F5F5FA] to-[#21B8E8] bg-clip-text text-transparent">
              RIGHT TECHNOLOGY.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[#A5A5B5] max-w-3xl leading-relaxed">
            We select technologies based on architectural fit, maintainability,
            security, and long-term ecosystem support—showing only the tools and
            languages our engineering practice genuinely builds with.
          </p>
        </div>
      </section>

      {/* Complete 6-Domain Technology Matrix */}
      <section className="py-20 sm:py-28 border-b border-[#30303B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {TECH_CATEGORIES.map((category, idx) => (
            <div
              key={category.id}
              className="rounded-3xl bg-[#171721]/90 border border-[#30303B] p-6 sm:p-10 space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#30303B] pb-6 gap-4">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#7657FF]">
                    <Terminal className="w-4 h-4 text-[#21B8E8]" />
                    <span>0{idx + 1} // {category.category}</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F5FA]">
                    {category.subtitle}
                  </h2>
                  <p className="text-sm text-[#A5A5B5] leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#21B8E8] hover:text-[#F5F5FA]"
                >
                  <span>Consult on Stack</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-5 rounded-2xl bg-[#101018] border border-[#30303B] hover:border-[#7657FF]/60 transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-heading font-bold text-lg text-[#F5F5FA]">
                        {item.name}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-[#171721] border border-[#30303B] text-xs font-mono text-[#21B8E8]">
                        {item.codeSymbol}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#A5A5B5] leading-relaxed">
                      {item.role}
                    </p>
                    <div className="pt-2 border-t border-[#30303B]/60 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#7657FF]">{item.level}</span>
                      <span className="text-[#A5A5B5]">PRODUCTION VERIFIED</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Architectural Standards Banner */}
      <section className="py-20 bg-[#171721] border-b border-[#30303B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-[#101018] border border-[#30303B] space-y-3">
            <Layers className="w-6 h-6 text-[#7657FF]" />
            <h3 className="font-heading text-xl font-bold text-[#F5F5FA]">
              Modular &amp; Maintainable Codebases
            </h3>
            <p className="text-sm text-[#A5A5B5] leading-relaxed">
              Every project is structured with clear domain boundaries, reusable
              components, centralized configuration, and clean Git version
              control so future engineers can onboard effortlessly.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-[#101018] border border-[#30303B] space-y-3">
            <ShieldCheck className="w-6 h-6 text-[#21B8E8]" />
            <h3 className="font-heading text-xl font-bold text-[#F5F5FA]">
              Security &amp; Performance by Default
            </h3>
            <p className="text-sm text-[#A5A5B5] leading-relaxed">
              From parameterized SQL queries and Zod runtime validation to
              Next.js Server Components and Docker containerization, our stack
              decisions prioritize resilience and speed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

