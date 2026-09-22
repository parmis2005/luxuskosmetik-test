import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  video,
  backHref,
  backLabel,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  video?: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <section className="relative flex h-[56vh] min-h-[380px] w-full items-end overflow-hidden bg-ink">
      {video ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={image}
          aria-hidden="true"
        >
          <source src={video} type="video/mp4" />
          Ihr Browser unterstützt keine Hintergrundvideos.
        </video>
      ) : (
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
      )}
      {/* Uniform rose color-grade so every subpage banner shares the same tonal mood, regardless of the source photo's original colors. */}
      <div className="absolute inset-0 bg-rose-deep/35 mix-blend-color" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/40" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-10">
        {backHref && (
          <Link
            href={backHref}
            className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cream/80 hover:text-cream"
          >
            <ArrowLeft size={14} /> {backLabel}
          </Link>
        )}
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-pale/90">
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-light leading-tight text-cream sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-cream/80">{subtitle}</p>
      </div>
    </section>
  );
}
