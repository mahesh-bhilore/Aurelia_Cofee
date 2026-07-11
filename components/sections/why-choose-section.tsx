import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { featureCards } from '@/lib/content';

export function WhyChooseSection() {
  return (
    <section id="why-us" className="border-b border-white/10 px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why choose Aurelia"
          title="An experience shaped by detail, softness, and precision."
          description="From flawless sourcing to intimate service, every touchpoint feels considered, tactile, and quietly indulgent."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:gap-6 xl:grid-cols-4">
          {featureCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:rounded-[2rem] sm:p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold sm:h-12 sm:w-12">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl text-pearl sm:mt-6 sm:text-2xl">{card.title}</h3>
                <p className="mt-2 text-xs leading-6 text-pearl/70 sm:mt-3 sm:text-sm sm:leading-7">{card.copy}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
