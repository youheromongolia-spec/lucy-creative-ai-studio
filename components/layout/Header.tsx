'use client';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#243949]/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="heading-serif text-2xl md:text-[29px] tracking-[-0.04em]">Lucy Gray R</span>
          <span className="hidden md:block text-[10px] tracking-[0.2em] text-[#4A5D4E]">CREATIVE AI STUDIO</span>
        </div>

        <nav className="hidden md:flex gap-9 text-sm tracking-widest">
          <a href="/shop" className="hover:text-[#4A5D4E]">SHOP</a>
          <a href="/workshop" className="hover:text-[#4A5D4E]">AI WORKSHOP</a>
          <a href="/work-with-us" className="hover:text-[#4A5D4E]">WORK WITH US</a>
        </nav>

        <button
          onClick={() => document.dispatchEvent(new CustomEvent('openSidebar'))}
          className="md:hidden p-2"
          title="Open menu"
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </div>
    </header>
  );
}