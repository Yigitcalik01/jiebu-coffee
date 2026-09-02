import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { IMAGES } from '@/data/content';
import { useMouseParallax } from '@/hooks/useScroll';

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const mouse = useMouseParallax();

  const scrollToContent = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-espresso-950 grain-overlay">
      {/* Background image with slow zoom + mouse parallax */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease }}
        className="absolute inset-0"
        style={{
          transform: `translate(${mouse.x * -15}px, ${mouse.y * -15}px) scale(1.08)`,
        }}
      >
        <img
          src={IMAGES.hero}
          alt="JIEBU Coffee atmosferi"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-950/40 via-espresso-950/30 to-espresso-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-950/50 via-transparent to-espresso-950/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        {/* Logo reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-cream-300/80 font-sans">
            Taşucu · Mersin
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease, delay: 0.4 }}
          className="font-display text-cream-50 font-medium leading-[0.85] tracking-tight"
          style={{ fontSize: 'clamp(4rem, 14vw, 14rem)' }}
        >
          JIEBU
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease, delay: 0.6 }}
          className="flex items-center gap-4 md:gap-8 mb-10"
        >
          <span className="h-px w-12 md:w-24 bg-cream-300/40" />
          <span
            className="font-display text-cream-200/90 italic"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
          >
            Coffee
          </span>
          <span className="h-px w-12 md:w-24 bg-cream-300/40" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.9 }}
          className="font-serif text-lg md:text-2xl text-cream-200/90 max-w-2xl mb-3 italic"
        >
          Coffee, desserts &amp; moments by the Mediterranean.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1.0 }}
          className="font-sans text-sm md:text-base text-cream-300/70 max-w-xl mb-12"
        >
          Taşucu'nda kahveye ve güzel anlara ayrılmış bir durak.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-4 bg-cream-100 text-espresso-900 text-xs uppercase tracking-[0.2em] font-medium overflow-hidden transition-all duration-500 ease-premium hover:bg-cream-50"
          >
            <span className="relative z-10">Menüyü Keşfet</span>
          </button>
          <button
            onClick={() => document.querySelector('#location')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-10 py-4 border border-cream-100/30 text-cream-100 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-500 ease-premium hover:border-cream-100/70 hover:bg-cream-100/5"
          >
            Konumu Gör
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream-200/60 hover:text-cream-100 transition-colors duration-500"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-sans">Scroll to Discover</span>
        <span className="animate-scroll-indicator">
          <ArrowDown size={16} strokeWidth={1.5} />
        </span>
      </motion.button>
    </section>
  );
}
