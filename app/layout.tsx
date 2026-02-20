import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import Image from 'next/image';
import Link from 'next/link';

import './globals.css';

export const metadata: Metadata = {
  title: 'Ohlala - Estudio de belleza',
  description: 'Realza tu belleza',
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
