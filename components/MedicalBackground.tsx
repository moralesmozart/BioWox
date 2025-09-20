'use client';

import { motion } from 'framer-motion';

interface MedicalBackgroundProps {
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export default function MedicalBackground({ 
  className = '', 
  intensity = 'medium' 
}: MedicalBackgroundProps) {
  const particleCount = intensity === 'low' ? 8 : intensity === 'medium' ? 15 : 25;
  const connectionCount = intensity === 'low' ? 3 : intensity === 'medium' ? 6 : 10;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Partículas médicas flutuantes */}
      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.div
          key={`medical-particle-${i}`}
          className="absolute w-2 h-2 bg-biowox-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            scale: [0.5, 1.2, 0.5],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Rede neuronal médica */}
      <svg className="absolute inset-0 w-full h-full">
        {Array.from({ length: connectionCount }).map((_, i) => {
          const x1 = Math.random() * 100;
          const y1 = Math.random() * 100;
          const x2 = Math.random() * 100;
          const y2 = Math.random() * 100;
          
          return (
            <motion.line
              key={`connection-${i}`}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="rgba(0, 255, 153, 0.2)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0], 
                opacity: [0, 0.6, 0] 
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </svg>

      {/* Nodos de conexão */}
      {Array.from({ length: Math.floor(particleCount / 2) }).map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-3 h-3 bg-biowox-500/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0.8, 1.4, 0.8],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Efeito de pulso médico */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-biowox-500/5 rounded-full"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Linhas de dados médicos */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`data-line-${i}`}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-biowox-400/30 to-transparent"
            style={{
              left: `${i * 12.5}%`,
              top: `${20 + (i % 3) * 20}%`,
              width: '60%',
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Efeito de escaneamento médico */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-biowox-500/10 to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}
