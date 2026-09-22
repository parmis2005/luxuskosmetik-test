import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function Intro() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-rose-pale">
            <Image
              src="/images/interior-1.jpg"
              alt="Behandlungsraum im LUMARA Kosmetikinstitut"
              fill
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden aspect-[4/3] w-56 overflow-hidden rounded-[1.5rem] border-8 border-cream shadow-xl sm:block">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/texture-1.jpg"
            >
              <source src="/videos/about.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 text-rose-deep">
            <Sparkles size={16} />
            <span className="text-xs font-semibold uppercase tracking-[0.3em]">
              Unsere Philosophie
            </span>
          </div>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
            Pflege, die zuhört —
            <br />
            <span className="italic text-rose-deep">bevor sie berührt.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft">
            Seit 2016 verbinden wir bei LUMARA fundierte Hautanalyse mit
            handverlesenen Wirkstoffen und der Ruhe eines echten Rückzugsorts.
            Jede Behandlung beginnt mit einem Gespräch, nicht mit einem
            Schema – denn jede Haut erzählt ihre eigene Geschichte.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-line pt-8 sm:max-w-md">
            <div>
              <p className="font-display text-3xl text-rose-deep">100%</p>
              <p className="mt-1 text-sm text-ink-soft">
                individuelle Hautanalyse vor jeder Behandlung
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-rose-deep">12+</p>
              <p className="mt-1 text-sm text-ink-soft">
                Jahre Erfahrung in professioneller Hautpflege
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
