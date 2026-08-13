"use client";

import { Scale, Eye, Zap, Clock, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { InView } from "@/components/motion-primitives/in-view";
import { Spotlight } from "@/components/motion-primitives/spotlight";

const benefits = [
  {
    icon: Scale,
    title: "Zero bias",
    description:
      "Every quote is generated the same automated way, so you get the best fit for your business — not the policy that pays the biggest commission.",
  },
  {
    icon: Eye,
    title: "Full transparency",
    description:
      "Both you and the insurer see exactly where things stand, at every step, with nothing happening behind closed doors.",
  },
  {
    icon: Zap,
    title: "Fully digital",
    description:
      "No paperwork chases. Every quote, comparison, and policy document lives in one place, accessible whenever you need it.",
  },
  {
    icon: Clock,
    title: "24/7 availability",
    description:
      "Reach us anytime over call, WhatsApp, or email — we never miss a client and resolutions come fast.",
  },
  {
    icon: Sparkles,
    title: "Best-of-market quotes",
    description:
      "We check 20+ insurance providers so you don't have to, then narrow it down to the best 4–5 options for you to choose from.",
  },
  {
    icon: ShieldCheck,
    title: "Fast turnaround",
    description:
      "What normally takes weeks to months with a traditional broker takes about a week with NitiCover.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3087d0]">
          Why us
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-[#0e2c54] md:text-4xl">
          Everything you&apos;d want from a broker, minus the friction
        </h2>
      </div>

      <InView
        viewOptions={{ once: true, margin: "0px 0px -120px 0px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
        }}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {benefits.map(({ icon: Icon, title, description }) => (
          <motion.div
            key={title}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.97 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-[#3087d0]/40"
          >
            <Spotlight
              className="blur-2xl"
              size={260}
              fill="rgba(48, 135, 208, 0.55)"
            />
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf2fb]">
              <Icon className="h-5 w-5 text-[#0e2c54]" />
            </div>
            <h3 className="relative mt-4 text-lg font-semibold text-[#0e2c54]">
              {title}
            </h3>
            <p className="relative mt-2 text-sm text-[#52627a]">{description}</p>
          </motion.div>
        ))}
      </InView>
    </section>
  );
}
