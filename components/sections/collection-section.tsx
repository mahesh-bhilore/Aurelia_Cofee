'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { collectionCards } from '@/lib/content';

export function CollectionSection() {
  return (
    <section id="collection" className="border-b border-white/10 px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured collection"
            title="Premium coffees, sculpted for luxury mornings."
            description="A concise edit of roasts chosen for depth, elegance, and extraordinary finish."
          />
          <a href="#contact" className="text-sm font-semibold uppercase tracking-[0.35em] text-gold/80 hover:text-gold">
            Reserve a tasting
          </a>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {collectionCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.01, rotate: -0.4 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            >
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-pearl/80 backdrop-blur-xl">
                  <span>{card.price}</span>
                  <ArrowUpRight className="h-4 w-4 text-gold" />
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-gold">{card.subtitle}</p>
                <h3 className="mt-4 font-display text-2xl text-pearl">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-pearl/70">{card.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
