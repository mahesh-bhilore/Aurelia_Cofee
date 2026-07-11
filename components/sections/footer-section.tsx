'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, ArrowUpRight } from 'lucide-react';

const socials = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' }
];

export function FooterSection() {
  return (
    <footer className="px-6 pb-16 pt-8 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-luxe backdrop-blur-xl lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-gold/90">Aurelia Coffee</p>
          <h2 className="mt-3 font-display text-3xl text-pearl sm:text-4xl">Stay close to the ritual.</h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-pearl/70">Join our newsletter for first access to new roasts, private tastings, and in-house events.</p>
        </div>
        <div className="flex flex-col gap-4 lg:items-end">
          <div className="flex gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  whileHover={{ y: -4, scale: 1.05 }}
                  href="#"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              );
            })}
          </div>
          <form className="flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="newsletter">
              Email address
            </label>
            <input id="newsletter" className="rounded-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-pearl outline-none focus:border-gold/40" placeholder="Email address" aria-label="Email address" />
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Subscribe
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
          <p className="text-sm text-pearl/60">© 2026 Aurelia Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
