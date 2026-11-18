import { steps } from "@/lib/landing-content";
import { cn } from "@/lib/utils";

import { Decor, Eyebrow, Highlight } from "@/components/brand/primitives";

// Figma frame 170:134 (1280 wide). At lg+ `--u` is one Figma pixel scaled
// to the container, so the phone + swirl artwork keeps its exact overlap
// with the cards between 1024 and 1280px.
export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="@container mx-auto w-full max-w-[1280px] overflow-hidden bg-white [--u:1px] lg:[--u:calc(100cqw/1280)]"
    >
      <div className="relative pt-16 lg:pt-[calc(var(--u)*82)]">
        <header className="mx-auto flex w-[calc(100%-32px)] max-w-[1166px] flex-col gap-2 sm:w-[calc(100%-64px)] lg:w-[calc(var(--u)*1166)] lg:-translate-x-[5px]">
          <Eyebrow tone="lavender" className="self-start">
            How it works
          </Eyebrow>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <h2
              id="how-it-works-heading"
              className="flex flex-col items-start gap-1 font-headline text-[clamp(1.875rem,1.2rem+2.2vw,2.5rem)] leading-[1.3] text-niti-ink"
            >
              <span>From first form to issued policy</span>{" "}
              <Highlight className="rounded-xl px-2.5">in hours, not weeks.</Highlight>
            </h2>
            <p className="max-w-[434px] font-inter text-lg leading-[1.55] text-[#545d56]">
              AI agents do the heavy lifting. Reading documents, comparing options & writing reports
              at any hour. Licensed experts check & approve every decision.
            </p>
          </div>
        </header>

        <div className="relative mt-12 px-4 sm:px-8 lg:mt-[calc(var(--u)*94)] lg:h-[calc(var(--u)*753)] lg:px-[calc(var(--u)*15)]">
          <ol
            aria-label="Steps"
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-[calc(var(--u)*20)]"
          >
            {steps.map((step, i) => (
              <li
                key={step.title}
                className={cn(
                  "flex flex-col gap-6 rounded-[32px] bg-niti-cloud px-8 py-10 lg:rounded-[calc(var(--u)*48)] lg:py-12",
                  // Steps 4 and 5 sit beside the phone and fade out at the bottom.
                  i >= 3 &&
                    "lg:h-[calc(var(--u)*476)] lg:bg-transparent lg:bg-linear-to-b lg:from-niti-cloud lg:to-[rgba(238,238,238,0)] lg:to-[69.712%]",
                  i === 4 && "lg:col-start-3",
                )}
              >
                <span
                  aria-hidden="true"
                  className="grid size-[42px] place-items-center rounded-full bg-niti-teal font-display text-xl font-semibold text-[#fafafa]"
                >
                  {i + 1}
                </span>
                <div className="flex flex-col gap-[9px]">
                  <h3 className="font-headline text-[clamp(1.5rem,1.1rem+1.2vw,2rem)] leading-[1.25] font-semibold text-niti-ink">
                    {step.title}
                  </h3>
                  <p className="font-text text-base leading-normal font-medium text-niti-stone">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}

            {/* Lime stage for the phone. All offsets are from Figma, relative to this panel. */}
            <li
              aria-hidden="true"
              className="relative z-10 h-[380px] overflow-hidden rounded-t-[32px] bg-niti-lime md:col-span-2 md:h-[460px] lg:col-span-1 lg:col-start-2 lg:row-start-2 lg:h-[calc(var(--u)*480)] lg:overflow-visible lg:rounded-t-[calc(var(--u)*48)]"
            >
              <div className="pointer-events-none absolute hidden lg:block" style={box(-610, 140, 1062, 263.68)}>
                <div className="absolute top-1/2 left-1/2 h-[calc(var(--u)*1062)] w-[calc(var(--u)*263.68)] -translate-1/2 -rotate-90">
                  <Decor
                    src="/landing/how-swirl-left.svg"
                    className="top-[-2.28%] left-[-10.62%] h-[104.92%] w-[121.24%]"
                  />
                </div>
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element -- art-directed overlap needs the raw img box */}
              <img
                src="/landing/how-phone.png"
                alt=""
                className="pointer-events-none absolute top-6 left-1/2 w-[560px] max-w-none -translate-x-1/2 select-none md:w-[680px] lg:top-[calc(var(--u)*-152)] lg:left-[calc(var(--u)*-302)] lg:w-[calc(var(--u)*888)] lg:translate-x-0"
              />

              <div className="pointer-events-none absolute hidden lg:block" style={box(86.5, 279.18, 365.294, 512.5)}>
                <div className="absolute top-1/2 left-1/2 h-[calc(var(--u)*365.294)] w-[calc(var(--u)*512.5)] -translate-1/2 -rotate-90">
                  <Decor
                    src="/landing/how-swirl-center.svg"
                    className="top-[-3.3%] left-[-4.93%] h-[110.97%] w-[105.43%]"
                  />
                </div>
              </div>

              <Decor
                src="/landing/how-ring.svg"
                className="hidden mix-blend-multiply lg:block"
                style={box(638, 275, 350, 350)}
              />
            </li>
          </ol>
        </div>

        {/* White fade where the section meets the next one. */}
        <Decor
          src="/landing/how-fade.png"
          className="bottom-[-2px] left-0 z-20 hidden h-12 w-full -scale-x-100 lg:block"
        />
      </div>
    </section>
  );
}

/** Absolute box from Figma px, scaled by --u. */
function box(left: number, top: number, width: number, height: number) {
  return {
    left: `calc(var(--u) * ${left})`,
    top: `calc(var(--u) * ${top})`,
    width: `calc(var(--u) * ${width})`,
    height: `calc(var(--u) * ${height})`,
  };
}
