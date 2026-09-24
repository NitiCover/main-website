"use client";

import {
  Scale,
  Eye,
  Zap,
  Clock,
  Database,
  ShieldCheck,
} from "lucide-react";
import { ScrollStack, ScrollStackItem } from "@/components/reactbits/scroll-stack";

const benefits = [
  {
    icon: Zap,
    title: "Faster placements",
    description:
      "Cut re-keying and chasing; spend the time on advice. Insurer-ready submissions are generated once from the risk record and kept in sync.",
  },
  {
    icon: Scale,
    title: "Defensible advice",
    description:
      "Every recommendation ships with its reasoning and approval trail — so \"why this policy?\" always has an answer.",
  },
  {
    icon: Eye,
    title: "Complete decision history",
    description:
      "Who, what, when, why, source data, modification and approval — recorded on every placement.",
  },
  {
    icon: Clock,
    title: "Renewals that don't leak",
    description:
      "Agents track every expiry and start the renewal conversation on time, instead of relying on individual diligence.",
  },
  {
    icon: Database,
    title: "A structured book",
    description:
      "Your placement history becomes searchable, comparable data — not a folder of PDFs.",
  },
  {
    icon: ShieldCheck,
    title: "Humans stay accountable",
    description:
      "Automation does the work; authorised people review defined decision points before anything binds. Always.",
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
            Autonomous where possible. Human where it matters.
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
