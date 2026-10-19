import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectCard } from "@/components/sections/project-card";
import { ServiceRow } from "@/components/sections/service-row";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { FAQSection } from "@/components/sections/faq-section";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/motion/reveal";
import { projects } from "@/content/projects";
import { services } from "@/content/services";

const PRINCIPLES = [
  {
    title: "Mechanical Honesty",
    body: "No artificial complexity or trendy abstractions. We select technologies strictly based on throughput, latency, maintainability, and team ergonomics.",
  },
  {
    title: "Deterministic Execution",
    body: "Every sprint terminates in verified working software, passing automated test suites, and deployed to live preview environments for inspection.",
  },
  {
    title: "Full IP Ownership",
    body: "All code, infrastructure configurations, and architectural documentation remain 100% your property from day one with zero vendor lock-in.",
  },
];

function SectionHeader({
  index,
  label,
  title,
  body,
  href,
  cta,
}: {
  index: string;
  label: string;
  title: string;
  body: string;
  href: string;
  cta: string;
}) {
  return (
    <Reveal className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
      <div className="max-w-3xl space-y-6">
        <SectionLabel index={index} label={label} />
        <h2 className="text-headline text-foreground">{title}</h2>
        <p className="text-lede text-muted-foreground max-w-xl">{body}</p>
      </div>

      <Link
        href={href}
        className="group text-foreground -my-2.5 inline-flex shrink-0 items-center gap-1.5 py-2.5 text-base font-medium"
      >
        <span className="link-draw">{cta}</span>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 [transition-timing-function:var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </Reveal>
  );
}

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="flex flex-col">
      <HeroSection featuredProjects={featuredProjects} />

      {/* Capabilities */}
      <section className="w-full py-20 sm:py-32">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeader
            index="02"
            label="Core capabilities"
            title="Disciplined engineering for complex systems."
            body="We engineer mission-critical applications and automated workflows tailored to specific operational profiles."
            href="/services"
            cta="View all 5 specifications"
          />

          <div className="mt-14 sm:mt-20">
            {services.slice(0, 3).map((service, i) => (
              <Reveal key={service.slug} delay={i * 70}>
                <ServiceRow service={service} />
              </Reveal>
            ))}
            <div className="border-border border-t" />
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="w-full pb-20 sm:pb-32">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <SectionHeader
            index="03"
            label="Selected work"
            title="Built with a purpose."
            body="Representative architectures deployed across streaming data ingestion, browser 3D CAD visualization, and air-gapped AI agents."
            href="/work"
            cta="Explore full portfolio"
          />

          <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, i) => (
              <Reveal key={project.slug} delay={i * 80} className="flex">
                <ProjectCard project={project} className="w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles: inverted field for rhythm */}
      <section className="bg-foreground text-background w-full py-20 sm:py-32">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-3xl space-y-6">
            <SectionLabel
              index="04"
              label="Studio philosophy"
              className="!text-background/70 [&>span:first-child]:!text-background [&>span[aria-hidden]]:!bg-background/40"
            />
            <h2 className="text-headline">
              Direct engineer-to-client collaboration.
            </h2>
            <p className="text-lede max-w-xl opacity-75">
              We eliminated the layers of project managers and account
              executives that dilute technical intent. You work directly with
              the senior engineers building your software.
            </p>
          </Reveal>

          <div className="border-background/20 mt-16 grid grid-cols-1 gap-x-10 gap-y-12 border-t pt-10 sm:mt-24 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="space-y-4">
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                  {p.title}
                </h3>
                <p className="text-base leading-relaxed opacity-70">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />

      <FAQSection />

      {/* Closing call to action */}
      <section className="w-full px-3 pb-3 sm:px-5 sm:pb-5">
        <Reveal className="bg-muted mx-auto max-w-[1280px] rounded-[28px] px-6 py-20 sm:rounded-[40px] sm:px-14 sm:py-32">
          <div className="max-w-4xl space-y-8">
            <h2 className="text-display text-foreground">
              Let&apos;s discuss what needs building.
            </h2>
            <p className="text-lede text-muted-foreground max-w-xl">
              Share your system architecture challenges or upcoming digital
              initiatives. We review requirements thoroughly and provide direct
              engineering feedback.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="press group bg-foreground text-background inline-flex h-16 items-center justify-center gap-2.5 rounded-full px-9 text-lg font-medium hover:opacity-90"
              >
                <span>Start a project inquiry</span>
                <ArrowUpRight className="h-5 w-5 transition-transform duration-200 [transition-timing-function:var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
