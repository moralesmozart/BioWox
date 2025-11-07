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
  title: 'BioWox - Laboratório Médico em Tijucas | Exames Ocupacionais e Coletas Domiciliares',
  description: '🧬 Laboratório médico BioWox em Tijucas - SC. Especialista em exames laboratoriais de saúde ocupacional e coletas domiciliares. Aberto 24 horas. Rua 13 de Maio, 167, Sala 4.',
  keywords: 'laboratório tijucas, laboratório médico tijucas, exames ocupacionais tijucas, coletas domiciliares tijucas, laboratório biowox, exames laboratoriais tijucas, saúde ocupacional tijucas, laboratório 24 horas tijucas, microbiologia tijucas, análises clínicas tijucas',
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
    title: 'BioWox - Laboratório Médico em Tijucas | Exames Ocupacionais',
    description: '🧬 Laboratório médico BioWox em Tijucas - SC. Exames ocupacionais, coletas domiciliares. Aberto 24 horas. Rua 13 de Maio, 167, Sala 4.',
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
    title: 'BioWox - Laboratório Médico em Tijucas',
    description: '🧬 Laboratório médico em Tijucas - SC. Exames ocupacionais e coletas domiciliares. Aberto 24 horas.',
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#10B981" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              '@id': 'https://moralesmozart.github.io/biowox-landing/#organization',
              name: 'BioWox - Laboratório Médico',
              alternateName: 'Laboratório médico BioWox',
              description: 'Laboratório médico especializado em exames laboratoriais de saúde ocupacional e coletas domiciliares em Tijucas - SC',
              url: 'https://moralesmozart.github.io/biowox-landing/',
              logo: 'https://moralesmozart.github.io/biowox-landing/og-image.svg',
              image: 'https://moralesmozart.github.io/biowox-landing/og-image.svg',
              telephone: '+5548996927323',
              email: 'laboratoriomedicobiowox@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rua 13 de Maio, 167, Sala 4',
                addressLocality: 'Tijucas',
                addressRegion: 'SC',
                postalCode: '88200-180',
                addressCountry: 'BR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -27.2406,
                longitude: -48.6336,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '00:00',
                closes: '23:59',
              },
              priceRange: '$$',
              areaServed: {
                '@type': 'City',
                name: 'Tijucas',
                addressRegion: 'SC',
                addressCountry: 'BR',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Serviços do Laboratório BioWox',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Exames Laboratoriais de Saúde Ocupacional',
                      description: 'Exames laboratoriais especializados em saúde ocupacional',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Coletas Domiciliares',
                      description: 'Serviço de coleta domiciliar para exames laboratoriais',
                    },
                  },
                ],
              },
              sameAs: [
                'https://portal.worklabweb.com.br/resultados-on-line/3752',
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
