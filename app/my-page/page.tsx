'use client';

import { useProtectedRoute } from '@/components/hooks/useProtectedRoute';
import TactileCard from '@/components/ui/TactileCard';
import { useAuth } from '@/components/context/AuthContext';

export default function MyPage() {
  const isProtected = useProtectedRoute();
  const { userName, logout } = useAuth();

  if (!isProtected) return null; // Redirect хийгдэх хүртэл юу ч үзүүлэхгүй

  return (
    <div className="bg-[#243949] min-h-screen pt-32 px-10">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="heading-serif text-6xl">Сайн байна уу, {userName}</h1>
        <p className="text-[#4A5D4E] mt-2">Нийт худалдан авалт: 0₮</p>

        <div className="mt-20 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <div className="space-y-6 text-sm tracking-widest">
              <a href="#" className="block text-[#4A5D4E]">Захиалгын түүх</a>
              <a href="#" className="block">Хүслийн жагсаалт</a>
              <a href="#" className="block">1:1 Лавлагаа</a>
              <button
                onClick={logout}
                className="block text-red-400 hover:underline"
              >
                Гарах
              </button>
            </div>
          </div>

          <div className="md:col-span-9">
            <TactileCard>
              <p className="text-center py-20 text-[#6F7C72]">Одоогоор захиалгын түүх алга.</p>
              <div className="text-center">
                <a href="/shop" className="text-[#4A5D4E] underline">SHOP үзэх</a>
              </div>
            </TactileCard>
          </div>
        </div>
      </div>
    </div>
  );
}
