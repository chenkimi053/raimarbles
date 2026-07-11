import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  { src: '/images/gallery-1.jpg', alt: 'Marble staircase installation', span: 'row-span-2' },
  { src: '/images/gallery-2.jpg', alt: 'Kota Stone hotel lobby flooring', span: '' },
  { src: '/images/gallery-3.jpg', alt: 'Black granite bathroom vanity', span: 'row-span-2' },
  { src: '/images/gallery-4.jpg', alt: 'Rainbow sandstone garden patio', span: '' },
  { src: '/images/gallery-5.jpg', alt: 'Granite columns commercial building', span: 'col-span-1 md:col-span-2' },
  { src: '/images/gallery-6.jpg', alt: 'Kota Stone warehouse yard', span: '' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="content-max">
        <div className="scroll-reveal text-center mb-12 lg:mb-16">
          <span className="eyebrow block mb-4">OUR WORK</span>
          <h2 className="font-playfair font-semibold text-3xl md:text-4xl lg:text-[44px] text-charcoal">Stone in Action</h2>
        </div>

        <div className="stagger-container grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div key={index} className={`stagger-item group relative overflow-hidden rounded-xl cursor-pointer ${image.span}`} onClick={() => setLightbox(image.src)}>
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-all duration-400 flex items-center justify-center">
                <span className="text-white font-inter font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Project</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-warm-sand transition-colors" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <img src={lightbox} alt="Gallery preview" className="max-w-full max-h-[90vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
