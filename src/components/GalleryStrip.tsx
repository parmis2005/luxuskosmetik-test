import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "@/components/SocialIcons";
import { brand } from "@/lib/data";

const images = [
  "/images/facial-3.jpg",
  "/images/product-2.jpg",
  "/images/interior-2.jpg",
  "/images/lifestyle-2.jpg",
  "/images/texture-2.jpg",
  "/images/team-1.jpg",
];

export default function GalleryStrip() {
  return (
    <section className="bg-sage-pale/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-deep">
              Impressionen
            </span>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
              Ein Blick in unser Institut
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-rose-deep"
          >
            <InstagramIcon size={17} />
            {brand.instagram}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {images.map((src, i) => (
            <Link
              key={src}
              href="/galerie"
              className={`group relative aspect-square overflow-hidden rounded-2xl ${
                i === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-auto" : ""
              }`}
            >
              <Image
                src={src}
                alt="LUMARA Kosmetikinstitut Impression"
                fill
                sizes="(min-width: 1024px) 16vw, 45vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/10" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
