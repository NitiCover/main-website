"use client";

import { CircleCheckBig, CircleX } from "lucide-react";
import { InView } from "@/components/motion-primitives/in-view";

const comparisons = [
  {
    category: "Placement Speed",
    traditional: "2–4 week turnaround delays stalled by manual sequential workflows and human email handoffs",
    niticover: "<48 hours quote-to-bind powered by autonomous AI underwriting with zero handoff latency",
  },
  {
    category: "Policy Recommendation",
    traditional: "Commission and relationship bias favoring broker margins or partner quotas",
    niticover: "100% unbiased risk profiling matched strictly to your actual company exposure",
  },
  {
    category: "Audit & Compliance",
    traditional: "Zero audit trail with negotiations scattered across untracked WhatsApp chats and emails",
    niticover: "100% digitized, 10-year IRDAI-compliant audit trail with every clause and quote timestamped",
  },
  {
    category: "Transparency & Trust",
    traditional: "Opaque 'black box' proposals forcing founders to hire outside consultants to avoid overpaying",
    niticover: "Transparent clause-by-clause breakdown with licensed broker and insurer sign-off on every case",
  },
  {
    category: "Availability & Accuracy",
    traditional: "Business-hours availability only with high error rates from manual data entry",
    niticover: "24/7 AI-native workflow with 70% reduction in manual processing errors",
  },
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
          {/* Traditional Brokers Card */}
          <InView
            viewOptions={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl border border-black/5 bg-white p-8"
          >
            <h3 className="text-lg font-semibold text-[#52627a]">
              Traditional brokers
            </h3>
            <ul className="mt-6 space-y-5">
              {comparisons.map((item) => (
                <li key={item.category} className="flex items-start gap-3.5 text-[#52627a]">
                  <CircleX className="mt-0.5 h-5 w-5 shrink-0 text-[#c4785d]" />
                  <div className="text-sm leading-relaxed sm:text-base">
                    <span className="font-semibold text-slate-700">{item.category}: </span>
                    {item.traditional}
                  </div>
                </li>
              ))}
            </ul>
          </InView>

          {/* NitiCover Card */}
          <InView
            viewOptions={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="rounded-2xl border-2 border-[#0e2c54] bg-white p-8 shadow-lg shadow-[#0e2c54]/5"
          >
            <h3 className="text-lg font-semibold text-[#0e2c54]">
              NitiCover
            </h3>
            <ul className="mt-6 space-y-5">
              {comparisons.map((item) => (
                <li key={item.category} className="flex items-start gap-3.5 text-[#0e2c54]">
                  <CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-[#3087d0]" />
                  <div className="text-sm leading-relaxed sm:text-base">
                    <span className="font-semibold text-[#0e2c54]">{item.category}: </span>
                    {item.niticover}
                  </div>
                </li>
              ))}
            </ul>
          </InView>
        </div>
      </div>
    </section>
  );
}

