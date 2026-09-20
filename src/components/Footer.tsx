import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { brand, navLinks, legalLinks } from "@/lib/data";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:px-10">
        <div>
          <p className="font-display text-2xl tracking-[0.15em]">{brand.name}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            {brand.claim} Ihr Institut für achtsame Gesichtspflege und moderne
            Kosmetikbehandlungen im Herzen Münchens.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-rose hover:text-rose"
            >
              <InstagramIcon size={17} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-rose hover:text-rose"
            >
              <FacebookIcon size={17} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
            Navigation
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/" className="text-cream/80 hover:text-rose">
                Startseite
              </Link>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-cream/80 hover:text-rose">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
            Öffnungszeiten
          </p>
          <ul className="mt-5 space-y-3 text-sm text-cream/80">
            {brand.hours.map((h) => (
              <li key={h.day} className="flex items-start gap-2">
                <Clock size={15} className="mt-0.5 shrink-0 text-rose" />
                <span>
                  {h.day}
                  <br />
                  <span className="text-cream/60">{h.time}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
            Kontakt
          </p>
          <ul className="mt-5 space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0 text-rose" />
              <span>
                {brand.address.street}
                <br />
                {brand.address.zip} {brand.address.city}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} className="shrink-0 text-rose" />
              <a href={`tel:${brand.phoneHref}`} className="hover:text-rose">
                {brand.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="shrink-0 text-rose" />
              <a href={`mailto:${brand.email}`} className="hover:text-rose">
                {brand.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>
            © {new Date().getFullYear()} {brand.fullName}. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-rose">
                {l.label}
              </Link>
            ))}
            <span>Fiktive Musterseite · Alle Angaben frei erfunden</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
