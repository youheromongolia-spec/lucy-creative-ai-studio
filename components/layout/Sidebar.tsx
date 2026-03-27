// components/layout/Sidebar.tsx
'use client';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import PatternOverlay from '@/components/ui/PatternOverlay';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Жишээ: true/false-оор солино
  const [userName, setUserName] = useState("Dulmaa"); // Жишээ нэр

  useEffect(() => {
    const openHandler = () => setIsOpen(true);
    document.addEventListener('openSidebar', openHandler);
    return () => document.removeEventListener('openSidebar', openHandler);
  }, []);

  const menuItems = [
    { label: "SHOP", href: "/shop" },
    { label: "AI WORKSHOP", href: "/workshop" },
    { label: "WORK WITH US", href: "/work-with-us" },
    { label: "Q&A", href: "/qa" },
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 transition-opacity" 
          onClick={() => setIsOpen(false)}
        />
      )}

      <PatternOverlay variant="border" intensity={6}>
        <div 
          className={`fixed top-0 bottom-0 right-0 w-80 bg-[#243949] border-l border-white/10 z-50 transform transition-transform duration-500 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-10 flex flex-col h-full">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-[#FDFCF8] hover:text-[#4A5D4E] transition-colors"
              title="Close menu"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            {/* Logo */}
            <div className="mt-8">
              <div className="heading-serif text-3xl tracking-tight">Lucy Gray R</div>
              <div className="text-xs tracking-[0.2em] text-[#4A5D4E] mt-1">CREATIVE AI STUDIO</div>
            </div>

            {/* Account Section */}
            <div className="mt-16">
              {isLoggedIn ? (
                <div>
                  <p className="text-sm text-[#6F7C72]">Сайн байна уу,</p>
                  <p className="text-xl font-medium text-[#FDFCF8]">{userName}</p>
                </div>
              ) : (
                <a href="/login" className="block text-lg hover:text-[#4A5D4E] transition-colors">Нэвтрэх / Бүртгүүлэх</a>
              )}
            </div>

            {/* Navigation Menu */}
            <nav className="mt-12 flex-1">
              <ul className="space-y-8 text-lg tracking-wide">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href} 
                      className="block hover:text-[#4A5D4E] transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Bottom Section */}
            <div className="mt-auto pt-12 border-t border-white/10 text-xs text-[#6F7C72] tracking-widest">
              © Lucy Gray R<br />
              Ulaanbaatar, Mongolia
            </div>
          </div>
        </div>
      </PatternOverlay>
    </>
  );
}