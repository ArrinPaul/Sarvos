import type { Metadata } from "next";
import { ProjectCard } from "@/components/sections/project-card";
import { SectionLabel } from "@/components/ui/section-label";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Selected Work & Engineering Case Studies",
  description:
    "Explore case studies in high-throughput data ingestion, browser 3D CAD visualization, and deterministic AI triage pipelines.",
};

export default function WorkPage() {
  return (
    <div className="w-full py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1200px] space-y-12 px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="border-border max-w-3xl space-y-4 border-b pb-8">
          <SectionLabel index="01" label="ENGINEERING PORTFOLIO" />
          <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
            Built with a purpose.
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
            A selection of production systems, custom applications, and
            automated workflows engineered for performance, reliability, and
            architectural clarity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
