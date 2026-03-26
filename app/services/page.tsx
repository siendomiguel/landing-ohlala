import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ExternalLink } from 'lucide-react';
import BackButton from '../../components/back-button';

export const metadata: Metadata = {
  title: 'Servicios de Belleza en Ocaña - Manicure, Pedicure, Cabello y más',
  description:
    'Conoce todos los servicios de belleza en Ohlala Estudio de Belleza en Ocaña. Manicure, pedicure, cabello, cejas, depilación, maquillaje y pestañas profesionales.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Servicios de Belleza | Ohlala Estudio de Belleza en Ocaña',
    description:
      'Servicios profesionales de belleza en Ocaña: manicure, pedicure, cabello, cejas, depilación, maquillaje y pestañas.',
    url: 'https://ohlalaestudiodebelleza.com/services',
    type: 'website',
  },
};

const servicios = [
  { href: '/cabello-ocana', label: 'Cabello' },
  { href: '/cejas-ocana', label: 'Cejas' },
  { href: '/depilacion-ocana', label: 'Depilación' },
  { href: '/manicurista-ocana', label: 'Manicure' },
  { href: '/maquillaje-ocana', label: 'Maquillaje' },
  { href: '/pedicurista-ocana', label: 'Pedicure' },
  { href: '/pestanas-ocana', label: 'Pestañas' },
];

export default function Services() {
  return (
    <div className="flex flex-col space-y-6 w-full">
      <div className="text-center bg-white/80 backdrop-blur-sm text-purple-800 py-4 px-8 rounded-2xl shadow-sm border border-white/50">
        <h1 className="text-xl font-bold">Nuestros servicios</h1>
      </div>

      <div className="grid grid-cols-2 gap-4 pb-8">
        {servicios.map((servicio) => (
          <Link key={servicio.href} href={servicio.href} className="block group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/50 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center">
              <div className="bg-purple-100 p-2 rounded-xl mb-2 group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
                <Sparkles className="w-4 h-4 text-purple-700" />
              </div>
              <span className="font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">
                {servicio.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <BackButton />
    </div>
  );
}
