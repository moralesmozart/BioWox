'use client';

import { motion } from 'framer-motion';
import { 
  Microscope, 
  Lightbulb, 
  Bot, 
  Dna, 
  TestTube, 
  Shield, 
  FlaskConical,
  Atom,
  Activity,
  Heart,
  Brain,
  Syringe,
  Stethoscope,
  Pill,
  Beaker,
  Zap
} from 'lucide-react';
import { FloatingIcon } from '@/types';

const floatingIcons: FloatingIcon[] = [
  {
    id: 'microscope',
    icon: 'Microscope',
    position: { x: 10, y: 20 },
    animation: { duration: 6, delay: 0, ease: 'easeInOut', repeat: true },
    size: 'lg',
  },
  {
    id: 'lightbulb',
    icon: 'Lightbulb',
    position: { x: 85, y: 15 },
    animation: { duration: 8, delay: 2, ease: 'easeInOut', repeat: true },
    size: 'md',
  },
  {
    id: 'bot',
    icon: 'Bot',
    position: { x: 15, y: 70 },
    animation: { duration: 7, delay: 1, ease: 'easeInOut', repeat: true },
    size: 'md',
  },
  {
    id: 'dna',
    icon: 'Dna',
    position: { x: 80, y: 75 },
    animation: { duration: 9, delay: 3, ease: 'easeInOut', repeat: true },
    size: 'sm',
  },
  {
    id: 'testtube',
    icon: 'TestTube',
    position: { x: 5, y: 45 },
    animation: { duration: 5, delay: 1.5, ease: 'easeInOut', repeat: true },
    size: 'sm',
  },
  {
    id: 'shield',
    icon: 'Shield',
    position: { x: 90, y: 50 },
    animation: { duration: 6.5, delay: 2.5, ease: 'easeInOut', repeat: true },
    size: 'md',
  },
  {
    id: 'flask',
    icon: 'FlaskConical',
    position: { x: 25, y: 10 },
    animation: { duration: 7.5, delay: 0.5, ease: 'easeInOut', repeat: true },
    size: 'sm',
  },
  {
    id: 'atom',
    icon: 'Atom',
    position: { x: 75, y: 25 },
    animation: { duration: 8.5, delay: 1.8, ease: 'easeInOut', repeat: true },
    size: 'md',
  },
  {
    id: 'activity',
    icon: 'Activity',
    position: { x: 35, y: 80 },
    animation: { duration: 6.2, delay: 2.2, ease: 'easeInOut', repeat: true },
    size: 'sm',
  },
  {
    id: 'heart',
    icon: 'Heart',
    position: { x: 65, y: 35 },
    animation: { duration: 5.8, delay: 0.8, ease: 'easeInOut', repeat: true },
    size: 'sm',
  },
  {
    id: 'brain',
    icon: 'Brain',
    position: { x: 45, y: 15 },
    animation: { duration: 7.8, delay: 3.2, ease: 'easeInOut', repeat: true },
    size: 'md',
  },
  {
    id: 'syringe',
    icon: 'Syringe',
    position: { x: 20, y: 60 },
    animation: { duration: 6.8, delay: 1.2, ease: 'easeInOut', repeat: true },
    size: 'sm',
  },
  {
    id: 'stethoscope',
    icon: 'Stethoscope',
    position: { x: 70, y: 60 },
    animation: { duration: 8.2, delay: 2.8, ease: 'easeInOut', repeat: true },
    size: 'md',
  },
  {
    id: 'pill',
    icon: 'Pill',
    position: { x: 50, y: 40 },
    animation: { duration: 5.5, delay: 0.3, ease: 'easeInOut', repeat: true },
    size: 'sm',
  },
  {
    id: 'beaker',
    icon: 'Beaker',
    position: { x: 85, y: 40 },
    animation: { duration: 7.2, delay: 1.7, ease: 'easeInOut', repeat: true },
    size: 'sm',
  },
  {
    id: 'zap',
    icon: 'Zap',
    position: { x: 30, y: 30 },
    animation: { duration: 4.8, delay: 2.5, ease: 'easeInOut', repeat: true },
    size: 'sm',
  },
];

const iconComponents = {
  Microscope,
  Lightbulb,
  Bot,
  Dna,
  TestTube,
  Shield,
  FlaskConical,
  Atom,
  Activity,
  Heart,
  Brain,
  Syringe,
  Stethoscope,
  Pill,
  Beaker,
  Zap,
};

const sizeClasses = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
};

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.map((icon) => {
        const IconComponent = iconComponents[icon.icon as keyof typeof iconComponents];
        
        return (
          <motion.div
            key={icon.id}
            className={`floating-icon ${sizeClasses[icon.size]}`}
            style={{
              left: `${icon.position.x}%`,
              top: `${icon.position.y}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [-5, 5, -5],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: icon.animation.duration,
              delay: icon.animation.delay,
              ease: icon.animation.ease,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            whileHover={{
              scale: 1.2,
              rotate: 0,
              transition: { duration: 0.3 },
            }}
          >
            <IconComponent 
              className={`w-full h-full text-biowox-400 drop-shadow-lg filter ${
                icon.size === 'lg' ? 'animate-glow' : ''
              }`}
            />
          </motion.div>
        );
      })}
      
      {/* Efeitos de brilho adicionais */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-biowox-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-biowoxLight-400/10 rounded-full blur-lg"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          delay: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Efeito de rede neuronal */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Linhas conectoras animadas */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.line
            key={i}
            x1={`${20 + i * 15}%`}
            y1={`${25 + (i % 2) * 30}%`}
            x2={`${35 + i * 12}%`}
            y2={`${45 + (i % 2) * 25}%`}
            stroke="rgba(0, 255, 153, 0.3)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: i * 0.4,
            }}
          />
        ))}
      </svg>

      {/* Partículas flutuantes adicionais */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-biowoxLight-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
