import type { Metadata } from "next";
import {
  CircleCheckBig,
  Handshake,
  Landmark,
  Network,
  type LucideIcon,
} from "lucide-react";
import {
  ButtonLink,
  CtaBand,
  Decor,
  FeatureCard,
  FounderCards,
  Highlight,
  PageHero,
  SectionHeader,
  StepCard,
} from "@/components/brand";
import {
  FOUNDER_EMAIL,
  investorThesis,
  moats,
  partnerTypes,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Investors & Partners - NitiCover",
  description:
    "NitiCover is building the workflow layer for Indian insurance. Read the thesis, meet the founders and request the deck.",
};

const deckHref = `mailto:${FOUNDER_EMAIL}?subject=NitiCover%20investor%20deck`;
const founderHref = `mailto:${FOUNDER_EMAIL}`;

// The partner data has no icon field, so icons are looked up by title with a
// fallback: a newly added partner type still renders.
const partnerIcons: Record<string, LucideIcon> = {
  Insurers: Landmark,
  "Broking houses": Handshake,
  "Distribution & ecosystem": Network,
};
const fallbackIcon: LucideIcon = Handshake;

const sectionClass = "mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-[72px]";

export default function InvestorsPage() {
  return (
    <div className="flex flex-1 flex-col gap-[clamp(40px,5.6vw,72px)] bg-white pb-[clamp(40px,5.6vw,72px)]">
      <PageHero
        eyebrow="Investors & partners"
        title={
          <>
            Building the <Highlight>workflow layer</Highlight> for Indian
            insurance.
          </>
        }
        description="Broking is a large, relationship-driven industry that still runs on manual work. We are turning it into structured data, agent-run workflows and explainable decisions - with humans accountable at every checkpoint."
        actions={
          <>
            <ButtonLink href={deckHref} variant="lime">
              Request the deck
            </ButtonLink>
            <ButtonLink href={founderHref} variant="outline-light">
              Talk to the founders
            </ButtonLink>
          </>
        }
      />

      <section aria-labelledby="thesis-heading" className={sectionClass}>
        <div className="flex flex-col gap-10">
          <SectionHeader
            id="thesis-heading"
            eyebrow="The thesis"
            title={
              <>
                Why now, <Highlight>why this</Highlight>
              </>
            }
          />
          <ol className="grid gap-4 md:grid-cols-3 lg:gap-5">
            {investorThesis.map((item, i) => (
              <li key={item.title} className="flex">
                <div className="flex-1 [&>div]:h-full">
                  <StepCard index={i} title={item.title}>
                    {item.description}
                  </StepCard>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="moat-heading" className={sectionClass}>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeader
            id="moat-heading"
            eyebrow="Defensibility"
            title={
              <>
                AI itself is not the moat.{" "}
                <Highlight>What compounds is.</Highlight>
              </>
            }
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {moats.map((m) => (
              <li
                key={m}
                className="flex items-center gap-3 rounded-[20px] bg-niti-mist p-5 font-headline text-lg font-semibold text-niti-ink"
              >
                <CircleCheckBig
                  aria-hidden="true"
                  className="size-5 shrink-0 text-niti-teal"
                />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="founders-heading" className={sectionClass}>
        <div className="flex flex-col gap-10">
          <SectionHeader
            id="founders-heading"
            eyebrow="Founding team"
            title={
              <>
                Who&apos;s <Highlight>building it</Highlight>
              </>
            }
          />
          <FounderCards />
        </div>
      </section>

      {/* Current round */}
      <section
        aria-labelledby="round-heading"
        className="relative overflow-hidden bg-niti-ink py-16 lg:py-[72px]"
      >
        <Decor
          src="/landing/cta-swirl-left.svg"
          className="mix-blend-screen"
          style={{ left: "-6%", top: "-30%", width: "34%" }}
        />
        <Decor
          src="/landing/cta-swirl-right.svg"
          className="mix-blend-screen"
          style={{ left: "72%", top: "-20%", width: "38%" }}
        />
        <div
          className={`${sectionClass} relative flex flex-col items-center gap-6 text-center`}
        >
          <SectionHeader
            id="round-heading"
            tone="dark"
            align="center"
            eyebrow="Current round"
            title={
              <>
                Seed · <Highlight>₹5 Cr</Highlight>
              </>
            }
            description="Use of funds, milestones and traction are covered in the deck."
          />
          <ButtonLink href={deckHref} variant="white">
            Request the deck
          </ButtonLink>
        </div>
      </section>

      <section aria-labelledby="partners-heading" className={sectionClass}>
        <div className="flex flex-col gap-10">
          <SectionHeader
            id="partners-heading"
            eyebrow="Partnerships"
            title={
              <>
                Partner <Highlight>with us</Highlight>
              </>
            }
          />
          <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
            {partnerTypes.map((p) => (
              <FeatureCard
                key={p.title}
                icon={partnerIcons[p.title] ?? fallbackIcon}
                title={p.title}
              >
                {p.description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        id="investors-cta-heading"
        title={
          <>
            <span>Let&apos;s</span>{" "}
            <Highlight className="px-2.5 text-niti-deep">talk.</Highlight>
          </>
        }
        description={
          <>
            Reach the founders directly for the deck, intros or partnership
            conversations.
            <span className="mt-2 block text-sm text-white/70">
              {FOUNDER_EMAIL}
            </span>
          </>
        }
        actions={
          <ButtonLink href={founderHref} variant="white">
            Email the founders
          </ButtonLink>
        }
      />
    </div>
  );
}
