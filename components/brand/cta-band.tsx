import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Decor } from "./primitives";

// Figma frame 225:73: a 1220 x 480 card. Swirl offsets are % of the card.
export function CtaBand({
  title,
  description,
  actions,
  id,
  descriptionClassName,
}: {
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  id?: string;
  descriptionClassName?: string;
}) {
  return (
    <section aria-labelledby={id} className="mx-auto w-full max-w-[1280px] px-3 sm:px-[30px]">
      <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[26px] bg-niti-deep px-6 py-20 lg:h-[480px] lg:py-0">
        <Decor
          src="/landing/cta-swirl-left.svg"
          className="mix-blend-screen"
          style={{ left: "-4.92%", top: "-8.33%", width: "34.43%" }}
        />
        <Decor
          src="/landing/cta-swirl-right.svg"
          className="mix-blend-screen"
          style={{ left: "70.49%", top: "-4.17%", width: "37.7%" }}
        />

        <div className="relative flex flex-col items-center gap-7 text-center">
          <h2
            id={id}
            className="flex flex-col items-center gap-1 font-headline text-[clamp(2.125rem,1.1rem+3.6vw,3.5rem)] leading-[1.3] font-medium tracking-[-0.02em] text-white"
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "max-w-[640px] font-inter text-[clamp(1rem,0.9rem+0.4vw,1.1875rem)] text-white/85 lg:max-w-[760px]",
                descriptionClassName,
              )}
            >
              {description}
            </p>
          )}
          {actions && <div className="flex flex-wrap justify-center gap-4">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
