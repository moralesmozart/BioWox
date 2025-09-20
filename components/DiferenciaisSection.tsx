'use client';

import { motion } from 'framer-motion';
import { Zap, Target, Clock, Shield, Brain, Users } from 'lucide-react';
import Section from './Section';
import Card from './Card';
import MedicalBackground from './MedicalBackground';

const diferenciais = [
  {
    title: 'Automação Total',
    description: 'Processamento automatizado com inteligência artificial para máxima eficiência e precisão nos resultados.',
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
    description: 'Resultados em tempo recorde sem comprometer a qualidade, otimizando o tempo de diagnóstico.',
    icon: <Clock className="w-8 h-8" />,
    delay: 0.4,
  },
  {
    title: 'Segurança Máxima',
    description: 'Protocolos rigorosos de segurança e conformidade com ANVISA para proteção total dos dados.',
    icon: <Shield className="w-8 h-8" />,
    delay: 0.6,
  },
  {
    title: 'Inteligência Artificial',
    description: 'Algoritmos avançados de machine learning para análise preditiva e detecção precoce de patógenos.',
    icon: <Brain className="w-8 h-8" />,
    delay: 0.8,
  },
  {
    title: 'Equipe Especializada',
    description: 'Cientistas e técnicos altamente qualificados com vasta experiência em microbiologia clínica.',
    icon: <Users className="w-8 h-8" />,
    delay: 1.0,
  },
];

export default function DiferenciaisSection() {
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
          { number: '24h', label: 'Tempo Médio' },
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
