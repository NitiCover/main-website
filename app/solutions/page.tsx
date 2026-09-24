import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Building2, Landmark, Users } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { InfoCard } from "@/components/ui/info-card";
import { PillLink } from "@/components/ui/pill-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  brokerBenefits,
  engagementSteps,
  SITE_EMAIL,
  insurerBenefits,
  DEMO_HREF,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Solutions — NitiCover",
  description:
    "Brokers license NitiCover to run their book. Insurers connect to receive structured submissions and quote inside the workflow.",
};

const jumpLinks = [
  { href: "#brokers", label: "For brokers", icon: Building2 },
  { href: "#insurers", label: "For insurers", icon: Landmark },
  { href: "#individuals", label: "For individuals (soon)", icon: Users },
];

function Audience({
  id,
  eyebrow,
  title,
  description,
  benefits,
  cta,
  tone,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  benefits: { title: string; description: string }[];
  cta: ReactNode;
  tone: "white" | "muted";
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-24 ${tone === "muted" ? "bg-[#f4f7fb]" : "bg-white"}`}
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          <Reveal delay={0.1} className="mt-8">
            {cta}
          </Reveal>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 2) * 0.06}>
              <InfoCard title={b.title}>{b.description}</InfoCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SolutionsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <PageHero
        eyebrow="Solutions"
        title="One platform. Two sides of the placement."
        description="Brokers license NitiCover to run their book. Insurers connect to receive structured submissions and quote inside the workflow."
        actions={jumpLinks.map(({ href, label, icon: Icon }) => (
          <a
            key={href}
            href={href}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#0e2c54]/15 bg-white/80 px-5 text-sm font-medium text-[#0e2c54] shadow-xs transition-[background-color,transform] duration-200 hover:scale-[1.02] hover:bg-white"
          >
            <Icon className="size-4 text-[#3087d0]" />
            {label}
          </a>
        ))}
      />

      <Audience
        id="brokers"
        eyebrow="For brokers"
        title="Your brand, your people, our workflow engine."
        description="License the platform for your team. Every placement runs through structured intake, automated submissions and clause-level comparison — and your authorised staff make the calls."
        benefits={brokerBenefits}
        cta={<PillLink href={DEMO_HREF}>Book a broker demo</PillLink>}
        tone="muted"
      />

      <Audience
        id="insurers"
        eyebrow="For insurers"
        title="Complete submissions. Cleaner risk. Faster quotes."
        description="Partner insurers receive standardised, structured dossiers from every NitiCover broker, and can plug quoting directly into the workflow."
        benefits={insurerBenefits}
        cta={
          <PillLink
            href={`mailto:${SITE_EMAIL}?subject=NitiCover%20insurer%20partnership`}
          >
            Talk to us about a partnership
          </PillLink>
        }
        tone="white"
      />

      {/* Individuals */}
      <section id="individuals" className="scroll-mt-24 bg-[#0e2c54] py-16">
        <Reveal className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8cc0ec]">
              Individuals &amp; families
            </p>
            <p className="mt-3 max-w-xl text-xl font-semibold text-white md:text-2xl">
              Buying insurance for yourself? We&apos;re opening soon.
            </p>
          </div>
          <PillLink
            href="/waitlist"
            className="bg-white text-[#0e2c54] hover:bg-white/90"
          >
            Join the waitlist
          </PillLink>
        </Reveal>
      </section>

      {/* Engagement model */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="How we work with you"
            title="From pilot to your whole book"
          />
          <ol className="mt-14 grid gap-5 md:grid-cols-3">
            {engagementSteps.map((step, i) => (
              <Reveal key={step.title} as="li" delay={i * 0.08}>
                <InfoCard
                  title={
                    <>
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#3087d0]">
                        Step {i + 1}
                      </span>
                      {step.title}
                    </>
                  }
                >
                  {step.description}
                </InfoCard>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  );
}
