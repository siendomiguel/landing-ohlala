import Link from 'next/link';
import { Sparkles, Clock, MapPin, CreditCard, Smartphone, MessageCircle, ExternalLink } from 'lucide-react';
import LocationMap from '../components/location-map';
import FloatingActionButton from '../components/floating-action-button';

export default function Home() {
  const links = [
    { href: '/services', label: 'Nuestros servicios', icon: Sparkles },
    { href: '/horarios', label: 'Horarios de atención', icon: Clock },
    { href: '/location', label: 'Ubicación', icon: MapPin },
    { href: '/payment-methods', label: 'Métodos de pago', icon: CreditCard },
    { href: '/aplicacion', label: 'Aplicación Ohlala', icon: Smartphone },
    { href: '/contacto', label: 'Contáctanos', icon: MessageCircle },
  ];

  return (
    <div className="flex flex-col space-y-8 w-full">
      {/* Links Section */}
      <section className="w-full space-y-4">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link key={link.href} href={link.href} className="block group">
              <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-sm border border-white/50 hover:bg-white hover:shadow-md hover:-translate-y-1 hover:border-purple-200 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-2 rounded-xl group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5 text-purple-700" />
                  </div>
                  <span className="font-semibold text-gray-800 group-hover:text-purple-900 transition-colors">
                    {link.label}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-500 transition-colors" />
              </div>
            </Link>
          );
        })}
      </section>

      {/* Map Section */}
      <LocationMap />

      {/* Floating Action Button / Sticky Footer (Mobile Only) */}
      <FloatingActionButton />

    </div>
  );
}
