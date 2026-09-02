import { useRef, type ReactNode, type MouseEvent } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'solid' | 'outline' | 'ghost';
  className?: string;
  strength?: number;
}

export function MagneticButton({
  children,
  onClick,
  variant = 'solid',
  className = '',
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0, 0)';
  };

  const base =
    'group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium transition-all duration-500 ease-premium overflow-hidden';
  const variants = {
    solid: 'bg-espresso-800 text-cream-100 hover:bg-espresso-700',
    outline: 'border border-espresso-800/30 text-espresso-800 hover:border-espresso-800/60',
    ghost: 'text-espresso-700 hover:text-espresso-900',
  };

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2 transition-transform duration-500 ease-premium group-hover:gap-3">
        {children}
      </span>
    </button>
  );
}
