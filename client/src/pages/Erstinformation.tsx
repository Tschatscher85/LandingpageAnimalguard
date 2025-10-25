export default function Erstinformation() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Logo */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/">
            <img 
              src="/LogoBlauTransparent.png" 
              alt="Allianz Jaeger Logo" 
              className="h-12 md:h-16"
            />
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Erstinformation</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Kundeninformation zur Erfüllung der gesetzlichen Informationspflicht
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Name, Anschrift und Kontaktdaten</h2>
            <p className="text-muted-foreground">
              <strong>Allianz Versicherung Sven Jaeger</strong><br />
              Hauptstraße 123<br />
              12345 Musterstadt<br />
              Tel.: 07313460050<br />
              E-Mail: agentur.svenjaeger@allianz.de
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">2. Tätigkeitsart</h2>
            <p className="text-muted-foreground">
              Beratung zu Versicherungen und deren Vermittlung als gebundener Vertreter (§ 34d Abs. 7 S. 1 Nr. 1 GewO) 
              ausschließlich an die sowie für Rechnung und im Namen der Versicherungsunternehmen der Allianz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">3. Gemeinsame Registerstelle nach § 11 a Abs. 1 GewO</h2>
            <p className="text-muted-foreground">
              <strong>Vermittlerregisternummer:</strong> D-ML30-9NBY5-27<br />
              Deutsche Industrie- und Handelskammer (DIHK e.V.)<br />
              Breite Straße 29<br />
              10178 Berlin<br />
              Telefon: 0180 600 58 50 (Preis 0,20 €/Anruf)<br />
              Internet: <a href="https://www.vermittlerregister.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.vermittlerregister.info</a> und{' '}
              <a href="https://www.vermittlerregister.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.vermittlerregister.org</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">4. Schlichtungsstellen</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <strong>Versicherungsombudsmann e.V.</strong><br />
                Postfach 080632<br />
                10006 Berlin<br />
                E-Mail: <a href="mailto:beschwerde@versicherungsombudsmann.de" className="text-primary hover:underline">beschwerde@versicherungsombudsmann.de</a>
              </div>
              
              <div>
                <strong>Ombudsmann Private Kranken- und Pflegeversicherung</strong><br />
                Postfach 060222<br />
                10052 Berlin<br />
                E-Mail: <a href="mailto:ombudsmann@pkv.de" className="text-primary hover:underline">ombudsmann@pkv.de</a>
              </div>
              
              <div>
                <strong>Ombudsmann Bundesverband deutscher Banken</strong><br />
                Postfach 040307<br />
                10062 Berlin<br />
                E-Mail: <a href="mailto:bankenverband@bdb.de" className="text-primary hover:underline">bankenverband@bdb.de</a>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">5. Beratung bei der Versicherungsvermittlung</h2>
            <p className="text-muted-foreground">
              Im Zuge der Vermittlung bietet Allianz Versicherung Sven Jaeger eine Beratung gemäß den gesetzlichen Vorgaben an.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">6. Informationen über Art und Quelle der Vergütung</h2>
            <p className="text-muted-foreground">
              Vergütung durch Provisionen und Zusatzvergütungen aus Ausschreibungen (jeweils in der Versicherungsprämie enthalten).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">7. Vermittlung von Investmentvermögen</h2>
            <p className="text-muted-foreground">
              Vermittlung von Investmentvermögen, Vermögensverwaltungsprodukten und sonstigen Finanzinstrumenten als 
              vertraglich gebundener Vermittler (§ 2 Abs. 10 KWG) ausschließlich für Rechnung und unter der Haftung 
              der Fondsdepot Bank GmbH.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="https://vertretung.allianz.de/agentur.svenjaeger/impressum/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Impressum
            </a>
            <span>·</span>
            <a href="https://vertretung.allianz.de/agentur.svenjaeger/datenschutz/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Datenschutz
            </a>
            <span>·</span>
            <a href="/erstinformation" className="hover:text-primary transition-colors">
              Erstinformation
            </a>
            <span>·</span>
            <a href="/beschwerden" className="hover:text-primary transition-colors">
              Beschwerden
            </a>
          </div>
          <p className="text-sm text-gray-400">
            © 2025 Allianz Versicherung Sven Jaeger. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
}

