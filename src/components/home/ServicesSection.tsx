"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const SERVICE_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Code2,
  Globe,
  Smartphone,
  Cpu,
  Layers,
  Cloud,
  Workflow,
  ShieldCheck,
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#060B16] border-y border-[#21B8E8]/20 overflow-hidden"
    >
      {/* Animated Cyber-Blue Grid, Sweeping Beam & Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-[#21B8E8]/75 to-transparent"
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(33,184,232,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(33,184,232,0.35) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.22, 1],
            opacity: [0.22, 0.45, 0.22],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-[-10%] w-[360px] sm:w-[560px] h-[360px] sm:h-[560px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(33,184,232,0.25) 0%, rgba(118,87,255,0.14) 55%, transparent 75%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
        >
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1324] border border-[#21B8E8]/35 text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-[#21B8E8]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#21B8E8] animate-ping" />
              <span>OUR SERVICES</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-heading font-bold text-[clamp(1.85rem,4vw,3.25rem)] text-[#F5F5FA] tracking-tight leading-[1.08]"
            >
              TECHNOLOGY THAT{" "}
              <span className="bg-gradient-to-r from-[#21B8E8] via-[#7CE8FF] to-[#7657FF] bg-clip-text text-transparent">
                MOVES YOU FORWARD.
              </span>
            </motion.h2>
          </div>

          <motion.div variants={fadeInUp}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-[#0B1324] hover:bg-[#143D6B] border border-[#21B8E8]/40 hover:border-[#21B8E8] text-xs font-mono uppercase tracking-[0.18em] text-[#F5F5FA] transition-all duration-300 shadow-[0_0_20px_rgba(33,184,232,0.2)]"
            >
              <span>Explore All Services</span>
              <ArrowUpRight className="w-4 h-4 text-[#21B8E8]" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Interactive Service Grid — Responsive 1 col on mobile, 2 on tablet, 4 on laptop */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {SERVICES_DATA.map((service, idx) => {
            const IconComponent = SERVICE_ICONS[service.iconName] || Code2;
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                whileHover={{ y: -7, scale: 1.015 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative h-full flex flex-col justify-between p-5 sm:p-7 rounded-2xl bg-[#0A1120]/95 border border-[#21B8E8]/20 hover:border-[#21B8E8] transition-all duration-300 overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.55)]"
                >
                  {/* Animated sweeping top border light */}
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 5,
                      delay: idx * 0.35,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-0 left-0 w-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-[#21B8E8]/65 to-transparent pointer-events-none"
                  />

                  {/* Animated hover top-right aura */}
                  <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-[#21B8E8]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="space-y-4 sm:space-y-5 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#21B8E8]">
                        {service.shortTitle}
                      </span>
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#050913] border border-[#21B8E8]/30 group-hover:border-[#21B8E8] flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(33,184,232,0.2)]">
                        <IconComponent className="w-5 h-5 text-[#21B8E8] group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#F5F5FA] group-hover:text-[#7CE8FF] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#A5B4C8] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#21B8E8]/15 relative z-10 space-y-3.5">
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-[#050913] border border-[#21B8E8]/20 text-[10px] font-mono text-[#94A3B8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[#21B8E8] group-hover:text-[#F5F5FA] transition-colors">
                      <span>Learn More</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
