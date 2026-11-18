"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ButtonLink } from "@/components/brand";
import { DEMO_HREF, navLinks } from "@/lib/site-links";
import { cn } from "@/lib/utils";

const pill =
  "rounded-full px-[18px] py-[9px] font-headline text-lg leading-none transition-colors";
const linkClass = (active: boolean) =>
  cn(pill, "text-niti-teal hover:bg-niti-teal/8", active && "bg-niti-teal/8");

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
              aria-current={link.href === pathname ? "page" : undefined}
              className={linkClass(link.href === pathname)}
            >
              {link.label}
            </Link>
          ))}
          <ButtonLink href={DEMO_HREF} size="sm">
            Book a demo
          </ButtonLink>
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
              aria-current={link.href === pathname ? "page" : undefined}
              className={linkClass(link.href === pathname)}
            >
              {link.label}
            </Link>
          ))}
          <div onClick={() => setOpen(false)} className="mt-1 flex flex-col">
            <ButtonLink href={DEMO_HREF} size="sm">
              Book a demo
            </ButtonLink>
          </div>
        </nav>
      )}
    </header>
  );
}
