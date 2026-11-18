import type { Metadata } from "next";
import { Eye, ShieldCheck, UserCheck, type LucideIcon } from "lucide-react";
import {
  ButtonLink,
  CtaBand,
  FeatureCard,
  FounderCards,
  Highlight,
  PageHero,
  SectionHeader,
} from "@/components/brand";
import { values } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About - NitiCover",
  description:
    "NitiCover is building India's first AI-native insurance broker: software-run workflows, structured data and explainable decisions, with people accountable for the calls that matter.",
};

// The value data has no icon field, so icons are looked up by title with a
// fallback: a newly added value still renders.
const valueIcons: Record<string, LucideIcon> = {
  "Explain everything": Eye,
  "Humans stay accountable": UserCheck,
  "Compliance is product": ShieldCheck,
};
const fallbackIcon: LucideIcon = ShieldCheck;

const sectionClass = "mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-[72px]";

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col gap-[clamp(40px,5.6vw,72px)] bg-white pb-[clamp(40px,5.6vw,72px)]">
      <PageHero
        eyebrow="About NitiCover"
        title={
          <>
            Smart insurance, <Highlight>secure future.</Highlight>
          </>
        }
        description="We are building India's first AI-native insurance broker: a company where the workflow is software, the data is structured, and every decision is explainable - and where people stay accountable for the calls that matter."
      />

      <section aria-labelledby="team-heading" className={sectionClass}>
        <div className="flex flex-col gap-10">
          <SectionHeader
            id="team-heading"
            eyebrow="The team"
            title={
              <>
                Founded by <Highlight>builders of broking workflows</Highlight>
              </>
            }
          />
          <FounderCards />
        </div>
      </section>

      <section aria-labelledby="values-heading" className={sectionClass}>
        <div className="flex flex-col gap-10">
          <SectionHeader
            id="values-heading"
            eyebrow="Our values"
            title={
              <>
                What we <Highlight>hold ourselves to</Highlight>
              </>
            }
          />
          <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
            {values.map((v) => (
              <FeatureCard
                key={v.title}
                icon={valueIcons[v.title] ?? fallbackIcon}
                title={v.title}
              >
                {v.description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        id="about-cta-heading"
        title={
          <>
            <span>Want to build</span>{" "}
            <Highlight className="px-2.5 text-niti-deep">
              this with us?
            </Highlight>
          </>
        }
        description="We're hiring across engineering and insurance operations."
        actions={
          <ButtonLink href="/careers" variant="white">
            See careers
          </ButtonLink>
        }
      />
    </div>
  );
}
