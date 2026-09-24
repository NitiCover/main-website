import Image from "next/image";
import Link from "next/link";
import {
  COMPANY_NAME,
  SITE_EMAIL,
  SITE_PHONE_DISPLAY,
} from "@/lib/site-content";

const links = [
  { href: "/platform", label: "Platform" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/investors", label: "Investors" },
  { href: "/waitlist", label: "Waitlist" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/90 py-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center">
        <Image
          src="/niticover-logo.png"
          alt="NitiCover"
          width={140}
          height={70}
          className="h-32 w-auto"
        />
        <p className="text-sm text-[#52627a]">
          Smart Insurance, Secure Future.
        </p>
        <nav className="my-1 flex flex-wrap justify-center gap-x-5 gap-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#0e2c54]/80 transition-colors hover:text-[#3087d0]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-[#52627a]/70">
          {SITE_EMAIL} · {SITE_PHONE_DISPLAY}
        </p>
        <p className="text-xs text-[#52627a]/60">
          © {new Date().getFullYear()} {COMPANY_NAME} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
