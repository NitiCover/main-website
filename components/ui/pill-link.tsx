import type { ReactNode } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const styles = {
  primary:
    "bg-[#0e2c54] px-7 text-white shadow-sm hover:bg-[#0e2c54]/85",
  outline:
    "border border-[#0e2c54]/20 bg-white/80 px-6 font-medium text-[#0e2c54] shadow-xs backdrop-blur-sm hover:bg-white",
};

// Same pill buttons as the homepage hero, CSS-only so they render on the server.
export function PillLink({
  href,
  children,
  variant = "primary",
  arrow = variant === "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  arrow?: boolean;
  className?: string;
}) {
  const classes = cn(
    "inline-flex min-h-12 items-center gap-2 rounded-full py-3 text-sm font-semibold transition-[background-color,transform] duration-200 hover:scale-[1.02] active:scale-[0.98]",
    styles[variant],
    className,
  );
  const content = (
    <>
      <span>{children}</span>
      {arrow && <FaArrowRight className="size-3.5" />}
    </>
  );

  return href.startsWith("/") ? (
    <Link href={href} className={classes}>
      {content}
    </Link>
  ) : (
    <a href={href} className={classes}>
      {content}
    </a>
  );
}
