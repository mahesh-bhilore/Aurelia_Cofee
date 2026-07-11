import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { collectionCards } from '@/lib/content';

export function CollectionSection() {
  return (
    <section id="collection" className="border-b border-white/10 px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured collection"
            title="Premium coffees, sculpted for luxury mornings."
            description="A concise edit of roasts chosen for depth, elegance, and extraordinary finish."
          />
          <a href="#contact" className="text-xs font-semibold uppercase tracking-[0.35em] text-gold/80 hover:text-gold transition-colors sm:text-sm">
            Reserve a tasting
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:mt-14">
          {collectionCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2.5 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:rounded-[2rem] sm:p-3"
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-[1.5rem]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-[220px] w-full object-cover transition duration-700 group-hover:scale-110 sm:h-[280px] lg:h-[320px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-pearl/80 backdrop-blur-xl sm:bottom-4 sm:left-4 sm:right-4 sm:px-4 sm:py-2 sm:text-sm">
                  <span>{card.price}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-gold sm:h-4 sm:w-4" />
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-[0.6rem] uppercase tracking-[0.35em] text-gold sm:text-xs">{card.subtitle}</p>
                <h3 className="mt-2 font-display text-xl text-pearl sm:mt-3 sm:text-2xl">{card.title}</h3>
                <p className="mt-2 text-xs leading-6 text-pearl/70 sm:mt-3 sm:text-sm sm:leading-7">{card.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
