import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Heart, Clock, Phone, MessageCircle, Mail, MapPin, CheckCircle, Star, ArrowRight, PawPrint, Stethoscope, Dog, Cat, Rabbit, ChevronRight, Award, Zap, Users } from "lucide-react";
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
  const whatsappLink = "https://wa.me/4973319460350?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Tierversicherung.";

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Load ProvenExpert widget
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.provenexpert.com/widget/landing_allianz-jaeger-versicherungen-immobilien.js?feedback=1&avatar=1&competence=1&language=de-de&style=white";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden pt-16">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#002a42] via-[#07647a] to-[#0a9ab0]" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative container py-16 md:py-24 lg:py-32 px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold text-white/90 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                <Shield className="w-4 h-4 text-teal-300" />
                Allianz Tierversicherung
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-[1.1] tracking-tight text-white">
                Dein Partner
                <br />
                <span className="bg-gradient-to-r from-teal-200 to-emerald-300 bg-clip-text text-transparent">für alle Felle</span>
              </h1>

              <p className="text-lg md:text-xl mb-8 text-white/85 max-w-lg leading-relaxed">
                Maßgeschneiderter Schutz für Hund, Katze & Pferd. Persönliche Beratung. Schnelle Erstattung — bis zu 100%.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-base md:text-lg font-bold px-7 h-14 rounded-xl shadow-xl transition-all hover:scale-[1.03] hover:shadow-2xl"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Beratung
                </a>
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 text-base md:text-lg font-semibold px-7 h-14 rounded-xl shadow-lg transition-all hover:scale-[1.03] backdrop-blur-sm"
                >
                  Kontakt aufnehmen
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-3 animate-fade-in-up animation-delay-300">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2">
                  <div className="flex -space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-white">4.69/5</span>
                  <span className="text-xs text-teal-200/80">450+ Bewertungen</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2">
                  <Award className="w-4 h-4 text-yellow-300" />
                  <span className="text-sm font-semibold text-white">Top Empfehlung 2024</span>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="hidden lg:block animate-fade-in-up animation-delay-200">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-teal-400/20 to-emerald-400/20 rounded-3xl blur-2xl" />
                <img
                  src="/hero-pets.jpg"
                  alt="Glückliche Haustiere — Hund und Katze"
                  className="relative rounded-2xl shadow-2xl w-full h-auto border-2 border-white/15"
                  loading="eager"
                />
                {/* Floating stat card */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-5 py-3 flex items-center gap-3">
                  <div className="bg-[#097E92] rounded-full w-10 h-10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-[#003781]">450+</div>
                    <div className="text-xs text-gray-500">zufriedene Kunden</div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 bg-[#25D366] text-white rounded-full px-4 py-2 shadow-lg text-sm font-bold">
                  Kostenlose Beratung
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ===== TIERARTEN SECTION ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
            {[
              { icon: Dog, label: "Hunde", color: "from-blue-500 to-blue-600" },
              { icon: Cat, label: "Katzen", color: "from-teal-500 to-teal-600" },
              { icon: Rabbit, label: "Pferde", color: "from-amber-500 to-amber-600" },
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => scrollToSection("leistungen")}
                className="group flex flex-col items-center gap-3 p-4 md:p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-br ${item.color} w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </div>
                <span className="text-sm md:text-base font-bold text-gray-700">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-xs font-bold text-[#097E92] bg-[#097E92]/10 rounded-full uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5" />
                Über uns
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-[#003781] leading-tight">
                Dein Tier verdient den
                <span className="text-[#097E92]"> besten Schutz</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
                Mal ehrlich: Dein Vierbeiner ist mehr als nur ein Haustier — er ist Familie. Und genau deshalb sollte auch sein Versicherungsschutz perfekt passen.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                Ich bin <strong>Sven Jaeger</strong>, dein Allianz-Partner vor Ort. Ob Hund, Katze oder Pferd — mit der richtigen Tierversicherung bist du auf der sicheren Seite.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: <AnimatedCounter target={450} suffix="+" />, label: "Zufriedene Kunden" },
                  { value: "100%", label: "Erstattung möglich" },
                  { value: "0€", label: "Beratungskosten" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-gray-50">
                    <div className="text-2xl md:text-3xl font-extrabold text-[#097E92]">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-tr from-[#097E92]/20 to-[#003781]/10 rounded-3xl blur-xl" />
                <img
                  src="/pets-together.jpg"
                  alt="Hund und Katze zusammen"
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section id="vorteile" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="container px-4">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-xs font-bold text-[#097E92] bg-[#097E92]/10 rounded-full uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                Vorteile
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#003781] mb-4">Warum AnimalGuard?</h2>
              <p className="text-lg text-gray-500 max-w-xl mx-auto">Drei gute Gründe für deinen Allianz-Partner vor Ort.</p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Shield, title: "Rundum-Schutz", desc: "Von der Routine-Untersuchung bis zur Not-OP: Die Allianz Tierversicherung deckt alles ab. Behandlungen, Operationen, Medikamente — du entscheidest, ich finde den Tarif.", gradient: "from-blue-500 to-blue-600" },
              { icon: Heart, title: "Persönlich & direkt", desc: "Kein Callcenter, keine Warteschleifen. Bei mir erreichst du direkt einen Ansprechpartner, der sich auskennt und Zeit für dich hat. Per WhatsApp, Telefon oder vor Ort.", gradient: "from-rose-500 to-pink-600" },
              { icon: Clock, title: "Unkompliziert & schnell", desc: "Wenn\u2019s drauf ankommt, muss es schnell gehen. Ich helfe dir bei der Schadensabwicklung und sorge dafür, dass du zügig dein Geld bekommst.", gradient: "from-teal-500 to-emerald-600" },
            ].map((item, i) => (
              <ScrollReveal key={i}>
                <Card className="group border-none shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`h-1.5 bg-gradient-to-r ${item.gradient}`} />
                    <div className="p-6 md:p-8">
                      <div className={`bg-gradient-to-br ${item.gradient} w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                        <item.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#003781]">{item.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="leistungen" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="container px-4">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-xs font-bold text-[#097E92] bg-[#097E92]/10 rounded-full uppercase tracking-wider">
                <Stethoscope className="w-3.5 h-3.5" />
                Leistungen
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#003781] mb-4">Unsere Leistungen</h2>
              <p className="text-lg text-gray-500 max-w-xl mx-auto">Umfassender Versicherungsschutz für dein Tier.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { icon: Award, title: "Erfahrung & Expertise", desc: "Wir kennen die Herausforderungen von Haustierbesitzern und bieten maßgeschneiderte Lösungen." },
              { icon: Stethoscope, title: "Umfangreiche Leistungen", desc: "Tierärztliche Behandlungen, Operationen, Medikamente und vieles mehr — alles abgedeckt." },
              { icon: Star, title: "Kundenzufriedenheit", desc: "Über 450 positive Bewertungen zeigen: Wir geben immer unser Bestes für dich." },
              { icon: Zap, title: "Flexibilität", desc: "Maßgeschneiderte Versicherungspakete, individuell auf deine Bedürfnisse zugeschnitten." },
              { icon: MessageCircle, title: "24/7 Support", desc: "Wir sind nur eine WhatsApp-Nachricht oder E-Mail entfernt. Jederzeit für dich da." },
              { icon: Clock, title: "Schnelle Erstattung", desc: "Transparente und zügige Abwicklung im Schadensfall. Ohne Bürokratie." },
            ].map((item, i) => (
              <ScrollReveal key={i}>
                <div className="group flex items-start gap-4 p-5 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100">
                  <div className="bg-[#097E92]/10 rounded-lg p-2.5 flex-shrink-0 group-hover:bg-[#097E92]/20 transition-colors">
                    <item.icon className="h-5 w-5 text-[#097E92]" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold mb-1.5 text-[#003781]">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#002a42] via-[#097E92] to-[#0a9ab0]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="container text-center relative z-10 px-4">
          <ScrollReveal>
            <PawPrint className="w-12 h-12 text-white/30 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
              Bereit für den<br className="hidden md:block" /> besten Schutz?
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white/85 leading-relaxed">
              Lass uns gemeinsam die perfekte Versicherung für deinen Liebling finden. Schnell, unkompliziert und genau auf eure Bedürfnisse zugeschnitten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg md:text-xl font-bold px-10 h-16 rounded-xl shadow-2xl transition-all hover:scale-[1.03]"
              >
                <MessageCircle className="h-6 w-6" />
                Jetzt WhatsApp schreiben
              </a>
              <a
                href="tel:073319460350"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 text-lg font-semibold px-8 h-16 rounded-xl transition-all hover:scale-[1.03] backdrop-blur-sm"
              >
                <Phone className="h-5 w-5" />
                Anrufen
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== REVIEWS SECTION ===== */}
      <section id="bewertungen" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="container px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-xs font-bold text-[#097E92] bg-[#097E92]/10 rounded-full uppercase tracking-wider">
                <Star className="w-3.5 h-3.5" />
                Bewertungen
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#003781] mb-4">Das sagen unsere Kunden</h2>
              <p className="text-lg text-gray-500 max-w-xl mx-auto">
                Über 450 Bewertungen mit 4,69 von 5 Sternen — deine Zufriedenheit ist unser Antrieb.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-2xl mx-auto mb-12">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-8 w-8 md:h-10 md:w-10 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-center mb-6">
                  <div className="text-5xl md:text-6xl font-extrabold text-[#097E92] mb-1">4.69</div>
                  <div className="text-gray-400 text-lg">von 5.00</div>
                  <p className="text-gray-500 mt-2">Basierend auf 450+ Bewertungen</p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 mt-8">
                  <img src="/ProvenExpertTopEmpfehlung2024.png" alt="Top Empfehlung 2024" className="h-24 md:h-32 object-contain" loading="lazy" />
                  <img src="/topservice_300.png" alt="Top Dienstleister" className="h-24 md:h-32 object-contain" loading="lazy" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ProvenExpert Live Widget */}
          <div id="pewl" className="max-w-4xl mx-auto"></div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="container px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-xs font-bold text-[#097E92] bg-[#097E92]/10 rounded-full uppercase tracking-wider">
                Häufige Fragen
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#003781] mb-4">Noch Fragen?</h2>
              <p className="text-lg text-gray-500 max-w-xl mx-auto">Alles was du über Tierversicherungen wissen musst.</p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqData.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="border border-gray-200 rounded-xl px-6 data-[state=open]:border-[#097E92]/30 data-[state=open]:shadow-md transition-all bg-white"
                >
                  <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-5 text-[#003781]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-10">
              <p className="text-gray-500 mb-4">Noch Fragen? Wir sind für dich da!</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#097E92] font-bold hover:text-[#076b7d] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Jetzt per WhatsApp fragen
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="container px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-xs font-bold text-[#097E92] bg-[#097E92]/10 rounded-full uppercase tracking-wider">
                <Phone className="w-3.5 h-3.5" />
                Kontakt
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#003781] mb-4">Persönlich für dich da</h2>
              <p className="text-lg text-gray-500 max-w-xl mx-auto">Ruf an, schreib oder komm vorbei — wie\u2019s dir passt.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal>
              <Card className="border border-gray-100 shadow-lg h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[#003781]">Kontaktdaten</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#097E92]/10 rounded-lg p-2.5">
                        <MapPin className="h-5 w-5 text-[#097E92]" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">Allianz Versicherung Sven Jaeger</p>
                        <p className="text-gray-600">Bahnhofstraße 2</p>
                        <p className="text-gray-600">73329 Kuchen</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-[#097E92]/10 rounded-lg p-2.5">
                        <Phone className="h-5 w-5 text-[#097E92]" />
                      </div>
                      <a href="tel:073319460350" className="font-semibold text-gray-800 hover:text-[#097E92] transition-colors">07331 9460350</a>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-[#097E92]/10 rounded-lg p-2.5">
                        <Mail className="h-5 w-5 text-[#097E92]" />
                      </div>
                      <a href="mailto:agentur.svenjaeger@allianz.de" className="text-gray-800 hover:text-[#097E92] transition-colors">agentur.svenjaeger@allianz.de</a>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-[#25D366]/10 rounded-lg p-2.5">
                        <MessageCircle className="h-5 w-5 text-[#25D366]" />
                      </div>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-800 hover:text-[#25D366] transition-colors">
                        WhatsApp schreiben
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="border border-gray-100 shadow-lg h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[#003781]">Öffnungszeiten</h3>
                  <div className="space-y-3">
                    {[
                      ["Montag", "08:30–12:00 / 14:00–17:30"],
                      ["Dienstag", "08:30–12:00 / 14:00–17:30"],
                      ["Mittwoch", "08:30–12:00"],
                      ["Donnerstag", "08:30–12:00 / 14:00–17:30"],
                      ["Freitag", "08:30–12:00"],
                      ["Sa / So", "Geschlossen"],
                    ].map(([day, time]) => (
                      <div key={day} className="flex justify-between py-2 border-b border-gray-50 last:border-0">
                        <span className="font-semibold text-gray-700">{day}</span>
                        <span className="text-gray-500 text-sm">{time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-[#097E92]/10 to-[#097E92]/5 rounded-xl border border-[#097E92]/10">
                    <p className="text-sm text-gray-700"><strong>Telefonisch erreichbar:</strong><br />Montag bis Freitag ab 08:30 Uhr</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#001e33] text-white py-12">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="AnimalGuard Logo" className="h-10 brightness-0 invert" />
                <span className="text-lg font-bold">AnimalGuard</span>
              </div>
              <p className="text-sm text-white/60 max-w-sm leading-relaxed">
                Dein Allianz-Partner für Tierversicherungen in Kuchen und Umgebung. Persönliche Beratung, die du verdienst.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontakt</h4>
              <div className="space-y-2 text-sm text-white/60">
                <p>Sven Jaeger</p>
                <p>Bahnhofstraße 2</p>
                <p>73329 Kuchen</p>
                <p>Tel: 07331 9460350</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Rechtliches</h4>
              <div className="space-y-2 text-sm">
                <a href="https://vertretung.allianz.de/agentur.svenjaeger/impressum/" target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-white transition-colors">Impressum</a>
                <a href="https://vertretung.allianz.de/agentur.svenjaeger/datenschutz/" target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-white transition-colors">Datenschutz</a>
                <a href="/erstinformation" className="block text-white/60 hover:text-white transition-colors">Erstinformation</a>
                <a href="/beschwerden" className="block text-white/60 hover:text-white transition-colors">Beschwerden</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/40">
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
