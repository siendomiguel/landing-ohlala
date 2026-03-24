import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import FloatingActionButton from '../../components/floating-action-button';
import BackButton from '../../components/back-button';
import AllServicesLink from '../../components/all-services-link';

export const metadata: Metadata = {
  title: 'Pestañas en Ocaña Centro - Extensiones Pelo a Pelo y por Punto',
  description:
    'Extensiones de pestañas en Ocaña centro. Pestañas pelo a pelo y pestañas por punto profesionales. Calle 10 #10-19. Agenda tu cita por WhatsApp.',
  alternates: {
    canonical: '/pestanas-ocana',
  },
  openGraph: {
    title: 'Extensiones de Pestañas en Ocaña Centro | Ohlala Estudio de Belleza',
    description:
      'Pestañas pelo a pelo y por punto en Ocaña. Extensiones profesionales para una mirada impactante.',
    url: 'https://estudiodebellezaohlala.com/pestanas-ocana',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Extensiones de Pestañas en Ocaña',
  provider: {
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
  },
  areaServed: { '@type': 'City', name: 'Ocaña' },
  description: 'Extensiones de pestañas profesionales en Ocaña centro. Pelo a pelo y por punto.',
};

const servicios = [
  'Pestañas pelo a pelo',
  'Pestañas por punto',
];

export default function PestanasOcana() {
  return (
    <>
      <Script id="pestanas-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="flex flex-col space-y-6 w-full pb-8">
        <div className="text-center bg-white/80 backdrop-blur-sm text-purple-800 py-4 px-8 rounded-2xl shadow-sm border border-white/50">
          <h2 className="text-xl font-bold">Pestañas en Ocaña Centro</h2>
          <p className="text-purple-600 text-sm mt-1">Extensiones de pestañas profesionales</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-md border border-white/50">
          <p className="text-gray-800 font-medium text-center leading-relaxed">
            En <strong className="text-purple-800">Ohlala Estudio de Belleza</strong> realzamos
            tu mirada con extensiones de pestañas profesionales. Técnicas pelo a pelo y por punto
            para un resultado natural y duradero.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {servicios.map((servicio) => (
            <div key={servicio} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/50 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center group">
              <span className="font-semibold text-gray-800 group-hover:text-purple-700 transition-colors text-sm">{servicio}</span>
            </div>
          ))}
        </div>

        <Link href="https://wa.me/573212600682?text=Hola%2C%20quiero%20agendar%20una%20cita%20de%20pestañas" target="_blank" className="block group">
          <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-sm border border-white/50 hover:bg-white hover:shadow-md hover:-translate-y-1 hover:border-purple-200 transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 p-2 rounded-xl group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
                <Phone className="w-5 h-5 text-purple-700" />
              </div>
              <div>
                <span className="font-semibold text-gray-800 group-hover:text-purple-900 transition-colors block">Agenda tu cita</span>
                <span className="text-purple-600 text-xs font-medium">Escríbenos por WhatsApp</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-500 transition-colors" />
          </div>
        </Link>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-md border border-white/50 space-y-6">
          <div className="flex flex-col items-center text-center">
            <div className="bg-purple-100 p-2 rounded-xl mb-3"><MapPin className="w-5 h-5 text-purple-700" /></div>
            <span className="text-lg font-bold text-gray-800">Ubicación</span>
            <span className="text-purple-600 font-medium mt-1">Calle 10 #10-19 local 1</span>
            <span className="text-sm text-gray-500">Centro, Ocaña, Norte de Santander</span>
          </div>
          <div className="w-full h-px bg-purple-100"></div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-purple-100 p-2 rounded-xl mb-3"><Clock className="w-5 h-5 text-purple-700" /></div>
            <span className="text-lg font-bold text-gray-800">Horarios</span>
            <span className="text-purple-600 font-medium mt-1">Lunes a Viernes<br />8:30 AM - 12:00 PM / 2:00 PM - 7:00 PM</span>
            <span className="text-purple-600 font-medium mt-2">Sábados<br />8:30 AM - 7:00 PM</span>
          </div>
        </div>

        <AllServicesLink />

        <BackButton />
        <FloatingActionButton />
      </div>
    </>
  );
}
