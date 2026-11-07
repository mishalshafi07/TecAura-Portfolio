"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MessageSquare } from "lucide-react";
import { TechauraLogo } from "@/components/brand/TechauraLogo";
import { COMPANY_INFO } from "@/data/company";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050811] border-t border-[#21B8E8]/20 text-[#F5F5FA] overflow-hidden">
      {/* Animated architectural background glow & sweeping light beam */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-[#21B8E8]/70 to-transparent pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[360px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(33,184,232,0.22) 0%, rgba(118,87,255,0.08) 45%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 relative z-10">
        {/* Top Brand Statement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between pb-14 sm:pb-16 border-b border-[#21B8E8]/20 gap-8"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1220] border border-[#21B8E8]/35 text-[11px] font-mono uppercase tracking-[0.22em] text-[#21B8E8] mb-5">
              <span>{COMPANY_INFO.altStatement}</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5FA] leading-[1.1]">
              INNOVATING TODAY.{" "}
              <span className="bg-gradient-to-r from-[#21B8E8] via-[#7CE8FF] to-[#7657FF] bg-clip-text text-transparent">
                ENGINEERING TOMORROW.
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Hello TecAura team, I would like to connect regarding your portfolio."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#0B1220] hover:bg-[#111E36] border border-[#21B8E8]/35 hover:border-[#21B8E8] text-[#F5F5FA] font-heading font-medium text-sm transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 text-[#21B8E8]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </motion.div>

        {/* Main 3-Column Grid (Brand Paragraph + Portfolio Navigation + Direct Channels) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 py-14 sm:py-16 border-b border-[#21B8E8]/20"
        >
          {/* Col 1: Brand & Paragraph (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <TechauraLogo size="lg" />
            <p className="text-sm text-[#A5B4C8] leading-relaxed max-w-md">
              {COMPANY_INFO.positioning}
            </p>
          </div>

          {/* Col 2: Navigation — Only Sections Present in This Portfolio (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.22em] text-[#21B8E8]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home", href: "/#home" },
                { label: "About TecAura", href: "/#about" },
                { label: "Our Services", href: "/#services" },
                { label: "Featured Projects", href: "/#work" },
                { label: "Our Process", href: "/#process" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#A5B4C8] hover:text-[#F5F5FA] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#21B8E8]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact & Socials (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <h3 className="text-xs font-mono uppercase tracking-[0.22em] text-[#21B8E8]">
              Direct Channels
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:tecauratechnology@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#0B1220]/90 border border-[#21B8E8]/25 hover:border-[#21B8E8] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#21B8E8] shrink-0" />
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-[#94A3B8]">
                    EMAIL
                  </div>
                  <div className="text-[#F5F5FA] font-medium truncate">
                    tecauratechnology@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+919605186843"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#0B1220]/90 border border-[#21B8E8]/25 hover:border-[#21B8E8] transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#21B8E8] shrink-0" />
                <div>
                  <div className="text-[11px] font-mono text-[#94A3B8]">
                    PHONE &amp; WHATSAPP
                  </div>
                  <div className="text-[#F5F5FA] font-medium">
                    +91 9605186843
                  </div>
                </div>
              </a>
            </div>

            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#94A3B8] mb-3">
                Connect With Us
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/tecaura-it-technology-8a710b449",
                  },
                  {
                    label: "Instagram",
                    href: "https://www.instagram.com/tecaura_technology?dlrf=bmY3YjkzaTE5Y3M2",
                  },
                  {
                    label: "Facebook",
                    href: "https://www.facebook.com/share/19Y929PFcg/",
                  },
                  {
                    label: "X / Twitter",
                    href: "https://x.com/TecAuraITComp",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#0B1220] border border-[#21B8E8]/30 hover:border-[#21B8E8] text-xs text-[#A5B4C8] hover:text-[#F5F5FA] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#21B8E8]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Large Subtle Editorial Wordmark */}
        <div className="py-8 border-b border-[#21B8E8]/15 overflow-hidden select-none pointer-events-none">
          <div className="font-heading font-bold text-[11vw] leading-none tracking-[0.16em] text-center bg-gradient-to-b from-[#F5F5FA]/10 via-[#21B8E8]/10 to-transparent bg-clip-text text-transparent">
            TecAura
          </div>
        </div>

        {/* Bottom Legal & Copyright (Sitemap removed) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <div>
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-[#F5F5FA] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#F5F5FA] transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
