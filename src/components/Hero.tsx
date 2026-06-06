import { Phone, FileText, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{
        background: 'linear-gradient(135deg, #001a4d 0%, #003087 50%, #004db3 100%)',
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Overlay with truck image hint */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute right-0 bottom-0 w-full h-full opacity-10"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1178448/pexels-photo-1178448.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#FF6200] rounded-full animate-pulse" />
            Established 2006 · SPEED Group of Companies
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Reliable Pan-India<br />
            <span className="text-[#FF6200]">Bulk Cargo</span><br />
            Transportation
          </h1>

          <p className="text-xl text-white/80 mb-4 font-light">
            15+ Years of Trusted Service | Leave it to Us
          </p>

          <div className="flex flex-wrap gap-6 mb-10 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-[#FF6200] font-bold text-2xl">15+</span>
              <span>Years Experience</span>
            </div>
            <div className="w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-[#FF6200] font-bold text-2xl">Pan-India</span>
              <span>Cargo Coverage</span>
            </div>
            <div className="w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-[#FF6200] font-bold text-2xl">₹120M+</span>
              <span>Annual Turnover</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-[#FF6200] text-white px-8 py-4 rounded font-semibold hover:bg-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <FileText size={18} />
              Get a Quote
            </a>
            <a
              href="tel:7338251723"
              className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-[#003087] transition-all duration-200"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
