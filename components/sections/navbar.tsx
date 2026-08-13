"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#what-we-do", label: "What We Do" },
  { href: "#how-different", label: "How We're Different" },
  { href: "#benefits", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

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
        <Link href="#hero" className="flex items-center gap-2">
          <Image
            src="/niticover-cropped-logo.png"
            alt="NitiCover"
            width={240}
            height={170}
            className="h-20 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#0e2c54]/80 transition-colors hover:text-[#0e2c54]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button
          size="lg"
          nativeButton={false}
          className="bg-[#0e2c54] text-white hover:bg-[#0e2c54]/85"
          render={<a href="#contact">Get a Quote</a>}
        />
      </motion.div>
    </header>
  );
}
