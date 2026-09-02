import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS } from '@/data/content';

const ease = [0.16, 1, 0.3, 1] as const;

export function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [perView, setPerView] = useState(3);

  // Responsive cards per view
  useEffect(() => {
    const updatePerView = () => {
      if (window.innerWidth >= 1024) setPerView(3);
      else if (window.innerWidth >= 640) setPerView(2);
      else setPerView(1);
    };
    updatePerView();
    window.addEventListener('resize', updatePerView);
    return () => window.removeEventListener('resize', updatePerView);
  }, []);

  const maxIndex = Math.max(0, REVIEWS.length - perView);

  // Clamp index when perView changes
  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const next = useCallback(() => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [paused, next]);

  const itemWidth = 100 / perView;

  return (
    <section
      id="reviews"
      className="relative py-32 md:py-48 bg-cream-100 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-premium">
        {/* Header with rating */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="eyebrow block mb-6"
            >
              Testimonials
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
                  What People Say
                </motion.span>
              </span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  size={20}
                  className={s <= 4 ? 'fill-espresso-600 text-espresso-600' : 'fill-espresso-300 text-espresso-300'}
                />
              ))}
            </div>
            <div className="border-l border-espresso-300/40 pl-6">
              <span className="font-display text-3xl text-espresso-900 block">4.5 / 5</span>
              <span className="text-xs uppercase tracking-[0.2em] text-espresso-500 font-sans">194 Google Reviews</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carousel */}
      <div className="container-premium">
        <div className="relative">
          {/* Track */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${index * itemWidth}%` }}
              transition={{ duration: 0.7, ease }}
            >
              {REVIEWS.map((review, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-3 md:px-4"
                  style={{ width: `${itemWidth}%` }}
                >
                  <div className="bg-cream-50 border border-espresso-200/40 rounded-2xl p-8 md:p-10 h-full flex flex-col">
                    <Quote size={28} className="text-espresso-300 mb-6 flex-shrink-0" strokeWidth={1} />
                    <p className="font-serif text-lg md:text-xl lg:text-[1.35rem] text-espresso-800 leading-[1.7] mb-8 italic flex-grow">
                      "{review.text}"
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-espresso-200/30">
                      <div>
                        <span className="block font-sans font-medium text-espresso-900 text-sm">{review.author}</span>
                        <span className="text-xs text-espresso-500">{review.role}</span>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star
                            key={s}
                            size={13}
                            className={s < review.rating ? 'fill-espresso-600 text-espresso-600' : 'fill-espresso-200 text-espresso-200'}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center justify-between mt-10">
            {/* Dots */}
            <div className="flex items-center gap-2.5">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? 'w-8 bg-espresso-700' : 'w-1.5 bg-espresso-300 hover:bg-espresso-400'
                  }`}
                  aria-label={`Sayfa ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="p-3 border border-espresso-300/40 text-espresso-700 hover:bg-espresso-800 hover:text-cream-100 hover:border-espresso-800 transition-all duration-500 ease-premium"
                aria-label="Önceki yorumlar"
              >
                <ChevronLeft size={18} strokeWidth={1.5} />
              </button>
              <button
                onClick={next}
                className="p-3 border border-espresso-300/40 text-espresso-700 hover:bg-espresso-800 hover:text-cream-100 hover:border-espresso-800 transition-all duration-500 ease-premium"
                aria-label="Sonraki yorumlar"
              >
                <ChevronRight size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
