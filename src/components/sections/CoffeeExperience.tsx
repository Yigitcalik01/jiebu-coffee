import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { IMAGES } from '@/data/content';
import { useParallax } from '@/hooks/useScroll';

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: '4.5★', label: 'Google Rating' },
  { value: '194+', label: 'Google Reviews' },
  { value: 'TAŞUCU', label: 'Mersin' },
];

export function CoffeeExperience() {
  const { ref: bgRef, offset } = useParallax<HTMLDivElement>(0.2);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-espresso-950 grain-overlay">
      {/* Parallax background */}
      <div ref={bgRef} className="absolute inset-0">
        <motion.img
          src={IMAGES.experience}
          alt="Kahve hazırlanması"
          className="h-full w-full object-cover"
          style={{ transform: `translateY(${offset * 0.5}px) scale(1.15)` }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-espresso-950/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-950/60 via-transparent to-espresso-950/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 1.2, ease }}
          className="font-display text-cream-50 leading-[0.9]"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}
        >
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 1, ease }}
              className="block"
            >
              Good Coffee.
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 1, ease, delay: 0.15 }}
              className="block italic text-cream-300/90"
            >
              Good Moments.
            </motion.span>
          </span>
        </motion.h2>

        {/* Stats */}
        <div className="mt-16 md:mt-24 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.3 + i * 0.15 }}
              className="flex flex-col items-center"
            >
              <span className="font-display text-3xl md:text-5xl text-cream-100 mb-2">
                {stat.value.includes('★') ? (
                  <span className="flex items-center gap-2">
                    {stat.value.replace('★', '')}
                    <Star size={20} className="fill-cream-200 text-cream-200" />
                  </span>
                ) : (
                  stat.value
                )}
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-cream-300/70 font-sans">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
