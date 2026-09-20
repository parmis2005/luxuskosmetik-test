import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, HeartHandshake, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { team, brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Über uns | LUMARA Kosmetikinstitut",
  description:
    "Lernen Sie das Team von LUMARA Kosmetikinstitut kennen – Ihre Experten für achtsame Gesichtspflege und moderne Kosmetikbehandlungen in München.",
};

const teamImages: Record<string, string | undefined> = {
  "Lena Hartmann": "/images/team-1.jpg",
  "Sophie Weber": "/images/team-2.jpg",
  "Mara Klein": "/images/team-3.jpg",
  "Nina Brandt": undefined,
};

const values = [
  {
    icon: Leaf,
    title: "Bewusste Wirkstoffe",
    text: "Wir setzen auf hochwertige, hautverträgliche Formulierungen ohne unnötige Zusatzstoffe.",
  },
  {
    icon: HeartHandshake,
    title: "Persönliche Beratung",
    text: "Jede Behandlung beginnt mit einer ausführlichen Hautanalyse und individueller Empfehlung.",
  },
  {
    icon: ShieldCheck,
    title: "Geprüfte Expertise",
    text: "Unser gesamtes Team bildet sich kontinuierlich in neuen kosmetischen Verfahren fort.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title={`Seit ${brand.founded} für strahlende Haut`}
        subtitle="Lernen Sie die Menschen hinter LUMARA kennen und erfahren Sie, wofür wir stehen."
        image="/images/team-2.jpg"
      />

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-deep">
              Unsere Geschichte
            </span>
            <h2 className="mt-4 font-display text-3xl font-light leading-tight text-ink sm:text-4xl">
              Aus Leidenschaft für gesunde Haut gegründet
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              LUMARA entstand aus dem Wunsch, professionelle Kosmetik mit
              echtem Wohlfühlmoment zu verbinden. Gründerin Lena Hartmann
              eröffnete das Institut {brand.founded} in München – mit dem klaren
              Ziel, Hautpflege verständlicher, persönlicher und wirksamer zu
              gestalten.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Heute begleitet ein eingespieltes Team aus Kosmetikerinnen und
              Spezialistinnen jeden Gast auf seinem individuellen Weg zu
              gesunder, strahlender Haut.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/facial-1.jpg"
            >
              <source src="/videos/about.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="bg-cream-dark py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl bg-white/60 p-8">
                <v.icon className="text-rose-deep" size={28} />
                <h3 className="mt-4 font-display text-xl text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-deep">
            Unser Team
          </span>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
            Die Gesichter hinter LUMARA
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => {
            const img = teamImages[member.name];
            return (
              <div key={member.name} className="text-center">
                <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-full bg-rose-pale">
                  {img ? (
                    <Image
                      src={img}
                      alt={member.name}
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-display text-4xl text-rose-deep">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                </div>
                <h3 className="mt-5 font-display text-lg text-ink">{member.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-rose-deep">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{member.bio}</p>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
