import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Fleet', href: '#fleet' },
  { label: 'Clients', href: '#clients' },
  { label: 'Branch Network', href: '#branches' },
  { label: 'Contact Us', href: '#contact' },
];

const services = [
  'Bulk Cargo Transportation',
  'ODC & Over-Dimensional Cargo',
  'Heavy Machinery Transport',
  'Warehousing & Storage',
  'Pan-India Transportation',
];

export default function Footer() {
  return (
    <footer className="bg-[#001a4d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.jpg"
                alt="Safe Speed Trans Cargo"
                className="h-12 w-auto object-contain bg-white rounded-lg p-1"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Safe Speed Trans Cargo — a SPEED Group of Companies venture. India's trusted bulk cargo
              logistics partner since 2006.
            </p>
            <div className="inline-flex items-center gap-2 border border-[#FF6200]/40 text-[#FF6200] text-sm px-4 py-2 rounded-full">
              Moving You Ahead
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5 text-base">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/50 hover:text-[#FF6200] text-sm flex items-center gap-1.5 transition-colors"
                  >
                    <ChevronRight size={14} /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-5 text-base">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/50 hover:text-[#FF6200] text-sm flex items-center gap-1.5 transition-colors"
                  >
                    <ChevronRight size={14} /> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5 text-base">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#FF6200] shrink-0 mt-0.5" />
                <p className="text-white/50 text-sm leading-relaxed">
                  Door No.1, 1st Floor, 5th Cross,<br />
                  Sudhamanagar, Bangalore - 560027
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#FF6200] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  {['7338251723', '7082732943', '9886645440'].map((num) => (
                    <a
                      key={num}
                      href={`tel:${num}`}
                      className="block text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {num}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#FF6200] shrink-0 mt-0.5" />
                <a
                  href="mailto:safespeedtranscargo@gmail.com"
                  className="text-white/50 hover:text-white text-sm transition-colors break-all"
                >
                  safespeedtranscargo@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Safe Speed Trans Cargo. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">Designed and developed by Edvaya</p>
        </div>
      </div>
    </footer>
  );
}
