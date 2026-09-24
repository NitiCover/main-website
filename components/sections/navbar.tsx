"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DEMO_HREF } from "@/lib/site-content";

const links = [
  { href: "/platform", label: "Platform" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/investors", label: "Investors" },
  { href: "/careers", label: "Careers" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-black/5 backdrop-blur transition-[backdrop-filter,background-color,box-shadow] duration-300",
        scrolled
          ? "bg-white/95 shadow-[0_8px_30px_-15px_rgba(14,44,84,0.25)] backdrop-blur-lg"
          : "bg-white/80 shadow-none backdrop-blur-sm",
      )}
    >
      <motion.div
        animate={{ height: scrolled ? 80 : 92 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="mx-auto flex max-w-6xl items-center justify-between px-6"
      >
        <Link href={isHome ? "#hero" : "/"} className="flex items-center gap-2">
          <Image
            src="/niticover-cropped-logo.png"
            alt="NitiCover"
            width={240}
            height={170}
            className="h-20 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const isAnchor = link.href.startsWith("#");
            const active = pathname === link.href;
            const className = cn(
              "relative text-sm font-medium transition-colors hover:text-[#0e2c54]",
              active ? "text-[#0e2c54]" : "text-[#0e2c54]/80",
            );
            return isAnchor ? (
              <a
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                className={className}
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className={className}>
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-0 -bottom-1.5 h-0.5 rounded-full bg-[#3087d0]"
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <Button
          size="lg"
          nativeButton={false}
          className="bg-[#0e2c54] text-white hover:bg-[#0e2c54]/85"
          render={<a href={DEMO_HREF}>Book a demo</a>}
        />
      </motion.div>
    </header>
  );
}
