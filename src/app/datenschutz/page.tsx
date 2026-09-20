import type { Metadata } from "next";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Datenschutz | LUMARA Kosmetikinstitut",
  description: "Datenschutzerklärung von LUMARA Kosmetikinstitut München.",
};

export default function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-32 lg:px-10">
      <h1 className="font-display text-4xl font-light text-ink sm:text-5xl">
        Datenschutzerklärung
      </h1>

      <div className="mt-10 space-y-10 text-sm leading-relaxed text-ink-soft">
        <div>
          <h2 className="font-display text-xl text-ink">1. Verantwortlicher</h2>
          <p className="mt-3">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            {brand.fullName}, {brand.address.street}, {brand.address.zip}{" "}
            {brand.address.city}, E-Mail: {brand.email}
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink">
            2. Erhebung und Speicherung personenbezogener Daten
          </h2>
          <p className="mt-3">
            Beim Besuch unserer Website erfassen wir automatisch
            Informationen, die Ihr Browser übermittelt (z. B. IP-Adresse,
            Datum und Uhrzeit der Anfrage, Browsertyp). Diese Daten dienen
            ausschließlich der technischen Bereitstellung der Website und
            werden nicht mit anderen Datenquellen zusammengeführt.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink">3. Kontaktformular</h2>
          <p className="mt-3">
            Wenn Sie uns über unser Kontaktformular Anfragen zukommen
            lassen, werden Ihre Angaben aus dem Formular inklusive der von
            Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
            Anfrage und für den Fall von Anschlussfragen bei uns
            gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
            weiter.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink">4. Cookies</h2>
          <p className="mt-3">
            Diese Website verwendet ausschließlich technisch notwendige
            Cookies, um grundlegende Funktionen sicherzustellen. Es werden
            keine Tracking- oder Marketing-Cookies ohne Ihre vorherige
            Einwilligung eingesetzt.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink">
            5. Externe Kartendarstellung (OpenStreetMap)
          </h2>
          <p className="mt-3">
            Zur Darstellung unseres Standortes nutzen wir eingebettete
            Kartenausschnitte von OpenStreetMap. Beim Aufruf der
            entsprechenden Seite kann eine Verbindung zu Servern von
            OpenStreetMap hergestellt und dabei Ihre IP-Adresse übertragen
            werden. Weitere Informationen finden Sie in der
            Datenschutzerklärung von OpenStreetMap.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink">
            6. Ihre Rechte als betroffene Person
          </h2>
          <p className="mt-3">
            Ihnen stehen jederzeit die Rechte auf Auskunft, Berichtigung,
            Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
            sowie Widerspruch gegen die Verarbeitung Ihrer
            personenbezogenen Daten zu. Wenden Sie sich hierzu gerne an{" "}
            {brand.email}.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink">7. Speicherdauer</h2>
          <p className="mt-3">
            Wir speichern personenbezogene Daten nur so lange, wie dies
            zur Erfüllung der jeweiligen Zwecke erforderlich ist oder
            gesetzliche Aufbewahrungsfristen dies vorsehen.
          </p>
        </div>

        <p className="pt-6 text-xs text-ink-soft/70">
          Hinweis: Diese Webseite ist ein fiktiver Designentwurf. Alle
          genannten Angaben sind frei erfunden und entsprechen keinem real
          existierenden Unternehmen.
        </p>
      </div>
    </section>
  );
}
