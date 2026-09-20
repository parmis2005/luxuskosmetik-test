import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-rose-deep py-24 lg:py-28">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cream/10" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-ink/10" />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <h2 className="font-display text-4xl font-light leading-tight text-cream sm:text-5xl">
          Bereit für Ihre Auszeit?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream/85">
          Vereinbaren Sie noch heute Ihren persönlichen Termin und erleben
          Sie achtsame Kosmetik auf höchstem Niveau.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/kontakt"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-cream px-8 py-4 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Termin vereinbaren
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+498945238871"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/50 px-8 py-4 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
          >
            +49 89 4523 8871
          </a>
        </div>
      </div>
    </section>
  );
}
