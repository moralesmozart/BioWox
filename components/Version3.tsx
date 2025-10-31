'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import DiferenciaisSection from './DiferenciaisSection';
import ParaQuemSection from './ParaQuemSection';
import CompromissoSection from './CompromissoSection';
import ContactForm from './ContactForm';
import Footer from './Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import Section from './Section';

export default function Version3() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Seção Hero - Version 3 with occupational health focus - Logo subtitle updated */}
      <div className="relative">
        <HeroSection
          title="Especialista em exames laboratoriais de saúde ocupacional e coletas domiciliares"
          subtitle="Microbiologia automatizada"
          logoSubtitle="Laboratório Médico" 
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
        <DiferenciaisSection />
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
            <ContactForm />
            {/* Version 3 enhancement indicator */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse"></div>
          </div>
        </Section>
      </motion.div>

      {/* Footer */}
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppFloatingButton />
    </motion.div>
  );
}
