"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Layers } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";
import { ProjectVisualMockup } from "@/components/work/ProjectVisualMockup";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function FeaturedProjectsSection() {
  return (
    <section
      id="work"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#040811] border-t border-[#21B8E8]/20 overflow-hidden"
    >
      {/* Animated Ambient Electric-Blue & Deep Black Light Field */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sweeping top laser beam */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-[#21B8E8]/70 to-transparent"
        />
        <motion.div
          animate={{
            y: [-30, 30, -30],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.42, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[-12%] w-[360px] sm:w-[580px] h-[360px] sm:h-[580px] rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(33,184,232,0.28) 0%, rgba(10,36,72,0.12) 55%, transparent 75%)",
          }}
        />
        <motion.div
          animate={{
            y: [30, -30, 30],
            scale: [1, 1.18, 1],
            opacity: [0.18, 0.38, 0.18],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-[-12%] w-[360px] sm:w-[580px] h-[360px] sm:h-[580px] rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,0.24) 0%, rgba(118,87,255,0.12) 55%, transparent 75%)",
          }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 54, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[880px] h-[520px] sm:h-[880px] rounded-full border border-dashed border-[#21B8E8]/10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6"
        >
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1324] border border-[#21B8E8]/35 text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-[#21B8E8]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#21B8E8] animate-ping" />
              <span>FEATURED PROJECTS</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-heading font-bold text-[clamp(1.85rem,4vw,3.25rem)] text-[#F5F5FA] tracking-tight leading-[1.08]"
            >
              IDEAS INTO{" "}
              <span className="bg-gradient-to-r from-[#21B8E8] via-[#7CE8FF] to-[#38BDF8] bg-clip-text text-transparent">
                REALITY.
              </span>
            </motion.h2>
          </div>

          <motion.div variants={fadeInUp}>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-[#0B1324] hover:bg-[#1768AC] border border-[#21B8E8]/40 hover:border-[#21B8E8] text-xs font-mono uppercase tracking-[0.18em] text-[#F5F5FA] transition-all duration-300 shadow-[0_0_20px_rgba(33,184,232,0.2)]"
            >
              <span>View All Case Studies</span>
              <ArrowUpRight className="w-4 h-4 text-[#21B8E8]" />
            </Link>
          </motion.div>
        </motion.div>

        {/* 9 Projects — Single per Row, Alternating Left/Right Layout on Laptop & Clean Stack on Mobile */}
        <div className="space-y-8 sm:space-y-12">
          {PROJECTS_DATA.map((project, index) => {
            // 1st (index 0): Left Text, Right Photo
            // 2nd (index 1): Left Photo, Right Text
            // Alternates for all 9 projects
            const isTextLeft = index % 2 === 0;

            return (
              <motion.article
                key={project.id}
                initial={{
                  opacity: 0,
                  x: isTextLeft ? -140 : 140,
                  y: 28,
                  scale: 0.96,
                  filter: "blur(8px)",
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                whileHover={{ y: -5 }}
                viewport={{ once: false, amount: 0.18 }}
                transition={{
                  duration: 0.85,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-2xl sm:rounded-3xl bg-[#0A1120]/90 border border-[#21B8E8]/25 hover:border-[#21B8E8]/80 p-5 sm:p-8 lg:p-10 transition-colors duration-500 shadow-[0_20px_55px_rgba(0,0,0,0.65)] overflow-hidden"
              >
                {/* Animated sweeping top border light */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 5.5,
                    delay: index * 0.4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-0 left-0 w-1/3 h-[1.5px] bg-gradient-to-r from-transparent via-[#21B8E8]/65 to-transparent pointer-events-none"
                />

                {/* Animated corner glow on hover */}
                <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#21B8E8]/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
                  {/* Text & Details Column */}
                  <div
                    className={`lg:col-span-6 space-y-4 sm:space-y-6 ${
                      isTextLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#0B162B] border border-[#21B8E8]/35 text-[11px] sm:text-xs font-mono text-[#7CE8FF]">
                        SECTOR: {project.category}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl sm:text-3xl md:text-4xl font-bold text-[#F5F5FA] tracking-tight leading-tight">
                      <Link
                        href={`/work/${project.slug}`}
                        className="hover:text-[#21B8E8] transition-colors"
                      >
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-base text-[#A5B4C8] leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Languages & Technologies Used */}
                    <div className="space-y-2">
                      <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#21B8E8] flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#21B8E8]" />
                        <span>Languages &amp; Technologies Used</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 sm:px-3 py-1 rounded-lg bg-[#050912] border border-[#21B8E8]/25 text-[11px] sm:text-xs font-mono text-[#F5F5FA]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions: Live Demo + View Case Study */}
                    <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                      <a
                        href={project.liveDemoUrl || "#"}
                        target={
                          project.liveDemoUrl && project.liveDemoUrl !== "#"
                            ? "_blank"
                            : undefined
                        }
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-gradient-to-r from-[#0E4A7B] via-[#1768AC] to-[#21B8E8] text-[#F5F5FA] font-heading font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(33,184,232,0.4)] hover:shadow-[0_0_38px_rgba(33,184,232,0.65)] hover:scale-[1.02]"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>

                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-[#050912] hover:bg-[#0E182B] border border-[#21B8E8]/35 hover:border-[#21B8E8] text-[#F5F5FA] font-heading font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300"
                      >
                        <span>View Case Study</span>
                        <ArrowUpRight className="w-4 h-4 text-[#21B8E8]" />
                      </Link>
                    </div>
                  </div>

                  {/* Visual Photo / Mockup Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isTextLeft ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Link
                      href={`/work/${project.slug}`}
                      aria-label={`Inspect ${project.title} case study`}
                      className="block transition-transform duration-500 group-hover:scale-[1.02]"
                    >
                      <ProjectVisualMockup
                        visualType={project.visualType}
                        title={project.title}
                        imageUrl={project.imageUrl}
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
