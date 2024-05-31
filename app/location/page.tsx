import BackButton from '../../components/back-button';

export default function Location() {
  return (
    <main className="flex flex-col items-center justify-center flex-grow p-8 bg-gradient-to-b from-purple-100 to-white">
      <div className="block text-center bg-white text-purple-700 py-4 px-8 rounded-lg shadow-md hover:bg-purple-50 transition cursor-pointer">
        <p>Conoce nuestra ubicación</p>
      </div>
      <span className="text-center mt-5">
        Estamos ubicados en la calle 10 #10-19 local 1
      </span>
      <span className="text-center text-xs text-purple-700">
        Pasos arriba del hotel el principe
      </span>
      <span className="text-center text-xs text-purple-700">
        Antes del semaforo del colegio Caro
      </span>
      <BackButton />
    </main>
  );
}
