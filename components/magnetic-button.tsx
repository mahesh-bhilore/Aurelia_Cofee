'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function MagneticButton({ children, className = '', href }: MagneticButtonProps) {
  const ref  = useRef<HTMLButtonElement>(null);
  const mx   = useMotionValue(0);
  const my   = useMotionValue(0);
  const sx   = useSpring(mx, { stiffness: 180, damping: 18 });
  const sy   = useSpring(my, { stiffness: 180, damping: 18 });

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left - rect.width  / 2) * 0.35);
    my.set((e.clientY - rect.top  - rect.height / 2) * 0.35);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const btn = (
    <motion.button
      ref={ref}
      type="button"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      whileHover={{ scale: 1.04, boxShadow: '0 16px 48px rgba(201,162,39,0.28)' }}
      whileTap={{ scale: 0.97 }}
      className={`relative overflow-hidden rounded-full border border-gold/50 bg-gradient-to-r from-[#c9a227] to-[#e0c050] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.35em] text-[#080808] transition-shadow duration-300 ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {/* Shimmer sweep */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 hover:translate-x-full" />
    </motion.button>
  );

  return href ? <a href={href}>{btn}</a> : btn;
}
