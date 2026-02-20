import BackButton from '../../components/back-button';
import Image from 'next/image';

export default function Contacto() {
  return (
    <div className="flex flex-col space-y-6 w-full pb-8">
      <div className="text-center bg-white/80 backdrop-blur-sm text-purple-800 py-4 px-8 rounded-2xl shadow-sm border border-white/50">
        <h2 className="text-xl font-bold">Contáctanos</h2>
      </div>

      <a href="https://wa.me/573212600682" target="_blank" rel="noreferrer" className="block group">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-md border border-white/50 space-y-4 flex flex-col items-center text-center hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="bg-green-100 p-4 rounded-full group-hover:scale-110 transition-transform">
            <Image
              src="/whatsapp.webp"
              alt="Escríbenos por WhatsApp"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="font-bold text-lg text-gray-800 group-hover:text-green-600 transition-colors">Escríbenos por WhatsApp</span>

          <div className="w-full h-px bg-purple-100 my-2"></div>

          <div className="flex flex-col">
            <span className="text-sm text-gray-500 font-medium">Horario de atención WhatsApp</span>
            <span className="text-purple-700 font-bold mt-1">08:30 am - 07:00 pm</span>
          </div>
        </div>
      </a>

      <BackButton />
    </div>
  );
}
