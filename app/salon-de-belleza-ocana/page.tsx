import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Phone, MapPin, Clock, Sparkles, ExternalLink } from 'lucide-react';
import FloatingActionButton from '../../components/floating-action-button';
import BackButton from '../../components/back-button';

export const metadata: Metadata = {
  title: 'Salón de Belleza en Ocaña - Estudio de Belleza Ohlala',
  description:
    'Salón de belleza en Ocaña centro. Manicure, pedicure, cabello, maquillaje, pestañas, cejas, depilación y masajes. Calle 10 #10-19. Agenda tu cita por WhatsApp.',
  alternates: {
    canonical: '/salon-de-belleza-ocana',
  },
  openGraph: {
    title: 'Salón de Belleza en Ocaña Centro | Ohlala Estudio de Belleza',
    description:
      'Tu salón de belleza de confianza en Ocaña. Servicios profesionales de manicure, pedicure, cabello, maquillaje, pestañas y más.',
    url: 'https://ohlalaestudiodebelleza.com/salon-de-belleza-ocana',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Salón de Belleza en Ocaña - Ohlala Estudio de Belleza',
  description:
    'Salón de belleza profesional en Ocaña centro. Servicios de manicure, pedicure, cabello, maquillaje, pestañas, cejas y depilación.',
  url: 'https://ohlalaestudiodebelleza.com/salon-de-belleza-ocana',
  about: { '@id': 'https://ohlalaestudiodebelleza.com/#business' },
};

const serviciosDestacados = [
  { href: '/cabello-ocana', label: 'Cabello y tintes' },
  { href: '/cejas-ocana', label: 'Diseño de cejas' },
  { href: '/depilacion-ocana', label: 'Depilación profesional' },
  { href: '/manicurista-ocana', label: 'Manicure profesional' },
  { href: '/maquillaje-ocana', label: 'Maquillaje para eventos' },
  { href: '/pedicurista-ocana', label: 'Pedicure profesional' },
  { href: '/pestanas-ocana', label: 'Extensiones de pestañas' },
];

export default function SalonDeBellezaOcana() {
  return (
    <>
      <Script
        id="salon-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col space-y-6 w-full pb-8">
        {/* Título */}
        <div className="text-center bg-white/80 backdrop-blur-sm text-purple-800 py-4 px-8 rounded-2xl shadow-sm border border-white/50">
          <h1 className="text-xl font-bold">Salón de Belleza en Ocaña</h1>
          <p className="text-purple-600 text-sm mt-1">Tu estudio de belleza de confianza en el centro</p>
        </div>

        {/* Descripción */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-md border border-white/50">
          <p className="text-gray-800 font-medium text-center leading-relaxed">
            <strong className="text-purple-800">Ohlala Estudio de Belleza</strong> es tu salón de
            belleza en el centro de Ocaña, Norte de Santander. Ofrecemos servicios profesionales
            para realzar tu belleza natural con productos de primera calidad y atención personalizada.
          </p>
        </div>

        {/* Nuestros servicios */}
        <div className="text-center bg-white/80 backdrop-blur-sm text-purple-800 py-3 px-8 rounded-2xl shadow-sm border border-white/50">
          <h3 className="text-lg font-bold">Nuestros servicios</h3>
        </div>

        {serviciosDestacados.map((servicio) => (
          <Link key={servicio.href} href={servicio.href} className="block group">
            <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-sm border border-white/50 hover:bg-white hover:shadow-md hover:-translate-y-1 hover:border-purple-200 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-2 rounded-xl group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
                  <Sparkles className="w-5 h-5 text-purple-700" />
                </div>
                <span className="font-semibold text-gray-800 group-hover:text-purple-900 transition-colors">
                  {servicio.label}
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-500 transition-colors" />
            </div>
          </Link>
        ))}

        {/* CTA WhatsApp */}
        <Link href="https://wa.me/573212600682?text=Hola%2C%20quiero%20agendar%20una%20cita" target="_blank" className="block group">
          <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-sm border border-white/50 hover:bg-white hover:shadow-md hover:-translate-y-1 hover:border-purple-200 transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 p-2 rounded-xl group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
                <Phone className="w-5 h-5 text-purple-700" />
              </div>
              <div>
                <span className="font-semibold text-gray-800 group-hover:text-purple-900 transition-colors block">
                  Agenda tu cita
                </span>
                <span className="text-purple-600 text-xs font-medium">Escríbenos por WhatsApp</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-500 transition-colors" />
          </div>
        </Link>

        {/* Info: Ubicación y horarios */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-md border border-white/50 space-y-6">
          <div className="flex flex-col items-center text-center">
            <div className="bg-purple-100 p-2 rounded-xl mb-3">
              <MapPin className="w-5 h-5 text-purple-700" />
            </div>
            <span className="text-lg font-bold text-gray-800">Ubicación</span>
            <span className="text-purple-600 font-medium mt-1">Calle 10 #10-19 local 1</span>
            <span className="text-sm text-gray-500">Centro, Ocaña, Norte de Santander</span>
          </div>

          <div className="w-full h-px bg-purple-100"></div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-purple-100 p-2 rounded-xl mb-3">
              <Clock className="w-5 h-5 text-purple-700" />
            </div>
            <span className="text-lg font-bold text-gray-800">Horarios</span>
            <span className="text-purple-600 font-medium mt-1">
              Lunes a Viernes<br />8:30 AM - 12:00 PM / 2:00 PM - 7:00 PM
            </span>
            <span className="text-purple-600 font-medium mt-2">
              Sábados<br />8:30 AM - 7:00 PM
            </span>
          </div>
        </div>

        <BackButton />
        <FloatingActionButton />
      </div>
    </>
  );
}
