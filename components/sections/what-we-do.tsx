"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { TextEffect } from "@/components/motion-primitives/text-effect";

export function WhatWeDo() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, {
    once: true,
    margin: "0px 0px -120px 0px",
  });

  return (
    <section id="what-we-do" className="mx-auto max-w-4xl px-6 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3087d0]">
        What NitiCover does
      </p>
      <div ref={headingRef}>
        <TextEffect
          as="h2"
          per="word"
          preset="slide"
          trigger={headingInView}
          className="mt-4 text-3xl font-semibold text-[#0e2c54] md:text-4xl"
        >
          Business insurance, handled end to end.
        </TextEffect>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-[#52627a]">
        NitiCover is an automated insurance brokerage built for startups and
        other tech-driven companies. Tell us what you need to cover — cyber,
        D&amp;O, GMC, or anything else — and we take it from there: comparing
        the market, negotiating terms, and getting your policy issued,
        without the back-and-forth that usually comes with buying insurance.
      </p>
    </section>
  );
}
