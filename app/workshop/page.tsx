import PatternOverlay from '@/components/ui/PatternOverlay';
import Button from '@/components/ui/Button';
export default function AIWorkshop() {
  return (
    <div className="bg-[#243949] text-[#FDFCF8] min-h-screen">
      <PatternOverlay variant="hero" intensity={8}>
        <section className="min-h-screen flex items-center relative">
          <div className="max-w-screen-2xl mx-auto px-10 pt-20">
            <div className="max-w-2xl">
              <h1 className="heading-serif text-[92px] md:text-[128px] leading-none tracking-[-0.06em]">
                AI Workshop
              </h1>
              <p className="text-[#4A5D4E] text-3xl mt-4">Офлайн практик сургалт · 3 удаа · 9 цаг</p>
            </div>
          </div>
        </section>
      </PatternOverlay>

      <section className="max-w-3xl mx-auto px-10 py-28 border-t border-white/10">
        <p className="text-[19px] leading-relaxed">
          Энэ бол нэг tool заадаг workshop биш.<br />
          Монгол брэндийн органик сүнсийг хадгалан, AI-г зөвхөн хэрэгсэл болгон ашиглаж, 
          тогтвортой, тансаг визуал систем бүтээх ур чадварыг заана.
        </p>
      </section>

      <section className="px-10 py-24 border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="heading-serif text-5xl mb-16">Session Structure</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Persona үүсгэх", desc: "Монгол өнгө төрхтэй, органик AI дүр бүтээх" },
              { num: "02", title: "Ижил төрх хадгалах", desc: "Brand-locked consistency & model sheet" },
              { num: "03", title: "Campaign & Product Composite", desc: "Монгол мэдрэмжтэй бодит кампани бүтээх" },
            ].map((s, i) => (
              <PatternOverlay key={i} variant="border" intensity={6}>
                <div className="bg-[#FDFCF8] text-[#172019] p-10 h-full">
                  <div className="text-[#4A5D4E] text-sm tracking-widest mb-4">{s.num}</div>
                  <h3 className="heading-serif text-3xl mb-6">{s.title}</h3>
                  <p className="text-[#6F7C72]">{s.desc}</p>
                </div>
              </PatternOverlay>
            ))}
          </div>
        </div>
      </section>

      <div className="text-center py-20 border-t border-white/10">
        <Button variant="primary" size="large">Бүртгүүлэх</Button>
      </div>
    </div>
  );
}
