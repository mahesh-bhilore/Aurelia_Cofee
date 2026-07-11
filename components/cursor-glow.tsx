'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export function CursorGlow() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  const fx = useSpring(mx, { stiffness: 200, damping: 28 });
  const fy = useSpring(my, { stiffness: 200, damping: 28 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [mx, my]);

  return (
    <>
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none fixed z-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.12),transparent_70%)]"
        style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
        aria-hidden="true"
      />
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed z-[60] h-2 w-2 rounded-full bg-gold mix-blend-difference"
        style={{ x: fx, y: fy, translateX: '-50%', translateY: '-50%' }}
        aria-hidden="true"
      />
    </>
  );
}
