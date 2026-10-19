"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

export interface HeroSectionProps {
  featuredProjects: Project[];
}

export function HeroSection({ featuredProjects }: HeroSectionProps) {
  const [activeProjectIdx, setActiveProjectIdx] = React.useState(0);
  const activeProject =
    featuredProjects[activeProjectIdx] || featuredProjects[0];

  return (
    <section className="relative w-full pt-14 pb-16 sm:pt-24 sm:pb-24 lg:pt-32">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="space-y-8">
          <div className="rise" style={{ ["--d" as string]: "0ms" }}>
            <SectionLabel index="01" label="Independent technology studio" />
          </div>

          <h1
            className="text-display rise text-foreground max-w-[15ch]"
            style={{ ["--d" as string]: "80ms" }}
          >
            We build software for{" "}
            <span className="whitespace-nowrap">real-world</span> problems.
          </h1>

          <div className="flex flex-col gap-8">
            <p
              className="text-lede text-muted-foreground rise max-w-xl"
              style={{ ["--d" as string]: "200ms" }}
            >
              SARVOS is an independent software and technology consultancy. We
              design, engineer, and deploy high-reliability digital systems,
              custom web applications, and automated workflows.
            </p>

            <div
              className="rise flex flex-wrap items-center gap-3"
              style={{ ["--d" as string]: "300ms" }}
            >
              <Link
                href="/contact"
                className="press group bg-foreground text-background inline-flex h-14 items-center justify-center gap-2 rounded-full px-7 text-base font-medium hover:opacity-90"
              >
                <span>Start a project</span>
                <ArrowUpRight className="h-5 w-5 transition-transform duration-200 [transition-timing-function:var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/services"
                className="press border-border text-foreground hover:bg-muted inline-flex h-14 items-center justify-center gap-2 rounded-full border px-6 text-base font-medium"
              >
                <span>Explore capabilities</span>
                <ChevronRight className="text-muted-foreground h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {featuredProjects.length > 0 && (
          <div
            className="rise mt-16 sm:mt-24"
            style={{ ["--d" as string]: "420ms" }}
          >
            <div className="mb-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <span className="text-muted-foreground text-sm">
                Featured case studies
              </span>
              <div
                role="group"
                aria-label="Featured case studies"
                className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0"
              >
                {featuredProjects.map((proj, idx) => (
                  <button
                    key={proj.slug}
                    type="button"
                    onClick={() => setActiveProjectIdx(idx)}
                    aria-pressed={activeProjectIdx === idx}
                    className={cn(
                      "press min-h-10 cursor-pointer rounded-full border px-4 py-2 text-sm whitespace-nowrap",
                      activeProjectIdx === idx
                        ? "bg-foreground text-background border-foreground font-medium"
                        : "text-muted-foreground border-border hover:bg-muted hover:text-foreground"
                    )}
                    aria-label={`Select project ${proj.title}`}
                  >
                    {String(idx + 1).padStart(2, "0")}.{" "}
                    {proj.category.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Preview panel: re-keyed so each selection crossfades in */}
            <div className="bg-muted rounded-[28px] p-6 sm:p-10 lg:p-12">
              <div
                key={activeProject.slug}
                className="animate-fade-in grid grid-cols-1 gap-10 lg:grid-cols-12"
              >
                <div className="space-y-8 lg:col-span-7">
                  <div className="space-y-3">
                    <span className="text-muted-foreground text-sm">
                      {activeProject.client} &bull; {activeProject.year}
                    </span>
                    <h2 className="text-foreground text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
                      {activeProject.title}
                    </h2>
                  </div>

                  <p className="text-muted-foreground max-w-xl text-base leading-relaxed sm:text-lg">
                    {activeProject.description}
                  </p>

                  <div className="border-border grid grid-cols-2 gap-6 border-t pt-6 sm:grid-cols-4">
                    {activeProject.metrics.map((metric) => (
                      <div key={metric.label} className="space-y-1">
                        <p className="text-foreground text-2xl font-semibold tracking-[-0.03em] tabular-nums sm:text-3xl">
                          {metric.value}
                        </p>
                        <p className="text-muted-foreground text-xs leading-tight">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-background text-foreground rounded-full px-3 py-1 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/work/${activeProject.slug}`}
                      className="group text-foreground -my-2.5 inline-flex items-center gap-1.5 py-2.5 text-sm font-medium"
                    >
                      <span className="link-draw">Read full case study</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 [transition-timing-function:var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

                <div className="bg-foreground text-background flex flex-col justify-between rounded-[20px] p-6 sm:p-8 lg:col-span-5">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Architecture</span>
                      <span className="flex items-center gap-2 opacity-70">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Verified
                      </span>
                    </div>

                    <dl className="space-y-5">
                      <div>
                        <dt className="text-xs opacity-60">Domain</dt>
                        <dd className="mt-1 text-lg tracking-tight">
                          {activeProject.category}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs opacity-60">Execution engine</dt>
                        <dd className="mt-1 text-sm leading-relaxed opacity-90">
                          {activeProject.overview.solution}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <p className="mt-8 font-mono text-xs opacity-50">
                    Ref 0x{activeProject.slug.slice(0, 8).toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
