import PatternOverlay from "@/components/ui/PatternOverlay";
import MasonryGallery from "@/components/sections/MasonryGallery";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <PatternOverlay variant="hero" intensity={7}>
        <section className="min-h-screen flex items-center relative">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-10 pt-20 relative z-10">
            <div className="max-w-[780px]">
              <h1 className="heading-serif text-[64px] sm:text-[108px] md:text-[148px] leading-[0.84] tracking-[-0.07em]">
                Lucy Gray R
              </h1>
              <p className="text-[#4A5D4E] text-xl sm:text-[34px] mt-3 tracking-wide">
                Creative AI Studio
              </p>

              <div className="mt-12 md:mt-20 max-w-lg text-base md:text-[17.5px] leading-relaxed text-[#FDFCF8]/90">
                Монгол брэндийн сүнсийг гүнзгий ойлгож,
                <br />
                AI-г зөвхөн хэрэгсэл болгон ашиглаж,
                <br />
                органик, тансаг, үнэн мэдрэмжтэй визуал ертөнц бүтээдэг студи.
              </div>

              <div className="mt-12 md:mt-16 flex flex-wrap gap-4 md:gap-6">
                <Button variant="primary" size="large">
                  SHOP ҮЗЭХ
                </Button>
                <Link href="/workshop">
                  <Button variant="secondary" size="large">
                    AI WORKSHOP
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.25em] text-white/30">
            SCROLL TO DISCOVER
          </div>
        </section>
      </PatternOverlay>

      {/* SIGNATURE LINE */}
      <div className="border-t border-b border-white/10 py-6 text-center text-xs tracking-widest text-[#6F7C72]">
        ALL IMAGES ON THIS SITE WERE CREATED USING AI — BUT THE DIRECTION IS
        DEEPLY HUMAN
      </div>

      {/* MASONRY GALLERY */}
      <MasonryGallery />

      {/* POSITIONING STATEMENT */}
      <section className="max-w-3xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center border-t border-white/10">
        <p className="heading-serif text-3xl md:text-[42px] leading-tight tracking-tight">
          We create visual systems that feel
          <br />
          unmistakably Mongolian — organic, quiet, and quietly luxurious.
        </p>

        <p className="mt-12 md:mt-16 text-[#6F7C72] text-sm md:text-[15.5px] leading-relaxed">
          Энгийн AI үйлчилгээ биш.
          <br />
          Брэндийн мөн чанарыг ойлгож, AI-г зөвхөн хэрэгсэл болгон ашиглаж,
          <br />
          илүү гүнзгий, илүү органик, илүү тансаг визуал ертөнц бүтээдэг студи.
        </p>
      </section>

      {/* TEASER SECTION */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-10 py-24 border-t border-white/10 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="heading-serif text-4xl md:text-5xl">AI Workshop</h2>
          <p className="mt-6 text-[#6F7C72] leading-relaxed">
            Офлайн практик сургалт • 3 удаа • 9 цаг
            <br />
            Монгол брэндэд зориулсан органик AI визуал ур чадвар
          </p>
          <Link
            href="/workshop"
            className="inline-block mt-10 border border-white/40 hover:border-white/70 px-10 py-4 text-sm tracking-widest transition-colors duration-300"
          >
            ДЭЛГЭРЭНГҮЙ ҮЗЭХ
          </Link>
        </div>

        <div>
          <h2 className="heading-serif text-4xl md:text-5xl">Work With Us</h2>
          <p className="mt-6 text-[#6F7C72] leading-relaxed">
            Брэндийнхээ дараагийн визуал бүлгийг хамт бүтээе
          </p>
          <Link
            href="/work-with-us"
            className="inline-block mt-10 border border-white/40 hover:border-white/70 px-10 py-4 text-sm tracking-widest transition-colors duration-300"
          >
            ХАМТРАН АЖИЛЛАХ
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#243949] border-t border-white/10 py-20 text-center text-xs tracking-widest text-[#6F7C72]">
        © Lucy Gray R Creative AI Studio • Ulaanbaatar, Mongolia
        <br />
        All Images On This Site Were Created Using AI
      </footer>
    </>
  );
}
