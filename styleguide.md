# DIAS Platform Design System & Style Guide v4.1

> **Comprehensive design system documentation for the DIAS (Digitaler Intelligenter Assistent) platform**

---

## Table of Contents
1. [Color System](#1-color-system)
2. [Typography](#2-typography)
3. [Spacing Scale](#3-spacing-scale)
4. [Component Patterns](#4-component-patterns)
5. [Effects & Animations](#5-effects--animations)
6. [Breakpoints & Responsiveness](#6-breakpoints--responsiveness)
7. [CSS Variables & Tokens](#7-css-variables--tokens)

---

## 1. COLOR SYSTEM

### Primary Colors
The DIAS platform uses a sophisticated blue-cyan gradient system as its primary brand identity.

```css
:root {
  /* Primary Blue */
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;  /* dias-blue - main brand color */
  --color-primary-700: #1d4ed8;

  /* Secondary Cyan */
  --color-secondary-50: #ecfeff;
  --color-secondary-100: #cffafe;
  --color-secondary-500: #06b6d4;
  --color-secondary-600: #0891b2;  /* dias-cyan - accent color */
  --color-secondary-700: #0e7490;
}
```

**Usage:**
- **Primary Blue (#2563eb)**: Main brand color, primary CTAs, hero elements
- **Cyan (#0891b2)**: Accent color, gradients, secondary highlights
- **Gradients**: `from-blue-600 to-cyan-600` for primary actions

### Text Colors

```css
:root {
  /* Text Hierarchy */
  --text-primary: #111827;      /* gray-900 - Headings, primary text */
  --text-secondary: #4b5563;    /* gray-600 - Body text, descriptions */
  --text-muted: #6b7280;        /* gray-500 - Tertiary text, captions */
  --text-disabled: #9ca3af;     /* gray-400 - Disabled states */

  /* Link Colors */
  --text-link: #2563eb;         /* blue-600 */
  --text-link-hover: #1d4ed8;   /* blue-700 */
}
```

### Background & Surface Colors

```css
:root {
  /* Base Backgrounds */
  --bg-base: #ffffff;           /* White - main background */
  --bg-secondary: #f9fafb;      /* gray-50 - secondary background */
  --bg-tertiary: #f3f4f6;       /* gray-100 - tertiary surfaces */

  /* Glass Morphism Backgrounds */
  --glass-subtle: rgba(255, 255, 255, 0.7);
  --glass-medium: rgba(255, 255, 255, 0.8);
  --glass-strong: rgba(255, 255, 255, 0.9);
  --glass-premium: rgba(255, 255, 255, 0.95);
}
```

### Semantic Colors

```css
:root {
  /* Success */
  --color-success: #10b981;     /* green-500 */
  --color-success-bg: #d1fae5;  /* green-100 */

  /* Error */
  --color-error: #ef4444;       /* red-500 */
  --color-error-bg: #fee2e2;    /* red-100 */

  /* Warning */
  --color-warning: #f59e0b;     /* amber-500 */
  --color-warning-bg: #fef3c7;  /* amber-100 */

  /* Info */
  --color-info: #3b82f6;        /* blue-500 */
  --color-info-bg: #dbeafe;     /* blue-100 */
}
```

### State Colors

```css
:root {
  /* Interactive States */
  --state-hover-overlay: rgba(37, 99, 235, 0.05);
  --state-active-overlay: rgba(37, 99, 235, 0.1);
  --state-focus-ring: rgba(37, 99, 235, 0.5);
  --state-disabled-opacity: 0.5;

  /* Glass State Colors */
  --glass-hover: rgba(255, 255, 255, 0.95);
  --glass-active: rgba(255, 255, 255, 0.85);
}
```

### Gradient Presets

```css
/* Primary Gradients */
.gradient-primary {
  background: linear-gradient(to right, #2563eb, #0891b2);
}

.gradient-primary-hover {
  background: linear-gradient(to right, #1d4ed8, #0e7490);
}

/* Text Gradients */
.text-gradient {
  background: linear-gradient(to right, #2563eb, #1d4ed8, #0891b2);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Module-Specific Gradients */
.gradient-violet: from-violet-600 to-indigo-600
.gradient-blue: from-blue-600 to-cyan-600
.gradient-amber: from-amber-600 to-orange-600
.gradient-emerald: from-emerald-600 to-teal-600
.gradient-pink: from-pink-600 to-rose-600
.gradient-purple: from-purple-600 to-pink-600
.gradient-slate: from-slate-600 to-gray-700
```

---

## 2. TYPOGRAPHY

### Font Family

```css
:root {
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  --font-mono: 'SF Mono', 'Monaco', 'Cascadia Code', 'Courier New', monospace;
}

/* Font Configuration */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

**Weights Available:**
- 300 (Light) - Rarely used
- 400 (Regular) - Body text
- 500 (Medium) - Emphasized body text
- 600 (Semibold) - Subheadings, card titles
- 700 (Bold) - Headings, hero text

### Type Scale

```css
:root {
  /* Hero Typography */
  --text-hero-size: clamp(4rem, 8vw, 9rem);      /* 64-144px */
  --text-hero-weight: 700;
  --text-hero-line-height: 1;
  --text-hero-letter-spacing: -0.02em;

  /* Display (Large Headings) */
  --text-display-size: clamp(3rem, 6vw, 6rem);   /* 48-96px */
  --text-display-weight: 700;
  --text-display-line-height: 1.1;

  /* Title (Card/Section Headings) */
  --text-title-size: clamp(1.5rem, 2.5vw, 2rem); /* 24-32px */
  --text-title-weight: 600;
  --text-title-line-height: 1.2;

  /* Heading Levels */
  --text-h1: 2.25rem;   /* 36px - text-4xl */
  --text-h2: 1.875rem;  /* 30px - text-3xl */
  --text-h3: 1.5rem;    /* 24px - text-2xl */
  --text-h4: 1.25rem;   /* 20px - text-xl */
  --text-h5: 1.125rem;  /* 18px - text-lg */
  --text-h6: 1rem;      /* 16px - text-base */

  /* Body Text */
  --text-body-lg: 1.125rem;  /* 18px */
  --text-body: 1rem;         /* 16px */
  --text-body-sm: 0.875rem;  /* 14px */
  --text-body-xs: 0.75rem;   /* 12px */

  /* Line Heights */
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
}
```

### Typography Classes

```css
/* Hero Text */
.text-hero {
  font-size: var(--text-hero-size);
  font-weight: var(--text-hero-weight);
  line-height: var(--text-hero-line-height);
  letter-spacing: var(--text-hero-letter-spacing);
}

/* Title Text */
.text-title {
  font-size: var(--text-title-size);
  font-weight: var(--text-title-weight);
  line-height: var(--text-title-line-height);
}

/* Body Text */
.text-body {
  font-size: var(--text-body);
  font-weight: 400;
  line-height: var(--leading-normal);
}

/* Font Smoothing */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## 3. SPACING SCALE

### 8px Grid System
All spacing follows a consistent 8px base unit for perfect alignment.

```css
:root {
  /* Base Spacing Unit */
  --spacing-unit: 8px;

  /* Spacing Scale */
  --spacing-xs: 4px;      /* 0.5rem */
  --spacing-sm: 8px;      /* 1rem */
  --spacing-md: 16px;     /* 2rem */
  --spacing-lg: 24px;     /* 3rem */
  --spacing-xl: 32px;     /* 4rem */
  --spacing-2xl: 48px;    /* 6rem */
  --spacing-3xl: 64px;    /* 8rem */
  --spacing-4xl: 96px;    /* 12rem */
  --spacing-5xl: 128px;   /* 16rem */
}
```

### Tailwind Spacing Mapping

```css
/* Tailwind spacing classes used in DIAS */
.p-1   /* 4px */
.p-2   /* 8px */
.p-3   /* 12px */
.p-4   /* 16px */
.p-6   /* 24px */
.p-8   /* 32px */
.p-12  /* 48px */
.p-16  /* 64px */
.p-20  /* 80px */
.p-24  /* 96px */
```

### Container Widths

```css
:root {
  /* Container Max Widths */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1536px;

  /* DIAS Default Container */
  --container-default: 1280px;  /* max-w-7xl */
}
```

### Grid System

```css
/* Grid Gaps */
.grid-gap-sm: 16px;     /* gap-4 */
.grid-gap-md: 24px;     /* gap-6 */
.grid-gap-lg: 32px;     /* gap-8 */

/* Common Grid Layouts */
.grid-modules {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

@media (min-width: 768px) {
  .grid-modules {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-modules {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## 4. COMPONENT PATTERNS

### Buttons

#### Primary Button (Gradient CTA)
```css
.btn-primary {
  /* Base Styles */
  padding: 16px 32px;                    /* py-4 px-8 */
  border-radius: 16px;                   /* rounded-2xl */
  font-size: 1.125rem;                   /* text-lg */
  font-weight: 600;                      /* font-semibold */

  /* Colors */
  background: linear-gradient(to right, #2563eb, #0891b2);
  color: white;

  /* Effects */
  box-shadow: 0 25px 50px -12px rgba(37, 99, 235, 0.7);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  background: linear-gradient(to right, #1d4ed8, #0e7490);
  box-shadow: 0 35px 60px -12px rgba(6, 182, 212, 0.9);
  transform: scale(1.05);
}

.btn-primary:active {
  transform: scale(0.95);
}
```

**Implementation:**
```jsx
<button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-2xl text-white font-semibold text-lg shadow-2xl shadow-blue-500/70 hover:shadow-cyan-500/90 transition-all duration-300">
  Primary Action
</button>
```

#### Secondary Button (Glass)
```css
.btn-secondary {
  padding: 16px 32px;
  border-radius: 16px;
  font-size: 1.125rem;
  font-weight: 600;

  /* Glass Effect */
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  border: 2px solid rgba(209, 213, 219, 1);
  color: #1f2937;

  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(24px);
  border-color: rgba(37, 99, 235, 0.3);
  transform: scale(1.05);
}
```

**Implementation:**
```jsx
<button className="px-8 py-4 border-2 border-gray-300 rounded-2xl text-gray-800 font-semibold text-lg glass-strong glass-depth-hover">
  Secondary Action
</button>
```

#### Button Sizes
```css
/* Small Button */
.btn-sm {
  padding: 8px 16px;    /* py-2 px-4 */
  font-size: 0.875rem;  /* text-sm */
  border-radius: 12px;  /* rounded-xl */
}

/* Medium Button (Default) */
.btn-md {
  padding: 12px 24px;   /* py-3 px-6 */
  font-size: 1rem;      /* text-base */
  border-radius: 16px;  /* rounded-2xl */
}

/* Large Button */
.btn-lg {
  padding: 16px 32px;   /* py-4 px-8 */
  font-size: 1.125rem;  /* text-lg */
  border-radius: 16px;  /* rounded-2xl */
}

/* Extra Large Button */
.btn-xl {
  padding: 20px 40px;   /* py-5 px-10 */
  font-size: 1.25rem;   /* text-xl */
  border-radius: 20px;  /* rounded-3xl */
}
```

### Cards

#### Glass Card System (4-Tier Hierarchy)

```css
/* Tier 1: Subtle Glass (Secondary Elements) */
.glass-subtle {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 25px -12px rgba(0, 0, 0, 0.1);
}

/* Tier 2: Medium Glass (Primary Cards) */
.glass-medium {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(229, 231, 235, 0.4);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
}

/* Tier 3: Strong Glass (Navigation/Headers) */
.glass-strong {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(229, 231, 235, 0.5);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1),
              0 0 0 1px rgba(255, 255, 255, 0.05);
}

/* Tier 4: Premium Glass (Hero Elements) */
.glass-premium {
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.95),
    rgba(255, 255, 255, 0.85));
  backdrop-filter: blur(32px);
  border: 1px solid rgba(243, 244, 246, 0.6);
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.15);
}
```

#### Module Card (Standard Pattern)
```css
.module-card {
  /* Layout */
  padding: 32px;                    /* p-8 */
  border-radius: 24px;              /* rounded-3xl */
  min-height: 320px;

  /* Glass Effect */
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.95),
    rgba(255, 255, 255, 0.85));
  backdrop-filter: blur(32px);
  border: 2px solid transparent;

  /* Gradient Border */
  background-clip: padding-box;
  border-image: linear-gradient(145deg, #3b82f6, #06b6d4, #8b5cf6) 1;

  /* Shadow */
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.15);

  /* Transitions */
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.module-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 32px 64px -12px rgba(0, 0, 0, 0.15),
              0 0 0 1px rgba(255, 255, 255, 0.1),
              inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
}
```

**Implementation:**
```jsx
<div className="p-8 rounded-3xl glass-premium glass-depth-hover glass-float overflow-hidden shimmer gradient-border group-hover:dynamic-glow h-[320px]">
  {/* Card content */}
</div>
```

### Form Inputs

```css
.input-default {
  /* Layout */
  padding: 12px 16px;         /* py-3 px-4 */
  height: 48px;
  border-radius: 12px;        /* rounded-xl */

  /* Styling */
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(229, 231, 235, 1);

  /* Typography */
  font-size: 1rem;
  color: #111827;

  /* Transition */
  transition: all 0.2s ease;
}

.input-default:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.95);
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.input-default:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: rgba(243, 244, 246, 0.8);
}

.input-error {
  border-color: #ef4444;
  background: rgba(254, 226, 226, 0.3);
}

.input-error:focus {
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
```

### Navigation

#### Header
```css
.header {
  /* Layout */
  height: 80px;                  /* h-20 */
  padding: 0 32px;               /* px-8 */

  /* Glass Effect */
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  /* Positioning */
  position: sticky;
  top: 0;
  z-index: 30;

  /* Shadow */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
}
```

#### Sidebar
```css
.sidebar {
  /* Layout */
  width: 320px;                  /* w-80 */
  height: 100vh;

  /* Glass Effect */
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.95),
    rgba(255, 255, 255, 0.85));
  backdrop-filter: blur(32px);
  border-right: 1px solid rgba(255, 255, 255, 0.3);

  /* Shadow */
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.15);

  /* Positioning */
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;
}
```

### Modals & Overlays

```css
.modal-backdrop {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(16px);
}

.modal-content {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(32px);
  border: 1px solid rgba(229, 231, 235, 0.5);
  border-radius: 24px;
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}
```

---

## 5. EFFECTS & ANIMATIONS

### Border Radius

```css
:root {
  --radius-sm: 8px;      /* rounded-lg */
  --radius-md: 16px;     /* rounded-2xl */
  --radius-lg: 24px;     /* rounded-3xl */
  --radius-xl: 32px;     /* rounded-[32px] */
  --radius-full: 9999px; /* rounded-full */
}
```

### Box Shadows (Elevation System)

```css
:root {
  /* Standard Shadows */
  --shadow-sm: 0 10px 25px -12px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 35px 60px -12px rgba(0, 0, 0, 0.15);
  --shadow-xl: 0 45px 70px -12px rgba(0, 0, 0, 0.2);

  /* Apple-Style Shadows */
  --shadow-apple: 0 25px 50px -12px rgba(0, 0, 0, 0.1),
                  0 0 0 1px rgba(255, 255, 255, 0.05);
  --shadow-apple-hover: 0 35px 60px -12px rgba(0, 0, 0, 0.15),
                        0 0 0 1px rgba(255, 255, 255, 0.08);

  /* Glow Shadows */
  --shadow-glow-blue: 0 0 8px rgba(37, 99, 235, 0.2),
                      0 0 16px rgba(37, 99, 235, 0.1);
  --shadow-glow-cyan: 0 0 8px rgba(6, 182, 212, 0.2),
                      0 0 16px rgba(6, 182, 212, 0.1);

  /* Glass Depth Shadow */
  --shadow-glass-depth: 0 32px 64px -12px rgba(0, 0, 0, 0.15),
                        0 0 0 1px rgba(255, 255, 255, 0.1),
                        inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
}
```

### Transitions & Animations

#### Duration & Easing

```css
:root {
  /* Durations */
  --duration-fast: 150ms;
  --duration-base: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 800ms;

  /* Easing Functions */
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(0.22, 1, 0.36, 1);
}
```

#### Keyframe Animations

```css
/* Float Animation (Primary) */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(1deg);
  }
  66% {
    transform: translateY(-5px) rotate(-1deg);
  }
}

