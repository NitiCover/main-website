"use client";

import { Check } from "lucide-react";
import { useId, useState } from "react";

import { problemsAndFixes } from "@/lib/landing-content";
import { cn } from "@/lib/utils";

import { Decor, Eyebrow } from "./primitives";
import { nextTabIndex } from "./tab-keys";

const views = [
  { key: "problem", label: "The Problems" },
  { key: "fix", label: "Niticover’s fix" },
] as const;

// Figma frame 199:127.
export function ProblemsFixes() {
  const [active, setActive] = useState(0);
  const id = useId();
  const view = views[active].key;

  return (
    <section
      id="why-niticover"
      aria-labelledby={`${id}-heading`}
      className="mx-auto w-full max-w-[1280px] bg-linear-to-b from-niti-ink to-[#24433f] px-4 py-16 sm:px-8 lg:min-h-[805px] lg:px-[72px] lg:pt-[72px] lg:pb-12"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col items-start gap-6">
          <Eyebrow>Why NitiCover</Eyebrow>
          <h2
            id={`${id}-heading`}
            className="flex flex-col font-headline text-[clamp(2.25rem,1.5rem+2.4vw,3rem)] leading-[1.12] font-medium"
          >
            <span className="text-white">Six Problems</span>{" "}
            <span className="text-niti-lime">Six Fixes</span>
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="Show problems or fixes"
          className="flex self-start rounded-[40px] border-[5px] border-niti-lime bg-niti-lime lg:self-auto"
        >
          {views.map((v, i) => {
            const selected = i === active;
            return (
              <button
                key={v.key}
                type="button"
                role="tab"
                id={`${id}-tab-${v.key}`}
                aria-selected={selected}
                aria-controls={`${id}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  const n = nextTabIndex(e, i, views.length, "horizontal");
                  if (n !== null) setActive(n);
                }}
                className={cn(
                  "flex w-[clamp(150px,40vw,200px)] items-center justify-center gap-2 rounded-[40px] p-3 font-headline text-[clamp(1.0625rem,0.8rem+0.9vw,1.5rem)] leading-[1.12] font-medium whitespace-nowrap transition-colors duration-300 sm:p-4",
                  selected ? "bg-niti-lime text-niti-ink" : "bg-niti-ink text-niti-lime hover:bg-[#21403f]",
                )}
              >
                {selected && <span aria-hidden="true" className="size-2 rounded-full bg-niti-ink" />}
                {v.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative mt-10 lg:mt-[37px]">
        {/* Dot grid behind the cards (Figma: 37 columns x 22 rows of 4px dots). */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-3 bottom-0 hidden bg-[radial-gradient(circle,rgba(255,255,255,0.14)_2px,transparent_2.5px)] bg-size-[30.6px_23px] lg:block lg:h-[487px]"
        />

        <div
          role="tabpanel"
          id={`${id}-panel`}
          aria-labelledby={`${id}-tab-${view}`}
          className="relative mx-auto max-w-[843px] lg:pt-[23px]"
        >
          <ul
            key={view}
            className="grid animate-in grid-cols-1 gap-4 duration-500 fade-in slide-in-from-bottom-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[54px] lg:gap-y-8"
          >
            {problemsAndFixes.map((item, i) => {
              const card = item[view];
              return (
                <li
                  key={i}
                  className="flex flex-col gap-2.5 rounded-xl bg-white px-3.5 py-5 lg:min-h-[200px]"
                >
                  <div className="flex items-start justify-between">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "grid size-8 place-items-center rounded-full font-headline text-xl leading-[1.25] font-semibold tracking-[-0.2px] text-niti-teal",
                        view === "problem" ? "bg-niti-mint" : "bg-niti-lime",
                      )}
                    >
                      {i + 1}
                    </span>
                    <span className="p-1">
                      {view === "problem" ? (
                        <Decor src="/landing/icon-cross.svg" className="static size-6" />
                      ) : (
                        <Check aria-hidden="true" className="size-6 text-niti-teal" strokeWidth={2.5} />
                      )}
                    </span>
                  </div>
                  <h3 className="font-headline text-xl leading-[1.25] font-semibold tracking-[-0.2px] text-niti-teal lg:min-h-[50px]">
                    {card.title}
                  </h3>
                  <p className="font-text text-sm leading-[1.25] tracking-[-0.14px] text-[#a2a7a2]">
                    {card.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
