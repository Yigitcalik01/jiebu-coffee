import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { CONTACT } from '@/data/content';

const ease = [0.16, 1, 0.3, 1] as const;

export function ContactCTA() {
  return (
    <section className="relative py-32 md:py-56 bg-espresso-900 overflow-hidden grain-overlay">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-950 via-espresso-900 to-espresso-950" />

      <div className="relative z-10 container-premium text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.3em] text-cream-300/50 font-sans block mb-8"
        >
          Davet
        </motion.span>

        <h2 className="font-display text-cream-50 mb-10">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1.2, ease }}
              className="block"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
            >
              Bir Kahveye Ne Dersin?
            </motion.span>
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="font-serif text-xl md:text-2xl text-cream-200/80 italic max-w-2xl mx-auto mb-16"
        >
          "Taşucu'nda güzel bir kahve, iyi bir tatlı ve keyifli bir mola için seni bekliyoruz."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-10 py-4 bg-cream-100 text-espresso-900 text-xs uppercase tracking-[0.2em] font-medium hover:bg-cream-50 transition-all duration-500 ease-premium"
          >
            Menüyü Keşfet
          </button>
          <a
            href={CONTACT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-10 py-4 border border-cream-100/30 text-cream-100 text-xs uppercase tracking-[0.2em] font-medium hover:border-cream-100/60 hover:bg-cream-100/5 transition-all duration-500 ease-premium"
          >
            <MapPin size={16} strokeWidth={1.5} />
            Konumu Aç
          </a>
          <a
            href={`tel:${CONTACT.phoneLink}`}
            className="group inline-flex items-center gap-2 px-10 py-4 text-cream-200 text-xs uppercase tracking-[0.2em] font-medium hover:text-cream-50 transition-all duration-500"
          >
            <Phone size={16} strokeWidth={1.5} />
            {CONTACT.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-espresso-950 text-cream-200 py-20">
      <div className="container-premium">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-display text-2xl font-bold text-cream-100">JIEBU</span>
              <span className="text-xs uppercase tracking-[0.25em] text-cream-300/60">Coffee</span>
            </div>
            <p className="font-serif text-base text-cream-300/70 italic">
              Taşucu / Silifke / Mersin
            </p>
          </div>

          {/* Nav */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-cream-300/40 font-sans block mb-6">
              Navigasyon
            </span>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Ana Sayfa', href: '#hero' },
                { label: 'Hakkımızda', href: '#about' },
                { label: 'Menü', href: '#menu' },
                { label: 'Galeri', href: '#gallery' },
                { label: 'Yorumlar', href: '#reviews' },
                { label: 'İletişim', href: '#location' },
              ].map((item) => (
                <button
                  key={item.href}
                  onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-sm text-cream-300/70 hover:text-cream-100 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-cream-300/40 font-sans block mb-6">
              Sosyal
            </span>
            <div className="flex flex-col gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream-300/70 hover:text-cream-100 transition-colors duration-300 link-underline w-fit"
              >
                Instagram
              </a>
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream-300/70 hover:text-cream-100 transition-colors duration-300 link-underline w-fit"
              >
                Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-cream-100/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-300/50 font-sans">
            © 2026 JIEBU Coffee. All rights reserved.
          </p>
          <p className="text-xs text-cream-300/40 font-sans">
            Taşucu · İsmet İnönü Cd. No: 3/I · 33960 Silifke / Mersin
          </p>
        </div>
      </div>
    </footer>
  );
}
