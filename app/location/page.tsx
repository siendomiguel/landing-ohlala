import BackButton from '../../components/back-button';
import LocationMap from '../../components/location-map';

export default function Location() {
  return (
    <div className="flex flex-col space-y-6 w-full pb-8">
      <LocationMap />

      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-md border border-white/50 space-y-4 flex flex-col items-center text-center">
        <span className="text-gray-800 font-medium text-lg">
          Estamos ubicados en la calle 10 #10-19 local 1
        </span>
        <div className="w-full h-px bg-purple-100"></div>
        <div className="flex flex-col space-y-2">
          <span className="text-sm font-semibold text-purple-700 bg-purple-100 px-3 py-1 rounded-full w-fit mx-auto">
            Pasos arriba del hotel el principe
          </span>
          <span className="text-sm font-semibold text-purple-700 bg-purple-100 px-3 py-1 rounded-full w-fit mx-auto">
            Antes del semaforo del colegio Caro
          </span>
        </div>
      </div>

      <BackButton />
    </div>
  );
}
