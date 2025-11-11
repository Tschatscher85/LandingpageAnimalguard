# 🐾 AnimalGuard - Tierversicherung Landing Page

**Professionelle Landing Page für Tierversicherungen von Allianz Versicherung Sven Jaeger**

[![Live Demo](https://img.shields.io/badge/Demo-Live-success)](https://versicherungs-jaeger.eu/animalguard/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 📋 Inhaltsverzeichnis

- [Über das Projekt](#über-das-projekt)
- [Features](#features)
- [Technologie-Stack](#technologie-stack)
- [Installation](#installation)
- [Deployment](#deployment)
- [Projekt-Struktur](#projekt-struktur)
- [Integrationen](#integrationen)
- [DSGVO-Konformität](#dsgvo-konformität)
- [Kontakt](#kontakt)

---

## 🎯 Über das Projekt

AnimalGuard ist eine moderne, responsive Landing Page für die Tierversicherungsberatung von **Sven Jaeger** (Allianz Versicherung). Die Seite bietet umfassende Informationen über Tierversicherungen für Hunde, Katzen, Pferde und andere Haustiere.

### Zielgruppe
- Tierbesitzer auf der Suche nach Versicherungsschutz
- Interessenten für Tierkrankenversicherungen
- Kunden der Allianz Versicherungsagentur Sven Jaeger

### Ziele
- Professionelle Darstellung des Versicherungsangebots
- Einfache Kontaktaufnahme via WhatsApp und Telefon
- Vertrauensaufbau durch Kundenbewertungen (ProvenExpert)
- DSGVO-konforme Datenverarbeitung

---

## ✨ Features

### 🎨 Design & UX
- ✅ **Responsive Design** - Optimiert für Desktop, Tablet und Mobile
- ✅ **Allianz Branding** - Corporate Design in Allianz Blau (#003781)
- ✅ **WhatsApp Integration** - Direkter Kontakt via WhatsApp Button
- ✅ **Moderne UI** - Professionell und benutzerfreundlich
- ✅ **Touch-optimiert** - Mindestens 48px große Touch-Targets
- ✅ **Lazy Loading** - Optimierte Ladezeiten durch verzögertes Laden von Bildern

### 📱 Funktionen
- ✅ **Hero Section** - Eindrucksvoller Einstieg mit Haustier-Bildern
- ✅ **Leistungsübersicht** - 3 Hauptvorteile (Schutz, Fürsorge, Schnelligkeit)
- ✅ **Service-Bereich** - 6 Kernleistungen im Grid-Layout
- ✅ **Kundenbewertungen** - ProvenExpert Integration (4,69/5,00 Sterne)
- ✅ **Kontaktbereich** - Öffnungszeiten, Telefon, E-Mail, Adresse
- ✅ **Live Chat** - Superchat Widget für direkten Support
- ✅ **Cookie Banner** - DSGVO-konform mit Einstellungsdialog

### 🔒 Rechtliches
- ✅ **Impressum** - Verlinkung zu Hauptseite
- ✅ **Datenschutz** - Verlinkung zu Hauptseite
- ✅ **Erstinformation** - Versicherungsvermittler-Informationen
- ✅ **Beschwerden** - Beschwerdeverfahren und Schlichtungsstellen

### 🏆 Social Proof
- ✅ **ProvenExpert ProSeal** - Floating Widget (rechts, nur Desktop)
- ✅ **ProvenExpert Widgetbar** - Bottom Bar (nur Desktop)
- ✅ **Bewertungssiegel** - 2 ProvenExpert 2024 Badges
- ✅ **450+ Bewertungen** - Echte Kundenmeinungen

---

## 🛠 Technologie-Stack

### Frontend
- **React 19** - Moderne UI-Bibliothek
- **TypeScript** - Typsichere Entwicklung
- **Tailwind CSS 4** - Utility-First CSS Framework
- **Vite** - Schneller Build-Tool und Dev-Server
- **Wouter** - Leichtgewichtiges Routing

### UI-Komponenten
- **Lucide React** - Icon-Bibliothek (Shield, Heart, Clock, Phone, Mail, MapPin, Star)
- **Google Fonts** - Inter Font Family

### Externe Integrationen
- **ProvenExpert** - Bewertungsplattform und Widgets
- **Superchat** - Live Chat Widget
- **WhatsApp Business** - Direktkontakt-Integration

### Build & Deployment
- **pnpm** - Paketmanager
- **Strato FTP** - Hosting-Plattform
- **GitHub** - Versionskontrolle

---

## 🚀 Installation

### Voraussetzungen
- Node.js 22.13.0 oder höher
- pnpm (empfohlen) oder npm

### Lokale Installation

```bash
# Repository klonen
git clone https://github.com/Tschatscher85/LandingpageAnimalguard.git
cd LandingpageAnimalguard

# Abhängigkeiten installieren
pnpm install

# Development Server starten
pnpm run dev
```

Der Development Server läuft auf `http://localhost:3000`

### Build für Produktion

```bash
# Production Build erstellen
pnpm run build

# Build-Dateien befinden sich in: dist/public/
```

---

## 📦 Deployment

### Strato FTP Upload

1. **Build erstellen:**
   ```bash
   pnpm run build
   ```

2. **Dateien vorbereiten:**
   - Alle Dateien aus `dist/public/` in ein ZIP packen
   - ZIP entpacken

3. **FTP Upload:**
   - FTP-Client öffnen (z.B. FileZilla)
   - Verbindung zu Strato herstellen
   - Alle Dateien nach `/animalguard/` hochladen

4. **Fertig!**
   - Seite ist erreichbar unter: `https://versicherungs-jaeger.eu/animalguard/`

### Wichtige Dateien für Upload
```
animalguard/
├── index.html                          # Haupt-HTML
├── assets/
│   ├── index-[hash].css               # Styles
│   └── index-[hash].js                # JavaScript
├── LogoBlauTransparent.png            # Allianz Jaeger Logo
├── hero-pets.jpg                      # Hero Hintergrundbild
├── pets-together.jpg                  # Weitere Bilder
├── ProvenExpertTopEmpfehlung2024.png  # Bewertungssiegel 1
└── topservice_300.png                 # Bewertungssiegel 2
```

---

## 📁 Projekt-Struktur

```
animalguard/
├── client/
│   ├── public/                    # Statische Assets
│   │   ├── LogoBlauTransparent.png
│   │   ├── hero-pets.jpg
│   │   ├── pets-together.jpg
│   │   ├── ProvenExpertTopEmpfehlung2024.png
│   │   └── topservice_300.png
│   ├── src/
│   │   ├── components/            # React Komponenten
│   │   │   ├── ui/               # shadcn/ui Komponenten
│   │   │   ├── CookieBanner.tsx  # Cookie Consent Banner
│   │   │   └── ErrorBoundary.tsx
│   │   ├── contexts/             # React Contexts
│   │   │   └── ThemeContext.tsx
│   │   ├── hooks/                # Custom Hooks
│   │   ├── lib/                  # Utilities
│   │   ├── pages/                # Seiten
│   │   │   ├── Home.tsx          # Hauptseite
│   │   │   ├── Erstinformation.tsx
│   │   │   ├── Beschwerden.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx               # Haupt-App mit Routing
│   │   ├── main.tsx              # Entry Point
│   │   └── index.css             # Globale Styles
│   └── index.html                # HTML Template
├── shared/
│   └── const.ts                  # Gemeinsame Konstanten
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🔌 Integrationen

### ProvenExpert

**ProSeal Widget (rechts, Desktop only):**
```html
<div id="_pe_circle_widget"></div>
<script src="https://www.provenexpert.com/widget/circle.js?a=..."></script>
```

**Widgetbar (unten, Desktop only):**
```html
<div id="_pe_widgetbar_widget"></div>
<script src="https://www.provenexpert.com/widget/widgetbar.js?a=..."></script>
```

**Bewertungen:**
- Rating: 4,69/5,00
- Anzahl: 450+ Bewertungen
- Siegel: Top Dienstleister 2024, Von Kunden Empfohlen 2024

### Superchat Live Chat

```html
<script>
window.superChatSettings = {
  organization: "...",
  channel: "..."
};
</script>
<script src="https://widget.superchat.de/widget.js"></script>
```

**Position:** Rechts unten (blauer Button)

### WhatsApp Business

**Telefonnummer:** +49 7331 9460350

**Integration:**
```tsx
<a 
  href="https://wa.me/4973319460350?text=Hallo%20Herr%20Jaeger..."
  className="bg-[#25D366] hover:bg-[#20BA5A]..."
>
  Jetzt unverbindlich schreiben
</a>
```

---

## 🔒 DSGVO-Konformität

### Cookie Banner
- ✅ Opt-in für Marketing & Analytics Cookies
- ✅ Granulare Einstellungen (Notwendig, Marketing, Analytics)
- ✅ LocalStorage-Persistierung der Einstellungen
- ✅ Jederzeit widerrufbar

### Cookie-Kategorien

**Notwendige Cookies (immer aktiv):**
- Session-Management
- Sicherheitsfunktionen

**Marketing Cookies (optional):**
- ProvenExpert Widgets
- Superchat Live Chat

**Analytics Cookies (optional):**
- Nutzungsstatistiken

### Datenschutz-Links
- Impressum: `https://versicherungs-jaeger.eu/impressum/`
- Datenschutz: `https://versicherungs-jaeger.eu/datenschutz/`

---

## 👤 Kontakt

**Sven Jaeger**  
Allianz Versicherung

📍 **Adresse:**  
Bahnhofstraße 2  
73329 Kuchen

📞 **Telefon:** 07331 9460350  
📧 **E-Mail:** agentur.svenjaeger@allianz.de  
💬 **WhatsApp:** +49 7331 9460350

🔗 **Website:** https://versicherungs-jaeger.eu  
🐾 **AnimalGuard:** https://versicherungs-jaeger.eu/animalguard/

**Vermittlerregisternummer:** D-ML30-9NBY5-27

---

## 📄 Öffnungszeiten

| Tag | Zeiten |
|-----|--------|
| Montag | 09:00 - 12:00 Uhr & 14:00 - 18:00 Uhr |
| Dienstag | 09:00 - 12:00 Uhr & 14:00 - 18:00 Uhr |
| Mittwoch | 09:00 - 12:00 Uhr |
| Donnerstag | 09:00 - 12:00 Uhr & 14:00 - 18:00 Uhr |
| Freitag | 09:00 - 12:00 Uhr |

**Termine nach Vereinbarung auch außerhalb der Öffnungszeiten möglich!**

---

## 📊 Performance

- ✅ **Lazy Loading** für Bilder
- ✅ **Optimierte Assets** (Komprimierung)
- ✅ **Mobile-First** Ansatz
- ✅ **Schnelle Ladezeiten** durch Vite Build
- ✅ **SEO-freundlich** (semantisches HTML)

---

## 🎨 Design-System

### Farben

| Verwendung | Hex | Beschreibung |
|------------|-----|--------------|
| Primary | `#003781` | Allianz Blau |
| CTA | `#25D366` | WhatsApp Grün |
| Background | `#FFFFFF` | Weiß |
| Text | `#1F2937` | Dunkelgrau |
| Accent | `#F3F4F6` | Hellgrau |

### Typografie
- **Font Family:** Inter (Google Fonts)
- **Headings:** 700 (Bold)
- **Body:** 400 (Regular)

### Spacing
- **Container:** max-width: 1200px
- **Section Padding:** py-16 (Desktop), py-12 (Mobile)
- **Grid Gap:** gap-8 (Desktop), gap-6 (Mobile)

---

## 🔧 Wartung & Updates

### Inhalte aktualisieren

**Bewertungen ändern:**
```tsx
// client/src/pages/Home.tsx
<div className="text-5xl font-bold text-gray-900">4,69</div>
<div className="text-gray-600">aus 450+ Bewertungen</div>
```

**Öffnungszeiten ändern:**
```tsx
// client/src/pages/Home.tsx
<div className="space-y-2 text-gray-700">
  <p><strong>Montag:</strong> 09:00 - 12:00 Uhr & 14:00 - 18:00 Uhr</p>
  // ...
</div>
```

**Kontaktdaten ändern:**
```tsx
// client/src/pages/Home.tsx
<a href="tel:073319460350">07331 9460350</a>
<a href="mailto:agentur.svenjaeger@allianz.de">...</a>
```

### Bilder austauschen

Neue Bilder in `client/public/` ablegen und Referenzen in `Home.tsx` aktualisieren:

```tsx
<img src="/neues-bild.jpg" alt="Beschreibung" />
```

---

## 📝 Lizenz

Dieses Projekt wurde für **Allianz Versicherung Sven Jaeger** entwickelt.  
Alle Rechte vorbehalten.

---

## 🙏 Danksagungen

- **Allianz** - Corporate Design & Branding
- **ProvenExpert** - Bewertungsplattform
- **Superchat** - Live Chat Lösung
- **React Team** - Framework
- **Tailwind CSS** - Styling Framework

---

## 📞 Support

Bei Fragen oder Problemen wenden Sie sich bitte an:

**Technischer Support:**  
GitHub Issues: https://github.com/Tschatscher85/LandingpageAnimalguard/issues

**Geschäftliche Anfragen:**  
Sven Jaeger: agentur.svenjaeger@allianz.de

---

**Entwickelt mit ❤️ für Tierbesitzer und ihre Lieblinge** 🐶🐱🐴

