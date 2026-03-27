import PatternOverlay from './PatternOverlay';

export default function ProductCard({ product }: any) {
  return (
    <PatternOverlay variant="border" intensity={6}>
      <div className="bg-[#FDFCF8] text-[#172019] overflow-hidden group">
        <div className="relative aspect-[4/3]">
          <img 
            src={product.image} 
            className="w-full h-full object-cover image-hover" 
            alt={product.title} 
          />
        </div>
        <div className="p-10">
          <div className="uppercase text-xs tracking-widest text-[#4A5D4E]">{product.category}</div>
          <h3 className="heading-serif text-2xl mt-3 leading-tight">{product.title}</h3>
          <div className="mt-8 flex justify-between items-end">
            <div>
              <span className="text-sm">₮</span>
              <span className="text-3xl font-light tracking-tight">{product.price.toLocaleString()}</span>
            </div>
            <a href={`/products/${product.id}`} className="border border-[#172019] px-8 py-3.5 text-xs tracking-widest hover:bg-[#172019] hover:text-[#FDFCF8] transition-all">
              ДЭЛГЭРЭНГҮЙ
            </a>
          </div>
        </div>
      </div>
    </PatternOverlay>
  );
}