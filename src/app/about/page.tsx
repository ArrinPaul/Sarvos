import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "About Studio, Principles & Team",
  description:
    "Learn about SARVOS philosophy: mechanical honesty, direct engineer-to-client partnership, and unyielding code quality.",
};

const APPROACH = [
  {
    title: "No Intermediaries",
    body: "You never speak to account managers or non-technical coordinators. Technical scoping, weekly check-ins, and architectural decisions occur directly between your leadership and our engineers.",
  },
  {
    title: "Zero Spec Drift",
    body: "We codify requirements through Architecture Decision Records (ADRs) and typed contracts. Sprints begin only when scope, edge cases, and acceptance criteria are mathematically unambiguous.",
  },
  {
    title: "Autonomous Handover",
    body: "We do not create proprietary lock-in. Our mission is to leave your internal team with clean, well-tested code, complete runbooks, and full confidence to operate independently.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-[1280px] px-5 pt-12 sm:px-8 sm:pt-20 lg:px-12">
        <PageHeader
          size="display"
          label="About SARVOS"
          title="Small enough to work closely. Technical enough to build properly."
          description="SARVOS operates as a boutique, senior-only engineering consultancy. We eliminated corporate layers to give clients direct access to senior practitioners who architect and write the code."
        />
      </div>

      {/* Approach: inverted field */}
      <section className="bg-foreground text-background mt-20 w-full py-20 sm:mt-32 sm:py-32">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-3xl space-y-6">
            <SectionLabel
              index="02"
              label="Core approach & philosophy"
              className="!text-background/70 [&>span:first-child]:!text-background [&>span[aria-hidden]]:!bg-background/40"
            />
            <h2 className="text-headline">Built on mechanical honesty.</h2>
          </Reveal>

          <div className="border-background/20 mt-16 grid grid-cols-1 gap-x-10 gap-y-12 border-t pt-10 md:grid-cols-3">
            {APPROACH.map((a, i) => (
              <Reveal key={a.title} delay={i * 80} className="space-y-4">
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                  {a.title}
                </h3>
                <p className="text-base leading-relaxed opacity-70">{a.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />

      <div className="mx-auto w-full max-w-[1280px] px-3 pb-3 sm:px-5 sm:pb-5">
        <CtaBand
          title="Work with engineers who care about code quality."
          body="Tell us about your technical roadmap or infrastructure requirements."
          action="Initiate contact"
        />
      </div>
    </div>
  );
}
