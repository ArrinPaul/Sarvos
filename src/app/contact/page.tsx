import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ProjectInquiryForm } from "@/components/forms/project-inquiry-form";
import { Reveal } from "@/components/motion/reveal";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Project Enquiry",
  description:
    "Initiate an engineering consultation with SARVOS. Direct communication with senior technical architects.",
};

const STEPS = [
  {
    title: "Senior Engineer Review",
    body: "A senior software architect inspects your submitted requirements and technical stack.",
  },
  {
    title: "Introductory Technical Call",
    body: "A focused 30-minute conversation to clarify throughput, edge cases, and delivery expectations.",
  },
  {
    title: "Specification & Estimate",
    body: "A formal fixed-scope milestone proposal with itemized deliverables and timelines.",
  },
];

export default function ContactPage() {
  return (
    <div className="w-full pt-12 pb-20 sm:pt-20 sm:pb-32">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <PageHeader
          label="Project inquiry"
          title="Let's discuss what needs building."
          description="Direct communication with senior engineers. Submit your project requirements below, and we will review your architecture and respond within 1–2 business days."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 sm:mt-24 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-8">
            <ProjectInquiryForm />
          </Reveal>

          <Reveal
            delay={90}
            className="space-y-10 lg:sticky lg:top-28 lg:col-span-4"
          >
            <div className="space-y-6">
              <h2 className="text-foreground text-2xl font-semibold tracking-[-0.03em]">
                What happens next
              </h2>
              <ol className="space-y-6">
                {STEPS.map((s, i) => (
                  <li key={s.title} className="flex items-start gap-4">
                    <span className="bg-foreground text-background flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium tabular-nums">
                      {i + 1}
                    </span>
                    <div className="space-y-1">
                      <p className="text-foreground font-medium">{s.title}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <ul className="text-muted-foreground space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Check className="text-foreground h-4 w-4" />
                <span>NDAs signed prior to deep code audit</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-foreground h-4 w-4" />
                <span>No pushy sales reps. Pure engineering.</span>
              </li>
            </ul>

            <div className="bg-muted space-y-1 rounded-2xl p-6">
              <p className="text-muted-foreground text-sm">Direct inbox</p>
              <p className="text-foreground font-mono text-sm font-medium">
                hello@your-domain.tld
              </p>
              <p className="text-muted-foreground text-xs">
                (placeholder) &bull; Encrypted transit &bull; Zero spam
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
