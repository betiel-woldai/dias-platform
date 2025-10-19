// DIAS Design System v4.1
// Systematic design tokens for consistent UI patterns

export const designSystem = {
  // Spacing System (8px grid)
  spacing: {
    xs: '4px',    // 0.5rem
    sm: '8px',    // 1rem
    md: '16px',   // 2rem
    lg: '24px',   // 3rem
    xl: '32px',   // 4rem
    '2xl': '48px', // 6rem
    '3xl': '64px', // 8rem
  },

  // Border Radius System
  borderRadius: {
    sm: '8px',   // rounded-lg
    md: '16px',  // rounded-2xl
    lg: '24px',  // rounded-3xl
    full: '9999px' // rounded-full
  },

  // Animation System (Rule of Three - max 3 main animations)
  animations: {
    // Primary: Main floating animation
    primary: {
      name: 'float',
      duration: '6s',
      easing: 'ease-in-out',
      infinite: true
    },
    
    // Secondary: Hover lift effect
    secondary: {
      name: 'hover-lift',
      duration: '0.3s',
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
    
    // Micro: Subtle interactions
    micro: {
      name: 'glow-pulse',
      duration: '3s',
      easing: 'ease-in-out',
      infinite: true
    }
  },

  // Shadow System
  shadows: {
    sm: '0 10px 25px -12px rgba(0, 0, 0, 0.1)',
    md: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
    lg: '0 35px 60px -12px rgba(0, 0, 0, 0.15)',
    glow: {
      blue: '0 0 8px rgba(37, 99, 235, 0.2), 0 0 16px rgba(37, 99, 235, 0.1)',
      cyan: '0 0 8px rgba(6, 182, 212, 0.2), 0 0 16px rgba(6, 182, 212, 0.1)'
    }
  },

  // Component Heights
  heights: {
    card: '240px',    // min-h-[240px]
    button: '48px',   // Standard button height
    input: '40px'     // Standard input height
  },

  // Typography Scale
  typography: {
    hero: {
      fontSize: 'clamp(4rem, 8vw, 9rem)',
      lineHeight: '1',
      fontWeight: '700'
    },
    title: {
      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
      lineHeight: '1.2',
      fontWeight: '600'
    },
    body: {
      fontSize: '1rem',
      lineHeight: '1.5',
      fontWeight: '400'
    }
  },

  // Color Palette (keeping existing blue-cyan theme)
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe', 
      500: '#3b82f6', // blue-500
      600: '#2563eb', // blue-600
      700: '#1d4ed8'  // blue-700
    },
    secondary: {
      50: '#ecfeff',
      100: '#cffafe',
      500: '#06b6d4', // cyan-500
      600: '#0891b2', // cyan-600
      700: '#0e7490'  // cyan-700
    }
  }
} as const;

// Animation utilities
export const getAnimation = (type: keyof typeof designSystem.animations) => {
  const anim = designSystem.animations[type];
  return {
    animationName: anim.name,
    animationDuration: anim.duration,
    animationTimingFunction: anim.easing,
    ...(anim.infinite && { animationIterationCount: 'infinite' })
  };
};

// Spacing utilities
export const getSpacing = (size: keyof typeof designSystem.spacing) => {
  return designSystem.spacing[size];
};

// Component variants
export const componentVariants = {
  button: {
    primary: 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white',
    secondary: 'border-2 border-gray-300 bg-white/80 hover:bg-white/90 hover:border-gray-400 text-gray-800',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700'
  },
  card: {
    default: 'bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl border border-gray-200/50',
    elevated: 'bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-lg',
    interactive: 'hover:border-gray-300/70 transition-all duration-300 hover:shadow-xl'
  },
  
  // Enhanced Glass Morphism System v4.1
  glass: {
    // Tier 1: Subtle glass for secondary elements
    subtle: 'bg-white/70 backdrop-blur-sm border border-white/30 shadow-lg',
    
    // Tier 2: Medium glass for primary cards
    medium: 'bg-white/80 backdrop-blur-md border border-gray-200/40 shadow-xl',
    
    // Tier 3: Strong glass for navigation/headers
    strong: 'bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-2xl',
    
    // Tier 4: Premium glass for hero elements
    premium: 'bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-2xl border border-gray-100/60 shadow-2xl',
    
    // Interactive states
    interactive: {
      hover: 'hover:bg-white/95 hover:backdrop-blur-2xl hover:shadow-2xl transition-all duration-300',
      focus: 'focus:bg-white/95 focus:backdrop-blur-2xl focus:shadow-2xl transition-all duration-300',
      active: 'active:bg-white/85 active:backdrop-blur-lg active:shadow-lg transition-all duration-150'
    },
    
    // Glass overlays for layered effects
    overlay: {
      light: 'bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm',
      medium: 'bg-gradient-to-br from-white/30 to-white/15 backdrop-blur-md',
      strong: 'bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg'
    }
  }
} as const;