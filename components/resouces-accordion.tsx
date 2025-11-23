'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, ArrowLeftRight, BookOpen, ChevronDown, ArrowRight, ExternalLink } from 'lucide-react';

// --- Data Configuration ---

const features = [
    {
        id: 'advisement',
        title: 'Advisement',
        subtitle: 'Get guidance on your academic path.',
        icon: GraduationCap,
        description: "Find your advisor and access self-advisement resources to plan your degree.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2670&auto=format&fit=crop",
        content: (
            <div className="space-y-4 text-slate-600">
                <div>
                    <p className="font-semibold text-slate-900 mb-2">For AAS Computer Technology, BS in Computer Science, or BS in Computer Science-Mathematics:</p>
                    <p className="mb-3">You can find out who is your advisor on <a href="https://home.cunyfirst.cuny.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-medium">CUNYFirst</a>. Please use the <a href="#" className="text-blue-600 hover:text-blue-700 underline font-medium">CS FlowChart</a> for self-advisement.</p>
                </div>
                <div>
                    <p className="font-semibold text-slate-900 mb-2">For BS in Information Systems and Informatics (ISI):</p>
                    <p className="mb-3">Please contact the ISI coordinator:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Prof. Louis Petingi</li>
                        <li>Prof. Soon Chun</li>
                    </ul>
                </div>
                <div className="pt-4 border-t border-slate-200 space-y-2">
                    <a href="https://degreeworks.cuny.edu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                        Sign in to DegreeWorks <ExternalLink size={14} />
                    </a>
                    <p className="text-sm text-slate-500">See what courses you can take to fulfill degree requirements and track your academic progress.</p>
                    <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                        View Undergraduate Catalog <ExternalLink size={14} />
                    </a>
                </div>
            </div>
        )
    },
    {
        id: 'transfer',
        title: 'Transfer Students',
        subtitle: 'Evaluate your transfer credits.',
        icon: ArrowLeftRight,
        description: "If you completed computer science coursework at another accredited college, request an evaluation of your transfer credits.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2670&auto=format&fit=crop",
        content: (
            <div className="space-y-4 text-slate-600">
                <p>If you completed computer science coursework at another accredited college, and these credits did not convert to anything in the computer science catalog here (i.e. they show as <span className="font-medium">CSC BKT credits</span> in your CUNYfirst course history), you may request these credits be evaluated.</p>
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <p className="font-semibold text-slate-900 mb-2">To request evaluation:</p>
                    <ol className="list-decimal list-inside space-y-2 ml-2">
                        <li>Complete the <a href="#" className="text-blue-600 hover:text-blue-700 underline font-medium">Transfer Credit Evaluation Form</a></li>
                        <li>Include a copy of your transcript from the institution at which you completed the course</li>
                        <li>Include either the course description (from that college's catalog) or syllabus</li>
                        <li>Submit these to <span className="font-medium">1N-215</span>, or contact the department Chair</li>
                    </ol>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium border border-blue-200 rounded-lg px-4 py-2 hover:bg-blue-50 transition-colors">
                    <BookOpen size={16} />
                    Transfer Credit Evaluation Form Download
                    <ExternalLink size={14} />
                </a>
            </div>
        )
    },
    {
        id: 'tutoring',
        title: 'Tutoring',
        subtitle: 'Get academic support when you need it.',
        icon: BookOpen,
        description: "Access computer science tutoring services and academic support resources to help you succeed.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2670&auto=format&fit=crop",
        content: (
            <div className="space-y-4 text-slate-600">
                <div>
                    <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-2">
                        Computer Science Tutoring Schedule <ExternalLink size={14} />
                    </a>
                    <p className="text-sm text-slate-500">View the current tutoring schedule for computer science courses.</p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                    <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-2">
                        Office of Academic Support <ExternalLink size={14} />
                    </a>
                    <p className="text-sm text-slate-500">Access additional academic support services and resources.</p>
                </div>
            </div>
        )
    }
];

// --- Components ---

export default function ResourcesAccordion() {
    const [activeId, setActiveId] = useState(features[0].id);

    // Helper to find active content for the image side
    const activeFeature = features.find(f => f.id === activeId) || features[0];

    return (
        <section className=" bg-white">
            <div className="max-w-8xl mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-start"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Resources
                    </h2>
                    <p className="text-slate-600 max-w-2xl text-lg">
                        We offer a wide range of resources to help you succeed in your academic journey.
                    </p>
                </motion.div>

                {/* Main Accordion Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-slate-50 rounded-3xl p-4 md:p-6 shadow-sm border border-slate-200 flex flex-col lg:flex-row gap-6 min-h-[500px]"
                >

                    {/* LEFT SIDE: Accordion Controls */}
                    <div className="lg:w-1/2 flex flex-col justify-center gap-4">
                        {features.map((feature) => {
                            const isActive = activeId === feature.id;

                            return (
                                <div
                                    key={feature.id}
                                    onClick={() => setActiveId(feature.id)}
                                    className={`relative cursor-pointer rounded-2xl transition-all duration-300 border overflow-hidden ${isActive
                                        ? 'bg-white shadow-lg border-blue-100 scale-[1.02]'
                                        : 'bg-transparent border-transparent hover:bg-white/50'
                                        }`}
                                >
                                    {/* Header Area */}
                                    <div className="p-5 flex items-center gap-4">
                                        <div className={`p-3 rounded-xl transition-colors duration-300 ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'
                                            }`}>
                                            <feature.icon size={24} />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className={`font-bold text-lg transition-colors ${isActive ? 'text-slate-900' : 'text-slate-600'
                                                }`}>
                                                {feature.title}
                                            </h3>
                                            {/* Subtitle fades out when active to make room for body */}
                                            {!isActive && (
                                                <p className="text-sm text-slate-400 mt-1">{feature.subtitle}</p>
                                            )}
                                        </div>

                                        <ChevronDown
                                            className={`text-slate-400 transition-transform duration-300 ${isActive ? 'rotate-180 text-blue-600' : ''
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
                                            {isActive && feature.content ? (
                                                feature.content
                                            ) : (
                                                <>
                                                    <p className="text-slate-600 leading-relaxed mb-4 border-l-2 border-blue-100 pl-4">
                                                        {feature.description}
                                                    </p>
                                                    <button className="text-sm font-bold text-blue-600 flex items-center gap-2 hover:gap-3 transition-all">
                                                        Learn more <ArrowRight size={16} />
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </motion.div>

                                    {/* Active Indicator Line (Left Edge) */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT SIDE: Dynamic Image Display */}
                    <div className="lg:w-1/2 relative rounded-2xl overflow-hidden bg-slate-200 min-h-[300px] lg:min-h-full">
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

                                {/* Gradient Overlay for aesthetic text contrast if needed */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>

                                {/* Floating Label inside Image */}
                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/50">
                                    <p className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-0.5">
                                        Featured
                                    </p>
                                    <p className="text-sm font-semibold text-slate-800">
                                        {activeFeature.subtitle}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}