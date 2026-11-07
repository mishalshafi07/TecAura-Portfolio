"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectItem } from "@/types";
import { Lock } from "lucide-react";

interface ProjectVisualMockupProps {
  visualType: ProjectItem["visualType"];
  title: string;
  imageUrl?: string;
  screenIndex?: number;
}

const VISUAL_TYPE_IMAGE_MAP: Record<string, string> = {
  textiles: "/projects/al-ahli.png",
  cybershield: "/projects/cybershield.png",
  "buraq-mep": "/projects/buraq.png",
  "juice-brand": "/projects/juice.png",
  "saath-rental": "/projects/saath-rental.png",
  "apex-machinery": "/projects/apex-machinery.png",
  "itam-software": "/projects/itam-software.png",
  "email-faq-bot": "/projects/email-faq-help-bot.png",
  "ai-rag-bot": "/projects/ai-rag-bot.png",
};

export function ProjectVisualMockup({
  visualType,
  title,
  imageUrl,
  screenIndex = 0,
}: ProjectVisualMockupProps) {
  const resolvedImage =
    imageUrl || VISUAL_TYPE_IMAGE_MAP[visualType] || "/projects/al-ahli.png";

  return (
    <div className="relative w-full rounded-2xl bg-[#070B14] border border-[#21B8E8]/35 group-hover:border-[#21B8E8] overflow-hidden flex flex-col select-none group transition-all duration-500 shadow-[0_20px_55px_rgba(0,0,0,0.75)]">
      {/* Animated Sweeping Top Laser Line */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#21B8E8] to-transparent z-20 pointer-events-none"
      />

      {/* Browser / Application Top Chrome */}
      <div className="relative z-10 flex items-center justify-between gap-2 px-3.5 sm:px-4 py-2.5 bg-[#090F1D] border-b border-[#21B8E8]/20">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#21B8E8]/75 group-hover:bg-[#21B8E8] transition-colors shrink-0" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#7657FF]/75 group-hover:bg-[#7657FF] transition-colors shrink-0" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#30303B] shrink-0" />
          <span className="ml-1.5 text-[10px] sm:text-[11px] font-mono text-[#A5B4C8] truncate">
            {title.toLowerCase().replace(/\s+/g, "-")}
          </span>
        </div>
        <div className="px-2.5 py-0.5 rounded-full bg-[#0D1628] border border-[#21B8E8]/35 text-[9px] sm:text-[10px] font-mono text-[#21B8E8] shrink-0 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#21B8E8] animate-ping" />
          <span>LIVE VIEW</span>
        </div>
      </div>

      {/* Full-Clarity Project Screenshot Viewport */}
      <div className="relative w-full aspect-[16/10] bg-[#04070E] overflow-hidden flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resolvedImage}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Subtle bottom vignette for seamless frame integration */}
        <div
          className="absolute inset-x-0 bottom-0 h-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(7,11,20,0.65) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 px-3.5 sm:px-4 py-2 bg-[#090F1D] border-t border-[#21B8E8]/20 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-[#94A3B8]">
        <span className="inline-flex items-center gap-1.5 truncate">
          <Lock className="w-3 h-3 text-[#21B8E8] shrink-0" />
          <span className="truncate">{title}</span>
        </span>
        <span className="text-[#21B8E8] group-hover:text-[#F5F5FA] transition-colors shrink-0">
          VIEW PROJECT →
        </span>
      </div>
    </div>
  );
}
