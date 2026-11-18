import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { footerGroups } from "@/lib/site-links";

const footerLinkClass =
  "font-inter text-base text-niti-steel transition-colors hover:text-niti-deep";

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  // mailto: and other schemes are not routes, so they get a plain anchor.
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={footerLinkClass}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={footerLinkClass}>
      {children}
    </a>
  );
}

// Figma frame 225:74.
export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 overflow-hidden bg-linear-to-b from-white to-[#f6f6f6] px-4 pt-[72px] sm:px-8 lg:px-20">
      <div className="flex w-full flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col items-start gap-4">
          <Link
            href="/"
            aria-label="NitiCover home"
            className="rounded-full bg-niti-deep py-2.5 pr-6 pl-5"
          >
            <Image
              src="/landing/footer-logo.png"
              alt="NitiCover"
              width={146}
              height={31}
              className="h-[30.7px] w-auto"
            />
          </Link>
          <p className="font-inter text-[15px] leading-[1.6] text-niti-steel">
            India’s 1st AI platform that runs
            <br />
            insurance broking end-to-end.
            <br />
            IRDAI Broker Licence No. — to be added
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-[72px] gap-y-8">
          {footerGroups.map((group) => (
            <div key={group.heading} className="flex flex-col gap-3">
              <h2 className="font-display text-[15px] font-semibold text-niti-deep">{group.heading}</h2>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="flex w-full flex-col gap-2 border-t border-[rgba(217,217,217,0.1)] pt-6 font-inter text-sm text-niti-steel sm:flex-row sm:justify-between">
        <p>© 2026 NitiCover Insurance Brokers Pvt. Ltd.</p>
        <p>Insurance is the subject matter of solicitation.</p>
      </div>

      {/* Oversized wordmark (Figma "Union", 1203 x 249). */}
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative SVG, width-driven */}
      <img
        src="/landing/footer-wordmark.svg"
        alt=""
        aria-hidden="true"
        width={1203}
        height={249}
        className="h-auto w-full max-w-[1203px] select-none"
      />
    </footer>
  );
}
