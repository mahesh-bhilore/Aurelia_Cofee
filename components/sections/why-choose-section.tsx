'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { featureCards } from '@/lib/content';

export function WhyChooseSection() {
  return (
    <section id="why-us" className="border-b border-white/10 px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why choose Aurelia"
          title="An experience shaped by detail, softness, and precision."
          description="From flawless sourcing to intimate service, every touchpoint feels considered, tactile, and quietly indulgent."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-pearl">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-pearl/70">{card.copy}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
