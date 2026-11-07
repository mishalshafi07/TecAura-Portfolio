import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutPreviewSection } from "@/components/home/AboutPreviewSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { RightSectionScrollIndicator } from "@/components/ui/RightSectionScrollIndicator";

export default function HomePage() {
  return (
    <>
      {/* Animated Right-Side Scroll Down & Active Section Name Indicator */}
      <RightSectionScrollIndicator />

      {/* 01 — HOME HERO */}
      <HeroSection />

      {/* 02 — ABOUT TECAURA */}
      <AboutPreviewSection />

      {/* 03 — OUR SERVICES */}
      <ServicesSection />

      {/* 04 — FEATURED PROJECTS (8 Projects, Single per row alternating) */}
      <FeaturedProjectsSection />

      {/* 05 — OUR PROCESS (Interactive Single-Box Step Viewer) */}
      <ProcessSection />
    </>
  );
}
