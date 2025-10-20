'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles, Zap, Brain, BookOpen, PenTool, MessageSquare, GraduationCap } from 'lucide-react';
import Header from '@/components/Header';
import { VERSION } from '@/lib/version';
import Image from 'next/image';

const modules = [
  { 
    title: 'PaperHunt-Model', 
    description: 'Wissenschaftliche Paper finden und analysieren',
    icon: BookOpen,
    gradient: 'from-violet-600 to-indigo-600'
  },
  { 
    title: 'Hochschul-Chatbot', 
    description: 'KI-Assistent für Hochschulfragen',
    icon: MessageSquare,
    gradient: 'from-blue-600 to-cyan-600'
  },
  { 
    title: 'Prompt-Generation', 
    description: 'Optimierte Prompts generieren',
    icon: Zap,
    gradient: 'from-amber-600 to-orange-600'
  },
  { 
    title: 'Schreib-Assistent', 
    description: 'Intelligente Schreibhilfe',
    icon: PenTool,
    gradient: 'from-emerald-600 to-teal-600'
  },
  { 
    title: 'DIAS-Lernplattform', 
    description: 'Personalisierte Lernumgebung',
    icon: GraduationCap,
    gradient: 'from-pink-600 to-rose-600'
  },
  { 
    title: 'Karteikarten-Model', 
    description: 'Intelligente Lernkarten erstellen',
    icon: Brain,
    gradient: 'from-purple-600 to-pink-600'
  },
  { 
    title: 'Lernplan Generator', 
    description: 'Individuelle Lernpläne entwickeln',
    icon: Sparkles,
    gradient: 'from-slate-600 to-gray-700'
  }
];

