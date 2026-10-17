import * as React from "react";
import { faqs } from "@/content/faq";
import { Accordion } from "@/components/ui/accordion";
import { SectionLabel } from "@/components/ui/section-label";

export function FAQSection() {
  const accordionItems = faqs.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: (
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {faq.answer}
        </p>
        <span className="text-muted-foreground/80 block pt-1 font-mono text-[10px] tracking-wider uppercase">
          CATEGORY: {faq.category}
        </span>
      </div>
    ),
  }));

  return (
    <section className="border-border w-full border-b py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Section Header */}
          <div className="space-y-4 lg:col-span-5">
            <SectionLabel index="04" label="FREQUENTLY ASKED QUESTIONS" />
            <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
              Direct answers on engagement, process, and ownership.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
              Have specific constraints or security requirements? We discuss
              technical architecture openly before any commercial commitment.
            </p>
          </div>

          {/* Accordion Component */}
          <div className="lg:col-span-7">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
