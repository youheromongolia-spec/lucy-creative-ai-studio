'use client';


import { useProtectedRoute } from '@/components/hooks/useProtectedRoute';
import TactileCard from '@/components/ui/TactileCard';
import { useAuth } from '@/components/context/AuthContext';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';


export default function MyPage() {
  const isProtected = useProtectedRoute();
  const { user, signOut } = useAuth();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    supabase
      .from('orders')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        setOrders(data || []);
        setLoading(false);
      });
  }, [user]);

  if (!isProtected) return null; // Redirect хийгдэх хүртэл юу ч үзүүлэхгүй

  return (
    <div className="bg-[#243949] min-h-screen pt-32 px-10">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="heading-serif text-6xl">Сайн байна уу, {user?.email || 'Зочин'}</h1>
        <p className="text-[#4A5D4E] mt-2">Нийт худалдан авалт: {orders.reduce((sum, o) => sum + (o.total || 0), 0).toLocaleString()}₮</p>

        <div className="mt-20 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <div className="space-y-6 text-sm tracking-widest">
              <a href="#" className="block text-[#4A5D4E]">Захиалгын түүх</a>
              <a href="#" className="block">Хүслийн жагсаалт</a>
              <a href="#" className="block">1:1 Лавлагаа</a>
              <button
                onClick={signOut}
                className="block text-red-400 hover:underline"
              >
                Гарах
              </button>
            </div>
          </div>

          <div className="md:col-span-9">
            <TactileCard>
              <h2 className="heading-serif text-3xl mb-8">Захиалгын түүх</h2>
              {loading ? (
                <p className="text-center py-20 text-[#6F7C72]">Уншиж байна...</p>
              ) : orders.length === 0 ? (
                <div className="text-center py-20 text-[#6F7C72]">
                  Одоогоор захиалгын түүх алга.<br />
                  <a href="/shop" className="text-[#4A5D4E] underline">SHOP үзэх</a>
                </div>
              ) : (
                <div className="space-y-8">
                  {orders.map((order) => (
                    <div key={order.id} className="border border-[#243949]/10 p-6 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-semibold">Захиалга #{order.id}</div>
                        <div className="text-[#4A5D4E] text-sm">{new Date(order.created_at).toLocaleString()}</div>
                      </div>
                      <div className="text-sm mb-2">Нийт: <span className="font-bold">{order.total?.toLocaleString()}₮</span></div>
                      <div className="text-xs text-[#6F7C72]">Төлөв: {order.status}</div>
                      <div className="mt-2">
                        <details>
                          <summary className="cursor-pointer text-xs text-[#4A5D4E]">Захиалгын дэлгэрэнгүй</summary>
                          <pre className="bg-[#FDFCF8] border border-[#243949]/10 rounded p-2 mt-2 text-xs overflow-x-auto">{JSON.stringify(order.items, null, 2)}</pre>
                        </details>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TactileCard>
          </div>
        </div>
      </div>
    </div>
  );
}
