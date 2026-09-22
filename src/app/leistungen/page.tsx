import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { serviceCategories, signaturePackages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Leistungen & Preise | LUMARA Kosmetikinstitut",
  description:
    "Gesichtsbehandlungen, Microneedling, Peelings, Wimpernstyling und Wellness-Extras bei LUMARA Kosmetikinstitut München – transparente Preise.",
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen & Preise"
        title="Behandlungen für jede Hautbedürfnis"
        subtitle="Transparente Preise, individuelle Beratung und Wirkstoffe, auf die Sie sich verlassen können."
        image="/images/facial-2.jpg"
        video="/videos/leistungen-hero.mp4"
      />

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {signaturePackages.map((pkg) => (
            <div
              key={pkg.name}
              className="relative overflow-hidden rounded-3xl bg-ink p-8 text-cream"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-pale">
                Signature Ritual
              </span>
              <h3 className="mt-3 font-display text-2xl">{pkg.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/75">{pkg.description}</p>
              <div className="mt-6 flex items-center justify-between border-t border-cream/15 pt-5">
                <span className="flex items-center gap-1.5 text-xs text-cream/70">
                  <Clock size={14} /> {pkg.duration}
                </span>
                <span className="font-display text-2xl text-rose-pale">{pkg.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-10">
        <div className="flex flex-col gap-16">
          {serviceCategories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-28">
              <div className="border-b border-line pb-6">
                <h2 className="font-display text-3xl font-light text-ink sm:text-4xl">
                  {cat.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
                  {cat.intro}
                </p>
              </div>

              <div className="mt-6 divide-y divide-line">
                {cat.items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/leistungen/${item.slug}`}
                    className="group flex flex-col gap-2 py-6 transition-colors sm:flex-row sm:items-start sm:justify-between sm:gap-8"
                  >
                    <div className="sm:max-w-lg">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="font-display text-lg text-ink transition-colors group-hover:text-rose-deep">
                          {item.name}
                        </h3>
                        <span className="flex items-center gap-1 text-xs text-ink-soft">
                          <Clock size={12} /> {item.duration}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                        {item.description}
                      </p>
                    </div>
                    <span className="shrink-0 font-display text-xl text-rose-deep">
                      {item.price}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl bg-rose-pale/50 p-10 text-center">
          <p className="max-w-md text-sm leading-relaxed text-ink-soft">
            Unsicher, welche Behandlung zu Ihnen passt? Wir beraten Sie
            gerne persönlich und erstellen Ihnen einen individuellen
            Pflegeplan.
          </p>
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2 rounded-full bg-rose-deep px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-ink"
          >
            Kostenlose Beratung anfragen
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
