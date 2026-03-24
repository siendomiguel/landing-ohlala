import Link from 'next/link';
import { Sparkles, ExternalLink } from 'lucide-react';

export default function AllServicesLink() {
  return (
    <Link href="/salon-de-belleza-ocana" className="block group">
      <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-sm border border-white/50 hover:bg-white hover:shadow-md hover:-translate-y-1 hover:border-purple-200 transition-all duration-300">
        <div className="flex items-center space-x-4">
          <div className="bg-purple-100 p-2 rounded-xl group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
            <Sparkles className="w-5 h-5 text-purple-700" />
          </div>
          <span className="font-semibold text-gray-800 group-hover:text-purple-900 transition-colors">
            Todos los servicios
          </span>
        </div>
        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-500 transition-colors" />
      </div>
    </Link>
  );
}
