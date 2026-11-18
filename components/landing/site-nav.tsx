"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { DEMO_HREF, navLinks } from "@/lib/landing-content";
import { cn } from "@/lib/utils";

const pill =
  "rounded-full px-[18px] py-[9px] font-headline text-lg leading-none transition-colors";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 bg-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 pt-4 pb-2 sm:px-8 lg:px-[72px] lg:pt-6">
        <Link href="/" className="p-3" aria-label="NitiCover home">
          <Image
            src="/landing/logo-wordmark.png"
            alt="NitiCover"
            width={150}
            height={32}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1.5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(pill, "text-niti-teal hover:bg-niti-teal/8")}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={DEMO_HREF}
            className={cn(pill, "bg-niti-teal text-white hover:bg-niti-ink")}
          >
            Book a demo
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative grid size-11 place-items-center rounded-full text-niti-teal hover:bg-niti-teal/8 lg:hidden"
        >
          <span
            aria-hidden="true"
            className={cn(
              "absolute h-0.5 w-5 rounded bg-current transition-transform",
              open ? "rotate-45" : "-translate-y-1.5",
            )}
          />
          <span
            aria-hidden="true"
            className={cn(
              "absolute h-0.5 w-5 rounded bg-current transition-opacity",
              open && "opacity-0",
            )}
          />
          <span
            aria-hidden="true"
            className={cn(
              "absolute h-0.5 w-5 rounded bg-current transition-transform",
              open ? "-rotate-45" : "translate-y-1.5",
            )}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-4 top-full flex flex-col gap-1 rounded-3xl bg-white p-3 shadow-[0_24px_48px_-12px_rgba(25,49,51,0.25)] sm:inset-x-8 lg:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(pill, "text-niti-teal hover:bg-niti-teal/8")}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={DEMO_HREF}
            onClick={() => setOpen(false)}
            className={cn(pill, "mt-1 bg-niti-teal text-center text-white")}
          >
            Book a demo
          </Link>
        </nav>
      )}
    </header>
  );
}
