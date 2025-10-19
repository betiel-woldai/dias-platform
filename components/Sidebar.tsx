'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, BookOpen, MessageCircle, Search, Edit, PenTool, Calendar, CreditCard } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: Search, label: 'PaperHunt-Model', href: '/paperhunt' },
  { icon: MessageCircle, label: 'Hochschul-Chatbot', href: '/chatbot' },
  { icon: PenTool, label: 'Prompt-Generation', href: '/prompt-generation' },
  { icon: Edit, label: 'Schreib-Assistent', href: '/schreib-assistent' },
  { icon: BookOpen, label: 'Lernplattform', href: '/lernplattform' },
  { icon: CreditCard, label: 'Karteikarten-Model', href: '/karteikarten' },
  { icon: Calendar, label: 'Lernplan Generator', href: '/lernplan' },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-md z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 200 
            }}
            className="fixed left-0 top-0 h-full w-80 glass-premium shadow-2xl z-50 border-r border-white/30 glass-depth-hover"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/30 glass-overlay-light">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-dias-blue to-dias-cyan rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-dias-blue rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">DIAS</h2>
                  <p className="text-sm text-gray-500">Intelligenter Assistent</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl glass-medium glass-interactive transition-all duration-300 hover:scale-105"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-2">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center space-x-3 p-3 rounded-xl glass-medium glass-interactive transition-all duration-300 group hover:glass-strong"
                  onClick={onClose}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:from-dias-blue group-hover:to-dias-cyan transition-all duration-200">
                    <item.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-gray-900">{item.label}</span>
                </motion.a>
              ))}
            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/30 glass-overlay-medium">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Betiel Woldai</p>
                <button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-xl text-sm font-medium glass-depth-hover transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:shadow-xl backdrop-blur-sm">
                  Logout
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}