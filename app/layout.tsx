import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';

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
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 to-white">
        <div className="flex-grow flex flex-col">{children}</div>
        <footer className="text-center py-4 w-full bg-purple-700 text-white rounded-t-lg">
          <p className="text-xs">
            Desarrollado por <a href="https://siendomiguel.com">Miguel Lares</a>
          </p>
          <p className="text-xs">
            Derechos reservados Ohlala - Estudio de belleza ©2024
          </p>
        </footer>
      </body>
      <GoogleTagManager gtmId="G-2VZJJ6N2E5" />
    </html>
  );
}
