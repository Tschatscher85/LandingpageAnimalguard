import { useState } from "react";
import { Send, CheckCircle, Loader2, Dog, Cat, Rabbit } from "lucide-react";
import { Button } from "@/components/ui/button";

const tierarten = [
  { value: "hund", label: "Hund", icon: Dog },
  { value: "katze", label: "Katze", icon: Cat },
  { value: "pferd", label: "Pferd", icon: Rabbit },
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", telefon: "", tierart: "", nachricht: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", telefon: "", tierart: "", nachricht: "" });
        // Track in Umami
        if (typeof window !== "undefined" && (window as any).umami) {
          (window as any).umami.track("contact-form-submit", { tierart: form.tierart });
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-[#003781] mb-2">Vielen Dank!</h3>
        <p className="text-gray-600">Wir melden uns schnellstmöglich bei dir.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Name *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#097E92] focus:ring-2 focus:ring-[#097E92]/20 outline-none transition-all text-sm"
            placeholder="Max Mustermann"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">E-Mail *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#097E92] focus:ring-2 focus:ring-[#097E92]/20 outline-none transition-all text-sm"
            placeholder="max@beispiel.de"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Telefon</label>
          <input
            type="tel"
            value={form.telefon}
            onChange={(e) => setForm({ ...form, telefon: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#097E92] focus:ring-2 focus:ring-[#097E92]/20 outline-none transition-all text-sm"
            placeholder="07331 9460350"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tierart</label>
          <div className="flex gap-2">
            {tierarten.map((t) => (
              <button
                key={t.value}
                type="button"
                onClick={() => setForm({ ...form, tierart: t.value })}
                className={`flex-1 flex flex-col items-center gap-1 py-2.5 rounded-xl border-2 transition-all text-sm font-medium ${
                  form.tierart === t.value
                    ? "border-[#097E92] bg-[#097E92]/5 text-[#097E92]"
                    : "border-gray-200 text-gray-500 hover:border-gray-300"
                }`}
              >
                <t.icon className="w-5 h-5" />
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nachricht</label>
        <textarea
          value={form.nachricht}
          onChange={(e) => setForm({ ...form, nachricht: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#097E92] focus:ring-2 focus:ring-[#097E92]/20 outline-none transition-all text-sm resize-none"
          placeholder="Erzähl uns kurz von deinem Tier..."
        />
      </div>

      <Button
        type="submit"
        disabled={status === "sending"}
        className="w-full h-12 bg-[#097E92] hover:bg-[#076b7d] text-white font-bold rounded-xl text-base transition-all"
      >
        {status === "sending" ? (
          <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Wird gesendet...</>
        ) : (
          <><Send className="w-5 h-5 mr-2" /> Kostenlos anfragen</>
        )}
      </Button>

      {status === "error" && (
        <p className="text-red-500 text-sm text-center">Etwas ist schiefgelaufen. Bitte versuche es erneut.</p>
      )}

      <p className="text-xs text-gray-400 text-center">
        Mit dem Absenden stimmst du unserer <a href="https://vertretung.allianz.de/agentur.svenjaeger/datenschutz/" target="_blank" rel="noopener" className="underline">Datenschutzerklärung</a> zu.
      </p>
    </form>
  );
}
