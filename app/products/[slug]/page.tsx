// app/products/[slug]/page.tsx
'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import PatternOverlay from '@/components/ui/PatternOverlay';
import Button from '@/components/ui/Button';
import { useState } from 'react';

export default function ProductDetail() {
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  // Жишээ product data (бодитдоо Supabase эсвэл static generation ашиглаж болно)
  const product = {
    id: 1,
    slug: slug as string,
    title: slug === "full-ai-prompts-bundle" 
      ? "Full AI Prompts Bundle" 
      : slug === "1400-carousel-bundle" 
      ? "1400 Carousel Bundle" 
      : "Ready-made AI Images",
    price: slug === "full-ai-prompts-bundle" ? 285000 : slug === "1400-carousel-bundle" ? 420000 : 195000,
    desc: "Монгол брэндийн сүнсийг гүнзгий илрүүлсэн, brand-locked AI визуал систем. Organic feel, subtle Mongolian хээ, warm sand & ocean palette ашигласан.",
    image: "/images/beauty-1.jpg",
    longDesc: "Энэ багцад 120+ brand-locked prompt, consistency guide, model sheet, болон таны брэндэд зориулсан Mongolian essence-тай visual direction багтана. AI-г зөвхөн хэрэгсэл болгон ашиглан хүний гар хүрсэн мэт органик, тансаг үр дүнд хүрнэ."
  };

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-[#FDFCF8] text-[#243949] min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-10 py-20">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Left - Image */}
          <div className="relative aspect-[4/5] border border-[#243949]/15 overflow-hidden">
            <Image 
              src={product.image} 
              alt={product.title}
              fill 
              className="object-cover" 
            />
            <PatternOverlay variant="image" intensity={7} />
          </div>

          {/* Right - Details */}
          <div className="pt-8">
            <div className="uppercase tracking-[0.18em] text-xs text-[#6F7C72] mb-3">CURATED COLLECTION</div>
            <h1 className="heading-serif text-6xl tracking-[-0.04em] leading-none mb-6">
              {product.title}
            </h1>

            <div className="text-3xl font-light mb-10">
              {product.price.toLocaleString()} ₮
            </div>

            <p className="text-[#4A5D4E] leading-relaxed text-[15px] mb-12">
              {product.desc}
            </p>

            <div className="border-t border-b border-[#243949]/10 py-8 mb-10">
              <p className="text-sm leading-relaxed text-[#4A5D4E]">
                {product.longDesc}
              </p>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-6 mb-10">
              <div className="flex items-center border border-[#243949]/20">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center hover:bg-[#243949]/5 transition-colors"
                >
                  −
                </button>
                <span className="w-12 text-center font-light text-xl">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-[#243949]/5 transition-colors"
                >
                  +
                </button>
              </div>

              <Button 
                variant="primary" 
                size="large" 
                className="flex-1"
                onClick={handleAddToCart}
              >
                {added ? "САГСАНД НЭМЭГДЛЭЭ ✓" : "САГСАНД НЭМЭХ"}
              </Button>
            </div>

            <div className="text-xs tracking-widest text-[#6F7C72] space-y-2">
              <p>✓ Brand-locked consistency</p>
              <p>✓ Mongolian хээ + felt texture</p>
              <p>✓ Human-directed AI</p>
              <p>✓ Шууд ашиглах боломжтой</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Teaser */}
      <div className="border-t border-[#243949]/10 py-20 text-center text-xs tracking-widest text-[#6F7C72]">
        © Lucy Gray R Creative AI Studio • All visuals are human-directed
      </div>
    </div>
  );
}
