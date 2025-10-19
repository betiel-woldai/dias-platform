# DIAS Platform - Benutzerhandbuch

## Überblick
DIAS (Digitaler Intelligenter Assistent) ist eine moderne WebUI-Platform mit Clean Light Mode Design, die verschiedene KI-gestützte Tools und Services in einer zentralen Benutzeroberfläche vereint.

## Design System & Style Guide
Die DIAS-Plattform verfügt über ein umfassendes Design System, das in **`styleguide.md`** dokumentiert ist.

### Style Guide Inhalt
- **Farbsystem**: Primär- und Sekundärfarben, Text-Hierarchie, semantische Farben, Farbverläufe
- **Typografie**: Inter-Schriftfamilie, responsive Größenskala, Zeilenhöhen
- **Spacing**: 8px-Grid-System, Container-Breiten, responsive Layouts
- **Komponenten**: Buttons (3 Varianten), 4-stufiges Glass-Morphism-System, Formulare, Navigation
- **Effekte**: Border-Radius, 5-stufiges Schatten-System, 10+ Animationen
- **Breakpoints**: Mobile-First responsive Patterns
- **CSS-Variablen**: Komplette Design-Token-Referenz

### Verwendung
Für detaillierte Informationen zu Farben, Komponenten, Animationen und Best Practices siehe **`styleguide.md`** im Hauptverzeichnis.

### Wichtige Design-Prinzipien
1. **Glass Morphism First**: 4-stufiges System (subtle → medium → strong → premium)
2. **Animations-Philosophie**: Maximal 3 Hauptanimationen pro View
3. **Farbkonsistenz**: Blue-Cyan-Farbverlauf für primäre Aktionen
4. **8px-Grid**: Konsistentes Spacing-System
5. **Mobile-First**: Responsive Design mit progressiver Erweiterung

## Features (Version 4.1.1)

### Design Updates - Clean Light Mode
- **Komplett weißer Hintergrund**: Sauberes, ablenkungsfreies Design ohne Gradient-Effekte
- **Clean Header**: Seberfreier Header nur mit Keyvisual, DIAS Text und HS Ansbach Branding
- **Schwebendes Keyvisual**: Animiertes und schwebendes Keyvisual über dem DIAS 4.0 Titel
- **Light Mode Buttons**: "Mehr erfahren" Button im Light Mode mit grauer Schrift auf weißem Hintergrund
- **Vergrößerte Keyvisuals**: Sowohl Header (80x80px) als auch schwebendes Keyvisual (180x180px) vergrößert
- **Responsive Design**: Optimiert für Desktop und Mobile ohne Kompromisse

### Hauptkomponenten
- **Clean Header**: Minimalistischer Header mit Keyvisual, DIAS-Text nebeneinander und "Powered by HS Ansbach"
- **Schwebendes Keyvisual**: Zentrales animiertes Keyvisual mit Floating-, Rotation- und Scale-Animationen
- **Hero Section**: DIAS 4.0 Titel mit komplett weißem Hintergrund
- **Light Mode CTA**: "Mehr erfahren" Button perfekt im Light Mode styling
- **Modul-Cards**: Glassmorphism-Karten auf weißem Hintergrund mit subtilen Schatten
- **Version Display**: Integriert in Hero-Badge für bessere UX

### Verfügbare Module
1. **PaperHunt-Model** - Wissenschaftliche Paper finden und analysieren
2. **Hochschul-Chatbot** - KI-Assistent für Hochschulfragen  
3. **Prompt-Generation Model** - Optimierte Prompts generieren
4. **Schreib-Assistent** - Intelligente Schreibhilfe
5. **DIAS-Lernplattform** - Personalisierte Lernumgebung
6. **Karteikarten-Model** - Intelligente Lernkarten erstellen
7. **Lernplan Generator** - Individuelle Lernpläne entwickeln

## Entwicklung

### Setup
```bash
npm install
npm run dev
```

### Code-Qualität
```bash
# ESLint prüfen
npm run lint

# ESLint Fehler automatisch beheben
npm run lint:fix

# Strenge ESLint-Prüfung
npm run lint:strict
```

### Tests ausführen  
```bash
npm run test
```

### Build erstellen
```bash
npm run build
npm start
```

## Technologie-Stack
- **Frontend**: Next.js 15 mit TypeScript
- **Styling**: Tailwind CSS v3.4
- **Animationen**: Framer Motion v11.15
- **Icons**: Lucide React v0.539
- **Testing**: Playwright v1.54
- **Code-Qualität**: ESLint mit Next.js strict config
- **Deployment**: Vercel/Node.js
- **Design System**: Dokumentiert in styleguide.md

## Neue Features in v4.1.1

