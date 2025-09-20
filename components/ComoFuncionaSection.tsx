'use client';

import { motion } from 'framer-motion';
import { TestTube, Cpu, FileText } from 'lucide-react';
import Section from './Section';
import Card from './Card';
import MedicalBackground from './MedicalBackground';

const steps = [
  {
    step: 1,
    title: 'Coleta Inteligente',
    description: 'Coleta automatizada e padronizada de amostras com rastreabilidade completa e controle de qualidade.',
    icon: <TestTube className="w-8 h-8" />,
    details: [
      'Coleta automatizada',
      'Rastreabilidade completa',
      'Controle de qualidade',
      'Protocolos ANVISA'
    ],
  },
  {
    step: 2,
    title: 'Processamento Automatizado',
    description: 'Análise automatizada com IA para identificação rápida e precisa de microorganismos patogênicos.',
    icon: <Cpu className="w-8 h-8" />,
    details: [
      'Inteligência Artificial',
      'Processamento 24/7',
      'Análise preditiva',
      'Detecção precoce'
    ],
  },
  {
    step: 3,
    title: 'Laudo Digital',
    description: 'Resultados precisos entregues digitalmente com relatórios detalhados e recomendações clínicas.',
    icon: <FileText className="w-8 h-8" />,
    details: [
      'Resultados digitais',
      'Relatórios detalhados',
      'Recomendações clínicas',
      'Acesso online seguro'
    ],
  },
];

export default function ComoFuncionaSection() {
  return (
    <div className="relative">
      <MedicalBackground intensity="medium" />
      <Section
        id="como-funciona"
        title="Como Funciona"
        subtitle="Processo simplificado em 3 etapas para resultados rápidos e precisos"
        background="white"
      >
      <div className="space-y-16">
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row items-center gap-8 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Conteúdo */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-biowox-500 to-biowoxLight-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {step.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {step.details.map((detail, detailIndex) => (
                  <motion.div
                    key={detailIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + detailIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-biowox-500 rounded-full" />
                    <span className="text-gray-700">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Ícone */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-biowox-500/10 to-biowoxLight-400/10 rounded-3xl flex items-center justify-center border border-biowox-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-biowox-500 to-biowoxLight-400 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  {step.icon}
                </div>
              </div>
            </motion.div>
            
          </motion.div>
        ))}
      </div>
      
      {/* Timeline visual */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 hidden lg:block"
      >
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-biowox-500 to-biowoxLight-400 transform -translate-y-1/2" />
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="w-4 h-4 bg-biowox-500 rounded-full border-4 border-white shadow-lg" />
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-600">
                  Etapa {step.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      </Section>
    </div>
  );
}
