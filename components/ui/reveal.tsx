"use client";

import type { ReactNode } from "react";
import { motion, MotionConfig } from "framer-motion";

// Fade-and-rise on first scroll into view. Transform/opacity only, so it stays
// on the compositor; honours the OS reduced-motion setting.
export function Reveal({
  children,
  delay = 0,
  y = 24,
  as = "div",
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: "div" | "li";
  className?: string;
}) {
  const Component = as === "li" ? motion.li : motion.div;

  return (
    <MotionConfig reducedMotion="user">
      <Component
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
        className={className}
      >
        {children}
      </Component>
    </MotionConfig>
  );
}
