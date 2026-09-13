"use client";

import {
  Scale,
  Eye,
  Zap,
  Clock,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { ScrollStack, ScrollStackItem } from "@/components/reactbits/scroll-stack";

const benefits = [
  {
    icon: Scale,
    title: "Zero bias",
    description:
      "Every quote is generated the same automated way, so you get the best fit for your business — not the policy that pays the broker the biggest commission.",
  },
  {
    icon: Eye,
    title: "Full transparency",
    description:
      "Both you and the insurer see exactly where things stand, at every step, with a complete 10-year audit trail and nothing happening behind closed doors.",
  },
  {
    icon: Zap,
    title: "Fully digital",
    description:
      "No paperwork chases. Every quote, comparison, and bound policy lives in one place, accessible whenever you need it.",
  },
  {
    icon: Clock,
    title: "24/7 availability",
    description:
      "Reach us anytime over call, WhatsApp, or email — autonomous agents ensure zero handoff latency and instant resolutions.",
  },
  {
    icon: Sparkles,
    title: "Best-of-market quotes",
    description:
      "We analyze 20+ insurance providers so you don't have to, then narrow it down to the best 4–5 curated options for your risk profile.",
  },
  {
    icon: ShieldCheck,
    title: "Fast turnaround & licensed sign-off",
    description:
      "What normally takes 2–4 weeks with traditional brokers takes under 48 hours with NitiCover, backed by licensed experts on every policy.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative bg-gradient-to-b from-white to-[#f4f7fb] pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3087d0]">
            Why us
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#0e2c54] md:text-4xl">
            Everything you&apos;d want from a broker, minus the friction
          </h2>
        </div>

        <div className="mt-14">
          <ScrollStack
            itemDistance={80}
            itemScale={0.035}
            itemStackDistance={24}
            stackPosition="20%"
            scaleEndPosition="10%"
            baseScale={0.86}
            useWindowScroll={true}
          >
            {benefits.map(({ icon: Icon, title, description }) => (
              <ScrollStackItem key={title}>
                <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#3087d0]/40">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf2fb] text-[#0e2c54]">
                    <Icon className="h-6 w-6 text-[#0e2c54]" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#0e2c54]">
                    {title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#52627a]">
                    {description}
                  </p>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}
