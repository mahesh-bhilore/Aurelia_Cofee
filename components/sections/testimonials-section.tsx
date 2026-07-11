'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '@/lib/content';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4600);
    return () => window.clearInterval(timer);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="border-b border-white/10 px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/8 to-transparent p-8 shadow-luxe backdrop-blur-xl sm:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-gold/90">Testimonials</p>
            <h2 className="mt-3 font-display text-3xl text-pearl sm:text-4xl">The kind of praise one hears in hushed velvet rooms.</h2>
          </div>
          <div className="flex gap-3">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-12 bg-gold' : 'w-2.5 bg-white/20'}`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] border border-white/10 bg-black/30 p-8"
            >
              <Quote className="h-8 w-8 text-gold" />
              <p className="mt-6 text-xl leading-9 text-pearl/80 sm:text-2xl">“{current.quote}”</p>
              <div className="mt-8">
                <p className="font-semibold text-pearl">{current.name}</p>
                <p className="text-sm text-pearl/60">{current.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex flex-col gap-4">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`rounded-[1.5rem] border p-5 backdrop-blur-xl ${index === activeIndex ? 'border-gold/40 bg-gold/10' : 'border-white/10 bg-white/5'}`}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-gold/80">{item.role}</p>
                <p className="mt-3 text-lg text-pearl">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
