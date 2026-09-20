import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import StatsBar from "@/components/StatsBar";
import ServicesTeaser from "@/components/ServicesTeaser";
import Testimonials from "@/components/Testimonials";
import GalleryStrip from "@/components/GalleryStrip";
import CTASection from "@/components/CTASection";
import MapEmbed from "@/components/MapEmbed";
import { brand } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <StatsBar />
      <ServicesTeaser />
      <Testimonials />
      <GalleryStrip />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-deep">
              Besuchen Sie uns
            </span>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
              Mitten in München, ganz in Ruhe.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
              Unser Institut liegt zentral und ist bequem mit Auto und
              öffentlichen Verkehrsmitteln erreichbar.
            </p>
            <div className="mt-8 flex items-start gap-3 text-sm text-ink-soft">
              <MapPin size={18} className="mt-0.5 shrink-0 text-rose-deep" />
              <span>
                {brand.address.street}, {brand.address.zip} {brand.address.city}
              </span>
            </div>
            <Link
              href="/kontakt"
              className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
            >
              Route & Kontakt
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="h-80 lg:h-full">
            <MapEmbed />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
