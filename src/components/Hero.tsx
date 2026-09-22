"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Same rose color-grade used on every subpage PageHero, so the tone is consistent from the first screen. */}
      <div className="absolute inset-0 bg-rose-deep/35 mix-blend-color" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-ink/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 sm:pb-28 lg:px-10">
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.35em] text-rose-pale/90">
          Kosmetikinstitut · München
        </p>
        <h1
          className="animate-fade-up mt-6 max-w-3xl font-display text-5xl font-light leading-[1.05] text-cream sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.1s" }}
        >
          Zeitlose Schönheit,
          <br />
          <span className="italic text-rose-pale">achtsam</span> gepflegt.
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-lg text-base leading-relaxed text-cream/80 sm:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          Individuelle Gesichtsbehandlungen, moderne Hauttherapien und
          Momente der Ruhe – für einen Teint, der von innen strahlt.
        </p>
        <div
          className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            href="/kontakt"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-rose-deep px-8 py-4 text-sm font-semibold text-cream transition-colors hover:bg-cream hover:text-ink"
          >
            Termin vereinbaren
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/leistungen"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-8 py-4 text-sm font-semibold text-cream transition-colors hover:border-cream hover:bg-cream/10"
          >
            Leistungen entdecken
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/70 sm:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Entdecken</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}
