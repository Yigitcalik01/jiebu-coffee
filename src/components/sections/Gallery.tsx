import { useRef, useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES } from '@/data/content';

const ease = [0.16, 1, 0.3, 1] as const;

const galleryImages = IMAGES.gallery.map((src, i) => ({
  src,
  caption: ['Interior', 'Latte Art', 'Dessert', 'Atmosphere', 'Espresso', 'Coffee', 'Iced Latte', 'Bubble Tea', 'Mood', 'Preparation'][i] || 'JIEBU',
}));

export function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scrollByAmount = useCallback((amount: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  }, []);

  // Horizontal scroll via vertical wheel
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  // Lightbox keyboard nav
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((p) => (p === null ? p : (p + 1) % galleryImages.length));
      if (e.key === 'ArrowLeft') setLightboxIndex((p) => (p === null ? p : (p - 1 + galleryImages.length) % galleryImages.length));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="relative py-32 md:py-48 bg-espresso-950 overflow-hidden">
      {/* Header */}
      <div className="container-premium mb-16 md:mb-24">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.3em] text-cream-300/60 font-sans block mb-6"
        >
          Gallery
        </motion.span>
        <h2 className="font-display text-section text-cream-50">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1, ease }}
              className="block"
            >
              A Glimpse of JIEBU
            </motion.span>
          </span>
        </h2>
      </div>

      {/* Horizontal scroll gallery */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 pl-6 md:pl-16 lg:pl-24 pr-[20vw]"
      >
        {galleryImages.map((img, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-5%' }}
            transition={{ duration: 0.7, ease, delay: (i % 3) * 0.1 }}
            onClick={() => setLightboxIndex(i)}
            className="group relative flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] aspect-[4/3] overflow-hidden rounded-xl snap-start cursor-pointer"
          >
            <img
              src={img.src}
              alt={img.caption}
              className="h-full w-full object-cover transition-all duration-700 ease-premium group-hover:scale-105 group-hover:brightness-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-espresso-950/20 group-hover:bg-espresso-950/0 transition-all duration-500" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-xs uppercase tracking-[0.2em] text-cream-100 font-sans">
                {img.caption}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Nav arrows */}
      <div className="container-premium mt-8 flex items-center gap-4">
        <button
          onClick={() => scrollByAmount(-400)}
          className="p-3 border border-cream-100/20 text-cream-100 hover:bg-cream-100/10 transition-all duration-300"
          aria-label="Önceki"
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>
        <button
          onClick={() => scrollByAmount(400)}
          className="p-3 border border-cream-100/20 text-cream-100 hover:bg-cream-100/10 transition-all duration-300"
          aria-label="Sonraki"
        >
          <ChevronRight size={20} strokeWidth={1.5} />
        </button>
        <span className="text-xs uppercase tracking-[0.2em] text-cream-300/50 font-sans ml-2">
          Scroll · Drag · Click
        </span>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] bg-espresso-950/95 backdrop-blur-md flex items-center justify-center"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-cream-100 p-2 hover:opacity-70 transition-opacity z-10"
              aria-label="Kapat"
            >
              <X size={28} strokeWidth={1.5} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((p) => (p === null ? p : (p - 1 + galleryImages.length) % galleryImages.length));
              }}
              className="absolute left-4 md:left-8 text-cream-100 p-2 hover:opacity-70 transition-opacity z-10"
              aria-label="Önceki"
            >
              <ChevronLeft size={32} strokeWidth={1.5} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((p) => (p === null ? p : (p + 1) % galleryImages.length));
              }}
              className="absolute right-4 md:right-8 text-cream-100 p-2 hover:opacity-70 transition-opacity z-10"
              aria-label="Sonraki"
            >
              <ChevronRight size={32} strokeWidth={1.5} />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease }}
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].caption}
              className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.2em] text-cream-300/60 font-sans">
              {galleryImages[lightboxIndex].caption} · {lightboxIndex + 1} / {galleryImages.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
