import Image from "next/image";

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
        <p className="text-xs text-[#52627a]/70">
          contact@niticover.com · +91 98772 70734
        </p>
        <p className="text-xs text-[#52627a]/60">
          © {new Date().getFullYear()} NitiCover. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
