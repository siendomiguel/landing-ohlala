import BackButton from '../../components/back-button';
import Image from 'next/image';

export default function PaymentMethods() {
  return (
    <div className="flex flex-col space-y-6 w-full pb-8">
      <div className="text-center bg-white/80 backdrop-blur-sm text-purple-800 py-4 px-8 rounded-2xl shadow-sm border border-white/50">
        <h2 className="text-xl font-bold">Nuestros métodos de pago</h2>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-md border border-white/50 space-y-6 flex flex-col items-center text-center">
        <span className="text-gray-800 font-medium">
          Por el momento disponemos de Pagos en Efectivo y transferencias a Bancolombia, Nequi y Davivienda.
        </span>
        <div className="rounded-xl overflow-hidden shadow-sm border border-purple-100 w-full max-w-xs">
          <Image src="/Nequi-Ohlala.png" alt="Opciones de Pago Nequi Bancolombia" width={700} height={700} className="w-full h-auto object-contain" />
        </div>
      </div>

      <BackButton />
    </div>
  );
}