export default function HomePage() {
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax-element');
      elements.forEach((el, index) => {
        const speed = 0.5 + (index * 0.1);
        (el as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">

      <Header />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Dynamic Glass Morphism Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Floating Glass Panels */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-40 -right-40 w-80 h-80 glass-overlay-light rounded-3xl parallax-element"
            style={{ backdropFilter: 'blur(40px)' }}
          />
          <motion.div
            animate={{
              x: [0, -120, 0],
              y: [0, 80, 0],
              rotate: [360, 180, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-40 -left-40 w-96 h-96 glass-overlay-medium rounded-2xl parallax-element"
            style={{ backdropFilter: 'blur(60px)' }}
          />
          
          {/* Dynamic Glass Orbs */}
          <motion.div
            animate={{
              x: [0, 80, -40, 0],
              y: [0, -60, 30, 0],
              opacity: [0.3, 0.8, 0.4, 0.3]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 right-1/3 w-32 h-32 glass-overlay-strong rounded-full parallax-element"
            style={{ backdropFilter: 'blur(25px)' }}
          />
          
          <motion.div
            animate={{
              x: [0, -60, 40, 0],
              y: [0, 50, -30, 0],
              opacity: [0.2, 0.6, 0.3, 0.2]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/3 left-1/4 w-40 h-40 glass-overlay-light rounded-3xl"
            style={{ backdropFilter: 'blur(35px)' }}
          />
          
          {/* Interactive Glass Mouse Follower */}
          <motion.div
            animate={{
              x: mousePosition.x / 20,
              y: mousePosition.y / 20,
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              rotate: { duration: 30, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-1/2 left-1/2 w-64 h-64 glass-overlay-medium rounded-full opacity-30"
            style={{ 
              backdropFilter: 'blur(50px)',
              transform: 'translate(-50%, -50%)'
            }}
          />
          
          {/* Pulsing Glass Wave */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[32%] left-[42%] w-96 h-96 glass-premium rounded-full"
            style={{
              backdropFilter: 'blur(80px)',
              transform: 'translate(-50%, -50%)'
            }}
          />

          {/* Subtle grid pattern */}
          <motion.div
            animate={{
              opacity: [0.02, 0.05, 0.02]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(37,99,235,0.3)_1px,_transparent_0)] bg-[size:32px_32px]"
          />
          
          {/* Dynamic Glass Micro Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
                opacity: [0, 0.6, 0.3, 0],
                scale: [0, 1, 0.5, 0]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2
              }}
              className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${
                i % 3 === 0 ? 'from-blue-400 to-cyan-400' : 
                i % 3 === 1 ? 'from-purple-400 to-pink-400' : 
                'from-emerald-400 to-teal-400'
              } blur-sm`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >

          {/* Floating Keyvisual above DIAS */}
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.1, type: 'spring', stiffness: 80 }}
            className="relative mb-8"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="inline-block"
            >
              <div className="relative">
                <Image
                  src="/keyvisual.png"
                  alt="DIAS Keyvisual"
                  width={180}
                  height={180}
                  className="object-contain drop-shadow-2xl"
                />
                {/* Glow effect behind keyvisual */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/30 via-blue-600/20 to-cyan-500/30 blur-xl rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Version Badge - Enhanced with gradient */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full text-white text-xs font-medium mb-8 shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/40 transition-all duration-300 cursor-pointer"
          >
            <motion.span
              animate={{
                textShadow: [
                  '0 0 4px rgba(255,255,255,0.5)',
                  '0 0 8px rgba(255,255,255,0.8)',
                  '0 0 4px rgba(255,255,255,0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Version {VERSION}
            </motion.span>
          </motion.div>

          {/* Main Title - Balanced Design */}
          <motion.div className="relative mb-8 text-center max-w-4xl mx-auto">
            {/* Background glow layers */}
            <motion.div
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute inset-0 blur-xl bg-gradient-to-r from-blue-500/10 via-blue-600/15 to-cyan-500/10 rounded-2xl transform scale-105"
            />
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent tracking-tight leading-none"
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(37, 99, 235, 0.15)) drop-shadow(0 0 8px rgba(6, 182, 212, 0.08))',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
              }}
            >
              <motion.span
                animate={{
                  textShadow: [
                    '0 0 2px rgba(37, 99, 235, 0.3), 0 0 4px rgba(6, 182, 212, 0.2)',
                    '0 0 4px rgba(37, 99, 235, 0.4), 0 0 8px rgba(6, 182, 212, 0.3)',
                    '0 0 2px rgba(37, 99, 235, 0.3), 0 0 4px rgba(6, 182, 212, 0.2)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                DIAS
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto mb-16 text-center"
          >
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium leading-relaxed">
              Dein Digitaler Intelligenter Assistent für Studium und Lehre
            </p>
            <p className="text-lg text-gray-600 font-medium italic leading-relaxed">
              „Wissen wird zu Verstehen, Lernen wird zu Erleben."
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: [
                  '0 25px 50px -12px rgba(37, 99, 235, 0.4)',
                  '0 35px 60px -12px rgba(6, 182, 212, 0.5)'
                ]
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-2xl text-white font-semibold text-lg shadow-2xl shadow-blue-500/70 hover:shadow-cyan-500/90 transition-all duration-300 overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <span className="relative z-10 flex items-center gap-2">
                Los geht's
                <motion.div
                  animate={{
                    x: [0, 4, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </span>
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                borderColor: 'rgba(37, 99, 235, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 border-2 border-gray-300 rounded-2xl text-gray-800 font-semibold text-lg glass-strong glass-depth-hover shimmer overflow-hidden"
            >
              {/* Subtle hover glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <span className="relative z-10">Mehr erfahren</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Modules Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.1 + (index * 0.1),
                    type: 'spring',
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -10,
                    rotateY: 5,
                    z: 50,
                  }}
                  onHoverStart={() => setHoveredModule(index)}
                  onHoverEnd={() => setHoveredModule(null)}
                  className="relative group"
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                  }}
                >
                  <div className="relative p-8 rounded-3xl glass-premium glass-depth-hover glass-float overflow-hidden shimmer gradient-border group-hover:dynamic-glow h-[320px] flex flex-col">
                    
                    {/* Animated border glow on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(45deg, ${module.gradient.includes('blue') ? 'rgba(37, 99, 235, 0.1)' : 'rgba(168, 85, 247, 0.1)'}, transparent, ${module.gradient.includes('cyan') ? 'rgba(6, 182, 212, 0.1)' : 'rgba(236, 72, 153, 0.1)'})`
                      }}
                    />
                    {/* Gradient background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {/* Content Area */}
                    <div className="flex-1 flex flex-col">
                      {/* Icon - Enhanced with dynamic animations */}
                      <motion.div
                        className={`flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${module.gradient} mb-6 relative overflow-hidden`}
                        animate={{
                          rotate: hoveredModule === index ? 360 : 0,
                          scale: hoveredModule === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                      >
                      {/* Icon glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-lg"
                        animate={{
                          opacity: hoveredModule === index ? [0, 0.5, 0] : 0,
                          scale: hoveredModule === index ? [1, 1.2, 1] : 1,
                        }}
                        transition={{ duration: 1, repeat: hoveredModule === index ? Infinity : 0 }}
                      />
                      
                      <motion.div
                        animate={{
                          y: hoveredModule === index ? [0, -2, 0] : 0,
                        }}
                        transition={{ duration: 1, repeat: hoveredModule === index ? Infinity : 0 }}
                      >
                        <Icon className="w-8 h-8 text-white relative z-10" />
                      </motion.div>
                    </motion.div>

                    {/* Title - Enhanced with subtle animations */}
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gradient transition-all duration-300"
                      animate={{
                        y: hoveredModule === index ? -2 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {module.title}
                    </motion.h3>

                      {/* Description - Enhanced with micro animations */}
                      <motion.p 
                        className="text-gray-600 mb-6 transition-colors duration-300 group-hover:text-gray-700 flex-1"
                        animate={{
                          y: hoveredModule === index ? -1 : 0,
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {module.description}
                      </motion.p>
                    </div>

                    {/* Action button - Enhanced with dynamic effects */}
                    <div className="mt-auto">
                      <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ 
                        y: hoveredModule === index ? 0 : 10,
                        opacity: hoveredModule === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className={`flex items-center gap-2 text-white font-medium bg-gradient-to-r ${module.gradient} px-4 py-2 rounded-xl shadow-lg relative overflow-hidden`}
                    >
                      {/* Button shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x: hoveredModule === index ? ['-100%', '100%'] : '-100%'
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: hoveredModule === index ? Infinity : 0,
                          repeatDelay: 1
                        }}
                      />
                      
                      <span className="relative z-10">Starten</span>
                      <motion.div
                        animate={{
                          x: [0, 3, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      >
                        <ChevronRight className="w-4 h-4 relative z-10" />
                      </motion.div>
                    </motion.button>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Enhanced Footer with dynamic elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="relative text-center mt-24"
        >
          {/* Floating particles around footer */}
          <motion.div
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 10, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute -left-10 top-1/2 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm"
          />
          
          <motion.div
            animate={{
              x: [0, -25, 15, 0],
              y: [0, 15, -25, 0],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1
            }}
            className="absolute -right-8 top-1/3 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm"
          />
          
          <motion.p 
            className="text-gray-600 relative z-10"
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            Entwickelt mit KI für die Zukunft des Lernens
          </motion.p>
        </motion.div>
      </main>
    </div>
  );
}