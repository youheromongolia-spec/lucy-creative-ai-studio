'use client';

import { useProtectedRoute } from '@/components/hooks/useProtectedRoute';
import { useAuth } from '@/components/context/AuthContext';
import Button from '@/components/ui/Button';
import TactileCard from '@/components/ui/TactileCard';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Cart() {
  const isProtected = useProtectedRoute();
  const { isLoggedIn, userName } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Жишээ cart item (бодит төсөлд cart state ашиглана)
  const cartItems = [
    { id: 1, title: "Mongolian Brand Visual System 2026", price: 285000 }
  ];

  const handleCheckout = async () => {
    if (!isLoggedIn) return;

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      alert('Захиалга амжилттай үүслээ!');
      router.push('/my-page');
    } catch (err) {
      console.error(err);
      alert('Захиалга үүсгэхэд алдаа гарлаа.');
    } finally {
      setLoading(false);
    }
  };

  if (!isProtected) return null;

  return (
    <div className="bg-[#243949] min-h-screen pt-32 px-10">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="heading-serif text-6xl">Cart</h1>

        <div className="mt-16 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7 space-y-8">
            {cartItems.map(item => (
              <TactileCard key={item.id}>
                <div className="flex gap-8">
                  <div className="w-32 h-32 bg-[#F5F0E8] flex-shrink-0" />
                  <div>
                    <h3 className="heading-serif text-2xl">{item.title}</h3>
                    <p className="text-[#6F7C72] mt-2">1 × ₮{item.price.toLocaleString()}</p>
                  </div>
                </div>
              </TactileCard>
            ))}
          </div>

          <div className="md:col-span-5">
            <TactileCard className="sticky top-28">
              <div className="text-sm tracking-widest">НИЙТ ДҮН</div>
              <div className="text-5xl font-light mt-4">₮285,000</div>
              
              <Button 
                variant="primary" 
                size="large" 
                className="w-full mt-12"
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading ? 'Захиалга үүсгэж байна...' : 'ЗАХИАЛГА ӨГӨХ'}
              </Button>
            </TactileCard>
          </div>
        </div>
      </div>
    </div>
  );
}
