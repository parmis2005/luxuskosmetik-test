"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { serviceCategories } from "@/lib/data";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-line bg-white/70 px-8 py-16 text-center">
        <CheckCircle2 className="text-sage" size={44} />
        <h3 className="mt-5 font-display text-2xl text-ink">Vielen Dank!</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
          Ihre Anfrage wurde übermittelt. Wir melden uns innerhalb von 24
          Stunden persönlich bei Ihnen zurück.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-3xl border border-line bg-white/70 p-7 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Vorname" name="firstName" required />
        <Field label="Nachname" name="lastName" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="E-Mail" name="email" type="email" required />
        <Field label="Telefon" name="phone" type="tel" />
      </div>

      <label className="grid gap-2 text-sm font-medium text-ink">
        Gewünschte Behandlung
        <select
          name="service"
          className="rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink-soft outline-none transition-colors focus:border-rose-deep"
        >
          <option value="">Bitte auswählen</option>
          {serviceCategories.map((c) => (
            <optgroup key={c.id} label={c.title}>
              {c.items.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-sm font-medium text-ink">
        Ihre Nachricht
        <textarea
          name="message"
          rows={4}
          placeholder="Erzählen Sie uns von Ihren Wünschen..."
          className="resize-none rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink-soft outline-none transition-colors placeholder:text-ink-soft/50 focus:border-rose-deep"
        />
      </label>

      <label className="flex items-start gap-3 text-xs leading-relaxed text-ink-soft">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 rounded border-line accent-rose-deep"
        />
        Ich habe die Datenschutzhinweise gelesen und bin mit der
        Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage
        einverstanden.
      </label>

      <button
        type="submit"
        className="mt-2 rounded-full bg-rose-deep px-8 py-4 text-sm font-semibold text-cream transition-colors hover:bg-ink"
      >
        Anfrage senden
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-ink">
      {label}
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink-soft outline-none transition-colors focus:border-rose-deep"
      />
    </label>
  );
}
