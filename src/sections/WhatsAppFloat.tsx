import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/919414187776?text=Hello%20Rai%20Marbles!%20I'm%20interested%20in%20bulk%20stone%20supply.%20Please%20share%20your%20catalog%20and%20pricing."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-whatsapp rounded-full flex items-center justify-center shadow-lg shadow-whatsapp/40 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-whatsapp/50 ${visible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
      <MessageCircle size={32} className="text-white relative z-10" />
    </a>
  );
}
