import type { Metadata } from "next";
import { CircleCheckBig } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
import { FounderCards } from "@/components/sections/founders";
import { Footer } from "@/components/sections/footer";
import { InfoCard } from "@/components/ui/info-card";
import { PillLink } from "@/components/ui/pill-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  FOUNDER_EMAIL,
  investorThesis,
  moats,
  partnerTypes,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Investors & Partners — NitiCover",
  description:
    "NitiCover is building the workflow layer for Indian insurance. Read the thesis, meet the founders and request the deck.",
};

const deckHref = `mailto:${FOUNDER_EMAIL}?subject=NitiCover%20investor%20deck`;

export default function InvestorsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <PageHero
        eyebrow="Investors & partners"
        title="Building the workflow layer for Indian insurance."
        description="Broking is a large, relationship-driven industry that still runs on manual work. We are turning it into structured data, agent-run workflows and explainable decisions — with humans accountable at every checkpoint."
        actions={
          <>
            <PillLink href={deckHref}>Request the deck</PillLink>
            <PillLink href={`mailto:${FOUNDER_EMAIL}`} variant="outline">
              Talk to the founders
            </PillLink>
          </>
        }
      />

      <section className="bg-[#f4f7fb] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="The thesis" title="Why now, why this" />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {investorThesis.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <InfoCard index={i} title={item.title}>
                  {item.description}
                </InfoCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="Defensibility"
            title="AI itself is not the moat. What compounds is."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {moats.map((m, i) => (
              <Reveal
                key={m}
                as="li"
                delay={(i % 2) * 0.05 + Math.floor(i / 2) * 0.04}
                y={12}
                className="flex items-center gap-3 rounded-xl border border-black/5 bg-[#f4f7fb] px-4 py-3.5 text-[0.95rem] font-medium text-[#0e2c54]"
              >
                <CircleCheckBig className="h-4.5 w-4.5 shrink-0 text-[#3087d0]" />
                {m}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#f4f7fb] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Founding team" title="Who's building it" />
          <div className="mt-14">
            <FounderCards />
          </div>
        </div>
      </section>

      <section className="bg-[#0e2c54] py-20">
        <Reveal className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8cc0ec]">
            Current round
          </p>
          <p className="mt-4 text-5xl font-semibold text-white md:text-6xl">
            Seed · ₹5 Cr
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            Use of funds, milestones and traction are covered in the deck.
          </p>
          <div className="mt-8 flex justify-center">
            <PillLink
              href={deckHref}
              className="bg-white text-[#0e2c54] hover:bg-white/90"
            >
              Request the deck
            </PillLink>
          </div>
        </Reveal>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Partnerships" title="Partner with us" />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {partnerTypes.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <InfoCard title={p.title}>{p.description}</InfoCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/70 px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold text-[#0e2c54] md:text-4xl">
            Let&apos;s talk.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[#52627a]">
            Reach the founders directly for the deck, intros or partnership
            conversations.
          </p>
          <div className="mt-8 flex justify-center">
            <PillLink href={`mailto:${FOUNDER_EMAIL}`}>Email the founders</PillLink>
          </div>
          <p className="mt-4 text-xs text-[#52627a]/70">{FOUNDER_EMAIL}</p>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
