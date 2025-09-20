'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  background?: 'white' | 'glass' | 'gradient';
}

export default function Card({ 
  title, 
  description, 
  icon, 
  className,
  hover = true,
  delay = 0,
  background = 'white'
}: CardProps) {
  const backgroundClasses = {
    white: 'bg-white border border-gray-200',
    glass: 'glass-effect',
    gradient: 'bg-gradient-to-br from-white/10 to-white/5 border border-white/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={hover ? { 
        y: -5, 
        scale: 1.02,
        transition: { duration: 0.3 }
      } : {}}
      className={cn(
        'p-8 rounded-2xl shadow-lg transition-all duration-300',
        backgroundClasses[background],
        hover && 'card-hover',
        className
      )}
    >
      {/* Ícone */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-biowox-500 to-biowoxLight-400 rounded-xl flex items-center justify-center text-white shadow-lg">
          {icon}
        </div>
      </motion.div>
      
      {/* Conteúdo */}
      <div className="space-y-4">
        <h3 className={cn(
          'text-xl font-semibold',
          background === 'gradient' ? 'text-white' : 'text-gray-900'
        )}>
          {title}
        </h3>
        <p className={cn(
          'leading-relaxed',
          background === 'gradient' ? 'text-white/90' : 'text-gray-600'
        )}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}
