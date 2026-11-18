import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Small uppercase section label ("HOW IT WORKS", "FAQ" ...). */
export function Eyebrow({
  children,
  tone = "violet",
  className,
}: {
  children: ReactNode;
  tone?: "violet" | "lavender";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg px-2 py-1 font-headline text-xs leading-[1.3] uppercase",
        tone === "violet" ? "bg-niti-violet text-white" : "bg-niti-lavender text-niti-violet",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** The lime marker-pen highlight used on key phrases. */
export function Highlight({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "box-decoration-clone rounded-xl bg-niti-lime px-[0.18em] text-niti-lime-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Decorative image that should never be announced or intercept clicks. */
export function Decor({
  src,
  className,
  style,
}: {
  src: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static decorative SVG positioned in % of its parent
    <img
      src={src}
      alt=""
      aria-hidden="true"
      style={style}
      className={cn("pointer-events-none absolute max-w-none select-none", className)}
    />
  );
}

/**
 * Places an absolutely positioned layer in % of its parent, so Figma
 * coordinates scale with the section instead of pinning to 1280px.
 */
export function pct({
  left,
  top,
  right,
  bottom,
  width,
}: {
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
  width?: number;
}): { style: CSSProperties } {
  const style: CSSProperties = {};
  if (left !== undefined) style.left = `${left}%`;
  if (top !== undefined) style.top = `${top}%`;
  if (right !== undefined) style.right = `${right}%`;
  if (bottom !== undefined) style.bottom = `${bottom}%`;
  if (width !== undefined) style.width = `${width}%`;
  return { style };
}
