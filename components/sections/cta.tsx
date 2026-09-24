"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DEMO_HREF,
  SITE_EMAIL,
  SITE_PHONE_DISPLAY,
} from "@/lib/site-content";

function ShineOverlay() {
  return (
    <motion.span
      variants={{ rest: { x: "-120%" }, hover: { x: "220%" } }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent"
    />
  );
}

export function Cta() {
  return (
    <section
      id="contact"
      className="mx-auto w-screen px-6 py-24 text-center bg-white/70"
    >
      <h2 className="text-3xl font-semibold text-[#0e2c54] md:text-4xl">
        See a placement run on NitiCover.
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-[#52627a]">
        A 30-minute walkthrough with a founder, using a risk from your own
        book.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button
          size="lg"
          nativeButton={false}
          className="relative h-11 overflow-hidden bg-[#0e2c54] px-6 text-base text-white hover:bg-[#0e2c54]/85"
          render={
            <motion.a
              href={DEMO_HREF}
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="relative overflow-hidden"
            >
              Book a demo
              <ShineOverlay />
            </motion.a>
          }
        />
        <Button
          size="lg"
          variant="outline"
          nativeButton={false}
          className="h-11 border-[#0e2c54]/20 px-6 text-base text-[#0e2c54] hover:bg-[#eaf2fb]"
          render={<Link href="/waitlist">Join the waitlist</Link>}
        />
      </div>
      <p className="mt-4 text-xs text-[#52627a]/70">
        {SITE_EMAIL} · {SITE_PHONE_DISPLAY}
      </p>
    </section>
  );
}