.floating-animation {
  animation: float 6s ease-in-out infinite;
}

/* Glass Float (Enhanced) */
@keyframes glass-float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    backdrop-filter: blur(16px);
  }
  33% {
    transform: translateY(-8px) rotate(1deg);
    backdrop-filter: blur(20px);
  }
  66% {
    transform: translateY(-4px) rotate(-0.5deg);
    backdrop-filter: blur(18px);
  }
}

.glass-float {
  animation: glass-float 6s ease-in-out infinite;
}

/* Shimmer Effect */
@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

.shimmer {
  position: relative;
  overflow: hidden;
}

.shimmer::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    rgba(37, 99, 235, 0.1),
    rgba(255, 255, 255, 0.3),
    transparent);
  animation: shimmer 3s infinite;
}

/* Gradient Shift (Text) */
@keyframes gradient-shift {
  0%, 100% { background-position: 0% center; }
  50% { background-position: 100% center; }
}

.text-gradient {
  background: linear-gradient(to right, #2563eb, #1d4ed8, #0891b2);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 3s ease-in-out infinite;
}

/* Dynamic Glow */
@keyframes dynamic-glow {
  0%, 100% {
    box-shadow: 0 0 10px rgba(37, 99, 235, 0.2),
                0 0 20px rgba(37, 99, 235, 0.1);
  }
  50% {
    box-shadow: 0 0 15px rgba(6, 182, 212, 0.25),
                0 0 30px rgba(6, 182, 212, 0.15);
  }
}

.dynamic-glow {
  animation: dynamic-glow 4s ease-in-out infinite;
}

/* Pulse Glow */
@keyframes pulse-glow {
  0%, 100% {
    filter: drop-shadow(0 0 4px rgba(37, 99, 235, 0.2));
  }
  50% {
    filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))
            drop-shadow(0 0 12px rgba(37, 99, 235, 0.2));
  }
}

