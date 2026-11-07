import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Compass,
  Eye,
  Lightbulb,
  Globe,
  ShieldCheck,
  Code2,
  Users,
  Sparkles,
} from "lucide-react";
import {
  COMPANY_INFO,
  WHY_CHOOSE_DATA,
  PROCESS_STEPS,
  MILESTONES_PLACEHOLDERS,
} from "@/data/company";

export const metadata: Metadata = {
  title: "About TecAura — Purpose, Mission, Vision & Philosophy",
  description:
    "Learn about TecAura, an international software development and digital technology company transforming ambitious business ideas into scalable digital products.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#101018] text-[#F5F5FA] pt-32">
      {/* Hero Banner */}
      <section className="relative pb-20 sm:pb-28 border-b border-[#30303B] overflow-hidden">
        <div
          className="absolute -top-24 right-1/4 w-[520px] h-[520px] rounded-full pointer-events-none opacity-40 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(118,87,255,0.3) 0%, rgba(33,184,232,0.1) 60%, transparent 75%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171721] border border-[#30303B] text-xs font-mono uppercase tracking-[0.22em] text-[#21B8E8]">
              <span>ABOUT TecAura // COMPANY IDENTITY</span>
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.06]">
              MORE THAN TECHNOLOGY.{" "}
              <span className="bg-gradient-to-r from-[#7657FF] via-[#F5F5FA] to-[#21B8E8] bg-clip-text text-transparent">
                WE BUILD POSSIBILITIES.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-[#A5A5B5] leading-relaxed max-w-3xl">
              {COMPANY_INFO.positioning} We partner with startups, entrepreneurs,
              SMBs, and enterprises across India and international markets to
              engineer software that moves businesses forward.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Identity & Positioning */}
      <section className="py-20 sm:py-28 border-b border-[#30303B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7657FF]">
                WHO WE ARE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F5F5FA] leading-tight">
                An Ambitious Technology Studio Built for Modern Business
              </h2>
              <div className="p-4 rounded-2xl bg-[#171721] border border-[#30303B] text-xs font-mono text-[#21B8E8]">
                &ldquo;{COMPANY_INFO.tagline}&rdquo;
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base text-[#A5A5B5] leading-relaxed">
              <p>
                Every modern company is, at its core, powered by software. Yet too
                many businesses are held back by rigid off-the-shelf tools,
                disconnected spreadsheets, or generic websites that fail to reflect
                their ambition.
              </p>
              <p>
                <strong className="text-[#F5F5FA]">TecAura</strong> was founded to
                bridge the gap between creative digital brand storytelling and
                disciplined software engineering. Whether we are architecting a
                relational Java and MySQL healthcare management system, building a
                full-stack rental marketplace, training a Python NLP model for
                online safety, or crafting a Next.js corporate flagship, we
                approach every engagement with precision and ownership.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {[
                  {
                    icon: Globe,
                    label: "Global Reach",
                    detail: "Serving India & International Markets",
                  },
                  {
                    icon: Code2,
                    label: "Full-Stack Depth",
                    detail: "Web, Mobile, AI/ML, Cloud & Enterprise",
                  },
                  {
                    icon: Users,
                    label: "Partner Mindset",
                    detail: "Startups, Entrepreneurs, SMBs & Enterprises",
                  },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="p-5 rounded-2xl bg-[#171721]/90 border border-[#30303B] space-y-2"
                    >
                      <Icon className="w-5 h-5 text-[#21B8E8]" />
                      <div className="font-heading font-bold text-sm text-[#F5F5FA]">
                        {stat.label}
                      </div>
                      <div className="text-xs text-[#A5A5B5]">{stat.detail}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Philosophy */}
      <section className="py-20 sm:py-28 bg-[#171721] border-b border-[#30303B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#21B8E8]">
              CORE PILLARS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F5F5FA]">
              Our Mission, Vision &amp; Engineering Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Compass,
                badge: "OUR MISSION",
                title: "Transform Ideas into Scalable Digital Products",
                body: "To design, engineer, and deliver custom software, web applications, AI systems, and automated workflows that solve real business challenges with measurable clarity and reliability.",
              },
              {
                icon: Eye,
                badge: "OUR VISION",
                title: "Set the Standard for Modern Technology Partnerships",
                body: "To be recognized across India and international markets as a trusted software and digital technology partner where design elegance and engineering depth reinforce one another.",
              },
              {
                icon: Lightbulb,
                badge: "OUR PHILOSOPHY",
                title: "Substance Over Hype, Precision Over Shortcuts",
                body: "We believe in writing maintainable code, normalizing database schemas properly, respecting user accessibility, and communicating with complete transparency—never inventing metrics or taking fragile shortcuts.",
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.badge}
                  className="p-8 rounded-3xl bg-[#101018] border border-[#30303B] hover:border-[#7657FF]/60 transition-all space-y-5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#171721] border border-[#30303B] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#21B8E8]" />
                    </div>
                    <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-[#7657FF]">
                      {pillar.badge}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-[#F5F5FA]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#A5A5B5] leading-relaxed">
                      {pillar.body}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#30303B]/70 text-[11px] font-mono text-[#21B8E8]">
                    TecAura STANDARD // VERIFIED
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand Personality & Values */}
      <section className="py-20 sm:py-28 border-b border-[#30303B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7657FF]">
              WHY TecAura
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F5F5FA]">
              Core Principles That Guide Every Line of Code
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_DATA.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#171721]/90 border border-[#30303B] space-y-3"
              >
                <h3 className="font-heading text-lg font-bold text-[#F5F5FA]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A5A5B5] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Summary */}
      <section className="py-20 sm:py-28 bg-[#171721] border-b border-[#30303B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#21B8E8]">
                OUR APPROACH
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F5F5FA]">
                Structured Engineering Lifecycle
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#101018] border border-[#30303B] hover:border-[#7657FF] text-xs font-mono uppercase tracking-wider text-[#F5F5FA]"
            >
              <span>Inspect Our Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.title}
                className="p-6 rounded-2xl bg-[#101018] border border-[#30303B] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#7657FF]">
                    {step.subtitle}
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-[#21B8E8]" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#F5F5FA]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#A5A5B5] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentic Milestones Section */}
      <section className="py-20 sm:py-28 border-b border-[#30303B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7657FF]">
                AUTHENTICITY &amp; MILESTONES
              </span>
              <h2 className="font-heading text-3xl font-bold text-[#F5F5FA] mt-2">
                Verified Capabilities &amp; Transparent Placeholders
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 text-xs text-[#A5A5B5] bg-[#171721] px-4 py-2 rounded-xl border border-[#30303B]">
              <ShieldCheck className="w-4 h-4 text-[#21B8E8]" />
              <span>We never fabricate company history or unverified awards.</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MILESTONES_PLACEHOLDERS.map((m) => (
              <div
                key={m.id}
                className="p-6 rounded-2xl bg-[#171721]/80 border border-[#30303B] space-y-3"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#21B8E8]">
                  {m.statusBadge}
                </span>
                <h3 className="font-heading text-lg font-bold text-[#F5F5FA]">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A5A5B5] leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

