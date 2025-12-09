'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Briefcase,
    GraduationCap,
    Users,
    Code2,
    Laptop,
    Building2,
    BookOpen,
    Info,
    ArrowUpRight,
    Search,
    Monitor,
    Rocket
} from 'lucide-react';
import Image from 'next/image';
import StudentSpotlights from '@/components/student-spotlight';
// --- Data Configuration ---

const resourceCategories = [
    {
        title: "Career & Internships",
        icon: Briefcase,
        description: "Launch your career with internships, job listings, and professional development tools.",
        links: [
            { label: "Scholarships for CS & Women in CS", url: "#" },
            { label: "Handshake: Internship & Job Opportunities", url: "#" },
            { label: "Internship Prep Book", url: "#" },
            { label: "NYC Tech Talent Pipeline", url: "#" },
            { label: "CUNY Internship Program", url: "#" },
            { label: "Center for Career & Professional Development", url: "#" }
        ]
    },
    {
        title: "Research & Innovation",
        icon: Search,
        description: "Engage in groundbreaking research like the REU program and collaborative projects.",
        links: [
            { label: "Research Experiences for Undergraduates (REU)", url: "#" },
            { label: "CUNY High Performance Computing Center", url: "#" },
            { label: "CUNY Institute for Software Design (CISDD)", url: "#" },
            { label: "Virtual Work Experiences", url: "#" }
        ]
    },
    {
        title: "CUNY 2X Tech",
        icon: Code2,
        description: "A $2M initiative to double the number of tech graduates from CUNY.",
        links: [
            { label: "About CUNY 2X", url: "#" },
            { label: "Benefits of Joining", url: "#" },
            { label: "TTP Residency", url: "#" },
            { label: "Virtual Work Experiences for CLUE", url: "#" }
        ]
    },
    {
        title: "CUNY Tech Prep",
        icon: Rocket,
        description: "A year long program to help students get hands on experience working on technical projects in teams.",
        links: [
            { label: "About CUNY Tech Prep", url: "#" },
            { label: "How to Apply", url: "#" },
            { label: "Program Benefits", url: "#" },
            { label: "Current Projects", url: "#" },
            { label: "Student Testimonials", url: "#" }
        ]
    },
    {
        title: "Academic Support",
        icon: BookOpen,
        description: "Get the help you need to succeed in your coursework.",
        links: [
            { label: "CS Tutoring Schedule", url: "#" },
            { label: "Office of Academic Support", url: "#" },
            { label: "Registrar", url: "#" },
            { label: "Financial Aid", url: "#" }
        ]
    },
    {
        title: "Software & Tools",
        icon: Laptop,
        description: "Access essential software and technical documentation.",
        links: [
            { label: "Microsoft Imagine Access", url: "#" },
            { label: "Linux Environment Setup", url: "#" },
            { label: "Software Setup Guides", url: "#" },
            { label: "Student Technology Help Desk", url: "#" }
        ]
    },
    {
        title: "Campus Resources",
        icon: Building2,
        description: "Navigate campus life, from accessibility services to counseling.",
        links: [
            { label: "Student Life / CLUE Program", url: "#" },
            { label: "Accessibility Services", url: "#" },
            { label: "Counseling Center", url: "#" },
            { label: "Bursar / Student Accounts", url: "#" }
        ]
    },
    {
        title: "Special Programs",
        icon: Users,
        description: "Join specialized communities for accelerated growth.",
        links: [
            { label: "ASAP", url: "#" },
            { label: "CSTEP", url: "#" },
            { label: "SEEK Program", url: "#" },
            { label: "Macaulay Honors College", url: "#" },
            { label: "Verrazano School", url: "#" }
        ]
    },
    {
        title: "Department Info",
        icon: Info,
        description: "Key documents and videos about the CS department.",
        links: [
            { label: "Computer Science Fact Sheet", url: "#" },
            { label: "Info Session (PPT/Video)", url: "#" },
            { label: "Lab Tours Video", url: "#" }
        ]
    }
];

// --- Components ---

const ResourceCard = ({ category, index }: { category: typeof resourceCategories[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="flex flex-col h-full p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
        >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-slate-50 text-slate-600 group-hover:bg-[#8AC2EB] group-hover:text-white transition-colors duration-300">
                    <category.icon size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-700 transition-colors">
                        {category.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 leading-snug">
                        {category.description}
                    </p>
                </div>
            </div>

            {/* Links List */}
            <ul className="space-y-3 mt-auto pt-4 border-t border-slate-50">
                {category.links.map((link, idx) => (
                    <li key={idx}>
                        <a
                            href={link.url}
                            className="text-sm text-slate-600 hover:text-[#8AC2EB] font-medium flex items-center justify-between group/link transition-colors"
                        >
                            <span className="truncate pr-2">{link.label}</span>
                            <ArrowUpRight
                                size={14}
                                className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-blue-400"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default function StudentResources() {
    return (
        <main className='bg-white pt-28 md:pt-32'>
            <div className='' id='student-spotlights'><StudentSpotlights /></div>
            <section className="py-24 bg-slate-50" id='resources-tools'>
                <div className="max-w-7xl mx-auto px-6">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 flex flex-row items-stretch justify-between gap-4"
                    >
                        <div className='max-w-4xl'>
                            <span className="text-[#8AC2EB] font-bold tracking-widest uppercase text-xs mb-2 block">
                                Student Portal
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                                Resources & Tools
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl">
                                Everything you need to navigate your academic journey, find career opportunities,
                                and access technical support, all in one place.
                            </p>
                        </div>
                        <div className="flex items-center w-1/2 relative rounded-lg overflow-hidden h-42">
                            <Image src="/cunycsi.png" alt="CUNY and CSI Logos" fill className="object-contain drop-shadow-sm" />
                        </div>
                    </motion.div>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resourceCategories.map((category, idx) => (
                            <ResourceCard key={category.title} category={category} index={idx} />
                        ))}
                    </div>

                    {/* Footer Help Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-16 p-8 bg-slate-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
                    >
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                                <Monitor size={32} className="text-blue-300" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Need Technical Assistance?</h3>
                                <p className="text-slate-300 text-sm">The Student Technology Help Desk is available 24/7.</p>
                            </div>
                        </div>
                        <button className="px-6 py-3 bg-[#8AC2EB] hover:bg-blue-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-900/50 whitespace-nowrap">
                            Contact Help Desk
                        </button>
                    </motion.div>

                </div>
            </section>
        </main>
    );
}