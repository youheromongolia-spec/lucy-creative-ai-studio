import PatternOverlay from '@/components/ui/PatternOverlay';

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-[#FDFCF8] text-[#243949] flex items-center justify-center overflow-hidden">
      <PatternOverlay variant="section" intensity={5} />
      <div className="max-w-3xl w-full mx-auto px-6 md:px-10 py-20 md:py-28 relative z-10 bg-white/90 border border-[#243949]/10 shadow-xl rounded-2xl">
        <div className="uppercase tracking-[0.2em] text-xs text-[#6F7C72] mb-6 text-center">LEGAL</div>
        <h1 className="heading-serif text-6xl tracking-[-0.05em] mb-16 text-center">Үйлчилгээний нөхцөл</h1>

        <div className="prose prose-stone max-w-none text-[15px] leading-relaxed">
          <p className="mb-8">Lucy Gray R Creative AI Studio-ийн үйлчилгээг ашигласнаар та доорх нөхцөлүүдийг хүлээн зөвшөөрч байна.</p>

          <h2 className="heading-serif text-3xl mt-16 mb-6">1. Үйлчилгээний ерөнхий нөхцөл</h2>
          <p>Бид AI-г зөвхөн хэрэгсэл болгон ашиглаж, брэндийн мөн чанарыг гүнзгий ойлгож, органик, тансаг визуал шийдэл бүтээдэг. Бүх визуал нь human-directed байдаг.</p>

          <h2 className="heading-serif text-3xl mt-16 mb-6">2. Интеллектуал өмч</h2>
          <p>Таны брэндэд зориулж бүтээсэн visuals-ийн өмч танд харьяалагдана. Гэхдээ бидний бүтээсэн prompt system, methodology-ийн өмч Lucy Gray R-д харьяалагдана.</p>

          <h2 className="heading-serif text-3xl mt-16 mb-6">3. Буцаалт ба төлбөр</h2>
          <p>Workshop эхлэхээс 72 цагийн өмнө бүрэн буцаалт хийгдэнэ. Эхэлсний дараа хэсэгчилсэн буцаалт хийгдэнэ.</p>
        </div>

        <div className="mt-20 text-xs tracking-widest text-[#6F7C72] border-t border-[#243949]/10 pt-10 text-center">
          Сүүлийн шинэчлэлт: 2026 оны 3-р сар
        </div>
      </div>
    </div>
  );
}
