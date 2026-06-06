import { branches } from '../data/branches';
import { MapPin, Phone } from 'lucide-react';

export default function Branches() {
  const headOffice = branches.find((b) => b.type === 'Head Office');

  return (
    <section id="branches" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#FF6200] font-semibold text-sm tracking-widest uppercase mb-3">Our Network</p>
          <h2 className="section-title">Our Central Headquarters</h2>
          <div className="w-16 h-1 bg-[#FF6200] mx-auto mb-4" />
          <p className="section-subtitle">
            Strategic centralized command ensuring seamless support wherever your business takes you.
          </p>
        </div>

        {/* Head Office highlight */}
        {headOffice && (
          <div className="bg-[#003087] text-white rounded-xl p-7 mb-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-14 h-14 bg-[#FF6200] rounded-xl flex items-center justify-center shrink-0">
              <MapPin size={28} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="text-[#FF6200] font-semibold text-sm mb-1 tracking-wide uppercase">Head Office</div>
              <h3 className="text-white font-bold text-xl mb-1">{headOffice.city}, {headOffice.state}</h3>
              <p className="text-white/70 text-sm">
                Door No.1, 1st Floor, 5th Cross, Sudhamanagar, Bangalore - 560027
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {['7338251723', '7082732943', '9886645440'].map((num) => (
                <a
                  key={num}
                  href={`tel:${num}`}
                  className="flex items-center gap-2 text-white/80 hover:text-white text-sm"
                >
                  <Phone size={14} /> {num}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Central Operations details */}
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 max-w-3xl mx-auto shadow-sm text-center">
          <h4 className="font-bold text-[#003087] text-lg mb-3">Centralized Pan-India Logistics Support</h4>
          <p className="text-gray-600 leading-relaxed text-sm max-w-2xl mx-auto">
            From our strategic corporate headquarters in Bangalore, we coordinate logistics operations spanning all major states, industrial corridors, mining hubs, and ports across India. Our centralized operations model provides you with unified service tracking, single-point communication, and consistent pricing.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-8 pt-6 border-t border-gray-200/60">
            <div>
              <div className="text-[#FF6200] font-bold text-2xl mb-1">28+</div>
              <div className="text-gray-500 text-xs">States Covered</div>
            </div>
            <div>
              <div className="text-[#FF6200] font-bold text-2xl mb-1">100%</div>
              <div className="text-gray-500 text-xs">Unified Communication</div>
            </div>
            <div>
              <div className="text-[#FF6200] font-bold text-2xl mb-1">GPS</div>
              <div className="text-gray-500 text-xs">Real-Time Fleet Tracking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
