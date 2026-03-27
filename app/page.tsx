import PatternOverlay from '@/components/ui/PatternOverlay';
import MasonryGallery from '@/components/sections/MasonryGallery';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <PatternOverlay variant="hero" intensity={7}>
        <section className="min-h-screen flex items-center relative">
          <div className="absolute inset-0">
            <Image
              src="/images/beauty-1.jpg"
              alt="Lucy Gray R"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
          </div>

          <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-10 pt-20 w-full">
            <div className="max-w-3xl">
              <div className="mb-6 inline-block px-10 py-3 border border-white/60 text-xs tracking-[0.2em] text-white">
                CREATIVE AI STUDIO • ULAANBAATAR
              </div>

              <h1 className="heading-serif text-[92px] md:text-[120px] leading-none tracking-[-0.06em] text-white mb-8">
                Lucy Gray R
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-2xl tracking-[-0.01em]">
                We see the soul of the brand.<br />
                AI is only the tool we use to reveal it.
              </p>

              <div className="mt-16 flex flex-col sm:flex-row gap-6">
                <Link href="/workshop">
                  <Button variant="primary" size="large">AI WORKSHOP</Button>
                </Link>
                <Link href="/shop">
                  <Button variant="secondary" size="large">VIEW THE WORK</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-widest flex flex-col items-center">
            SCROLL TO DISCOVER
            <div className="w-px h-16 bg-white/30 mt-4" />
          </div>
        </section>
      </PatternOverlay>

      {/* STATEMENT */}
      <section className="max-w-screen-2xl mx-auto px-10 py-32">
        <div className="max-w-3xl">
          <p className="text-2xl leading-tight tracking-[-0.02em] text-[#4A5D4E]">
            Монгол брэндийн сүнсийг гүнзгий ойлгож,<br />
            AI-г зөвхөн хэрэгсэл болгон ашиглаж,<br />
            органик, тансаг, үнэн мэдрэмжтэй визуал ертөнц бүтээдэг студи.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <MasonryGallery />

      {/* FOOTER */}
      <footer className="bg-[#243949] border-t border-white/10 py-20 text-center text-xs tracking-widest text-[#6F7C72]">
        © Lucy Gray R Creative AI Studio • Ulaanbaatar, Mongolia
        <br />
        All Images On This Site Were Created Using AI
      </footer>
    </>
  );
}
