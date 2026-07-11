'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, PhoneCall } from 'lucide-react';
import { MagneticButton } from '@/components/magnetic-button';
import { contactDetails } from '@/lib/content';

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-luxe backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-gold/90">Contact</p>
          <h2 className="mt-3 font-display text-3xl text-pearl sm:text-4xl">Reserve a table or book your private tasting.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-pearl/70">
            Our lounge welcomes guests for espresso flights, private tastings, and quiet work sessions beneath soft gold light.
          </p>
          <div className="mt-8 space-y-4">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.label} className="flex items-center gap-4 rounded-[1.25rem] border border-white/10 bg-black/25 px-4 py-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-pearl/50">{detail.label}</p>
                    <p className="mt-1 text-sm text-pearl/80">{detail.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <motion.form initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-white/10 bg-black/40 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-pearl/70">
              Name
              <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-pearl outline-none transition focus:border-gold/40" placeholder="Avery Stone" aria-label="Name" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-pearl/70">
              Email
              <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-pearl outline-none transition focus:border-gold/40" placeholder="avery@studio.com" aria-label="Email" />
            </label>
          </div>
          <label className="mt-4 flex flex-col gap-2 text-sm text-pearl/70">
            Preferred experience
            <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-pearl outline-none transition focus:border-gold/40" placeholder="Private tasting for two" aria-label="Preferred experience" />
          </label>
          <label className="mt-4 flex flex-col gap-2 text-sm text-pearl/70">
            Notes
            <textarea className="min-h-[140px] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-pearl outline-none transition focus:border-gold/40" placeholder="Tell us what you’re celebrating..." aria-label="Notes" />
          </label>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton>Request a table</MagneticButton>
            <a href="tel:+4700000000" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-pearl/80 hover:text-gold">
              <PhoneCall className="h-4 w-4" />
              Call us
            </a>
          </div>
          <div className="mt-8 rounded-[1.5rem] border border-gold/20 bg-gold/10 p-4 text-sm leading-7 text-pearl/70">
            <div className="flex items-center gap-2 text-gold">
              <Mail className="h-4 w-4" />
              hello@aureliacoffee.com
            </div>
            <p className="mt-3">We respond within one business day with reservation details and tasting options.</p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
