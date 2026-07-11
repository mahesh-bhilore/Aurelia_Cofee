'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { brewingSteps } from '@/lib/content';

const CARD_WIDTH = 340;
const CARD_GAP   = 24;
const STEP       = CARD_WIDTH + CARD_GAP;

export function BrewingSection() {
  const [active, setActive]   = useState(0);
  const [isDrag, setIsDrag]   = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const x                     = useMotionValue(0);
  const trackRef              = useRef<HTMLDivElement>(null);
  const timerRef              = useRef<ReturnType<typeof setInterval> | null>(null);

  const total    = brewingSteps.length;
  const maxDrag  = -(STEP * (total - 1));

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % total;
        animate(x, -(next * STEP), { type: 'spring', stiffness: 260, damping: 32 });
        return next;
      });
    }, 3000);
  }, [stopTimer, total, x]);

  useEffect(() => {
    if (!isPaused) startTimer();
    else stopTimer();
    return stopTimer;
  }, [isPaused, startTimer, stopTimer]);

  const snapTo = (index: number) => {
    const clamped = Math.max(0, Math.min(total - 1, index));
    setActive(clamped);
    animate(x, -(clamped * STEP), { type: 'spring', stiffness: 260, damping: 32 });
    startTimer();
  };

  const onDragEnd = () => {
    setIsDrag(false);
    setIsPaused(false);
    const current = x.get();
    const nearest = Math.round(-current / STEP);
    snapTo(nearest);
  };

  // Subtle background scale on each card based on distance from active
  const cards = brewingSteps.map((step, i) => {
    const dist = Math.abs(i - active);
    return { step, i, dist };
  });

  return (
    <section id="brewing" className="overflow-hidden border-b border-white/10 px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.45em] text-gold/80">
              Brewing experience
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-pearl sm:text-5xl lg:text-6xl">
              A slow, luminous journey<br />
              <span className="italic text-gold">from bean to cup.</span>
            </h2>
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => snapTo(active - 1)}
              disabled={active === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-pearl/60 transition hover:border-gold/40 hover:bg-gold/10 hover:text-gold disabled:opacity-25 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => snapTo(active + 1)}
              disabled={active === total - 1}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-pearl/60 transition hover:border-gold/40 hover:bg-gold/10 hover:text-gold disabled:opacity-25 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Track */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={trackRef}
            className="flex cursor-grab active:cursor-grabbing"
            style={{ x, gap: CARD_GAP }}
            drag="x"
            dragConstraints={{ left: maxDrag, right: 0 }}
            dragElastic={0.08}
            onDragStart={() => { setIsDrag(true); setIsPaused(true); }}
            onDragEnd={onDragEnd}
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => setIsPaused(false)}
          >
            {cards.map(({ step, i, dist }) => (
              <motion.div
                key={step.title}
                onClick={() => !isDrag && snapTo(i)}
                animate={{
                  scale:   i === active ? 1 : 0.95,
                  opacity: dist === 0 ? 1 : dist === 1 ? 0.65 : 0.35,
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                className="relative flex-shrink-0 select-none overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                style={{ width: CARD_WIDTH, minHeight: 280 }}
              >
                {/* Active glow */}
                {i === active && (
                  <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
                )}

                {/* Step number */}
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition-colors duration-300 ${
                    i === active
                      ? 'border-gold bg-gold/15 text-gold'
                      : 'border-white/15 bg-white/5 text-pearl/40'
                  }`}>
                    0{i + 1}
                  </div>
                  <span className="text-[0.65rem] uppercase tracking-[0.4em] text-gold/60">
                    Crafted sequence
                  </span>
                </div>

                <h3 className={`mt-7 font-display text-2xl transition-colors duration-300 ${
                  i === active ? 'text-pearl' : 'text-pearl/50'
                }`}>
                  {step.title}
                </h3>
                <p className={`mt-4 text-sm leading-8 transition-colors duration-300 ${
                  i === active ? 'text-pearl/70' : 'text-pearl/35'
                }`}>
                  {step.copy}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
                  animate={{ opacity: i === active ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#080808] to-transparent" />
        </div>

        {/* Dot indicators + progress */}
        <div className="mt-8 flex items-center gap-2.5">
          {brewingSteps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => snapTo(i)}
              aria-label={`Go to step ${i + 1}`}
              className="relative h-1.5 overflow-hidden rounded-full bg-white/15 transition-all duration-500"
              style={{ width: i === active ? 40 : 10 }}
            >
              {i === active && (
                <motion.span
                  key={`fill-${active}-${isPaused}`}
                  className="absolute inset-0 rounded-full bg-gold origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isPaused ? undefined : 1 }}
                  transition={{ duration: 3, ease: 'linear' }}
                />
              )}
            </button>
          ))}
          <span className="ml-3 text-xs text-pearl/30 tabular-nums">
            {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>

      </div>
    </section>
  );
}
