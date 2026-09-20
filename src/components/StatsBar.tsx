import { stats } from "@/lib/data";

export default function StatsBar() {
  return (
    <section className="bg-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-14 sm:grid-cols-4 lg:px-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl font-light text-cream sm:text-4xl">
              {s.value}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream/60">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
