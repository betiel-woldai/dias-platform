'use client';

import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import Image from 'next/image';

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps = {}) {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass-strong sticky top-0 z-30 glass-depth-hover border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            {onMenuClick && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onMenuClick}
                className="p-3 rounded-xl text-gray-600 hover:text-gray-900 glass-medium glass-interactive transition-all duration-300 hover:scale-105"
              >
                <Menu className="w-6 h-6" />
              </motion.button>
            )}
            
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-20 h-20"
              >
                <Image
                  src="/keyvisual.png"
                  alt="DIAS Keyvisual"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </motion.div>
              
              <div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-blue-500 tracking-tight" style={{ textShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}>DIAS</span>
                    <span className="text-lg text-gray-700 font-medium">Digitaler Intelligenter Assistent</span>
                  </div>
                  <span className="text-sm text-gray-500 mt-1">Powered by HS Ansbach</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-700 hidden sm:inline font-medium">Betiel Woldai</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium glass-depth-hover transition-all duration-300 shadow-lg shadow-blue-400/70 hover:shadow-blue-400/90 hover:shadow-2xl relative overflow-hidden backdrop-blur-sm"
            >
              Logout
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}