"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  ContactFormData,
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
} from "@/lib/contact-schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";

export function ProjectInquiryForm() {
  const [formStatus, setFormStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = React.useState<string | null>(null);
  const [submissionMeta, setSubmissionMeta] = React.useState<{
    referenceId?: string;
    delivered?: boolean;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "Website or custom software",
      budget: BUDGET_OPTIONS[1],
      description: "",
      timeline: TIMELINE_OPTIONS[1],
      website_hp: "", // honeypot
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus("submitting");
    setStatusMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resJson = await response.json();

      if (!response.ok || !resJson.success) {
        setFormStatus("error");
        setStatusMessage(
          resJson.error ||
            "Submission failed. Please check your inputs and try again."
        );
        return;
      }

      setFormStatus("success");
      setStatusMessage(resJson.message);
      setSubmissionMeta({
        referenceId: resJson.data?.referenceId,
        delivered: resJson.delivered,
      });
      reset();
    } catch {
      setFormStatus("error");
      setStatusMessage("Network connection error. Please try again later.");
    }
  };

  return (
    <div className="border-border bg-card rounded-[8px] border p-6 transition-colors sm:p-10">
      {/* Success State Notification */}
      {formStatus === "success" && (
        <div className="border-border bg-muted/60 animate-fade-in mb-8 space-y-4 rounded-[6px] border p-6">
          <div className="text-foreground flex items-center gap-2.5 font-semibold">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            <span>Enquiry Successfully Processed</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {statusMessage}
          </p>
          {submissionMeta?.referenceId && (
            <div className="text-muted-foreground border-border border-t pt-3 font-mono text-xs">
              <span>REFERENCE ID: </span>
              <strong className="text-foreground">
                {submissionMeta.referenceId}
              </strong>
              {!submissionMeta.delivered && (
                <span className="block pt-1 text-[11px] text-amber-600 dark:text-amber-400">
                  [ ADAPTER NOTICE: RESEND_API_KEY is not configured in
                  .env.local. Submission was validated server-side and recorded
                  to server audit log. ]
                </span>
              )}
            </div>
          )}
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setFormStatus("idle")}
            className="mt-2"
          >
            Submit another enquiry
          </Button>
        </div>
      )}

      {/* Error Banner */}
      {formStatus === "error" && (
        <div className="border-destructive/40 bg-destructive/10 text-foreground animate-fade-in mb-6 flex items-start gap-3 rounded-[6px] border p-4 text-sm">
          <AlertCircle className="text-destructive mt-0.5 h-5 w-5 shrink-0" />
          <div className="space-y-1">
            <p className="text-destructive font-medium">Submission Error</p>
            <p className="text-muted-foreground text-xs">{statusMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Anti-spam Honeypot (Visually Hidden) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website_hp">Leave this empty</label>
          <input
            id="website_hp"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website_hp")}
          />
        </div>

        {/* Name and Email */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-foreground font-mono text-xs tracking-wider uppercase"
            >
              Name <span className="text-destructive">*</span>
            </label>
            <Input
              id="name"
              placeholder="e.g. Jane Doe"
              error={Boolean(errors.name)}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-destructive text-xs">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-foreground font-mono text-xs tracking-wider uppercase"
            >
              Work Email <span className="text-destructive">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="jane@company.com"
              error={Boolean(errors.email)}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-destructive text-xs">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Company & Service */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="company"
              className="text-foreground font-mono text-xs tracking-wider uppercase"
            >
              Organization / Company
            </label>
            <Input
              id="company"
              placeholder="e.g. Acme Systems Inc."
              {...register("company")}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="service"
              className="text-foreground font-mono text-xs tracking-wider uppercase"
            >
              Service Area <span className="text-destructive">*</span>
            </label>
            <Select
              id="service"
              error={Boolean(errors.service)}
              {...register("service")}
            >
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </Select>
            {errors.service && (
              <p className="text-destructive text-xs">
                {errors.service.message}
              </p>
            )}
          </div>
        </div>

        {/* Budget & Timeline */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="budget"
              className="text-foreground font-mono text-xs tracking-wider uppercase"
            >
              Estimated Budget Scope
            </label>
            <Select id="budget" {...register("budget")}>
              {BUDGET_OPTIONS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </Select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="timeline"
              className="text-foreground font-mono text-xs tracking-wider uppercase"
            >
              Target Timeline
            </label>
            <Select id="timeline" {...register("timeline")}>
              {TIMELINE_OPTIONS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* System Description */}
        <div className="space-y-2">
          <label
            htmlFor="description"
            className="text-foreground font-mono text-xs tracking-wider uppercase"
          >
            Project Overview &amp; Technical Requirements{" "}
            <span className="text-destructive">*</span>
          </label>
          <Textarea
            id="description"
            rows={5}
            placeholder="Describe your system architecture requirements, known performance bottlenecks, or objectives..."
            error={Boolean(errors.description)}
            {...register("description")}
          />
          {errors.description && (
            <p className="text-destructive text-xs">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Submit Action */}
        <div className="border-border flex flex-col justify-between gap-4 border-t pt-4 sm:flex-row sm:items-center">
          <span className="text-muted-foreground font-mono text-[11px]">
            [ ALL COMMUNICATIONS ARE DIRECT WITH SENIOR ENGINEERS ]
          </span>

          <Button
            type="submit"
            variant="primary"
            disabled={formStatus === "submitting"}
            className="w-full sm:w-auto"
          >
            {formStatus === "submitting" ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Validating &amp; Transmitting...</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <span>Submit Technical Enquiry</span>
                <ArrowRight className="h-4 w-4" />
              </span>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
