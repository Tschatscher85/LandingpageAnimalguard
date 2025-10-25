import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Clock, Phone, MessageCircle, Mail, MapPin, CheckCircle } from "lucide-react";

export default function Home() {
  const whatsappNumber = "4973319460350"; // Format: country code + number without spaces
  const whatsappMessage = encodeURIComponent("Hallo, ich interessiere mich für eine Tierversicherung und möchte gerne mehr erfahren.");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with Logo */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container py-4">
          <img src="/logo.png" alt="Allianz Jaeger Logo" className="h-12 md:h-16" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pets.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Dein Partner für alle Felle
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Maßgeschneiderter Tiergesundheitsschutz von Ihrem Allianz-Experten Sven Jaeger
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Unverbindliches Angebot per WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 text-primary-foreground border-primary-foreground/30 text-lg px-8 py-6"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Dein Tier verdient den besten Schutz
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Mal ehrlich: Dein Vierbeiner ist mehr als nur ein Haustier – er ist Familie. Und genau deshalb sollte auch sein Versicherungsschutz perfekt passen. Ich bin Sven Jaeger, dein Allianz-Partner vor Ort, und ich weiß: Jedes Tier ist anders. Deshalb gibt's bei mir keine Standard-Lösungen von der Stange, sondern Versicherungen, die wirklich zu euch beiden passen.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Ob Hund, Katze, Kaninchen oder Pferd – mit der richtigen Tierversicherung bist du auf der sicheren Seite. Unerwartete Tierarztkosten, Krankheiten oder Unfälle? Kein Problem! Du konzentrierst dich auf deinen Liebling, ich kümmere mich um den Rest. So einfach kann Versicherung sein.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/pets-together.jpg" 
                alt="Hund und Katze zusammen" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Warum AnimalGuard mit Allianz wählen?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Rundum-Schutz, der hält</h3>
                <p className="text-muted-foreground">
                  Von der Routine-Untersuchung bis zur Not-OP: Die Allianz Tierversicherung deckt alles ab, was dein Tier braucht. Behandlungen, Operationen, Medikamente – du entscheidest, was dir wichtig ist, ich finde den passenden Tarif.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Persönlich. Direkt. Ehrlich.</h3>
                <p className="text-muted-foreground">
                  Kein Callcenter, keine Warteschleifen. Bei mir erreichst du direkt einen Ansprechpartner, der sich auskennt und Zeit für dich hat. Versprochen! Ruf an, schreib mir per WhatsApp oder komm vorbei – wie's dir passt.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Unkompliziert & schnell</h3>
                <p className="text-muted-foreground">
                  Wenn's drauf ankommt, muss es schnell gehen. Ich helfe dir bei der Schadensabwicklung und sorge dafür, dass du zügig dein Geld bekommst. Ohne Bürokratie-Marathon, ohne Stress.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Unsere Leistungen
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Hundekrankenversicherung</h3>
                <p className="text-muted-foreground">Dein Hund gibt dir alles – gib ihm die beste Versorgung zurück. Von Check-ups bis zur Not-OP ist alles drin.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Katzenkrankenversicherung</h3>
                <p className="text-muted-foreground">Samtpfoten brauchen besonderen Schutz. Damit deine Katze immer top versorgt ist – egal was kommt.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Pferdekrankenversicherung</h3>
                <p className="text-muted-foreground">Pferde sind eine Investition fürs Herz. Schütz dein Tier mit einer Versicherung, die wirklich passt.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Tierhaftpflichtversicherung</h3>
                <p className="text-muted-foreground">Dein Tier macht mal Mist? Passiert. Mit der Tierhaftpflicht bist du auf der sicheren Seite – immer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Bereit für den besten Schutz?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Lass uns gemeinsam die perfekte Versicherung für deinen Liebling finden. Schnell, unkompliziert und genau auf eure Bedürfnisse zugeschnitten. Schreib mir einfach – ich freu mich drauf!
          </p>
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
          >
            <MessageCircle className="mr-3 h-7 w-7" />
            Jetzt unverbindlich beraten lassen
          </Button>
        </div>
      </section>

      {/* ProvenExpert Reviews Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Das sagen unsere Kunden
          </h2>
          <div id="pewl"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Ich bin gerne persönlich für dich da
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Kontaktinformationen</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Allianz Versicherung Sven Jaeger</p>
                      <p className="text-muted-foreground">Bahnhofstraße 2</p>
                      <p className="text-muted-foreground">73329 Kuchen</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <a href="tel:073319460350" className="text-foreground hover:text-primary transition-colors">
                      07331 9460350
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <a href="mailto:agentur.svenjaeger@allianz.de" className="text-foreground hover:text-primary transition-colors">
                      agentur.svenjaeger@allianz.de
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <MessageCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <button 
                      onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      WhatsApp Nachricht senden
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Öffnungszeiten</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-foreground">Montag</span>
                      <span className="text-muted-foreground">08:30 - 12:00 / 14:00 - 17:30 Uhr</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-foreground">Dienstag</span>
                      <span className="text-muted-foreground">08:30 - 12:00 / 14:00 - 17:30 Uhr</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-foreground">Mittwoch</span>
                      <span className="text-muted-foreground">08:30 - 12:00 Uhr</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-foreground">Donnerstag</span>
                      <span className="text-muted-foreground">08:30 - 12:00 / 14:00 - 17:30 Uhr</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-foreground">Freitag</span>
                      <span className="text-muted-foreground">08:30 - 12:00 Uhr</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-foreground">Samstag / Sonntag</span>
                      <span className="text-muted-foreground">Geschlossen</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Telefonisch erreichbar:</strong><br />
                    Montag bis Freitag ab 08:30 Uhr
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">AnimalGuard</h4>
              <p className="text-sm text-background/80">
                Ihr Allianz-Partner für professionelle Tierversicherungen in Kuchen und Umgebung.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Kontakt</h4>
              <p className="text-sm text-background/80">Sven Jaeger</p>
              <p className="text-sm text-background/80">Bahnhofstraße 2, 73329 Kuchen</p>
              <p className="text-sm text-background/80">Tel: 07331 9460350</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Rechtliches</h4>
              <div className="space-y-2 text-sm">
                <a href="https://vertretung.allianz.de/agentur.svenjaeger/impressum/" target="_blank" rel="noopener noreferrer" className="block text-background/80 hover:text-background transition-colors">
                  Impressum
                </a>
                <a href="https://vertretung.allianz.de/agentur.svenjaeger/datenschutz/" target="_blank" rel="noopener noreferrer" className="block text-background/80 hover:text-background transition-colors">
                  Datenschutz
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-6 text-center text-sm text-background/80">
            <p>&copy; {new Date().getFullYear()} Allianz Versicherung Sven Jaeger. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

