import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/content/services";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { Check } from "lucide-react";

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

  const nextService =
    services[(services.indexOf(service) + 1) % services.length];

  return (
    <article className="w-full pt-12 pb-3 sm:pt-20 sm:pb-5">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <PageHeader
          index={service.code}
          label="Service specification"
          title={service.title}
          description={service.operationalProfile}
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />

        <div className="mt-16 grid grid-cols-1 gap-14 sm:mt-24 lg:grid-cols-12">
          <div className="space-y-20 lg:col-span-8">
            <Reveal as="section" className="space-y-5">
              <h2 className="text-foreground text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Engineered for specific operational profiles.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {service.fullDesc}
              </p>
            </Reveal>

            <Reveal
              as="section"
              className="bg-muted space-y-6 rounded-[24px] p-7 sm:p-10"
            >
              <h3 className="text-foreground text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
                Structural failures we systematically diagnose and eradicate
              </h3>
              <ol className="space-y-5">
                {service.structuralFailuresEliminated.map((fail, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-foreground text-2xl leading-none font-semibold tracking-[-0.04em] tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-muted-foreground leading-relaxed">
                      {fail}
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal as="section" className="space-y-6">
              <h3 className="text-foreground text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
                Modular engineering components
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.components.map((comp) => (
                  <div
                    key={comp}
                    className="bg-muted text-foreground flex items-center gap-3 rounded-2xl p-4 text-sm"
                  >
                    <Check className="h-4 w-4 shrink-0" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal as="section" className="space-y-6">
              <h3 className="text-foreground text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
                Standard engagement deliverables
              </h3>
              <ul>
                {service.deliverables.map((del, i) => (
                  <li
                    key={i}
                    className="border-border text-muted-foreground flex items-start gap-3 border-t py-4 last:border-b"
                  >
                    <span className="bg-foreground mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                    <span className="leading-relaxed">{del}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="lg:col-span-4">
            <Reveal delay={90} className="space-y-8 lg:sticky lg:top-28">
              <div className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  Primary tech stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-muted text-foreground rounded-full px-3 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-muted-foreground text-sm">Ideal use case</p>
                <p className="text-foreground leading-relaxed">
                  {service.idealFor}
                </p>
              </div>

              <Link
                href="/contact"
                className="press bg-foreground text-background inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-medium hover:opacity-90"
              >
                Request service proposal
              </Link>
            </Reveal>
          </aside>
        </div>

        <div className="mt-24 space-y-5 sm:mt-32">
          <CtaBand
            tone="dark"
            title="Ready to specify this capability?"
            body="Tell us about your system and constraints. A senior engineer replies within 1–2 business days."
            action="Request service proposal"
          />
          <Link
            href={`/services/${nextService.slug}`}
            className="group text-muted-foreground hover:text-foreground flex items-center justify-between px-3 py-4 text-sm transition-colors"
          >
            <span>Next specification</span>
            <span className="text-foreground text-lg font-medium tracking-tight">
              <span className="link-draw">{nextService.title}</span>
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
