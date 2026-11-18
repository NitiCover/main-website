"use client";

import { useId, useState } from "react";

import { insuranceTerms } from "@/lib/landing-content";
import { cn } from "@/lib/utils";

import { Decor, Eyebrow, Highlight } from "@/components/brand/primitives";
import { nextTabIndex } from "./tab-keys";

// Figma frame 224:98.
export function InsuranceBasics() {
  const [active, setActive] = useState(0);
  const id = useId();
  const current = insuranceTerms[active];

  return (
    <section
      id="insurance-101"
      aria-labelledby={`${id}-heading`}
      className="relative mx-auto w-full max-w-[1280px] overflow-hidden bg-linear-to-br from-niti-periwinkle from-35% to-[#7377e0] px-4 py-16 sm:px-8 lg:px-[72px] lg:pt-[72px] lg:pb-[71px]"
    >
      {/* Same "Ellipse 5" ring as the problem section. */}
      <Decor
        src="/landing/problem-ring-bottom.svg"
        className="top-[-203px] left-[-84px] w-[412px] mix-blend-screen"
      />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col items-start gap-6">
          <Eyebrow>Insurance 101</Eyebrow>
          <h2
            id={`${id}-heading`}
            className="flex flex-col items-start gap-3 font-headline text-[clamp(2rem,1.2rem+2.8vw,3rem)] leading-[1.12] font-medium text-white"
          >
            <span>New to Business Insurance</span>{" "}
            <Highlight className="px-2.5 font-display text-[0.917em] leading-[1.3] tracking-[-0.02em]">
              Start Here
            </Highlight>
          </h2>
        </div>
        <p className="max-w-[400px] font-inter text-lg leading-[1.55] text-white/75">
          Insurance is a promise that helps you pay for big, unexpected problems like a shared
          emergency fund. Everyone puts in a little; whoever has an emergency gets help.
        </p>
      </div>

      <div className="relative mt-10 flex flex-col gap-8 lg:mt-[37px] lg:flex-row lg:gap-0">
        <div
          role="tablist"
          aria-label="Insurance terms"
          aria-orientation="vertical"
          className="flex w-full flex-col gap-3 lg:w-[520px] lg:shrink-0 lg:p-2.5"
        >
          {insuranceTerms.map((t, i) => {
            const selected = i === active;
            return (
              <button
                key={t.term}
                type="button"
                role="tab"
                id={`${id}-tab-${i}`}
                aria-selected={selected}
                aria-controls={`${id}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  const n = nextTabIndex(e, i, insuranceTerms.length, "vertical");
                  if (n !== null) setActive(n);
                }}
                className={cn(
                  "flex h-[clamp(80px,9vw,128px)] items-center lg:h-32 gap-[clamp(20px,3vw,39px)] rounded-3xl border p-6 text-left font-headline font-medium transition-colors duration-300",
                  selected
                    ? "border-niti-lilac bg-niti-lilac lg:h-[125px]"
                    : "border-niti-lilac hover:bg-niti-lilac/30",
                )}
              >
                <span className="text-base text-niti-lime">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[clamp(1.75rem,1.2rem+1.6vw,2.5rem)] leading-[1.12] text-white">
                  {t.term}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative flex flex-1 items-center justify-center py-6 lg:h-[671px] lg:py-0">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(circle,rgba(255,255,255,0.18)_1.5px,transparent_2px)] bg-size-[19.36px_23px] lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute top-[89%] left-1/2 h-[23px] w-[336px] -translate-x-1/2 rounded-[50%] bg-[#4b4fae]/45 blur-md max-lg:hidden"
          />

          <div
            role="tabpanel"
            id={`${id}-panel`}
            aria-labelledby={`${id}-tab-${active}`}
            className="relative h-[447px] w-[322px] max-w-full overflow-hidden rounded-3xl bg-linear-to-b from-[#f1f1f1] to-[#f6f6f6] shadow-[0_13px_88px_0_rgba(0,0,0,0.2)] lg:-translate-x-[3px] lg:-translate-y-[16px]"
          >
            <Decor
              src="/landing/glossary-mark-large.svg"
              className="top-[calc(50%+165.88px)] left-[calc(50%-7.75px)] w-[360.5px] -translate-1/2 mix-blend-multiply"
            />
            <div
              key={current.term}
              className="absolute top-[33px] left-12 flex w-[226px] animate-in flex-col items-end gap-[61px] duration-500 fade-in slide-in-from-bottom-1"
            >
              <Decor src="/landing/glossary-mark-small.svg" className="static w-[37px] mix-blend-multiply" />
              <div className="flex w-full flex-col items-center gap-3 text-center">
                <h3 className="font-headline text-[44px] leading-[1.3] font-medium tracking-[-0.02em] text-black">
                  {current.term}
                </h3>
                <p className="font-inter text-lg leading-normal text-[#5f5e5e]">{current.definition}</p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0.5px_-0.5px_4px_0_rgba(0,0,0,0.27),inset_-4px_4px_4px_0_rgba(255,255,255,0.51)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
