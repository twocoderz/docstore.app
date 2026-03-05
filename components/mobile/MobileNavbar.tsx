"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Mobile navbar: logo (left) + CTA button (right).
 * The button smooth-scrolls to the #download section.
 * No hamburger, no navigation links — keep it minimal for mobile.
 */
export default function MobileNavbar() {
  const scrollToDownload = () => {
    const el = document.getElementById("download");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="flex items-center justify-between px-5 h-16">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="DocStore"
            width={28}
            height={28}
            className="h-10 w-10"
            priority
          />
        </Link>

        {/* CTA — scrolls to store badges */}
        <button
          onClick={scrollToDownload}
          className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full shadow-md active:scale-95 transition-all"
        >
          Télécharger l&apos;app
        </button>
      </div>
    </nav>
  );
}
