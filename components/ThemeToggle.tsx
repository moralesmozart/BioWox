'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme-context';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-20 right-4 z-50 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 hover:bg-white transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-2xl"
      >
        {theme === 'dark' ? '🌙' : '💡'}
      </motion.div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
        {theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
      </div>
    </motion.button>
  );
}
