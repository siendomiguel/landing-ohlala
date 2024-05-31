import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-grow p-8 bg-gradient-to-b from-purple-100 to-white">
      <div className="text-center my-8">
        <Image
          src="/Ohlala-morado-oscuro.png"
          alt="Ohlala Logo"
          width={300}
          height={300}
          className="mx-auto mb-4"
        />
      </div>
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <Link href="/services" passHref>
          <div className="block text-center bg-white text-purple-700 py-4 rounded-lg shadow-md hover:bg-purple-50 transition cursor-pointer">
            Nuestros servicios
          </div>
        </Link>
        <Link href="/horarios" passHref>
          <div className="block text-center bg-white text-purple-700 py-4 rounded-lg shadow-md hover:bg-purple-50 transition cursor-pointer">
            Horarios de atención
          </div>
        </Link>
        <Link href="/location" passHref>
          <div className="block text-center bg-white text-purple-700 py-4 rounded-lg shadow-md hover:bg-purple-50 transition cursor-pointer">
            Ubicación
          </div>
        </Link>
        <Link href="/payment-methods" passHref>
          <div className="block text-center bg-white text-purple-700 py-4 rounded-lg shadow-md hover:bg-purple-50 transition cursor-pointer">
            Métodos de pago
          </div>
        </Link>
        <Link href="/aplicacion" passHref>
          <div className="block text-center bg-white text-purple-700 py-4 rounded-lg shadow-md hover:bg-purple-50 transition cursor-pointer">
            Aplicación Ohlala
          </div>
        </Link>
        <Link href="/contacto" passHref>
          <div className="block text-center bg-white text-purple-700 py-4 rounded-lg shadow-md hover:bg-purple-50 transition cursor-pointer">
            Contactanos
          </div>
        </Link>
      </div>
    </main>
  );
}
