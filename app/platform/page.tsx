import type { Metadata } from "next";
import { History, Scale, UserCheck } from "lucide-react";
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
  autonomyLayers,
  capabilities,
  complianceItems,
  decisionChain,
  placementSteps,
} from "@/lib/site-content";
import { CONTACT_HREF, DEMO_HREF } from "@/lib/site-links";

export const metadata: Metadata = {
  title: "Platform - NitiCover",
  description:
    "One workflow from first client conversation to bound policy: structured data, agent-run follow-ups and a decision trail at every step.",
};

// Light, mid and strong review tones for the autonomy layers.
const reviewTone = [
  "bg-niti-mist text-niti-slate",
  "bg-niti-lavender text-niti-violet",
  "bg-niti-teal text-white",
];

const complianceIcons = [History, UserCheck, Scale];

const sectionClass = "mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-[72px]";

export default function PlatformPage() {
  return (
    <div className="flex flex-1 flex-col gap-[clamp(40px,5.6vw,72px)] bg-white pb-[clamp(40px,5.6vw,72px)]">
      <PageHero
        eyebrow="Platform"
        title={
          <>
            <Highlight>AI-assisted.</Highlight> Explainable. Human where it matters.
          </>
        }
        description="One workflow from first client conversation to bound policy, with structured data, agent-run follow-ups and a decision trail at every step."
        actions={
          <>
            <ButtonLink href={DEMO_HREF} variant="lime">
              Book a demo
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="outline-light">
              See how it works
            </ButtonLink>
          </>
        }
      />

      {/* How a placement runs */}
      <section id="how-it-works" className={`${sectionClass} scroll-mt-24`}>
        <div className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="How it works"
            title={
              <>
                How a placement <Highlight>runs</Highlight>
              </>
            }
          />
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {placementSteps.map((step, i) => (
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

      {/* Capabilities */}
      <section aria-labelledby="capabilities-heading" className={sectionClass}>
        <div className="flex flex-col gap-10">
          <SectionHeader
            id="capabilities-heading"
            eyebrow="Capabilities"
            title={
              <>
                Built for the <Highlight>work brokers</Highlight> actually do
              </>
            }
            description="Six workflow capabilities, each with a defined human checkpoint before anything binds."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {capabilities.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title}>
                {item.detail}
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      {/* Operating model */}
      <section aria-labelledby="operating-model-heading" className="bg-niti-ink py-16 lg:py-[72px]">
        <div className={`${sectionClass} flex flex-col gap-10`}>
          <SectionHeader
            id="operating-model-heading"
            tone="dark"
            eyebrow="Operating model"
            title={
              <>
                Autonomous where possible. <Highlight>Human where it matters.</Highlight>
              </>
            }
            description="The platform decides how far to go on its own by task type and risk. Routine work runs unattended; consequential decisions always wait for a person."
          />
          <ul className="flex flex-col gap-4">
            {autonomyLayers.map((layer, i) => (
              <li
                key={layer.title}
                className="flex flex-col gap-4 rounded-[20px] bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="font-headline text-xl font-semibold text-niti-ink">
                    {layer.title}
                  </h3>
                  <p className="font-inter text-[15px] leading-normal text-niti-slate">
                    {layer.examples}
                  </p>
                </div>
                <span
                  className={`w-fit shrink-0 rounded-full px-4 py-1.5 font-headline text-xs font-semibold uppercase tracking-wider ${reviewTone[i]}`}
                >
                  {layer.review}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Explainability */}
      <section
        id="explainability"
        aria-labelledby="explainability-heading"
        className={`${sectionClass} scroll-mt-24`}
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <SectionHeader
            id="explainability-heading"
            eyebrow="Explainable by design"
            title={
              <>
                Every recommendation carries its <Highlight>reasoning.</Highlight>
              </>
            }
            description="From client requirement to final placement, every step is recorded (who, what, when, why, source data, modification and approval) so any question from a client, an insurer or a regulator has an answer."
          />
          <ol className="flex flex-col gap-3">
            {decisionChain.map((step, i) => {
              const isHuman = step === "Human validation";
              return (
                <li key={step} className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className={`grid size-[42px] shrink-0 place-items-center rounded-full font-display text-xl font-semibold ${
                      isHuman ? "bg-niti-violet text-white" : "bg-niti-teal text-[#fafafa]"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`flex-1 rounded-[20px] px-5 py-3 font-headline text-base font-semibold ${
                      isHuman ? "bg-niti-lavender text-niti-violet" : "bg-niti-mist text-niti-ink"
                    }`}
                  >
                    {step}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Compliance */}
      <section aria-labelledby="compliance-heading" className="bg-niti-periwinkle py-16 lg:py-[72px]">
        <div className={`${sectionClass} flex flex-col gap-10`}>
          <SectionHeader
            id="compliance-heading"
            tone="dark"
            eyebrow="Compliance"
            title={
              <>
                Compliance and audit, <Highlight>built in</Highlight>
              </>
            }
            description="Works with the tools you already use: email, document storage, insurer portals and your existing broking system."
          />
          <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
            {complianceItems.map((item, i) => (
              <FeatureCard key={item.title} icon={complianceIcons[i]} title={item.title}>
                {item.description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        id="platform-cta-heading"
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
