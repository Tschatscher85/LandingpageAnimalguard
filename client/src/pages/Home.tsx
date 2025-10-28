import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Clock, Phone, MessageCircle, Mail, MapPin, CheckCircle, Star } from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  // Load ProvenExpert widget dynamically
  useEffect(() => {
    // Load the ProvenExpert reviews widget
    const script = document.createElement('script');
    script.src = 'https://www.provenexpert.com/widget/landing_allianz-jaeger-versicherungen-immobilien.js?feedback=1&avatar=1&competence=1&language=de-de&style=white';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
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
              Maßgeschneiderter Tiergesundheitsschutz von AnimalGuard
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg px-8 py-6"
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
            Warum AnimalGuard?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-8">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Rundum-Schutz, der hält</h3>
                <p className="text-muted-foreground">
                  Von der Routine-Untersuchung bis zur Not-OP: Die Allianz Tierversicherung deckt alles ab, was dein Tier braucht. Behandlungen, Operationen, Medikamente – du entscheidest, was dir wichtig ist, ich finde den passenden Tarif.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-8">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Persönlich. Direkt. Ehrlich.</h3>
                <p className="text-muted-foreground">
                  Kein Callcenter, keine Warteschleifen. Bei mir erreichst du direkt einen Ansprechpartner, der sich auskennt und Zeit für dich hat. Versprochen! Ruf an, schreib mir per WhatsApp oder komm vorbei – wie's dir passt.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-8">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-white" />
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
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Erfahrung und Expertise</h3>
                <p className="text-muted-foreground">Dank digitaler Lösungen sind wir Experten auf diesem Gebiet. Wir kennen die spezifischen Herausforderungen und Bedürfnisse von Haustierbesitzern und bieten maßgeschneiderte Lösungen an.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Umfangreiche Leistungen</h3>
                <p className="text-muted-foreground">Unsere Versicherungsangebote decken eine breite Palette von medizinischen Leistungen ab, einschließlich tierärztlicher Behandlungen, Operationen, Medikamenten und vielem mehr. Du kannst sicher sein, dass dein Haustier in den besten Händen ist.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Kundenzufriedenheit</h3>
                <p className="text-muted-foreground">Die Zufriedenheit unserer Kunden hat für uns oberste Priorität. Unsere positiven Kundenbewertungen sprechen für sich und zeigen, dass wir stets bestrebt sind, den besten Service zu bieten.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Flexibilität</h3>
                <p className="text-muted-foreground">Wir bieten maßgeschneiderte Versicherungspakete an, die auf die individuellen Bedürfnisse und das Budget unserer Kunden zugeschnitten sind.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Rund um die Uhr Support</h3>
                <p className="text-muted-foreground">Unser engagiertes Kundensupport-Team steht dir jederzeit zur Verfügung, um Fragen zu beantworten, Schadensfälle abzuwickeln oder Unterstützung zu bieten. Wir sind nur eine WhatsApp-Nachricht oder eine E-Mail entfernt.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Schnelle Schadensregulierung</h3>
                <p className="text-muted-foreground">Transparente und zügige Abwicklung im Schadensfall. Wir sorgen dafür, dass du schnell die Unterstützung bekommst, die du brauchst – ohne lange Wartezeiten oder komplizierte Formulare.</p>
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
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
          >
            <MessageCircle className="mr-3 h-7 w-7" />
            Jetzt unverbindlich schreiben
          </Button>
        </div>
      </section>

      {/* ProvenExpert Reviews Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-foreground">
            Das sagen unsere Kunden
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Mit über 450 Bewertungen kommen wir auf 4,69 von 5 Sterne, uns liegt Ihre Zufriedenheit sehr am Herzen.
          </p>
          
          {/* Rating Display */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-10 w-10 md:h-12 md:w-12 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-center mb-6">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  4.69 / 5.00
                </div>
                <p className="text-muted-foreground text-lg">
                  Basierend auf 450+ Bewertungen
                </p>
              </div>
              
              {/* ProvenExpert Badges */}
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <img 
                  src="/ProvenExpertTopEmpfehlung2024.png" 
                  alt="Von Kunden Empfohlen 2024" 
                  className="h-32 md:h-40 object-contain"
                />
                <img 
                  src="/topservice_300.png" 
                  alt="Top Dienstleister 2024" 
                  className="h-32 md:h-40 object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* ProvenExpert Widget */}
          <div id="pewl"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Wir sind für Sie persönlich da
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
                <a href="/erstinformation" className="block text-background/80 hover:text-background transition-colors">
                  Erstinformation
                </a>
                <a href="/beschwerden" className="block text-background/80 hover:text-background transition-colors">
                  Beschwerden
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

