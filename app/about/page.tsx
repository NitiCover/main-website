import type { Metadata } from "next";
import { Eye, ShieldCheck, UserCheck } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
import { FounderCards } from "@/components/sections/founders";
import { Footer } from "@/components/sections/footer";
import { InfoCard } from "@/components/ui/info-card";
import { PillLink } from "@/components/ui/pill-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { values } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About — NitiCover",
  description:
    "NitiCover is building India's first AI-native insurance broker — software-run workflows, structured data and explainable decisions, with people accountable for the calls that matter.",
};

const valueIcons = [Eye, UserCheck, ShieldCheck];

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <PageHero
        eyebrow="About NitiCover"
        title="Smart insurance, secure future."
        description="We are building India's first AI-native insurance broker: a company where the workflow is software, the data is structured, and every decision is explainable — and where people stay accountable for the calls that matter."
      />

      <section className="bg-[#f4f7fb] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="The team" title="Founded by builders of broking workflows" />
          <div className="mt-14">
            <FounderCards />
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Our values"
            title="What we hold ourselves to"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <InfoCard icon={valueIcons[i]} title={v.title}>
                  {v.description}
                </InfoCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/70 px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold text-[#0e2c54] md:text-4xl">
            Want to build this with us?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[#52627a]">
            We&apos;re hiring across engineering and insurance operations.
          </p>
          <div className="mt-8 flex justify-center">
            <PillLink href="/careers">See careers</PillLink>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
