'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    Filter,
    ArrowRight,
    Microscope,
    BrainCircuit,
    Network,
    Database,
    Lock,
    Cpu
} from 'lucide-react';
import Link from 'next/link';
import { facultyResearchAreas, researchFilters } from '@/data/research';

// Use imported data
const facultyData = facultyResearchAreas;
const filters = researchFilters;

// --- 2. Sub-Components ---

const FeaturedCard = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden mb-24 group shadow-2xl"
    >
        {/* Background Image */}
        <img
            src="/csi-blue-logo.png"
            alt="Faculty Research Lab"
            className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <Microscope className="w-12 h-12 text-blue-400 mx-auto mb-6 opacity-80" />
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 max-w-4xl leading-tight">
                    Pushing the Boundaries of <br />
                    <span className="italic text-blue-200">Computer Science</span>
                </h2>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
                    Our faculty are leaders in their fields, driving innovation in AI, Cybersecurity, Imaging, and Data Science right here at CSI.
                </p>
                {/* <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white hover:text-slate-900 transition-all font-semibold flex items-center gap-2 mx-auto">
                    Explore Research Areas <ArrowRight size={16} />
                </button> */}
            </motion.div>
        </div>
    </motion.div>
);

const FacultyCard = ({ data }: { data: typeof facultyData[0] }) => (
    <Link href={data.profile || '#'} target='_blank' rel='noopener noreferrer' >
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer"
        >
            {/* Image Background */}
            <img
                src={data.image}
                alt={data.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent transition-opacity duration-300" />

            {/* Floating Glass Card Content */}
            <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-xl shadow-lg text-white transition-all duration-300 group-hover:bg-slate-900/80 group-hover:border-blue-500/30">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 mb-1 block">
                                {data.category}
                            </span>
                            <h3 className="font-bold text-lg leading-tight">
                                {data.name}
                            </h3>
                        </div>
                    </div>

                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-3">
                        {data.description}
                    </p>

                    <div className="flex items-center gap-2 text-[10px] font-bold text-blue-300 uppercase tracking-wide group-hover:text-white transition-colors">
                        View Profile <ArrowRight size={12} />
                    </div>
                </div>
            </div>
        </motion.div>
    </Link>
);

// --- 3. Main Section ---

export default function FacultyResearch() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredFaculty = useMemo(() => {
        if (activeFilter === "All") return facultyData;
        return facultyData.filter(f => f.category === activeFilter || (activeFilter === "Networks" && f.category === "Networks"));
    }, [activeFilter]);

    return (
        <section className="min-h-screen bg-slate-50 py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Hero Banner */}
                <FeaturedCard />

                {/* Filter Bar */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Faculty Directory</h2>
                        <p className="text-slate-500">Meet the minds shaping the future of technology.</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === filter
                                    ? 'bg-slate-900 text-white shadow-md'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Faculty Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredFaculty.map((faculty) => (
                            <FacultyCard key={faculty.id} data={faculty} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredFaculty.length === 0 && (
                    <div className="py-20 text-center text-slate-400">
                        No faculty found in this category.
                    </div>
                )}

            </div>
        </section>
    );
}