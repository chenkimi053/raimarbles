import { Phone, MapPin, MessageCircle } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Get Quote', href: '#contact' },
];

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] pt-16 pb-8">
      <div className="content-max">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo.png" alt="Rai Marbles" className="w-10 h-10 rounded-lg object-cover" />
              <div className="flex flex-col">
                <span className="font-playfair font-bold text-xl leading-none text-white">Rai</span>
                <span className="font-inter font-semibold text-[10px] tracking-[0.2em] text-warm-sand leading-none">MARBLES</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">Premium natural stone supplier serving retailers and contractors across India since 2004.</p>
          </div>

          <div>
            <h4 className="font-inter font-semibold text-sm uppercase tracking-[0.1em] text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleClick(e, link.href)} className="text-white/60 hover:text-warm-sand transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-inter font-semibold text-sm uppercase tracking-[0.1em] text-white mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={16} className="text-warm-sand shrink-0" />
                <a href="tel:+919414187776" className="hover:text-warm-sand transition-colors">+91 94141 87776</a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={16} className="text-warm-sand shrink-0 mt-0.5" />
                <span>Kota, Rajasthan, India</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <MessageCircle size={16} className="text-warm-sand shrink-0" />
                <a href="https://wa.me/919414187776" target="_blank" rel="noopener noreferrer" className="hover:text-warm-sand transition-colors">WhatsApp: +91 94141 87776</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} Rai Marbles. All Rights Reserved.</p>
          <p className="text-white/40 text-sm">Premium Natural Stone Supplier</p>
        </div>
      </div>
    </footer>
  );
}
