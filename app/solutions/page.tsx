import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Building2,
  Globe,
  Landmark,
  LayoutList,
  Plug,
  RefreshCw,
  ShieldCheck,
  Target,
  Timer,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  Band,
  ButtonLink,
  CtaBand,
  FeatureCard,
  Highlight,
  PageHero,
  SectionHeader,
  StepCard,
} from "@/components/brand";
import { brokerBenefits, engagementSteps, insurerBenefits } from "@/lib/site-content";
import { CONTACT_HREF, DEMO_HREF, SITE_EMAIL } from "@/lib/site-links";

export const metadata: Metadata = {
  title: "Solutions - NitiCover",
  description:
    "Brokers license NitiCover to run their book. Insurers connect to receive structured submissions and quote inside the workflow.",
};

const jumpLinks = [
  { href: "#brokers", label: "For brokers", icon: Building2 },
  { href: "#insurers", label: "For insurers", icon: Landmark },
  { href: "#individuals", label: "For individuals (soon)", icon: Users },
];

// The benefit data has no icon field, so icons are looked up by title with a
// fallback: a newly added benefit still renders.
const benefitIcons: Record<string, LucideIcon> = {
  "Faster placements": Timer,
  "Renewals that don't leak": RefreshCw,
  "Defensible advice": ShieldCheck,
  "A structured book": LayoutList,
  "Standardised intake": LayoutList,
  "Better-matched risks": Target,
  "Quote inside the workflow": Plug,
  "Distribution reach": Globe,
};
const fallbackIcon: LucideIcon = ShieldCheck;

const sectionClass = "mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-[72px]";

function Audience({
  id,
  eyebrow,
  title,
  description,
  benefits,
  cta,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  benefits: { title: string; description: string }[];
  cta: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`${sectionClass} scroll-mt-24`}>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex flex-col items-start gap-8 lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            id={`${id}-heading`}
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          {cta}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {benefits.map((b) => (
            <FeatureCard key={b.title} icon={benefitIcons[b.title] ?? fallbackIcon} title={b.title}>
              {b.description}
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SolutionsPage() {
  return (
    <div className="flex flex-1 flex-col gap-[clamp(40px,5.6vw,72px)] bg-white pb-[clamp(40px,5.6vw,72px)]">
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            One platform. <Highlight>Two sides</Highlight> of the placement.
          </>
        }
        description="Brokers license NitiCover to run their book. Insurers connect to receive structured submissions and quote inside the workflow."
        actions={jumpLinks.map(({ href, label, icon: Icon }, i) => (
          <ButtonLink key={href} href={href} variant={i === 0 ? "lime" : "outline-light"}>
            <Icon aria-hidden="true" className="mr-2 size-5" />
            {label}
          </ButtonLink>
        ))}
      />

      <Audience
        id="brokers"
        eyebrow="For brokers"
        title={
          <>
            Your brand, your people, <Highlight>our workflow engine.</Highlight>
          </>
        }
        description="License the platform for your team. Every placement runs through structured intake, automated submissions and clause-level comparison, and your authorised staff make the calls."
        benefits={brokerBenefits}
        cta={<ButtonLink href={DEMO_HREF}>Book a broker demo</ButtonLink>}
      />

      <Audience
        id="insurers"
        eyebrow="For insurers"
        title={
          <>
            Complete submissions. Cleaner risk. <Highlight>Faster quotes.</Highlight>
          </>
        }
        description="Partner insurers receive standardised, structured dossiers from every NitiCover broker, and can plug quoting directly into the workflow."
        benefits={insurerBenefits}
        cta={
          <ButtonLink href={`mailto:${SITE_EMAIL}?subject=NitiCover%20insurer%20partnership`}>
            Talk to us about a partnership
          </ButtonLink>
        }
      />

      {/* Individuals */}
      <Band tone="ink" id="individuals" labelledBy="individuals-heading" className="scroll-mt-24">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <SectionHeader
            id="individuals-heading"
            tone="dark"
            eyebrow="Individuals & families"
            title={
              <>
                Buying insurance for yourself? <Highlight>We&apos;re opening soon.</Highlight>
              </>
            }
          />
          <ButtonLink href="/waitlist" variant="lime">
            Join the waitlist
          </ButtonLink>
        </div>
      </Band>

      {/* Engagement model */}
      <section aria-labelledby="engagement-heading" className={sectionClass}>
        <div className="flex flex-col gap-10">
          <SectionHeader
            id="engagement-heading"
            eyebrow="How we work with you"
            title={
              <>
                From pilot to <Highlight>your whole book</Highlight>
              </>
            }
          />
          <ol className="grid gap-4 md:grid-cols-3 lg:gap-5">
            {engagementSteps.map((step, i) => (
              <li key={step.title}>
                <StepCard index={i} title={step.title}>
                  {step.description}
                </StepCard>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        id="solutions-cta-heading"
        title={
          <>
            <span>See a placement run</span>{" "}
            <Highlight className="px-2.5 text-niti-deep">on NitiCover.</Highlight>
          </>
        }
        description="A 30-minute walkthrough with a founder, using a risk from your own book."
        actions={
          <>
            <ButtonLink href={DEMO_HREF} variant="white">
              Book a demo
            </ButtonLink>
            <ButtonLink href={CONTACT_HREF} variant="outline-light">
              Contact us
            </ButtonLink>
          </>
        }
      />
    </div>
  );
}