.pulse-glow {
  animation: pulse-glow 3s ease-in-out infinite;
}

/* Breathing Animation */
@keyframes breathing {
  0%, 100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.05) rotate(2deg);
    opacity: 1;
  }
}

.breathing-animation {
  animation: breathing 4s ease-in-out infinite;
}

/* Text Shimmer */
@keyframes text-shimmer {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}

.text-shimmer {
  background: linear-gradient(90deg,
    #3b82f6 0%,
    #06b6d4 25%,
    #3b82f6 50%,
    #06b6d4 75%,
    #3b82f6 100%
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: text-shimmer 3s linear infinite;
}
```

#### Hover & Interactive States

```css
/* Hover Lift Effect */
.hover-lift {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-8px) scale(1.02);
}

/* Glass Depth Hover */
.glass-depth-hover {
  position: relative;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.glass-depth-hover::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg,
    rgba(255,255,255,0.1),
    rgba(255,255,255,0.05));
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.glass-depth-hover:hover::before {
  opacity: 1;
}

.glass-depth-hover:hover {
  transform: translateY(-4px) scale(1.01);
  backdrop-filter: blur(24px);
  box-shadow: 0 32px 64px -12px rgba(0, 0, 0, 0.15),
              0 0 0 1px rgba(255, 255, 255, 0.1),
              inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
}

