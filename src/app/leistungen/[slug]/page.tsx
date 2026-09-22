import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { allServiceItems, serviceCategories } from "@/lib/data";

export function generateStaticParams() {
  return allServiceItems.map((item) => ({ slug: item.slug }));
}

function getItem(slug: string) {
  return allServiceItems.find((item) => item.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) return {};
  return {
    title: `${item.name} | LUMARA Kosmetikinstitut`,
    description: item.description,
  };
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) notFound();

  const category = serviceCategories.find((c) => c.id === item.categoryId);
  const related = category?.items.filter((i) => i.slug !== item.slug).slice(0, 3) ?? [];

  return (
    <>
      <PageHero
        eyebrow={item.categoryTitle}
        title={item.name}
        subtitle={item.description}
        image={item.image}
        backHref="/leistungen"
        backLabel="Alle Leistungen"
      />

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <p className="text-base leading-relaxed text-ink-soft">{item.longDescription}</p>

            <h2 className="mt-10 font-display text-2xl text-ink">Ihre Vorteile</h2>
            <ul className="mt-5 space-y-3">
              {item.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-ink-soft">
                  <Check size={18} className="mt-0.5 shrink-0 text-sage" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="h-fit rounded-3xl border border-line bg-white/60 p-7">
            <div className="flex items-center justify-between border-b border-line pb-5">
              <span className="flex items-center gap-1.5 text-sm text-ink-soft">
                <Clock size={15} /> {item.duration}
              </span>
              <span className="font-display text-2xl text-rose-deep">{item.price}</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">
              Jetzt Termin für &ldquo;{item.name}&rdquo; anfragen – wir melden uns
              innerhalb von 24 Stunden mit passenden Terminvorschlägen.
            </p>
            <Link
              href="/kontakt"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose-deep px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-ink"
            >
              Termin anfragen
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 border-t border-line pt-12">
            <h2 className="font-display text-2xl text-ink">
              Weitere Behandlungen aus {item.categoryTitle}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/leistungen/${r.slug}`}
                  className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl bg-ink"
                >
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, 45vw"
                    className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-rose-deep/30 mix-blend-color" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <div className="relative z-10 p-5">
                    <h3 className="font-display text-base text-cream">{r.name}</h3>
                    <span className="mt-1 block text-xs text-cream/70">{r.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <CTASection />
    </>
  );
}
