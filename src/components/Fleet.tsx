const fleet = [
  {
    name: 'Multi-Axle Trucks',
    description: 'Heavy-duty multi-axle trucks for large-volume bulk cargo transportation across national highways.',
    capacity: 'Up to 40 MT',
    image: 'https://images.pexels.com/photos/1178448/pexels-photo-1178448.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Container Carriers',
    description: 'Flatbed and enclosed container carriers for safe transport of packaged goods and industrial consignments.',
    capacity: '20 / 40 FT',
    image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Heavy Trailers',
    description: 'Low-bed and semi-low-bed trailers designed for machinery, transformers, and industrial equipment.',
    capacity: 'Up to 120 MT',
    image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'ODC Specialists',
    description: 'Specialized over-dimensional cargo vehicles with hydraulic axles for abnormal load transportation.',
    capacity: 'Custom ODC',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-20 bg-[#003087]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#FF6200] font-semibold text-sm tracking-widest uppercase mb-3">Our Fleet</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Equipped for Every Challenge</h2>
          <div className="w-16 h-1 bg-[#FF6200] mx-auto mb-4" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A modern, well-maintained fleet capable of handling any cargo type, from bulk commodities to over-dimensional loads.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleet.map(({ name, description, capacity, image }) => (
            <div key={name} className="rounded-xl overflow-hidden group card-hover">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a4d]/90 via-[#001a4d]/20 to-transparent" />
                <div className="absolute top-3 right-3 bg-[#FF6200] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {capacity}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-5 border border-white/10">
                <h3 className="text-white font-bold text-lg mb-2">{name}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/5 border border-white/10 rounded-xl p-8 text-center">
          <p className="text-white/80 text-lg mb-2">
            Need a specialized vehicle for your cargo requirement?
          </p>
          <p className="text-white/50 text-sm mb-6">
            Our team will assess your needs and provide the right vehicle configuration.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#FF6200] text-white px-8 py-3 rounded font-semibold hover:bg-orange-600 transition-colors"
          >
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  );
}
