import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/data/content';
import { useScrolled } from '@/hooks/useScroll';

export function Navbar() {
  const scrolled = useScrolled(60);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-premium ${
          scrolled
            ? 'bg-cream-100/85 backdrop-blur-xl border-b border-espresso-900/8 shadow-[0_1px_30px_rgba(26,20,16,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-premium flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="group flex items-center gap-2"
          >
            <span
              className={`font-display text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-500 ${
                scrolled ? 'text-espresso-900' : 'text-cream-100'
              }`}
            >
              JIEBU
            </span>
            <span
              className={`font-sans text-[10px] lg:text-xs uppercase tracking-[0.25em] transition-colors duration-500 ${
                scrolled ? 'text-espresso-500' : 'text-cream-300'
              }`}
            >
              Coffee
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`link-underline text-sm tracking-wide transition-colors duration-300 ${
                  scrolled ? 'text-espresso-700' : 'text-cream-200'
                } ${
                  activeSection === item.href.slice(1)
                    ? scrolled
                      ? 'text-espresso-900 font-medium'
                      : 'text-cream-50 font-medium'
                    : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick('#menu')}
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium border border-espresso-800/20 text-espresso-800 hover:bg-espresso-800 hover:text-cream-100 transition-all duration-500 ease-premium"
            >
              Menü
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-espresso-900' : 'text-cream-100'}`}
              aria-label="Menüyü aç"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-espresso-950 flex flex-col"
          >
            <div className="container-premium flex items-center justify-between h-20">
              <span className="font-display text-xl font-bold text-cream-100">JIEBU</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-cream-100 p-2"
                aria-label="Menüyü kapat"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left py-4 border-b border-cream-100/10"
                >
                  <span className="font-display text-4xl text-cream-100">{item.label}</span>
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + NAV_ITEMS.length * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => handleNavClick('#menu')}
                className="mt-8 self-start px-8 py-4 bg-cream-100 text-espresso-900 text-sm uppercase tracking-[0.2em] font-medium"
              >
                Menüyü Keşfet
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
