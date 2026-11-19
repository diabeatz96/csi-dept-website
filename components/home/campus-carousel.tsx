'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useReducedMotion } from 'framer-motion';
import { Pause, Play } from 'lucide-react';
import { campusPhotos } from '@/data/home';
import { cn } from '@/lib/utils';

// Rotating campus photos. Fills its parent, so give the parent a size.
export default function CampusCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Photos stay mounted once rendered, and the next one is mounted a slide early
  // so it has finished loading before it fades in (otherwise it pops in mid-fade).
  const [mountedUpTo, setMountedUpTo] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % campusPhotos.length);
      setMountedUpTo((prev) => Math.min(prev + 1, campusPhotos.length - 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, shouldReduceMotion]);

  const previousIndex = (currentIndex - 1 + campusPhotos.length) % campusPhotos.length;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Campus photos"
      className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-200 shadow-lg"
    >
      {campusPhotos.slice(0, mountedUpTo + 1).map((photo, index) => {
        const isCurrent = index === currentIndex;
        // The previous photo stays fully visible underneath while the current one fades in on top
        const isPrevious = index === previousIndex;
        return (
          <Image
            key={photo.src}
            src={photo.src}
            alt={isCurrent ? photo.alt : ''}
            aria-hidden={!isCurrent}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={cn(
              'object-cover object-center transition-opacity duration-1200 ease-in-out motion-reduce:transition-none',
              isCurrent ? 'z-10 opacity-100' : isPrevious ? 'opacity-100' : 'opacity-0'
            )}
          />
        );
      })}

      {/* Always visible: WCAG 2.2.2 requires a way to stop content that moves on its own */}
      <button
        type="button"
        onClick={() => setIsPaused(!isPaused)}
        aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
        className="absolute bottom-4 right-4 z-20 flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white/90 p-2 text-slate-700 shadow-lg transition-all hover:bg-white focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
      >
        {isPaused ? <Play size={18} aria-hidden="true" /> : <Pause size={18} aria-hidden="true" />}
      </button>
    </div>
  );
}
