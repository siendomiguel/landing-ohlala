import { Map as MapIcon, MapPin } from 'lucide-react';

export default function LocationMap() {
    return (
        <section className="w-full bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 relative overflow-hidden group">
            <div className="flex items-center space-x-2 mb-4">
                <MapIcon className="w-5 h-5 text-purple-600" />
                <h2 className="font-bold text-gray-800 text-lg">Nuestra Ubicación</h2>
            </div>

            <div className="w-full h-48 bg-gray-200 rounded-xl overflow-hidden relative shadow-inner">
                {/* Placeholder Map - replace src with actual Google Maps Embed URL when available */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11394.020359787122!2d-74.05835624999999!3d4.6559795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a5d1cb4c161%3A0x6b815615d86ef8e5!2sBogot%C3%A1%$,%20Colombia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 z-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                ></iframe>

                {/* Overlay button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <a href="https://maps.app.goo.gl/2vSR86uwminQiJsCA" target="_blank" rel="noopener noreferrer" className="bg-purple-600/90 backdrop-blur-md text-white px-5 py-2.5 rounded-full font-medium shadow-lg hover:bg-purple-700 pointer-events-auto transition-colors flex items-center space-x-2 transform hover:scale-105 active:scale-95 duration-200">
                        <MapPin className="w-4 h-4" />
                        <span>Abrir en Maps</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
