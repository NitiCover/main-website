import Link from "next/link";
import { capabilities } from "@/lib/site-content";
import { InfoCard } from "@/components/ui/info-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Capabilities({
  variant = "summary",
}: {
  variant?: "summary" | "detail";
}) {
  const isSummary = variant === "summary";

  return (
    <section id="platform" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={isSummary ? "The platform" : "Capabilities"}
          title={
            isSummary
              ? "What the AI actually does"
              : "Built for the work brokers actually do"
          }
          description="Six workflow capabilities, each with a defined human checkpoint before anything binds."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06}>
              <InfoCard icon={item.icon} index={i} title={item.title}>
                {isSummary ? item.summary : item.detail}
              </InfoCard>
            </Reveal>
          ))}
        </div>

        {isSummary && (
          <Reveal className="mt-10 text-center">
            <Link
              href="/platform"
              className="text-sm font-semibold text-[#3087d0] transition-colors hover:text-[#0e2c54]"
            >
              Explore the full platform →
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
