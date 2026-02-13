import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Heart, Clock, Phone, MessageCircle, Mail, MapPin, CheckCircle, Star, ArrowDown, PawPrint, Stethoscope, Syringe } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import StickyCTA from "@/components/StickyCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { faqData } from "@/components/FAQSchema";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        let start = 0;
        const duration = 2000;
        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          setCount(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const whatsappNumber = "4973319460350";
  const whatsappMessage = encodeURIComponent("Hallo, ich interessiere mich für eine Tierversicherung und möchte gerne mehr erfahren.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003040] via-[#097E92] to-[#0a9ab0]" />
        <div className="absolute inset-0 bg-[url('/hero-pets.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 25% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)" }} />

        <div className="relative container py-16 md:py-28 lg:py-36 px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-teal-200 uppercase bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
              Allianz Tierversicherung
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight" style={{ color: "white" }}>
              Dein Partner<br />für <span className="text-teal-200">alle Felle</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-white/90 max-w-xl">
              Maßgeschneiderter Tiergesundheitsschutz. Persönliche Beratung. Schnelle Erstattung.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in-up animation-delay-200">
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-base md:text-lg px-6 md:px-8 h-14 shadow-xl transition-all hover:scale-105"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Beratung
              </Button>
              <Button
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 text-base md:text-lg px-6 md:px-8 h-14 shadow-lg transition-all hover:scale-105 backdrop-blur-sm"
                onClick={scrollToContact}
              >
                Kontakt aufnehmen
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-6 animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <div className="flex -space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-white">4.69/5</span>
                <span className="text-xs text-teal-200">450+ Bewertungen</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-teal-200" />
                <span className="text-sm font-semibold text-white">Allianz Partner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-gray-50 border-b py-4">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-2 text-gray-500">
              <Shield className="w-5 h-5 text-[#097E92]" />
              <span className="text-sm font-medium">Allianz Partner</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <PawPrint className="w-5 h-5 text-[#097E92]" />
              <span className="text-sm font-medium">Hund, Katze & Pferd</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium">4.69/5 Bewertung</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Stethoscope className="w-5 h-5 text-[#097E92]" />
              <span className="text-sm font-medium">Freie Tierarztwahl</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 md:mb-6 text-[#003781]">
                Dein Tier verdient den besten Schutz
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                Mal ehrlich: Dein Vierbeiner ist mehr als nur ein Haustier – er ist Familie. Und genau deshalb sollte auch sein Versicherungsschutz perfekt passen.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Ich bin Sven Jaeger, dein Allianz-Partner vor Ort. Ob Hund, Katze oder Pferd – mit der richtigen Tierversicherung bist du auf der sicheren Seite. Unerwartete Tierarztkosten? Kein Problem! Du konzentrierst dich auf deinen Liebling, ich kümmere mich um den Rest.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-[#097E92]"><AnimatedCounter target={450} suffix="+" /></div>
                  <div className="text-xs text-gray-500 mt-1">Zufriedene Kunden</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-[#097E92]">100%</div>
                  <div className="text-xs text-gray-500 mt-1">Erstattung möglich</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-[#097E92]">0€</div>
                  <div className="text-xs text-gray-500 mt-1">Beratungskosten</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="relative">
                <img
                  src="/pets-together.jpg"
                  alt="Hund und Katze zusammen"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="vorteile" className="py-12 md:py-20 bg-gray-50 scroll-mt-20">
        <div className="container px-4">
          <ScrollReveal>
            <h2 className="section-heading">Warum AnimalGuard?</h2>
            <p className="section-subheading">Drei gute Gründe für deinen Allianz-Partner vor Ort.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Shield, title: "Rundum-Schutz, der hält", desc: "Von der Routine-Untersuchung bis zur Not-OP: Die Allianz Tierversicherung deckt alles ab. Behandlungen, Operationen, Medikamente – du entscheidest, ich finde den Tarif." },
              { icon: Heart, title: "Persönlich. Direkt. Ehrlich.", desc: "Kein Callcenter, keine Warteschleifen. Bei mir erreichst du direkt einen Ansprechpartner, der sich auskennt und Zeit für dich hat. Per WhatsApp, Telefon oder vor Ort." },
              { icon: Clock, title: "Unkompliziert & schnell", desc: "Wenn's drauf ankommt, muss es schnell gehen. Ich helfe dir bei der Schadensabwicklung und sorge dafür, dass du zügig dein Geld bekommst. Ohne Bürokratie." },
            ].map((item, i) => (
              <ScrollReveal key={i}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                  <CardContent className="p-6 md:p-8">
                    <div className="bg-[#097E92] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#003781]">{item.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="py-12 md:py-20 bg-white scroll-mt-20">
        <div className="container px-4">
          <ScrollReveal>
            <h2 className="section-heading">Unsere Leistungen</h2>
            <p className="section-subheading">Umfassender Versicherungsschutz für dein Tier.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { title: "Erfahrung und Expertise", desc: "Dank digitaler Lösungen sind wir Experten auf diesem Gebiet. Wir kennen die Herausforderungen von Haustierbesitzern und bieten maßgeschneiderte Lösungen." },
              { title: "Umfangreiche Leistungen", desc: "Unsere Angebote decken tierärztliche Behandlungen, Operationen, Medikamente und vieles mehr ab. Dein Haustier ist in den besten Händen." },
              { title: "Kundenzufriedenheit", desc: "Die Zufriedenheit unserer Kunden hat oberste Priorität. Unsere positiven Bewertungen zeigen, dass wir stets bestrebt sind, den besten Service zu bieten." },
              { title: "Flexibilität", desc: "Maßgeschneiderte Versicherungspakete, die auf die individuellen Bedürfnisse und das Budget unserer Kunden zugeschnitten sind." },
              { title: "Rund um die Uhr Support", desc: "Unser Team steht dir jederzeit zur Verfügung. Wir sind nur eine WhatsApp-Nachricht oder eine E-Mail entfernt." },
              { title: "Schnelle Schadensregulierung", desc: "Transparente und zügige Abwicklung im Schadensfall. Ohne lange Wartezeiten oder komplizierte Formulare." },
            ].map((item, i) => (
              <ScrollReveal key={i}>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-[#097E92] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-[#003781]">{item.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003040] via-[#097E92] to-[#0a9ab0]" />
        <div className="container text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6" style={{ color: "white" }}>
              Bereit für den besten Schutz?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Lass uns gemeinsam die perfekte Versicherung für deinen Liebling finden. Schnell, unkompliziert und genau auf eure Bedürfnisse zugeschnitten.
            </p>
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-xl px-12 h-16 shadow-2xl transition-all hover:scale-105"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <MessageCircle className="mr-3 h-7 w-7" />
              Jetzt unverbindlich schreiben
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="bewertungen" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-heading">Das sagen unsere Kunden</h2>
            <p className="section-subheading">
              Über 450 Bewertungen mit 4,69 von 5 Sternen — Ihre Zufriedenheit ist unser Antrieb.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-2xl mx-auto mb-12">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-10 w-10 md:h-12 md:w-12 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-center mb-6">
                  <div className="text-5xl md:text-6xl font-extrabold text-[#097E92] mb-2">
                    <AnimatedCounter target={469} suffix="" /> / 500
                  </div>
                  <p className="text-gray-500 text-lg">Basierend auf 450+ Bewertungen</p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 mt-8">
                  <img src="/ProvenExpertTopEmpfehlung2024.png" alt="Top Empfehlung 2024" className="h-28 md:h-36 object-contain" loading="lazy" />
                  <img src="/topservice_300.png" alt="Top Dienstleister" className="h-28 md:h-36 object-contain" loading="lazy" />
                </div>
              </div>
            </div>
          </ScrollReveal>
          <div id="pewl"></div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-20 bg-gray-50 scroll-mt-20">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-heading">Häufig gestellte Fragen</h2>
            <p className="section-subheading">Alles was du über Tierversicherungen wissen musst.</p>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqData.map((item, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="border border-gray-200 rounded-xl px-6 data-[state=open]:border-[#097E92]/30 data-[state=open]:shadow-sm transition-all bg-white">
                  <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-heading">Wir sind für dich persönlich da</h2>
            <p className="section-subheading">Ruf an, schreib oder komm vorbei — wie's dir passt.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal>
              <Card className="border-none shadow-lg h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[#003781]">Kontaktinformationen</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-[#097E92] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Allianz Versicherung Sven Jaeger</p>
                        <p className="text-gray-600">Bahnhofstraße 2</p>
                        <p className="text-gray-600">73329 Kuchen</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="h-6 w-6 text-[#097E92]" />
                      <a href="tel:073319460350" className="hover:text-[#097E92] transition-colors font-medium">07331 9460350</a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="h-6 w-6 text-[#097E92]" />
                      <a href="mailto:agentur.svenjaeger@allianz.de" className="hover:text-[#097E92] transition-colors">agentur.svenjaeger@allianz.de</a>
                    </div>
                    <div className="flex items-center gap-4">
                      <MessageCircle className="h-6 w-6 text-[#097E92]" />
                      <button onClick={() => window.open(whatsappLink, '_blank')} className="hover:text-[#097E92] transition-colors font-medium">
                        WhatsApp Nachricht senden
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal>
              <Card className="border-none shadow-lg h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[#003781]">Öffnungszeiten</h3>
                  <div className="space-y-3 text-sm">
                    {[
                      ["Montag", "08:30 - 12:00 / 14:00 - 17:30"],
                      ["Dienstag", "08:30 - 12:00 / 14:00 - 17:30"],
                      ["Mittwoch", "08:30 - 12:00"],
                      ["Donnerstag", "08:30 - 12:00 / 14:00 - 17:30"],
                      ["Freitag", "08:30 - 12:00"],
                      ["Sa / So", "Geschlossen"],
                    ].map(([day, time]) => (
                      <div key={day} className="flex justify-between">
                        <span className="font-semibold">{day}</span>
                        <span className="text-gray-500">{time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 bg-[#097E92]/10 rounded-xl">
                    <p className="text-sm"><strong>Telefonisch erreichbar:</strong><br />Montag bis Freitag ab 08:30 Uhr</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003781] text-white py-8">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">AnimalGuard</h4>
              <p className="text-sm text-white/80">Dein Allianz-Partner für Tierversicherungen in Kuchen und Umgebung.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Kontakt</h4>
              <p className="text-sm text-white/80">Sven Jaeger</p>
              <p className="text-sm text-white/80">Bahnhofstraße 2, 73329 Kuchen</p>
              <p className="text-sm text-white/80">Tel: 07331 9460350</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Rechtliches</h4>
              <div className="space-y-2 text-sm">
                <a href="https://vertretung.allianz.de/agentur.svenjaeger/impressum/" target="_blank" rel="noopener noreferrer" className="block text-white/80 hover:text-white transition-colors">Impressum</a>
                <a href="https://vertretung.allianz.de/agentur.svenjaeger/datenschutz/" target="_blank" rel="noopener noreferrer" className="block text-white/80 hover:text-white transition-colors">Datenschutz</a>
                <a href="/erstinformation" className="block text-white/80 hover:text-white transition-colors">Erstinformation</a>
                <a href="/beschwerden" className="block text-white/80 hover:text-white transition-colors">Beschwerden</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} Allianz Versicherung Sven Jaeger. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>

      {/* Spacer for mobile sticky CTA */}
      <div className="h-16 lg:hidden" />

      <StickyCTA whatsappLink={whatsappLink} onContact={scrollToContact} />
      <BackToTop />
    </div>
  );
}
