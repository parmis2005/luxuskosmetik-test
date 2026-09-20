import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-deep">
          Kundenstimmen
        </span>
        <h2 className="mt-4 font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
          Was unsere Gäste sagen
        </h2>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-3xl border border-line bg-white/60 p-7"
          >
            <Quote className="text-rose-pale" size={28} />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
              {t.text}
            </blockquote>
            <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
              <figcaption className="text-sm font-semibold text-ink">{t.name}</figcaption>
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
