import { useState } from 'react';
import { Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function Contact() {
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  const handleCallback = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const mobile = formData.get('callback-mobile') as string;
    const message = `CALLBACK REQUEST:\nMobile: ${mobile}\nPlease call me back regarding stone supply.`;
    window.open(`https://wa.me/919414187776?text=${encodeURIComponent(message)}`, '_blank');
    setCallbackSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-charcoal">
      <div className="content-max">
        <div className="scroll-reveal text-center mb-12 lg:mb-16">
          <span className="eyebrow block mb-4">CONTACT US</span>
          <h2 className="font-playfair font-semibold text-3xl md:text-4xl lg:text-[44px] text-white">Let's Discuss Your Project</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <MapPin size={24} className="text-warm-sand mb-4" />
                <h3 className="font-playfair font-semibold text-lg text-white mb-2">Visit Us</h3>
                <p className="text-white/70 text-sm leading-relaxed">Rai Marbles<br />Kota, Rajasthan<br />India - 324007</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Phone size={24} className="text-warm-sand mb-4" />
                <h3 className="font-playfair font-semibold text-lg text-white mb-2">Call Us</h3>
                <a href="tel:+919414187776" className="text-white/70 text-sm hover:text-warm-sand transition-colors">+91 94141 87776</a>
                <div className="flex items-center gap-2 mt-2 text-white/50 text-xs">
                  <Clock size={14} />
                  <span>Mon - Sat, 9AM - 7PM</span>
                </div>
              </div>
            </div>

            <a href="https://wa.me/919414187776?text=Hello%20Rai%20Marbles!%20I'm%20interested%20in%20bulk%20stone%20supply." target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-whatsapp hover:bg-whatsapp/90 text-white p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-whatsapp/30">
              <MessageCircle size={32} />
              <div>
                <div className="font-inter font-semibold text-lg">Chat on WhatsApp</div>
                <div className="text-white/80 text-sm">Get instant response within minutes</div>
              </div>
            </a>

            <div className="rounded-xl overflow-hidden aspect-video bg-white/5 border border-white/10">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.23882188724!2d75.8260978!3d25.2138157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f9b7c1a553a4b%3A0xe3141cbf9b917dc!2sKota%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, filter: 'grayscale(100%) invert(92%)' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Rai Marbles Location" />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8">
              <h3 className="font-playfair font-semibold text-xl text-charcoal mb-2">Request a Callback</h3>
              <p className="text-charcoal-60 text-sm mb-6">Prefer a call? Leave your number and we'll call you back within 30 minutes.</p>

              {callbackSubmitted ? (
                <div className="text-center py-8">
                  <MessageCircle size={48} className="text-warm-sand mx-auto mb-4" />
                  <p className="text-charcoal font-medium">Callback request sent!</p>
                  <p className="text-charcoal-60 text-sm mt-1">We'll call you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleCallback} className="space-y-4">
                  <div>
                    <label className="block font-inter font-medium text-xs uppercase tracking-[0.05em] text-charcoal mb-2">Mobile Number</label>
                    <Input name="callback-mobile" type="tel" required placeholder="+91 XXXXX XXXXX" className="h-12 border-gray-200 focus:border-warm-sand focus:ring-warm-sand/20" />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    <Phone size={18} />
                    Request Callback
                  </button>
                  <p className="text-xs text-charcoal-60 text-center">We respect your privacy. No spam, ever.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
