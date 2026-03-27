import PatternOverlay from './PatternOverlay';

export default function TactileCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <PatternOverlay variant="border" intensity={6}>
      <div className={`bg-[#FDFCF8] text-[#172019] p-10 border border-white/10 ${className}`}>
        {children}
      </div>
    </PatternOverlay>
  );
}