'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Award, CheckCircle, Users, FileCheck } from 'lucide-react';
import Section from './Section';
import Card from './Card';

const segurancaFeatures = [
  {
    title: 'Conformidade ANVISA',
    description: 'Totalmente certificado e em conformidade com todas as regulamentações da ANVISA para laboratórios clínicos.',
    icon: <Award className="w-8 h-8" />,
    certification: 'Certificado ANVISA',
  },
  {
    title: 'Criptografia Avançada',
    description: 'Dados protegidos com criptografia de nível bancário e protocolos de segurança de última geração.',
    icon: <Lock className="w-8 h-8" />,
    certification: 'SSL/TLS 256-bit',
  },
  {
    title: 'Equipe Científica',
    description: 'Cientistas e técnicos altamente qualificados com especialização em microbiologia clínica e infectologia.',
    icon: <Users className="w-8 h-8" />,
    certification: 'CRF/CRBM',
  },
  {
    title: 'Auditoria Contínua',
    description: 'Processos auditados regularmente com controles de qualidade rigorosos e monitoramento 24/7.',
    icon: <FileCheck className="w-8 h-8" />,
    certification: 'ISO 15189',
  },
];

const certificacoes = [
  { name: 'ANVISA', status: 'Certificado' },
  { name: 'ISO 15189', status: 'Certificado' },
  { name: 'CRF/CRBM', status: 'Registrado' },
  { name: 'LGPD', status: 'Conforme' },
];

export default function SegurancaSection() {
  return (
    <Section
      id="seguranca"
      title="Segurança e Confiabilidade"
      subtitle="Garantimos a máxima segurança e conformidade em todos os nossos processos"
      background="gray"
    >
      <div className="space-y-16">
        {/* Cards de segurança */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {segurancaFeatures.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 0.2}
              background="white"
              hover={true}
            />
          ))}
        </div>
        
        {/* Certificações */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Certificações e Conformidade
            </h3>
            <p className="text-gray-700">
              Nossas certificações garantem a qualidade e confiabilidade dos nossos serviços
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificacoes.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {cert.name}
                </h4>
                <p className="text-gray-700 text-sm">
                  {cert.status}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Estatísticas de segurança */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { 
              icon: <Shield className="w-8 h-8" />,
              number: '100%',
              label: 'Dados Criptografados',
              description: 'Todos os dados são protegidos com criptografia de nível bancário'
            },
            { 
              icon: <Lock className="w-8 h-8" />,
              number: '24/7',
              label: 'Monitoramento',
              description: 'Sistema de monitoramento contínuo para máxima segurança'
            },
            { 
              icon: <Award className="w-8 h-8" />,
              number: '5+',
              label: 'Certificações',
              description: 'Múltiplas certificações de qualidade e conformidade'
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-6 border border-gray-200 shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-biowox-500 to-biowoxLight-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>
              <div className="text-gray-700 text-sm">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
