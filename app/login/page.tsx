import PatternOverlay from '@/components/ui/PatternOverlay';
import Button from '@/components/ui/Button';

export default function Login() {
  return (
    <div className="min-h-screen bg-[#243949] flex items-center justify-center px-6">
      <PatternOverlay variant="border" intensity={7}>
        <div className="max-w-md w-full bg-[#FDFCF8] text-[#172019] p-16">
          <div className="text-center mb-12">
            <div className="heading-serif text-4xl">Lucy Gray R</div>
            <p className="text-[#4A5D4E] mt-2">Creative AI Studio</p>
          </div>

          <h1 className="text-3xl font-light mb-10 text-center">Нэвтрэх</h1>

          <form className="space-y-8">
            <div>
              <label htmlFor="email" className="block text-xs tracking-widest mb-2">И-МЭЙЛ</label>
              <input id="email" type="email" title="И-мэйл хаяг" placeholder="example@email.com" className="w-full border-b border-[#172019]/30 pb-4 focus:outline-none focus:border-[#4A5D4E]" />
            </div>
            <div>
              <label htmlFor="password" className="block text-xs tracking-widest mb-2">НУУЦ ҮГ</label>
              <input id="password" type="password" title="Нууц үг" placeholder="Нууц үг оруулах" className="w-full border-b border-[#172019]/30 pb-4 focus:outline-none focus:border-[#4A5D4E]" />
            </div>

            <Button variant="primary" size="large" className="w-full mt-8">НЭВТРЭХ</Button>
          </form>

          <div className="text-center mt-12 text-sm">
            <a href="/join" className="text-[#4A5D4E] hover:underline">Бүртгүүлэх</a>
            <span className="mx-4 text-[#6F7C72]">•</span>
            <a href="#" className="text-[#4A5D4E] hover:underline">Нууц үг мартсан уу?</a>
          </div>
        </div>
      </PatternOverlay>
    </div>
  );
}
