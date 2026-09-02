import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { MENU_DATA } from '@/data/content';

const ease = [0.16, 1, 0.3, 1] as const;

interface MenuModalProps {
  open: boolean;
  onClose: () => void;
}

export function MenuModal({ open, onClose }: MenuModalProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-espresso-950/80 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.5, ease }}
            className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-cream-50 rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-cream-50/95 backdrop-blur-sm px-6 md:px-10 pt-8 pb-6 border-b border-espresso-200/30">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="eyebrow block mb-2">Menü</span>
                  <h3 className="font-display text-3xl md:text-4xl text-espresso-900">JIĒBÚ Menü</h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 text-espresso-600 hover:text-espresso-900 hover:bg-espresso-100 rounded-lg transition-all duration-300"
                  aria-label="Kapat"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>
              <p className="mt-4 text-xs text-espresso-500 font-sans italic leading-relaxed">
                {MENU_DATA.note}
              </p>
            </div>

            {/* Menu categories */}
            <div className="px-6 md:px-10 py-8 space-y-12">
              {MENU_DATA.categories.map((category, ci) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease, delay: 0.1 + ci * 0.1 }}
                >
                  <h4 className="font-display text-xl md:text-2xl text-espresso-800 mb-6 pb-3 border-b border-espresso-200/40">
                    {category.title}
                  </h4>
                  <div className="space-y-5">
                    {category.items.map((item, ii) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, ease, delay: 0.15 + ci * 0.1 + ii * 0.05 }}
                        className="flex items-baseline justify-between gap-4 group"
                      >
                        <div className="flex-grow min-w-0">
                          <span className="font-serif text-lg text-espresso-900 block leading-snug">
                            {item.name}
                          </span>
                          <span className="text-sm text-espresso-500 leading-relaxed block mt-0.5">
                            {item.desc}
                          </span>
                        </div>
                        {/* Dotted leader */}
                        <span className="hidden sm:block flex-shrink-0 flex-grow border-b border-dotted border-espresso-300/50 mb-1.5 mx-2" />
                        <span className="font-sans text-sm font-medium text-espresso-700 flex-shrink-0 tabular-nums">
                          {item.price}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 md:px-10 py-6 border-t border-espresso-200/30 bg-cream-100/50">
              <p className="text-center text-xs uppercase tracking-[0.2em] text-espresso-400 font-sans">
                JIĒBÚ Coffee · Taşucu
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
