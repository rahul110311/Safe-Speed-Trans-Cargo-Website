import { Shield, Network, Truck, MapPin, Clock } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: '15+ Years of Excellence',
    description:
      'Since 2006, we have consistently delivered bulk cargo solutions to India\'s leading PSUs and corporates with zero compromise on safety and reliability.',
  },
  {
    icon: Network,
    title: 'Pan-India Network',
    description:
      'With 60+ offices strategically located across India, we ensure seamless connectivity between every major industrial hub and delivery point.',
  },
  {
    icon: Truck,
    title: 'Diverse Fleet Strength',
    description:
      'Our modern fleet of trucks, trailers, containers, and ODC specialists is maintained to the highest standards, ensuring on-time delivery every time.',
  },
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description:
      'Advanced GPS-based tracking provides you complete visibility over your cargo movement, giving you peace of mind throughout the transit.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description:
      'We understand the cost of delays. Our operations are designed around strict timelines, ensuring your supply chain is never disrupted.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#FF6200] font-semibold text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
          <h2 className="section-title">The Safe Speed Advantage</h2>
          <div className="w-16 h-1 bg-[#FF6200] mx-auto mb-4" />
          <p className="section-subtitle">
            We combine decades of experience with a modern approach to logistics, delivering results that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`bg-white rounded-xl p-7 card-hover border border-gray-100 ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-12 h-12 bg-[#003087]/10 rounded-lg flex items-center justify-center mb-5">
                <Icon className="text-[#003087]" size={24} />
              </div>
              <h3 className="text-[#003087] font-bold text-lg mb-3">{title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
              <div className="mt-4 w-8 h-0.5 bg-[#FF6200]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
