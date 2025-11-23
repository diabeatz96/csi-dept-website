'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronRight,
    ChevronLeft,
    ArrowRight,
    Monitor,
    Cpu,
    Globe,
    Code
} from 'lucide-react';

// --- Data Source (Based on Image 2) ---

const degreeCategories = {
    featured: {
        title: "Computer Science Degrees",
        description: "Explore our comprehensive academic programs designed to prepare students for careers in software, systems, and research.",
        linkText: "View all programs"
    },
    columns: [
        {
            header: "Undergraduate",
            items: [
                "AAS in Computer Technology",
                "BS in Computer Science",
                "BS in CS-Mathematics",
                "BS in Info Systems & Informatics"
            ]
        },
        {
            header: "Graduate & Doctoral",
            items: [
                "M.S. in Computer Science",
                "Ph.D. in Computer Science"
            ]
        },
        {
            header: "Minors & Certificates",
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
        color: "text-blue-600"
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
        color: "text-cyan-600"
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
        color: "text-sky-700"
    }
];

// --- Components ---

const DegreeListSection = () => {
    return (
        <section className="py-12">
            <div className="max-w-8xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-gray-900 mb-10"
                >
                    Academic Degrees
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left: Featured / Intro Area (Mimics "ChatGPT is a top skill") */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:w-1/4"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            {degreeCategories.featured.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            {degreeCategories.featured.description}
                        </p>
                        <a href="#" className="inline-flex items-center text-blue-600 font-bold hover:underline">
                            {degreeCategories.featured.linkText} <ChevronRight size={16} />
                        </a>

                        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <div className="flex items-center gap-2 text-blue-800 font-semibold mb-2">
                                <Monitor size={20} />
                                <span>Career Ready</span>
                            </div>
                            <p className="text-sm text-blue-700">Our curriculum is accredited by ABET and constantly updated.</p>
                        </div>
                    </motion.div>

                    {/* Right: Columns List (Mimics the categories list) */}
                    <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {degreeCategories.columns.map((col, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (idx * 0.1) }}
                            >
                                <h4 className="font-bold text-lg text-gray-900 mb-4">{col.header}</h4>
                                <ul className="space-y-4">
                                    {col.items.map((item, i) => (
                                        <li key={i} className="group cursor-pointer">
                                            <div className="flex items-center justify-between text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                                                <span>{item}</span>
                                                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                            </div>
                                            <div className="text-xs text-gray-400 mt-1">
                                                {Math.floor(Math.random() * 10000) + 100} students enrolled
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const SpotlightCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % specializations.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? specializations.length - 1 : prev - 1));
    };

    const currentSlide = specializations[currentIndex];

    return (
        <section className="">
            <div className="max-w-8xl mx-auto px-6">

                {/* Header for the Carousel Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-8 flex items-center gap-3"
                >
                    <div className="h-8 w-1 bg-blue-600"></div>
                    <h2 className="text-2xl text-gray-500 font-medium">Department Spotlight</h2>
                </motion.div>

                {/* Main Carousel Card (Mimics Booz Allen Hamilton Layout) */}
                <div className="bg-white shadow-xl border border-gray-100 overflow-hidden relative min-h-[500px] flex flex-col lg:flex-row rounded-xl">

                    {/* Left Content */}
                    <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <Cpu className="text-gray-400" size={24} />
                                    <span className="text-gray-500 font-medium uppercase tracking-wide text-sm">
                                        {currentSlide.level}
                                    </span>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                    {currentSlide.title}
                                </h3>

                                <p className="text-lg text-gray-600 mb-10 max-w-md">
                                    {currentSlide.description}
                                </p>

                                {/* The Stats / Specializations Grid */}
                                <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-10">
                                    {currentSlide.stats.map((stat, idx) => (
                                        <div key={idx}>
                                            <div className={`text-2xl md:text-3xl font-bold ${currentSlide.color} mb-1`}>
                                                {stat.label}
                                            </div>
                                            <div className="text-sm text-gray-500 font-medium">
                                                {stat.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button className="bg-[#2d2f31] hover:bg-black text-white font-bold py-3 px-6 flex items-center gap-2 transition-colors w-fit rounded-xl">
                                    View Curriculum <ArrowRight size={18} />
                                </button>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Image */}
                    <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden">
                        <AnimatePresence mode='wait'>
                            <motion.img
                                key={currentIndex}
                                src={currentSlide.image}
                                alt={currentSlide.title}
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>
                        {/* Overlay gradient for text readability on mobile if needed */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:hidden"></div>
                    </div>

                </div>

                {/* Carousel Controls */}
                <div className="mt-8 flex items-center gap-4">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-blue-50 hover:border-blue-600 transition-all"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className="flex gap-2">
                        {specializations.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-blue-50 hover:border-blue-600 transition-all"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

            </div>
        </section>
    );
};

// --- Main Page ---

export default function CSIProgramsPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">
            <main className='max-w-8xl mx-auto px-6'>
                <DegreeListSection />
                <SpotlightCarousel />
            </main>
        </div>
    );
}