import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
import { Capabilities } from "@/components/sections/capabilities";
import { Explainability } from "@/components/sections/explainability";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { InfoCard } from "@/components/ui/info-card";
import { PillLink } from "@/components/ui/pill-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  autonomyLayers,
  complianceItems,
  placementSteps,
  DEMO_HREF,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Platform — NitiCover",
  description:
    "One workflow from first client conversation to bound policy — structured data, agent-run follow-ups and a decision trail at every step.",
};

const reviewTone = [
  "bg-[#f4f7fb] text-[#52627a]",
  "bg-[#eaf2fb] text-[#3087d0]",
  "bg-[#0e2c54] text-white",
];

export default function PlatformPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <PageHero
        eyebrow="Platform"
        title="AI-assisted. Explainable. Human where it matters."
        description="One workflow from first client conversation to bound policy — with structured data, agent-run follow-ups and a decision trail at every step."
        actions={
          <>
            <PillLink href={DEMO_HREF}>Book a demo</PillLink>
            <PillLink href="#how-it-works" variant="outline">
              See how it works
            </PillLink>
          </>
        }
      />

      {/* How a placement runs */}
      <section id="how-it-works" className="scroll-mt-24 bg-[#f4f7fb] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="How it works"
            title="How a placement runs"
          />
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {placementSteps.map((step, i) => (
              <Reveal key={step.title} as="li" delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0e2c54] text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-[#0e2c54]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[#52627a]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Capabilities variant="detail" />

      {/* Operating model */}
      <section className="bg-[#f4f7fb] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Operating model"
            title="Autonomous where possible. Human where it matters."
            description="The platform decides how far to go on its own by task type and risk. Routine work runs unattended; consequential decisions always wait for a person."
          />
          <div className="mt-14 space-y-4">
            {autonomyLayers.map((layer, i) => (
              <Reveal key={layer.title} delay={i * 0.08}>
                <div className="flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-7">
                  <div>
                    <h3 className="text-lg font-semibold text-[#0e2c54]">
                      {layer.title}
                    </h3>
                    <p className="mt-1.5 text-[0.95rem] text-[#52627a]">
                      {layer.examples}
                    </p>
                  </div>
                  <span
                    className={`w-fit shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${reviewTone[i]}`}
                  >
                    {layer.review}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Explainability />

      {/* Compliance */}
      <section className="bg-[#f4f7fb] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Compliance"
            title="Compliance and audit, built in"
            description="Works with the tools you already use — email, document storage, insurer portals and your existing broking system."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {complianceItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <InfoCard title={item.title}>{item.description}</InfoCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  );
}
