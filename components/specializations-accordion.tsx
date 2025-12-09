'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Gamepad2,
    ShieldCheck,
    Cpu,
    Database,
    ChevronDown,
    ArrowRight,
    FileText,
    User,
    Info
} from 'lucide-react';

// --- Components for Course Display ---

// Helper to render a single course box
const CourseBox = ({ code, title, isOr = false }: { code?: string, title: string, isOr?: boolean }) => (
    <div className={`relative flex-1 p-3 rounded-lg border ${isOr ? 'bg-orange-50 border-orange-200' : 'bg-blue-50 border-blue-100'
        }`}>
        {code && (
            <span className={`text-xs font-bold uppercase tracking-wider block mb-1 ${isOr ? 'text-orange-600' : 'text-[#8AC2EB]'
                }`}>
                {code}
            </span>
        )}
        <span className="text-sm font-semibold text-slate-800 leading-tight block">
            {title}
        </span>
    </div>
);

// Helper to render the sequence flow based on Image 2
const CourseSequence = ({ step1, step2, step3 }: any) => {
    return (
        <div className="flex flex-col gap-4 mt-4">
            {/* Step 1 & 2 Row */}
            <div className="flex flex-col md:flex-row gap-2 items-start md:items-center">
                <CourseBox code={step1.code} title={step1.title} />
                <ArrowRight className="hidden md:block text-slate-300 mx-1 shrink-0" size={20} />
                <ChevronDown className="md:hidden text-slate-300 mx-auto" size={20} />
                <CourseBox code={step2.code} title={step2.title} />
                <ArrowRight className="hidden md:block text-slate-300 mx-1 shrink-0" size={20} />
                <ChevronDown className="md:hidden text-slate-300 mx-auto" size={20} />
            </div>

            {/* Step 3 (The Elective Choice) */}
            <div className="relative p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="absolute -top-3 left-4 bg-slate-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    ELECTIVE OPTION
                </span>
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                    <CourseBox code={step3.optionA.code} title={step3.optionA.title} />
                    <span className="font-bold text-slate-400 text-xs px-2">OR</span>
                    <CourseBox code={step3.optionB.code} title={step3.optionB.title} />
                </div>
            </div>
        </div>
    );
};

// --- Data Configuration ---

const specializations = [
    {
        id: 'game-dev',
        title: 'Game Development',
        subtitle: 'iPhone, Android, Unity3D',
        icon: Gamepad2,
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2670&auto=format&fit=crop",
        sequence: {
            step1: { code: "CSC 227", title: "Intro to Game Programming" },
            step2: { code: "CSC 427", title: "Advanced Game Development" },
            step3: {
                optionA: { code: "CSC 480", title: "Artificial Intelligence" },
                optionB: { code: "CSC 470", title: "Computer Graphics" }
            }
        }
    },
    {
        id: 'security',
        title: 'Networking & Security',
        subtitle: 'Cybersecurity, Cryptography & Defense',
        icon: ShieldCheck,
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop",
        sequence: {
            step1: { code: "CSC 223", title: "Computer Hacking Revealed" },
            step2: { code: "CSC 421", title: "Internet Security" },
            step3: {
                optionA: { code: "CSC 435", title: "Adv Data Communications" },
                optionB: { code: "CSC 426", title: "Applied Cryptography" }
            }
        }
    },
    {
        id: 'hpc',
        title: 'High Performance Computing',
        subtitle: 'Supercomputing & Parallel Processing',
        icon: Cpu,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
        sequence: {
            step1: { code: "CSC 229", title: "Introduction to HPC" },
            step2: { code: "CSC 429", title: "Advanced HPC" },
            step3: {
                optionA: { code: "CSC 425", title: "Shared Memory Parallel Computing" },
                optionB: { code: "MTH 338", title: "Linear Algebra" }
            }
        }
    },
    {
        id: 'data-science',
        title: 'Data Science',
        subtitle: 'Big Data, Analytics & ML',
        icon: Database,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        // Note: Image 2 did not provide specific tracks for Data Science, so we use a placeholder structure
        description: "The Data Science specialization focuses on extracting knowledge from data through statistical analysis and machine learning. Please consult the department flyer or your advisor for the specific course sequence.",
        // linkText: "View Data Science Curriculum"
    }
];

// --- Main Component ---

