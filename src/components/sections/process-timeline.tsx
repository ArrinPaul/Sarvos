import * as React from "react";
import { processSteps } from "@/content/process";
import { SectionLabel } from "@/components/ui/section-label";
import { Check } from "lucide-react";

export function ProcessTimeline() {
  return (
    <section className="border-border w-full border-b py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl space-y-4">
          <SectionLabel index="03" label="DELIVERY DISCIPLINE" />
          <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
            Clear steps. No unnecessary complexity.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
            Our delivery methodology is engineered around deterministic
            operational gates, transparent technical artifacts, and zero
            guesswork.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="border-border bg-card hover:border-foreground/30 flex flex-col justify-between rounded-[8px] border p-6 transition-colors"
            >
              <div className="space-y-4">
                <div className="border-border flex items-center justify-between border-b pb-3">
                  <span className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
                    GATE {step.number}
                  </span>
                  <span className="text-muted-foreground border-border rounded-[4px] border px-1.5 py-0.5 font-mono text-[11px]">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-foreground text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-xs leading-relaxed">
                  {step.description}
                </p>

                <div className="space-y-2 pt-2">
                  <p className="text-foreground font-mono text-[10px] tracking-wider uppercase">
                    VERIFIED DELIVERABLES:
                  </p>
                  <ul className="text-muted-foreground space-y-1.5 text-xs">
                    {step.deliverables.map((del) => (
                      <li key={del} className="flex items-start gap-2">
                        <Check className="text-foreground mt-0.5 h-3.5 w-3.5 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
