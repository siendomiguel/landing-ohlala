import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Phone, MapPin, Clock, Sparkles, ExternalLink } from 'lucide-react';
import FloatingActionButton from '../../components/floating-action-button';
import BackButton from '../../components/back-button';
import AllServicesLink from '../../components/all-services-link';

export const metadata: Metadata = {
  title: 'Pedicurista en Ocaña Centro - Pedicure Profesional',
  description:
    'Buscas pedicurista en Ocaña centro? En Ohlala Estudio de Belleza ofrecemos pedicure profesional, spa de pies, tratamiento de uñas y más. Calle 10 #10-19. Agenda tu cita.',
  alternates: {
    canonical: '/pedicurista-ocana',
  },
  openGraph: {
    title: 'Pedicurista Profesional en Ocaña Centro | Ohlala Estudio de Belleza',
    description:
      'Servicio de pedicure profesional en el centro de Ocaña. Spa de pies, tratamiento de uñas, esmaltado y más. ¡Agenda tu cita por WhatsApp!',
    url: 'https://estudiodebellezaohlala.com/pedicurista-ocana',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Pedicure Profesional en Ocaña',
  provider: { '@id': 'https://estudiodebellezaohlala.com/#business' },
  areaServed: { '@type': 'City', name: 'Ocaña' },
  description:
    'Servicio profesional de pedicure en Ocaña centro. Spa de pies, tratamiento de uñas, esmaltado y cuidado completo de pies.',
};

const serviciosPedicure = [
  'Pedicure tradicional',
  'Tratamiento de uñas',
  'Semipermanente',
  'Exfoliación de pies',
];

export default function PedicuristaOcana() {
  return (
    <>
      <Script
        id="pedicure-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col space-y-6 w-full pb-8">
        {/* Título */}
        <div className="text-center bg-white/80 backdrop-blur-sm text-purple-800 py-4 px-8 rounded-2xl shadow-sm border border-white/50">
          <h1 className="text-xl font-bold">Pedicurista en Ocaña Centro</h1>
          <p className="text-purple-600 text-sm mt-1">Servicio profesional de pedicure</p>
        </div>

        {/* Descripción */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-md border border-white/50">
          <p className="text-gray-800 font-medium text-center leading-relaxed">
            En <strong className="text-purple-800">Ohlala Estudio de Belleza</strong> contamos con
            pedicuristas profesionales en el centro de Ocaña. Cuidado completo para tus pies con
            tratamientos especializados y productos de primera calidad.
          </p>
        </div>

        {/* Servicios en grid */}
        <div className="grid grid-cols-2 gap-4">
          {serviciosPedicure.map((servicio) => (
            <div
              key={servicio}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/50 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center group"
            >
              <span className="font-semibold text-gray-800 group-hover:text-purple-700 transition-colors text-sm">
                {servicio}
              </span>
            </div>
          ))}
        </div>

        {/* CTA WhatsApp */}
        <Link href="https://wa.me/573212600682?text=Hola%2C%20quiero%20agendar%20una%20cita%20de%20pedicure" target="_blank" className="block group">
          <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-sm border border-white/50 hover:bg-white hover:shadow-md hover:-translate-y-1 hover:border-purple-200 transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 p-2 rounded-xl group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
                <Phone className="w-5 h-5 text-purple-700" />
              </div>
              <div>
                <span className="font-semibold text-gray-800 group-hover:text-purple-900 transition-colors block">
                  Agenda tu cita de pedicure
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

        {/* Links internos */}
        <div className="space-y-4">
          <Link href="/manicurista-ocana" className="block group">
            <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-sm border border-white/50 hover:bg-white hover:shadow-md hover:-translate-y-1 hover:border-purple-200 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-2 rounded-xl group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
                  <Sparkles className="w-5 h-5 text-purple-700" />
                </div>
                <span className="font-semibold text-gray-800 group-hover:text-purple-900 transition-colors">
                  Manicure profesional
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-500 transition-colors" />
            </div>
          </Link>

          <AllServicesLink />
        </div>

        <BackButton />
        <FloatingActionButton />
      </div>
    </>
  );
}
