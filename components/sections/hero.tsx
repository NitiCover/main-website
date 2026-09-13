"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { HeroScrollImage } from "@/components/sections/hero-scroll-image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import {
  backgroundVariants,
  contentContainer,
  contentItem,
} from "@/components/watermelon-ui/hero-10";

const defaultBackground = "https://assets.watermelon.sh/hero-10-bg.avif";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-[92vh] w-full overflow-hidden bg-[#f0f4f9] font-sans text-slate-900 antialiased"
    >
      {/* Background Image with subtle zoom and fade animation */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="absolute inset-0 will-change-transform opacity-30"
        aria-hidden="true"
      >
        <img
          src={defaultBackground}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* Atmospheric Overlays */}
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(240,245,252,0.85)_40%,rgba(230,240,250,0.65)_70%,rgba(255,255,255,0.95)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-8 pb-16 sm:px-8 sm:pt-12 sm:pb-20 lg:px-10 lg:pt-16 lg:pb-24">
        <ContainerScroll
          titleComponent={
            <motion.div
              variants={contentContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-start text-left lg:pr-6"
            >
              {/* Clean Eyebrow */}
              <motion.p
                variants={contentItem}
                className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3087d0]"
              >
                Business insurance, reimagined
              </motion.p>

              {/* Main Headline */}
              <motion.h1
                variants={contentItem}
                className="mt-4 font-sans text-4xl font-semibold leading-tight text-[#0e2c54] md:text-5xl"
              >
                Get covered
                <br />
                <span className="mt-1 block text-4xl font-bold leading-none text-[#0e2c54] md:text-[5rem] lg:text-[5.5rem]">
                  without the busywork.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={contentItem}
                className="mt-6 max-w-xl text-base leading-relaxed text-[#52627a] md:text-lg"
              >
                NitiCover is an automated insurance brokerage that gets startups
                and tech companies covered — fast, unbiased, and fully
                transparent, from first message to signed policy.
              </motion.p>

              {/* Actions */}
              <motion.div
                variants={contentItem}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <motion.a
                  href="/waitlist"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#0e2c54] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0e2c54]/85"
                >
                  <span>Join the waitlist</span>
                  <FaArrowRight className="size-3.5" />
                </motion.a>

                <motion.a
                  href="#what-we-do"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#0e2c54]/20 bg-white/80 px-6 py-3 text-sm font-medium text-[#0e2c54] shadow-xs backdrop-blur-sm transition-colors hover:bg-white"
                >
                  <span>See how it works</span>
                </motion.a>
              </motion.div>
            </motion.div>
          }
        >
          <HeroScrollImage />
        </ContainerScroll>
      </div>
    </section>
  );
}
