import PatternOverlay from '@/components/ui/PatternOverlay';

export default function QA() {
  return (
    <div className="bg-[#243949] min-h-screen pt-32 px-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="heading-serif text-7xl mb-6">Q&A</h1>
        <p className="text-[#4A5D4E] text-xl mb-16">Түгээмэл асуултууд</p>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-medium mb-4">Анхан шатны хүн оролцож болох уу?</h3>
            <p className="text-[#6F7C72]">Тийм, анхан шатнаас эхлэн дагаж болно. Бид бүх урсгалыг практик байдлаар заана.</p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Хичээлд ямар програм ашиглах вэ?</h3>
            <p className="text-[#6F7C72]">Midjourney, NanoBanana Pro, Photoshop голчлон ашиглана. ChatGPT чухал.</p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Оролцогчдын суваг хэрхэн ажиллах вэ?</h3>
            <p className="text-[#6F7C72]">Хичээлийн хугацаанд зөвхөн announcement болон Q&A суваг ажиллана. Байнгын support биш.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
