import type { Metadata } from "next";
import { Bot, Rocket, Users } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
import { Footer } from "@/components/sections/footer";
import { InfoCard } from "@/components/ui/info-card";
import { PillLink } from "@/components/ui/pill-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  hiringSteps,
  LINKEDIN_URL,
  SITE_EMAIL,
  whyJoin,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Careers — NitiCover",
  description:
    "Small team, live customers, real regulatory stakes. Help rebuild how insurance broking works in India.",
};

const whyIcons = [Rocket, Bot, Users];

export default function CareersPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <PageHero
        eyebrow="Careers"
        title="Rebuild a ₹-lakh-crore industry's workflow. From the inside."
        description="Small team, live customers, real regulatory stakes. If you like hard problems with real-world consequences, read on."
        actions={
          <PillLink href={`mailto:${SITE_EMAIL}?subject=Careers`}>
            Get in touch
          </PillLink>
        }
      />

      <section className="bg-[#f4f7fb] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Why join" title="Why NitiCover" />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {whyJoin.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <InfoCard icon={whyIcons[i]} title={item.title}>
                  {item.description}
                </InfoCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Process" title="How we hire" />
          <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:before:absolute lg:before:top-5 lg:before:right-[12%] lg:before:left-[12%] lg:before:h-px lg:before:bg-[#0e2c54]/10">
            {hiringSteps.map((step, i) => (
              <Reveal
                key={step.title}
                as="li"
                delay={i * 0.08}
                className="relative flex flex-col items-center text-center"
              >
                <span
                  className={
                    i === hiringSteps.length - 1
                      ? "z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#3087d0] text-sm font-semibold text-white"
                      : "z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#0e2c54] text-sm font-semibold text-white"
                  }
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[#0e2c54]">
                  {step.title}
                </h3>
                <p className="mt-1.5 max-w-[16rem] text-[0.95rem] text-[#52627a]">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#f4f7fb] px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold text-[#0e2c54] md:text-4xl">
            Don&apos;t see a listing?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[#52627a]">
            We&apos;re hiring across engineering and insurance operations. Send
            a note with what you&apos;d build here, or follow us for hiring
            updates.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PillLink href={`mailto:${SITE_EMAIL}?subject=Careers`}>
              Email us
            </PillLink>
            <PillLink href={LINKEDIN_URL} variant="outline">
              NitiCover on LinkedIn
            </PillLink>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
