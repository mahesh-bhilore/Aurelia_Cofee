import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { brewingSteps } from '@/lib/content';

function getCardWidth() {
  if (typeof window === 'undefined') return 300;
  if (window.innerWidth < 480) return Math.min(window.innerWidth - 48, 300);
  if (window.innerWidth < 768) return 320;
  return 340;
}

export function BrewingSection() {
  const [cardWidth, setCardWidth] = useState(getCardWidth);
  const CARD_GAP = 16;
  const STEP     = cardWidth + CARD_GAP;

  const [active, setActive]     = useState(0);
  const [isDrag, setIsDrag]     = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const x        = useMotionValue(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total    = brewingSteps.length;
  const maxDrag  = -(STEP * (total - 1));

  useEffect(() => {
    const onResize = () => {
      const w = getCardWidth();
      setCardWidth(w);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

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
  }, [stopTimer, total, x, STEP]);

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
    const nearest = Math.round(-x.get() / STEP);
    snapTo(nearest);
  };

  const cards = brewingSteps.map((step, i) => ({ step, i, dist: Math.abs(i - active) }));

  return (
    <section id="brewing" className="overflow-hidden border-b border-white/10 px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-gold/80">Brewing experience</p>
            <h2 className="mt-2 font-display text-3xl leading-tight text-pearl sm:mt-3 sm:text-4xl lg:text-5xl xl:text-6xl">
              A slow, luminous journey<br />
              <span className="italic text-gold">from bean to cup.</span>
            </h2>
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => snapTo(active - 1)}
              disabled={active === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-pearl/60 transition hover:border-gold/40 hover:bg-gold/10 hover:text-gold disabled:opacity-25 disabled:cursor-not-allowed sm:h-11 sm:w-11"
              aria-label="Previous"
            >
              <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </button>
            <button
              type="button"
              onClick={() => snapTo(active + 1)}
              disabled={active === total - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-pearl/60 transition hover:border-gold/40 hover:bg-gold/10 hover:text-gold disabled:opacity-25 disabled:cursor-not-allowed sm:h-11 sm:w-11"
              aria-label="Next"
            >
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </button>
          </div>
        </div>

        {/* Track */}
        <div className="relative overflow-hidden">
          <motion.div
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
                  opacity: dist === 0 ? 1 : dist === 1 ? 0.6 : 0.3,
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                className="relative flex-shrink-0 select-none overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:rounded-[2rem] sm:p-8"
                style={{ width: cardWidth, minHeight: 240 }}
              >
                {i === active && (
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/10 via-transparent to-transparent sm:rounded-[2rem]" />
                )}

                <div className="flex items-center gap-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-semibold transition-colors duration-300 sm:h-10 sm:w-10 sm:text-sm ${
                    i === active ? 'border-gold bg-gold/15 text-gold' : 'border-white/15 bg-white/5 text-pearl/40'
                  }`}>
                    0{i + 1}
                  </div>
                  <span className="text-[0.6rem] uppercase tracking-[0.4em] text-gold/60">Crafted sequence</span>
                </div>

                <h3 className={`mt-5 font-display text-xl transition-colors duration-300 sm:mt-7 sm:text-2xl ${i === active ? 'text-pearl' : 'text-pearl/50'}`}>
                  {step.title}
                </h3>
                <p className={`mt-3 text-xs leading-7 transition-colors duration-300 sm:text-sm sm:leading-8 ${i === active ? 'text-pearl/70' : 'text-pearl/35'}`}>
                  {step.copy}
                </p>

                <motion.div
                  className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent sm:left-8 sm:right-8"
                  animate={{ opacity: i === active ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </motion.div>

          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0b0b0b] to-transparent sm:w-32" />
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center gap-2 sm:mt-8 sm:gap-2.5">
          {brewingSteps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => snapTo(i)}
              aria-label={`Go to step ${i + 1}`}
              className="relative h-1.5 overflow-hidden rounded-full bg-white/15 transition-all duration-500"
              style={{ width: i === active ? 36 : 8 }}
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
          <span className="ml-2 text-xs text-pearl/30 tabular-nums">
            {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>

      </div>
    </section>
  );
}
