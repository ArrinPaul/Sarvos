import type { Metadata } from "next";
import { services } from "@/content/services";
import { ServiceRow } from "@/components/sections/service-row";
import { SectionLabel } from "@/components/ui/section-label";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Technical Capabilities",
  description:
    "Explore SARVOS engineering services: custom web software, AI and workflow automation, interactive 3D virtual tours, and systems integration.",
};

export default function ServicesPage() {
  return (
    <div className="w-full py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1200px] space-y-12 px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="border-border max-w-3xl space-y-4 border-b pb-8">
          <SectionLabel index="01" label="TECHNICAL CAPABILITIES" />
          <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
            Disciplined engineering for complex systems.
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
            We deliver targeted engineering capabilities structured as
            transparent, milestone-driven technical specifications.
          </p>
        </div>

        {/* Services List */}
        <div className="divide-border divide-y">
          {services.map((service) => (
            <ServiceRow key={service.slug} service={service} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="border-border bg-card flex flex-col justify-between gap-6 rounded-[8px] border p-8 sm:flex-row sm:items-center sm:p-10">
          <div className="space-y-2">
            <span className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
              [ CUSTOM SCOPE / CROSS-DOMAIN CAPABILITIES ]
            </span>
            <h3 className="text-foreground text-xl font-semibold">
              Need a hybrid architecture or specialized technical audit?
            </h3>
            <p className="text-muted-foreground max-w-xl text-sm">
              We frequently architect bespoke solutions spanning multiple
              capability areas, from air-gapped LLM integrations to
              high-throughput data buses.
            </p>
          </div>

          <Link
            href="/contact"
            className="bg-primary text-background dark:bg-foreground dark:text-background inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-[8px] px-5 text-xs font-medium transition-colors hover:bg-neutral-800"
          >
            <span>Request Custom Scope</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
