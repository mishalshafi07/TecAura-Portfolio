import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Globe,
  Smartphone,
  Cpu,
  Layers,
  Cloud,
  Workflow,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { PROCESS_STEPS } from "@/data/company";

export const metadata: Metadata = {
  title: "Services — Custom Software, Web, Mobile, AI/ML, UI/UX & Cloud",
  description:
    "Explore TecAura's 8 core technology services: Custom Software Development, Web Development, Mobile Apps, AI & Machine Learning, UI/UX Design, Cloud Solutions, Automation, and Cybersecurity.",
  alternates: {
    canonical: "/services",
  },
};

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Globe,
  Smartphone,
  Cpu,
  Layers,
  Cloud,
  Workflow,
  ShieldCheck,
};

export default function ServicesPage() {
  return (
    <div className="bg-[#101018] text-[#F5F5FA] pt-32">
      {/* Header */}
      <section className="pb-20 sm:pb-28 border-b border-[#30303B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171721] border border-[#30303B] text-xs font-mono uppercase tracking-[0.22em] text-[#21B8E8]">
              <span>OUR SERVICES</span>
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.06]">
              TECHNOLOGY THAT{" "}
              <span className="bg-gradient-to-r from-[#7657FF] via-[#F5F5FA] to-[#21B8E8] bg-clip-text text-transparent">
                MOVES YOU FORWARD.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-[#A5A5B5] leading-relaxed max-w-3xl">
              From greenfield software architecture and responsive Next.js web
              platforms to applied Python machine learning and workflow
              automation, every TecAura service is engineered for long-term
              reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Service Cards */}
      <section className="py-20 sm:py-28 border-b border-[#30303B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {SERVICES_DATA.map((service) => {
            const Icon = SERVICE_ICONS[service.iconName] || Code2;
            return (
              <div
                key={service.id}
                className="rounded-3xl bg-[#171721]/90 border border-[#30303B] hover:border-[#7657FF]/60 p-6 sm:p-10 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#101018] border border-[#30303B] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#21B8E8]" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-[#7657FF]">
                          {service.shortTitle}
                        </span>
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F5FA]">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-[#A5A5B5] leading-relaxed">
                      {service.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-[#101018] border border-[#30303B] text-xs font-mono text-[#21B8E8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7657FF] hover:bg-[#6646F5] text-[#F5F5FA] font-heading font-semibold text-xs sm:text-sm transition-all"
                      >
                        <span>Explore {service.shortTitle}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 rounded-2xl bg-[#101018] border border-[#30303B] p-6 space-y-4">
                    <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#21B8E8]">
                      Key Deliverables
                    </div>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F5FA]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#7657FF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Delivery Process Summary */}
      <section className="py-20 sm:py-28 bg-[#171721] border-b border-[#30303B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7657FF]">
              HOW WE DELIVER
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F5F5FA]">
              Every Service Follows Our Engineering Standard
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.title}
                className="p-5 rounded-2xl bg-[#101018] border border-[#30303B] space-y-2"
              >
                <div className="font-heading font-bold text-base text-[#F5F5FA]">
                  {step.title}
                </div>
                <p className="text-xs text-[#A5A5B5] leading-relaxed">
                  {step.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

