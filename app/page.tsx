// app/page.tsx
'use client';

import Image from 'next/image';
import PatternOverlay from '@/components/ui/PatternOverlay';
import MasonryGallery from '@/components/sections/MasonryGallery';
import Button from '@/components/ui/Button';

const galleryImages = [
  "/images/beauty-1.jpg",
  "/images/beauty-2.jpg",
  "/images/beauty-3.jpg",
  "/images/beauty-4.jpg",
  "/images/beauty-5.jpg",
  "/images/beauty-6.jpg",
  "/images/hero-woman-sand.jpg",
];

export default function Home() {
  return (
    <div className="bg-[#FDFCF8] text-[#243949] min-h-screen overflow-hidden">
      {/* HERO — Ocean blue with warm sand feel */}
      <section className="relative h-screen flex items-center justify-center border-b border-[#243949]/10">
        <div className="absolute inset-0 bg-[#243949]">
          <Image 
            src="/images/beauty-1.jpg" 
            alt="Lucy Gray R" 
            fill 
            className="object-cover"
            priority 
          />
          <PatternOverlay variant="hero" intensity={9} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#243949]/70 via-transparent to-[#243949]/80" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="mb-8 inline-block px-10 py-3 border border-white/30 text-xs tracking-[0.2em] text-white/90">
            CREATIVE AI STUDIO • ULAANBAATAR
          </div>
          <h1 className="heading-serif text-[92px] md:text-[128px] leading-none tracking-[-0.07em] text-white mb-10">
            Lucy Gray R
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto tracking-tight">
            We see the soul of the brand.<br />AI is only the tool we use to reveal it.
          </p>
        </div>
      </section>

      {/* STUDIO INTRO */}
      <section className="max-w-screen-2xl mx-auto px-10 py-28 border-b border-[#243949]/10">
        <div className="max-w-3xl">
          <p className="text-2xl leading-tight tracking-[-0.02em] text-[#4A5D4E]">
            Lucy Gray R бол зүгээр нэг AI зураг үүсгэгч биш.<br />
            Бид Монгол брэндийн мөн чанарыг гүнзгий ойлгож, түүнд тохирсон органик, тансаг визуал шийдэл бүтээдэг creative AI studio юм.
          </p>
        </div>
      </section>

      {/* MASONRY GALLERY + COPY BLOCK (Таны хүссэн хэсэг) */}
      <section className="max-w-screen-2xl mx-auto px-10 py-20">
        <MasonryGallery images={galleryImages} />

        {/* Gallery дундах текст блок — Lucy Gray R is a Creative AI Studio */}
        <div className="max-w-2xl mx-auto text-center py-28 border-t border-[#243949]/10">
          <div className="heading-serif text-5xl tracking-[-0.04em] leading-tight mb-10 text-[#243949]">
            Lucy Gray R is a Creative AI Studio.
          </div>
          <p className="text-lg leading-relaxed text-[#4A5D4E]">
            Монгол брэндүүдэд зориулсан органик мэдрэмжтэй AI визуал, identity, content systems боловсруулдаг.<br /><br />
            Энэ бол зөвхөн AI зураг биш.<br />
            Энэ бол брэндийн хэл, өнгө, мэдрэмжийг дүрслэх дизайн ажил.
          </p>
        </div>
      </section>

      {/* SECTION 3 — SHOP PREVIEW (Таны хүссэн 3 product card) */}
      <section className="max-w-screen-2xl mx-auto px-10 py-28 border-t border-[#243949]/10 bg-[#FDFCF8]">
        <div className="text-center mb-16">
          <div className="uppercase tracking-[0.18em] text-xs text-[#6F7C72] mb-3">CURATED COLLECTIONS</div>
          <h2 className="heading-serif text-6xl tracking-[-0.05em]">The Shop Preview</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="border border-[#243949]/15 group hover:border-[#4A5D4E] transition-colors p-8">
            <div className="aspect-[4/3] relative overflow-hidden mb-8">
              <Image src="/images/beauty-2.jpg" alt="Full AI Prompts Bundle" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <PatternOverlay variant="image" intensity={6} />
            </div>
            <h3 className="heading-serif text-3xl tracking-tight mb-3">Full AI Prompts Bundle</h3>
            <p className="text-[#4A5D4E] text-[15px] leading-relaxed">Full AI Prompts Bundle</p>
            <div className="mt-8 flex justify-between items-center">
              <span className="text-xl">285,000 ₮</span>
              <Button variant="secondary" size="small" href="/shop">Үзэх</Button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-[#243949]/15 group hover:border-[#4A5D4E] transition-colors p-8">
            <div className="aspect-[4/3] relative overflow-hidden mb-8">
              <Image src="/images/beauty-4.jpg" alt="1400 Carousel Bundle" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <PatternOverlay variant="image" intensity={6} />
            </div>
            <h3 className="heading-serif text-3xl tracking-tight mb-3">1400 Carousel Bundle</h3>
            <p className="text-[#4A5D4E] text-[15px] leading-relaxed">Social media-д зориулсан 1400 Carousel Bundle</p>
            <div className="mt-8 flex justify-between items-center">
              <span className="text-xl">30,000 ₮</span>
              <Button variant="secondary" size="small" href="/shop">Үзэх</Button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-[#243949]/15 group hover:border-[#4A5D4E] transition-colors p-8">
            <div className="aspect-[4/3] relative overflow-hidden mb-8">
              <Image src="/images/beauty-3.jpg" alt="Ready-made AI Images" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <PatternOverlay variant="image" intensity={6} />
            </div>
            <h3 className="heading-serif text-3xl tracking-tight mb-3">Ready-made AI Images</h3>
            <p className="text-[#4A5D4E] text-[15px] leading-relaxed">Шууд ашиглах боломжтой high-end editorial AI зургийн багц</p>
            <div className="mt-8 flex justify-between items-center">
              <span className="text-xl">195,000 ₮</span>
              <Button variant="secondary" size="small" href="/shop">Үзэх</Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button variant="primary" size="large" href="/shop">
            БҮХ БҮТЭЭГДЭХҮҮН ҮЗЭХ
          </Button>
        </div>
      </section>

      {/* WORK WITH US TEASER */}
      <section className="bg-[#243949] text-[#FDFCF8] py-28 text-center">
        <h2 className="heading-serif text-6xl tracking-[-0.04em] mb-6">Work With Us</h2>
        <p className="max-w-md mx-auto text-white/80">Брэндийнхээ тансаг визуал ертөнцийг бидэнтэй хамт бүтээмээр байна уу?</p>
        <Button variant="secondary" size="large" className="mt-10" href="/work-with-us">
          ХАМТРАН АЖИЛЛАХ
        </Button>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#243949]/10 py-20 text-center text-xs tracking-widest text-[#6F7C72]">
        © Lucy Gray R Creative AI Studio • Ulaanbaatar, Mongolia<br />
        All Images On This Site Were Created Using AI — But the direction is deeply human
      </footer>
    </div>
  );
}
