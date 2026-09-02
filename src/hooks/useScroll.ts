import { useEffect, useRef, useState } from 'react';

/**
 * Returns the scroll progress of an element through the viewport.
 * 0 when the element enters from the bottom, 1 when it leaves from the top.
 */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId = 0;
    const update = () => {
      rafId = 0;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const total = rect.height + windowHeight;
      const scrolled = windowHeight - rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
    };

    const onScroll = () => {
      if (rafId === 0) rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return { ref, progress };
}

/**
 * Tracks whether the user has scrolled past a threshold (default 40px).
 */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}

/**
 * Parallax offset based on element position in viewport.
 * Returns a value in px to apply as translateY.
 */
export function useParallax<T extends HTMLElement>(speed = 0.3) {
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId = 0;
    const update = () => {
      rafId = 0;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const center = rect.top + rect.height / 2;
      const distance = center - windowHeight / 2;
      setOffset(distance * speed * -1);
    };

    const onScroll = () => {
      if (rafId === 0) rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return { ref, offset };
}

/**
 * Mouse position relative to viewport center, normalized -1 to 1.
 */
export function useMouseParallax() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId = 0;
    const onMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setPos({ x, y });
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return pos;
}
