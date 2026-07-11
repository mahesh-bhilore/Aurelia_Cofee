import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, ArrowUpRight } from 'lucide-react';

const socials = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Facebook,  label: 'Facebook'  },
  { icon: Twitter,   label: 'Twitter'   },
];

export function FooterSection() {
  return (
    <footer className="px-5 pb-10 pt-6 sm:px-10 sm:pb-14 sm:pt-8 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-luxe backdrop-blur-xl sm:rounded-[2.5rem] sm:p-8 lg:flex-row lg:items-end lg:justify-between lg:p-12">

        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-gold/90">Aurelia Coffee</p>
          <h2 className="mt-2 font-display text-2xl text-pearl sm:mt-3 sm:text-3xl lg:text-4xl">Stay close to the ritual.</h2>
          <p className="mt-3 max-w-sm text-sm leading-7 text-pearl/60">Join our newsletter for first access to new roasts, private tastings, and in-house events.</p>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <div className="flex gap-2.5">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  whileHover={{ y: -4, scale: 1.08 }}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold transition-colors hover:bg-gold/20 sm:h-11 sm:w-11"
                >
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </motion.a>
              );
            })}
          </div>

          <form className="flex w-full flex-col gap-2.5 sm:flex-row sm:w-auto">
            <label className="sr-only" htmlFor="newsletter">Email address</label>
            <input
              id="newsletter"
              className="w-full rounded-full border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-pearl outline-none focus:border-gold/40 transition-colors sm:w-56 sm:py-3"
              placeholder="Email address"
            />
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-gold hover:bg-gold/20 transition-colors sm:py-3"
            >
              Subscribe
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </form>

          <p className="text-xs text-pearl/40">© 2026 Aurelia Coffee. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
