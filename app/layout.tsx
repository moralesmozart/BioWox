import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://moralesmozart.github.io/biowox-landing/'),
  title: 'BioWox - Microbiologia Avançada | O futuro da microbiologia já chegou',
  description: '🧬 Laboratório de microbiologia avançada com tecnologia de ponta. Automação, precisão e velocidade em cada análise. O futuro da microbiologia já chegou!',
  keywords: 'microbiologia, laboratório, análise, automação, precisão, saúde, BioWox, tecnologia, ciência',
  authors: [{ name: 'BioWox' }],
  creator: 'BioWox',
  publisher: 'BioWox',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://moralesmozart.github.io/biowox-landing/',
    title: 'BioWox - Microbiologia Avançada',
    description: '🧬 O futuro da microbiologia já chegou! Laboratório com tecnologia de ponta, automação e precisão em cada resultado.',
    siteName: 'BioWox',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'BioWox - Microbiologia Avançada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BioWox - Microbiologia Avançada',
    description: '🧬 O futuro da microbiologia já chegou! Tecnologia, automação e precisão em cada análise.',
    images: ['/og-image.svg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#00FF99" />
      </head>
            <body className={`${inter.className} antialiased`}>
              {children}
            </body>
    </html>
  );
}
