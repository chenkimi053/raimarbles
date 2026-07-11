import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <nav className="content-max h-[72px] flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Rai Marbles" className="w-10 h-10 rounded-lg object-cover" />
            <div className="flex flex-col">
              <span className="font-playfair font-bold text-xl leading-none text-charcoal">Rai</span>
              <span className="font-inter font-semibold text-[10px] tracking-[0.2em] text-warm-sand leading-none">MARBLES</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="font-inter font-medium text-sm tracking-[0.05em] uppercase text-charcoal hover:text-warm-sand transition-colors">
                {link.label}
              </a>
            ))}
            <a href="https://wa.me/919414187776?text=Hello%20Rai%20Marbles!%20I'm%20interested%20in%20bulk%20stone%20supply." target="_blank" rel="noopener noreferrer" className="btn-primary !py-3 !px-6">
              <MessageCircle size={18} />
              Get Quote
            </a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-charcoal" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <div className={`fixed inset-0 z-40 bg-charcoal transition-all duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="font-playfair text-3xl text-white hover:text-warm-sand transition-colors">
              {link.label}
            </a>
          ))}
          <a href="https://wa.me/919414187776?text=Hello%20Rai%20Marbles!%20I'm%20interested%20in%20bulk%20stone%20supply." target="_blank" rel="noopener noreferrer" className="btn-primary mt-4">
            <MessageCircle size={20} />
            Get Quote
          </a>
        </div>
      </div>
    </>
  );
}
