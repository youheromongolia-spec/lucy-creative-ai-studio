'use client';

import Button from '@/components/ui/Button';
import PatternOverlay from '@/components/ui/PatternOverlay';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#FDFCF8] text-[#243949] flex items-center justify-center overflow-hidden">
      <PatternOverlay variant="section" intensity={5} />
      <div className="max-w-screen-2xl w-full mx-auto px-6 md:px-10 py-20 md:py-28 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="uppercase tracking-[0.2em] text-xs text-[#6F7C72] mb-6">ХОЛБОО БАРИХ</div>
          <h1 className="heading-serif text-7xl tracking-[-0.06em] mb-12">Холбоо барих</h1>

          <p className="text-xl text-[#4A5D4E] mb-16">
            Брэндийнхээ тансаг визуал ертөнцийг бидэнтэй хамт бүтээмээр байна уу?<br />
            Бид тантай холбогдохыг тэсэн ядан хүлээж байна.
          </p>

          <div className="space-y-8 text-left max-w-md mx-auto">
            <div>
              <div className="text-xs tracking-widest text-[#6F7C72] mb-2">И-МЭЙЛ</div>
              <a href="mailto:hello@lucygrayr.com" className="text-2xl hover:text-[#4A5D4E] transition-colors">hello@lucygrayr.com</a>
            </div>

            <div>
              <div className="text-xs tracking-widest text-[#6F7C72] mb-2">УТАС</div>
              <a href="tel:+97690111144" className="text-2xl hover:text-[#4A5D4E] transition-colors">+976 9011 1144</a>
            </div>

            <div>
              <div className="text-xs tracking-widest text-[#6F7C72] mb-2">БАЙРШИЛ</div>
              <p className="text-xl">Ulaanbaatar, Mongolia</p>
            </div>
          </div>

          <Button variant="primary" size="large" className="mt-16" href="/work-with-us">
            ХАМТРАН АЖИЛЛАХ
          </Button>
        </div>
      </div>
    </div>
  );
}
