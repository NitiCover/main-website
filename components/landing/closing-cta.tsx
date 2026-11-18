import Link from "next/link";

import { DEMO_HREF } from "@/lib/landing-content";

import { Decor, Highlight } from "./primitives";

// Figma frame 225:73: a 1220 x 480 card. Swirl offsets are % of the card.
export function ClosingCta() {
  return (
    <section aria-labelledby="cta-heading" className="mx-auto w-full max-w-[1280px] px-3 sm:px-[30px]">
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
            id="cta-heading"
            className="flex flex-col items-center gap-1 font-headline text-[clamp(2.125rem,1.1rem+3.6vw,3.5rem)] leading-[1.3] font-medium tracking-[-0.02em] text-white"
          >
            <span>Get your business covered</span>{" "}
            <span className="flex flex-wrap items-center justify-center gap-3">
              <Highlight className="px-2.5 text-niti-deep">in hours,</Highlight> not weeks.
            </span>
          </h2>
          <p className="max-w-[640px] font-inter lg:max-w-none lg:whitespace-nowrap text-[clamp(1rem,0.9rem+0.4vw,1.1875rem)] text-white/85">
            One form. Every insurer compared. A licensed expert on every decision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={DEMO_HREF}
              className="rounded-full bg-white px-[22px] py-3 font-headline text-[19px] font-medium text-[#0b2545] transition-transform hover:-translate-y-0.5"
            >
              Book a demo
            </Link>
            <Link
              href={DEMO_HREF}
              className="rounded-full border border-white px-[22px] py-3 font-headline text-[19px] font-medium text-white transition-colors hover:bg-white hover:text-niti-deep"
            >
              Talk to a broker
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
