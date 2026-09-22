import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Gift } from "lucide-react";
import PageHero from "@/components/PageHero";
import { giftVouchers, brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gutscheine | LUMARA Kosmetikinstitut",
  description:
    "Verschenken Sie Wohlbefinden mit einem LUMARA Geschenkgutschein – für Gesichtsbehandlungen, Wellness-Rituale und mehr.",
};

export default function GutscheinePage() {
  return (
    <>
      <PageHero
        eyebrow="Gutscheine"
        title="Das Geschenk der Selbstfürsorge"
        subtitle="Ob Geburtstag, Jubiläum oder einfach so – schenken Sie einen Moment purer Entspannung."
        image="/images/gift-box.jpg"
        video="/videos/gutscheine-hero.mp4"
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-deep">
              Wählen Sie einen Wert
            </span>
            <h2 className="mt-4 font-display text-3xl font-light leading-tight text-ink sm:text-4xl">
              Gutscheine für jeden Anlass
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
              Unsere Gutscheine sind flexibel für alle Behandlungen und
              Produkte einlösbar, zwei Jahre gültig und werden in einer
              stilvollen Geschenkverpackung überreicht.
            </p>
            <Link
              href="/kontakt"
              className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-rose-deep px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-ink"
            >
              Gutschein anfragen
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-4 text-xs text-ink-soft">
              Schreiben Sie uns einfach den gewünschten Betrag und
              Empfänger in Ihre Nachricht – wir kümmern uns um den Rest.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/gift-box.jpg"
              alt="LUMARA Geschenkgutschein"
              fill
              sizes="(min-width: 1024px) 36rem, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {giftVouchers.map((v) => (
            <div
              key={v.title}
              className="flex flex-col rounded-3xl border border-line bg-white/60 p-7"
            >
              <Gift className="text-rose-deep" size={26} />
              <p className="mt-5 font-display text-3xl text-ink">{v.amount}</p>
              <h3 className="mt-2 text-sm font-semibold uppercase tracking-wide text-rose-deep">
                {v.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {v.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-sage-pale/40 p-8 text-center sm:p-10">
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-ink-soft">
            Sie erhalten Ihren Gutschein bequem per E-Mail zum Selbstausdrucken
            oder holen ihn persönlich in unserem Institut in der{" "}
            {brand.address.street} ab.
          </p>
        </div>
      </section>
    </>
  );
}
