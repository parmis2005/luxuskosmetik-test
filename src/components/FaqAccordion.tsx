"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqItems } from "@/lib/data";
import clsx from "clsx";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line rounded-3xl border border-line bg-white/60">
      {faqItems.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
            >
              <span className="font-display text-lg text-ink">{item.question}</span>
              <Plus
                size={20}
                className={clsx(
                  "shrink-0 text-rose-deep transition-transform duration-300",
                  isOpen && "rotate-45"
                )}
              />
            </button>
            <div
              className={clsx(
                "overflow-hidden transition-[max-height] duration-300 ease-in-out",
                isOpen ? "max-h-40" : "max-h-0"
              )}
            >
              <p className="px-6 pb-6 text-sm leading-relaxed text-ink-soft sm:px-8">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
