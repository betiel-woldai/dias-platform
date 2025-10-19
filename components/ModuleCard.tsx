'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description?: string;
  onClick?: () => void;
  delay?: number;
}

export default function ModuleCard({ title, description, onClick, delay = 0 }: ModuleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: "easeOut"
      }}
      className="group"
      onClick={onClick}
    >
      <motion.div
        whileHover={{ 
          scale: 1.02,
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.98 }}
        className="relative glass-medium glass-depth-hover glass-interactive rounded-3xl p-8 cursor-pointer overflow-hidden min-h-[240px] flex flex-col justify-between border border-white/40 hover:border-white/60"
      >
        {/* Enhanced glass overlay */}
        <div className="absolute inset-0 glass-overlay-light opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-cyan-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Enhanced floating elements */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-md flex items-center justify-center shadow-lg shadow-blue-500/30 glass-depth-hover backdrop-blur-sm">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
        
        <div className="relative z-10 flex-1">
          <motion.h3 
            className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-all duration-300"
            whileHover={{ x: 4 }}
            style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}
          >
            {title}
          </motion.h3>
          
          {description && (
            <motion.p 
              className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
              whileHover={{ x: 4 }}
            >
              {description}
            </motion.p>
          )}
        </div>
        
        {/* Enhanced bottom accent line */}
        <div className="relative mt-6">
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-500 shadow-lg shadow-blue-500/40" />
        </div>
        
        {/* Enhanced glass pattern overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-cyan-500/3 to-transparent backdrop-blur-[1px]" />
        </div>
      </motion.div>
    </motion.div>
  );
}