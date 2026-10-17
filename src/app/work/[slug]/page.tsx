import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/content/projects";
import { SectionLabel } from "@/components/ui/section-label";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Server } from "lucide-react";

interface CaseStudyProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Case Study Not Found" };

  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="w-full py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1200px] space-y-16 px-5 sm:px-8 lg:px-12">
        {/* Navigation & Back Link */}
        <div className="border-border flex items-center justify-between border-b pb-4">
          <Link
            href="/work"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 font-mono text-xs uppercase transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to all case studies</span>
          </Link>

          <span className="text-muted-foreground font-mono text-xs">
            SPEC ID: {project.slug.toUpperCase()}
          </span>
        </div>

        {/* Case Study Headline & Tagline */}
        <div className="max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-muted-foreground border-border rounded-[4px] border px-2 py-0.5 font-mono text-xs tracking-wider uppercase">
              {project.category}
            </span>
            <span className="text-muted-foreground font-mono text-xs">
              {project.client} &bull; {project.year}
            </span>
          </div>

          <h1 className="text-foreground text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed sm:text-xl">
            {project.tagline}
          </p>
        </div>

        {/* Key Benchmark Metrics Bar */}
        <div className="border-border bg-card grid grid-cols-2 gap-4 rounded-[8px] border p-6 sm:grid-cols-4 sm:p-8">
          {project.metrics.map((m) => (
            <div key={m.label} className="space-y-1">
              <p className="text-foreground font-mono text-2xl font-bold tracking-tight sm:text-3xl">
                {m.value}
              </p>
              <p className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* Challenge & Solution Detailed Narrative */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Main Content Sections */}
          <div className="space-y-12 lg:col-span-8">
            {/* The Challenge */}
            <section className="space-y-4">
              <SectionLabel index="01" label="THE OPERATIONAL BOTTLENECK" />
              <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
                Unpredictable ingestion latency during burst traffic windows.
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                {project.overview.challenge}
              </p>
            </section>

            {/* The Architectural Solution */}
            <section className="space-y-4">
              <SectionLabel index="02" label="ENGINEERED ARCHITECTURE" />
              <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
                Separation of ingestion ingest from analytical query paths.
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                {project.overview.solution}
              </p>
              <div className="border-border bg-muted/60 space-y-3 rounded-[6px] border p-6 font-mono text-xs">
                <div className="text-foreground flex items-center gap-2 font-semibold">
                  <Server className="h-4 w-4" />
                  <span>PIPELINE DATA FLOW:</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.overview.architecture}
                </p>
              </div>
            </section>

            {/* Measured Results */}
            <section className="space-y-4">
              <SectionLabel index="03" label="EMPIRICAL RESULTS" />
              <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
                A resilient, horizontally scalable streaming pipeline.
              </h2>
              <ul className="text-muted-foreground space-y-3 text-sm">
                {project.overview.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-foreground mt-0.5 h-5 w-5 shrink-0" />
                    <span className="leading-relaxed">{res}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar Telemetry & Meta */}
          <div className="space-y-8 lg:col-span-4">
            <div className="border-border bg-card space-y-6 rounded-[8px] border p-6">
              <div className="border-border space-y-2 border-b pb-4">
                <span className="text-muted-foreground font-mono text-[11px] tracking-wider uppercase">
                  SERVICES DEPLOYED
                </span>
                <ul className="text-foreground space-y-1 text-sm">
                  {project.services.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="bg-foreground h-1.5 w-1.5 rounded-full" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-border space-y-2 border-b pb-4">
                <span className="text-muted-foreground font-mono text-[11px] tracking-wider uppercase">
                  TECHNOLOGY STACK
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="bg-muted border-border text-foreground rounded-[4px] border px-2 py-0.5 font-mono text-xs uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-muted-foreground text-xs">
                  Have a similar architectural bottleneck to resolve?
                </p>
                <Link
                  href="/contact"
                  className="bg-primary text-background dark:bg-foreground dark:text-background inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-[6px] text-xs font-medium transition-colors hover:bg-neutral-800"
                >
                  <span>Discuss your architecture</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
