'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
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
            <div className="space-y-3 text-slate-900 text-sm">
                <div>
                    <p className="font-bold text-slate-900 mb-1.5">For AAS Computer Technology, BS in Computer Science, or BS in Computer Science-Mathematics:</p>
                    <p className="mb-2">Find your advisor on <a href="https://www.cuny.edu/about/administration/offices/cis/cunyfirst/" target="_blank" rel="noopener noreferrer" className="text-[#0369A1] hover:text-blue-800 underline font-semibold">CUNYFirst</a>. Use the <a href="https://www.cs.csi.cuny.edu/~flowchart/" className="text-[#0369A1] hover:text-blue-800 underline font-semibold">CS FlowChart</a> for self-advisement and course planning.</p>
                </div>
                <div>
                    <p className="font-bold text-slate-900 mb-1.5">For BS in Information Systems and Informatics (ISI):</p>
                    <p className="mb-1.5">Contact ISI coordinators:</p>
                    <ul className="list-disc list-inside space-y-0.5 ml-2 text-sm">
                        <li>
                            <Link href="/people#professors" className="text-[#0369A1] hover:text-blue-800 underline font-semibold">
                                Prof. Louis Petingi
                            </Link> - Office: 1N-215
                        </li>
                        <li>
                            <Link href="/people#professors" className="text-[#0369A1] hover:text-blue-800 underline font-semibold">
                                Prof. Soon Chun
                            </Link> - Office: 1N-219
                        </li>
                    </ul>
                </div>
                <div className="pt-3 border-t border-slate-200 space-y-1.5">
                    <a href="https://ssologin.cuny.edu/cuny.html?bmctx=D59E04882DF4F80F0E4A64DD59167034&password=secure_string&contextType=external&OverrideRetryLimit=1&ChallengeRedirectMethod=GET&username=string&challenge_url=https://ssologin.cuny.edu/cuny.html&request_id=3988825378751157104&authn_try_count=0&locale=en_US&resource_url=https%253A%252F%252Flandingpageprod.cuny.edu%252Fland%252Fmain.jsp" target="_blank" rel="noopener noreferrer" aria-label="Sign in to DegreeWorks (opens in new tab)" className="flex items-center gap-2 text-[#0369A1] hover:text-blue-800 font-semibold text-sm focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded">
                        Sign in to DegreeWorks <ExternalLink size={12} aria-hidden="true" />
                    </a>
                    <p className="text-xs text-slate-700">Track degree progress, view required courses, and plan your academic path.</p>
                    <Link href="/courses?filter=undergraduate" className="flex items-center gap-2 text-[#0369A1] hover:text-blue-800 font-semibold text-sm focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded">
                        View Undergraduate Catalog <ExternalLink size={12} aria-hidden="true" />
                    </Link>
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
            <div className="space-y-3 text-slate-900 text-sm">
                <p className="text-sm">If your CS credits from another accredited college show as <span className="font-bold">CSC BKT credits</span> in CUNYfirst, request an evaluation to convert them to specific courses.</p>
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                    <p className="font-bold text-slate-900 mb-1.5 text-sm">Evaluation Process:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-2 text-sm">
                        <li>Complete the <a href="https://www.cs.csi.cuny.edu/content/TransferOnlineFormV2.pdf" className="text-[#0369A1] hover:text-blue-800 underline font-semibold">Transfer Credit Evaluation Form</a></li>
                        <li>Include transcript from the original institution</li>
                        <li>Provide course description or syllabus from that college</li>
                        <li>Submit to <span className="font-bold">Room 1N-215</span> or contact the department Chair</li>
                    </ol>
                </div>
                <p className="text-xs text-slate-700"><span className="font-bold">Processing Time:</span> Evaluations typically take 2-4 weeks. Submit early in the semester for timely course registration.</p>
                <a href="https://www.cs.csi.cuny.edu/content/TransferOnlineFormV2.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Transfer Credit Evaluation Form PDF (opens in new tab)" className="inline-flex items-center gap-2 text-[#0369A1] hover:text-blue-800 font-semibold border border-blue-200 rounded-lg px-3 py-1.5 text-sm hover:bg-blue-50 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
                    <BookOpen size={14} aria-hidden="true" />
                    Download Evaluation Form
                    <ExternalLink size={12} aria-hidden="true" />
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
            <div className="space-y-3 text-slate-900 text-sm">
                <div>
                    <p className="font-bold text-slate-900 mb-1.5">CS Department Tutoring:</p>
                    <ul className="list-disc list-inside space-y-0.5 ml-2 text-sm mb-2">
                        <li><span className="font-semibold">Location:</span> Room 1N-232 (Computer Science Lab)</li>
                        <li><span className="font-semibold">Hours:</span> Monday-Friday, varies by semester</li>
                        <li><span className="font-semibold">Courses:</span> CSC 126, 226, 326, and upper-level courses</li>
                        <li><span className="font-semibold">Format:</span> Walk-in, one-on-one, and group sessions</li>
                    </ul>
                    <a href="https://www.cs.csi.cuny.edu/content/tutoring.pdf" target="_blank" rel="noopener noreferrer" aria-label="Computer Science Tutoring Schedule PDF (opens in new tab)" className="flex items-center gap-2 text-[#0369A1] hover:text-blue-700 font-semibold text-sm focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded">
                        View Current Tutoring Schedule <ExternalLink size={12} aria-hidden="true" />
                    </a>
                </div>
                <div className="pt-3 border-t border-slate-200">
                    <p className="font-bold text-slate-900 mb-1.5">Additional Support Services:</p>
                    <p className="text-sm mb-2">The Office of Academic Support provides free tutoring for math, writing, study skills, and other subjects.</p>
                    <a href="https://www.csi.cuny.edu/students/academic-assistance/tutoring" target="_blank" rel="noopener noreferrer" aria-label="Office of Academic Support (opens in new tab)" className="flex items-center gap-2 text-[#0369A1] hover:text-blue-700 font-semibold text-sm focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded">
                        Office of Academic Support <ExternalLink size={12} aria-hidden="true" />
                    </a>
                </div>
                <div className="bg-teal-50 border border-teal-100 rounded-lg p-2 mt-2">
                    <p className="text-xs text-slate-900"><span className="font-bold">Pro Tip:</span> Tutoring is most effective when used regularly throughout the semester, not just before exams. Start early!</p>
                </div>
            </div>
        )
    }
];

