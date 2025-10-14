'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Version3 from '@/components/Version3';

export default function HomePage() {
  useEffect(() => {
    // Configurações de segurança e performance
    const handleScroll = () => {
      // Lazy loading e otimizações de scroll podem ser adicionadas aqui
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Main content - Version 3 only */}
      <Version3 />
    </main>
  );
}
