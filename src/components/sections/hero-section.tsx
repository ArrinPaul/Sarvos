"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Terminal,
  Layers,
  Database,
} from "lucide-react";
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
    <section className="border-border relative w-full border-b py-16 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12">
        {/* Top Hero Editorial Copy */}
        <div className="max-w-3xl space-y-6">
          <SectionLabel index="01" label="INDEPENDENT TECHNOLOGY STUDIO" />

          <h1 className="text-foreground text-4xl leading-[1.08] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            We build software for real-world problems.
          </h1>

          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed sm:text-lg">
            SARVOS is an independent software and technology consultancy. We
            design, engineer, and deploy high-reliability digital systems,
            custom web applications, and automated workflows.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="bg-primary text-background dark:bg-foreground dark:text-background inline-flex h-11 items-center justify-center gap-2 rounded-[8px] px-5 text-sm font-medium transition-colors hover:bg-neutral-800 dark:hover:bg-neutral-200"
            >
              <span>Start a project</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="border-border bg-card text-foreground hover:bg-muted inline-flex h-11 items-center justify-center gap-2 rounded-[8px] border px-5 text-sm font-medium transition-colors"
            >
              <span>Explore capabilities</span>
              <ChevronRight className="text-muted-foreground h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Interactive Project Showcase (Manual Switch, No Autoplay, ~200ms crossfade) */}
        {featuredProjects.length > 0 && (
          <div className="mt-16 space-y-4 sm:mt-24">
            <div className="border-border flex flex-col justify-between gap-4 border-b pb-3 sm:flex-row sm:items-center">
              <span className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
                [ FEATURED CASE STUDIES // SELECT TO INSPECT ]
              </span>
              <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                {featuredProjects.map((proj, idx) => (
                  <button
                    key={proj.slug}
                    type="button"
                    onClick={() => setActiveProjectIdx(idx)}
                    className={cn(
                      "cursor-pointer rounded-[4px] border px-3 py-1.5 font-mono text-xs whitespace-nowrap uppercase transition-colors duration-200",
                      activeProjectIdx === idx
                        ? "bg-foreground text-background border-foreground font-semibold"
                        : "bg-card text-muted-foreground border-border hover:bg-muted hover:text-foreground"
                    )}
                    aria-label={`Select project ${proj.title}`}
                  >
                    {String(idx + 1).padStart(2, "0")}.{" "}
                    {proj.category.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Preview Panel with 200ms CSS crossfade */}
            <div className="border-border bg-card rounded-[8px] border p-6 transition-opacity duration-200 sm:p-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                {/* Left: Summary & Metrics */}
                <div className="space-y-6 lg:col-span-7">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
                        {activeProject.client} &bull; {activeProject.year}
                      </span>
                    </div>
                    <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
                      {activeProject.title}
                    </h2>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                    {activeProject.description}
                  </p>

                  {/* Telemetry Metrics */}
                  <div className="border-border grid grid-cols-2 gap-4 border-y py-4 sm:grid-cols-4">
                    {activeProject.metrics.map((metric) => (
                      <div key={metric.label} className="space-y-1">
                        <p className="text-foreground font-mono text-lg font-bold tracking-tight sm:text-xl">
                          {metric.value}
                        </p>
                        <p className="text-muted-foreground font-mono text-[11px] leading-tight tracking-wider uppercase">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips & Link */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="border-border bg-muted text-foreground rounded-[4px] border px-2 py-0.5 font-mono text-xs uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/work/${activeProject.slug}`}
                      className="text-foreground inline-flex items-center gap-1 text-sm font-medium hover:underline"
                    >
                      <span>Read full case study</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Right: Architectural Wireframe Card */}
                <div className="border-border bg-muted/60 flex flex-col justify-between rounded-[6px] border p-6 font-mono text-xs lg:col-span-5">
                  <div className="space-y-4">
                    <div className="border-border flex items-center justify-between border-b pb-3">
                      <span className="text-foreground flex items-center gap-2 font-semibold">
                        <Terminal className="h-4 w-4" />
                        SYS.ARCHITECTURE
                      </span>
                      <span className="text-muted-foreground text-[11px]">
                        [ VERIFIED PASS ]
                      </span>
                    </div>

                    <div className="text-muted-foreground space-y-3">
                      <div className="flex items-start gap-2">
                        <Layers className="text-foreground mt-0.5 h-4 w-4 shrink-0" />
                        <div>
                          <p className="text-foreground font-medium">Domain:</p>
                          <p>{activeProject.category}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Database className="text-foreground mt-0.5 h-4 w-4 shrink-0" />
                        <div>
                          <p className="text-foreground font-medium">
                            Execution Engine:
                          </p>
                          <p>{activeProject.overview.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-border text-muted-foreground mt-6 border-t pt-4 text-[11px]">
                    <span>
                      SPECIFICATION REF: 0x
                      {activeProject.slug.slice(0, 8).toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
