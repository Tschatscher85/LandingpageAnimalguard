export default function Beschwerden() {
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
        <h1 className="text-4xl font-bold mb-8 text-foreground">Beschwerden</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Du bist mit unserer Tätigkeit nicht zufrieden?</h2>
            <p className="text-muted-foreground mb-4">
              Falls du einmal nicht mit unserer Tätigkeit zufrieden sein solltest, hast du die Möglichkeit, eine Beschwerde 
              bei uns einzureichen. Die Beschwerde kann schriftlich per Brief oder per E-Mail erfolgen. Du kannst dazu die 
              im Impressum genannten Adress- und Kontaktdaten verwenden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Wie läuft das Beschwerdeverfahren ab?</h2>
            <p className="text-muted-foreground mb-4">
              Erhalten wir eine Beschwerde, bestätigen wir unverzüglich deren Eingang und unterrichten dich über das 
              Verfahren der Beschwerdebearbeitung sowie die ungefähre Bearbeitungszeit.
            </p>
            <p className="text-muted-foreground mb-4">
              Sollten wir feststellen, dass deine Beschwerde einen Gegenstand betrifft, für den wir nicht zuständig sind, 
              informieren wir dich umgehend hierüber und teilen dir, soweit es uns möglich ist, die zuständige Stelle mit.
            </p>
            <p className="text-muted-foreground mb-4">
              Wir werden deine Beschwerde umfassend prüfen und uns bemühen, diese schnellstmöglich zu beantworten. Sollte 
              dies einmal nicht möglich sein, unterrichten wir dich über die Gründe der Verzögerung und darüber, wann die 
              Prüfung voraussichtlich abgeschlossen sein wird.
            </p>
            <p className="text-muted-foreground mb-4">
              Auf Wunsch erteilen wir dir alle Benachrichtigungen und Informationen schriftlich. Sofern wir deinem Anliegen 
              nicht oder nicht vollständig nachkommen können, erläutern wir dir die Gründe hierfür und weisen dich auf 
              etwaig bestehende Möglichkeiten hin, wie du dein Anliegen weiter verfolgen kannst.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Kontakt für Beschwerden</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-muted-foreground">
                <strong>Allianz Versicherung Sven Jaeger</strong><br />
                Hauptstraße 123<br />
                12345 Musterstadt<br />
                Tel.: 07313460050<br />
                E-Mail: <a href="mailto:agentur.svenjaeger@allianz.de" className="text-primary hover:underline">agentur.svenjaeger@allianz.de</a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Externe Schlichtungsstellen</h2>
            <p className="text-muted-foreground mb-4">
              Solltest du mit unserer Bearbeitung nicht zufrieden sein, kannst du dich auch an folgende externe 
              Schlichtungsstellen wenden:
            </p>
            
            <div className="space-y-4 text-muted-foreground">
              <div className="bg-gray-50 p-4 rounded-lg">
                <strong>Versicherungsombudsmann e.V.</strong><br />
                Postfach 080632<br />
                10006 Berlin<br />
                E-Mail: <a href="mailto:beschwerde@versicherungsombudsmann.de" className="text-primary hover:underline">beschwerde@versicherungsombudsmann.de</a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <strong>Ombudsmann Private Kranken- und Pflegeversicherung</strong><br />
                Postfach 060222<br />
                10052 Berlin<br />
                E-Mail: <a href="mailto:ombudsmann@pkv.de" className="text-primary hover:underline">ombudsmann@pkv.de</a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <strong>Ombudsmann Bundesverband deutscher Banken</strong><br />
                Postfach 040307<br />
                10062 Berlin<br />
                E-Mail: <a href="mailto:bankenverband@bdb.de" className="text-primary hover:underline">bankenverband@bdb.de</a>
              </div>
            </div>
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

