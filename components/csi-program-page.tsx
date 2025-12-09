'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
    ChevronRight,
    ChevronLeft,
    GraduationCap,
    BookOpen,
    Award,
    Briefcase,
    ArrowRight,
} from 'lucide-react';

// --- Data Source ---

const degreeCategories = {
    featured: {
        title: "Computer Science Degrees",
        description: "Explore our comprehensive academic programs designed to prepare students for careers in software, systems, and research.",
        linkText: "View all programs"
    },
    columns: [
        {
            header: "Undergraduate",
            icon: BookOpen,
            accent: "bg-blue-500",
            items: [
                "AAS in Computer Technology",
                "BS in Computer Science",
                "BS in CS-Mathematics",
                "BS in Info Systems & Informatics"
            ]
        },
        {
            header: "Graduate & Doctoral",
            icon: GraduationCap,
            accent: "bg-cyan-500",
            items: [
                "M.S. in Computer Science",
                "Ph.D. in Computer Science"
            ]
        },
        {
            header: "Minors & Certificates",
            icon: Award,
            accent: "bg-sky-500",
            items: [
                "Computer Science Minor",
                "Post-Baccalaureate Certificate"
            ]
        }
    ]
};

const specializations = [
    {
        id: 1,
        level: "Bachelor of Science",
        title: "BS Specializations",
        description: "Tailor your undergraduate degree with focused tracks designed for high-demand industry roles.",
        stats: [
            { label: "Game Development", value: "Interactive Media" },
            { label: "Networking & Security", value: "Infrastructure" },
            { label: "High Performance Computing", value: "Systems" },
            { label: "Data Science", value: "Analytics" }
        ],
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop",
        color: "text-[#8AC2EB]",
        bgAccent: "bg-blue-50"
    },
    {
        id: 2,
        level: "Master of Science",
        title: "MS Specializations",
        description: "Advance your expertise with specialized graduate tracks in cutting-edge technologies.",
        stats: [
            { label: "AI & Data Analytics", value: "Intelligence" },
            { label: "Cloud Computing", value: "Software Eng" },
            { label: "Cybersecurity", value: "Network Defense" },
            { label: "Advanced Research", value: "Thesis Track" }
        ],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop",
        color: "text-cyan-600",
        bgAccent: "bg-cyan-50"
    },
    {
        id: 3,
        level: "Doctoral Program",
        title: "PhD Program",
        description: "Contribute to the field through rigorous research in partnership with the CUNY Graduate Center.",
        stats: [
            { label: "CUNY Graduate Center", value: "Collaboration" },
            { label: "Broad Research Areas", value: "Innovation" },
            { label: "Faculty Mentorship", value: "Guidance" },
            { label: "Published Works", value: "Contribution" }
        ],
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop",
        color: "text-sky-700",
        bgAccent: "bg-sky-50"
    }
];

// --- Components ---

// Helper function to get the href for each degree
const getDegreeHref = (degreeName: string): string => {
    const hrefMap: Record<string, string> = {
        'AAS in Computer Technology': '/undergraduate#aas-computer-technology',
        'BS in Computer Science': '/undergraduate#bs-computer-science',
        'BS in CS-Mathematics': '/undergraduate#additional-degrees',
        'BS in Info Systems & Informatics': '/undergraduate#bs-information-systems-and-informatics',
        'M.S. in Computer Science': '/graduate#ms-computer-science',
        'Ph.D. in Computer Science': '/graduate#phd-computer-science',
        'Computer Science Minor': '/undergraduate#minors-certificates',
        'Post-Baccalaureate Certificate': '/undergraduate#minors-certificates',
    };
    return hrefMap[degreeName] || '#';
};

