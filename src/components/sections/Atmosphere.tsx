import { motion } from 'framer-motion';
import { IMAGES } from '@/data/content';
import { useParallax } from '@/hooks/useScroll';

const ease = [0.16, 1, 0.3, 1] as const;

const gallery = [
  { src: IMAGES.atmosphere.interior, label: 'Interior', span: 'row-span-2', speed: 0.1 },
  { src: IMAGES.atmosphere.coffee, label: 'Coffee', span: '', speed: 0.2 },
  { src: IMAGES.atmosphere.dessert, label: 'Dessert', span: '', speed: 0.15 },
  { src: IMAGES.atmosphere.view, label: 'View', span: 'row-span-2', speed: 0.18 },
  { src: IMAGES.atmosphere.customers, label: 'Atmosphere', span: '', speed: 0.12 },
  { src: IMAGES.atmosphere.barista, label: 'Barista', span: '', speed: 0.22 },
];

function GalleryItem({
  src,
  label,
  span,
  speed,
  delay,
}: {
  src: string;
  label: string;
  span: string;
  speed: number;
  delay: number;
}) {
  const { ref, offset } = useParallax<HTMLDivElement>(speed);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.9, ease, delay }}
      className={`group relative overflow-hidden rounded-xl ${span} min-h-[280px] bg-espresso-100`}
    >
      <div ref={ref} className="h-full w-full">
        <img
          src={src}
          alt={label}
          className="h-full w-full object-cover transition-transform duration-[1.5s] ease-premium group-hover:scale-110"
          style={{ transform: `translateY(${offset * 0.3}px)` }}
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-espresso-950/0 group-hover:bg-espresso-950/30 transition-all duration-500" />
      <div className="absolute bottom-4 left-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-premium">
        <span className="text-[10px] uppercase tracking-[0.3em] text-cream-100 font-sans">
          JIEBU · {label}
        </span>
      </div>
    </motion.div>
  );
}

export function Atmosphere() {
  return (
    <section className="relative py-32 md:py-48 bg-cream-100 overflow-hidden">
      <div className="container-premium">
        {/* Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="eyebrow block mb-6"
          >
            Atmosfer
          </motion.span>
          <h2 className="font-display text-section text-espresso-900 mb-8">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 1, ease }}
                className="block"
              >
                Burada Acele Yok.
              </motion.span>
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-xl md:text-2xl text-espresso-600 leading-relaxed italic max-w-2xl"
          >
            "Bir kahve için uğra, manzaraya dal, arkadaşlarınla sohbet et veya sadece kendine biraz zaman ayır."
          </motion.p>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[repeat(4,minmax(200px,1fr))] gap-4 md:gap-6 auto-rows-[minmax(200px,1fr)]">
          {gallery.map((item, i) => (
            <GalleryItem key={i} {...item} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
