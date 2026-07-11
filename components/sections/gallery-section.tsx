import { motion } from 'framer-motion';
import { galleryImages } from '@/lib/content';

export function GallerySection() {
  return (
    <section id="gallery" className="border-b border-white/10 px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-gold/90">Gallery</p>
            <h2 className="mt-2 font-display text-2xl text-pearl sm:mt-3 sm:text-3xl lg:text-4xl">A space designed with velvet shadows and polished light.</h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-pearl/60 lg:max-w-sm">Each frame captures the hush of the lounge, the glow of the bar, and the elegance of a slow pour.</p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 sm:gap-5 xl:columns-3">
          {galleryImages.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              whileHover={{ scale: 1.02 }}
              className="group relative mb-4 overflow-hidden rounded-xl border border-white/10 sm:mb-5 sm:rounded-[2rem]"
            >
              <img
                src={src}
                alt="Aurelia coffee interior or coffee ritual"
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