/* Glass Interactive */
.glass-interactive {
  transition: all 0.3s ease;
}

.glass-interactive:hover {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(32px);
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.15);
  transform: scale(1.02);
}
```

### Opacity Values

```css
:root {
  --opacity-disabled: 0.5;
  --opacity-muted: 0.7;
  --opacity-overlay: 0.2;
  --opacity-glass-light: 0.7;
  --opacity-glass-medium: 0.8;
  --opacity-glass-strong: 0.9;
  --opacity-glass-premium: 0.95;
}
```

---

## 6. BREAKPOINTS & RESPONSIVENESS

### Breakpoint System

```css
/* Tailwind Default Breakpoints (used in DIAS) */
:root {
  --breakpoint-sm: 640px;   /* Mobile landscape */
  --breakpoint-md: 768px;   /* Tablet */
  --breakpoint-lg: 1024px;  /* Desktop */
  --breakpoint-xl: 1280px;  /* Large desktop */
  --breakpoint-2xl: 1536px; /* Extra large */
}

/* Media Queries */
@media (min-width: 640px) {  /* sm: */
  /* Tablet and above */
}

@media (min-width: 768px) {  /* md: */
  /* Tablet landscape and above */
}

@media (min-width: 1024px) { /* lg: */
  /* Desktop and above */
}

