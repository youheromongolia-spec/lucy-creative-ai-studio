// app/shop/page.tsx
'use client';

import Image from 'next/image';
import PatternOverlay from '@/components/ui/PatternOverlay';
import Button from '@/components/ui/Button';
import { useState } from 'react';

export default function ShopPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Таны бүртгэл амжилттай илгээгдлээ. Бид 24 цагийн дотор холбогдоно.');
    setFormOpen(false);
  };

  // Таны хүссэн 3 бүтээгдэхүүн
  const products = [
    {
      id: 1,
      title: "Full AI Prompts Bundle",
      price: "285,000 ₮",
      image: "/images/beauty-1.jpg",
      desc: "Full AI Prompts Bundle"
    },
    {
      id: 2,
      title: "1400 Carousel Bundle",
      price: "29,000 ₮",
      image: "/images/beauty-4.jpg",
      desc: "Social media-д зориулсан 1400 Carousel Bundleо"
    },
    {
      id: 3,
      title: "Ready-made AI Images",
      price: "195,000 ₮",
      image: "/images/beauty-3.jpg",
      desc: "Шууд ашиглах боломжтой high-end editorial AI зургийн багц"
    },
  ];

  return (
    <div className="bg-[#FDFCF8] text-[#243949] min-h-screen">
      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden border-b border-[#243949]/10">
        <div className="absolute inset-0 bg-[#243949]">
          <Image 
            src="/images/beauty-5.jpg" 
            alt="The Shop" 
            fill 
            className="object-cover opacity-90"
            priority 
          />
          <PatternOverlay variant="hero" intensity={8} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#243949]/70 via-transparent to-[#243949]/80" />
        </div>

        <div className="relative z-10 text-center px-8 max-w-3xl">
          <div className="inline-block mb-8 px-10 py-3 border border-white/30 text-xs tracking-[0.2em] text-white/90">
            CURATED VISUAL COLLECTIONS
          </div>
          <h1 className="heading-serif text-[88px] md:text-[118px] leading-[0.92] tracking-[-0.07em] text-white mb-10">
            The Shop
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-md mx-auto tracking-tight">
            Mongolian essence-тай, human-directed AI-ээр бүтээгдсэн тансаг визуал системүүд
          </p>
        </div>
      </section>

      {/* SHOP PREVIEW — Таны хүссэн 3 бүтээгдэхүүн */}
      <section className="max-w-screen-2xl mx-auto px-10 py-28">
        <div className="text-center mb-16">
          <div className="uppercase tracking-[0.18em] text-xs text-[#6F7C72] mb-3">CURATED COLLECTIONS</div>
          <h2 className="heading-serif text-6xl tracking-[-0.05em]">The Shop Preview</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-[4/5] border border-[#243949]/15 overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.title}
                  fill 
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700" 
                />
                <PatternOverlay variant="image" intensity={6} />
              </div>

              <div className="pt-10 pb-6 border-b border-[#243949]/10">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="heading-serif text-3xl tracking-[-0.03em] pr-4">{product.title}</h3>
                  <span className="font-light text-xl text-[#4A5D4E]">{product.price}</span>
                </div>
                <p className="text-[#4A5D4E] leading-relaxed text-[15px]">{product.desc}</p>
              </div>

              <Button 
                variant="primary" 
                size="large" 
                className="mt-8 w-full border border-[#243949]/20 hover:bg-[#243949] hover:text-white transition-all"
                onClick={() => setFormOpen(true)}
              >
                БҮРТГҮҮЛЭХ
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Бүртгүүлэх Form Modal (Accessibility засвартай) */}
      {formOpen && (
        <div className="fixed inset-0 bg-[#243949]/90 z-[100] flex items-center justify-center p-6">
          <div className="bg-[#FDFCF8] max-w-md w-full p-12 relative border border-[#243949]/10">
            <button 
              onClick={() => setFormOpen(false)}
              className="absolute top-8 right-8 text-3xl text-[#243949]/30 hover:text-[#243949] transition-colors"
              aria-label="Хаах"
            >
              ✕
            </button>

            <h2 className="heading-serif text-5xl tracking-[-0.04em] mb-6">Бүртгүүлэх</h2>
            <p className="text-[#4A5D4E] mb-10 text-[15px]">Сонгосон визуал багцаа авахыг хүсвэл мэдээллээ илгээнэ үү.</p>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div>
                <label htmlFor="name" className="block text-xs tracking-widest text-[#6F7C72] mb-2">Нэр, овог</label>
                <input 
                  id="name"
                  type="text" 
                  placeholder="Нэр, овог" 
                  className="w-full border-b border-[#243949]/20 bg-transparent py-4 text-lg focus:outline-none placeholder:text-[#6F7C72]"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs tracking-widest text-[#6F7C72] mb-2">И-мэйл хаяг</label>
                <input 
                  id="email"
                  type="email" 
                  placeholder="И-мэйл хаяг" 
                  className="w-full border-b border-[#243949]/20 bg-transparent py-4 text-lg focus:outline-none placeholder:text-[#6F7C72]"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required 
                />
              </div>

              <div>
                <label htmlFor="brand" className="block text-xs tracking-widest text-[#6F7C72] mb-2">Брэндийн нэр (заавал биш)</label>
                <input 
                  id="brand"
                  type="text" 
                  placeholder="Брэндийн нэр" 
                  className="w-full border-b border-[#243949]/20 bg-transparent py-4 text-lg focus:outline-none placeholder:text-[#6F7C72]"
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs tracking-widest text-[#6F7C72] mb-2">Нэмэлт хүсэлт эсвэл асуулт</label>
                <textarea 
                  id="message"
                  placeholder="Нэмэлт хүсэлт эсвэл асуулт" 
                  rows={4}
                  className="w-full border-b border-[#243949]/20 bg-transparent py-4 text-lg focus:outline-none resize-y placeholder:text-[#6F7C72]"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button type="submit" variant="primary" size="large" className="w-full">
                ИЛГЭЭХ
              </Button>
            </form>

            <p className="text-center text-xs tracking-widest text-[#6F7C72] mt-12">
              Бид 24 цагийн дотор холбогдоно
            </p>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-[#243949]/10 py-20 text-center text-xs tracking-widest text-[#6F7C72]">
        © Lucy Gray R Creative AI Studio • Ulaanbaatar, Mongolia<br />
        All visuals are human-directed using AI as a creative partner
      </footer>
    </div>
  );
}
