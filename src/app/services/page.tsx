import type { Metadata } from "next";
import { services } from "@/content/services";
import { ServiceRow } from "@/components/sections/service-row";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Services & Technical Capabilities",
  description:
    "Explore SARVOS engineering services: custom web software, AI and workflow automation, interactive 3D virtual tours, and systems integration.",
};

export default function ServicesPage() {
  return (
    <div className="w-full pt-12 pb-3 sm:pt-20 sm:pb-5">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <PageHeader
          size="display"
          label="Technical capabilities"
          title="Disciplined engineering for complex systems."
          description="We deliver targeted engineering capabilities structured as transparent, milestone-driven technical specifications."
        />

        <div className="mt-16 sm:mt-24">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={Math.min(i, 2) * 60}>
              <ServiceRow service={service} headingAs="h2" />
            </Reveal>
          ))}
          <div className="border-border border-t" />
        </div>

        <div className="mt-24 sm:mt-32">
          <CtaBand
            tone="dark"
            title="Need a hybrid architecture or specialized technical audit?"
            body="We frequently architect bespoke solutions spanning multiple capability areas, from air-gapped LLM integrations to high-throughput data buses."
            action="Request custom scope"
          />
        </div>
      </div>
    </div>
  );
}
