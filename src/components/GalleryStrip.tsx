import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "@/components/SocialIcons";
import { brand } from "@/lib/data";

type Tile = {
  type: "video" | "image";
  src: string;
  poster?: string;
  caption: string;
  span: string;
};

const tiles: Tile[] = [
  {
    type: "video",
    src: "/videos/gallery.mp4",
    poster: "/images/facial-3.jpg",
    caption: "Pflege in Bewegung",
    span: "col-span-2 row-span-2",
  },
  {
    type: "image",
    src: "/images/interior-2.jpg",
    caption: "Unser Spa-Bereich",
    span: "col-span-1 row-span-2",
  },
  {
    type: "image",
    src: "/images/product-2.jpg",
    caption: "Pflegeserum",
    span: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: "/images/texture-1.jpg",
    caption: "Naturkosmetik",
    span: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: "/images/team-1.jpg",
    caption: "Unser Team",
    span: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: "/images/lifestyle-2.jpg",
    caption: "Ruhe & Entspannung",
    span: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: "/images/team-2.jpg",
    caption: "Persönliche Beratung",
    span: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: "/images/texture-2.jpg",
    caption: "Reine Frische",
    span: "col-span-1 row-span-1",
  },
];

export default function GalleryStrip() {
  return (
    <section className="bg-rose-pale/40 py-24 lg:py-32">
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

        <div className="mt-12 grid grid-flow-dense grid-cols-2 auto-rows-[170px] gap-4 sm:grid-cols-4 sm:auto-rows-[190px] lg:grid-cols-6 lg:auto-rows-[210px]">
          {tiles.map((tile) => (
            <Link
              key={tile.src}
              href="/galerie"
              className={`group relative overflow-hidden rounded-2xl bg-ink ${tile.span}`}
            >
              {tile.type === "video" ? (
                <video
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={tile.poster}
                >
                  <source src={tile.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={tile.src}
                  alt={tile.caption}
                  fill
                  sizes="(min-width: 1024px) 16vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-rose-deep/25 mix-blend-color" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
              <span className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-wider text-cream/90">
                {tile.caption}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
