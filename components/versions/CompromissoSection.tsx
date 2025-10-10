'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Headphones, Award } from 'lucide-react';
import Section from '../Section';

const compromissos = [
  {
    title: 'Segurança',
    description: 'Protocolos rigorosos e conformidade total com normas sanitárias e regulamentações vigentes.',
    icon: <Shield className="w-8 h-8" />,
    delay: 0,
  },
  {
    title: 'Agilidade',
    description: 'Resultados em 24-48 horas, otimizando o tempo de diagnóstico e liberação de colaboradores.',
    icon: <Zap className="w-8 h-8" />,
    delay: 0.2,
  },
  {
    title: 'Suporte Técnico',
    description: 'Equipe especializada que entende as exigências do seu setor e oferece suporte completo.',
    icon: <Headphones className="w-8 h-8" />,
    delay: 0.4,
  },
  {
    title: 'Qualidade',
    description: 'Excelência em cada etapa do processo, desde a coleta até a entrega dos resultados.',
    icon: <Award className="w-8 h-8" />,
    delay: 0.6,
  },
];

const certificacoes = [
  {
    title: 'Visa Correto',
    description: 'Certificação para processamento de exames microbiológicos',
    icon: '🏥',
  },
  {
    title: 'CRBM',
    description: 'Conselho de medicina e biomedicina',
    icon: '🔬',
  },
  {
    title: 'CRM',
    description: 'Conselho de medicina e biomedicina',
    icon: '👨‍⚕️',
  },
];

export default function CompromissoSection() {
  return (
    <Section
      id="compromisso"
      title="Nosso Compromisso"
      subtitle="Segurança, agilidade e suporte técnico de verdade, com uma equipe especializada que entende as exigências do seu setor"
      background="white"
    >
      {/* Compromissos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {compromissos.map((compromisso, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: compromisso.delay }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-biowox-100 rounded-full flex items-center justify-center mx-auto mb-4 text-biowox-600">
              {compromisso.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {compromisso.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {compromisso.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Certificações e Conformidade */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-50 rounded-2xl p-8"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Certificação e Conformidade
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossas certificações garantem a qualidade e conformidade de todos os nossos processos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificacoes.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{cert.icon}</div>
              <h4 className="font-bold text-gray-900 mb-2">{cert.title}</h4>
              <p className="text-sm text-gray-600">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
