import type { Metadata } from "next";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impressum | LUMARA Kosmetikinstitut",
  description: "Impressum und rechtliche Angaben von LUMARA Kosmetikinstitut München.",
};

export default function ImpressumPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-32 lg:px-10">
      <h1 className="font-display text-4xl font-light text-ink sm:text-5xl">Impressum</h1>

      <div className="mt-10 space-y-10 text-sm leading-relaxed text-ink-soft">
        <div>
          <h2 className="font-display text-xl text-ink">Angaben gemäß § 5 TMG</h2>
          <p className="mt-3">
            {brand.fullName}
            <br />
            Inhaberin: {brand.owner}
            <br />
            {brand.address.street}
            <br />
            {brand.address.zip} {brand.address.city}
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink">Kontakt</h2>
          <p className="mt-3">
            Telefon: {brand.phone}
            <br />
            E-Mail: {brand.email}
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink">Registereintrag</h2>
          <p className="mt-3">
            Eintragung im Handelsregister.
            <br />
            Registergericht: {brand.registerCourt}
            <br />
            Registernummer: {brand.registerNumber}
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink">Umsatzsteuer-ID</h2>
          <p className="mt-3">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            {brand.vatId}
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="mt-3">
            {brand.owner}
            <br />
            {brand.address.street}, {brand.address.zip} {brand.address.city}
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink">EU-Streitschlichtung</h2>
          <p className="mt-3">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit. Wir sind nicht bereit oder
            verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink">Haftungshinweis</h2>
          <p className="mt-3">
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
            Haftung für die Inhalte externer Links. Für den Inhalt der
            verlinkten Seiten sind ausschließlich deren Betreiber
            verantwortlich.
          </p>
        </div>

        <p className="pt-6 text-xs text-ink-soft/70">
          Hinweis: Diese Webseite ist ein fiktiver Designentwurf. Alle
          genannten Angaben, Namen und Kontaktdaten sind frei erfunden und
          entsprechen keinem real existierenden Unternehmen.
        </p>
      </div>
    </section>
  );
}
