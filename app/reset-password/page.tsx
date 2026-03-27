'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import PatternOverlay from '@/components/ui/PatternOverlay';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Нууц үг таарахгүй байна.');
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });

    if (!error) {
      setSuccess(true);
      setTimeout(() => router.push('/login'), 1500);
    } else {
      setError('Алдаа гарлаа.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] flex items-center justify-center px-6 relative overflow-hidden">
      <PatternOverlay variant="section" intensity={5} />
      <div className="max-w-md w-full border border-[#243949]/10 p-12 relative z-10 bg-white/90">
        <h1 className="heading-serif text-5xl tracking-[-0.04em] mb-10 text-center">Шинэ нууц үг тохируулах</h1>

        {success ? (
          <div className="text-center text-[#4A5D4E] text-lg">
            Нууц үг амжилттай шинэчлэгдлээ.<br />Та удахгүй нэвтрэх хуудас руу шилжинэ.
          </div>
        ) : (
          <form onSubmit={handleReset} className="space-y-8">
            <div>
              <label className="block text-xs tracking-widest text-[#6F7C72] mb-2" htmlFor="new-password">Шинэ нууц үг</label>
              <input
                id="new-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-[#243949]/20 bg-transparent py-4 text-lg"
                required
                placeholder="Шинэ нууц үг"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest text-[#6F7C72] mb-2" htmlFor="confirm-password">Шинэ нууц үг давтах</label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border-b border-[#243949]/20 bg-transparent py-4 text-lg"
                required
                placeholder="Шинэ нууц үг давтах"
              />
            </div>
            {error && <p className="text-red-600 text-sm text-center">{error}</p>}
            <Button
              type="submit"
              variant="primary"
              size="large"
              className="w-full"
              disabled={loading || !password || !confirmPassword}
            >
              {loading ? "Шинэчилж байна..." : "ШИНЭЧЛЭХ"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
