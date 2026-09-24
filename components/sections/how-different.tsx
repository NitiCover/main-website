"use client";

import { CircleCheckBig, CircleX } from "lucide-react";
import { InView } from "@/components/motion-primitives/in-view";

const comparisons = [
  {
    category: "Submissions",
    traditional: "Hours per placement spent re-keying client data into insurer-specific formats",
    niticover: "Insurer-ready dossiers generated in each insurer's preferred format, kept in sync as details change",
  },
  {
    category: "Recommendations",
    traditional: "Clients and regulators ask \"why this policy?\" — and the answer lives in someone's inbox",
    niticover: "Every recommendation carries its reasoning, with clause-level comparison of limits, deductibles and exclusions",
  },
  {
    category: "Renewals & follow-ups",
    traditional: "Follow-ups, document chasing and renewals depend on individual diligence, not a system",
    niticover: "Workflow agents handle follow-ups, document collection, reminders, renewal alerts and escalations",
  },
  {
    category: "Audit trail",
    traditional: "Every placement rebuilt from scratch, with nobody holding the full history in one place",
    niticover: "Complete decision history — who, what, when, why, source data, modification and approval",
  },
  {
    category: "Accountability",
    traditional: "Unstructured data and opaque decisions that are hard to defend",
    niticover: "Authorised personnel validate defined decision points before anything binds",
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
              Manual broking
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

