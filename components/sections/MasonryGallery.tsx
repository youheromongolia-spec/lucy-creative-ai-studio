import PatternOverlay from '@/components/ui/PatternOverlay';

const images = Array.from({ length: 16 }, (_, i) => `/images/lucy-${(i % 8) + 1}.jpg`);

export default function MasonryGallery() {
  return (
    <section className="py-24 px-8 bg-[#243949]">
      <div className="max-w-screen-2xl mx-auto columns-2 md:columns-3 lg:columns-4 gap-6">
        {images.map((src, i) => (
          <div key={i} className="mb-6 group relative overflow-hidden border border-white/10 break-inside-avoid">
            <PatternOverlay variant="image" intensity={7}>
              <img src={src} alt="Lucy Gray R Visual" className="w-full image-hover" />
            </PatternOverlay>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-8">
              <p className="text-xs tracking-widest text-white/80">Mongolian Brand Essence • 2026</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}