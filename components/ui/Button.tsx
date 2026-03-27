import React from 'react';

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  className?: string;
}

type ButtonProps =
  | (ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (ButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

export default function Button({ variant = 'primary', size = 'medium', children, className, ...props }: ButtonProps) {
  const base = 'tracking-widest transition-all focus:outline-none inline-block';
  const variants = {
    primary: 'bg-[#172019] text-white hover:bg-[#4A5D4E]',
    secondary: 'border border-[#172019]/30 text-[#172019] hover:border-[#4A5D4E]',
  };
  const sizes = {
    small: 'px-4 py-2 text-xs',
    medium: 'px-6 py-3 text-xs',
    large: 'px-8 py-4 text-sm',
  };

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className || ''}`;

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return <a href={href} className={cls} {...anchorProps}>{children}</a>;
  }

  return (
    <button className={cls} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
