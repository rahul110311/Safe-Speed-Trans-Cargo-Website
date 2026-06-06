import { CheckCircle, Award, TrendingUp, Users } from 'lucide-react';

const highlights = [
  { icon: Award, label: 'Established', value: '2006' },
  { icon: TrendingUp, label: 'Annual Turnover', value: '₹120M+' },
  { icon: Users, label: 'Pan-India Coverage', value: '28+ States' },
  { icon: CheckCircle, label: 'Years of Service', value: '15+' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-[#FF6200] font-semibold text-sm tracking-widest uppercase mb-3">About Us</p>
            <h2 className="section-title">India's Trusted Bulk Cargo Partner</h2>
            <div className="w-16 h-1 bg-[#FF6200] mb-6" />
            <p className="text-gray-600 leading-relaxed mb-5">
              Safe Speed Trans Cargo, a proud member of the SPEED Group of Companies, has been delivering
              reliable logistics solutions across India since 2006. With over 15 years of industry expertise,
              we have built a reputation for dependability, efficiency, and customer satisfaction.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              With a robust network of transport routes spanning every major city and industrial hub in India, we
              provide seamless bulk cargo transportation, ODC movements, and heavy machinery logistics at scale.
              Our annual turnover exceeds Rs. 120 million, a testament to the trust placed in us by India's
              leading corporations.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our tagline — <strong className="text-[#003087]">Moving You Ahead</strong> — reflects our
              commitment to helping businesses grow through reliable, timely, and cost-effective logistics
              solutions. We serve PSUs, private sector giants, and growing enterprises with equal dedication.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Pan-India Coverage', 'ISO Compliant', '24/7 Support', 'Real-Time Tracking'].map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-50 text-[#003087] px-4 py-1.5 rounded-full text-sm font-medium border border-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats + Image */}
          <div>
            <div className="relative rounded-2xl overflow-hidden mb-8 shadow-xl">
              <img
                src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Logistics operations"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003087]/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-bold text-lg">Moving You Ahead</p>
                <p className="text-white/80 text-sm">Since 2006</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-5 card-hover text-center"
                >
                  <Icon className="text-[#FF6200] mx-auto mb-2" size={28} />
                  <div className="text-2xl font-bold text-[#003087]">{value}</div>
                  <div className="text-gray-500 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
