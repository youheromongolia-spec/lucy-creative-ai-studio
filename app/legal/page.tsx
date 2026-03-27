import Link from 'next/link';
import PatternOverlay from '@/components/ui/PatternOverlay';

export default function LegalPage() {
  return (
    <div className="relative min-h-screen bg-[#FDFCF8] text-[#243949] flex items-center justify-center overflow-hidden">
      <PatternOverlay variant="section" intensity={5} />
      <div className="max-w-3xl w-full mx-auto px-6 md:px-10 py-20 md:py-28 relative z-10 bg-white/90 border border-[#243949]/10 shadow-xl rounded-2xl">
        <div className="uppercase tracking-[0.2em] text-xs text-[#6F7C72] mb-6 text-center">LEGAL</div>
        <h1 className="heading-serif text-7xl tracking-[-0.05em] mb-16 text-center">Хууль эрх зүйн мэдээлэл</h1>

        <div className="grid gap-12">
          <Link href="/terms" className="group block border border-[#243949]/10 p-10 hover:border-[#4A5D4E] transition-colors rounded-xl bg-white/80">
            <div className="text-3xl heading-serif mb-4 group-hover:text-[#4A5D4E]">Үйлчилгээний нөхцөл</div>
            <p className="text-[#4A5D4E]">Lucy Gray R-ийн үйлчилгээг ашиглахад хүлээх нөхцөл, intellectual property, буцаалтын бодлого.</p>
          </Link>

          <Link href="/privacy" className="group block border border-[#243949]/10 p-10 hover:border-[#4A5D4E] transition-colors rounded-xl bg-white/80">
            <div className="text-3xl heading-serif mb-4 group-hover:text-[#4A5D4E]">Нууцлалын бодлого</div>
            <p className="text-[#4A5D4E]">Бид таны хувийн мэдээллийг хэрхэн цуглуулж, ашиглаж, хамгаалж байгаа тухай дэлгэрэнгүй мэдээлэл.</p>
          </Link>

          <Link href="/shipping" className="group block border border-[#243949]/10 p-10 hover:border-[#4A5D4E] transition-colors rounded-xl bg-white/80">
            <div className="text-3xl heading-serif mb-4 group-hover:text-[#4A5D4E]">Хүргэлт ба төлбөрийн нөхцөл</div>
            <p className="text-[#4A5D4E]">Цахим бүтээгдэхүүний хүргэлт, төлбөрийн арга, QPay болон бусад нөхцөл.</p>
          </Link>
        </div>

        <div className="mt-20 text-xs tracking-widest text-[#6F7C72] text-center">
          © 2026 Lucy Gray R Creative AI Studio • Ulaanbaatar, Mongolia
        </div>
      </div>
    </div>
  );
}
