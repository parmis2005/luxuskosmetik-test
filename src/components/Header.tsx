"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { brand, navLinks } from "@/lib/data";
import clsx from "clsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        solid
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-line)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className={clsx(
            "font-display text-2xl tracking-[0.15em] transition-colors",
            solid ? "text-ink" : "text-cream"
          )}
        >
          {brand.name}
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm font-medium tracking-wide transition-colors",
                solid ? "text-ink-soft hover:text-rose-deep" : "text-cream/90 hover:text-cream"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 xl:flex">
          <a
            href={`tel:${brand.phoneHref}`}
            className={clsx(
              "hidden items-center gap-2 text-sm font-medium transition-colors 2xl:flex",
              solid ? "text-ink-soft" : "text-cream/90"
            )}
          >
            <Phone size={15} />
            {brand.phone}
          </a>
          <Link
            href="/kontakt"
            className="rounded-full bg-rose-deep px-6 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-ink"
          >
            Termin buchen
          </Link>
        </div>

        <button
          aria-label="Menü öffnen"
          onClick={() => setOpen((v) => !v)}
          className={clsx(
            "flex items-center justify-center rounded-full p-2 transition-colors xl:hidden",
            solid ? "text-ink" : "text-cream"
          )}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        className={clsx(
          "overflow-hidden bg-cream transition-[max-height] duration-400 ease-in-out xl:hidden",
          open ? "max-h-[480px]" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-rose-pale/50 hover:text-rose-deep"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${brand.phoneHref}`}
            className="flex items-center gap-2 px-3 py-3 text-base font-medium text-ink-soft"
          >
            <Phone size={16} />
            {brand.phone}
          </a>
          <Link
            href="/kontakt"
            className="mt-2 rounded-full bg-rose-deep px-6 py-3 text-center text-sm font-semibold text-cream"
          >
            Termin buchen
          </Link>
        </nav>
      </div>
    </header>
  );
}
