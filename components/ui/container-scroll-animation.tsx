"use client";
import React, { useRef } from "react";

export const ContainerScroll = ({
  titleComponent,
  children,
  className,
}: {
  titleComponent?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`relative w-full ${className || ""}`}
      ref={containerRef}
    >
      <div className="relative w-full">
        {titleComponent ? (
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="w-full lg:col-span-7">{titleComponent}</div>
            <div className="flex w-full justify-center lg:col-span-5">
              <Card>{children}</Card>
            </div>
          </div>
        ) : (
          <Card>{children}</Card>
        )}
      </div>
    </div>
  );
};

export const Header = ({
  titleComponent,
}: {
  titleComponent: React.ReactNode;
}) => {
  return <div className="w-full text-left">{titleComponent}</div>;
};

export const Card = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      style={{
        boxShadow:
          "0 0 #0000004d, 0 12px 30px #0e2c542a, 0 35px 50px #0e2c5422, 0 50px 70px #0e2c5415, inset 0 1px 1px rgba(255,255,255,0.4)",
      }}
      className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px] aspect-[9/19] rounded-[48px] border-[10px] border-[#10141d] bg-[#10141d] p-0 shadow-2xl ring-1 ring-white/15"
    >
      {/* Authentic iPhone Dynamic Island */}
      <div className="pointer-events-none absolute top-3.5 left-1/2 z-40 flex h-6 w-24 -translate-x-1/2 items-center justify-between rounded-full bg-black px-2.5 shadow-md">
        {/* Front camera lens reflection */}
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-[#121624] ring-1 ring-[#1f293d]/50" />
        </div>
        {/* Sensor dot */}
        <span className="size-2.5 rounded-full bg-[#0a0f1d] ring-1 ring-[#1e2738]/40" />
      </div>

      {/* Screen container */}
      <div className="h-full w-full overflow-hidden rounded-[38px] bg-[#e7ddd3] shadow-inner">
        {children}
      </div>
    </div>
  );
};
