"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { TechauraLogo } from "@/components/brand/TechauraLogo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "py-4 bg-[#07090F]/85 backdrop-blur-xl border-b border-[#21B8E8]/15 shadow-[0_10px_30px_rgba(0,0,0,0.65)]"
          : "py-6 bg-gradient-to-b from-[#05070B]/80 to-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link
          href="/"
          aria-label="TecAura Home"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#21B8E8] rounded-lg"
        >
          <TechauraLogo size="md" showWordmark={true} />
        </Link>
      </div>
    </header>
  );
}
