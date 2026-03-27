import PatternOverlay from '@/components/ui/PatternOverlay';

export default function ShippingPage() {
  return (
    <div className="relative min-h-screen bg-[#FDFCF8] text-[#243949] flex items-center justify-center overflow-hidden">
      <PatternOverlay variant="section" intensity={5} />
      <div className="max-w-3xl w-full mx-auto px-6 md:px-10 py-20 md:py-28 relative z-10 bg-white/90 border border-[#243949]/10 shadow-xl rounded-2xl">
        <div className="uppercase tracking-[0.2em] text-xs text-[#6F7C72] mb-6 text-center">SHIPPING & PAYMENT</div>
        <h1 className="heading-serif text-7xl tracking-[-0.05em] mb-16 text-center">Хүргэлт ба төлбөр</h1>

        <div className="prose prose-stone max-w-none text-[15px] leading-relaxed">
          <h2 className="heading-serif text-3xl mb-8">Хүргэлтийн нөхцөл</h2>
          <p>Цахим бүтээгдэхүүн (AI Prompts Bundle, Carousel, Ready-made Images) тул хүргэлт шууд и-мэйлээр явагдана. Захиалга баталгаажсанаас хойш 24 цагийн дотор холбоо барина.</p>

          <h2 className="heading-serif text-3xl mt-16 mb-8">Төлбөрийн арга</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>QPay (бүх банкны карт, QR код)</li>
            <li>Банкны шилжүүлэг</li>
            <li>Олон улсын карт (ирээдүйд Stripe-ээр)</li>
          </ul>

          <p className="mt-12 text-[#6F7C72]">Төлбөр төлсний дараа захиалга шууд идэвхжинэ.</p>
        </div>

        <div className="mt-20 text-xs tracking-widest text-[#6F7C72] border-t border-[#243949]/10 pt-10 text-center">
          Сүүлийн шинэчлэлт: 2026 оны 3-р сар
        </div>
      </div>
    </div>
  );
}
