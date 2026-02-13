import { useRoute } from "wouter";
import { ArrowLeft, Calendar, Clock, Dog, Cat, Rabbit, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import FAQSchema from "@/components/FAQSchema";

const articles = [
  {
    slug: "tierarztkosten-was-kostet-ein-tierarztbesuch",
    title: "Tierarztkosten 2025: Was kostet ein Tierarztbesuch wirklich?",
    date: "10. Februar 2025",
    readTime: "5 Min.",
    excerpt: "Von der Impfung bis zur Not-OP — wir zeigen dir, welche Kosten auf dich zukommen können.",
    content: `
      <h2>Was kostet ein Tierarztbesuch?</h2>
      <p>Die Kosten beim Tierarzt können stark variieren. Eine einfache Untersuchung kostet zwischen <strong>30 und 60 Euro</strong>, während eine Not-OP schnell <strong>3.000 bis 5.000 Euro</strong> kosten kann.</p>

      <h3>Typische Kosten für Hunde</h3>
      <ul>
        <li>Allgemeine Untersuchung: 30–60€</li>
        <li>Impfungen: 50–80€ pro Jahr</li>
        <li>Zahnreinigung: 150–400€</li>
        <li>Kastration: 200–600€</li>
        <li>Kreuzband-OP: 1.500–3.500€</li>
        <li>Tumor-OP: 500–3.000€</li>
      </ul>

      <h3>Typische Kosten für Katzen</h3>
      <ul>
        <li>Allgemeine Untersuchung: 25–50€</li>
        <li>Impfungen: 40–70€ pro Jahr</li>
        <li>Kastration: 80–200€</li>
        <li>Zahnbehandlung: 100–500€</li>
      </ul>

      <h3>Warum eine Tierversicherung sinnvoll ist</h3>
      <p>Unerwartete Tierarztkosten können das Budget stark belasten. Eine gute Tierversicherung schützt dich vor finanziellen Überraschungen und sorgt dafür, dass dein Tier immer die beste Behandlung bekommt — unabhängig von den Kosten.</p>
    `,
  },
  {
    slug: "hund-versichern-worauf-achten",
    title: "Hund versichern: Worauf du 2025 achten solltest",
    date: "5. Februar 2025",
    readTime: "4 Min.",
    excerpt: "Die wichtigsten Kriterien bei der Wahl der richtigen Hundeversicherung im Überblick.",
    content: `
      <h2>Die richtige Hundeversicherung finden</h2>
      <p>Bei der Wahl einer Hundeversicherung gibt es einige wichtige Punkte zu beachten:</p>

      <h3>1. OP-Schutz vs. Krankenvollversicherung</h3>
      <p>Der OP-Schutz deckt nur Operationen ab und ist günstiger. Die Krankenvollversicherung übernimmt auch ambulante Behandlungen, Medikamente und Vorsorge. Für die meisten Hundebesitzer empfehlen wir die Vollversicherung.</p>

      <h3>2. Erstattungssatz beachten</h3>
      <p>Achte auf den Erstattungssatz — idealerweise <strong>100% nach GOT</strong> (Gebührenordnung für Tierärzte). Manche Tarife erstatten nur bis zum 2-fachen GOT-Satz, bei Spezialisten kann aber der 3-fache oder 4-fache Satz anfallen.</p>

      <h3>3. Wartezeiten</h3>
      <p>Die meisten Versicherungen haben Wartezeiten von 30 Tagen für Krankheiten. Unfälle sind oft sofort versichert. Deshalb gilt: <strong>Je früher du versicherst, desto besser.</strong></p>

      <h3>4. Keine Selbstbeteiligung</h3>
      <p>Tarife ohne Selbstbeteiligung sind etwas teurer, aber im Schadensfall lohnt sich das deutlich. Du bekommst 100% erstattet, ohne vorher einen Eigenanteil zahlen zu müssen.</p>
    `,
  },
  {
    slug: "katze-oder-hund-versicherung-unterschiede",
    title: "Katze oder Hund versichern: Die wichtigsten Unterschiede",
    date: "1. Februar 2025",
    readTime: "3 Min.",
    excerpt: "Was unterscheidet eine Katzen- von einer Hundeversicherung? Wir klären auf.",
    content: `
      <h2>Katzen- vs. Hundeversicherung</h2>
      <p>Obwohl das Prinzip gleich ist, gibt es wichtige Unterschiede zwischen Katzen- und Hundeversicherungen:</p>

      <h3>Kosten</h3>
      <p>Katzenversicherungen sind in der Regel <strong>deutlich günstiger</strong> als Hundeversicherungen. Das liegt daran, dass Katzen seltener operiert werden müssen und die Behandlungskosten generell niedriger sind.</p>

      <h3>Typische Erkrankungen</h3>
      <p><strong>Hunde:</strong> Kreuzbandriss, Magendrehung, Gelenkprobleme, Allergien<br/>
      <strong>Katzen:</strong> Nierenerkrankungen, Zahnprobleme, Schilddrüsenüberfunktion, Harnwegserkrankungen</p>

      <h3>Unsere Empfehlung</h3>
      <p>Egal ob Katze oder Hund: Eine <strong>Tierkrankenversicherung mit OP-Schutz</strong> ist für beide Tierarten sinnvoll. Besonders bei jungen Tieren lohnt sich der frühe Abschluss, da keine Vorerkrankungen bestehen.</p>
    `,
  },
];

function BlogList() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#003781] mb-4 text-center">Ratgeber</h1>
          <p className="text-lg text-gray-500 text-center mb-12 max-w-xl mx-auto">Tipps und Wissen rund um Tierversicherungen.</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {articles.map((a) => (
              <a
                key={a.slug}
                href={`/ratgeber/${a.slug}`}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
              >
                <div className="h-2 bg-gradient-to-r from-[#097E92] to-[#0a9ab0]" />
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{a.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{a.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-[#003781] mb-2 group-hover:text-[#097E92] transition-colors">{a.title}</h2>
                  <p className="text-sm text-gray-600 mb-4">{a.excerpt}</p>
                  <span className="text-[#097E92] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Weiterlesen <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}

function BlogArticle({ slug }: { slug: string }) {
  const article = articles.find((a) => a.slug === slug);
  if (!article) return <BlogList />;

  return (
    <div className="min-h-screen">
      <Navbar />
      <FAQSchema />
      <div className="pt-24 pb-16">
        <div className="container px-4 max-w-3xl mx-auto">
          <a href="/ratgeber" className="inline-flex items-center gap-2 text-[#097E92] font-semibold mb-6 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> Zurück zum Ratgeber
          </a>
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{article.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{article.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#003781] mb-8 leading-tight">{article.title}</h1>
          <div
            className="prose prose-lg max-w-none prose-headings:text-[#003781] prose-a:text-[#097E92]"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#097E92]/10 to-[#097E92]/5 rounded-2xl text-center border border-[#097E92]/10">
            <h3 className="text-xl font-bold text-[#003781] mb-2">Fragen zur Tierversicherung?</h3>
            <p className="text-gray-600 mb-4">Wir beraten dich gerne — kostenlos und unverbindlich.</p>
            <a
              href="https://wa.me/4973319460350?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Tierversicherung."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-6 py-3 rounded-xl transition-all"
            >
              WhatsApp Beratung
            </a>
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}

export default function Blog() {
  const [match, params] = useRoute("/ratgeber/:slug");
  if (match && params?.slug) return <BlogArticle slug={params.slug} />;
  return <BlogList />;
}
