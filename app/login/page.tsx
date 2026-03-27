'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/context/AuthContext';
import PatternOverlay from '@/components/ui/PatternOverlay';
import Button from '@/components/ui/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(email);
      router.push('/my-page');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Нэвтрэхэд алдаа гарлаа');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#243949] flex items-center justify-center px-6 py-20">
      <PatternOverlay variant="border" intensity={7}>
        <div className="max-w-md w-full bg-[#FDFCF8] text-[#172019] p-16 rounded-none">
          <div className="text-center mb-12">
            <div className="heading-serif text-4xl">Lucy Gray R</div>
            <p className="text-[#4A5D4E] mt-2">Creative AI Studio</p>
          </div>

          <h1 className="text-3xl font-light mb-10 text-center">Нэвтрэх</h1>

          <form onSubmit={handleLogin} className="space-y-8">
            <div>
              <label htmlFor="email" className="block text-xs tracking-widest mb-2">И-МЭЙЛ</label>
              <input
                id="email"
                type="email"
                title="И-мэйл хаяг"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-[#172019]/30 pb-4 focus:outline-none focus:border-[#4A5D4E] text-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xs tracking-widest mb-2">НУУЦ ҮГ</label>
              <input
                id="password"
                type="password"
                title="Нууц үг"
                placeholder="Нууц үг оруулах"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-[#172019]/30 pb-4 focus:outline-none focus:border-[#4A5D4E] text-lg"
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <Button 
              variant="primary" 
              size="large" 
              className="w-full mt-8"
              disabled={loading}
            >
              {loading ? 'Нэвтэрч байна...' : 'НЭВТРЭХ'}
            </Button>
          </form>

          <div className="text-center mt-12 text-sm">
            <a href="/join" className="text-[#4A5D4E] hover:underline">Бүртгүүлэх</a>
          </div>
        </div>
      </PatternOverlay>
    </div>
  );
}
