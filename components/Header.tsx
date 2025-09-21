'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-b from-biowox-500 to-green-600 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Bio<span className="text-biowox-500">Wox</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#diferenciais" className="text-gray-600 hover:text-biowox-500 transition-colors">
              Diferenciais
            </a>
            <a href="#como-funciona" className="text-gray-600 hover:text-biowox-500 transition-colors">
              Como Funciona
            </a>
            <a href="#seguranca" className="text-gray-600 hover:text-biowox-500 transition-colors">
              Segurança
            </a>
            <a href="#contato" className="text-gray-600 hover:text-biowox-500 transition-colors">
              Contato
            </a>
          </nav>

          {/* Login Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="flex items-center space-x-2 bg-biowox-500 hover:bg-biowox-600 text-white px-4 py-2 rounded-lg transition-colors group"
            >
              <Settings className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              <span className="text-sm font-medium">Login</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-biowox-500 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200/50"
          >
            <nav className="py-4 space-y-4">
              <a
                href="#diferenciais"
                className="block text-gray-600 hover:text-biowox-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Diferenciais
              </a>
              <a
                href="#como-funciona"
                className="block text-gray-600 hover:text-biowox-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </a>
              <a
                href="#seguranca"
                className="block text-gray-600 hover:text-biowox-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Segurança
              </a>
              <a
                href="#contato"
                className="block text-gray-600 hover:text-biowox-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
