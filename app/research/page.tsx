'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileText,
    ExternalLink,
    User,
    BookOpen,
    Microscope,
    ArrowRight,
    Quote,
    Network,
    Cpu,
    ShieldCheck,
    Activity
} from 'lucide-react';
import Image from 'next/image';
import FacultyResearch from '@/components/faculty-lead-research';
import StudentResearch from '@/components/student-lead-research';
import Link from 'next/link';
// --- Real CSI Research Data ---
const researchProjects = [
    {
        id: 'p1',
        title: "Deep Learning for Malware Detection",
        abstract: "A novel multi-level system to identify and classify malware with higher accuracy than heuristic methods.",
        citation: "Zhong, W., & Gu, F. (2019). Expert Systems with Applications.",
        professor: "Prof. Feng Gu",
        tags: ["Cybersecurity", "AI"],
        icon: ShieldCheck,
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0957417419303008"
    },
    {
        id: 'p2',
        title: "Graph Partitioning of RNA Structures",
        abstract: "Applying extremal graph theory to partition RNA secondary structures and predict biological pseudoknots.",
        citation: "Petingi, L. (2019). Algorithms for Computational Biology.",
        professor: "Prof. Louis Petingi",
        tags: ["Bioinformatics", "Graph Theory"],
        icon: Network,
        link: "https://arxiv.org/abs/2109.03236"
    },
    {
        id: 'p3',
        title: "Perception-Driven Image Quality",
        abstract: "Creating bio-inspired computer vision models that mimic human visual perception to predict digital media quality.",
        citation: "Agaian, S. (2021). IEEE Int. Conf. on Imaging Systems.",
        professor: "Prof. Sos Agaian",
        tags: ["Computer Vision", "AI"],
        icon: Activity,
        link: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13033/130330K/An-impact-study-of-deep-learning-based-low-light-image/10.1117/12.3014452.short"
    },
    {
        id: 'p4',
        title: "Real-Time Weighted Sum Filtering",
        abstract: "GPU-accelerated optimization of digital holographic reconstruction for real-time image segmentation.",
        citation: "Zhang, S. (2014). Proceedings of SPIE.",
        professor: "Prof. Shuqun Zhang",
        tags: ["Optical Computing", "HPC"],
        icon: Cpu,
        link: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/9217/921723/Real-time-soft-partition-based-weighted-sum-filtering-with-GPU/10.1117/12.2062478.short"
    },
    {
        id: 'p5',
        title: "Hash Collisions via HPC Clusters",
        abstract: "Utilizing MPI on high-performance clusters to perform parallel collision searches on cryptographic functions.",
        citation: "Zhang, X. (2017). IEEE LISAT Conference.",
        professor: "Prof. Xiaowen Zhang",
        tags: ["Cryptography", "HPC"],
        icon: ShieldCheck,
        link: "https://ieeexplore.ieee.org/document/8001961"
    },
    {
        id: 'p6',
        title: "Wildfire Spread Simulation",
        abstract: "Integrating real-time sensor data into dynamic wildfire simulations using sequential Monte Carlo methods.",
        citation: "Gu, F. (2010). Int. Journal of Modeling & Simulation.",
        professor: "Prof. Feng Gu",
        tags: ["Simulation", "Data Science"],
        icon: FileText,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=RZ7Z6GMAAAAJ&citation_for_view=RZ7Z6GMAAAAJ:u5HHmVD_uO8C"
    },
    {
        id: 'p7',
        title: "Secure Secret Sharing Schemes",
        abstract: "Designing protocols to secure sensitive data across distributed IT infrastructures. Google Cyber NYC Research.",
        citation: "Zhang, X. (2013). Security and Comm. Networks.",
        professor: "Prof. Xiaowen Zhang",
        tags: ["Security", "Distributed Sys"],
        icon: Network,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=vX1p5wIAAAAJ&citation_for_view=vX1p5wIAAAAJ:ufrVoPGSRksC"
    },
    {
        id: 'p8',
        title: "Neural Topologies for Brain Modeling",
        abstract: "Studying neural network architectures to model brain functions and fuzzy clustering criteria.",
        citation: "Gueorguieva, N. (2020). Theoretical CS Research.",
        professor: "Prof. Natacha Gueorguieva",
        tags: ["Neural Networks", "Modeling"],
        icon: Activity,
        link: "https://asmedigitalcollection.asme.org/ebooks/book/145/chapter-abstract/28872/Simulation-of-Synaptic-Responses-in-an-Active?redirectedFrom=PDF"
    }
];

// --- Position Configuration (Two Arcs: Left & Right) ---
// Arranged to form parentheses ( ) shape around the center
const positions = [
    "top-[12%] left-[2%] lg:left-[5%]",              // Top Left
    "top-1/2 -translate-y-1/2 left-0 lg:left-[1%]",   // Mid Left
    "bottom-[12%] left-[2%] lg:left-[5%]",           // Bottom Left
    "top-[12%] right-[2%] lg:right-[5%]",             // Top Right
    "top-1/2 -translate-y-1/2 right-0 lg:right-[1%]", // Mid Right
    "bottom-[12%] right-[2%] lg:right-[5%]",           // Bottom Right
];

