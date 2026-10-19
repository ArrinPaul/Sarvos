import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  project: Project;
  className?: string;
  /** Heading level; use "h2" when the page has no h2 above the cards. */
  headingAs?: "h2" | "h3";
}

export function ProjectCard({
  project,
  className,
  headingAs: Heading = "h3",
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group bg-muted relative flex flex-col justify-between rounded-[24px] p-7 transition-[transform,background-color] duration-300 [transition-timing-function:var(--ease-out)] sm:p-9 [@media(hover:hover)]:hover:-translate-y-1",
        className
      )}
    >
      <div className="space-y-6">
        <div className="text-muted-foreground flex items-center justify-between text-sm">
          <span>{project.category}</span>
          <span className="tabular-nums">{project.year}</span>
        </div>

        <Heading className="text-foreground text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
          <Link
            href={`/work/${project.slug}`}
            className="after:absolute after:inset-0 focus-visible:underline focus-visible:outline-none"
          >
            {project.title}
          </Link>
        </Heading>

        <p className="text-muted-foreground line-clamp-3 text-base leading-relaxed">
          {project.description}
        </p>

        {project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-4 pt-2">
            {project.metrics.slice(0, 2).map((m) => (
              <div key={m.label} className="space-y-1">
                <span className="text-foreground text-2xl font-semibold tracking-[-0.03em] tabular-nums">
                  {m.value}
                </span>
                <p className="text-muted-foreground text-xs">{m.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="bg-background text-muted-foreground rounded-full px-3 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <span className="bg-foreground text-background flex h-11 w-11 items-center justify-center overflow-hidden rounded-full">
          <ArrowUpRight className="h-5 w-5 transition-transform duration-300 [transition-timing-function:var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </div>
  );
}
