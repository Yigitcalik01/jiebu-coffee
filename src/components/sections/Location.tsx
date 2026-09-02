import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { CONTACT } from '@/data/content';

const ease = [0.16, 1, 0.3, 1] as const;

export function Location() {
  return (
    <section id="location" className="relative py-32 md:py-48 bg-cream-50 overflow-hidden">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="eyebrow block mb-6"
            >
              Location
            </motion.span>
            <h2 className="font-display text-section text-espresso-900 mb-10">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 1, ease }}
                  className="block"
                >
                  Find Us
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 1, ease, delay: 0.1 }}
                  className="block italic text-espresso-600"
                >
                  by the Sea.
                </motion.span>
              </span>
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-espresso-500 mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  {CONTACT.addressLines.map((line) => (
                    <span key={line} className="block font-serif text-lg text-espresso-700">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-espresso-500 flex-shrink-0" strokeWidth={1.5} />
                <a
                  href={`tel:${CONTACT.phoneLink}`}
                  className="font-serif text-lg text-espresso-700 hover:text-espresso-900 transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </div>
            </div>

            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-espresso-800 text-cream-100 text-xs uppercase tracking-[0.2em] font-medium hover:bg-espresso-700 transition-all duration-500 ease-premium"
            >
              <span>Yol Tarifi Al</span>
              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-500 ease-premium group-hover:translate-x-2"
              />
            </a>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease }}
            className="relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[5/4] border border-espresso-200/40 shadow-[0_20px_60px_rgba(26,20,16,0.08)]"
          >
            <iframe
              src={CONTACT.embedUrl}
              className="h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JIEBU Coffee Konumu"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
