import PatternOverlay from '@/components/ui/PatternOverlay';

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-[#FDFCF8] text-[#243949] flex items-center justify-center overflow-hidden">
      <PatternOverlay variant="section" intensity={5} />
      <div className="max-w-3xl w-full mx-auto px-6 md:px-10 py-20 md:py-28 relative z-10 bg-white/90 border border-[#243949]/10 shadow-xl rounded-2xl">
        <div className="uppercase tracking-[0.2em] text-xs text-[#6F7C72] mb-6 text-center">LEGAL</div>
        <h1 className="heading-serif text-6xl tracking-[-0.05em] mb-16 text-center">Нууцлалын бодлого</h1>

        <div className="prose prose-stone max-w-none text-[15px] leading-relaxed">
          <p className="mb-8">Lucy Gray R нь таны хувийн мэдээллийг хүндэтгэж, хамгаална. Бид зөвхөн үйлчилгээгээ сайжруулах, захиалга боловсруулах зорилгоор мэдээлэл цуглуулна.</p>

          <h2 className="heading-serif text-3xl mt-16 mb-6">1. Бид юу цуглуулдаг вэ?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Нэр, и-мэйл, утас (бүртгэл, захиалга, лавлагаанд)</li>
            <li>Захиалгын түүх, сонгосон визуал багцууд</li>
            <li>Workshop-д оролцсон мэдээлэл</li>
          </ul>

          <h2 className="heading-serif text-3xl mt-16 mb-6">2. Мэдээллийг хэрхэн ашигладаг вэ?</h2>
          <p>Захиалга боловсруулах, сургалт явуулах, чанарыг сайжруулах, хууль ёсны шаардлагад нийцүүлэх зорилгоор.</p>

          <h2 className="heading-serif text-3xl mt-16 mb-6">3. Мэдээлэл хадгалах хугацаа</h2>
          <p>Захиалга дууссанаас хойш 3 сарын дараа, workshop дууссанаас хойш 1 сарын дараа автоматаар устгана.</p>
        </div>

        <div className="mt-20 text-xs tracking-widest text-[#6F7C72] border-t border-[#243949]/10 pt-10 text-center">
          Сүүлийн шинэчлэлт: 2026 оны 3-р сар • Ulaanbaatar, Mongolia
        </div>
      </div>
    </div>
  );
}
