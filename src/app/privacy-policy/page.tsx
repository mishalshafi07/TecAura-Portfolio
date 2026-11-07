import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for TecAura Software & Digital Technology. Learn how we handle and protect contact enquiries and visitor data.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#101018] text-[#F5F5FA] pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-4 border-b border-[#30303B] pb-8">
          <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#21B8E8]">
            LEGAL &amp; DATA PROTECTION
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#F5F5FA]">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#A5A5B5] font-mono">
            Effective Date: November 2026 • Organization: {COMPANY_INFO.legalName}
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-[#A5A5B5] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-[#F5F5FA]">
              1. Overview &amp; Commitment to Privacy
            </h2>
            <p>
              At <strong className="text-[#F5F5FA]">{COMPANY_INFO.name}</strong>,
              we respect your privacy and are committed to safeguarding any
              personal or business information you share with us when exploring
              our website or submitting a project enquiry.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-[#F5F5FA]">
              2. Information We Collect
            </h2>
            <p>
              We collect information that you voluntarily provide through our
              Project Enquiry Form, direct email, phone, or WhatsApp channels,
              including:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Full Name and Business Email Address</li>
              <li>Phone / WhatsApp Contact Number</li>
              <li>Company or Organization Name</li>
              <li>Service Requirements, Estimated Budget, and Project Briefs</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-[#F5F5FA]">
              3. How We Use Your Information
            </h2>
            <p>
              Your information is used strictly to evaluate your project
              enquiry, communicate with you regarding software and digital
              technology services, prepare proposals, and deliver contracted
              work. We never sell, rent, or trade your contact details to third
              parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-[#F5F5FA]">
              4. Session Storage &amp; Essential Technical Data
            </h2>
            <p>
              Our website uses browser <code className="text-[#F5F5FA]">sessionStorage</code>{" "}
              solely to remember whether you have already viewed or skipped the
              opening brand introduction during your current browsing session so
              it does not replay unnecessarily.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-[#F5F5FA]">
              5. Data Security &amp; Confidentiality
            </h2>
            <p>
              All project descriptions and business concepts shared with{" "}
              {COMPANY_INFO.name} are treated with strict confidentiality. We
              implement schema validation, anti-spam protection, and secure
              transmission protocols across our digital touchpoints.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-[#F5F5FA]">
              6. Contact Regarding Privacy
            </h2>
            <p>
              If you wish to request access to, correction of, or deletion of
              any enquiry information you have submitted, please contact us at{" "}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-[#21B8E8] underline"
              >
                {COMPANY_INFO.email}
              </a>{" "}
              or visit our{" "}
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

