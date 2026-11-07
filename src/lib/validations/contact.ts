import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name (at least 2 characters).")
    .max(100, "Name is too long."),
  email: z
    .string()
    .min(1, "Business email is required.")
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .min(7, "Please enter a valid phone or WhatsApp number.")
    .max(25, "Phone number is too long.")
    .regex(/^[+\d\s\-()]+$/, "Phone number can only contain digits, +, -, (), and spaces."),
  companyName: z
    .string()
    .min(2, "Please enter your company or project name.")
    .max(120, "Company name is too long."),
  serviceRequired: z
    .string()
    .min(1, "Please select the primary service you require."),
  estimatedBudget: z.string().optional(),
  projectDescription: z
    .string()
    .min(20, "Please share at least 20 characters describing your project goals.")
    .max(3000, "Description must be under 3000 characters."),
  // Honeypot field for spam protection (must remain empty)
  websiteHoneypot: z.string().max(0, "Spam detected.").optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

