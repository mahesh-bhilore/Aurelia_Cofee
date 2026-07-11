import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { MagneticButton } from '@/components/magnetic-button';
import { CoffeeModel } from '@/components/coffee-model';
import { heroStats } from '@/lib/content';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10 px-5 pb-16 pt-28 sm:px-10 sm:pt-32 lg:px-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,162,39,0.16),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_30%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

        {/* Text */}
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-3 py-1.5 text-xs text-pearl/70 backdrop-blur-xl sm:px-4 sm:py-2 sm:text-sm">
            <Sparkles className="h-3 w-3 text-gold sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">Crafted for the quiet luxury of the first sip</span>
            <span className="xs:hidden">Quiet luxury · First sip</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-display text-[2.6rem] leading-[1.0] text-pearl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Aurelia Coffee,
            <br />
            <span className="text-gold italic">where velvet<br className="sm:hidden" /> meets ritual.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-7 text-pearl/60 sm:mt-7 sm:text-lg sm:leading-8">
            Discover a dark-luxury coffee house devoted to rare beans, sculptural roasting, and an atmosphere designed for stillness.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
            <MagneticButton href="#collection">Explore Collection</MagneticButton>
            <a href="#contact" className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-pearl/70 hover:text-gold transition-colors sm:text-sm sm:tracking-[0.35em]">
              Book a tasting
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 grid grid-cols-3 gap-3 sm:mt-10 sm:gap-4">
            {heroStats.map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:rounded-2xl sm:p-4">
                <p className="text-lg font-semibold text-gold sm:text-2xl">{item.value}</p>
                <p className="mt-0.5 text-[0.6rem] text-pearl/60 sm:mt-1 sm:text-sm">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* 3D Model */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full"
        >
          <div className="absolute inset-10 rounded-full bg-gold/15 blur-[100px]" />
          <CoffeeModel />

          {/* Floating badges — hidden on small screens */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute left-3 top-4 hidden rounded-full border border-gold/30 bg-black/50 px-3 py-1.5 text-xs text-pearl/70 backdrop-blur-xl sm:block"
          >
            3D · Interactive · Mouse-tracked
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="absolute bottom-6 right-2 hidden max-w-[200px] rounded-[1.5rem] border border-white/10 bg-black/50 p-4 backdrop-blur-2xl sm:block"
          >
            <p className="text-[0.6rem] uppercase tracking-[0.35em] text-gold">Signature ritual</p>
            <p className="mt-2 text-xs leading-6 text-pearl/60">Velvet microfoam crown, warm ceramic, house-made fig syrup finish.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[0.55rem] uppercase tracking-[0.4em] text-pearl/30">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
}
