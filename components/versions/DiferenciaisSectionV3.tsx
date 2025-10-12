'use client';

import { motion } from 'framer-motion';
import { Truck, Stethoscope, Users, Microscope } from 'lucide-react';
import Section from '../Section';
import Card from '../Card';
import MedicalBackground from '../MedicalBackground';

const diferenciais = [
  {
    title: 'Coleta no local da empresa',
    description: 'Evite deslocamentos! Nossa equipe vai até você, realizando coletas diretamente no ambiente de trabalho, com agendamento flexível e atendimento humanizado.',
    icon: <Truck className="w-8 h-8" />,
    delay: 0,
  },
  {
    title: 'Especialistas em saúde ocupacional alimentar',
    description: 'Foco total em exames admissionais, periódicos e demissionais para empresas que exigem alto padrão sanitário e de qualidade.',
    icon: <Stethoscope className="w-8 h-8" />,
    delay: 0.2,
  },
  {
    title: 'Consultoria com infectologistas',
    description: 'Dois médicos infectologistas integram nosso time, oferecendo suporte especializado em casos como coproculturas positivas, surtos, ou dúvidas sobre exames microbiológicos.',
    icon: <Users className="w-8 h-8" />,
    delay: 0.4,
  },
  {
    title: 'Serviços de Microbiologia para Laboratórios Parceiros',
    description: 'Nosso laboratório oferece serviços especializados de microbiologia voltados exclusivamente para outros laboratórios de análises clínicas, veterinárias ou ambientais que desejam terceirizar essa etapa com qualidade, segurança e confiabilidade.',
    icon: <Microscope className="w-8 h-8" />,
    delay: 0.6,
  },
];

export default function DiferenciaisSectionV3() {
  return (
    <div className="relative">
      <MedicalBackground intensity="low" />
      <Section
        id="diferenciais"
        title="Nossos Diferenciais"
        subtitle="Especialização em saúde ocupacional com foco em excelência e conformidade"
        background="gray"
      >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      
      {/* Estatísticas específicas para saúde ocupacional */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        {[
          { number: '24-48h', label: 'Tempo de Liberação' },
          { number: '100%', label: 'Conformidade ANVISA' },
          { number: '2', label: 'Médicos Infectologistas' },
          { number: '20+', label: 'Empresas Atendidas' },
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
