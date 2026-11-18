"use client";

import { useId, useState } from "react";

import { faqs } from "@/lib/landing-content";
import { cn } from "@/lib/utils";

import { Eyebrow, Highlight } from "./primitives";

// Figma frame 225:2. One answer open at a time; the first starts open.
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();

  return (
    <section
      id="faq"
      aria-labelledby={`${id}-heading`}
      className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 bg-white px-4 py-16 sm:px-8 lg:min-h-[760px] lg:flex-row lg:items-start lg:gap-16 lg:p-[72px]"
    >
      <div className="flex shrink-0 flex-col items-start gap-5 lg:w-[360px]">
        <Eyebrow>FAQ</Eyebrow>
        <h2
          id={`${id}-heading`}
          className="flex flex-col items-start gap-1 font-headline text-[clamp(2rem,1.4rem+1.9vw,2.5rem)] leading-[1.3] text-niti-ink"
        >
          <span>Ask Us</span>{" "}
          <Highlight className="px-2.5 font-display text-[1.1em] font-medium tracking-[-0.02em]">
            Anything
          </Highlight>
        </h2>
        <p className="font-text text-[17px] leading-[1.55] text-niti-slate">
          Still unsure? Book a demo and talk to a licensed broker.
        </p>
      </div>

      <div className="flex-1 border-t border-[#ededed]">
        {faqs.map((item, i) => {
          const expanded = open === i;
          const buttonId = `${id}-q-${i}`;
          const panelId = `${id}-a-${i}`;
          return (
            <div key={item.question} className="border-b border-[#ededed] py-6">
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => setOpen(expanded ? null : i)}
                  className="group flex w-full items-center gap-6 text-left font-headline text-[clamp(1.125rem,0.95rem+0.6vw,1.375rem)] font-medium tracking-[-0.01em] text-niti-deep"
                >
                  <span className="flex-1">{item.question}</span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "grid size-9 shrink-0 place-items-center rounded-full text-lg transition-colors duration-300",
                      expanded
                        ? "bg-niti-deep text-white"
                        : "bg-[#ededed] text-niti-deep group-hover:bg-[#e0e0e0]",
                    )}
                  >
                    {expanded ? "–" : "+"}
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!expanded}
                className="animate-in pt-3 duration-300 fade-in"
              >
                <p className="font-text text-base leading-[1.55] text-niti-steel">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
