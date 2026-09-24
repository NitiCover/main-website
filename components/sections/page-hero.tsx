import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f0f4f9_0%,#ffffff_100%)]">
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center md:pt-28 md:pb-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3087d0]">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#0e2c54] md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#52627a] md:text-lg">
            {description}
          </p>
        </Reveal>
        {actions && (
          <Reveal
            delay={0.1}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            {actions}
          </Reveal>
        )}
      </div>
    </section>
  );
}
