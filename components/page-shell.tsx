'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CursorGlow } from '@/components/cursor-glow';
import { ScrollProgress } from '@/components/scroll-progress';
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider';

export function PageShell({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <SmoothScrollProvider />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.7 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ebony"
          >
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="h-16 w-16 rounded-full border border-gold/40 border-t-gold animate-[spin_1.2s_linear_infinite]" />
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.5em] text-gold/80">Aurelia Coffee</p>
                <p className="mt-2 font-display text-2xl text-pearl">Brewing softness into ritual</p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="relative z-10">{children}</div>
    </>
  );
}
