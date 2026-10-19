import * as React from "react";
import { faqs } from "@/content/faq";
import { Accordion } from "@/components/ui/accordion";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/motion/reveal";

export function FAQSection() {
  const accordionItems = faqs.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: (
      <div className="space-y-2">
        <p className="text-muted-foreground text-base leading-relaxed">
          {faq.answer}
        </p>
        <span className="text-muted-foreground/80 block pt-1 text-xs">
          {faq.category}
        </span>
      </div>
    ),
  }));

  return (
    <section className="w-full py-20 sm:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="space-y-6 lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <SectionLabel index="06" label="Frequently asked questions" />
            <h2 className="text-headline text-foreground">
              Direct answers on engagement, process, and ownership.
            </h2>
            <p className="text-muted-foreground max-w-md text-base leading-relaxed">
              Have specific constraints or security requirements? We discuss
              technical architecture openly before any commercial commitment.
            </p>
          </Reveal>

          <Reveal delay={90} className="lg:col-span-7">
            <Accordion items={accordionItems} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
