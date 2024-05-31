import BackButton from '../../components/back-button';

export default function Horarios() {
  return (
    <main className="flex flex-col items-center justify-center flex-grow p-8 bg-gradient-to-b from-purple-100 to-white">
      <div className="block text-center bg-white text-purple-700 py-4 px-8 rounded-lg shadow-md hover:bg-purple-50 transition cursor-pointer">
        <p>Nuestro horario de atención</p>
      </div>
      <span className="text-center mt-5 text-xl font-bold">
        De lunes a Viernes
      </span>
      <span className="text-center text-base">
        08:30am - 12:00pm / 02:00pm - 07:00pm
      </span>
      <span className="text-center mt-5 text-xl font-bold">Sábados</span>
      <span className="text-center text-base">08:30am - 07:00pm</span>
      <BackButton />
    </main>
  );
}
