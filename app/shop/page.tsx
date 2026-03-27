import ProductCard from '@/components/ui/ProductCard';
import PatternOverlay from '@/components/ui/PatternOverlay';

const products = [
  { id: 1, title: 'Mongolian Brand Visual System 2026', category: 'Visual Pack', price: 285000, image: '/images/lucy-1.jpg' },
  { id: 2, title: 'AI Persona Character Sheet', category: 'Template', price: 195000, image: '/images/lucy-2.jpg' },
  { id: 3, title: 'Campaign Composite Kit', category: 'Asset Pack', price: 345000, image: '/images/lucy-3.jpg' },
  { id: 4, title: 'Organic Texture Collection', category: 'Texture', price: 125000, image: '/images/lucy-4.jpg' },
];

export default function Shop() {
  return (
    <PatternOverlay variant="section" intensity={6} className="bg-[#243949] min-h-screen pt-32 px-10 pb-24">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="heading-serif text-7xl mb-4">Shop</h1>
        <p className="text-[#4A5D4E] text-xl mb-16">Бүтээлч хэрэгслүүд</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </PatternOverlay>
  );
}
