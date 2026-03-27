'use client';

interface PatternOverlayProps {
  variant?: 'hero' | 'image' | 'border' | 'accent' | 'subtle' | 'section';
  intensity?: number;
  children?: React.ReactNode;
  className?: string;
}

export default function PatternOverlay({
  variant = 'subtle',
  children,
  className,
}: PatternOverlayProps) {
  return (
    <div
      className={`relative overflow-hidden isolate ${className || ''}`}
      data-po-variant={variant}
    >
      <div className="po-layer1" />
      <div className="po-layer2" />
      <div className="po-layer3" />
      <div className="relative z-50">{children}</div>
    </div>
  );
}
