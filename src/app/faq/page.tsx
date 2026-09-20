import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Häufige Fragen | LUMARA Kosmetikinstitut",
  description:
    "Antworten auf häufige Fragen rund um Behandlungen, Termine und Gutscheine bei LUMARA Kosmetikinstitut München.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Häufige Fragen"
        title="Gut zu wissen"
        subtitle="Die wichtigsten Antworten rund um Ihren Besuch bei LUMARA – kurz und verständlich."
        image="/images/texture-2.jpg"
      />

      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-24">
        <FaqAccordion />
        <p className="mt-8 text-center text-sm text-ink-soft">
          Ihre Frage war nicht dabei?{" "}
          <a href="/kontakt" className="font-semibold text-rose-deep hover:underline">
            Schreiben Sie uns gerne
          </a>
          .
        </p>
      </section>

      <CTASection />
    </>
  );
}
