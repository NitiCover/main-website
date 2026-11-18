import Link from "next/link";

import { DEMO_HREF } from "@/lib/site-links";

import { ButtonLink } from "@/components/brand/button-link";
import { Decor, Highlight, pct } from "@/components/brand/primitives";

// Figma frame 199:89 is 1219 x 691; decor offsets below are % of that box.
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="px-3 pt-4 sm:px-[30px] lg:pt-[15px]">
      <div className="relative mx-auto flex max-w-[1219px] items-center overflow-hidden rounded-3xl bg-niti-ink lg:min-h-[691px]">
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
        <div
          aria-hidden="true"
          className="pointer-events-none absolute mix-blend-screen"
          style={{ left: "-5.82%", top: "65.41%", width: "39.54%", aspectRatio: "482 / 239" }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-1/2 -scale-y-100 -rotate-90"
            style={{ width: "49.59%", height: "201.67%" }}
          >
            <Decor
              src="/landing/hero-swirl-left.svg"
              className="h-[111.52%] w-[103.76%]"
              {...pct({ left: -1.7, top: -5.8 })}
            />
          </div>
        </div>

        <div className="relative flex w-full max-w-[792px] flex-col gap-10 px-6 py-16 sm:px-12 sm:py-20 lg:gap-12 lg:py-0 lg:pr-0 lg:pl-[68px]">
          <div className="flex flex-col gap-6">
            <h1
              id="hero-heading"
              className="flex flex-col gap-[0.23em] font-headline text-[clamp(2.125rem,1.1rem+3.6vw,3.5rem)] leading-[1.2] text-white"
            >
              <span className="px-1">India’s first AI Platform</span>{" "}
              <span className="flex flex-wrap items-end gap-x-3 gap-y-[0.23em]">
                <span className="px-1">that runs</span>{" "}
                <Highlight className="px-1 text-niti-ink">insurance broking</Highlight>
              </span>{" "}
              <span className="flex flex-wrap items-center gap-x-3 gap-y-[0.23em]">
                <Highlight className="px-1 text-niti-ink">end-to-end</Highlight>{" "}
                <span className="px-1">for businesses</span>
              </span>
            </h1>
            <p className="max-w-[724px] font-text text-[clamp(1.0625rem,0.95rem+0.4vw,1.25rem)] text-white">
              AI agents read your documents, check your risks and compare plans from many insurers.
              Licensed experts check and approve every decision
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-[27px]">
            <ButtonLink href={DEMO_HREF} variant="lime">
              Book a Demo
            </ButtonLink>
            <Link
              href="#how-it-works"
              className="inline-flex h-12 items-center rounded-3xl border-2 border-white px-5 font-text text-xl text-white transition-colors hover:bg-white hover:text-niti-ink"
            >
              See How it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
