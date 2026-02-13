import { useState } from "react";
import { Dog, Cat, Rabbit, MessageCircle, ChevronRight } from "lucide-react";

const preise = {
  hund: [
    { name: "Basis", preis: "ab 19", leistung: "OP-Schutz", erstattung: "80%", color: "border-gray-300" },
    { name: "Komfort", preis: "ab 39", leistung: "OP + Behandlung", erstattung: "90%", color: "border-[#097E92]", popular: true },
    { name: "Premium", preis: "ab 59", leistung: "Rundum-Schutz", erstattung: "100%", color: "border-[#003781]" },
  ],
  katze: [
    { name: "Basis", preis: "ab 9", leistung: "OP-Schutz", erstattung: "80%", color: "border-gray-300" },
    { name: "Komfort", preis: "ab 19", leistung: "OP + Behandlung", erstattung: "90%", color: "border-[#097E92]", popular: true },
    { name: "Premium", preis: "ab 35", leistung: "Rundum-Schutz", erstattung: "100%", color: "border-[#003781]" },
  ],
  pferd: [
    { name: "Basis", preis: "ab 49", leistung: "OP-Schutz", erstattung: "80%", color: "border-gray-300" },
    { name: "Komfort", preis: "ab 89", leistung: "OP + Behandlung", erstattung: "90%", color: "border-[#097E92]", popular: true },
    { name: "Premium", preis: "ab 149", leistung: "Rundum-Schutz", erstattung: "100%", color: "border-[#003781]" },
  ],
};

const tiere = [
  { key: "hund", label: "Hund", icon: Dog },
  { key: "katze", label: "Katze", icon: Cat },
  { key: "pferd", label: "Pferd", icon: Rabbit },
] as const;

export default function KostenRechner() {
  const [tierart, setTierart] = useState<"hund" | "katze" | "pferd">("hund");

  return (
    <div>
      {/* Tierart Tabs */}
      <div className="flex justify-center gap-3 mb-10">
        {tiere.map((t) => (
          <button
            key={t.key}
            onClick={() => setTierart(t.key)}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all ${
              tierart === t.key
                ? "bg-[#097E92] text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <t.icon className="w-5 h-5" />
            {t.label}
          </button>
        ))}
      </div>

      {/* Tarif Cards */}
      <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {preise[tierart].map((tarif, i) => (
          <div
            key={i}
            className={`relative bg-white rounded-2xl border-2 ${tarif.color} p-6 text-center transition-all hover:shadow-xl ${tarif.popular ? "shadow-lg scale-[1.02]" : ""}`}
          >
            {tarif.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#097E92] text-white text-xs font-bold px-4 py-1 rounded-full">
                Beliebt
              </span>
            )}
            <h4 className="text-lg font-bold text-[#003781] mb-1">{tarif.name}</h4>
            <p className="text-sm text-gray-500 mb-4">{tarif.leistung}</p>
            <div className="mb-4">
              <span className="text-3xl font-extrabold text-[#097E92]">{tarif.preis}</span>
              <span className="text-sm text-gray-500">€/Monat</span>
            </div>
            <div className="text-sm text-gray-600 mb-5">
              bis zu <strong>{tarif.erstattung}</strong> Erstattung
            </div>
            <a
              href="https://wa.me/4973319460350?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Tierversicherung."
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-sm font-bold transition-all ${
                tarif.popular
                  ? "bg-[#097E92] text-white hover:bg-[#076b7d]"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Angebot anfordern
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-gray-400 mt-6">
        * Preise sind Richtwerte und abhängig von Alter, Rasse und individuellen Faktoren.
      </p>
    </div>
  );
}
