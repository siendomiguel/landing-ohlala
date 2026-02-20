'use client';
import BackButton from '../../components/back-button';

export default function Services() {
  return (
    <div className="flex flex-col space-y-6 w-full pb-8">
      <div className="text-center bg-white/90 backdrop-blur-sm text-purple-800 py-8 px-6 rounded-3xl shadow-md border border-white/50 flex flex-col items-center space-y-4">
        <div className="bg-purple-100 p-4 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
        </div>
        <h2 className="text-xl font-bold">¡Próximamente!</h2>
        <p className="text-gray-600 font-medium">Podrás realizar tus agendas desde nuestra App Muy Pronto.</p>
      </div>
      <BackButton />
    </div>
  );
}
