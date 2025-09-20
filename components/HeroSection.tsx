'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FloatingIcons from './FloatingIcons';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  className?: string;
}

export default function HeroSection({ 
  title, 
  subtitle, 
  ctaText, 
  className 
}: HeroSectionProps) {
  const handleCTAClick = () => {
    // Scroll suave para a seção de contato
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={cn('relative min-h-screen flex items-center justify-center overflow-hidden', className)}>
      {/* Background com gradiente */}
      <div className="absolute inset-0 biowox-gradient opacity-90" />
      
      {/* Overlay com padrão sutil */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Icons flutuantes */}
      <FloatingIcons />
      
      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Logo con diseño molecular */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
              {/* Logo molecular */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative w-16 h-16 sm:w-20 sm:h-20"
              >
                {/* Círculo principal con gradiente */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-b from-biowox-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  {/* Diseño molecular interno */}
                  <svg width="40" height="40" viewBox="0 0 50 50" className="text-white sm:w-[50px] sm:h-[50px]">
                    {/* Puntos centrales */}
                    <circle cx="25" cy="25" r="2" fill="white" opacity="0.9" />
                    <circle cx="20" cy="20" r="1.5" fill="white" opacity="0.7" />
                    <circle cx="30" cy="20" r="1.5" fill="white" opacity="0.7" />
                    <circle cx="20" cy="30" r="1.5" fill="white" opacity="0.7" />
                    <circle cx="30" cy="30" r="1.5" fill="white" opacity="0.7" />
                    
                    {/* Puntos periféricos */}
                    <circle cx="25" cy="10" r="2.5" fill="white" opacity="0.8" />
                    <circle cx="25" cy="40" r="2.5" fill="white" opacity="0.8" />
                    <circle cx="10" cy="25" r="2.5" fill="white" opacity="0.8" />
                    <circle cx="40" cy="25" r="2.5" fill="white" opacity="0.8" />
                    <circle cx="15" cy="15" r="2" fill="white" opacity="0.6" />
                    <circle cx="35" cy="15" r="2" fill="white" opacity="0.6" />
                    <circle cx="15" cy="35" r="2" fill="white" opacity="0.6" />
                    <circle cx="35" cy="35" r="2" fill="white" opacity="0.6" />
                    
                    {/* Líneas conectoras */}
                    <line x1="25" y1="25" x2="25" y2="10" stroke="white" strokeWidth="0.5" opacity="0.4" />
                    <line x1="25" y1="25" x2="25" y2="40" stroke="white" strokeWidth="0.5" opacity="0.4" />
                    <line x1="25" y1="25" x2="10" y2="25" stroke="white" strokeWidth="0.5" opacity="0.4" />
                    <line x1="25" y1="25" x2="40" y2="25" stroke="white" strokeWidth="0.5" opacity="0.4" />
                    <line x1="25" y1="25" x2="15" y2="15" stroke="white" strokeWidth="0.3" opacity="0.3" />
                    <line x1="25" y1="25" x2="35" y2="15" stroke="white" strokeWidth="0.3" opacity="0.3" />
                    <line x1="25" y1="25" x2="15" y2="35" stroke="white" strokeWidth="0.3" opacity="0.3" />
                    <line x1="25" y1="25" x2="35" y2="35" stroke="white" strokeWidth="0.3" opacity="0.3" />
                  </svg>
                </div>
                
                {/* Efecto de brillo */}
                <motion.div
                  className="absolute inset-0 bg-biowox-400/20 rounded-full blur-sm"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
              
              {/* Texto del logo */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  Bio<span className="biowox-gradient-text">Wox</span>
                </h1>
                <p className="text-lg sm:text-xl text-white/90 font-medium">
                  MICROBIOLOGIA AVANÇADA
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Título principal */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            {title}
          </motion.h2>
          
          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
          
          {/* Botão de ação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center items-center pt-8"
          >
            <button
              onClick={handleCTAClick}
              className="button-primary group flex items-center gap-2 text-biowoxDark-800"
            >
              {ctaText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
