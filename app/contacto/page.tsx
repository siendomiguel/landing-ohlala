import BackButton from '../../components/back-button';
import Image from 'next/image';

export default function Contacto() {
  return (
    <main className="flex flex-col items-center justify-center flex-grow p-8 bg-gradient-to-b from-purple-100 to-white">
      <a href="https://wa.me/573212600682" target="_blank" rel="noreferrer">
        <div className="block text-center bg-white text-purple-700 py-4 px-8 rounded-lg shadow-md hover:bg-purple-50 transition cursor-pointer">
          <p>Nuestro WhatsApp</p>
          <Image
            src="/whatsapp.webp"
            alt="whatsapp"
            width={50}
            height={50}
            className="mx-auto"
          />
        </div>
      </a>
      <span className="text-center mt-5 text-base">
        Nuestro horario de atención para nuestra linea de WhatsApp
      </span>
      <span className="text-base mt-2">08:30am - 07:00pm</span>
      <BackButton />
    </main>
  );
}
