import { decisionChain } from "@/lib/site-content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Explainability() {
  return (
    <section id="explainability" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <SectionHeading
          align="left"
          eyebrow="Explainable by design"
          title="Every recommendation carries its reasoning."
          description="From client requirement to final placement, every step is recorded — who, what, when, why, source data, modification and approval — so any question from a client, an insurer or a regulator has an answer."
        />

        <ol className="relative space-y-3 before:absolute before:top-5 before:bottom-5 before:left-[1.1rem] before:w-px before:bg-[#0e2c54]/10">
          {decisionChain.map((step, i) => {
            const isHuman = step === "Human validation";
            return (
              <Reveal
                key={step}
                as="li"
                delay={i * 0.05}
                y={12}
                className="relative flex items-center gap-4"
              >
                <span
                  className={
                    isHuman
                      ? "z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3087d0] text-sm font-semibold text-white"
                      : "z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0e2c54]/15 bg-white text-sm font-semibold text-[#0e2c54]"
                  }
                >
                  {i + 1}
                </span>
                <span
                  className={
                    isHuman
                      ? "flex-1 rounded-xl border border-[#3087d0]/30 bg-[#eaf2fb] px-4 py-3 text-sm font-semibold text-[#0e2c54] sm:text-base"
                      : "flex-1 rounded-xl border border-black/5 bg-[#f4f7fb] px-4 py-3 text-sm font-medium text-[#0e2c54] sm:text-base"
                  }
                >
                  {step}
                </span>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