const DegreeListSection = () => {
    return (
        <section className="py-12 md:py-16">
            <div className="max-w-7xl mx-auto">

                {/* Section Header - CSI Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 md:mb-14"
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
                            Our Programs
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#73797C] mb-3">
                        Academic <span className="text-[#8AC2EB]">Degrees</span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                        {degreeCategories.featured.description}
                    </p>
                </motion.div>

                {/* Degree Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    {degreeCategories.columns.map((col, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + (idx * 0.1) }}
                            className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#8AC2EB]/30 transition-all duration-300 overflow-hidden"
                        >
                            {/* Card Header */}
                            <div className="p-5 md:p-6 border-b border-slate-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`p-2.5 rounded-xl ${col.accent} text-white`}>
                                        <col.icon size={20} aria-hidden="true" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-[#73797C]">
                                        {col.header}
                                    </h3>
                                </div>
                                <div className={`h-1 w-12 ${col.accent} rounded-full opacity-60`} aria-hidden="true" />
                            </div>

                            {/* Card Body - Degree List */}
                            <div className="p-5 md:p-6">
                                <ul className="space-y-1">
                                    {col.items.map((item, i) => {
                                        const href = getDegreeHref(item);
                                        return (
                                            <li key={i}>
                                                <Link
                                                    href={href}
                                                    className="flex items-center justify-between py-3 px-3 -mx-3 rounded-lg text-slate-700 hover:bg-[#F0F9FF] hover:text-[#8AC2EB] transition-all group/link min-h-11"
                                                >
                                                    <span className="font-medium text-sm md:text-base">{item}</span>
                                                    <ChevronRight
                                                        size={16}
                                                        className="text-slate-300 group-hover/link:text-[#8AC2EB] group-hover/link:translate-x-1 transition-all"
                                                        aria-hidden="true"
                                                    />
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* Card Footer */}
                            <div className="px-5 md:px-6 pb-5 md:pb-6">
                                <Link
                                    href={idx === 1 ? "/graduate" : "/undergraduate"}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#8AC2EB] hover:text-[#5BA3D0] transition-colors min-h-11"
                                >
                                    Explore {col.header.toLowerCase()}
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ABET Accreditation Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 md:mt-10 bg-linear-to-r from-[#F0F9FF] to-[#E0F2FE] rounded-2xl p-5 md:p-6 border border-[#8AC2EB]/20"
                >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="p-3 rounded-xl bg-white shadow-sm border border-[#8AC2EB]/20">
                            <Briefcase size={24} className="text-[#8AC2EB]" aria-hidden="true" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-[#5F6368] mb-1">ABET Accredited & Career Ready</h4>
                            <p className="text-sm text-slate-600">
                                Our BS in Computer Science is accredited by ABET, ensuring the highest standards in computer science education and industry relevance.
                            </p>
                        </div>
                        <Link
                            href="/undergraduate"
                            className="shrink-0 px-5 py-2.5 bg-[#0369A1] text-white font-semibold rounded-lg hover:bg-[#025a8a] transition-colors text-sm min-h-11 flex items-center"
                        >
                            Explore Undergraduate Programs
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SpotlightCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const shouldReduceMotion = useReducedMotion();

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % specializations.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? specializations.length - 1 : prev - 1));
    };

    const currentSlide = specializations[currentIndex];

    return (
        <section className="py-12 md:py-16 bg-slate-50 -mx-6 px-6 rounded-2xl">
            <div className="max-w-7xl mx-auto">

                {/* Section Header - CSI Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 md:mb-10"
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
                            Department Spotlight
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#73797C]">
                        Specialization <span className="text-[#8AC2EB]">Tracks</span>
                    </h2>
                </motion.div>

                {/* Main Carousel Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
                >
                    <div className="flex flex-col lg:flex-row">

                        {/* Left Content */}
                        <div className="lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentIndex}
                                    initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                                    animate={shouldReduceMotion ? false : { opacity: 1, x: 0 }}
                                    exit={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {/* Level Badge */}
                                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${currentSlide.bgAccent} mb-4`}>
                                        <GraduationCap size={14} className={currentSlide.color} aria-hidden="true" />
                                        <span className={`text-xs font-bold uppercase tracking-wide ${currentSlide.color}`}>
                                            {currentSlide.level}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#73797C] mb-4 leading-tight">
                                        {currentSlide.title}
                                    </h3>

                                    <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
                                        {currentSlide.description}
                                    </p>

                                    {/* Specialization Tags Grid */}
                                    <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">
                                        {currentSlide.stats.map((stat, idx) => (
                                            <div
                                                key={idx}
                                                className="bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-[#8AC2EB]/30 hover:bg-[#F0F9FF] transition-all"
                                            >
                                                <div className={`text-base sm:text-lg md:text-xl font-bold ${currentSlide.color} mb-1 leading-tight`}>
                                                    {stat.label}
                                                </div>
                                                <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                                                    {stat.value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <Link
                                        href={currentIndex === 0 ? "/undergraduate" : "/graduate"}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#73797C] text-white font-semibold rounded-lg hover:bg-[#1a1a1a] transition-colors min-h-11"
                                    >
                                        Explore {currentSlide.level}
                                        <ArrowRight size={16} aria-hidden="true" />
                                    </Link>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right Image */}
                        <div className="lg:w-1/2 relative h-56 sm:h-64 md:h-72 lg:h-auto lg:min-h-[500px] overflow-hidden order-1 lg:order-2">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentIndex}
                                    initial={shouldReduceMotion ? false : { scale: 1.1, opacity: 0 }}
                                    animate={shouldReduceMotion ? false : { scale: 1, opacity: 1 }}
                                    exit={shouldReduceMotion ? false : { opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={currentSlide.image}
                                        alt={currentSlide.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Slide indicator on image */}
                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-slate-700">
                                {currentIndex + 1} / {specializations.length}
                            </div>
                        </div>

                    </div>
                </motion.div>

                {/* Carousel Controls */}
                <div className="mt-6 md:mt-8 flex items-center justify-between">
                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={prevSlide}
                            aria-label="Previous slide"
                            className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-slate-300 bg-white flex items-center justify-center hover:bg-[#8AC2EB] hover:border-[#8AC2EB] hover:text-white text-slate-600 transition-all focus-visible:ring-2 focus-visible:ring-[#8AC2EB] focus-visible:ring-offset-2"
                        >
                            <ChevronLeft size={20} aria-hidden="true" />
                        </button>

                        <button
                            onClick={nextSlide}
                            aria-label="Next slide"
                            className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-slate-300 bg-white flex items-center justify-center hover:bg-[#8AC2EB] hover:border-[#8AC2EB] hover:text-white text-slate-600 transition-all focus-visible:ring-2 focus-visible:ring-[#8AC2EB] focus-visible:ring-offset-2"
                        >
                            <ChevronRight size={20} aria-hidden="true" />
                        </button>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex gap-2">
                        {specializations.map((spec, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                aria-label={`Go to ${spec.title}`}
                                aria-current={idx === currentIndex ? "true" : undefined}
                                className={`min-h-11 min-w-11 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-[#8AC2EB] focus-visible:ring-offset-2 flex items-center justify-center ${
                                    idx === currentIndex
                                        ? 'bg-[#8AC2EB]'
                                        : 'bg-slate-300 hover:bg-slate-400'
                                }`}
                            >
                                <span className={`rounded-full ${idx === currentIndex ? 'w-6 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-slate-600'}`} />
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

// --- Main Page ---

export default function CSIProgramsPage() {
    return (
        <div className="bg-white font-sans text-slate-800">
            <div className='max-w-8xl mx-auto px-6'>
                <DegreeListSection />
                <SpotlightCarousel />
            </div>
        </div>
    );
}
