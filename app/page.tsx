'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Pause,
  Play,
  GraduationCap,
  Users,
  BookOpen,
  Award,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Clock,
  Calendar,
} from 'lucide-react';
import { About3 } from '@/components/ui/about-3';
import { LinkPreview } from '@/components/ui/link-preview';
import CSIProgramsPage from '@/components/csi-program-page';
import DepartmentHeadSection from '@/components/deparment-head';
import DepartmentNewsSection from '@/components/news';
import Link from 'next/link';
import Image from 'next/image';

// --- Quick Stats Data ---
const quickStats = [
  { icon: Award, value: "ABET", label: "Accredited", color: "text-emerald-600" },
  { icon: GraduationCap, value: "500+", label: "Students", color: "text-blue-600" },
  { icon: Users, value: "15+", label: "Faculty", color: "text-purple-600" },
  { icon: BookOpen, value: "40+", label: "Courses", color: "text-orange-600" },
];

// --- Program Highlights ---
const programHighlights = [
  {
    title: "Bachelor of Science",
    subtitle: "in Computer Science",
    description: "ABET-accredited program with specializations in Game Development, Security, HPC, and Data Science.",
    href: "/undergraduate#bs-computer-science",
    badge: "Undergraduate",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop",
    color: "from-blue-600 to-cyan-500",
    stats: { duration: "4 Years", credits: "120 Credits" },
    highlights: ["ABET Accredited", "4 Specializations", "Internship Ready"],
  },
  {
    title: "Master of Science",
    subtitle: "in Computer Science",
    description: "Advanced study with tracks in AI, Cloud Computing, and Cybersecurity.",
    href: "/graduate#ms-computer-science",
    badge: "Graduate",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop",
    color: "from-purple-600 to-pink-500",
    stats: { duration: "2 Years", credits: "30 Credits" },
    highlights: ["3 Specializations", "Research Focus", "Industry Partners"],
  },
  {
    title: "Ph.D. Program",
    subtitle: "via CUNY Graduate Center",
    description: "Research-focused doctoral program in partnership with the CUNY Graduate Center.",
    href: "/graduate#phd-computer-science",
    badge: "Doctoral",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop",
    color: "from-amber-500 to-orange-600",
    stats: { duration: "4-5 Years", credits: "Research" },
    highlights: ["CUNY Partnership", "Faculty Mentorship", "Publication Support"],
  },
];

// --- Key Differentiators ---
const whyChooseUs = [
  "ABET-accredited BS in Computer Science",
  "Small class sizes with personalized attention",
  "Hands-on research opportunities with faculty",
  "95% job placement rate for graduates",
  "Affordable CUNY tuition rates",
  "Located on NYC's largest campus (204 acres)",
];

// --- Components ---

