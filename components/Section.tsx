'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient';
}

export default function Section({ 
  id, 
  title, 
  subtitle, 
  children, 
  className,
  background = 'white'
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'biowox-gradient',
  };

  return (
    <section 
      id={id}
      className={cn(
        'py-16 lg:py-24',
        backgroundClasses[background],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={cn(
            'text-3xl sm:text-4xl lg:text-5xl font-bold mb-4',
            background === 'gradient' ? 'text-white' : 'text-gray-900'
          )}>
            {title}
          </h2>
          {subtitle && (
            <p className={cn(
              'text-lg sm:text-xl max-w-3xl mx-auto',
              background === 'gradient' ? 'text-white/90' : 'text-gray-600'
            )}>
              {subtitle}
            </p>
          )}
        </motion.div>
        
        {/* Conteúdo da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
