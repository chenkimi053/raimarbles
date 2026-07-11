import { Truck, Shield, Settings, Award, Pickaxe } from 'lucide-react';

const benefits = [
  {
    icon: Pickaxe,
    title: 'Direct from Quarries',
    description: 'No middlemen means better prices and consistent quality. We source directly from Kota\'s finest quarries.',
  },
  {
    icon: Truck,
    title: 'All-India Delivery',
    description: 'From Kashmir to Kanyakumari — reliable logistics network delivers to any location across India.',
  },
  {
    icon: Settings,
    title: 'Custom Orders',
    description: 'Special cuts, custom finishes, and bulk quantities tailored to your project requirements.',
  },
  {
    icon: Award,
    title: '20+ Years Experience',
    description: 'Two decades of expertise in stone selection, processing, and wholesale supply since 2004.',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Every stone inspected, export-grade finishing, and satisfaction guaranteed on every order.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-mist">
      <div className="content-max">
        <div className="scroll-reveal text-center mb-12 lg:mb-16">
          <span className="eyebrow block mb-4">WHY RAI MARBLES</span>
          <h2 className="font-playfair font-semibold text-3xl md:text-4xl lg:text-[44px] text-charcoal max-w-3xl mx-auto">
            The Preferred Stone Partner for Retailers Across India
          </h2>
        </div>

        <div className="stagger-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.slice(0, 3).map((benefit) => (
            <div key={benefit.title} className="stagger-item bg-white rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:border hover:border-warm-sand/30">
              <div className="w-12 h-12 rounded-full bg-warm-sand/20 flex items-center justify-center mb-5">
                <benefit.icon size={24} className="text-warm-sand" />
              </div>
              <h3 className="font-playfair font-semibold text-xl text-charcoal mb-3">{benefit.title}</h3>
              <p className="text-charcoal-60">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="stagger-container grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
          {benefits.slice(3).map((benefit) => (
            <div key={benefit.title} className="stagger-item bg-white rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:border hover:border-warm-sand/30">
              <div className="w-12 h-12 rounded-full bg-warm-sand/20 flex items-center justify-center mb-5">
                <benefit.icon size={24} className="text-warm-sand" />
              </div>
              <h3 className="font-playfair font-semibold text-xl text-charcoal mb-3">{benefit.title}</h3>
              <p className="text-charcoal-60">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
