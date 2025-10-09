'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import DiferenciaisSectionV3 from './DiferenciaisSectionV3';
import ParaQuemSection from './ParaQuemSection';
import CompromissoSection from './CompromissoSection';
import ContactFormV2 from './ContactFormV2';
import Footer from '@/components/Footer';
import Section from '@/components/Section';

export default function Version3() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Seção Hero - Version 3 with occupational health focus */}
      <div className="relative">
        <HeroSection
          title="Laboratório Médico"
          subtitle="Especialista em exames laboratoriais voltado para área de saúde ocupacional."
          description="Com foco em empresas dos setores de alimentos, suplementos e manipulação."
          ctaText="Saiba mais"
        />
        {/* Version 3 Badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
            🏥 Version 3
          </div>
        </div>
      </div>

      {/* Seção Para Quem é a BioWox */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <ParaQuemSection />
      </motion.div>

      {/* Seção Diferenciais with occupational health focus */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <DiferenciaisSectionV3 />
      </motion.div>

      {/* Seção Nosso Compromisso */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <CompromissoSection />
      </motion.div>

      {/* Enhanced Contact Section for Version 3 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Section
          id="contato"
          title="Conecte-se Conosco"
          subtitle="Prontos para atender suas necessidades em saúde ocupacional"
          background="gray"
        >
          <div className="relative">
            <ContactFormV2 />
            {/* Version 3 enhancement indicator */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse"></div>
          </div>
        </Section>
      </motion.div>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}
