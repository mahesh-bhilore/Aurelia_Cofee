'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';

export function AboutSection() {
  return (
    <section id="about" className="border-b border-white/10 px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8 }}>
          <SectionHeading
            eyebrow="About Aurelia"
            title="A ritual sculpted in shadow and gold."
            description="From the first roast to the final pour, Aurelia is shaped by quiet precision, sensual textures, and a devotion to the craft of coffee."
          />
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <p className="text-lg leading-8 text-pearl/70">
              We source exceptional beans from mountain-side farms and roast them in intimate batches, allowing every origin to breathe. The result is a tasting experience that feels cinematic, intimate, and deeply personal.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gold/25 bg-gold/10 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Our Promise</p>
                <p className="mt-2 text-sm leading-7 text-pearl/70">Low-intervention roasting that preserves sweetness, body, and aroma.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">The Room</p>
                <p className="mt-2 text-sm leading-7 text-pearl/70">Warm light, hushed sound, and tactile materials that invite a slower pace.</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8 }} className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-3 shadow-luxe">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80"
            alt="A luxury coffee bar with warm lighting"
            className="h-[480px] w-full rounded-[2rem] object-cover"
          />
          <div className="absolute bottom-8 left-8 max-w-[280px] rounded-[1.5rem] border border-white/10 bg-black/55 p-5 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-gold">House signature</p>
            <p className="mt-2 text-sm leading-7 text-pearl/70">A velvet espresso crowned with smoke and olive oil notes, served in sculptural ceramic.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
