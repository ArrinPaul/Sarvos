import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/content/services";
import { SectionLabel } from "@/components/ui/section-label";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  XCircle,
  Wrench,
  ShieldCheck,
} from "lucide-react";

interface ServiceDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Specification Not Found" };

  return {
    title: `${service.title} Specification`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <article className="w-full py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1200px] space-y-16 px-5 sm:px-8 lg:px-12">
        {/* Navigation & Back Link */}
        <div className="border-border flex items-center justify-between border-b pb-4">
          <Link
            href="/services"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 font-mono text-xs uppercase transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to all capabilities</span>
          </Link>

          <span className="text-muted-foreground font-mono text-xs">
            SERVICE SPECIFICATION [{service.code}]
          </span>
        </div>

        {/* Header Block */}
        <div className="max-w-4xl space-y-6">
          <SectionLabel index={service.code} label="SERVICE SPECIFICATION" />

          <h1 className="text-foreground text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>

          <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed sm:text-xl">
            {service.operationalProfile}
          </p>
        </div>

        {/* Narrative & In-Depth Details */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-foreground text-2xl font-semibold tracking-tight">
                Engineered for specific operational profiles.
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                {service.fullDesc}
              </p>
            </section>

            {/* Structural Failures Eradicated */}
            <section className="border-border bg-card space-y-4 rounded-[8px] border p-6 sm:p-8">
              <div className="text-foreground flex items-center gap-2 font-semibold">
                <XCircle className="text-muted-foreground h-5 w-5" />
                <h3 className="text-lg font-semibold tracking-tight">
                  Structural failures we systematically diagnose and eradicate:
                </h3>
              </div>
              <ul className="text-muted-foreground space-y-3 pt-2 text-sm">
                {service.structuralFailuresEliminated.map((fail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-0.5 font-mono text-xs">
                      0{i + 1}.
                    </span>
                    <span className="leading-relaxed">{fail}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Modular Components */}
            <section className="space-y-4">
              <div className="text-foreground flex items-center gap-2 font-semibold">
                <Wrench className="text-muted-foreground h-5 w-5" />
                <h3 className="text-lg font-semibold tracking-tight">
                  Modular engineering components:
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.components.map((comp) => (
                  <div
                    key={comp}
                    className="border-border bg-muted/40 text-foreground flex items-center gap-2.5 rounded-[6px] border p-3 font-mono text-xs"
                  >
                    <Check className="text-foreground h-4 w-4 shrink-0" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Deliverables Checklist */}
            <section className="space-y-4">
              <div className="text-foreground flex items-center gap-2 font-semibold">
                <ShieldCheck className="text-muted-foreground h-5 w-5" />
                <h3 className="text-lg font-semibold tracking-tight">
                  Standard engagement deliverables:
                </h3>
              </div>
              <ul className="text-muted-foreground space-y-2.5 text-sm">
                {service.deliverables.map((del, i) => (
                  <li
                    key={i}
                    className="border-border/60 flex items-start gap-3 border-b pb-2"
                  >
                    <span className="bg-foreground mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                    <span className="leading-relaxed">{del}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 lg:col-span-4">
            <div className="border-border bg-card space-y-6 rounded-[8px] border p-6">
              <div className="border-border space-y-2 border-b pb-4">
                <span className="text-muted-foreground font-mono text-[11px] tracking-wider uppercase">
                  PRIMARY TECH STACK
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-muted border-border text-foreground rounded-[4px] border px-2 py-0.5 font-mono text-xs uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-border space-y-2 border-b pb-4">
                <span className="text-muted-foreground font-mono text-[11px] tracking-wider uppercase">
                  IDEAL USE CASE
                </span>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {service.idealFor}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-muted-foreground text-xs">
                  Ready to specify this capability for your organization?
                </p>
                <Link
                  href="/contact"
                  className="bg-primary text-background dark:bg-foreground dark:text-background inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-[6px] text-xs font-medium transition-colors hover:bg-neutral-800"
                >
                  <span>Request service proposal</span>
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
