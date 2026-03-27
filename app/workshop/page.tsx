
// app/workshop/page.tsx
'use client';

import Image from 'next/image';
import PatternOverlay from '@/components/ui/PatternOverlay';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function WorkshopPage() {
  return (
    <div className="bg-[#FDFCF8] text-[#243949] min-h-screen">
      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/beauty-3.jpg" 
            alt="AI Workshop" 
            fill 
            className="object-cover"
            priority 
          />
          <PatternOverlay variant="hero" intensity={7} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-3 px-8 py-3 border border-white/50 text-xs tracking-[0.18em] text-white">
            3 УДАА • 9 ЦАГ • ОНЛАЙН + OFFLINE
          </div>

          <h1 className="heading-serif text-[88px] md:text-[110px] leading-none tracking-[-0.06em] text-white mb-10">
            AI Workshop
          </h1>

          <p className="text-2xl md:text-3xl text-white/90 max-w-2xl mx-auto leading-tight">
            Монгол брэндийн сүнсийг ойлгож,<br />
            органик, тансаг визуал ертөнц бүтээхэд зориулсан<br />
            гүнзгий практик сургалт.
          </p>

          <div className="mt-16">
            <Link href="#session" passHref legacyBehavior>
              <a>
                <Button variant="primary" size="large">
                  БҮРТГҮҮЛЭХ
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="max-w-screen-2xl mx-auto px-10 py-28 border-b border-[#243949]/10">
        <div className="grid md:grid-cols-12 gap-20">
          <div className="md:col-span-5">
            <h2 className="heading-serif text-6xl tracking-[-0.04em] leading-none">
              We don’t teach prompts.<br />
              We teach brand soul.
            </h2>
          </div>
          <div className="md:col-span-7 text-[17px] leading-relaxed text-[#4A5D4E] max-w-2xl">
            <p className="mb-8">
              Энгийн AI image generator биш. Бид Монгол брэндийн өвөрмөц мөн чанарыг гүнзгий ойлгож, 
              түүнд тохирсон органик, тансаг, хүний гар хүрсэн мэт визуал систем бүтээхэд сургадаг.
            </p>
            <p>
              Хэт төгс, хүйтэн AI-ээс татгалзаж, subtle grain, felt texture, 
              нарийн Mongolian хээ угалз, warm sand & ocean palette ашиглан 
              үнэхээр “human-directed” үр дүнд хүрнэ.
            </p>
          </div>
        </div>
      </section>

      {/* SESSION STRUCTURE */}
      <section id="session" className="max-w-screen-2xl mx-auto px-10 py-32">
        <div className="text-center mb-20">
          <div className="text-[#4A5D4E] tracking-[0.12em] text-sm mb-4">SESSION STRUCTURE</div>
          <h2 className="heading-serif text-6xl tracking-[-0.04em]">3 үе шат • 9 цаг</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              title: "Монгол өнгө төрх, органик AI дүр бүтээх",
              desc: "Брэндийн сүнсийг ойлгох. Mongolian хээ, элс, тэнгэр, felt texture-ийг AI prompt-д хэрхэн зөв оруулах вэ."
            },
            {
              num: "02",
              title: "Brand-locked consistency & model sheet",
              desc: "Нэг брэндэд зориулсан AI consistency system. Тогтвортой өнгө, typography, texture, хээ угалзын library бүтээх."
            },
            {
              num: "03",
              title: "Монгол мэдрэмжтэй бодит кампани бүтээх",
              desc: "Бодит brief дээр ажиллах. Hero, campaign, product visual, social content — бүгдийг human-directed AI-ээр."
            }
          ].map((session, i) => (
            <div key={i} className="group border border-[#243949]/10 p-10 hover:border-[#4A5D4E] transition-all duration-500">
              <div className="text-[#4A5D4E] text-6xl font-light mb-8 tracking-tighter">{session.num}</div>
              <h3 className="heading-serif text-3xl mb-6 leading-tight">{session.title}</h3>
              <p className="text-[#4A5D4E] leading-relaxed">{session.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button variant="primary" size="large">
            БҮРТГҮҮЛЭХ — 9 ЦАГИЙН СУРГАЛТ
          </Button>
          <p className="mt-6 text-sm text-[#6F7C72]">Дараагийн элсэлт: 2026 оны 4-р сар</p>
        </div>
      </section>

      {/* WORK WITH US TEASER */}
      <section className="bg-[#243949] text-[#FDFCF8] py-32">
        <div className="max-w-screen-2xl mx-auto px-10 text-center">
          <h2 className="heading-serif text-6xl tracking-[-0.04em] mb-8">
            Work With Us
          </h2>
          <p className="text-xl max-w-xl mx-auto mb-12 text-white/80">
            Өөрийн брэндийн тансаг визуал системийг бидэнтэй хамт бүтээмээр байна уу?
          </p>
          <Link href="/work-with-us" passHref legacyBehavior>
            <a>
              <Button variant="secondary" size="large">
                ХАМТРАН АЖИЛЛАХ
              </Button>
            </a>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#243949]/10 py-12 text-center text-xs tracking-widest text-[#6F7C72]">
        © Lucy Gray R Creative AI Studio • Ulaanbaatar, Mongolia<br />
        All visuals are human-directed using AI as a creative partner
      </footer>
    </div>
  );
}
