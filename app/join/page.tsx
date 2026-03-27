'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/context/AuthContext';
import PatternOverlay from '@/components/ui/PatternOverlay';
import Button from '@/components/ui/Button';

export default function Join() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      login(name);
      router.push('/my-page');
    }
  };

  return (
    <div className="min-h-screen bg-[#243949] flex items-center justify-center px-6 py-20">
      <PatternOverlay variant="border" intensity={7}>
        <div className="max-w-md w-full bg-[#FDFCF8] text-[#172019] p-16">
          <h1 className="text-3xl font-light mb-10 text-center">Бүртгүүлэх</h1>

          <form onSubmit={handleJoin} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-xs tracking-widest mb-2">НЭР</label>
              <input id="name" type="text" title="Нэр" placeholder="Таны нэр" value={name} onChange={(e) => setName(e.target.value)} className="w-full border-b border-[#172019]/30 pb-4 focus:outline-none focus:border-[#4A5D4E]" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs tracking-widest mb-2">И-МЭЙЛ</label>
              <input id="email" type="email" title="И-мэйл хаяг" placeholder="example@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-b border-[#172019]/30 pb-4 focus:outline-none focus:border-[#4A5D4E]" required />
            </div>
            <div>
              <label htmlFor="password" className="block text-xs tracking-widest mb-2">НУУЦ ҮГ</label>
              <input id="password" type="password" title="Нууц үг" placeholder="Нууц үг оруулах" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border-b border-[#172019]/30 pb-4 focus:outline-none focus:border-[#4A5D4E]" required />
            </div>

            <Button variant="primary" size="large" className="w-full mt-8">БҮРТГЭЛ ҮҮСГЭХ</Button>
          </form>
        </div>
      </PatternOverlay>
    </div>
  );
}
