import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Website or custom software",
  "AI or workflow automation",
  "Virtual tour or interactive experience",
  "SEO or website improvement",
  "API or systems integration",
  "Other",
] as const;

export const BUDGET_OPTIONS = [
  "Under $10,000 (Consultation / Audit)",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000+",
  "To be defined following discovery",
] as const;

export const TIMELINE_OPTIONS = [
  "Immediate (within 2 weeks)",
  "Next 1–2 months",
  "Quarterly planning",
  "Flexible / exploratory",
] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name cannot exceed 100 characters."),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address.")
    .max(254, "Email address cannot exceed 254 characters."),
  company: z
    .string()
    .trim()
    .max(100, "Company name cannot exceed 100 characters.")
    .optional(),
  service: z.enum(SERVICE_OPTIONS, {
    message: "Please select a required service category.",
  }),
  budget: z.string().trim().max(100).optional(),
  description: z
    .string()
    .trim()
    .min(
      10,
      "Please provide at least a brief description (10+ characters) of your system requirements."
    )
    .max(5000, "Description cannot exceed 5000 characters."),
  timeline: z.string().trim().max(100).optional(),
  // Anti-spam honeypot (must remain empty)
  website_hp: z.string().max(0, "Bot submission detected.").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
