'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Pause, Play, GraduationCap, Users, BookOpen, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// --- Quick Stats Data ---
const quickStats = [
  { icon: Award, value: "ABET", label: "Accredited", color: "text-emerald-600" },
  { icon: GraduationCap, value: "500+", label: "Students", color: "text-blue-600" },
  { icon: Users, value: "15+", label: "Faculty", color: "text-purple-600" },
  { icon: BookOpen, value: "40+", label: "Courses", color: "text-orange-600" },
];


// revolving images for hero section
const heroImages = [
  { src: '/home-hero/csi-home-0.jpg', alt: 'CSI campus building exterior' },
  { src: '/home-hero/csi-home-1.jpg', alt: 'Students walking on CSI campus' },
  { src: '/home-hero/csi-home-2.png', alt: 'CSI computer science students in lab' },
  { src: '/home-hero/csi-home-3.jpg', alt: 'CSI campus green spaces' },
  { src: '/home-hero/csi-home-4.jpg', alt: 'Students studying together' },
  { src: '/home-hero/csi-home-5.jpg', alt: 'CSI library and study areas' },
  { src: '/home-hero/csi-home-6.jpg', alt: 'Campus life at CSI' },
  { src: '/home-hero/csi-home-7.jpg', alt: 'CSI academic buildings' },
  { src: '/home-hero/csi-home-8.jpg', alt: 'Students in classroom' },
  { src: '/home-hero/csi-home-9.jpg', alt: 'CSI technology facilities' },
  { src: '/home-hero/csi-home-11.jpg', alt: 'Campus aerial view' },
  { src: '/home-hero/csi-home-12.jpg', alt: 'Student graduation ceremony' },
  { src: '/home-hero/csi-home-13.jpg', alt: 'Research facilities at CSI' },
  { src: '/home-hero/csi-home-14.jpg', alt: 'CSI campus entrance' },
];

// --- Hero Section Components ---
const HeroSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, shouldReduceMotion]);

  return (
    <section className="relative w-full max-w-[1600px] mx-auto px-4 md:px-6 mb-4 md:mb-6" aria-label="Hero slideshow">
      {/* Main Banner */}
      <div className="relative w-full min-h-[520px] sm:min-h-[480px] md:min-h-[560px] bg-linear-to-r from-[#8AC2EB] to-cyan-600 overflow-hidden shadow-lg rounded-2xl">

        {/* Hero Image */}
        <div className="absolute right-0 top-0 h-full w-full md:w-1/2 lg:w-2/3">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={shouldReduceMotion ? undefined : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 1.2, ease: [0.4, 0, 0.2, 1] }}
              className="relative w-full h-full"
            >
              <Image
                src={heroImages[currentIndex].src}
                alt={heroImages[currentIndex].alt}
                fill
                priority={currentIndex === 0}
                fetchPriority={currentIndex === 0 ? "high" : "auto"}
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover object-center"
                style={{ maskImage: 'linear-gradient(to left, black 30%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.25) 75%, transparent 95%)' }}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-linear-to-l from-transparent via-[#8AC2EB]/15 via-40% to-[#8AC2EB]/40 pointer-events-none" />
        </div>

        {/* Slideshow Controls - Desktop only */}
        <div className="absolute bottom-4 right-4 z-20 hidden md:flex items-center gap-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
            className="p-2 min-w-11 min-h-11 flex items-center justify-center bg-white/90 hover:bg-white text-slate-700 rounded-full shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            {isPaused ? <Play size={18} aria-hidden="true" /> : <Pause size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Floating Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative md:absolute mx-4 -mt-36 sm:-mt-44 md:mt-0 md:mx-0 md:left-8 lg:left-12 md:top-1/2 md:-translate-y-1/2 md:w-[420px] lg:w-[480px] bg-white p-6 md:p-8 shadow-xl z-10 rounded-2xl overflow-hidden"
      >
        <div className="relative">
          {/* Department Label */}
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/csi-blue-logo.png"
              alt="CSI Logo"
              width={36}
              height={36}
              className="h-8 w-auto object-contain"
              aria-hidden="true"
            />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-600">Department of</p>
              <p className="text-sm font-bold text-[#5F6368]">Computer Science</p>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5F6368] mb-3 leading-tight">
            Build Your Future in <span className="text-[#0369A1]">Technology</span>
          </h1>

          <p className="text-slate-900 mb-5 text-sm md:text-base leading-relaxed">
            ABET-accredited programs preparing students for careers in software engineering, AI, cybersecurity, and more.
          </p>

          {/* Quick Stats Row */}
          <div className="grid grid-cols-4 gap-2 mb-6 py-4 border-y border-slate-100">
            {quickStats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <stat.icon size={18} className={`mx-auto mb-1 ${stat.color}`} aria-hidden="true" />
                <div className="text-lg font-bold text-[#5F6368]">{stat.value}</div>
                <div className="text-[10px] text-slate-600 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/undergraduate"
              className="flex-1 bg-[#0369A1] text-white font-bold px-5 py-3 hover:bg-[#025a8a] transition-colors rounded-lg text-center text-sm"
            >
              Explore Programs
            </Link>
            <Link
              href="https://www.csi.cuny.edu/admissions"
              target="_blank"
              className="flex-1 bg-[#5F6368] text-white font-bold px-5 py-3 hover:bg-black transition-colors rounded-lg text-center text-sm"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
