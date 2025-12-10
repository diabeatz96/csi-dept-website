'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Binary,
    ShieldAlert,
    BrainCircuit,
    Languages,
    ChevronDown,
    CheckCircle2,
    BookOpen,
    ArrowRight,
    Info
} from 'lucide-react';

// --- Helper Components for Course Requirements ---

const CoursePill = ({ code, title }: { code: string, title: string }) => (
    <div className="flex items-start gap-3 p-3 bg-white border border-slate-100 rounded-lg shadow-sm hover:border-blue-200 transition-colors w-full">
        <div className="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1 rounded shrink-0 mt-0.5">
            {code}
        </div>
        <span className="text-sm text-slate-700 leading-tight">
            {title}
        </span>
    </div>
);

const OrGroup = ({ courses }: { courses: { code: string, title: string }[] }) => (
    <div className="bg-orange-50 border border-orange-100 rounded-lg p-3 w-full">
        <div className="text-[10px] font-bold text-orange-600 uppercase tracking-wider mb-2">Select One:</div>
        <div className="flex flex-col gap-2">
            {courses.map((course, idx) => (
                <div key={idx} className="flex items-center gap-2">
                    {idx > 0 && <span className="text-xs text-orange-400 font-bold">OR</span>}
                    <div className="flex-1 bg-white/60 px-2 py-1.5 rounded border border-orange-100 text-sm text-slate-700">
                        <span className="font-bold text-slate-900 mr-2">{course.code}</span>
                        {course.title}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const RequirementSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-4 last:mb-0">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
            <CheckCircle2 size={12} /> {title}
        </h4>
        <div className="flex flex-col gap-2">
            {children}
        </div>
    </div>
);

// --- Data Configuration ---

const minors = [
    {
        id: 'cs-minor',
        title: 'Computer Science Minor',
        subtitle: 'Foundations of Computing',
        icon: Binary,
        linkText: "View Computer Science Minor",
        link: "https://csi-undergraduate.catalog.cuny.edu/programs/CSC-MIN",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
        description: "A solid technical foundation for students in other majors. Requires completion of core math/CS courses plus one specialized track.",
        content: (
            <div className="space-y-4">
                <RequirementSection title="Core Requirements">
                    <OrGroup courses={[
                        { code: "MTH 123", title: "College Algebra & Trig" },
                        { code: "MTH 125", title: "Algebra & Trig with Review" }
                    ]} />
                    <CoursePill code="CSC 126" title="Intro to Computer Science" />
                    <CoursePill code="CSC 211" title="Intermediate Programming" />
                    <CoursePill code="CSC 220" title="Computer Organization" />
                    <CoursePill code="CSC 326" title="Data Structures" />
                </RequirementSection>

                <div className="p-3 bg-slate-100 rounded-lg text-sm text-slate-600 font-medium">
                    Plus: Select either the <span className="text-blue-700">Engineering Sequence</span> (Hardware focus) OR <span className="text-blue-700">Applications Sequence</span> (Software focus).
                </div>
            </div>
        )
    },
    {
        id: 'data-science',
        title: 'Data Science Minor',
        subtitle: 'Analytics & Machine Learning',
        link: "https://csi-undergraduate.catalog.cuny.edu/programs/DATASC-MIN",
        linkText: "View Data Science Minor",
        icon: BrainCircuit,
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2674&auto=format&fit=crop",
        description: "Focuses on extracting knowledge from data. Ideal for Math, Biology, and Business majors looking to add analytical skills.",
        content: (
            <div className="space-y-4">
                <RequirementSection title="Core Prerequisites">
                    <CoursePill code="CSC 245" title="Intro to Data Science" />
                    <CoursePill code="MTH 311" title="Probability Theory" />
                </RequirementSection>

                <RequirementSection title="Machine Learning Core (Select 1)">
                    <OrGroup courses={[
                        { code: "CSC 412", title: "Machine Learning" },
                        { code: "MTH 372", title: "Practical ML" }
                    ]} />
                </RequirementSection>

                <RequirementSection title="Advanced Electives (Select 1)">
                    <CoursePill code="CSC 315" title="Database Systems" />
                    <CoursePill code="CSC 480" title="Artificial Intelligence" />
                    <CoursePill code="MTH 410" title="Mathematical Statistics" />
                </RequirementSection>
            </div>
        )
    },
    {
        id: 'comp-ling',
        title: 'Computational Linguistics',
        subtitle: 'Language Processing & AI',
        link: "https://csi-undergraduate.catalog.cuny.edu/programs/CMPLNG-MIN",
        linkText: "View Computational Linguistics Minor",
        icon: Languages,
        image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=2832&auto=format&fit=crop",
        description: "An interdisciplinary minor bridging Computer Science and Linguistics. Perfect for interest in NLP, Speech Recognition, and AI.",
        content: (
            <div className="space-y-4">
                <RequirementSection title="Programming Core">
                    <OrGroup courses={[
                        { code: "CSC 140", title: "Comp Problem Solving (Python)" },
                        { code: "ISI 140", title: "Comp Problem Solving (Python)" }
                    ]} />
                    <OrGroup courses={[
                        { code: "CSC 141", title: "Python Lab" },
                        { code: "ISI 141", title: "Python Lab" }
                    ]} />
                </RequirementSection>

                <RequirementSection title="Linguistics Core">
                    <CoursePill code="LING 301" title="Intro to Linguistics" />
                    <OrGroup courses={[
                        { code: "LING 437", title: "Computational Linguistics" },
                        { code: "CSC 237", title: "Intro to Comp Ling" }
                    ]} />
                </RequirementSection>

                <RequirementSection title="Math/Logic Requirement (Select 1)">
                    <CoursePill code="MTH 113" title="Intro to Prob & Stats" />
                    <CoursePill code="MTH 123" title="College Algebra" />
                </RequirementSection>
            </div>
        )
    },
    {
        id: 'cyber-sec',
        title: 'Cyber Security Minor',
        subtitle: 'Network Defense & InfoSec',
        link: "https://csi-undergraduate.catalog.cuny.edu/programs/CYBSEC-MIN",
        linkText: "View Cyber Security Minor",
        icon: ShieldAlert,
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
        description: "Prepare for careers in information assurance. Learn to protect networks, secure data, and understand ethical hacking.",
        content: (
            <div className="space-y-4">
                <RequirementSection title="Core Security">
                    <CoursePill code="CSC 221" title="Networking & Security" />
                    <CoursePill code="CSC 223" title="Cybersecurity Fundamentals" />
                </RequirementSection>

                <RequirementSection title="Advanced Tracks (Select 1)">
                    <OrGroup courses={[
                        { code: "CSC 421", title: "Internet Data Comm" },
                        { code: "CSC 426", title: "Applied Cryptography" }
                    ]} />
                    <OrGroup courses={[
                        { code: "CSC 435", title: "Adv Data Communications" },
                        { code: "ISI 315", title: "InfoSec & Risk Mgmt" }
                    ]} />
                </RequirementSection>
            </div>
        )
    }
];

// --- Main Component ---

export default function MinorsAccordion() {
    const [activeId, setActiveId] = useState(minors[0].id);

    // Helper to find active content for the image side
    const activeFeature = minors.find(f => f.id === activeId) || minors[0];

    return (
        <section className=" mb-24">
            <div className="max-w-8xl mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="text-[#0369A1] font-bold tracking-widest uppercase text-xs mb-2 block">
                        Academic Minors
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Enhance Your Degree
                    </h2>

                    <div className="bg-slate-50 border-l-4 border-blue-500 p-5 rounded-r-lg max-w-3xl">
                        <p className="text-slate-700 mb-2">
                            A minor allows you to specialize in a specific area of technology while pursuing your major.
                            These are open to all CSI students who meet the prerequisites.
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:underline text-sm">
                            <BookOpen size={16} /> View Academic Catalog for Full Details
                        </a>
                    </div>
                </motion.div>

                {/* Main Accordion Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="backdrop-blur-md rounded-3xl p-4 md:p-6 shadow-sm border border-slate-200 flex flex-col lg:flex-row gap-6 min-h-[600px]"
                >

                    {/* LEFT SIDE: Accordion Controls */}
                    <div className="lg:w-full flex flex-col justify-start gap-3">
                        {minors.map((minor, idx) => {
                            const isActive = activeId === minor.id;

                            return (
                                <div
                                    key={minor.id}
                                    onClick={() => setActiveId(minor.id)}
                                    className={`relative cursor-pointer rounded-2xl transition-all duration-300 border overflow-hidden ${isActive
                                        ? 'bg-white shadow-lg border-blue-100 ring-1 ring-blue-50'
                                        : 'bg-transparent border-transparent hover:bg-white/50'
                                        }`}
                                >
                                    {/* Header Area */}
                                    <div className="p-5 flex items-center gap-4">

                                        <div className={`p-2.5 rounded-xl transition-colors duration-300 shrink-0 ${isActive ? 'bg-[#0369A1] text-white' : 'bg-slate-200 text-slate-500'
                                            }`}>
                                            <minor.icon size={22} />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className={`font-bold text-lg transition-colors ${isActive ? 'text-slate-900' : 'text-slate-600'
                                                }`}>
                                                {minor.title}
                                            </h3>
                                            {!isActive && (
                                                <p className="text-xs text-slate-400 font-medium">{minor.subtitle}</p>
                                            )}
                                        </div>

                                        <ChevronDown
                                            className={`text-slate-400 transition-transform duration-300 ${isActive ? 'rotate-180 text-[#0369A1]' : ''
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

                                            {/* Description */}
                                            <div className="mb-6 text-sm text-slate-500 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                                                <div className="flex items-center gap-2 mb-1 text-slate-800 font-bold text-xs uppercase tracking-wider">
                                                    <Info size={12} /> Overview
                                                </div>
                                                {minor.description}
                                                {minor.link && (
                                                    <div className="mt-3 text-[#0369A1] font-bold flex items-center gap-1 cursor-pointer hover:underline">
                                                        {minor.linkText} <ArrowRight size={14} />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Requirements List */}
                                            <div className="bg-slate-50/50 rounded-xl">
                                                {minor.content}
                                            </div>

                                            <div className="mt-4 pt-4 border-t border-slate-100 flex justify-end">
                                                <button className="text-xs font-bold text-[#0369A1] flex items-center gap-1 hover:gap-2 transition-all">
                                                    View Course Details <ArrowRight size={12} />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Active Indicator Line */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill-minor"
                                            className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0369A1]"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT SIDE: Dynamic Image Display */}
                    {/* <div className="lg:w-1/2 relative rounded-2xl overflow-hidden bg-slate-900 min-h-[300px] lg:min-h-full shadow-inner">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={activeFeature.image}
                                    alt={activeFeature.title}
                                    className="w-full h-full object-cover opacity-80"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

                                <div className="absolute bottom-10 left-8 right-8">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className="w-12 h-1 bg-blue-500 mb-6"></div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                                            {activeFeature.title}
                                        </h3>
                                        <p className="text-blue-100 font-medium text-lg max-w-md">
                                            {activeFeature.subtitle}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div> */}

                </motion.div>
            </div>
        </section>
    );
}