import type { Metadata } from "next";
import { Bot, Rocket, Users, type LucideIcon } from "lucide-react";
import {
  ButtonLink,
  CtaBand,
  FeatureCard,
  Highlight,
  PageHero,
  SectionHeader,
  StepCard,
} from "@/components/brand";
import {
  hiringSteps,
  LINKEDIN_URL,
  SITE_EMAIL,
  whyJoin,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Careers - NitiCover",
  description:
    "Small team, live customers, real regulatory stakes. Help rebuild how insurance broking works in India.",
};

const careersHref = `mailto:${SITE_EMAIL}?subject=Careers`;

// The why-join data has no icon field, so icons are looked up by title with a
// fallback: a newly added reason still renders.
const whyIcons: Record<string, LucideIcon> = {
  "Ship into production": Rocket,
  "Agents with accountability": Bot,
  "Founder proximity": Users,
};
const fallbackIcon: LucideIcon = Rocket;

const sectionClass = "mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-[72px]";

export default function CareersPage() {
  return (
    <div className="flex flex-1 flex-col gap-[clamp(40px,5.6vw,72px)] bg-white pb-[clamp(40px,5.6vw,72px)]">
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Rebuild a ₹-lakh-crore industry&apos;s workflow.{" "}
            <Highlight>From the inside.</Highlight>
          </>
        }
        description="Small team, live customers, real regulatory stakes. If you like hard problems with real-world consequences, read on."
        actions={
          <ButtonLink href={careersHref} variant="lime">
            Get in touch
          </ButtonLink>
        }
      />

      <section aria-labelledby="why-heading" className={sectionClass}>
        <div className="flex flex-col gap-10">
          <SectionHeader
            id="why-heading"
            eyebrow="Why join"
            title={
              <>
                Why <Highlight>NitiCover</Highlight>
              </>
            }
          />
          <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
            {whyJoin.map((item) => (
              <FeatureCard
                key={item.title}
                icon={whyIcons[item.title] ?? fallbackIcon}
                title={item.title}
              >
                {item.description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="hiring-heading" className={sectionClass}>
        <div className="flex flex-col gap-10">
          <SectionHeader
            id="hiring-heading"
            eyebrow="Process"
            title={
              <>
                How <Highlight>we hire</Highlight>
              </>
            }
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {hiringSteps.map((step, i) => (
              <li key={step.title} className="flex">
                <div className="flex-1 [&>div]:h-full">
                  <StepCard index={i} title={step.title}>
                    {step.description}
                  </StepCard>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        id="careers-cta-heading"
        title={
          <>
            <span>Don&apos;t see</span>{" "}
            <Highlight className="px-2.5 text-niti-deep">a listing?</Highlight>
          </>
        }
        description="We're hiring across engineering and insurance operations. Send a note with what you'd build here, or follow us for hiring updates."
        actions={
          <>
            <ButtonLink href={careersHref} variant="white">
              Email us
            </ButtonLink>
            <ButtonLink href={LINKEDIN_URL} variant="outline-light">
              NitiCover on LinkedIn
            </ButtonLink>
          </>
        }
      />
    </div>
  );
}
