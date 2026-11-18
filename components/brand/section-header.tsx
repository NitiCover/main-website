import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Eyebrow } from "./primitives";

/** Eyebrow, heading and optional description that open a page section. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  as: Heading = "h2",
  id,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2" | "h3";
  id?: string;
}) {
  const dark = tone === "dark";
  const centered = align === "center";
  return (
    <header className={cn("flex flex-col gap-4", centered ? "items-center text-center" : "items-start")}>
      {eyebrow && <Eyebrow tone={dark ? "violet" : "lavender"}>{eyebrow}</Eyebrow>}
      <Heading
        id={id}
        className={cn(
          "font-headline text-[clamp(2rem,1.4rem+1.9vw,2.5rem)] leading-[1.3]",
          dark ? "text-white" : "text-niti-ink",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "max-w-[640px] font-inter text-lg leading-[1.55]",
            dark ? "text-white/75" : "text-niti-slate",
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
