import { motion } from 'framer-motion';
import { Mail, PhoneCall } from 'lucide-react';
import { MagneticButton } from '@/components/magnetic-button';
import { contactDetails } from '@/lib/content';

export function ContactSection() {
  return (
    <section id="contact" className="px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-luxe backdrop-blur-xl sm:gap-8 sm:rounded-[2.5rem] sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">

        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-gold/90">Contact</p>
          <h2 className="mt-2 font-display text-2xl text-pearl sm:mt-3 sm:text-3xl lg:text-4xl">Reserve a table or book your private tasting.</h2>
          <p className="mt-4 text-sm leading-7 text-pearl/70 sm:mt-5 sm:text-base sm:leading-8">
            Our lounge welcomes guests for espresso flights, private tastings, and quiet work sessions beneath soft gold light.
          </p>
          <div className="mt-5 space-y-3 sm:mt-7 sm:space-y-4">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/25 px-3 py-3 sm:gap-4 sm:rounded-[1.25rem] sm:px-4 sm:py-4">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold sm:h-11 sm:w-11">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="text-[0.6rem] uppercase tracking-[0.3em] text-pearl/50">{detail.label}</p>
                    <p className="mt-0.5 text-xs text-pearl/80 sm:mt-1 sm:text-sm">{detail.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="rounded-xl border border-white/10 bg-black/40 p-5 sm:rounded-[2rem] sm:p-8"
        >
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            <label className="flex flex-col gap-1.5 text-xs text-pearl/70 sm:gap-2">
              Name
              <input className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-pearl outline-none transition focus:border-gold/40 sm:rounded-2xl sm:px-4 sm:py-3" placeholder="Avery Stone" aria-label="Name" />
            </label>
            <label className="flex flex-col gap-1.5 text-xs text-pearl/70 sm:gap-2">
              Email
              <input className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-pearl outline-none transition focus:border-gold/40 sm:rounded-2xl sm:px-4 sm:py-3" placeholder="avery@studio.com" aria-label="Email" />
            </label>
          </div>
          <label className="mt-3 flex flex-col gap-1.5 text-xs text-pearl/70 sm:mt-4 sm:gap-2">
            Preferred experience
            <input className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-pearl outline-none transition focus:border-gold/40 sm:rounded-2xl sm:px-4 sm:py-3" placeholder="Private tasting for two" aria-label="Preferred experience" />
          </label>
          <label className="mt-3 flex flex-col gap-1.5 text-xs text-pearl/70 sm:mt-4 sm:gap-2">
            Notes
            <textarea className="min-h-[110px] w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-pearl outline-none transition focus:border-gold/40 sm:min-h-[140px] sm:rounded-2xl sm:px-4 sm:py-3" placeholder="Tell us what you're celebrating..." aria-label="Notes" />
          </label>
          <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-7 sm:gap-4">
            <MagneticButton>Request a table</MagneticButton>
            <a href="tel:+4700000000" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-pearl/70 hover:text-gold transition-colors sm:tracking-[0.35em]">
              <PhoneCall className="h-3.5 w-3.5" />
              Call us
            </a>
          </div>
          <div className="mt-5 rounded-xl border border-gold/20 bg-gold/10 p-3 sm:mt-7 sm:rounded-[1.5rem] sm:p-4">
            <div className="flex items-center gap-2 text-xs text-gold">
              <Mail className="h-3.5 w-3.5" />
              hello@aureliacoffee.com
            </div>
            <p className="mt-2 text-xs leading-6 text-pearl/70">We respond within one business day with reservation details and tasting options.</p>
          </div>
        </motion.form>

      </div>
    </section>
  );
}
