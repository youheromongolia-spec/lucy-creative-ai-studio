import PatternOverlay from '@/components/ui/PatternOverlay';
import Button from '@/components/ui/Button';

export default function WorkWithUs() {
  return (
    <div className="bg-[#243949] min-h-screen pt-32 px-10">
      <div className="max-w-2xl mx-auto">
        <PatternOverlay variant="border" intensity={6}>
          <div className="bg-[#FDFCF8] text-[#172019] p-16">
            <h1 className="heading-serif text-6xl">Work With Us</h1>
            <p className="mt-6 text-[#4A5D4E]">Брэндийнхээ дараагийн визуал бүлгийг хамт бүтээе</p>

            <form className="mt-16 space-y-12">
              <div>
                <label htmlFor="brand-name" className="block text-xs tracking-widest mb-3">БРЭНДИЙН НЭР</label>
                <input id="brand-name" type="text" title="Брэндийн нэр" placeholder="Брэндийн нэрийг оруулах" className="w-full border-b border-[#172019]/30 pb-4 focus:outline-none focus:border-[#4A5D4E] text-lg" />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label htmlFor="contact-name" className="block text-xs tracking-widest mb-3">ХАРИУЦАХ ХҮН</label>
                  <input id="contact-name" type="text" title="Хариуцах хүний нэр" placeholder="Таны нэр" className="w-full border-b border-[#172019]/30 pb-4 focus:outline-none focus:border-[#4A5D4E] text-lg" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs tracking-widest mb-3">И-МЭЙЛ</label>
                  <input id="contact-email" type="email" title="И-мэйл хаяг" placeholder="example@email.com" className="w-full border-b border-[#172019]/30 pb-4 focus:outline-none focus:border-[#4A5D4E] text-lg" />
                </div>
              </div>
              <div>
                <label htmlFor="project-details" className="block text-xs tracking-widest mb-3">ТӨСЛИЙН ДЭЛГЭРЭНГҮЙ</label>
                <textarea
                  id="project-details"
                  rows={10}
                  className="w-full border border-[#172019]/20 p-6 focus:outline-none focus:border-[#4A5D4E]"
                  placeholder="Зорилго, төсөв, хугацаа..."
                ></textarea>
              </div>

              <Button variant="primary" size="large" className="w-full">ХҮСЭЛТ ИЛГЭЭХ</Button>
            </form>
          </div>
        </PatternOverlay>
      </div>
    </div>
  );
}
