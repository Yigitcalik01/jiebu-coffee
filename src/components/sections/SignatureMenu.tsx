import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SIGNATURES } from '@/data/content';
import { MenuModal } from '@/components/MenuModal';

const ease = [0.16, 1, 0.3, 1] as const;

export function SignatureMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section id="menu" className="relative py-32 md:py-48 bg-cream-50 overflow-hidden">
        <div className="container-premium">
          {/* Header */}
          <div className="text-center mb-20 md:mb-28">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="eyebrow block mb-6"
            >
              Signatures
            </motion.span>
            <h2 className="font-display text-section text-espresso-900">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 1, ease }}
                  className="block"
                >
                  JIEBU'nun favorileri
                </motion.span>
              </span>
            </h2>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {SIGNATURES.map((item, i) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{ duration: 0.8, ease, delay: i * 0.12 }}
                className="group cursor-pointer"
                onClick={() => setMenuOpen(true)}
              >
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-6 bg-espresso-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-premium group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Cursor-follow light effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-espresso-950/40 via-transparent to-transparent" />
                  {/* Label */}
                  <div className="absolute bottom-4 left-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-premium">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-cream-100 font-sans">
                      JIEBU
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-2xl text-espresso-900 mb-2 transition-colors duration-300 group-hover:text-espresso-600">
                  {item.name}
                </h3>
                <p className="font-serif text-base text-espresso-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>

          {/* View all link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16"
          >
            <button
              onClick={() => setMenuOpen(true)}
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-medium text-espresso-800 hover:text-espresso-600 transition-colors duration-300"
            >
              <span className="link-underline">Tüm Menüyü Gör</span>
              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-500 ease-premium group-hover:translate-x-2"
              />
            </button>
          </motion.div>
        </div>
      </section>

      <MenuModal open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
