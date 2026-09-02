import { motion } from 'framer-motion';
import { IMAGES } from '@/data/content';
import { useParallax } from '@/hooks/useScroll';

const ease = [0.16, 1, 0.3, 1] as const;

const introText =
  "JIĒBÚ Coffee, Taşucu'nun kendine özgü atmosferinde kaliteli kahve, tatlılar ve keyifli anlar için tasarlanmış bir buluşma noktası.";

function WordReveal({ text, className }: { text: string; className?: string }) {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease, delay: i * 0.04 }}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function BrandIntro() {
  const { ref: imgRef, offset } = useParallax<HTMLDivElement>(0.15);

  return (
    <section id="about" className="relative py-32 md:py-48 bg-cream-100 overflow-hidden">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text side */}
          <div className="order-2 lg:order-1">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="eyebrow block mb-8"
            >
              Hakkımızda
            </motion.span>

            <h2 className="font-display text-espresso-900 mb-10">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 1, ease }}
                  className="block text-display"
                >
                  Kahveden
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 1, ease, delay: 0.1 }}
                  className="block text-display italic text-espresso-600"
                >
                  Daha Fazlası.
                </motion.span>
              </span>
            </h2>

            <p className="font-serif text-xl md:text-2xl leading-relaxed text-espresso-700 max-w-lg">
              <WordReveal text={introText} />
            </p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease, delay: 0.4 }}
              className="mt-12 h-px w-32 origin-left bg-espresso-400"
            />
          </div>

          {/* Image side */}
          <div className="order-1 lg:order-2">
            <div
              ref={imgRef}
              className="relative overflow-hidden rounded-2xl aspect-[4/5] group"
            >
              <motion.img
                src={IMAGES.brandIntro}
                alt="JIEBU Coffee iç mekan"
                className="h-full w-full object-cover transition-transform duration-[1.5s] ease-premium group-hover:scale-105"
                style={{ transform: `translateY(${offset}px)` }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/20 to-transparent" />
            </div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block mt-4 text-xs uppercase tracking-[0.2em] text-espresso-400 font-sans"
            >
              — Taşucu, Silifke
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}
