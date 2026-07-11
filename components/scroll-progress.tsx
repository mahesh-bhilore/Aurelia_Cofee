'use client';

import { motion, useSpring } from 'framer-motion';
import { useScrollProgress } from '@/hooks/use-scroll-progress';

export function ScrollProgress() {
  const progress = useScrollProgress();
  const springProgress = useSpring(progress, { stiffness: 130, damping: 22 });

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-1 origin-left bg-gradient-to-r from-gold via-[#f5c85e] to-gold"
      style={{ scaleX: springProgress }}
      aria-hidden="true"
    />
  );
}
