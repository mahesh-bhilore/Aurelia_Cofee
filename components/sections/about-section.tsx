import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';

export function AboutSection() {
  return (
    <section id="about" className="border-b border-white/10 px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading
            eyebrow="About Aurelia"
            title="A ritual sculpted in shadow and gold."
            description="From the first roast to the final pour, Aurelia is shaped by quiet precision, sensual textures, and a devotion to the craft of coffee."
          />
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:rounded-[2rem] sm:p-8">
            <p className="text-sm leading-7 text-pearl/70 sm:text-base sm:leading-8">
              We source exceptional beans from mountain-side farms and roast them in intimate batches, allowing every origin to breathe. The result is a tasting experience that feels cinematic, intimate, and deeply personal.
            </p>
            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
              <div className="rounded-xl border border-gold/25 bg-gold/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Promise</p>
                <p className="mt-2 text-xs leading-6 text-pearl/70 sm:text-sm sm:leading-7">Low-intervention roasting that preserves sweetness, body, and aroma.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">The Room</p>
                <p className="mt-2 text-xs leading-6 text-pearl/70 sm:text-sm sm:leading-7">Warm light, hushed sound, and tactile materials that invite a slower pace.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-2 shadow-luxe sm:rounded-[2.5rem] sm:p-3"
        >
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80"
            alt="A luxury coffee bar with warm lighting"
            className="h-[260px] w-full rounded-xl object-cover sm:h-[380px] sm:rounded-[2rem] lg:h-[480px]"
            loading="lazy"
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-[260px] sm:rounded-[1.5rem] sm:p-5">
            <p className="text-[0.6rem] uppercase tracking-[0.35em] text-gold">House signature</p>
            <p className="mt-1.5 text-xs leading-6 text-pearl/70">A velvet espresso crowned with smoke and olive oil notes, served in sculptural ceramic.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
