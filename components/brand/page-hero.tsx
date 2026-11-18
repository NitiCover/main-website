import type { ReactNode } from "react";

import { Decor, Eyebrow, pct } from "./primitives";

/** Inner-page hero: the home hero's dark card and swirls, with content-driven height. */
export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="px-3 pt-4 sm:px-[30px] lg:pt-[15px]">
      <div className="relative mx-auto max-w-[1219px] overflow-hidden rounded-3xl bg-niti-ink">
        <Decor
          src="/landing/hero-ring.svg"
          className="mix-blend-screen"
          {...pct({ left: -14.03, top: -34.88, width: 42.41 })}
        />
        <Decor
          src="/landing/hero-swirl-right.svg"
          className="mix-blend-screen"
          {...pct({ left: 57.18, top: -7.29, width: 40.07 })}
        />

        <div className="relative flex max-w-[792px] flex-col gap-8 px-6 py-16 sm:px-12 sm:py-20 lg:px-[68px] lg:py-24">
          <div className="flex flex-col items-start gap-5">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="font-headline text-[clamp(2.125rem,1.1rem+3.6vw,3.5rem)] leading-[1.2] text-white">
              {title}
            </h1>
            <p className="max-w-[724px] font-text text-[clamp(1.0625rem,0.95rem+0.4vw,1.25rem)] text-white">
              {description}
            </p>
          </div>
          {actions && <div className="flex flex-wrap items-center gap-4">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
