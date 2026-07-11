'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { MagneticButton } from '@/components/magnetic-button';
import { CoffeeModel } from '@/components/coffee-model';
import { heroStats } from '@/lib/content';

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10 px-6 py-24 sm:px-10 lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,162,39,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_24%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-white/5 px-4 py-2 text-sm text-pearl/80 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-gold" />
            Crafted for the quiet luxury of the first sip
          </div>
          <h1 className="font-display text-5xl leading-[0.95] text-pearl sm:text-6xl lg:text-8xl">
            Aurelia Coffee,
            <br />
            <span className="text-gold">where velvet meets ritual.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-pearl/70 sm:text-xl">
            Discover a dark-luxury coffee house devoted to rare beans, sculptural roasting, and an atmosphere designed for stillness.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href="#collection">Explore Collection</MagneticButton>
            <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-pearl/80 hover:text-gold">
              Book a tasting
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-2xl font-semibold text-gold">{item.value}</p>
                <p className="mt-1 text-sm text-pearl/70">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.9 }} className="relative">
          <div className="absolute inset-10 rounded-full bg-gold/15 blur-[140px]" />
          <CoffeeModel />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="absolute left-4 top-6 rounded-full border border-gold/30 bg-black/40 px-4 py-2 text-sm text-pearl/75 backdrop-blur-xl">
            3D coffee capsule · Steam simulation
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }} className="absolute bottom-8 right-2 max-w-[220px] rounded-[1.5rem] border border-white/10 bg-black/45 p-5 backdrop-blur-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Signature ritual</p>
            <p className="mt-3 text-sm leading-7 text-pearl/70">A velvet microfoam crown, warm ceramic, and a house-made fig syrup finish.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
