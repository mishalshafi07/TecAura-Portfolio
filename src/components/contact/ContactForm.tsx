"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";
import { SERVICES_DATA } from "@/data/services";
import { COMPANY_INFO } from "@/data/company";

const BUDGET_OPTIONS = [
  "Not sure yet / Need consultation",
  "Under $1,500 (₹1L – ₹1.25L)",
  "$1,500 – $5,000 (₹1.25L – ₹4L)",
  "$5,000 – $15,000 (₹4L – ₹12L)",
  "$15,000+ (Enterprise / Custom Scope)",
];

interface ContactFormProps {
  defaultService?: string;
}

export function ContactForm({ defaultService = "" }: ContactFormProps) {
  const [serverState, setServerState] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    deliveryMode?: "live_email" | "verified_local_ready";
    message?: string;
    submittedData?: ContactFormValues;
  }>({ status: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      serviceRequired: defaultService,
      estimatedBudget: "",
      projectDescription: "",
      websiteHoneypot: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setServerState({ status: "submitting" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        setServerState({
          status: "error",
          message:
            result.error ||
            "Something went wrong while submitting your enquiry.",
        });
        return;
      }

      setServerState({
        status: "success",
        deliveryMode: result.deliveryMode,
        message: result.message,
        submittedData: values,
      });
      reset();
    } catch {
      setServerState({
        status: "error",
        message: "Network error. Please check your connection or reach us directly via Email/WhatsApp.",
      });
    }
  };

  if (serverState.status === "success" && serverState.submittedData) {
    const d = serverState.submittedData;
    const formattedBody = `Hello TecAura Team,\n\nFull Name: ${d.fullName}\nCompany: ${d.companyName}\nEmail: ${d.email}\nPhone: ${d.phone}\nService Required: ${d.serviceRequired}\nEstimated Budget: ${d.estimatedBudget || "Not specified"}\n\nProject Brief:\n${d.projectDescription}`;

    const mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
      `Project Enquiry: ${d.serviceRequired} — ${d.companyName}`
    )}&body=${encodeURIComponent(formattedBody)}`;

    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
      formattedBody
    )}`;

    return (
      <div className="rounded-3xl bg-[#171721] border border-[#7657FF]/50 p-8 sm:p-10 space-y-6 shadow-[0_0_50px_rgba(118,87,255,0.15)]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#7657FF]/20 border border-[#7657FF]/50 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6 text-[#21B8E8]" />
          </div>
          <div className="space-y-2">
            <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-[#21B8E8]">
              {serverState.deliveryMode === "live_email"
                ? "LIVE EMAIL DISPATCH CONFIRMED"
                : "BRIEF VALIDATED & READY"}
            </span>
            <h3 className="font-heading text-2xl font-bold text-[#F5F5FA]">
              Thank you, {d.fullName}. Your project brief is ready.
            </h3>
            <p className="text-sm text-[#A5A5B5] leading-relaxed">
              {serverState.message}
            </p>
          </div>
        </div>

        {/* Summary Card */}
        <div className="rounded-2xl bg-[#101018] border border-[#30303B] p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-[#A5A5B5] font-mono block">COMPANY</span>
            <span className="text-[#F5F5FA] font-medium">{d.companyName}</span>
          </div>
          <div>
            <span className="text-[#A5A5B5] font-mono block">SERVICE</span>
            <span className="text-[#21B8E8] font-medium">{d.serviceRequired}</span>
          </div>
          <div>
            <span className="text-[#A5A5B5] font-mono block">CONTACT</span>
            <span className="text-[#F5F5FA] font-medium">
              {d.email} / {d.phone}
            </span>
          </div>
          <div>
            <span className="text-[#A5A5B5] font-mono block">ESTIMATED BUDGET</span>
            <span className="text-[#F5F5FA] font-medium">
              {d.estimatedBudget || "To be discussed"}
            </span>
          </div>
        </div>

        {/* Direct Dispatch Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#7657FF] hover:bg-[#6646F5] text-[#F5F5FA] font-heading font-semibold text-sm transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Brief via WhatsApp Instant</span>
          </a>
          <a
            href={mailtoUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#101018] hover:bg-[#1E1E2C] border border-[#30303B] hover:border-[#21B8E8] text-[#F5F5FA] font-heading font-medium text-sm transition-all"
          >
            <Mail className="w-4 h-4 text-[#21B8E8]" />
            <span>Open in Email Client</span>
          </a>
          <button
            type="button"
            onClick={() => setServerState({ status: "idle" })}
            className="text-xs font-mono text-[#A5A5B5] hover:text-[#F5F5FA] underline ml-auto"
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl bg-[#171721]/90 border border-[#30303B] p-6 sm:p-10 space-y-6 shadow-2xl"
    >
      <div className="flex items-center justify-between border-b border-[#30303B]/80 pb-5">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7657FF]">
            PROJECT ENQUIRY BRIEF
          </span>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F5F5FA] mt-1">
            Tell Us About Your Vision
          </h3>
        </div>
        <ShieldCheck className="w-6 h-6 text-[#21B8E8] shrink-0" />
      </div>

      {/* Honeypot input (hidden from humans, catches bots) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteHoneypot">Leave this field empty</label>
        <input
          id="websiteHoneypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("websiteHoneypot")}
        />
      </div>

      {serverState.status === "error" && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-red-500/10 border border-red-500/40 flex items-center gap-3 text-sm text-red-200"
        >
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
          <span>{serverState.message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="block text-xs font-mono uppercase tracking-wider text-[#F5F5FA]"
          >
            Full Name <span className="text-[#7657FF]">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. Aarav Mehta"
            {...register("fullName")}
            className="w-full px-4 py-3.5 rounded-xl bg-[#101018] border border-[#30303B] focus:border-[#7657FF] focus:outline-none text-sm text-[#F5F5FA] placeholder:text-[#A5A5B5]/50 transition-colors"
          />
          {errors.fullName && (
            <p className="text-xs text-red-400 mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Business Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-xs font-mono uppercase tracking-wider text-[#F5F5FA]"
          >
            Business Email <span className="text-[#7657FF]">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="name@company.com"
            {...register("email")}
            className="w-full px-4 py-3.5 rounded-xl bg-[#101018] border border-[#30303B] focus:border-[#7657FF] focus:outline-none text-sm text-[#F5F5FA] placeholder:text-[#A5A5B5]/50 transition-colors"
          />
          {errors.email && (
            <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-xs font-mono uppercase tracking-wider text-[#F5F5FA]"
          >
            Phone / WhatsApp Number <span className="text-[#7657FF]">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            {...register("phone")}
            className="w-full px-4 py-3.5 rounded-xl bg-[#101018] border border-[#30303B] focus:border-[#7657FF] focus:outline-none text-sm text-[#F5F5FA] placeholder:text-[#A5A5B5]/50 transition-colors"
          />
          {errors.phone && (
            <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Company Name */}
        <div className="space-y-2">
          <label
            htmlFor="companyName"
            className="block text-xs font-mono uppercase tracking-wider text-[#F5F5FA]"
          >
            Company / Organization Name <span className="text-[#7657FF]">*</span>
          </label>
          <input
            id="companyName"
            type="text"
            placeholder="Your Startup or Enterprise"
            {...register("companyName")}
            className="w-full px-4 py-3.5 rounded-xl bg-[#101018] border border-[#30303B] focus:border-[#7657FF] focus:outline-none text-sm text-[#F5F5FA] placeholder:text-[#A5A5B5]/50 transition-colors"
          />
          {errors.companyName && (
            <p className="text-xs text-red-400 mt-1">
              {errors.companyName.message}
            </p>
          )}
        </div>

        {/* Service Required */}
        <div className="space-y-2">
          <label
            htmlFor="serviceRequired"
            className="block text-xs font-mono uppercase tracking-wider text-[#F5F5FA]"
          >
            Service Required <span className="text-[#7657FF]">*</span>
          </label>
          <select
            id="serviceRequired"
            {...register("serviceRequired")}
            className="w-full px-4 py-3.5 rounded-xl bg-[#101018] border border-[#30303B] focus:border-[#7657FF] focus:outline-none text-sm text-[#F5F5FA] transition-colors"
          >
            <option value="">Select a primary service...</option>
            {SERVICES_DATA.map((service) => (
              <option key={service.id} value={service.title}>
                {service.number}. {service.title}
              </option>
            ))}
            <option value="Full-Stack Product & Multi-Service Partnership">
              Full-Stack Product / Multi-Service Partnership
            </option>
          </select>
          {errors.serviceRequired && (
            <p className="text-xs text-red-400 mt-1">
              {errors.serviceRequired.message}
            </p>
          )}
        </div>

        {/* Estimated Budget (Optional) */}
        <div className="space-y-2">
          <label
            htmlFor="estimatedBudget"
            className="block text-xs font-mono uppercase tracking-wider text-[#F5F5FA]"
          >
            Estimated Budget <span className="text-[#A5A5B5]">(Optional)</span>
          </label>
          <select
            id="estimatedBudget"
            {...register("estimatedBudget")}
            className="w-full px-4 py-3.5 rounded-xl bg-[#101018] border border-[#30303B] focus:border-[#7657FF] focus:outline-none text-sm text-[#F5F5FA] transition-colors"
          >
            <option value="">Select an estimated range...</option>
            {BUDGET_OPTIONS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Project Description */}
      <div className="space-y-2">
        <label
          htmlFor="projectDescription"
          className="block text-xs font-mono uppercase tracking-wider text-[#F5F5FA]"
        >
          Project Description &amp; Goals <span className="text-[#7657FF]">*</span>
        </label>
        <textarea
          id="projectDescription"
          rows={5}
          placeholder="Tell us what you are building, key features, target timeline, or any operational bottlenecks you want to solve..."
          {...register("projectDescription")}
          className="w-full px-4 py-3.5 rounded-xl bg-[#101018] border border-[#30303B] focus:border-[#7657FF] focus:outline-none text-sm text-[#F5F5FA] placeholder:text-[#A5A5B5]/50 transition-colors resize-y"
        />
        {errors.projectDescription && (
          <p className="text-xs text-red-400 mt-1">
            {errors.projectDescription.message}
          </p>
        )}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-xs text-[#A5A5B5]">
          Protected by schema validation &amp; honeypot anti-spam. We respect your confidentiality.
        </p>

        <button
          type="submit"
          disabled={serverState.status === "submitting"}
          className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#7657FF] hover:bg-[#6646F5] disabled:opacity-60 text-[#F5F5FA] font-heading font-semibold text-sm tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(118,87,255,0.4)] hover:shadow-[0_0_40px_rgba(33,184,232,0.5)]"
        >
          {serverState.status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Validating &amp; Sending...</span>
            </>
          ) : (
            <>
              <span>Submit Project Enquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

