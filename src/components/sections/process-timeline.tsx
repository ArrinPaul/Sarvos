import * as React from "react";
import { processSteps } from "@/content/process";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/motion/reveal";
import { Check } from "lucide-react";

export function ProcessTimeline() {
  return (
    <section className="w-full py-20 sm:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-3xl space-y-6">
          <SectionLabel index="05" label="Delivery discipline" />
          <h2 className="text-headline text-foreground">
            Clear steps. No unnecessary complexity.
          </h2>
          <p className="text-lede text-muted-foreground max-w-xl">
            Our delivery methodology is engineered around deterministic
            operational gates, transparent technical artifacts, and zero
            guesswork.
          </p>
        </Reveal>

        <ol className="mt-16 sm:mt-24">
          {processSteps.map((step) => (
            <Reveal
              as="li"
              key={step.step}
              className="border-border grid grid-cols-1 gap-6 border-t py-10 lg:grid-cols-12 lg:gap-10"
            >
              <div className="flex items-baseline justify-between gap-4 lg:col-span-4 lg:block lg:space-y-4">
                <span className="text-foreground block text-6xl leading-none font-semibold tracking-[-0.05em] tabular-nums sm:text-7xl lg:text-8xl">
                  {step.number.replace(/[^0-9]/g, "")}
                </span>
                <span className="text-muted-foreground bg-muted inline-block rounded-full px-3 py-1 text-xs">
                  {step.duration}
                </span>
              </div>

              <div className="space-y-4 lg:col-span-5">
                <h3 className="text-foreground text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="space-y-3 lg:col-span-3">
                <p className="text-foreground text-sm font-medium">
                  Verified deliverables
                </p>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  {step.deliverables.map((del) => (
                    <li key={del} className="flex items-start gap-2">
                      <Check className="text-foreground mt-0.5 h-4 w-4 shrink-0" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