### Design System Dokumentation
- **Comprehensive Style Guide**: Komplettes Design System in `styleguide.md` dokumentiert
- **CSS Variables**: Alle Design-Tokens als CSS Custom Properties verfügbar
- **Component Patterns**: Vordefinierte Komponenten-Muster mit Code-Beispielen
- **Animation Library**: 10+ Keyframe-Animationen dokumentiert und wiederverwendbar
- **4-Tier Glass Morphism**: Systematisches Glass-Effect-System
- **Design Principles**: Dokumentierte Design-Philosophie und Best Practices

### Design System Features
```
📁 styleguide.md
  ├── Color System (Primär, Sekundär, Semantisch, Verläufe)
  ├── Typography (Inter Font, Responsive Skala)
  ├── Spacing (8px Grid System)
  ├── Components (Buttons, Cards, Forms, Navigation)
  ├── Effects (Shadows, Animations, Transitions)
  ├── Breakpoints (Mobile-First Responsive)
  └── CSS Variables (Complete Token Reference)
```

### Verwendung im Code
```jsx
// Primärer Button mit Design System
<button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-2xl text-white font-semibold text-lg shadow-2xl shadow-blue-500/70 transition-all duration-300">
  Aktion
</button>

// Glass Card (Medium Tier)
<div className="glass-medium glass-depth-hover glass-float rounded-3xl p-8">
  Content
</div>
```

## Features aus v4.0.1

### Clean Light Mode Updates
- **Header Redesign**: Entfernung der kleinen viereckigen Icon mit Kreis, nur noch Keyvisual mit DIAS Text
- **Nebeneinander Layout**: "DIAS" und "Digitaler Intelligenter Assistent" stehen jetzt nebeneinander
- **Branding Integration**: "Powered by HS Ansbach" wurde unter dem DIAS Text hinzugefügt
- **Schwebendes Keyvisual**: Animiertes Keyvisual schwebt über dem DIAS 4.0 Titel mit Floating-Animation
- **Komplett weißer Hintergrund**: Alle Gradient-Effekte, Grid-Pattern und Background-Orbs entfernt
- **Light Mode Button**: "Mehr erfahren" Button von Dark auf Light Mode konvertiert
- **Größere Keyvisuals**: Header Keyvisual auf 80x80px und schwebendes Keyvisual auf 180x180px vergrößert
- **Header ohne Abtrennung**: Shadow und Border vom Header entfernt für nahtloses Design

### Technische Updates
- **Version Upgrade**: Update auf v4.0.1
- **Animation Preservation**: Alle bestehenden Animationen beibehalten bei cleanerem Design
- **Performance Optimization**: Weniger DOM-Elemente durch Entfernung der Background-Effekte
- **Enhanced Testing**: Umfassende Playwright-Tests für alle UI-Änderungen

### Finale Farbharmonie-Optimierung v4.0.1
- **Wissenschaftliche Farbabstimmung**: Basis-Blau auf blue-500 harmonisiert für perfektes Leuchten
- **Glow-Konsistenz**: Alle Leucht-Effekte mit blue-400 Palette für einheitliches Erscheinungsbild
- **Text-Shadow Enhancement**: Verstärkte Glow-Effekte für optimale Sichtbarkeit auf weißem Hintergrund
- **UX-Perfektion**: Sanfte Hover-Übergänge mit transition-all duration-300

### Komponenten-Matrix (Final)
| Komponente | Basis-Farbe | Glow-Farbe | Text-Shadow |
|-----------|-------------|------------|-------------|
| DIAS Header | blue-500 | - | rgba(59, 130, 246, 0.4) |
| DIAS 4.0 Titel | blue-500 | - | rgba(59, 130, 246, 0.5) + 80px spread |
| Version Button | bg-blue-500 | shadow-blue-400/70→90 | - |
| Los geht's Button | bg-blue-500 | shadow-blue-400/70→90 | - |
| Logout Button | bg-blue-500 | shadow-blue-500/60→blue-400/80 | - |
| Keyvisual Glow | - | from-blue-400/40 via-blue-500/30 to-blue-600/40 | - |

### Testing-Checkliste (Final)
✅ Alle Text-Elemente perfekt lesbar mit optimalem Kontrast  
✅ Hover-Effekte harmonisch im Light Mode  
✅ Responsive Design funktioniert flawless  
✅ Logo und Icons perfekt abgestimmt  
✅ Schatten und Glow-Effekte professionell und subtil  
✅ Farbharmonie wissenschaftlich optimiert  

### GitHub Repository
**Repository**: https://github.com/betiel-woldai/dias-platform.git  
**Branch**: clean-frontend  
**Status**: Production-ready ✅  

## Version
Aktuelle Version: 4.1.1

### Version History
- **v4.1.1**: Comprehensive design system style guide (styleguide.md)
- **v4.0.1**: Clean Light Mode mit optimierter Farbharmonie
- **v4.0**: Initial Glass Morphism und Blue-Cyan Branding