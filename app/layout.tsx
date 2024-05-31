import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ohlala - Estudio de belleza',
  description: 'Realza tu belleza',
  icons: {
    icon: '/iconApp.jpg',
  },
  openGraph: {
    title: 'Ohlala - Estudio de belleza',
    description: 'Realza tu belleza',
    url: 'https://www.ohlalaestudiodebelleza.com/',
    images: [
      {
        url: '/iconApp.jpg',
        width: 800,
        height: 600,
        alt: 'Ohlala Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ohlala - Estudio de belleza',
    description: 'Realza tu belleza',
    images: ['/iconApp.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#6B46C1" />
      </head>
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
    </html>
  );
}
