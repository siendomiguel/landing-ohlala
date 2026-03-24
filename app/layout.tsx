import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import Image from 'next/image';
import Link from 'next/link';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Ohlala - Estudio de Belleza en Ocaña | Manicure, Pedicure, Cabello y más',
    template: '%s | Ohlala Estudio de Belleza',
  },
  description:
    'Estudio de belleza en Ocaña, Norte de Santander. Servicios profesionales de manicure, pedicure, cabello, maquillaje, pestañas y más. Agenda tu cita por WhatsApp.',
  metadataBase: new URL('https://estudiodebellezaohlala.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ohlala - Estudio de Belleza en Ocaña',
    description:
      'Servicios profesionales de belleza en Ocaña. Manicure, pedicure, cabello, maquillaje, pestañas y más. ¡Realza tu belleza natural!',
    url: 'https://estudiodebellezaohlala.com',
    siteName: 'Ohlala Estudio de Belleza',
    locale: 'es_CO',
    type: 'website',
  },
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
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Ohlala - Estudio de Belleza',
  url: 'https://estudiodebellezaohlala.com',
  telephone: '+573212600682',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle 10 #10-19 local 1',
    addressLocality: 'Ocaña',
    addressRegion: 'Norte de Santander',
    addressCountry: 'CO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 8.2379,
    longitude: -73.3564,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '12:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '14:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:30',
      closes: '19:00',
    },
  ],
  priceRange: '$$',
  image: 'https://estudiodebellezaohlala.com/Ohlala-morado-oscuro.png',
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* <GoogleTagManager gtmId="G-2VZJJ6N2E5" /> */}

      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WDTVXHCM');`,
        }}></Script>

      <body className="flex flex-col bg-gradient-to-b from-purple-100 to-white min-h-screen">
        <div className="flex-grow flex flex-col relative items-center py-10 px-4 sm:px-6">
          <div className="w-full max-w-md flex flex-col items-center z-10">
            {/* Global Header Section */}
            <header className="flex flex-col items-center text-center space-y-4 w-full mb-8">
              <Link href="/">
                <div className="relative w-40 h-40 animate-float cursor-pointer">
                  <Image
                    src="/Ohlala-morado-oscuro.png"
                    alt="Ohlala Beauty Studio"
                    fill
                    className="object-contain drop-shadow-md"
                    priority
                  />
                </div>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-purple-900 tracking-tight">Estudio de Belleza</h1>
                <p className="text-purple-600 font-medium mt-1">Realza tu belleza natural ✨</p>
              </div>
            </header>

            <main className="w-full pb-28">
              {children}
            </main>
          </div>

          {/* Background decorative elements */}
          <div className="fixed top-[-10%] left-[-10%] w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse pb-10 pointer-events-none z-0"></div>
          <div className="fixed bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000 pointer-events-none z-0"></div>
        </div>
        <footer className="text-center py-4 w-full bg-purple-700 text-white rounded-t-lg z-20 relative">
          <p className="text-xs">
            Desarrollado por <a href="https://siendomiguel.com" className="hover:underline">Miguel Lares</a>
          </p>
          <p className="text-xs">Derechos reservados Ohlala - Estudio de belleza ©2026</p>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
