"use client";

import { CircleCheckBig, CircleX } from "lucide-react";
import { InView } from "@/components/motion-primitives/in-view";

const traditional = [
  "Weeks to a month or two for a single quote",
  "One fairly standardized offer, take it or leave it",
  "Business-hours availability only",
  "Opaque process — you rarely see how the quote was built",
];

const niticover = [
  "Quotes from 20+ insurers gathered in about a week",
  "Choose from the best 4–5 offers, not just one",
  "24/7 support over call, WhatsApp, and email",
  "Fully digital and transparent, for you and the insurer",
];

export function HowDifferent() {
  return (
    <section id="how-different" className="bg-[#f4f7fb] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3087d0]">
            How we&apos;re different
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#0e2c54] md:text-4xl">
            The old way vs. the NitiCover way
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <InView
            viewOptions={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl border border-black/5 bg-white p-8"
          >
            <h3 className="text-lg font-semibold text-[#52627a]">
              Traditional brokers
            </h3>
            <ul className="mt-6 space-y-4">
              {traditional.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#52627a]">
                  <CircleX className="mt-0.5 h-5 w-5 shrink-0 text-[#c4785d]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </InView>

          <InView
            viewOptions={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="rounded-2xl border-2 border-[#0e2c54] bg-white p-8 shadow-lg shadow-[#0e2c54]/5"
          >
            <h3 className="text-lg font-semibold text-[#0e2c54]">
              NitiCover
            </h3>
            <ul className="mt-6 space-y-4">
              {niticover.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#0e2c54]">
                  <CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-[#3087d0]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </InView>
        </div>
      </div>
    </section>
  );
}
