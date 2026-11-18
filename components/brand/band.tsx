import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const tones = {
  ink: "bg-niti-ink",
  periwinkle: "bg-niti-periwinkle",
} as const;

/** Full-width coloured section, capped at 1280px like the home page's colour bands. */
export function Band({
  tone,
  id,
  labelledBy,
  children,
  className,
}: {
  tone: keyof typeof tones;
  id?: string;
  labelledBy?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative mx-auto w-full max-w-[1280px] overflow-hidden px-4 py-16 sm:px-8 lg:px-[72px] lg:py-[72px]",
        tones[tone],
        className,
      )}
    >
      {children}
    </section>
  );
}
