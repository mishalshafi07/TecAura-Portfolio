import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#101018] px-4 text-center">
      <span className="px-3.5 py-1 rounded-full bg-[#171721] border border-[#30303B] text-xs font-mono text-[#7657FF] uppercase tracking-[0.2em] mb-4">
        404 // ROUTE NOT FOUND
      </span>
      <h1 className="font-heading font-bold text-4xl sm:text-6xl text-[#F5F5FA] mb-4">
        This coordinate does not exist.
      </h1>
      <p className="text-base text-[#A5A5B5] max-w-md mb-8">
        The page you are looking for may have moved or been renamed. Return to
        the TecAura homepage or explore our capabilities below.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#7657FF] text-[#F5F5FA] font-heading font-semibold text-sm"
        >
          <span>Return Home</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#171721] border border-[#30303B] text-[#F5F5FA] font-heading font-medium text-sm"
        >
          <span>Explore Services</span>
        </Link>
      </div>
    </div>
  );
}

