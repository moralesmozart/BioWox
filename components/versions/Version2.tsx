'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import DiferenciaisSectionV2 from './DiferenciaisSectionV2';
import ComoFuncionaSection from '@/components/ComoFuncionaSection';
import SegurancaSection from '@/components/SegurancaSection';
import ContactFormV2 from './ContactFormV2';
import Footer from '@/components/Footer';
import Section from '@/components/Section';

export default function Version2() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Seção Hero - Version 2 with enhanced styling */}
      <div className="relative">
        <HeroSection
          title="O futuro da microbiologia e exames ocupacionais já chegou."
          subtitle="Tecnologia de ponta, resultados precisos, futuro presente."
          ctaText="Descubra mais"
        />
        {/* Version 2 Badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
            ✨ Version 2
          </div>
        </div>
      </div>

      {/* Seção Diferenciais with enhanced animations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <DiferenciaisSectionV2 />
      </motion.div>

      {/* Seção Como Funciona */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ComoFuncionaSection />
      </motion.div>

      {/* Seção Segurança */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <SegurancaSection />
      </motion.div>

      {/* Enhanced Contact Section for Version 2 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Section
          id="contato"
          title="Conecte-se Conosco"
          subtitle="Prontos para revolucionar sua microbiologia com tecnologia avançada"
          background="gray"
        >
          <div className="relative">
            <ContactFormV2 />
            {/* Version 2 enhancement indicator */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
        </Section>
      </motion.div>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}
