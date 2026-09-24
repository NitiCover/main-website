import { PillLink } from "@/components/ui/pill-link";
import { Reveal } from "@/components/ui/reveal";

export function InvestorStrip() {
  return (
    <section className="bg-[#f4f7fb] py-16">
      <Reveal className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3087d0]">
            Investors &amp; partners
          </p>
          <p className="mt-3 max-w-2xl text-xl font-semibold text-[#0e2c54] md:text-2xl">
            We&apos;re building the workflow layer for Indian insurance.
          </p>
        </div>
        <PillLink href="/investors" variant="outline" arrow>
          Read the thesis
        </PillLink>
      </Reveal>
    </section>
  );
}
