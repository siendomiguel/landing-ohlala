import BackButton from '../../components/back-button';

export default function PaymentMethods() {
  return (
    <main className="flex flex-col items-center justify-center flex-grow p-8 bg-gradient-to-b from-purple-100 to-white">
      <div className="block text-center bg-white text-purple-700 py-4 px-8 rounded-lg shadow-md hover:bg-purple-50 transition cursor-pointer">
        <p>Nuestros metodos de pago</p>
      </div>
      <span className="text-center mt-5">
        Por el momento solo contados con Efectivo y transferencia a Bancolombia
        y Davivienda
      </span>
      <BackButton />
    </main>
  );
}
