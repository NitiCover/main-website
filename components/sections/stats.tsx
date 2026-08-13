"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { AnimatedNumber } from "@/components/motion-primitives/animated-number";

const stats: {
  numeric?: number;
  suffix?: string;
  text?: string;
  label: string;
}[] = [
  { numeric: 20, suffix: "+", label: "Insurer partners compared" },
  { text: "~1 week", label: "Average turnaround" },
  { text: "24/7", label: "Call, WhatsApp & email support" },
  { numeric: 100, suffix: "%", label: "Digital process" },
];

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <section ref={ref} className="bg-[#0e2c54] py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="flex items-center justify-center text-3xl font-semibold text-white md:text-4xl">
              {stat.numeric !== undefined ? (
                <>
                  <AnimatedNumber
                    value={inView ? stat.numeric : 0}
                    springOptions={{ bounce: 0, duration: 1500 }}
                  />
                  <span>{stat.suffix}</span>
                </>
              ) : (
                stat.text
              )}
            </div>
            <div className="mt-2 text-sm text-white/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
