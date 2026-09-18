"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function WhatWeDo() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001,
  });

  // Subtle smooth parallax translation
  const translateY = useTransform(smoothProgress, [0, 1], ["20px", "-20px"]);

  return (
    <section
      id="what-we-do"
      ref={containerRef}
      className="mx-auto max-w-4xl px-6 py-20 text-center"
    >
      <motion.div style={{ y: translateY }}>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3087d0]">
          What NitiCover does
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-[#0e2c54] md:text-4xl">
          Business insurance, handled end to end.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#52627a] md:text-lg">
          NitiCover is an automated insurance brokerage built for startups and
          tech-driven companies. Tell us what you need to cover — cyber, D&amp;O,
          GMC, or commercial liability — and we take it from there: comparing
          the market, negotiating terms, and issuing bound policies with licensed
          broker sign-off, without the friction of legacy broking.
        </p>
      </motion.div>
    </section>
  );
}

