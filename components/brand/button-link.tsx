import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "teal" | "lime" | "white" | "outline-light" | "outline-dark";
export type ButtonSize = "md" | "sm";

const variants: Record<ButtonVariant, string> = {
  teal: "bg-niti-teal text-white hover:-translate-y-0.5",
  lime: "bg-niti-lime text-niti-ink hover:-translate-y-0.5",
  white: "bg-white text-niti-teal hover:-translate-y-0.5",
  "outline-light":
    "border-2 border-white text-white hover:bg-white hover:text-niti-ink",
  "outline-dark":
    "border-2 border-niti-teal text-niti-teal hover:bg-niti-teal hover:text-white",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-12 px-5 text-lg",
  sm: "px-[18px] py-[9px] text-lg leading-none",
};

const isInternal = (href: string) => href.startsWith("/") || href.startsWith("#");
const isWeb = (href: string) => /^https?:/i.test(href);

/** Pill button rendered as a link: next/link for internal paths, a plain anchor otherwise. */
export function ButtonLink({
  href,
  variant = "teal",
  size = "md",
  children,
  className,
}: {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-headline font-medium whitespace-nowrap transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-niti-lime",
    variants[variant],
    sizes[size],
    className,
  );

  if (isInternal(href)) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={classes}
      {...(isWeb(href) ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
