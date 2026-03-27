import PatternOverlay from '@/components/ui/PatternOverlay';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#FDFCF8] text-[#243949] flex items-center justify-center overflow-hidden">
      <PatternOverlay variant="section" intensity={5} />
      <div className="max-w-screen-2xl w-full mx-auto px-6 md:px-10 py-20 md:py-28 relative z-10">
        <div className="max-w-3xl">
          <div className="uppercase tracking-[0.2em] text-xs text-[#6F7C72] mb-6">THE STUDIO</div>
          <h1 className="heading-serif text-7xl tracking-[-0.06em] leading-none mb-16">
            Lucy Gray R<br />
            Creative AI Studio
          </h1>

          <div className="prose prose-stone max-w-none text-[15px] leading-relaxed">
            <p className="mb-12">
              Lucy Gray R бол зүгээр нэг AI зураг үүсгэгч биш. 
              Бид Монгол брэндийн сүнсийг гүнзгий ойлгож, түүнд тохирсон органик, тансаг, хүний гар хүрсэн мэт визуал ертөнц бүтээдэг студи юм.
            </p>

            <p className="mb-12">
              AI-г зөвхөн хэрэгсэл болгон ашиглаж, subtle grain, felt texture, Mongolian хээ угалз, warm sand болон ocean palette-ийг ашиглан 
              жинхэнэ “human-directed” үр дүнд хүрнэ.
            </p>

            <div className="grid md:grid-cols-2 gap-16 mt-20">
              <div>
                <h3 className="heading-serif text-3xl mb-6">Бидний философи</h3>
                <p>Хэт төгс, хүйтэн AI-ээс татгалзаж, органик, амьд, мэдрэмжийг бүтээх.</p>
              </div>
              <div>
                <h3 className="heading-serif text-3xl mb-6">Бидний арга барил</h3>
                <p>Брэндийн мөн чанарыг судлах → Brand-locked AI system бүтээх → Human curation + post-editing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
