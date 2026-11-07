import React from "react";
import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MessageSquare,
  Globe,
  Clock,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact TecAura — Start Your Software or Digital Project",
  description:
    "Have an idea? Let's build it together. Contact TecAura for custom software development, web & mobile engineering, AI/ML solutions, UI/UX design, and business automation.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[#101018] text-[#F5F5FA] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171721] border border-[#30303B] text-xs font-mono uppercase tracking-[0.22em] text-[#21B8E8]">
            <span>INITIATE PARTNERSHIP // CONTACT TecAura</span>
          </div>
          <h1 className="font-heading font-bold text-4xl sm:text-6xl tracking-tight leading-[1.06]">
            HAVE AN IDEA?{" "}
            <span className="bg-gradient-to-r from-[#7657FF] via-[#F5F5FA] to-[#21B8E8] bg-clip-text text-transparent">
              LET&apos;S BUILD IT TOGETHER.
            </span>
          </h1>
          <p className="text-lg text-[#A5A5B5] leading-relaxed">
            Tell us what you are planning. Let&apos;s explore how technology can
            bring your ideas to life—whether you are launching a new product,
            modernizing enterprise workflows, or building a flagship digital
            brand.
          </p>
        </div>

        {/* Main Contact Grid: Direct Channels (5 cols) + Project Enquiry Form (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Channels & Process */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#171721] border border-[#30303B] p-6 sm:p-8 space-y-6">
              <div className="space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7657FF]">
                  DIRECT COMMUNICATION
                </span>
                <h2 className="font-heading text-2xl font-bold text-[#F5F5FA]">
                  Reach Our Engineering Team
                </h2>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#101018] border border-[#30303B] hover:border-[#7657FF] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#171721] border border-[#30303B] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#7657FF] group-hover:text-[#21B8E8]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#A5A5B5]">
                      Business Email
                    </div>
                    <div className="text-sm sm:text-base font-heading font-semibold text-[#F5F5FA] truncate">
                      {COMPANY_INFO.email}
                    </div>
                    <div className="text-xs text-[#21B8E8] mt-1 inline-flex items-center gap-1">
                      <span>Send Direct Email</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                    "Hello TecAura team, I would like to discuss a software or digital technology project."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#101018] border border-[#30303B] hover:border-[#21B8E8] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#171721] border border-[#30303B] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-[#21B8E8]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#A5A5B5]">
                      WhatsApp Direct
                    </div>
                    <div className="text-sm sm:text-base font-heading font-semibold text-[#F5F5FA]">
                      Instant Project Chat
                    </div>
                    <div className="text-xs text-[#21B8E8] mt-1 inline-flex items-center gap-1">
                      <span>Start WhatsApp Conversation</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#101018] border border-[#30303B] hover:border-[#7657FF] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#171721] border border-[#30303B] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#7657FF]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#A5A5B5]">
                      Phone Consultation
                    </div>
                    <div className="text-sm sm:text-base font-heading font-semibold text-[#F5F5FA]">
                      {COMPANY_INFO.phone}
                    </div>
                    <div className="text-xs text-[#A5A5B5] mt-1">
                      Mon – Sat • India (IST) &amp; International Overlap Hours
                    </div>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-[#30303B] space-y-3 text-xs text-[#A5A5B5]">
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[#21B8E8] shrink-0" />
                  <span>Serving clients across India &amp; International Markets</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#7657FF] shrink-0" />
                  <span>Prompt engineering response &amp; clear next steps</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#21B8E8] shrink-0" />
                  <span>Strict NDA &amp; intellectual property confidentiality</span>
                </div>
              </div>
            </div>

            {/* What Happens Next Card */}
            <div className="rounded-3xl bg-[#171721]/80 border border-[#30303B] p-6 sm:p-8 space-y-4">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#21B8E8]">
                WHAT HAPPENS AFTER YOU ENQUIRE?
              </div>
              <ol className="space-y-3 text-xs sm:text-sm text-[#A5A5B5]">
                <li className="flex items-start gap-3">
                  <span className="font-mono text-[#7657FF] font-bold">01.</span>
                  <span>
                    <strong className="text-[#F5F5FA]">Technical Review:</strong>{" "}
                    Our engineering lead reviews your project brief, goals, and
                    target timeline.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-[#7657FF] font-bold">02.</span>
                  <span>
                    <strong className="text-[#F5F5FA]">Discovery Call:</strong>{" "}
                    We schedule a focused consultation to clarify requirements and
                    recommended stack.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-[#7657FF] font-bold">03.</span>
                  <span>
                    <strong className="text-[#F5F5FA]">
                      Architecture &amp; Roadmap Proposal:
                    </strong>{" "}
                    You receive a transparent milestone plan, deliverable breakdown,
                    and clear commercial proposal.
                  </span>
                </li>
              </ol>
            </div>
          </div>

          {/* Right Column: Validated Project Enquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