@media (min-width: 1280px) { /* xl: */
  /* Large desktop */
}

@media (min-width: 1536px) { /* 2xl: */
  /* Extra large desktop */
}
```

### Responsive Patterns

#### Hero Text Scaling
```css
/* Mobile-first responsive typography */
.hero-text {
  font-size: clamp(4rem, 8vw, 9rem);  /* 64px → 144px */
}

.title-text {
  font-size: clamp(1.5rem, 2.5vw, 2rem);  /* 24px → 32px */
}
```

#### Grid Responsive Behavior
```jsx
// Mobile: 1 column
// Tablet (md): 2 columns
// Desktop (lg): 3 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Module cards */}
</div>
```

#### Container Padding
```jsx
// Responsive container padding
<div className="px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

#### Header Responsive
```jsx
// Hide user name on small screens
<span className="text-sm text-gray-700 hidden sm:inline font-medium">
  Betiel Woldai
</span>
```

---

## 7. CSS VARIABLES & TOKENS

### Complete CSS Variable Reference

```css
:root {
  /* ===== COLORS ===== */

  /* Brand Colors */
  --color-dias-blue: #2563eb;
  --color-dias-cyan: #0891b2;

  /* Primary Palette */
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-800: #1e40af;
  --color-primary-900: #1e3a8a;

  /* Secondary Palette */
  --color-secondary-50: #ecfeff;
  --color-secondary-100: #cffafe;
  --color-secondary-200: #a5f3fc;
  --color-secondary-300: #67e8f9;
  --color-secondary-400: #22d3ee;
  --color-secondary-500: #06b6d4;
  --color-secondary-600: #0891b2;
  --color-secondary-700: #0e7490;
  --color-secondary-800: #155e75;
  --color-secondary-900: #164e63;

  /* Gray Palette */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;

  /* ===== SPACING ===== */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;

  /* ===== TYPOGRAPHY ===== */
  --font-family-primary: 'Inter', sans-serif;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* ===== BORDER RADIUS ===== */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 9999px;

  /* ===== SHADOWS ===== */
  --shadow-sm: 0 10px 25px -12px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 35px 60px -12px rgba(0, 0, 0, 0.15);
  --shadow-glow-blue: 0 0 8px rgba(37, 99, 235, 0.2), 0 0 16px rgba(37, 99, 235, 0.1);
  --shadow-glow-cyan: 0 0 8px rgba(6, 182, 212, 0.2), 0 0 16px rgba(6, 182, 212, 0.1);

  /* ===== ANIMATION ===== */
  --duration-fast: 150ms;
  --duration-base: 300ms;
  --duration-slow: 500ms;
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* ===== GLASS MORPHISM ===== */
  --glass-subtle-bg: rgba(255, 255, 255, 0.7);
  --glass-medium-bg: rgba(255, 255, 255, 0.8);
  --glass-strong-bg: rgba(255, 255, 255, 0.9);
  --glass-premium-bg: rgba(255, 255, 255, 0.95);

  --blur-sm: blur(8px);
  --blur-md: blur(16px);
  --blur-lg: blur(24px);
  --blur-xl: blur(32px);

  /* ===== Z-INDEX SCALE ===== */
  --z-base: 0;
  --z-dropdown: 10;
  --z-sticky: 20;
  --z-fixed: 30;
  --z-modal-backdrop: 40;
  --z-modal: 50;
  --z-popover: 60;
  --z-tooltip: 70;
}
```