const HeroSection = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length, isPaused, shouldReduceMotion]);

  return (
    <section className="relative w-full max-w-[1600px] mx-auto px-4 md:px-6 mb-6" aria-label="Hero slideshow">
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
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#8AC2EB]/15 via-40% to-[#8AC2EB]/40 pointer-events-none" />
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
              alt="CUNY College of Staten Island logo"
              width={36}
              height={36}
              className="h-8 w-auto object-contain"
            />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Department of</p>
              <p className="text-sm font-bold text-[#5F6368]">Computer Science</p>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5F6368] mb-3 leading-tight">
            Build Your Future in <span className="text-[#0369A1]">Technology</span>
          </h1>

          <p className="text-slate-600 mb-5 text-sm md:text-base leading-relaxed">
            ABET-accredited programs preparing students for careers in software engineering, AI, cybersecurity, and more.
          </p>

          {/* Quick Stats Row */}
          <div className="grid grid-cols-4 gap-2 mb-6 py-4 border-y border-slate-100">
            {quickStats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <stat.icon size={18} className={`mx-auto mb-1 ${stat.color}`} aria-hidden="true" />
                <div className="text-lg font-bold text-[#5F6368]">{stat.value}</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wide">{stat.label}</div>
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

// --- Quick Links Data ---
const quickLinks = [
  { label: "Undergraduate", href: "/undergraduate", icon: BookOpen, description: "BS & AAS Programs" },
  { label: "Graduate", href: "/graduate", icon: GraduationCap, description: "MS & PhD Programs" },
  { label: "Faculty", href: "/people", icon: Users, description: "Meet Our Team" },
  { label: "Research", href: "/research", icon: Award, description: "Projects & Labs" },
  { label: "Resources", href: "/resources", icon: BookOpen, description: "Student Support" },
  { label: "Courses", href: "/courses", icon: Calendar, description: "Course Catalog" },
];

// --- Quick Links Bar (Below Hero) ---
const QuickLinksBar = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-4 md:px-6 mb-12 md:mb-16">
      {/* Quick Links Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4"
      >
        {quickLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="group relative bg-white rounded-xl border border-slate-200 p-4 hover:border-[#8AC2EB] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-[#8AC2EB]/10 flex items-center justify-center mb-3 group-hover:bg-[#8AC2EB] transition-colors">
                <link.icon size={22} className="text-[#8AC2EB] group-hover:text-white transition-colors" aria-hidden="true" />
              </div>
              <span className="font-bold text-[#5F6368] text-sm group-hover:text-[#8AC2EB] transition-colors">
                {link.label}
              </span>
              <p className="text-[10px] text-slate-500 mt-0.5 hidden sm:block">
                {link.description}
              </p>
            </div>
          </Link>
        ))}
      </motion.div>

      {/* Contact Info Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-4 bg-slate-50 rounded-xl p-3 md:p-4 border border-slate-200"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm">
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin size={14} className="text-[#8AC2EB] shrink-0" aria-hidden="true" />
              <span className="text-xs md:text-sm">Building 1N, Room 215</span>
            </div>
            <a href="tel:7189822850" className="flex items-center gap-2 text-slate-600 hover:text-[#8AC2EB] transition-colors min-h-11">
              <Phone size={14} className="text-[#8AC2EB] shrink-0" aria-hidden="true" />
              <span className="text-xs md:text-sm">718.982.2850</span>
            </a>
            <a href="mailto:cs@csi.cuny.edu" className="flex items-center gap-2 text-slate-600 hover:text-[#8AC2EB] transition-colors min-h-11">
              <Mail size={14} className="text-[#8AC2EB] shrink-0" aria-hidden="true" />
              <span className="text-xs md:text-sm">cs@csi.cuny.edu</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock size={14} className="text-[#8AC2EB] shrink-0" aria-hidden="true" />
            <span className="text-slate-600 text-xs md:text-sm">Mon-Fri: 9AM - 5PM</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// --- Featured Programs Section ---
const FeaturedPrograms = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-4 md:px-6 mb-16 md:mb-24">
      {/* Bold Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-14"
      >
        <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-[#8AC2EB]/10 rounded-full">
          <Image
            src="/csi-blue-logo.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-auto object-contain"
            aria-hidden="true"
          />
          <span className="text-xs font-bold uppercase tracking-widest text-[#0369A1]">
            Academic Programs
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5F6368] mb-4">
          Launch Your Career in <span className="text-[#0369A1]">Technology</span>
        </h2>
        <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          From foundational undergraduate courses to advanced doctoral research, our programs prepare you for success in the ever-evolving tech industry.
        </p>
      </motion.div>

      {/* Programs Grid - Large Prominent Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {programHighlights.map((program, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
          >
            <Link href={program.href} className="block group h-full">
              <div className="relative bg-white rounded-3xl border border-slate-200 overflow-hidden h-full hover:shadow-2xl hover:border-transparent transition-all duration-500 hover:-translate-y-2">
                {/* Image Header with Gradient Overlay */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-linear-to-br ${program.color} opacity-80 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                  {/* Badge on Image */}
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[#5F6368] text-xs font-bold shadow-lg">
                      <GraduationCap size={14} aria-hidden="true" />
                      {program.badge}
                    </div>
                  </div>

                  {/* Stats on Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <div className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-lg text-white text-xs font-semibold">
                      <Clock size={12} className="inline mr-1.5" aria-hidden="true" />
                      {program.stats.duration}
                    </div>
                    <div className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-lg text-white text-xs font-semibold">
                      <BookOpen size={12} className="inline mr-1.5" aria-hidden="true" />
                      {program.stats.credits}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Title */}
                  <h3 className="text-2xl md:text-2xl font-bold text-[#5F6368] mb-1 group-hover:text-[#8AC2EB] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4 font-medium">{program.subtitle}</p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Highlight Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full group-hover:bg-[#8AC2EB]/10 group-hover:text-[#8AC2EB] transition-colors"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-[#0369A1] font-bold text-sm group-hover:text-[#025a8a] transition-colors">
                      Explore Program
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#8AC2EB]/10 flex items-center justify-center group-hover:bg-[#8AC2EB] transition-colors">
                      <ArrowRight size={18} className="text-[#8AC2EB] group-hover:text-white transition-colors" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* View All Programs Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-10 md:mt-12"
      >
        <Link
          href="/courses"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#5F6368] hover:bg-black text-white font-bold rounded-full transition-all hover:shadow-xl hover:scale-105 min-h-11"
        >
          View All Programs & Courses
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </motion.div>
    </section>
  );
};

// --- Why Choose Us Section ---
const WhyChooseUsSection = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-4 md:px-6 mb-12 md:mb-16">
      <div className="bg-linear-to-br from-[#F0F9FF] to-[#E0F7FA] rounded-2xl p-6 md:p-10 border border-[#8AC2EB]/20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/csi-blue-logo.png"
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-auto object-contain"
                  aria-hidden="true"
                />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Why CSI
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5F6368] mb-4">
                Why Choose <span className="text-[#0369A1]">Our Department?</span>
              </h2>
              <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed">
                Join a community of learners and innovators at one of CUNY's premier computer science programs.
              </p>

              {/* Checklist */}
              <ul className="space-y-3">
                {whyChooseUs.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-slate-700 text-sm md:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Content - Quick Actions */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
            >
              <h3 className="font-bold text-[#5F6368] text-lg mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Link
                  href="https://www.csi.cuny.edu/admissions"
                  target="_blank"
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-[#8AC2EB]/10 transition-colors group min-h-11"
                >
                  <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-[#8AC2EB]" aria-hidden="true" />
                    <span className="font-medium text-slate-700 group-hover:text-[#8AC2EB]">Apply for Admission</span>
                  </div>
                  <ArrowRight size={16} className="text-slate-400 group-hover:text-[#8AC2EB]" aria-hidden="true" />
                </Link>
                <Link
                  href="/undergraduate"
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-[#8AC2EB]/10 transition-colors group min-h-11"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen size={20} className="text-[#8AC2EB]" aria-hidden="true" />
                    <span className="font-medium text-slate-700 group-hover:text-[#8AC2EB]">Undergraduate Programs</span>
                  </div>
                  <ArrowRight size={16} className="text-slate-400 group-hover:text-[#8AC2EB]" aria-hidden="true" />
                </Link>
                <Link
                  href="/graduate"
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-[#8AC2EB]/10 transition-colors group min-h-11"
                >
                  <div className="flex items-center gap-3">
                    <GraduationCap size={20} className="text-[#8AC2EB]" aria-hidden="true" />
                    <span className="font-medium text-slate-700 group-hover:text-[#8AC2EB]">Graduate Programs</span>
                  </div>
                  <ArrowRight size={16} className="text-slate-400 group-hover:text-[#8AC2EB]" aria-hidden="true" />
                </Link>
                <Link
                  href="/people"
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-[#8AC2EB]/10 transition-colors group min-h-11"
                >
                  <div className="flex items-center gap-3">
                    <Users size={20} className="text-[#8AC2EB]" aria-hidden="true" />
                    <span className="font-medium text-slate-700 group-hover:text-[#8AC2EB]">Meet Our Faculty</span>
                  </div>
                  <ArrowRight size={16} className="text-slate-400 group-hover:text-[#8AC2EB]" aria-hidden="true" />
                </Link>
                <Link
                  href="/resources"
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-[#8AC2EB]/10 transition-colors group min-h-11"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen size={20} className="text-[#8AC2EB]" aria-hidden="true" />
                    <span className="font-medium text-slate-700 group-hover:text-[#8AC2EB]">Student Resources</span>
                  </div>
                  <ArrowRight size={16} className="text-slate-400 group-hover:text-[#8AC2EB]" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main Page Layout ---
export default function CSIDepartmentPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#2d2f31] max-w-8xl mx-auto">
      <div className='pt-20 md:pt-24'>
        {/* 1. Hero - First Impression */}
        <HeroSection />

        {/* 2. Quick Links & Contact - Essential Navigation */}
        <QuickLinksBar />

        {/* 3. Featured Programs - Most Important for Prospective Students */}
        <FeaturedPrograms />

        {/* 4. Why Choose Us - Value Proposition */}
        <WhyChooseUsSection />

        {/* 5. All Programs Detail */}
        <CSIProgramsPage />

        {/* 6. Department Leadership - Credibility */}
        <div className='my-12'><DepartmentHeadSection /></div>

        {/* 7. News - Current Happenings */}
        <DepartmentNewsSection />

        {/* 8. About Section - Additional Context (moved lower) */}
        <section className='max-w-8xl mx-auto px-6'>
          <About3
            title="About Us"
            description={
              <>
                The Computer Science Department offers programs that prepare students for careers as computer professionals and/or for continued study. The major provides a broad-based background in computer science and includes courses in computer software, computer systems, mathematics, network security, and computer hardware. We are committed to offering courses that stay current with changing technologies. Our BS in Computer Science degree is accredited by the Computing Accreditation Commission of <strong><LinkPreview url="http://www.abet.org" className="underline">ABET</LinkPreview></strong>.
              </>
            }
            mainImage={{
              src: "/csi1n.png",
              alt: "CSI Computer Science building and facilities",
            }}
            secondaryImage={{
              src: "/csi-graduation.jpg",
              alt: "CSI Computer Science students at graduation ceremony",
            }}
            breakout={{
              src: "/cunycsi.png",
              alt: "CUNY College of Staten Island Logo",
              title: "ABET-Accredited Computer Science Programs",
              description:
                "Our Bachelor of Science in Computer Science is accredited by ABET, ensuring the highest standards in computer science education. Join a program that prepares you for successful careers in technology, research, and innovation.",
              buttonText: "Explore Our Programs",
              buttonUrl: "/undergraduate",
            }}
            companiesTitle="Our students go on to work at top companies"
            companies={[]}
            achievementsTitle="Where Our Students Build Their Careers"
            achievementsDescription="Our graduates are highly sought after by leading technology companies, securing positions at Fortune 500 firms, innovative startups, and cutting-edge research institutions."
            achievements={[
              { label: "Graduates Hired", value: "95%" },
              { label: "Top Companies", value: "200+" },
              { label: "Average Starting Salary", value: "$85K+" },
            ]}
          />
        </section>
      </div>
    </div>
  );
}
