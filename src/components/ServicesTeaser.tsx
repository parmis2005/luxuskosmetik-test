import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { serviceCategories } from "@/lib/data";

const images: Record<string, string> = {
  gesicht: "/images/facial-1.jpg",
  microneedling: "/images/facial-2.jpg",
  augen: "/images/product-1.jpg",
  wellness: "/images/lifestyle-1.jpg",
};

export default function ServicesTeaser() {
  return (
    <section className="bg-cream-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-deep">
              Unsere Leistungen
            </span>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
              Behandlungen, abgestimmt auf Ihre Haut
            </h2>
          </div>
          <Link
            href="/leistungen"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
          >
            Alle Leistungen
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/leistungen#${cat.id}`}
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-3xl bg-ink"
            >
              <Image
                src={images[cat.id]}
                alt={cat.title}
                fill
                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
                className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-rose-deep/30 mix-blend-color" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="relative z-10 p-6">
                <h3 className="font-display text-xl text-cream">{cat.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-cream/70">
                  {cat.items.length} Behandlungen
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-pale opacity-0 transition-opacity group-hover:opacity-100">
                  Entdecken <ArrowUpRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
