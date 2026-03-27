interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  className?: string;
}

export default function Button({ variant = 'primary', size = 'medium', children, className, ...props }: ButtonProps) {
  const base = 'tracking-widest transition-all focus:outline-none';
  const variants = {
    primary: 'bg-[#172019] text-white hover:bg-[#4A5D4E]',
    secondary: 'border border-[#172019]/30 text-[#172019] hover:border-[#4A5D4E]',
  };
  const sizes = {
    small: 'px-4 py-2 text-xs',
    medium: 'px-6 py-3 text-xs',
    large: 'px-8 py-4 text-sm',
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className || ''}`} {...props}>
      {children}
    </button>
  );
}
