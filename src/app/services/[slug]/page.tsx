import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SERVICES_DATA, getServiceBySlug } from "@/data/services";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  for (const service of SERVICES_DATA) {
    slugs.push({ slug: service.slug });
    if (service.aliases) {
      for (const alias of service.aliases) {
        slugs.push({ slug: alias });
      }
    }
  }
  return slugs;
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} — Enterprise Engineering & Solutions`,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const otherServices = SERVICES_DATA.filter((s) => s.id !== service.id);

  return (
    <div className="bg-[#101018] text-[#F5F5FA] pt-32">
      {/* Hero */}
      <section className="pb-20 sm:pb-24 border-b border-[#30303B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#A5A5B5] hover:text-[#21B8E8] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>

          <div className="max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171721] border border-[#30303B] text-xs font-mono uppercase tracking-[0.22em] text-[#7657FF]">
              <span>OUR SERVICES // TecAura PRACTICE</span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#F5F5FA] leading-[1.08]">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#21B8E8] font-heading font-medium">
              {service.tagline}
            </p>

            <p className="text-base sm:text-lg text-[#A5A5B5] leading-relaxed">
              {service.longDescription}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#171721] border border-[#30303B] hover:border-[#21B8E8] text-sm font-heading font-medium text-[#F5F5FA]"
              >
                <span>Inspect Related Case Studies</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Deliverables */}
      <section className="py-20 sm:py-28 border-b border-[#30303B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#21B8E8]">
              CORE CAPABILITIES
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F5F5FA] mt-2 mb-10">
              How We Engineer {service.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="p-7 rounded-2xl bg-[#171721]/90 border border-[#30303B] space-y-3"
                >
                  <div className="text-xs font-mono text-[#7657FF]">
                    CAPABILITY
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#F5F5FA]">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#A5A5B5] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables + Use Cases + Tech Stack */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 p-8 rounded-3xl bg-[#171721] border border-[#30303B] space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#7657FF]">
                <Sparkles className="w-4 h-4 text-[#21B8E8]" />
                <span>WHAT YOU RECEIVE (DELIVERABLES)</span>
              </div>
              <ul className="space-y-3">
                {service.deliverables.map((del) => (
                  <li
                    key={del}
                    className="flex items-start gap-3 text-sm text-[#F5F5FA]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#21B8E8] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 rounded-3xl bg-[#171721] border border-[#30303B] space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#21B8E8]">
                  <Layers className="w-4 h-4 text-[#7657FF]" />
                  <span>IDEAL APPLICATIONS &amp; USE CASES</span>
                </div>
                <ul className="space-y-2.5">
                  {service.useCases.map((u) => (
                    <li
                      key={u}
                      className="flex items-center gap-2.5 text-sm text-[#A5A5B5]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7657FF]" />
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-[#171721] border border-[#30303B] space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#F5F5FA]">
                  <ShieldCheck className="w-4 h-4 text-[#21B8E8]" />
                  <span>TECHNOLOGIES &amp; STANDARDS USED</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-xl bg-[#101018] border border-[#30303B] text-xs font-mono text-[#21B8E8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[#A5A5B5] pt-2 border-t border-[#30303B]">
                  {service.processHighlight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Navigation */}
      <section className="py-20 bg-[#171721] border-b border-[#30303B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F5FA]">
            Explore Other TecAura Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((other) => (
              <Link
                key={other.id}
                href={`/services/${other.slug}`}
                className="p-5 rounded-2xl bg-[#101018] border border-[#30303B] hover:border-[#7657FF] transition-all group space-y-2"
              >
                <div className="text-xs font-mono text-[#7657FF]">
                  {other.shortTitle}
                </div>
                <div className="font-heading font-bold text-base text-[#F5F5FA] group-hover:text-[#21B8E8] transition-colors">
                  {other.title}
                </div>
                <div className="text-xs text-[#A5A5B5] line-clamp-2">
                  {other.tagline}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

