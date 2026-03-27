import Link from 'next/link';
import Button from '@/components/ui/Button';
import PatternOverlay from '@/components/ui/PatternOverlay';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <PatternOverlay variant="hero" intensity={4} />
      </div>

      <div className="text-center relative z-10 px-6 max-w-md">
        <div className="text-[180px] font-light tracking-[-0.08em] text-[#243949]/10 mb-8">404</div>

        <h1 className="heading-serif text-6xl tracking-[-0.05em] mb-6">Хуудас олдсонгүй</h1>
        
        <p className="text-[#4A5D4E] text-lg mb-12">
          Уучлаарай, таны хайсан хуудас байхгүй байна.<br />
          Магадгүй холбоос буруу байж магадгүй.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button variant="primary" size="large" href="/">
            НҮҮР ХУУДАС РУУ БУЦАХ
          </Button>
          <Button variant="secondary" size="large" href="/shop">
            SHOP РУУ ОЧИХ
          </Button>
        </div>
      </div>
    </div>
  );
}
