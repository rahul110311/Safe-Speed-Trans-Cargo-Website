import { Package, Layers, Settings, Warehouse, MapPin, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Package,
    title: 'Bulk Cargo Transportation',
    description:
      'Specialized in moving large-volume bulk commodities — coal, minerals, cement, steel, and agricultural produce — across India with precision and efficiency.',
    image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Layers,
    title: 'ODC & Over-Dimensional Cargo',
    description:
      'Expert handling of over-dimensional cargo including industrial equipment, transformers, reactors, and large fabricated structures with all necessary permits.',
    image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Settings,
    title: 'Heavy Machinery Transport',
    description:
      'Safe and secure movement of heavy industrial machinery, construction equipment, and manufacturing plant components with specialized trailers.',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Warehouse,
    title: 'Warehousing & Storage',
    description:
      'Strategically located warehouses across India providing secure storage, inventory management, and distribution services for your cargo.',
    image: 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: MapPin,
    title: 'Pan-India Transportation',
    description:
      'Full-truckload and part-truckload services connecting every corner of India, serving industrial clusters, ports, mines, and power plants.',
    image: 'https://images.pexels.com/photos/1178448/pexels-photo-1178448.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#FF6200] font-semibold text-sm tracking-widest uppercase mb-3">Our Services</p>
          <h2 className="section-title">Comprehensive Logistics Solutions</h2>
          <div className="w-16 h-1 bg-[#FF6200] mx-auto mb-4" />
          <p className="section-subtitle">
            From bulk commodities to over-dimensional cargo, we handle every logistics challenge with expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map(({ icon: Icon, title, description, image }) => (
            <div
              key={title}
              className="rounded-xl overflow-hidden border border-gray-100 card-hover group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#003087]/40" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 bg-[#FF6200] rounded-lg flex items-center justify-center">
                    <Icon className="text-white" size={20} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[#003087] font-bold text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[#FF6200] font-semibold text-sm hover:gap-2 transition-all"
                >
                  Get a Quote <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
