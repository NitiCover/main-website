"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function AirtableEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative">
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse rounded-xl bg-[#0e2c54]/5"
          style={{ height: 900 }}
        />
      )}
      <iframe
        className={cn(
          "airtable-embed block transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
        )}
        src="https://airtable.com/embed/appq140XDu34aOfhx/pagLGl5YkxkyGVAMU/form"
        title="NitiCover waitlist form"
        frameBorder={0}
        scrolling="no"
        width="100%"
        height={900}
        loading="eager"
        style={{ background: "transparent" }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
