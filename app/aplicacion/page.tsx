'use client';
import BackButton from '../../components/back-button';

export default function Services() {
  return (
    <main className="flex flex-col items-center justify-center flex-grow p-8 bg-gradient-to-b from-purple-100 to-white">
      <div className="block text-center bg-white text-purple-700 py-4 px-8 rounded-lg shadow-md hover:bg-purple-50 transition cursor-pointer">
        <p>Proximamente podrás realizar tus agendas desde nuestra App</p>
      </div>
      <BackButton />
    </main>
  );
}
