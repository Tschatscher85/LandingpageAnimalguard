export const faqData = [
  { q: "Was kostet eine Tierversicherung?", a: "Die Kosten hängen von Tierart, Rasse, Alter und gewähltem Tarif ab. Für Hunde beginnen die Tarife ab ca. 20€/Monat, für Katzen ab ca. 10€/Monat. Ich erstelle dir gerne ein individuelles Angebot." },
  { q: "Gibt es eine Wartezeit?", a: "Ja, für die meisten Leistungen gilt eine Wartezeit von 30 Tagen nach Vertragsabschluss. Bei Unfällen entfällt die Wartezeit komplett — dein Tier ist sofort geschützt." },
  { q: "Werden Vorerkrankungen mitversichert?", a: "Vorerkrankungen, die vor Vertragsabschluss bestanden, sind in der Regel nicht versichert. Deshalb empfehle ich, die Versicherung möglichst früh abzuschließen." },
  { q: "Kann ich den Tierarzt frei wählen?", a: "Ja, du kannst jeden Tierarzt oder jede Tierklinik frei wählen — auch Spezialisten und Notfallkliniken. Es gibt keine Einschränkung." },
  { q: "Wie funktioniert die Kostenerstattung?", a: "Ganz einfach: Rechnung beim Tierarzt bezahlen, Rechnung per App oder E-Mail einreichen, Erstattung erhalten. In der Regel wird innerhalb weniger Tage erstattet." },
  { q: "Welche Tiere können versichert werden?", a: "Wir versichern Hunde, Katzen und Pferde. Für andere Tierarten sprich mich gerne an — wir finden eine Lösung." },
];

export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
