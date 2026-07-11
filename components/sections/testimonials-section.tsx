import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '@/lib/content';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((c) => (c + 1) % testimonials.length);
    }, 4600);
    return () => window.clearInterval(timer);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="border-b border-white/10 px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-transparent p-5 shadow-luxe backdrop-blur-xl sm:rounded-[2.5rem] sm:p-8 lg:p-12">

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-gold/90">Testimonials</p>
            <h2 className="mt-2 font-display text-2xl text-pearl sm:mt-3 sm:text-3xl lg:text-4xl">The kind of praise one hears in hushed velvet rooms.</h2>
          </div>
          <div className="flex gap-2.5">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-10 bg-gold' : 'w-2 bg-white/20'}`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45 }}
              className="rounded-xl border border-white/10 bg-black/30 p-5 sm:rounded-[2rem] sm:p-8"
            >
              <Quote className="h-6 w-6 text-gold sm:h-8 sm:w-8" />
              <p className="mt-4 font-display text-base leading-8 text-pearl/80 sm:mt-6 sm:text-xl sm:leading-9 lg:text-2xl">"{current.quote}"</p>
              <div className="mt-5 sm:mt-8">
                <p className="text-sm font-semibold text-pearl">{current.name}</p>
                <p className="text-xs text-pearl/60">{current.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-row gap-3 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
            {testimonials.map((item, index) => (
              <motion.button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.02 }}
                className={`min-w-[160px] flex-shrink-0 rounded-xl border p-4 text-left backdrop-blur-xl transition-all duration-300 sm:min-w-[180px] lg:min-w-0 lg:rounded-[1.5rem] lg:p-5 ${
                  index === activeIndex ? 'border-gold/40 bg-gold/10' : 'border-white/10 bg-white/5'
                }`}
              >
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-gold/80">{item.role}</p>
                <p className="mt-2 text-sm text-pearl lg:text-base">{item.name}</p>
              </motion.button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
