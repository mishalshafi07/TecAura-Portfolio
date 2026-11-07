import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions governing the use of the official TecAura website and digital technology services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="bg-[#101018] text-[#F5F5FA] pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-4 border-b border-[#30303B] pb-8">
          <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#7657FF]">
            LEGAL TERMS OF USE
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#F5F5FA]">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-[#A5A5B5] font-mono">
            Effective Date: November 2026 • Organization: {COMPANY_INFO.legalName}
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-[#A5A5B5] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-[#F5F5FA]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the official website of{" "}
              <strong className="text-[#F5F5FA]">{COMPANY_INFO.name}</strong>,
              you agree to comply with these Terms and Conditions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-[#F5F5FA]">
              2. Intellectual Property &amp; Brand Assets
            </h2>
            <p>
              All brand elements, custom user interface layouts, visual designs,
              code examples, case study narratives, and trademarks associated
              with {COMPANY_INFO.name} (&ldquo;{COMPANY_INFO.tagline}&rdquo;)
              are the intellectual property of {COMPANY_INFO.name} unless
              otherwise stated. You may not copy, redistribute, or misrepresent
              our brand identity or engineering demonstrations as your own.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-[#F5F5FA]">
              3. Project Enquiries &amp; Commercial Engagements
            </h2>
            <p>
              Submitting a project enquiry through our website does not
              constitute a binding software development contract. All commercial
              engagements, deliverables, timelines, payment milestones, and
              intellectual property transfers are governed by a separate written
              Statement of Work (SOW) or Master Services Agreement (MSA) signed
              by both parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-[#F5F5FA]">
              4. Portfolio &amp; Demonstration Transparency
            </h2>
            <p>
              Case studies and projects showcased on this website are labeled to
              distinguish between independently developed software architectures,
              applied AI research prototypes, and technical demonstrations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-[#F5F5FA]">
              5. Contact Information
            </h2>
            <p>
              For questions regarding these Terms &amp; Conditions, please
              contact us at{" "}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-[#21B8E8] underline"
              >
                {COMPANY_INFO.email}
              </a>{" "}
              or through our{" "}
              <Link href="/contact" className="text-[#7657FF] underline">
                Contact Page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

