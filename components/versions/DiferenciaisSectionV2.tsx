'use client';

import { motion } from 'framer-motion';
import { Zap, Target, Clock, Shield, Brain, Users } from 'lucide-react';
import Section from '../Section';
import Card from '../Card';
import MedicalBackground from '../MedicalBackground';

const diferenciais = [
  {
    title: 'Automação Total',
    description: 'Processamento automatizado para máxima eficiência e precisão nos resultados.',
    icon: <Zap className="w-8 h-8" />,
    delay: 0,
  },
  {
    title: 'Precisão Científica',
    description: 'Tecnologia de ponta e equipe especializada garantem resultados confiáveis e precisos em cada análise.',
    icon: <Target className="w-8 h-8" />,
    delay: 0.2,
  },
  {
    title: 'Velocidade Excepcional',
    description: 'Liberação de exames em 24-48 horas, otimizando o tempo de diagnóstico.',
    icon: <Clock className="w-8 h-8" />,
    delay: 0.4,
  },
  {
    title: 'Coleta Inteligente',
    description: 'Coleta na empresa com nossa equipe especializada, garantindo comodidade e eficiência.',
    icon: <Shield className="w-8 h-8" />,
    delay: 0.6,
  },
  {
    title: 'Processamento Contínuo',
    description: 'Processamento 24 horas para garantir resultados rápidos e confiáveis.',
    icon: <Brain className="w-8 h-8" />,
    delay: 0.8,
  },
  {
    title: 'Certificados',
    description: 'Protocolos rigorosos de segurança e conformidade para proteção total dos dados.',
    icon: <Users className="w-8 h-8" />,
    delay: 1.0,
  },
];

export default function DiferenciaisSectionV2() {
  return (
    <div className="relative">
      <MedicalBackground intensity="low" />
      <Section
        id="diferenciais"
        title="Nossos Diferenciais"
        subtitle="Tecnologia de ponta, precisão científica e inovação em cada análise"
        background="gray"
      >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {diferenciais.map((diferencial, index) => (
          <Card
            key={index}
            title={diferencial.title}
            description={diferencial.description}
            icon={diferencial.icon}
            delay={diferencial.delay}
            hover={true}
          />
        ))}
      </div>
      
      {/* Estatísticas */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        {[
          { number: '99.9%', label: 'Precisão' },
          { number: '24-48h', label: 'Tempo de Liberação' },
          { number: '10k+', label: 'Análises/Mês' },
          { number: '100%', label: 'Conformidade ANVISA' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl font-bold biowox-gradient-text mb-2">
              {stat.number}
            </div>
            <div className="text-gray-600 font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
      </Section>
    </div>
  );
}
