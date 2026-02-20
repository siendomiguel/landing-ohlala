import BackButton from '../../components/back-button';

export default function Horarios() {
  return (
    <div className="flex flex-col space-y-6 w-full pb-8">
      <div className="text-center bg-white/80 backdrop-blur-sm text-purple-800 py-4 px-8 rounded-2xl shadow-sm border border-white/50">
        <h2 className="text-xl font-bold">Nuestro horario de atención</h2>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-md border border-white/50 space-y-6">
        <div className="flex flex-col items-center text-center">
          <span className="text-lg font-bold text-gray-800">Lunes a Viernes</span>
          <span className="text-purple-600 font-medium mt-1">
            08:30 am - 12:00 pm<br />02:00 pm - 07:00 pm
          </span>
        </div>

        <div className="w-full h-px bg-purple-100"></div>

        <div className="flex flex-col items-center text-center">
          <span className="text-lg font-bold text-gray-800">Sábados</span>
          <span className="text-purple-600 font-medium mt-1">
            08:30 am - 07:00 pm
          </span>
        </div>
      </div>

      <BackButton />
    </div>
  );
}
