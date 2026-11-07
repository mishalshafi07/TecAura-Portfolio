import React from "react";
import type { Metadata } from "next";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";

export const metadata: Metadata = {
  title: "Featured Projects & Case Studies — Software, AI & Digital Platforms",
  description:
    "Explore TecAura's featured engineering portfolio and detailed case studies.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <div className="bg-[#040811] text-[#F5F5FA] pt-16">
      <FeaturedProjectsSection />
    </div>
  );
}
