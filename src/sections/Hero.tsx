import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MessageCircle, ChevronRight, Star, Truck, Award } from 'lucide-react';
import CrystalAnimation from './CrystalAnimation';

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    const elements = textRef.current.querySelectorAll('.hero-animate');
    gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.3,
      }
    );
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-parchment overflow-hidden">
      <div className="absolute inset-0 lg:relative lg:w-[55%] lg:h-screen">
        <CrystalAnimation />
        <div className="absolute inset-0 bg-parchment/80 lg:hidden" />
      </div>

      <div ref={textRef} className="relative z-10 w-full lg:w-[45%] px-6 lg:px-12 xl:px-16 py-20 lg:py-0">
        <span className="hero-animate eyebrow block mb-4">PREMIUM NATURAL STONE SUPPLIER</span>
        <h1 className="hero-animate font-playfair font-bold text-4xl md:text-5xl lg:text-[56px] leading-[1.1] text-charcoal mb-6">
          Direct from Kota's Finest Quarries to Your Project Site
        </h1>
        <p className="hero-animate text-lg text-charcoal-60 max-w-[480px] mb-8">
          Rai Marbles has supplied export-quality Kota Stone, Marble, Granite, and Sandstone to retailers and contractors across India for over 20 years. No middlemen. No compromises.
        </p>
        <div className="hero-animate flex flex-wrap gap-4 mb-8">
          <a href="https://wa.me/919414187776?text=Hello%20Rai%20Marbles!%20I'm%20interested%20in%20bulk%20stone%20supply." target="_blank" rel="noopener noreferrer" className="btn-primary">
            <MessageCircle size={18} />
            Get Instant Quote
          </a>
          <a href="#products" className="btn-secondary">
            View Products
            <ChevronRight size={18} />
          </a>
        </div>
        <div className="hero-animate flex flex-wrap items-center gap-6 text-sm text-charcoal-60">
          <span className="flex items-center gap-2"><Star size={16} className="text-warm-sand" />20+ Years</span>
          <span className="flex items-center gap-2"><Truck size={16} className="text-warm-sand" />All-India Delivery</span>
          <span className="flex items-center gap-2"><Award size={16} className="text-warm-sand" />Export Quality</span>
        </div>
      </div>
    </section>
  );
}
