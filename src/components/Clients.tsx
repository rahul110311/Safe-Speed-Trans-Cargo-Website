import { clients } from '../data/branches';
import { Star } from 'lucide-react';

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#FF6200] font-semibold text-sm tracking-widest uppercase mb-3">Our Clients</p>
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <div className="w-16 h-1 bg-[#FF6200] mx-auto mb-4" />
          <p className="section-subtitle">
            We are proud to serve India's top PSUs, private corporations, and industrial giants.
          </p>
        </div>

        {/* Testimonial strip */}
        <div className="bg-[#003087] text-white rounded-xl p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-[#FF6200] fill-[#FF6200]" />
              ))}
            </div>
            <p className="text-white/90 text-lg italic max-w-xl">
              "Safe Speed Trans Cargo has been our logistics partner for over a decade. Their reliability and pan-India network is unmatched."
            </p>
            <p className="text-white/50 text-sm mt-3">— Procurement Head, Major PSU</p>
          </div>
          <div className="shrink-0 text-center">
            <div className="text-4xl font-bold text-[#FF6200]">60+</div>
            <div className="text-white/70 text-sm">Repeat Clients</div>
          </div>
        </div>

        {/* Clients grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {clients.map((client, i) => (
            <div
              key={client}
              className="bg-white border border-gray-100 rounded-lg px-5 py-4 flex items-center gap-3 card-hover"
            >
              <div className="w-8 h-8 rounded-full bg-[#003087]/10 flex items-center justify-center shrink-0 text-[#003087] font-bold text-xs">
                {i + 1}
              </div>
              <span className="text-gray-700 font-medium text-sm">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
