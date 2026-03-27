'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Button from '@/components/ui/Button';
import PatternOverlay from '@/components/ui/PatternOverlay';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (!error) {
      setSent(true);
    } else {
      setError('Алдаа гарлаа. Дахин оролдоно уу.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] flex items-center justify-center px-6 relative overflow-hidden">
      <PatternOverlay variant="section" intensity={5} />
      <div className="max-w-md w-full border border-[#243949]/10 p-12 relative z-10 bg-white/90">
        <h1 className="heading-serif text-5xl tracking-[-0.04em] mb-10 text-center">Нууц үг сэргээх</h1>

        {sent ? (
          <div className="text-center">
            <p className="text-[#4A5D4E]">Таны и-мэйл рүү сэргээх холбоос илгээгдлээ.</p>
            <Button variant="secondary" className="mt-8" href="/login">Нэвтрэх хуудас руу буцах</Button>
          </div>
        ) : (
          <form onSubmit={handleReset}>
            <div className="mb-8">
              <label htmlFor="email" className="block text-xs tracking-widest text-[#6F7C72] mb-2">И-мэйл хаяг</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-[#243949]/20 bg-transparent py-4 text-lg focus:outline-none"
                required
              />
            </div>
            {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}
            <Button type="submit" variant="primary" size="large" className="w-full" disabled={loading}>
              {loading ? "Илгээж байна..." : "СЭРГЭЭХ ХОЛБООС ИЛГЭЭХ"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