// --- Components ---

export default function ResourcesAccordion() {
    const [activeId, setActiveId] = useState(features[0].id);
    const shouldReduceMotion = useReducedMotion();

    // Helper to find active content for the image side
    const activeFeature = features.find(f => f.id === activeId) || features[0];

    return (
        <section className="bg-white py-8 md:py-12">
            <div className="max-w-8xl mx-auto px-4 md:px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6 md:mb-8 text-start"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 md:mb-3">
                        Resources
                    </h2>
                    <p className="text-slate-900 max-w-2xl text-sm md:text-base">
                        Access advisement, transfer credit evaluation, tutoring services, and academic support to succeed in your studies.
                    </p>
                </motion.div>

                {/* Main Accordion Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-slate-50 rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-5 shadow-sm border border-slate-200 flex flex-col lg:flex-row gap-3 md:gap-4 min-h-[300px] md:min-h-[350px]"
                >

                    {/* LEFT SIDE: Accordion Controls */}
                    <div className="lg:w-1/2 flex flex-col justify-center gap-2 md:gap-3" role="tablist" aria-label="Resources">
                        {features.map((feature) => {
                            const isActive = activeId === feature.id;
                            const panelId = `panel-${feature.id}`;
                            const headingId = `heading-${feature.id}`;

                            return (
                                <div
                                    key={feature.id}
                                    role="presentation"
                                    className={`relative rounded-xl md:rounded-2xl transition-all duration-300 border overflow-hidden ${isActive
                                        ? 'bg-white shadow-lg border-blue-100 scale-[1.02]'
                                        : 'bg-transparent border-transparent hover:bg-white/50'
                                        }`}
                                >
                                    {/* Header Area - Now a proper button */}
                                    <button
                                        id={headingId}
                                        onClick={() => setActiveId(feature.id)}
                                        aria-expanded={isActive}
                                        aria-controls={panelId}
                                        role="tab"
                                        aria-selected={isActive}
                                        className="w-full p-3 sm:p-4 md:p-5 flex items-center gap-3 md:gap-4 text-left focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-xl md:rounded-2xl min-h-11"
                                    >
                                        <div className={`p-2 md:p-3 rounded-lg md:rounded-xl transition-colors duration-300 shrink-0 ${isActive ? 'bg-[#0369A1] text-white' : 'bg-slate-200 text-slate-500'
                                            }`}>
                                            <feature.icon size={20} className="md:w-6 md:h-6" aria-hidden="true" />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h3 className={`font-bold text-base md:text-lg transition-colors ${isActive ? 'text-slate-900' : 'text-slate-600'
                                                }`}>
                                                {feature.title}
                                            </h3>
                                            {/* Subtitle fades out when active to make room for body */}
                                            {!isActive && (
                                                <p className="text-xs md:text-sm text-slate-400 mt-0.5 md:mt-1 truncate">{feature.subtitle}</p>
                                            )}
                                        </div>

                                        <ChevronDown
                                            aria-hidden="true"
                                            size={20}
                                            className={`text-slate-400 transition-transform duration-300 shrink-0 ${isActive ? 'rotate-180 text-[#0369A1]' : ''
                                                }`}
                                        />
                                    </button>

                                    {/* Collapsible Body Content */}
                                    <motion.div
                                        id={panelId}
                                        role="tabpanel"
                                        aria-labelledby={headingId}
                                        aria-hidden={!isActive}
                                        initial={false}
                                        animate={{
                                            height: isActive ? 'auto' : 0,
                                            opacity: isActive ? 1 : 0
                                        }}
                                        transition={{
                                            duration: shouldReduceMotion ? 0 : 0.4,
                                            ease: "easeInOut"
                                        }}
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
                                                    <span className="text-sm font-bold text-[#0369A1] flex items-center gap-2">
                                                        Learn more <ArrowRight size={16} aria-hidden="true" />
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </motion.div>

                                    {/* Active Indicator Line (Left Edge) */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute left-0 top-0 bottom-0 w-1 bg-[#0369A1]"
                                            aria-hidden="true"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT SIDE: Dynamic Image Display */}
                    <div className="hidden lg:block lg:w-1/2 relative rounded-xl md:rounded-2xl overflow-hidden bg-slate-200 min-h-[250px] md:min-h-[300px] lg:min-h-full" aria-hidden="true">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.1 }}
                                animate={shouldReduceMotion ? false : { opacity: 1, scale: 1 }}
                                exit={shouldReduceMotion ? false : { opacity: 0 }}
                                transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={activeFeature.image}
                                    alt=""
                                    role="presentation"
                                    fill
                                    sizes="50vw"
                                    className="object-cover"
                                />

                                {/* Gradient Overlay for aesthetic text contrast */}
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent"></div>

                                {/* Floating Label inside Image */}
                                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 bg-white/90 backdrop-blur-md px-3 md:px-4 py-2 rounded-lg shadow-lg border border-white/50">
                                    <p className="text-[10px] md:text-xs font-bold text-blue-900 uppercase tracking-wider mb-0.5">
                                        Featured
                                    </p>
                                    <p className="text-xs md:text-sm font-semibold text-slate-800">
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