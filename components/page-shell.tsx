import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { CursorGlow } from '@/components/cursor-glow';
import { ScrollProgress } from '@/components/scroll-progress';
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider';

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Collection', href: '#collection' },
  { label: 'Brewing',    href: '#brewing'    },
  { label: 'Gallery',    href: '#gallery'    },
  { label: 'Contact',    href: '#contact'    },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0b0b0b]/85 backdrop-blur-2xl border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.4)]' : ''}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-10 lg:px-20">

        {/* Logo */}
        <a href="#top" className="font-display text-lg text-pearl hover:text-gold transition-colors duration-300 sm:text-xl">
          Aurelia
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[0.7rem] font-medium uppercase tracking-[0.25em] text-pearl/60 hover:text-pearl transition-colors duration-300"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-gold/40 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-[#0b0b0b] transition-all duration-300"
          >
            Reserve
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-pearl md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-white/8 bg-[#0b0b0b]/95 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col px-5 py-4">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="border-b border-white/5 py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-pearl/70 hover:text-gold transition-colors last:border-0"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-full border border-gold/40 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-[#0b0b0b] transition-all duration-300"
              >
                Reserve a table
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <SmoothScrollProvider />

      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b0b0b]"
          >
            <div className="flex flex-col items-center gap-5 px-6 text-center">
              <div className="h-12 w-12 rounded-full border border-gold/40 border-t-gold animate-[spin_1.2s_linear_infinite] sm:h-16 sm:w-16" />
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.5em] text-gold/80">Aurelia Coffee</p>
                <p className="mt-2 font-display text-xl text-pearl sm:text-2xl">Brewing softness into ritual</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <Nav />
        {children}
      </div>
    </>
  );
}
