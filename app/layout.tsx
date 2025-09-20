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
  title: 'BioWox - Microbiologia Avançada | O futuro da microbiologia já chegou',
  description: 'Precisão, tecnologia e saúde em cada resultado. Laboratório de microbiologia avançada com automação, precisão e velocidade.',
  keywords: 'microbiologia, laboratório, análise, automação, precisão, saúde, BioWox',
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
    url: 'https://biowox.com.br',
    title: 'BioWox - Microbiologia Avançada',
    description: 'O futuro da microbiologia já chegou. Precisão, tecnologia e saúde em cada resultado.',
    siteName: 'BioWox',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BioWox - Microbiologia Avançada',
    description: 'O futuro da microbiologia já chegou. Precisão, tecnologia e saúde em cada resultado.',
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
