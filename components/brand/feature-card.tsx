import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Numbered card from the home "How it works" section. `index` is 0-based. */
export function StepCard({
  index,
  title,
  children,
  className,
}: {
  index: number;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex h-full flex-col gap-6 rounded-[32px] bg-niti-cloud px-8 py-10", className)}>
      <span
        aria-hidden="true"
        className="grid size-[42px] place-items-center rounded-full bg-niti-teal font-display text-xl font-semibold text-white"
      >
        {index + 1}
      </span>
      <div className="flex flex-col gap-[9px]">
        <h3 className="font-headline text-[clamp(1.5rem,1.1rem+1.2vw,2rem)] leading-[1.25] font-semibold text-niti-ink">
          {title}
        </h3>
        <div className="font-text text-base leading-normal font-medium text-niti-stone">{children}</div>
      </div>
    </div>
  );
}

/** Icon row from the home platform "promises". */
export function FeatureCard({
  icon: Icon,
  title,
  children,
  className,
}: {
  icon: LucideIcon;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-start gap-4 rounded-[20px] bg-niti-mist p-5", className)}>
      <span
        aria-hidden="true"
        className="grid size-11 shrink-0 place-items-center rounded-full bg-niti-teal text-white"
      >
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <div className="flex flex-col gap-1">
        <h3 className="font-headline text-xl font-semibold tracking-[-0.01em] text-niti-ink">
          {title}
        </h3>
        <div className="font-inter text-[15px] leading-normal text-niti-slate">{children}</div>
      </div>
    </div>
  );
}