export default function ResearchHero() {
    const [startIndex, setStartIndex] = useState(0);

    // Cycle projects every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prev) => (prev + 1) % researchProjects.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    // Get the 6 currently visible projects
    const visibleProjects = Array.from({ length: 6 }).map((_, i) => {
        return researchProjects[(startIndex + i) % researchProjects.length];
    });

    return (
        <div className='max-w-8xl mx-auto pt-20 md:pt-24'>
            <section className="relative min-h-screen bg-slate-50 overflow-hidden flex flex-col items-center justify-center py-10 lg:py-0 rounded-xl">

                {/* --- Background Decorative Elements --- */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-100/40 rounded-full blur-3xl opacity-60" />
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] h-[95vw] max-w-[1400px] max-h-[1400px] opacity-20">
                        {/* Wide ellipses to frame the side arcs */}
                        <ellipse cx="50%" cy="50%" rx="48%" ry="40%" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="12 12" />
                        <ellipse cx="50%" cy="50%" rx="35%" ry="30%" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="6 6" />
                    </svg>
                </div>

                {/* --- Central Hub Text --- */}
                <div className="relative z-20 text-center max-w-md px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center relative justify-center w-32 h-32 rounded-xl text-white mb-5">
                            {/* <Microscope size={28} /> */}
                            <Image src="/csi-blue-logo.png" alt="Research" fill className="object-contain" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-4 tracking-tight">
                            Innovation at <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8AC2EB] to-cyan-500">
                                The Frontier
                            </span>
                        </h1>
                        <p className="text-slate-600 text-base leading-relaxed mb-8">
                            From Artificial Intelligence to Cybersecurity, explore the groundbreaking research conducted by CSI faculty and students.                    </p>

                        {/* <button className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto shadow-xl">
                            Browse All Publications <ArrowRight size={14} />
                        </button> */}
                    </motion.div>
                </div>

                {/* --- Two-Sided Arcs (Desktop) --- */}
                <div className="absolute inset-0 z-10 hidden lg:block pointer-events-none">
                    <div className="relative w-full h-full max-w-[1400px] mx-auto">
                        {visibleProjects.map((project, idx) => (
                            <div
                                key={`${project.id}-${idx}`}
                                className={`absolute w-[280px] pointer-events-auto transition-all duration-1000 ease-in-out ${positions[idx]}`}
                            >
                                <AnimatePresence mode='wait' >
                                    <ResearchCard
                                        key={project.title}
                                        project={project}
                                    />
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- Stacked Cards (Mobile/Tablet) --- */}
                <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 px-4 mt-12 w-full max-w-4xl z-10">
                    {visibleProjects.slice(0, 4).map((project) => (
                        <ResearchCard key={project.id} project={project} />
                    ))}
                </div>

            </section>
            <div className='' id='faculty-research'><FacultyResearch /></div>
            <div className='' id='student-research'><StudentResearch /></div>
        </div>
    );
}

// --- Sub-Component: The Research Article Card ---
const ResearchCard = ({ project }: { project: typeof researchProjects[0] }) => {
    return (
        <Link href={project.link} target='_blank' rel='noopener noreferrer'>
            <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, zIndex: 50, transition: { duration: 0.2 } }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-md border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all cursor-pointer group flex flex-col h-auto min-h-[180px]"
            >
                {/* Header: Icon & Tag */}
                <div className="flex justify-between items-start mb-2">
                    <div className="p-1.5 bg-blue-50 text-[#8AC2EB] rounded-lg">
                        <project.icon size={16} />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                        {project.tags[0]}
                    </span>
                </div>

                {/* Content */}
                <h3 className="text-sm font-bold text-slate-900 leading-snug mb-1.5 line-clamp-2 group-hover:text-blue-700 transition-colors">
                    {project.title}
                </h3>

                <div className="relative mb-3">
                    <p className="text-[11px] text-slate-500 leading-snug line-clamp-3">
                        {project.abstract}
                    </p>
                </div>

                {/* Footer: Metadata */}
                <div className="mt-auto pt-2 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[#8AC2EB] shrink-0">
                            <User size={10} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-semibold text-slate-700 leading-none">{project.professor}</span>
                            <span className="text-[9px] text-slate-400 italic leading-none mt-0.5">Professor</span>
                        </div>
                    </div>

                    <div
                        className="p-1.5 rounded-full bg-slate-50 text-slate-400 group-hover:bg-[#8AC2EB] group-hover:text-white transition-all"
                        aria-hidden="true"
                    >
                        <ExternalLink size={12} />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};