import Button from '@/components/ui/Button';
import TactileCard from '@/components/ui/TactileCard';

export default function Cart() {
  return (
    <div className="bg-[#243949] min-h-screen pt-32 px-10">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="heading-serif text-6xl">Cart</h1>

        <div className="mt-16 grid md:grid-cols-12 gap-12">
          {/* Items */}
          <div className="md:col-span-7 space-y-8">
            <TactileCard>
              <div className="flex gap-8">
                <div className="w-32 h-32 bg-[#F5F0E8] flex-shrink-0" />
                <div>
                  <h3 className="heading-serif text-2xl">Mongolian Brand Visual System 2026</h3>
                  <p className="text-[#6F7C72] mt-2">1 × ₮285,000</p>
                  <button className="text-xs text-red-400 mt-6 hover:underline">УСТГАХ</button>
                </div>
              </div>
            </TactileCard>
          </div>

          {/* Summary */}
          <div className="md:col-span-5">
            <TactileCard className="sticky top-28">
              <div className="text-sm tracking-widest">НИЙТ ДҮН</div>
              <div className="text-5xl font-light mt-4">₮285,000</div>
              
              <Button variant="primary" size="large" className="w-full mt-12">
                ЗАХИАЛГА ӨГӨХ
              </Button>
            </TactileCard>
          </div>
        </div>
      </div>
    </div>
  );
}
