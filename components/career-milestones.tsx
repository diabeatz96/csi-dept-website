'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileText,
    Github,
    Linkedin,
    Users,
    Briefcase,
    GraduationCap,
    Code2,
    Terminal,
    Cpu,
    Globe,
    Search,
    PenTool,
    Coffee,
    Server,
    Database,
    Layout,
    Cloud
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import Link from 'next/link';

// --- Data: Timeline Milestones ---
const timelineData = [
    {
        id: 'freshman',
        year: 'Freshman',
        tagline: 'Discovery & Foundations',
        xPosition: '0%', // Starts at far left
        gridItems: [
            { icon: Briefcase, title: "Career Center", desc: "Schedule first meeting with a counselor.", href: "https://www.csi.cuny.edu/campus-life/student-services/center-career-and-professional-development" },
            { icon: FileText, title: "Resume V1", desc: "Draft resume focusing on coursework.", href: "https://www.csi.cuny.edu/sites/default/files/pdf/schoolofbusiness/ResumeTemplate.pdf" },
            { icon: Users, title: "Join Clubs", desc: "Join ACM or WiCS for community.", href: "https://csi.campuslabs.com/engage/organizations?query=computer%20science" },
            { icon: Search, title: "Explore Majors", desc: "Decide between CS and ISI tracks." },
            { icon: Code2, title: "Intro To Computer Science", desc: "Master syntax in CSC 126.", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0626561' }
        ]
    },
    {
        id: 'sophomore',
        year: 'Sophomore',
        tagline: 'Building & Exploring',
        xPosition: '25%',
        gridItems: [
            { icon: Github, title: "Git Basics", desc: "Push your first class project to GitHub.", href: "https://www.csi.cuny.edu/campus-life/student-services/center-career-and-professional-development" },
            { icon: Terminal, title: "Side Projects", desc: "Build a simple calculator or app.", href: "https://learn.microsoft.com/en-us/cpp/get-started/tutorial-console-cpp?view=msvc-170" },
            { icon: PenTool, title: "Hackathons", desc: "Participate in CUNY Hackathons.", href: "https://hackknight.org/" },
            { icon: Linkedin, title: "LinkedIn", desc: "Create profile and connect with alumni.", href: "https://www.linkedin.com/" },
            { icon: Server, title: "Data Structs", desc: "Focus heavily on CSC 326.", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0626831' }
        ]
    },
    {
        id: 'junior',
        year: 'Junior',
        tagline: 'Professionalization',
        xPosition: '50%',
        gridItems: [
            { icon: GraduationCap, title: "CUNY Tech Prep", desc: "Apply for full-stack training.", href: "https://cunytechprep.org/" },
            { icon: Briefcase, title: "Internships", desc: "Apply to 50+ summer positions.", href: "https://www.cuny.edu/employment/student-jobs/internships/cuny-internship-programs/" },
            { icon: Coffee, title: "Networking", desc: "Attend CUNY Tech Meetups.", href: 'https://www.cuny.edu/about/administration/offices/ocip/students/cuny-tech-consortium/working-groups/' },
            { icon: Cpu, title: "Research", desc: "Join an NSF-funded research lab.", href: 'https://www.cuny.edu/financial-aid/scholarships/prestigious-scholarships/undergraduate-research-opportunities/' },
            { icon: Globe, title: "System Design", desc: "Learn scale for advanced interviews.", href: 'https://sysdine.dev/' }
        ]
    }
];

// --- Data: Web Job Nodes (The colorful dots on the right) ---
// Positioned on concentric circles [60, 120, 200, 280] at evenly spaced angles
const jobNodes = [
    { id: 1, role: "Software Engineer", stack: "React, Node.js, Python", salary: "$110k+", color: "#3b82f6", r: 390, deg: 250, icon: Code2 }, // Blue - Outer circle, top
    { id: 2, role: "Data Analyst", stack: "SQL, Tableau, R", salary: "$95k+", color: "#10b981", r: 320, deg: 1000, icon: Database }, // Green - Third circle, right
    { id: 3, role: "DevOps Engineer", stack: "AWS, Docker, CI/CD", salary: "$125k+", color: "#f59e0b", r: 150, deg: -15, icon: Cloud }, // Orange - Second circle, bottom
    { id: 4, role: "UX Engineer", stack: "Figma, CSS, Accessibility", salary: "$105k+", color: "#8b5cf6", r: 358, deg: 180, icon: Layout }, // Purple - Inner circle, left
];

export default function CareerMilestones() {
    const [activeNode, setActiveNode] = useState(timelineData[0].id);
    const [hoveredJob, setHoveredJob] = useState<number | null>(null);

    // Helper to get current grid data
    const currentData = timelineData.find(n => n.id === activeNode) || timelineData[0];

    return (
        <section className="relative  min-h-screen py-24 mt-24 overflow-hidden flex flex-col justify-center [mask-composite:intersect] [mask-image:linear-gradient(to_bottom,transparent,black_6rem,linear-gradient(to_left,transparent,black_6rem))]">

            {/* ------------------------------------------------------- */}
            {/* SVG BACKGROUND LAYER                                    */}
            {/* ------------------------------------------------------- */}
            <div className="absolute inset-0 pointer-events-none  -top-1/8">
                <svg className="w-full h-full" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <radialGradient id="webGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" stopColor="#eff6ff" stopOpacity="1" />
                            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                        </radialGradient>
                    </defs>

                    {/* 1. The Main Connecting Line */}
                    {/* Aligned Y=280 to match the HTML timeline position */}
                    <motion.line
                        x1="-100" y1="280"
                        x2="1050" y2="280"
                        stroke="#e2e8f0"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />

                    {/* 2. The Radar/Web (Scaled Down & Positioned) */}
                    {/* Center moved to 1050, 280 */}
                    <g transform="translate(1050, 280)">

                        {/* Concentric Dashed Circles (Radii Reduced) */}
                        {[60, 120, 200, 280].map((r, i) => (
                            <motion.circle
                                key={i}
                                r={r}
                                fill="none"
                                stroke="#f1f5f9"
                                strokeWidth="1.5"
                                strokeDasharray="4 4"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                            />
                        ))}

                        {/* Radial Lines */}
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                            <motion.line
                                key={deg}
                                x1="0" y1="0"
                                x2={Math.cos(deg * Math.PI / 180) * 280}
                                y2={Math.sin(deg * Math.PI / 180) * 280}
                                stroke="#f1f5f9"
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            />
                        ))}

                        {/* Center Anchor Dot */}
                        <circle r="6" fill="#cbd5e1" />
                    </g>
                </svg>

                {/* 3. Interactive Web Dots (Rendered in HTML Layer for Tooltips, but positioned using SVG math logic) */}
                {/* We use an absolute container overlaid on the SVG position */}
                <div className="absolute left-[80%] top-1/2 w-0 h-0 overflow-visible pointer-events-auto z-50 ">
                    {jobNodes.map((job) => {
                        // Calculate position based on radius and degree
                        const rad = (job.deg * Math.PI) / 180;
                        const x = job.r * Math.cos(rad);
                        const y = job.r * Math.sin(rad);

                        return (
                            <Tooltip key={job.id}>
                                <TooltipTrigger
                                    className="absolute  z-50 "
                                    style={{ left: x, top: y }}
                                    aria-label={`${job.role}: ${job.stack}, Average salary ${job.salary}`}
                                // onMouseEnter={() => setHoveredJob(job.id)}
                                // onMouseLeave={() => setHoveredJob(null)}
                                >
                                    {/* The Dot */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        whileHover={{ scale: 1.5 }}
                                        transition={{ delay: 1.5 }}
                                        className="w-4 h-4 rounded-full cursor-pointer shadow-sm ring-2 ring-white"
                                        style={{ backgroundColor: job.color }}
                                        aria-hidden="true"
                                    />

                                    {/* Pulse */}
                                    <div className="absolute inset-0 rounded-full opacity-30 animate-ping pointer-events-none" style={{ backgroundColor: job.color }} aria-hidden="true" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <motion.div
                                    // initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    // animate={{ opacity: 1, y: 0, scale: 1 }}
                                    // exit={{ opacity: 0, y: 5, scale: 0.9 }}
                                    // className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 bg-slate-900 text-white p-3 rounded-lg shadow-xl text-xs z-30"
                                    >
                                        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-700">
                                            <job.icon size={12} className="text-blue-400" />
                                            <span className="font-bold">{job.role}</span>
                                        </div>
                                        <div className="space-y-1 text-slate-300">
                                            <p>Stack: {job.stack}</p>
                                            <p className="text-emerald-400 font-mono">Avg: {job.salary}</p>
                                        </div>
                                        {/* Arrow */}
                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
                                    </motion.div>
                                </TooltipContent>

                            </Tooltip>
                        );
                    })}
                </div>
            </div>


            {/* ------------------------------------------------------- */}
            {/* MAIN CONTENT LAYER                                      */}
            {/* ------------------------------------------------------- */}
            <div className="max-w-[1400px] mx-auto px-6 w-full relative z-0 ">

                {/* Header Section */}
                <div className="max-w-4xl">
                    <span className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-3 pl-1 block">
                        Student Roadmap
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 ">
                        Navigate your <br />
                        <span className="text-[#0369A1]">Career Milestones</span>
                    </h2>

                    {/* 
               INTERACTIVE TIMELINE (Positioned Between Header and Description)
               Height is set to preserve space for the dots and labels.
            */}
                    <div className="relative w-full h-24  max-w-3xl z-50 ">
                        {/* The Timeline Line (Visual only, matches SVG line y=280 relative to screen, here local) */}
                        <div className="absolute top-1/2 left-0 w-full h-[2px] " />

                        {timelineData.map((node) => {
                            const isActive = activeNode === node.id;
                            return (
                                <div
                                    key={node.id}
                                    className="absolute top-1/2 -translate-y-1/2 group cursor-pointer"
                                    style={{ left: node.xPosition }}
                                    onClick={() => setActiveNode(node.id)}
                                >
                                    {/* The Dot Marker */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{
                                            scale: isActive ? 1.3 : 1,
                                            backgroundColor: isActive ? '#2563eb' : '#ffffff',
                                            borderColor: isActive ? '#bfdbfe' : '#cbd5e1'
                                        }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="w-5 h-5 rounded-full border-[3px] shadow-lg relative z-20 hover:border-blue-400 transition-colors"
                                    />

                                    {/* Ripple/Pulse Effect when Active */}
                                    {isActive && (
                                        <div className="absolute inset-0 -m-2 rounded-full bg-blue-500 opacity-20 animate-ping z-10" />
                                    )}

                                    {/* Label */}
                                    <div className={`absolute top-8 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${isActive ? 'text-[#0369A1]' : 'text-slate-600'
                                        }`}>
                                        {node.year}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <p className="text-slate-600 leading-relaxed text-lg max-w-xl mb-6 ">
                        Click on a milestone above to reveal the essential steps, workshops, and opportunities for that academic year.
                    </p>

                    {/* Current Active Info Box */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeNode}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="p-4 bg-blue-50 border-l-4 border-[#0369A1] rounded-r-lg inline-block mb-16 "
                        >
                            <h3 className="font-bold text-blue-900 text-lg">{currentData.year}</h3>
                            <p className="text-blue-700 text-sm">{currentData.tagline}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>


                {/* ------------------------------------------------------- */}
                {/* BOTTOM SECTION: Dynamic Feature Grid                    */}
                {/* ------------------------------------------------------- */}
                <div className="min-h-[250px] ">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeNode} // Re-renders grid when activeNode changes
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
                        >
                            {currentData.gridItems.map((item, idx) => (
                                <Link key={idx} href={item.href || '#'} target="_blank">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }} // Stagger effect
                                        className="bg-slate-50 rounded-xl h-full p-5 border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all duration-300 group"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 mb-4 group-hover:bg-[#8AC2EB] group-hover:text-white transition-colors duration-300 shadow-sm">
                                            <item.icon size={20} />
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-2 text-sm">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-slate-500 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                </Link>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}