import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Galerie | LUMARA Kosmetikinstitut",
  description:
    "Impressionen aus dem LUMARA Kosmetikinstitut in München – Behandlungsräume, Produkte und Momente der Ruhe.",
};

const images = [
  { src: "/images/facial-1.jpg", alt: "Gesichtsbehandlung im Detail", span: "row-span-2" },
  { src: "/images/product-1.jpg", alt: "Naturkosmetik Flatlay", span: "" },
  { src: "/images/interior-2.jpg", alt: "Moderner Spa-Bereich", span: "" },
  { src: "/images/texture-1.jpg", alt: "Blütenblätter Makroaufnahme", span: "" },
  { src: "/images/facial-2.jpg", alt: "Entspannende Gesichtspflege", span: "row-span-2" },
  { src: "/images/interior-1.jpg", alt: "Behandlungsraum mit Wellness-Ambiente", span: "" },
  { src: "/images/product-2.jpg", alt: "Serum Nahaufnahme", span: "" },
  { src: "/images/lifestyle-1.jpg", alt: "Entspannungsmoment mit Kerzen", span: "" },
  { src: "/images/facial-3.jpg", alt: "Gesichtsbehandlung Nahaufnahme", span: "" },
  { src: "/images/texture-2.jpg", alt: "Wassertropfen Makroaufnahme", span: "" },
  { src: "/images/team-1.jpg", alt: "Kosmetikexpertin bei LUMARA", span: "row-span-2" },
  { src: "/images/lifestyle-2.jpg", alt: "Wellness Still-Life", span: "" },
];

export default function GaleriePage() {
  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="Momente bei LUMARA"
        subtitle="Ein visueller Einblick in unsere Behandlungen, Räume und die kleinen Details, die den Unterschied machen."
        image="/images/interior-2.jpg"
        video="/videos/galerie-hero.mp4"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 sm:auto-rows-[220px] lg:grid-cols-4">
          {images.map((img) => (
            <div
              key={img.src + img.alt}
              className={`group relative overflow-hidden rounded-2xl bg-cream-dark ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 32vw, 48vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="p-4 text-xs font-medium text-cream">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
