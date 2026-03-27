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

  return (
    <div className="bg-[#FDFCF8] text-[#243949] min-h-screen">
      <PatternOverlay variant="hero" intensity={6}>
        <section className="min-h-[60vh] flex flex-col items-center justify-center py-32">
          <h1 className="heading-serif text-[64px] md:text-[92px] leading-none tracking-[-0.06em] mb-8 text-center">
            Shop
          </h1>
          <p className="text-xl md:text-2xl text-[#4A5D4E] mb-12 text-center max-w-2xl">
            Бүтээгдэхүүн, үйлчилгээний захиалга авах хэсэг.<br />
            Доорх формыг бөглөж илгээнэ үү.
          </p>
          <Button variant="primary" size="large" onClick={() => setFormOpen(true)}>
            ЗАХИАЛГА ӨГӨХ
          </Button>
        </section>
      </PatternOverlay>

      {formOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white text-[#243949] p-10 rounded-lg shadow-lg w-full max-w-lg space-y-6"
          >
            <h2 className="heading-serif text-3xl mb-4">Захиалга өгөх</h2>
            <div>
              <label className="block text-xs mb-2">Нэр</label>
              <input
                type="text"
                className="w-full border-b border-[#243949]/20 py-2 focus:outline-none"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-xs mb-2">И-мэйл</label>
              <input
                type="email"
                className="w-full border-b border-[#243949]/20 py-2 focus:outline-none"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-xs mb-2">Брэнд эсвэл байгууллага</label>
              <input
                type="text"
                className="w-full border-b border-[#243949]/20 py-2 focus:outline-none"
                value={formData.brand}
                onChange={e => setFormData({ ...formData, brand: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs mb-2">Захиалгын дэлгэрэнгүй</label>
              <textarea
                className="w-full border-b border-[#243949]/20 py-2 focus:outline-none"
                rows={4}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <div className="flex gap-4 justify-end">
              <Button variant="secondary" type="button" onClick={() => setFormOpen(false)}>
                Болих
              </Button>
              <Button variant="primary" type="submit">
                Илгээх
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
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
