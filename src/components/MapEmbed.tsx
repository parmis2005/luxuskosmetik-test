"use client";

import dynamic from "next/dynamic";

const MapSection = dynamic(() => import("@/components/MapSection"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[360px] w-full items-center justify-center rounded-[2rem] bg-cream-dark text-sm text-ink-soft">
      Karte wird geladen...
    </div>
  ),
});

export default function MapEmbed() {
  return <MapSection />;
}
