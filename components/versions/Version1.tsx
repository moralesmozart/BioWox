'use client';

import HeroSection from '@/components/HeroSection';
import DiferenciaisSection from '@/components/DiferenciaisSection';
import ComoFuncionaSection from '@/components/ComoFuncionaSection';
import SegurancaSection from '@/components/SegurancaSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Section from '@/components/Section';

export default function Version1() {
  return (
    <>
      {/* Seção Hero */}
      <HeroSection
        title="O futuro da microbiologia já chegou."
        subtitle="Precisão, tecnologia e saúde em cada resultado."
        ctaText="Quero saber mais"
      />

      {/* Seção Diferenciais */}
      <DiferenciaisSection />

      {/* Seção Como Funciona */}
      <ComoFuncionaSection />

      {/* Seção Segurança */}
      <SegurancaSection />

      {/* Seção de Contato */}
      <Section
        id="contato"
        title="Entre em Contato"
        subtitle="Estamos prontos para atender suas necessidades em microbiologia"
        background="gray"
      >
        <ContactForm />
      </Section>

      {/* Footer */}
      <Footer />
    </>
  );
}