---

## USAGE EXAMPLES

### Complete Button Set
```jsx
{/* Primary Gradient Button */}
<button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-2xl text-white font-semibold text-lg shadow-2xl shadow-blue-500/70 transition-all duration-300 hover:scale-105">
  Primary Action
</button>

{/* Secondary Glass Button */}
<button className="px-8 py-4 border-2 border-gray-300 rounded-2xl text-gray-800 font-semibold text-lg glass-strong glass-depth-hover transition-all">
  Secondary Action
</button>

{/* Small Button */}
<button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white text-sm font-medium shadow-lg">
  Small CTA
</button>

{/* Icon Button */}
<button className="p-3 rounded-xl glass-medium glass-interactive transition-all hover:scale-105">
  <Menu className="w-6 h-6" />
</button>
```

### Module Card Complete
```jsx
<div className="p-8 rounded-3xl glass-premium glass-depth-hover glass-float overflow-hidden shimmer gradient-border h-[320px] flex flex-col">
  {/* Icon */}
  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6">
    <Icon className="w-8 h-8 text-white" />
  </div>

  {/* Title */}
  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gradient">
    Module Title
  </h3>

  {/* Description */}
  <p className="text-gray-600 mb-6 flex-1">
    Module description text goes here.
  </p>

  {/* CTA Button */}
  <button className="flex items-center gap-2 text-white font-medium bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 rounded-xl shadow-lg">
    Starten
    <ChevronRight className="w-4 h-4" />
  </button>
</div>
```

