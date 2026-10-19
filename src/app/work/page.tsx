import type { Metadata } from "next";
import { ProjectCard } from "@/components/sections/project-card";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Selected Work & Engineering Case Studies",
  description:
    "Explore case studies in high-throughput data ingestion, browser 3D CAD visualization, and deterministic AI triage pipelines.",
};

export default function WorkPage() {
  return (
    <div className="w-full pt-12 pb-3 sm:pt-20 sm:pb-5">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <PageHeader
          size="display"
          label="Engineering portfolio"
          title="Built with a purpose."
          description="A selection of production systems, custom applications, and automated workflows engineered for performance, reliability, and architectural clarity."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:mt-24 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 80} className="flex">
              <ProjectCard
                project={project}
                className="w-full"
                headingAs="h2"
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-24 sm:mt-32">
          <CtaBand
            title="Have a similar system to build?"
            body="Share the constraints. We reply with direct engineering feedback, not a sales deck."
            action="Start a project"
          />
        </div>
      </div>
    </div>
  );
}
