import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt | LUMARA Kosmetikinstitut",
  description:
    "Vereinbaren Sie Ihren Termin bei LUMARA Kosmetikinstitut in München. Adresse, Öffnungszeiten, Telefon und Anfahrt.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Wir freuen uns auf Sie"
        subtitle="Vereinbaren Sie unkompliziert Ihren Termin oder stellen Sie uns Ihre Fragen – persönlich, telefonisch oder per Formular."
        image="/images/interior-1.jpg"
        video="/videos/kontakt-hero.mp4"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-3">
          <InfoCard
            icon={MapPin}
            title="Adresse"
            lines={[brand.address.street, `${brand.address.zip} ${brand.address.city}`]}
          />
          <InfoCard
            icon={Phone}
            title="Telefon"
            lines={[brand.phone]}
            href={`tel:${brand.phoneHref}`}
          />
          <InfoCard icon={Mail} title="E-Mail" lines={[brand.email]} href={`mailto:${brand.email}`} />
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-deep">
              Terminanfrage
            </span>
            <h2 className="mt-4 font-display text-3xl font-light leading-tight text-ink sm:text-4xl">
              Schreiben Sie uns
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
              Füllen Sie das Formular aus und wir melden uns innerhalb von
              24 Stunden mit passenden Terminvorschlägen bei Ihnen.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="h-80 lg:h-[420px]">
              <MapEmbed />
            </div>
            <div className="rounded-3xl border border-line bg-white/60 p-7">
              <div className="flex items-center gap-2 text-rose-deep">
                <Clock size={17} />
                <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                  Öffnungszeiten
                </span>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {brand.hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between border-b border-line pb-2.5 last:border-none last:pb-0">
                    <span className="text-ink-soft">{h.day}</span>
                    <span className="font-medium text-ink">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: typeof MapPin;
  title: string;
  lines: string[];
  href?: string;
}) {
  const content = (
    <div className="rounded-3xl border border-line bg-white/60 p-7 transition-colors hover:border-rose-deep/40">
      <Icon className="text-rose-deep" size={24} />
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-ink-soft">
        {title}
      </p>
      <div className="mt-2 text-base text-ink">
        {lines.map((l) => (
          <p key={l}>{l}</p>
        ))}
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}
