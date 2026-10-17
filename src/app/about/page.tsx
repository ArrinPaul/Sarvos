import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/section-label";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import Link from "next/link";
import { ArrowUpRight, Terminal, Shield, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Studio, Principles & Team",
  description:
    "Learn about SARVOS philosophy: mechanical honesty, direct engineer-to-client partnership, and unyielding code quality.",
};

export default function AboutPage() {
  return (
    <div className="w-full py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1200px] space-y-16 px-5 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="border-border max-w-3xl space-y-4 border-b pb-8">
          <SectionLabel index="01" label="ABOUT SARVOS" />
          <h1 className="text-foreground text-4xl leading-[1.15] font-semibold tracking-tight sm:text-5xl">
            Small enough to work closely. Technical enough to build properly.
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
            SARVOS operates as a boutique, senior-only engineering consultancy.
            We eliminated corporate layers to give clients direct access to
            senior practitioners who architect and write the code.
          </p>
        </div>

        {/* Studio Principles & Philosophy */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <SectionLabel index="02" label="CORE APPROACH & PHILOSOPHY" />
            <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
              Built on mechanical honesty.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="border-border bg-card space-y-4 rounded-[8px] border p-6 sm:p-8">
              <div className="text-foreground flex items-center gap-2 font-semibold">
                <Terminal className="h-5 w-5" />
                <h3 className="text-lg">No Intermediaries</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You never speak to account managers or non-technical
                coordinators. Technical scoping, weekly check-ins, and
                architectural decisions occur directly between your leadership
                and our engineers.
              </p>
            </div>

            <div className="border-border bg-card space-y-4 rounded-[8px] border p-6 sm:p-8">
              <div className="text-foreground flex items-center gap-2 font-semibold">
                <Shield className="h-5 w-5" />
                <h3 className="text-lg">Zero Spec Drift</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We codify requirements through Architecture Decision Records
                (ADRs) and typed contracts. Sprints begin only when scope, edge
                cases, and acceptance criteria are mathematically unambiguous.
              </p>
            </div>

            <div className="border-border bg-card space-y-4 rounded-[8px] border p-6 sm:p-8">
              <div className="text-foreground flex items-center gap-2 font-semibold">
                <Sparkles className="h-5 w-5" />
                <h3 className="text-lg">Autonomous Handover</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We do not create proprietary lock-in. Our mission is to leave
                your internal team with clean, well-tested code, complete
                runbooks, and full confidence to operate independently.
              </p>
            </div>
          </div>
        </section>

        {/* Operational Gates Process */}
        <ProcessTimeline />

        {/* CTA Section */}
        <div className="border-border bg-card flex flex-col justify-between gap-6 rounded-[8px] border p-8 sm:flex-row sm:items-center sm:p-12">
          <div className="max-w-xl space-y-2">
            <span className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
              [ DIRECT PARTNERSHIP ]
            </span>
            <h3 className="text-foreground text-2xl font-semibold">
              Work with engineers who care about code quality.
            </h3>
            <p className="text-muted-foreground text-sm">
              Tell us about your technical roadmap or infrastructure
              requirements.
            </p>
          </div>

          <Link
            href="/contact"
            className="bg-primary text-background dark:bg-foreground dark:text-background inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-[8px] px-6 text-sm font-medium transition-colors hover:bg-neutral-800"
          >
            <span>Initiate Contact</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
