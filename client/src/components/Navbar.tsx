import { useState, useEffect } from "react";
import { Phone, Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappNumber = "4973319460350";
  const whatsappMessage = encodeURIComponent("Hallo, ich interessiere mich für eine Tierversicherung.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Leistungen", id: "leistungen" },
    { label: "Vorteile", id: "vorteile" },
    { label: "Bewertungen", id: "bewertungen" },
    { label: "FAQ", id: "faq" },
    { label: "Kontakt", id: "contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between py-3">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="AnimalGuard Logo"
            className={`h-10 md:h-12 transition-all ${scrolled ? "" : "brightness-0 invert"}`}
          />
          <span className={`hidden sm:block text-sm font-bold transition-colors ${scrolled ? "text-[#003781]" : "text-white"}`}>
            AnimalGuard
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-medium transition-colors hover:text-[#097E92] ${scrolled ? "text-gray-700" : "text-white/90"}`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:073319460350"
            className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${scrolled ? "text-[#003781]" : "text-white"}`}
          >
            <Phone className="w-4 h-4" />
            07331 9460350
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${scrolled ? "bg-[#25D366] text-white hover:bg-[#20BA5A]" : "bg-[#25D366] text-white hover:bg-[#20BA5A]"}`}
          >
            <MessageCircle className="w-4 h-4 inline mr-1.5" />
            WhatsApp
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-gray-700" : "text-white"}`}
          aria-label="Menü"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg animate-fade-in pb-safe">
          <nav className="container py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
              >
                {link.label}
              </button>
            ))}
            <a href="tel:073319460350" className="block px-4 py-3 text-[#003781] font-semibold">
              <Phone className="w-4 h-4 inline mr-2" />07331 9460350
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-2 px-4 py-3 bg-[#25D366] text-white rounded-lg font-bold text-center"
              onClick={() => setMenuOpen(false)}
            >
              <MessageCircle className="w-5 h-5 inline mr-2" />
              WhatsApp Beratung
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
