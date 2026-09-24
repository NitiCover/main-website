import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// The white card used by the benefits stack, reusable across pages.
export function InfoCard({
  icon: Icon,
  index,
  title,
  children,
  className,
}: {
  icon?: LucideIcon;
  index?: number;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "h-full rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-[#3087d0]/40 hover:shadow-md hover:shadow-[#0e2c54]/5",
        className,
      )}
    >
      {(Icon || index !== undefined) && (
        <div className="flex items-center justify-between">
          {Icon && (
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf2fb]">
              <Icon className="h-6 w-6 text-[#0e2c54]" />
            </div>
          )}
          {index !== undefined && (
            <span className="font-mono text-sm text-[#3087d0]">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>
      )}
      <h3
        className={cn(
          "text-lg font-semibold text-[#0e2c54]",
          (Icon || index !== undefined) && "mt-5",
        )}
      >
        {title}
      </h3>
      {children && (
        <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[#52627a]">
          {children}
        </p>
      )}
    </div>
  );
}
