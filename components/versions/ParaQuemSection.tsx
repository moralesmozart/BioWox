'use client';

import { motion } from 'framer-motion';
import { Building2, Utensils, Pill, ChefHat, Truck, Shield } from 'lucide-react';
import Section from '../Section';

const targetAudiences = [
  {
    title: 'Indústrias e cozinhas industriais',
    icon: <Building2 className="w-8 h-8" />,
    description: 'Atendimento especializado para grandes volumes e processos industriais',
    delay: 0,
  },
  {
    title: 'Empresas de alimentos e bebidas',
    icon: <Utensils className="w-8 h-8" />,
    description: 'Conformidade com normas sanitárias e controle de qualidade',
    delay: 0.2,
  },
  {
    title: 'Farmácias de manipulação e suplementos',
    icon: <Pill className="w-8 h-8" />,
    description: 'Exames específicos para manipulação de medicamentos e suplementos',
    delay: 0.4,
  },
  {
    title: 'Restaurantes e serviços de catering',
    icon: <ChefHat className="w-8 h-8" />,
    description: 'Suporte completo para estabelecimentos alimentícios',
    delay: 0.6,
  },
  {
    title: 'Empresas que buscam conformidade',
    icon: <Shield className="w-8 h-8" />,
    description: 'Conformidade com normas da ANVISA e MAPA',
    delay: 0.8,
  },
];

export default function ParaQuemSection() {
  return (
    <Section
      id="para-quem"
      title="Para quem é a BioWox"
      subtitle="Atendemos empresas que exigem excelência em saúde ocupacional"
      background="white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {targetAudiences.map((audience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: audience.delay }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-biowox-100 rounded-xl text-biowox-600">
                {audience.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {audience.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {audience.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <div className="bg-gradient-to-r from-biowox-50 to-green-50 rounded-2xl p-8 border border-biowox-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Sua empresa se encaixa em algum desses perfis?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a manter 
            os mais altos padrões de saúde ocupacional e conformidade regulatória.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center space-x-2 bg-biowox-500 hover:bg-biowox-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            <span>Fale Conosco</span>
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
