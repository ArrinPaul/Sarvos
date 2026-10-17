import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/section-label";
import { ProjectInquiryForm } from "@/components/forms/project-inquiry-form";
import { Check, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Project Enquiry",
  description:
    "Initiate an engineering consultation with SARVOS. Direct communication with senior technical architects.",
};

export default function ContactPage() {
  return (
    <div className="w-full py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1200px] space-y-12 px-5 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="border-border max-w-3xl space-y-4 border-b pb-8">
          <SectionLabel index="01" label="PROJECT INQUIRY" />
          <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s discuss what needs building.
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
            Direct communication with senior engineers. Submit your project
            requirements below, and we will review your architecture and respond
            within 1–2 business days.
          </p>
        </div>

        {/* Form and Next Steps Side-by-Side */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Form */}
          <div className="lg:col-span-8">
            <ProjectInquiryForm />
          </div>

          {/* Sidebar: What happens next & direct contacts */}
          <div className="space-y-8 lg:col-span-4">
            <div className="border-border bg-card space-y-6 rounded-[8px] border p-6 sm:p-8">
              <div className="border-border space-y-2 border-b pb-4">
                <span className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
                  [ WHAT HAPPENS NEXT? ]
                </span>
                <h3 className="text-foreground text-base font-semibold">
                  Our standard consultation protocol:
                </h3>
              </div>

              <div className="text-muted-foreground space-y-5 text-xs">
                <div className="flex items-start gap-3">
                  <span className="text-foreground mt-0.5 shrink-0 font-mono font-bold">
                    01.
                  </span>
                  <div>
                    <strong className="text-foreground block">
                      Senior Engineer Review
                    </strong>
                    <span>
                      A senior software architect inspects your submitted
                      requirements and technical stack.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-foreground mt-0.5 shrink-0 font-mono font-bold">
                    02.
                  </span>
                  <div>
                    <strong className="text-foreground block">
                      Introductory Technical Call
                    </strong>
                    <span>
                      A focused 30-minute conversation to clarify throughput,
                      edge cases, and delivery expectations.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-foreground mt-0.5 shrink-0 font-mono font-bold">
                    03.
                  </span>
                  <div>
                    <strong className="text-foreground block">
                      Specification &amp; Estimate
                    </strong>
                    <span>
                      A formal fixed-scope milestone proposal with itemized
                      deliverables and timelines.
                    </span>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="border-border text-muted-foreground space-y-2 border-t pt-4 font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <Check className="text-foreground h-3.5 w-3.5" />
                  <span>NDAs signed prior to deep code audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-foreground h-3.5 w-3.5" />
                  <span>No pushy sales reps / Pure engineering</span>
                </div>
              </div>
            </div>

            {/* Direct Studio Telemetry */}
            <div className="border-border bg-muted/40 space-y-3 rounded-[8px] border p-6 font-mono text-xs">
              <span className="text-muted-foreground tracking-wider uppercase">
                DIRECT INBOX:
              </span>
              <p className="text-foreground font-semibold">
                hello@your-domain.tld (placeholder)
              </p>
              <div className="text-muted-foreground flex items-center gap-2 pt-1 text-[11px]">
                <ShieldAlert className="h-3.5 w-3.5" />
                <span>Encrypted transit &bull; Zero spam telemetry</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
