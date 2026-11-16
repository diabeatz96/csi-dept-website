'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Pause, Play } from 'lucide-react';
import { campusPhotos } from '@/data/home';

// Rotating campus photos. Fills its parent, so give the parent a size.
export default function CampusCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % campusPhotos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, shouldReduceMotion]);

  const photo = campusPhotos[currentIndex];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Campus photos"
      className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-200 shadow-lg"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={shouldReduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1.2, ease: [0.4, 0, 0.2, 1] as const }}
          className="absolute inset-0"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Always visible: WCAG 2.2.2 requires a way to stop content that moves on its own */}
      <button
        type="button"
        onClick={() => setIsPaused(!isPaused)}
        aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
        className="absolute bottom-4 right-4 z-10 flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white/90 p-2 text-slate-700 shadow-lg transition-all hover:bg-white focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
      >
        {isPaused ? <Play size={18} aria-hidden="true" /> : <Pause size={18} aria-hidden="true" />}
      </button>
    </div>
  );
}
