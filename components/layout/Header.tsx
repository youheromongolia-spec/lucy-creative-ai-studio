'use client';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-[#243949]/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-screen-2xl mx-auto px-10 py-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="heading-serif text-[29px] tracking-[-0.04em]">Lucy Gray R</span>
          <span className="text-[10px] tracking-[0.2em] text-[#4A5D4E] font-medium">CREATIVE AI STUDIO</span>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-sm tracking-widest">
          <a href="/shop" className="hover:text-[#4A5D4E] transition-colors">SHOP</a>
          <a href="/workshop" className="hover:text-[#4A5D4E] transition-colors">AI WORKSHOP</a>
          <a href="/work-with-us" className="hover:text-[#4A5D4E] transition-colors">WORK WITH US</a>
          <a href="/qa" className="hover:text-[#4A5D4E] transition-colors">Q&A</a>
        </nav>

        <div className="flex items-center gap-6">
          <button className="text-xs tracking-widest border border-white/30 px-6 py-3 hover:border-white/60 transition-all">МОНГОЛ / EN</button>
          <button 
            onClick={() => document.dispatchEvent(new CustomEvent('openSidebar'))}
            className="md:hidden"
            title="Open menu"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}