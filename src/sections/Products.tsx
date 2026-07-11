import { Badge } from '@/components/ui/badge';

const products = [
  {
    name: 'Kota Stone',
    image: '/images/product-kota.jpg',
    badge: 'Most Popular',
    details: [
      { label: 'Colors', value: 'Blue, Brown, Green' },
      { label: 'Thickness', value: '20mm, 30mm, 40mm' },
      { label: 'Uses', value: 'Flooring, Pathways, Wall Cladding' },
    ],
  },
  {
    name: 'Marble',
    image: '/images/product-marble.jpg',
    badge: 'Premium',
    details: [
      { label: 'Types', value: 'Makrana White, Katni Green' },
      { label: 'Also', value: 'Fantasy Brown, Agaria White' },
      { label: 'Forms', value: 'Slabs, Tiles, Custom Cuts' },
    ],
  },
  {
    name: 'Granite',
    image: '/images/product-granite.jpg',
    badge: 'Export Grade',
    details: [
      { label: 'Colors', value: 'Absolute Black, Black Galaxy' },
      { label: 'Also', value: 'Viscon White, Steel Grey' },
      { label: 'Quality', value: 'Export Grade, Polished' },
    ],
  },
  {
    name: 'Sandstone',
    image: '/images/product-sandstone.jpg',
    badge: 'Durable',
    details: [
      { label: 'Colors', value: 'Rainbow, Mint White, Red' },
      { label: 'Uses', value: 'Pool Coping, Garden Pavers' },
      { label: 'Feature', value: 'Weather Resistant' },
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="content-max">
        <div className="scroll-reveal text-center mb-12 lg:mb-16">
          <span className="eyebrow block mb-4">OUR COLLECTION</span>
          <h2 className="font-playfair font-semibold text-3xl md:text-4xl lg:text-[44px] text-charcoal mb-4">
            Premium Stones for Every Project
          </h2>
          <p className="text-lg text-charcoal-60 max-w-2xl mx-auto">
            Export-quality natural stone directly from India's stone hub — Kota, Rajasthan
          </p>
        </div>

        <div className="stagger-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.name} className="stagger-item group bg-white rounded-xl overflow-hidden border border-gray-100 card-hover">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <Badge className="absolute top-4 right-4 bg-warm-sand text-white hover:bg-warm-sand text-xs font-inter">
                  {product.badge}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="font-playfair font-semibold text-2xl text-stone-blue mb-4">{product.name}</h3>
                <ul className="space-y-2">
                  {product.details.map((detail) => (
                    <li key={detail.label} className="flex justify-between text-sm">
                      <span className="text-charcoal-60">{detail.label}</span>
                      <span className="text-charcoal font-medium">{detail.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
