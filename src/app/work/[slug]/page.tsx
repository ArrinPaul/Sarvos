import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/content/projects";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/motion/reveal";
import { CheckCircle2 } from "lucide-react";

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

  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <article className="w-full pt-12 pb-3 sm:pt-20 sm:pb-5">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <PageHeader
          label={`${project.category} • ${project.client} • ${project.year}`}
          title={project.title}
          description={project.tagline}
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Work", href: "/work" },
            { label: project.title },
          ]}
        />

        {/* Metrics: large figures on a tonal field */}
        <Reveal className="bg-muted mt-16 grid grid-cols-2 gap-8 rounded-[28px] p-8 sm:mt-24 sm:grid-cols-4 sm:p-12">
          {project.metrics.map((m) => (
            <div key={m.label} className="space-y-2">
              <p className="text-foreground text-3xl font-semibold tracking-[-0.05em] whitespace-nowrap tabular-nums sm:text-5xl">
                {m.value}
              </p>
              <p className="text-muted-foreground text-sm">{m.label}</p>
            </div>
          ))}
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-14 sm:mt-28 lg:grid-cols-12">
          <div className="space-y-24 lg:col-span-8">
            <Reveal as="section" className="space-y-5">
              <SectionLabel index="01" label="The operational bottleneck" />
              <h2 className="text-foreground text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                The challenge
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.overview.challenge}
              </p>
            </Reveal>

            <Reveal as="section" className="space-y-5">
              <SectionLabel index="02" label="Engineered architecture" />
              <h2 className="text-foreground text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                The architecture
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.overview.solution}
              </p>
              <div className="bg-foreground text-background space-y-3 rounded-[20px] p-6 sm:p-8">
                <p className="text-sm opacity-60">Pipeline data flow</p>
                <p className="leading-relaxed">
                  {project.overview.architecture}
                </p>
              </div>
            </Reveal>

            <Reveal as="section" className="space-y-5">
              <SectionLabel index="03" label="Empirical results" />
              <h2 className="text-foreground text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Measured results
              </h2>
              <ul className="space-y-4 pt-2">
                {project.overview.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-foreground mt-1 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground text-lg leading-relaxed">
                      {res}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="lg:col-span-4">
            <Reveal delay={90} className="space-y-8 lg:sticky lg:top-28">
              <div className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  Services deployed
                </p>
                <ul className="text-foreground space-y-2">
                  {project.services.map((s) => (
                    <li key={s} className="flex items-center gap-2.5">
                      <span className="bg-foreground h-1.5 w-1.5 rounded-full" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  Technology stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="bg-muted text-foreground rounded-full px-3 py-1 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="press bg-foreground text-background inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-medium hover:opacity-90"
              >
                Discuss your architecture
              </Link>
            </Reveal>
          </aside>
        </div>

        <div className="mt-24 space-y-5 sm:mt-32">
          <CtaBand
            tone="dark"
            title="Have a similar architectural bottleneck?"
            body="Share the constraints and we reply with direct engineering feedback."
            action="Discuss your architecture"
          />
          <Link
            href={`/work/${next.slug}`}
            className="group text-muted-foreground hover:text-foreground flex items-center justify-between gap-6 px-3 py-4 text-sm transition-colors"
          >
            <span className="shrink-0">Next case study</span>
            <span className="text-foreground text-right text-lg font-medium tracking-tight">
              <span className="link-draw">{next.title}</span>
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
