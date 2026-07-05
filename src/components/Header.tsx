import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Clients', href: '#clients' },
  { label: 'Branches', href: '#branches' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Safe Speed Trans Cargo"
              className="h-12 w-auto object-contain"
            />
            <div className="flex flex-col">
              <div className="text-[#003087] font-bold text-sm sm:text-lg leading-tight">Safe Speed Trans Cargo</div>
              <div className="text-[#FF6200] text-[10px] sm:text-xs font-medium tracking-wide">SPEED Group of Companies</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`nav-link text-sm pb-1 ${activeSection === href.replace('#', '') ? 'active' : ''}`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="tel:7338251723"
            className="hidden lg:flex items-center gap-2 bg-[#003087] text-white px-4 py-2 rounded font-medium text-sm hover:bg-blue-900 transition-colors"
          >
            <Phone size={15} />
            7338251723
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-[#003087] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4 flex flex-col gap-3">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-gray-700 hover:text-[#003087] font-medium py-1"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="tel:7338251723"
              className="flex items-center gap-2 bg-[#003087] text-white px-4 py-2 rounded font-medium text-sm w-fit mt-2"
            >
              <Phone size={15} />
              Call Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