export default function SpecializationsAccordion() {
    const [activeId, setActiveId] = useState(specializations[0].id);

    // Helper to find active content for the image side
    const activeFeature = specializations.find(f => f.id === activeId) || specializations[0];

    return (
        <section className=" rounded-3xl py-4">
            <div className="max-w-8xl mx-auto px-12">

                {/* Section Header (Based on Image 1 Text) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="text-[#8AC2EB] font-bold tracking-widest uppercase text-xs mb-2 block">
                        Undergraduate Tracks
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        BS in Computer Science Specializations
                    </h2>

                    <div className="bg-slate-50 border-l-4 border-blue-500 p-5 rounded-r-lg max-w-3xl">
                        <p className="text-slate-700 mb-3">
                            You may choose to earn a specialization in one of the following areas.
                            Please speak to your <a href="#" className="text-[#8AC2EB] underline font-bold hover:text-blue-800">advisor</a> if one of these specializations interests you so you can plan to take the corresponding courses.
                        </p>
                        <a href="https://www.cs.csi.cuny.edu/content/CSC_Specializations_flyer_updated_SU18.pdf" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:underline">
                            <FileText size={16} /> Open PDF Flyer
                        </a>
                    </div>
                </motion.div>

                {/* Main Accordion Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-slate-50 rounded-3xl p-4 md:p-6 shadow-sm border border-slate-200 flex flex-col lg:flex-row gap-6 min-h-[600px]"
                >

                    {/* LEFT SIDE: Accordion Controls */}
                    <div className="lg:w-1/2 flex flex-col justify-start gap-3">
                        {specializations.map((feature, idx) => {
                            const isActive = activeId === feature.id;

                            return (
                                <div
                                    key={feature.id}
                                    onClick={() => setActiveId(feature.id)}
                                    className={`relative cursor-pointer rounded-2xl transition-all duration-300 border overflow-hidden ${isActive
                                        ? 'bg-white shadow-lg border-blue-100'
                                        : 'bg-transparent border-transparent hover:bg-white/50'
                                        }`}
                                >
                                    {/* Header Area */}
                                    <div className="p-5 flex items-center gap-4">
                                        {/* Rank Number (Matches Image 1 #1, #2...) */}
                                        <div className={`text-lg font-bold font-mono ${isActive ? 'text-[#8AC2EB]' : 'text-slate-300'}`}>
                                            #{idx + 1}
                                        </div>

                                        <div className={`p-2 rounded-lg transition-colors duration-300 shrink-0 ${isActive ? 'bg-blue-100 text-blue-700' : 'bg-slate-200 text-slate-500'
                                            }`}>
                                            <feature.icon size={20} />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className={`font-bold text-lg transition-colors ${isActive ? 'text-slate-900' : 'text-slate-600'
                                                }`}>
                                                {feature.title}
                                            </h3>
                                        </div>

                                        <ChevronDown
                                            className={`text-slate-400 transition-transform duration-300 ${isActive ? 'rotate-180 text-[#8AC2EB]' : ''
                                                }`}
                                        />
                                    </div>

                                    {/* Collapsible Body Content */}
                                    <motion.div
                                        initial={false}
                                        animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-6 pt-0">

                                            {/* Subtitle/Description */}
                                            <p className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                                                <Info size={14} />
                                                {feature.subtitle || "Specialization Track"}
                                            </p>

                                            {/* Course Sequence Visualization */}
                                            {feature.sequence ? (
                                                <CourseSequence {...feature.sequence} />
                                            ) : (
                                                <div className="bg-white p-4 rounded-lg border border-slate-100 text-slate-600 text-sm">
                                                    {feature.description}
                                                    {feature.linkText && (
                                                        <div className="mt-3 text-[#8AC2EB] font-bold flex items-center gap-1 cursor-pointer hover:underline">
                                                            {feature.linkText} <ArrowRight size={14} />
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400">
                                                <User size={12} />
                                                <span>Plan to take the courses responding to this specialization.</span>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Active Indicator Line */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#8AC2EB]"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT SIDE: Dynamic Image Display */}
                    <div className="lg:w-1/2 relative rounded-2xl overflow-hidden bg-slate-200 min-h-[300px] lg:min-h-full shadow-inner">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={activeFeature.image}
                                    alt={activeFeature.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent"></div>

                                {/* Floating Label inside Image */}
                                <div className="absolute bottom-8 left-8 right-8">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >

                                        <h3 className="text-3xl font-bold text-white mb-2">
                                            {activeFeature.title}
                                        </h3>
                                        <p className="text-blue-100 font-medium text-lg">
                                            {activeFeature.subtitle}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}