### Glass Header
```jsx
<header className="glass-strong sticky top-0 z-30 glass-depth-hover border-b border-white/20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">
      {/* Header content */}
    </div>
  </div>
</header>
```

---

## DESIGN PRINCIPLES

### 1. Glass Morphism First
- Use glass effects for depth and hierarchy
- 4-tier system: subtle → medium → strong → premium
- Always combine background opacity + backdrop-filter blur

### 2. Animation Philosophy (Rule of Three)
- Maximum 3 main animation types per view
- Primary: Float (6s cycle)
- Secondary: Hover lift (0.3s spring)
- Micro: Glow pulse (3s subtle)

### 3. Color Consistency
- Blue-cyan gradient for primary actions
- Glass white for surfaces
- Gray scale for text hierarchy
- Module-specific gradients for personality

### 4. Spacing Harmony
- 8px grid system (no odd numbers)
- Consistent padding: 4, 8, 16, 24, 32, 48, 64
- Card heights: multiples of 80 (240, 320)

### 5. Responsive Flow
- Mobile-first approach
- Fluid typography with clamp()
- Progressive enhancement for larger screens
- Touch-friendly targets (min 44px)

---

## VERSION HISTORY

**v4.1** (Current)
- Enhanced glass morphism system (4-tier hierarchy)
- Advanced animations (glass-float, dynamic-glow, breathing)
- Gradient border system
- Premium shadow system
- Interactive state refinements

**v4.0**
- Glass morphism introduction
- Blue-cyan brand colors
- 8px spacing system
- Module card patterns

---

## REFERENCES

- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **Lucide Icons**: https://lucide.dev
- **Inter Font**: https://rsms.me/inter

---

*This style guide is a living document and should be updated as the DIAS design system evolves.*
