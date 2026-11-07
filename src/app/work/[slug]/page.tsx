import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Cpu,
  Compass,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { PROJECTS_DATA, getProjectBySlug } from "@/data/projects";
import { ProjectVisualMockup } from "@/components/work/ProjectVisualMockup";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: `${project.title} — Case Study (${project.category})`,
    description: project.shortDescription,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const otherProjects = PROJECTS_DATA.filter((p) => p.id !== project.id);

  return (
    <div className="bg-[#050811] text-[#F5F5FA] pt-32">
      {/* Top Hero */}
      <section className="pb-16 sm:pb-24 border-b border-[#21B8E8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#A5B4C8] hover:text-[#21B8E8] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-[#0B1324] border border-[#21B8E8]/35 text-xs font-mono text-[#21B8E8]">
                  SECTOR: {project.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#7657FF]/15 border border-[#7657FF]/40 text-xs font-mono text-[#F5F5FA]">
                  {project.classification}
                </span>
              </div>

              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#F5F5FA] leading-[1.06]">
                {project.title}
              </h1>

              <p className="text-base sm:text-lg text-[#A5B4C8] leading-relaxed">
                {project.overview}
              </p>

              {/* Live Demo Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={project.liveDemoUrl || "#"}
                  target={
                    project.liveDemoUrl && project.liveDemoUrl !== "#"
                      ? "_blank"
                      : undefined
                  }
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0E4A7B] via-[#1768AC] to-[#21B8E8] text-[#F5F5FA] font-heading font-semibold text-xs sm:text-sm uppercase tracking-[0.14em] transition-all duration-300 shadow-[0_0_30px_rgba(33,184,232,0.4)] hover:shadow-[0_0_45px_rgba(33,184,232,0.65)]"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ProjectVisualMockup
                visualType={project.visualType}
                title={project.title}
                imageUrl={project.imageUrl}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement, Challenges & Proposed Solution */}
      <section className="py-20 sm:py-28 border-b border-[#21B8E8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Problem Statement */}
            <div className="p-8 rounded-3xl bg-[#0A1120] border border-[#21B8E8]/25 space-y-4">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#7657FF]">
                PROBLEM STATEMENT
              </div>
              <h2 className="font-heading text-2xl font-bold text-[#F5F5FA]">
                The Operational Bottleneck
              </h2>
              <p className="text-sm sm:text-base text-[#A5B4C8] leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            {/* Proposed Solution */}
            <div className="p-8 rounded-3xl bg-[#0A1120] border border-[#21B8E8]/40 space-y-4">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#21B8E8]">
                PROPOSED SOLUTION
              </div>
              <h2 className="font-heading text-2xl font-bold text-[#F5F5FA]">
                The Engineered Architecture
              </h2>
              <p className="text-sm sm:text-base text-[#A5B4C8] leading-relaxed">
                {project.proposedSolution}
              </p>
            </div>
          </div>

          {/* Challenges & Design Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 p-8 rounded-3xl bg-[#0A1120]/90 border border-[#21B8E8]/25 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#21B8E8]">
                <AlertTriangle className="w-4 h-4 text-[#7657FF]" />
                <span>KEY TECHNICAL CHALLENGES</span>
              </div>
              <ul className="space-y-3">
                {project.challenges.map((ch) => (
                  <li
                    key={ch}
                    className="flex items-start gap-3 text-sm text-[#A5B4C8]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#21B8E8] mt-2 shrink-0" />
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 p-8 rounded-3xl bg-[#0A1120]/90 border border-[#21B8E8]/25 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#7657FF]">
                <Compass className="w-4 h-4 text-[#21B8E8]" />
                <span>UI/UX &amp; DESIGN APPROACH</span>
              </div>
              <p className="text-sm sm:text-base text-[#A5B4C8] leading-relaxed">
                {project.designApproach}
              </p>
              <div className="pt-4 border-t border-[#21B8E8]/20 space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-[#F5F5FA]">
                  Architecture Highlights
                </div>
                {project.architectureHighlights.map((hl) => (
                  <div
                    key={hl}
                    className="flex items-center gap-2 text-xs text-[#A5B4C8]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#21B8E8] shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process & Technology Stack */}
      <section className="py-20 sm:py-28 bg-[#070C18] border-b border-[#21B8E8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#21B8E8]">
              DEVELOPMENT PROCESS
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#F5F5FA] mt-2 mb-8">
              Step-by-Step Engineering Execution
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.developmentProcess.map((step) => (
                <div
                  key={step.phase}
                  className="p-6 rounded-2xl bg-[#0A1120] border border-[#21B8E8]/25 space-y-3"
                >
                  <div className="text-xs font-mono font-bold text-[#21B8E8]">
                    {step.phase.replace(/^\d+\.\s*/, "")}
                  </div>
                  <p className="text-xs sm:text-sm text-[#A5B4C8] leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#0A1120] border border-[#21B8E8]/25 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#21B8E8]">
                <Layers className="w-4 h-4 text-[#21B8E8]" />
                <span>LANGUAGES &amp; TECHNOLOGY STACK</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#F5F5FA]">
                Core Languages, Frameworks &amp; Data Engines
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-[#050912] border border-[#21B8E8]/30 text-xs font-mono text-[#21B8E8]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Actual Outcomes */}
      <section className="py-20 bg-[#050811] border-b border-[#21B8E8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0A1120] border border-[#21B8E8]/35 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#21B8E8]">
              <Sparkles className="w-4 h-4 text-[#21B8E8]" />
              <span>ACTUAL ENGINEERING OUTCOMES</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F5FA]">
              Delivered Capabilities &amp; Technical Takeaways
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.outcomes.map((outcome, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-[#050912] border border-[#21B8E8]/25 space-y-2"
                >
                  <Cpu className="w-5 h-5 text-[#21B8E8]" />
                  <p className="text-sm text-[#F5F5FA] leading-relaxed">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Case Studies */}
      <section className="py-20 border-b border-[#21B8E8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F5FA]">
            Explore More Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherProjects.map((other) => (
              <Link
                key={other.id}
                href={`/work/${other.slug}`}
                className="p-5 rounded-2xl bg-[#0A1120] border border-[#21B8E8]/25 hover:border-[#21B8E8] transition-all group space-y-2"
              >
                <div className="text-[11px] font-mono text-[#21B8E8] truncate">
                  {other.category}
                </div>
                <div className="font-heading font-bold text-base text-[#F5F5FA] group-hover:text-[#7CE8FF] transition-colors">
                  {other.title}
                </div>
                <div className="text-xs text-[#A5B4C8] line-clamp-2">
                  {other.shortDescription}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
