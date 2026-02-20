import BackButton from '../../components/back-button';

const servicios = ['Cabello', 'Cejas', 'Depilación', 'Manicure', 'Maquillaje', 'Masajes', 'Pedicure', 'Pestañas'];

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mb-2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function Services() {
  return (
    <div className="flex flex-col space-y-6 w-full">
      <div className="text-center bg-white/80 backdrop-blur-sm text-purple-800 py-4 px-8 rounded-2xl shadow-sm border border-white/50">
        <h2 className="text-xl font-bold">Nuestros servicios</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 pb-8">
        {servicios.map(servicio => (
          <div
            key={servicio}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/50 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer">
            <span className="font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">{servicio}</span>
          </div>
        ))}
      </div>
      <BackButton />
    </div>
  );
}
