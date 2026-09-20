import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative flex h-[56vh] min-h-[380px] w-full items-end overflow-hidden bg-ink">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/50" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-10">
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
