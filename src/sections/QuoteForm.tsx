import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { MessageCircle, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !leftRef.current || !rightRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
      },
    });

    tl.fromTo(leftRef.current, { opacity: 0, x: -60 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' })
      .fromTo(rightRef.current, { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5');

    return () => { tl.kill(); };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const mobile = formData.get('mobile') as string;
    const stone = formData.get('stone') as string;
    const details = formData.get('details') as string;

    const message = `NEW QUOTE REQUEST:\nName: ${name}\nCompany: ${company}\nMobile: ${mobile}\nStone: ${stone}\nDetails: ${details}`;

    window.open(`https://wa.me/919414187776?text=${encodeURIComponent(message)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="content-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={leftRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/images/hero.jpg" alt="Premium stone collection" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-warm-sand text-white p-6 rounded-xl shadow-xl hidden lg:block">
              <div className="font-playfair font-bold text-3xl">20+</div>
              <div className="text-sm text-white/80">Years of Trust</div>
            </div>
          </div>

          <div ref={rightRef}>
            <span className="eyebrow block mb-4">GET STARTED</span>
            <h2 className="font-playfair font-semibold text-3xl md:text-4xl text-charcoal mb-4">
              Request Your Wholesale Quote
            </h2>
            <p className="text-charcoal-60 mb-8">
              Tell us what you need — stone type, quantity, and delivery location. We'll respond within 2 hours via WhatsApp.
            </p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="font-playfair font-semibold text-xl text-charcoal mb-2">Quote Request Sent!</h3>
                <p className="text-charcoal-60">We'll contact you on WhatsApp shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-inter font-medium text-xs uppercase tracking-[0.05em] text-charcoal mb-2">Full Name *</label>
                  <Input name="name" required placeholder="Your name" className="h-12 border-gray-200 focus:border-warm-sand focus:ring-warm-sand/20" />
                </div>
                <div>
                  <label className="block font-inter font-medium text-xs uppercase tracking-[0.05em] text-charcoal mb-2">Company / Shop Name *</label>
                  <Input name="company" required placeholder="Your company" className="h-12 border-gray-200 focus:border-warm-sand focus:ring-warm-sand/20" />
                </div>
                <div>
                  <label className="block font-inter font-medium text-xs uppercase tracking-[0.05em] text-charcoal mb-2">Mobile Number *</label>
                  <Input name="mobile" type="tel" required placeholder="+91 XXXXX XXXXX" className="h-12 border-gray-200 focus:border-warm-sand focus:ring-warm-sand/20" />
                </div>
                <div>
                  <label className="block font-inter font-medium text-xs uppercase tracking-[0.05em] text-charcoal mb-2">Stone Type *</label>
                  <select name="stone" required className="w-full h-12 px-4 rounded-md border border-gray-200 bg-white font-inter text-sm focus:border-warm-sand focus:ring-2 focus:ring-warm-sand/20 focus:outline-none">
                    <option value="">Select stone type</option>
                    <option value="Kota Stone">Kota Stone</option>
                    <option value="Marble">Marble</option>
                    <option value="Granite">Granite</option>
                    <option value="Sandstone">Sandstone</option>
                    <option value="Multiple">Multiple Types</option>
                  </select>
                </div>
                <div>
                  <label className="block font-inter font-medium text-xs uppercase tracking-[0.05em] text-charcoal mb-2">Quantity & Requirements</label>
                  <Textarea name="details" placeholder="Tell us about quantity, sizes, finishes, and delivery location..." rows={4} className="border-gray-200 focus:border-warm-sand focus:ring-warm-sand/20 resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  <MessageCircle size={18} />
                  Send Quote Request via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
