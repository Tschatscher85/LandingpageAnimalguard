import { useRoute } from "wouter";
import { Dog, Cat, Rabbit, Shield, Heart, CheckCircle, MessageCircle, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import KostenRechner from "@/components/KostenRechner";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSchema from "@/components/FAQSchema";

const tierData: Record<string, { name: string; icon: any; heroText: string; beschreibung: string; vorteile: string[]; kosten: string }> = {
  hund: {
    name: "Hund",
    icon: Dog,
    heroText: "Rundum-Schutz für deinen besten Freund",
    beschreibung: "Ob Golden Retriever, Dackel oder Schäferhund — jeder Hund verdient den besten Schutz. Unsere Hundeversicherung übernimmt Tierarztkosten, Operationen und Medikamente. Damit du dir nie Sorgen um die Kosten machen musst.",
    vorteile: [
      "Bis zu 100% Erstattung aller Tierarztkosten",
      "Freie Tierarzt- und Klinikwahl",
      "OP-Schutz inklusive Nachbehandlung",
      "Medikamente und Physiotherapie abgedeckt",
      "Keine Rassebeschränkungen",
      "Weltweiter Schutz auf Reisen",
    ],
    kosten: "ab 19€/Monat",
  },
  katze: {
    name: "Katze",
    icon: Cat,
    heroText: "Samtpfoten verdienen samtweichen Schutz",
    beschreibung: "Katzen sind Meister darin, Krankheiten zu verstecken. Umso wichtiger ist eine gute Versicherung. Von der Routineuntersuchung bis zur Notfall-OP — deine Katze ist bestens geschützt.",
    vorteile: [
      "Günstige Tarife ab 9€/Monat",
      "OP-Schutz und Krankenvollversicherung",
      "Freie Tierarzt- und Klinikwahl",
      "Zahnbehandlungen inklusive",
      "Nieren- und Schilddrüsenerkrankungen abgedeckt",
      "Auch für Freigänger und Wohnungskatzen",
    ],
    kosten: "ab 9€/Monat",
  },
  pferd: {
    name: "Pferd",
    icon: Rabbit,
    heroText: "Starker Schutz für starke Partner",
    beschreibung: "Pferde sind nicht nur majestätische Tiere, sondern auch kostspielig in der Gesundheitsversorgung. Eine Kolik-OP kann schnell 5.000€ und mehr kosten. Mit unserer Pferdeversicherung bist du auf der sicheren Seite.",
    vorteile: [
      "OP-Versicherung und Vollschutz verfügbar",
      "Kolik-OP vollständig abgedeckt",
      "Orthopädische Operationen inklusive",
      "Freie Klinikwahl — auch Unikliniken",
      "Transportkosten bei Notfällen",
      "Bis zu 100% Erstattung möglich",
    ],
    kosten: "ab 49€/Monat",
  },
};

export default function TierartPage() {
  const [, params] = useRoute("/:tierart");
  const key = params?.tierart || "";
  const tier = tierData[key];

  if (!tier) return null;

  const Icon = tier.icon;

  return (
    <div className="min-h-screen">
      <Navbar />
      <FAQSchema />

      {/* Hero */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#002a42] via-[#07647a] to-[#0a9ab0]" />
        <div className="relative container py-16 md:py-24 px-4">
          <a href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
          </a>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3">
              <Icon className="w-10 h-10 text-teal-200" />
            </div>
            <span className="text-teal-200 font-bold uppercase tracking-wider text-sm">{tier.name}eversicherung</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 max-w-2xl">{tier.heroText}</h1>
          <p className="text-lg text-white/85 max-w-xl mb-8">{tier.beschreibung}</p>
          <a
            href="https://wa.me/4973319460350?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Tierversicherung."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-8 h-14 rounded-xl shadow-xl transition-all hover:scale-[1.03] text-lg"
          >
            <MessageCircle className="w-5 h-5" /> Jetzt beraten lassen
          </a>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-[#003781] text-center mb-10">Deine Vorteile</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {tier.vorteile.map((v, i) => (
              <ScrollReveal key={i}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                  <CheckCircle className="w-5 h-5 text-[#097E92] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{v}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Preise */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl font-extrabold text-[#003781] text-center mb-4">Tarife & Preise</h2>
          <p className="text-gray-500 text-center mb-10">Finde den passenden Schutz für deinen {tier.name}.</p>
          <KostenRechner />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#097E92] to-[#0a9ab0] text-center">
        <div className="container px-4">
          <h2 className="text-3xl font-extrabold text-white mb-4">Jetzt {tier.name} versichern</h2>
          <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">Kostenlose Beratung, individuelles Angebot — alles in 5 Minuten per WhatsApp.</p>
          <a
            href="https://wa.me/4973319460350?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Tierversicherung."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-10 h-14 rounded-xl shadow-xl transition-all hover:scale-[1.03] text-lg"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp Beratung starten
          </a>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
