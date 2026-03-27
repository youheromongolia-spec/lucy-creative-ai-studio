// app/cart/page.tsx
'use client';

import Image from 'next/image';
import PatternOverlay from '@/components/ui/PatternOverlay';
import Button from '@/components/ui/Button';
import { useState, useEffect } from 'react';
import { useAuth } from '@/components/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { createQPayInvoice } from '@/lib/qpay';
import { useRouter } from 'next/navigation';

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export default function CartPage() {
  const { user, isLoggedIn } = useAuth();
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  // localStorage-с cart унших
  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) setCart(JSON.parse(saved));
  }, []);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const updateQuantity = (id: number, newQuantity: number) => {
    const updated = cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    );
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const removeItem = (id: number) => {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const handleCheckout = async () => {
    if (!user) {
      router.push('/login');
      return;
    }

    setLoading(true);

    try {
      const orderId = `ORDER-${Date.now()}`;

      // Supabase-д захиалга үүсгэх
      const { data: order, error } = await supabase
        .from('orders')
        .insert({
          user_id: user.id,
          items: cart,
          total: subtotal,
          status: 'pending'
        })
        .select()
        .single();

      if (error || !order) {
        throw new Error('Захиалга үүсгэхэд алдаа гарлаа.');
      }

      // QPay invoice үүсгэх
      const invoice = await createQPayInvoice(order.id, subtotal, `Lucy Gray R захиалга #${order.id}`);

      if (invoice.qr_image) {
        window.open(invoice.qr_image, '_blank');
      } else if (invoice.invoice_id) {
        window.location.href = `https://qpay.mn/q/${invoice.invoice_id}`;
      }
    } catch (err) {
      alert('Төлбөр үүсгэхэд алдаа гарлаа. Дахин оролдоно уу.');
    }

    setLoading(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#FDFCF8] flex items-center justify-center">
        <div className="text-center max-w-md">
          <h2 className="heading-serif text-5xl tracking-[-0.04em] mb-6">Сагсандаа орохын тулд нэвтэрнэ үү</h2>
          <Button variant="primary" size="large" href="/login">
            НЭВТРЭХ
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FDFCF8] text-[#243949] min-h-screen pb-32">
      <div className="max-w-screen-2xl mx-auto px-10 py-20">
        <h1 className="heading-serif text-6xl tracking-[-0.05em] mb-16">Your Cart</h1>

        <div className="grid lg:grid-cols-12 gap-20">
          {/* Cart Items */}
          <div className="lg:col-span-7 space-y-16">
            {cart.length === 0 ? (
              <div className="text-center py-32 border border-[#243949]/10">
                <p className="text-3xl text-[#4A5D4E]">Сагс хоосон байна</p>
                <Button variant="secondary" className="mt-10" href="/shop">
                  SHOP РУУ БУЦАХ
                </Button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row gap-10 border-b border-[#243949]/10 pb-12">
                  <div className="relative w-full md:w-60 aspect-[4/5] border border-[#243949]/15 overflow-hidden flex-shrink-0">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      fill 
                      className="object-cover" 
                    />
                    <PatternOverlay variant="image" intensity={6} />
                  </div>

                  <div className="flex-1">
                    <h3 className="heading-serif text-3xl tracking-[-0.03em] mb-2">{item.title}</h3>
                    <p className="text-xl text-[#4A5D4E]">{item.price.toLocaleString()} ₮</p>

                    <div className="mt-8 flex items-center gap-8">
                      <div className="flex items-center border border-[#243949]/20 text-lg">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-5 py-3 hover:bg-[#243949]/5 transition-colors"
                        >
                          −
                        </button>
                        <span className="px-8 font-light">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-5 py-3 hover:bg-[#243949]/5 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-xs tracking-widest text-[#6F7C72] hover:text-red-700 transition-colors"
                      >
                        УСТГАХ
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Sticky Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 border border-[#243949]/15 p-10 bg-white">
              <h3 className="heading-serif text-4xl mb-10">Order Summary</h3>

              <div className="space-y-6 text-lg">
                <div className="flex justify-between">
                  <span>Нийт дүн</span>
                  <span>{subtotal.toLocaleString()} ₮</span>
                </div>
                <div className="flex justify-between border-t border-[#243949]/10 pt-6 font-medium text-xl">
                  <span>Төлөх дүн</span>
                  <span>{subtotal.toLocaleString()} ₮</span>
                </div>
              </div>

              <Button 
                variant="primary" 
                size="large" 
                className="w-full mt-12"
                onClick={handleCheckout}
                disabled={loading || cart.length === 0}
              >
                {loading ? "Захиалга үүсгэж байна..." : "ЗАХИАЛГА БАТЛАХ"}
              </Button>

              <p className="text-center text-xs tracking-widest text-[#6F7C72] mt-10">
                Захиалга баталгаажсаны дараа бид тантай холбогдоно
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
