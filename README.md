# DIAS Platform v4.1.1 🌟

**Dein Digitaler Intelligenter Assistent** - KI-Plattform für Bildung und Produktivität mit dynamischem Glass Morphism Design.

> Hochmoderne WebUI für Digitaler Intelligenter Assistent v4.1 und 7 AI-Modulen

![DIAS Glass Morphism](./tests/screenshots/glassmorphism-v4.1-homepage.png)

## 🚀 Was ist DIAS?

DIAS ist eine Web-Plattform mit fortschrittlichem **Glass Morphism Design v4.1** und 7 spezialisierten KI-Tools für Studenten, Lehrende und Forschende:

### 🎯 AI-Module
- **PaperHunt-Model** - Wissenschaftliche Paper finden und analysieren
- **Hochschul-Chatbot** - KI-Assistent für Hochschulfragen  
- **Prompt-Generation** - Optimierte Prompts generieren
- **Schreib-Assistent** - Intelligente Schreibhilfe
- **DIAS-Lernplattform** - Personalisierte Lernumgebung
- **Karteikarten-Model** - Intelligente Lernkarten erstellen
- **Lernplan Generator** - Individuelle Lernpläne entwickeln

## ✨ Glass Morphism v4.1 Features

### 🎨 Design System
- **4-Tier Glass System**: Subtle → Medium → Strong → Premium
- **Dynamic Background Elements**: Schwebende Glass-Panels mit animierten Blur-Effekten
- **Interactive Mouse Tracking**: Glass-Elemente folgen der Mausbewegung
- **Responsive Typography**: Optimierte Titel-Hierarchie für maximale Aufmerksamkeit
- **Consistent Module Cards**: Einheitliche Höhen (320px) für perfekte Grid-Darstellung

### 🔮 Animationen & Interaktionen
- **Pulsing Glass Waves**: Große pulsierende Glass-Overlays
- **Floating Glass Orbs**: Dynamische Micro-Partikel mit Backdrop-Blur
- **Depth Hover Effects**: 3D-Transformationen mit Scale und Shadow-Transitions
- **Shimmer Effects**: Subtile Leucht-Animationen auf Module-Cards
- **Gradient Text Effects**: DIAS-Titel mit animierten Glow-Effekten

### 🎯 Component Architecture
```
├── Header (glass-strong)      - Navigation mit Premium Glass
├── Sidebar (glass-premium)    - Maximale Glass-Intensität
├── ModuleCard (glass-medium)  - Ausgewogene Glass-Effekte
└── Background (glass-overlay) - Layered Depth-System
```

## 🛠 Tech Stack

- **Framework**: Next.js 15 mit React 19
- **Styling**: Tailwind CSS mit Custom Glass Morphism System
- **Animations**: Framer Motion für Performance-optimierte Animationen
- **TypeScript**: Vollständige Type-Safety
- **Testing**: Playwright für Frontend-Tests und Screenshot-Dokumentation
- **Design Tokens**: Systematische Design-System-Tokens in `lib/design-system.ts`

## 🚀 Schnellstart

### Development Server
```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev
# oder auf spezifischem Port
PORT=3015 npm run dev
```

### Docker Setup
```bash
# Docker Container erstellen und starten
docker compose up -d --build

# Container läuft auf Port 3020
open http://localhost:3020
```

### Testing
```bash
# Playwright Tests ausführen
npm test

# Nur Glass Morphism Verification
npx playwright test tests/glassmorphism-verification.spec.ts

# Screenshots neu generieren
npx playwright test tests/glassmorphism-v4.1-screenshots.spec.ts
```

## 📱 URLs & Ports

- **Development**: http://localhost:3015
- **Docker**: http://localhost:3020
- **Network**: http://192.168.0.167:3015

## 🧪 Testing & Documentation

### Screenshots verfügbar:
- ✅ Full Homepage mit Glass Morphism Effects
- ✅ Header Section mit Navigation
- ✅ Module Cards Grid (Normal & Hover States)
- ✅ Responsive Views (Mobile/Tablet)
- ✅ Interactive Elements (Buttons, Version Badge)
- ✅ Background Effects und Floating Elements

### Test Suites:
- **`glassmorphism-verification.spec.ts`** - Funktionalitäts-Verifikation
- **`glassmorphism-v4.1-screenshots.spec.ts`** - Visual Documentation
- **`frontend-analysis.spec.ts`** - Design Analysis

## 🎨 Design-Prinzipien

### Glass Morphism Hierarchy
1. **glass-subtle** (`bg-white/70 backdrop-blur-sm`) - Secondary Elements
2. **glass-medium** (`bg-white/80 backdrop-blur-md`) - Primary Cards
3. **glass-strong** (`bg-white/90 backdrop-blur-xl`) - Navigation/Headers
4. **glass-premium** (`gradient overlay backdrop-blur-2xl`) - Hero Elements

### Animation System
- **Primary**: Main floating animations (6s cycles)
- **Secondary**: Hover lift effects (0.3s spring)
- **Micro**: Subtle interaction feedback (3s pulses)

## 📁 Projektstruktur

```
dias-platform/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage mit Glass Morphism
│   ├── layout.tsx         # Root Layout
│   └── globals.css        # Glass Morphism System
├── components/            # React Components
│   ├── Header.tsx         # Glass-Strong Navigation
│   ├── Sidebar.tsx        # Glass-Premium Sidebar
│   └── ModuleCard.tsx     # Glass-Medium Cards
├── lib/                   # Utilities
│   ├── design-system.ts   # Design Tokens
│   └── version.ts         # Version Management
├── tests/                 # Playwright Tests
│   ├── screenshots/       # Visual Documentation
│   └── *.spec.ts         # Test Suites
└── Docker Setup          # Container Configuration
```

## 🌟 Version History

### v4.1.1 (Current) - Dynamic Glass Morphism
- ✨ Dynamische Glass Background Elements
- 🎯 Optimierte Titel-Typography für bessere Attention
- 🔮 Interactive Mouse-Following Glass Effects
- 📱 Einheitliche Module-Card Größen (320px)
- 🧪 Comprehensive Screenshot Documentation

### v4.0.1 - Enhanced Blue Harmony
- 🎨 Clean Light Mode Design
- 💙 Harmonische Blau-Glow Optimierung
- ✨ Enhanced Floating Animations
- 🔄 Smooth Transition Effects

### v3.1.1 - Foundation
- 🏗️ Initial Glass Morphism Implementation
- 📱 Responsive Design
- 🎨 Apple-Inspired Aesthetics

## 🚧 Development Notes

### CLAUDE.md Guidelines beachtet:
- ✅ Lean Code ohne Overengineering
- ✅ Test Scripts in `/tests` Folder
- ✅ Playwright für Frontend Testing
- ✅ Screenshots für Look & Feel Analysis
- ✅ Version Build Numbers auf Frontend
- ✅ Docker Setup für Development

### Git Workflow:
- **Stable Version**: Commit `9b162c1b` (fallback verfügbar)
- **Branch**: `glass-morphism-v4.1`
- **Auto-Commits**: Nach jeder Funktions-Implementierung

## 👤 Credits

**Entwickelt von Betiel Woldai**  
*Powered by HS Ansbach*

---

**DIAS Platform v4.1.1** - "Wissen wird zu Verstehen, Lernen wird zu Erleben."

🤖 *Generated with [Claude Code](https://claude.ai/code)*