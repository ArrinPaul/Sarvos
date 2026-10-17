import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectCard } from "@/components/sections/project-card";
import { ServiceRow } from "@/components/sections/service-row";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { FAQSection } from "@/components/sections/faq-section";
import { SectionLabel } from "@/components/ui/section-label";
import { projects } from "@/content/projects";
import { services } from "@/content/services";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section with Interactive Case Study Preview Switcher */}
      <HeroSection featuredProjects={featuredProjects} />

      {/* 2. Capabilities & Core Services */}
      <section className="border-border w-full border-b py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12">
          <div className="border-border flex flex-col justify-between gap-6 border-b pb-8 sm:flex-row sm:items-end">
            <div className="max-w-2xl space-y-4">
              <SectionLabel index="02" label="CORE CAPABILITIES" />
              <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
                Disciplined engineering for complex systems.
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                We engineer mission-critical applications and automated
                workflows tailored to specific operational profiles.
              </p>
            </div>

            <Link
              href="/services"
              className="text-foreground inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
            >
              <span>View all 5 specifications</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-4 divide-y divide-transparent">
            {services.slice(0, 3).map((service) => (
              <ServiceRow key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Selected Work & Case Studies Grid */}
      <section className="border-border w-full border-b py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12">
          <div className="border-border flex flex-col justify-between gap-6 border-b pb-8 sm:flex-row sm:items-end">
            <div className="max-w-2xl space-y-4">
              <SectionLabel index="03" label="SELECTED WORK" />
              <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
                Built with a purpose.
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                Representative architectures deployed across streaming data
                ingestion, browser 3D CAD visualization, and air-gapped AI
                agents.
              </p>
            </div>

            <Link
              href="/work"
              className="text-foreground inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
            >
              <span>Explore full portfolio</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Engineering Principles & Approach */}
      <section className="border-border bg-card/40 w-full border-b py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl space-y-4">
            <SectionLabel index="04" label="STUDIO PHILOSOPHY" />
            <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
              Direct engineer-to-client collaboration.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
              We eliminated the layers of project managers and account
              executives that dilute technical intent. You work directly with
              the senior engineers building your software.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="border-border bg-card space-y-3 rounded-[8px] border p-6">
              <span className="text-muted-foreground font-mono text-xs uppercase">
                [ PRINCIPLE 01 ]
              </span>
              <h3 className="text-foreground text-lg font-semibold">
                Mechanical Honesty
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                No artificial complexity or trendy abstractions. We select
                technologies strictly based on throughput, latency,
                maintainability, and team ergonomics.
              </p>
            </div>

            <div className="border-border bg-card space-y-3 rounded-[8px] border p-6">
              <span className="text-muted-foreground font-mono text-xs uppercase">
                [ PRINCIPLE 02 ]
              </span>
              <h3 className="text-foreground text-lg font-semibold">
                Deterministic Execution
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Every sprint terminates in verified working software, passing
                automated test suites, and deployed to live preview environments
                for inspection.
              </p>
            </div>

            <div className="border-border bg-card space-y-3 rounded-[8px] border p-6">
              <span className="text-muted-foreground font-mono text-xs uppercase">
                [ PRINCIPLE 03 ]
              </span>
              <h3 className="text-foreground text-lg font-semibold">
                Full IP Ownership
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                All code, infrastructure configurations, and architectural
                documentation remain 100% your property from day one with zero
                vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process & Gates Timeline */}
      <ProcessTimeline />

      {/* 6. FAQ Accordion */}
      <FAQSection />

      {/* 7. Final Call to Action */}
      <section className="w-full py-20 sm:py-28">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12">
          <div className="border-border bg-card mx-auto max-w-3xl space-y-6 rounded-[8px] border p-8 text-center sm:p-14">
            <span className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
              [ INITIATE TECHNICAL CONSULTATION ]
            </span>
            <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s discuss what needs building.
            </h2>
            <p className="text-muted-foreground mx-auto max-w-xl text-sm leading-relaxed sm:text-base">
              Share your system architecture challenges or upcoming digital
              initiatives. We review requirements thoroughly and provide direct
              engineering feedback.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="bg-primary text-background dark:bg-foreground dark:text-background inline-flex h-11 items-center justify-center gap-2 rounded-[8px] px-6 text-sm font-medium transition-colors hover:bg-neutral-800 dark:hover:bg-neutral-200"
              >
                <span>Start a project inquiry</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
