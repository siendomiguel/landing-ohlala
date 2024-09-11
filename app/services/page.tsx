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
    <main className="flex flex-col items-center justify-center flex-grow p-8 bg-gradient-to-b from-purple-100 to-white">
      <div className="block text-center bg-white text-purple-700 py-4 px-8 rounded-lg shadow-md hover:bg-purple-50 transition cursor-pointer">
        <p>Nuestros servicios</p>
      </div>
      {/*       <div className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-4 px-4 rounded-lg shadow-md transition duration-300 ease-in-out flex flex-col items-center justify-center">
        <p>Hola</p>
      </div> */}
      <div className=" w-full max-w-sm block text-center mt-5">
        <div className="grid grid-cols-2 m:grid-cols-3 md:grid-cols-1 gap-4 mb-16">
          {servicios.map(servicio => (
            <div
              key={servicio}
              className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-4 rounded-lg shadow-md transition duration-300 ease-in-out flex flex-col items-center justify-center">
              {/*<StarIcon />*/}
              <span>{servicio}</span>
            </div>
          ))}
        </div>
      </div>
      <BackButton />
    </main>
  );
}
