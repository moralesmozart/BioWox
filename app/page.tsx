'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Version1 from '@/components/versions/Version1';
import Version2 from '@/components/versions/Version2';
import Version3 from '@/components/versions/Version3';
import { useVersion } from '@/lib/version-context';

export default function HomePage() {
  const { currentVersion } = useVersion();

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

  const renderVersion = () => {
    switch (currentVersion) {
      case 'v2':
        return <Version2 />;
      case 'v3':
        return <Version3 />;
      case 'v1':
      default:
        return <Version1 />;
    }
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Version-specific content */}
      {renderVersion()}
    </main>
  );
}
