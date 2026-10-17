import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group border-border bg-card hover:border-foreground/40 flex flex-col justify-between rounded-[8px] border p-6 transition-colors duration-150 sm:p-8",
        className
      )}
    >
      <div className="space-y-4">
        {/* Meta Bar */}
        <div className="border-border text-muted-foreground flex items-center justify-between border-b pb-3 font-mono text-xs uppercase">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="text-foreground group-hover:text-foreground/90 text-xl font-semibold tracking-tight transition-colors sm:text-2xl">
          <Link
            href={`/work/${project.slug}`}
            className="focus-visible:underline focus-visible:outline-none"
          >
            {project.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Primary Metric Preview */}
        {project.metrics.length > 0 && (
          <div className="border-border grid grid-cols-2 gap-3 border-t pt-3">
            {project.metrics.slice(0, 2).map((m) => (
              <div key={m.label} className="space-y-0.5">
                <span className="text-foreground font-mono text-base font-bold">
                  {m.value}
                </span>
                <p className="text-muted-foreground font-mono text-[10px] uppercase">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Stack & Action Footer */}
      <div className="border-border mt-6 flex flex-wrap items-center justify-between gap-3 border-t pt-4">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="bg-muted border-border text-muted-foreground rounded-[4px] border px-2 py-0.5 font-mono text-[11px] uppercase"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="text-foreground inline-flex items-center gap-1 text-xs font-medium hover:underline"
        >
          <span>Case study</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
