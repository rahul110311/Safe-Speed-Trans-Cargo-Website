import { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', cargo: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!form.name.trim()) {
      alert("Please enter your full name.");
      return false;
    }
    if (!form.phone.trim()) {
      alert("Please enter your phone number.");
      return false;
    }
    return true;
  };

  const handleWhatsAppSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));

    const messageText = `*Safe Speed Trans Cargo - Quote Request*\n\n` +
      `*Name:* ${form.name}\n` +
      `*Phone:* ${form.phone}\n` +
      `*Email:* ${form.email || 'Not provided'}\n` +
      `*Cargo Type:* ${form.cargo || 'Not specified'}\n` +
      `*Message/Route:* ${form.message || 'No additional details'}`;
      
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/917338251723?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setLoading(false);
  };

  const handleEmailSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));

    const emailSubject = `Quote Request from ${form.name} - Safe Speed Trans Cargo`;
    const emailBody = `Safe Speed Trans Cargo - Quote Request\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email || 'Not provided'}\n` +
      `Cargo Type: ${form.cargo || 'Not specified'}\n` +
      `Message/Route: ${form.message || 'No additional details'}`;
      
    const mailtoUrl = `mailto:safespeedtranscargo@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#FF6200] font-semibold text-sm tracking-widest uppercase mb-3">Contact Us</p>
          <h2 className="section-title">Get in Touch</h2>
          <div className="w-16 h-1 bg-[#FF6200] mx-auto mb-4" />
          <p className="section-subtitle">
            Ready to move your cargo? Reach out to us and we'll get back to you promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#003087] text-white rounded-xl p-7">
              <h3 className="font-bold text-xl mb-6">Contact Information</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FF6200] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white/90 mb-1">Head Office</p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Door No.1, 1st Floor, 5th Cross,<br />
                      Sudhamanagar, Bangalore - 560027
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FF6200] rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white/90 mb-1">Phone Numbers</p>
                    {['7338251723', '7082732943', '9886645440'].map((num) => (
                      <a
                        key={num}
                        href={`tel:${num}`}
                        className="block text-white/60 hover:text-white text-sm transition-colors"
                      >
                        {num}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FF6200] rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white/90 mb-1">Email</p>
                    <a
                      href="mailto:safespeedtranscargo@gmail.com"
                      className="text-white/60 hover:text-white text-sm transition-colors break-all"
                    >
                      safespeedtranscargo@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/50 text-xs">
                  Available Monday – Saturday, 9 AM to 6 PM IST.
                  Emergency support available 24/7 for active shipments.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-green-500" size={32} />
                </div>
                <h3 className="text-[#003087] font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm max-w-sm">
                  Thank you for reaching out. Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', cargo: '', message: '' }); }}
                  className="mt-6 text-[#FF6200] font-semibold text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-[#003087] font-bold text-xl mb-6">Request a Quote</h3>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-600 text-sm font-medium mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#003087] focus:ring-1 focus:ring-[#003087] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 text-sm font-medium mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Your phone"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#003087] focus:ring-1 focus:ring-[#003087] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-600 text-sm font-medium mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#003087] focus:ring-1 focus:ring-[#003087] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600 text-sm font-medium mb-1.5">Cargo Type</label>
                    <select
                      value={form.cargo}
                      onChange={(e) => setForm({ ...form, cargo: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#003087] focus:ring-1 focus:ring-[#003087] transition-colors text-gray-600"
                    >
                      <option value="">Select cargo type</option>
                      <option>Bulk Cargo (Coal / Minerals)</option>
                      <option>Steel & Metal Products</option>
                      <option>Cement & Construction</option>
                      <option>Over-Dimensional Cargo (ODC)</option>
                      <option>Heavy Machinery</option>
                      <option>Agricultural Produce</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-600 text-sm font-medium mb-1.5">Message / Route Details</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Origin, destination, approximate weight, special requirements..."
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#003087] focus:ring-1 focus:ring-[#003087] transition-colors resize-none"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      disabled={loading}
                      onClick={handleWhatsAppSubmit}
                      className="w-full bg-[#25D366] text-white py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#1ebd59] transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 shadow-sm"
                    >
                      {loading ? (
                        <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          Send via WhatsApp
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      disabled={loading}
                      onClick={handleEmailSubmit}
                      className="w-full bg-[#003087] text-white py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-900 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 shadow-sm"
                    >
                      {loading ? (
                        <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                      ) : (
                        <>
                          <Mail size={17} className="shrink-0" />
                          Send via Email
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
