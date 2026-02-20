import Link from 'next/link';
import { Smartphone, ExternalLink } from 'lucide-react';

export default function FloatingActionButton() {
    return (
        <div className="fixed bottom-6 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none md:hidden">
            <Link href="https://wa.me/573212600682" target="_blank" className="pointer-events-auto w-full max-w-md group">
                <div className="bg-purple-900 text-white rounded-2xl py-4 px-6 shadow-2xl flex items-center justify-between hover:bg-purple-800 hover:shadow-purple-900/30 transition-all duration-300 transform group-hover:-translate-y-1">
                    <div className="flex items-center space-x-3">
                        <div className="bg-white/20 p-2 rounded-xl">
                            <Smartphone className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg leading-tight">Agendar Cita</span>
                            <span className="text-purple-200 text-xs font-medium">Escribenos para agendar tu cita!</span>
                        </div>
                    </div>
                    <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                    </div>
                </div>
            </Link>
        </div>
    );
}
