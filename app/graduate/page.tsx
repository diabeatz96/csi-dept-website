'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Compass,
    BookOpen,
    Cpu,
    GraduationCap,
    ArrowRight,
    Sparkles
} from 'lucide-react';
import GraduateAdvisement from '@/components/graduate-advisement';
import MSProgramSection from '@/components/ms-program-section';
import DoubleCountingPolicy from '@/components/double-counting-policy';
import GraduateSpecializations from '@/components/graduate-specializations';
import PhDProgramSection from '@/components/graduate-phd';
import GraduatesNotch from '@/components/graduates-notch';

// --- Data Configuration ---
const cardData = [
    {
        id: 'advisement',
        title: 'Graduate Advisement',
        description: 'Plan your degree with personalized guidance from faculty mentors.',
        icon: Compass,
        delay: 0.1
    },
    {
        id: 'masters',
        title: 'Master\'s Programs',
        description: 'Advance your career with our MS in Computer Science.',
        icon: BookOpen,
        delay: 0.2
    },
    {
        id: 'specializations',
        title: 'Specializations',
        description: 'Focus on Data Science, Cybersecurity, or Software Engineering.',
        icon: Cpu,
        delay: 0.3
    },
    {
        id: 'phd',
        title: 'PhD Program',
        description: 'Conduct groundbreaking research at the CUNY Graduate Center.',
        icon: GraduationCap,
        delay: 0.4
    }
];

export default function GraduatePage() {
    return (
        <div className='max-w-8xl pt-20 md:pt-24'>
            <GraduatesNotch />
            <section className="relative min-h-[90vh] bg-white overflow-hidden flex flex-col">

                {/* ------------------------------------------------------- */}
                {/* TOP SECTION: White Background (Inspiration Text)        */}
                {/* ------------------------------------------------------- */}
                <div className="relative z-10 pt-24 pb-32 px-6 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
                            <Sparkles size={12} />
                            <span>Excellence in Graduate Studies</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl  text-slate-900 mb-6 leading-tight">
                            Elevate your expertise <br />
                            <span className="text-[#8AC2EB]">define the future.</span>
                        </h1>

                        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                            Join a community of scholars and innovators. Our graduate programs combine rigorous theoretical foundations with advanced practical applications to prepare you for leadership in the tech industry and academia.
                        </p>
                    </motion.div>
                </div>

                {/* ------------------------------------------------------- */}
                {/* BACKGROUND: The "U-Shape" Blue Curve                   */}
                {/* ------------------------------------------------------- */}
                <div className="absolute bottom-0 left-0 w-full h-[50%] z-0 pointer-events-none">
                    {/* 
                This SVG creates the "U" shape curve. 
                The path starts high on the sides and dips low in the middle.
                The fill matches the gradient start color below.
            */}
                    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%]">
                        <svg
                            className="relative block w-full h-[150px] md:h-[200px]"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                                className="fill-white"
                                opacity="0.0"
                            ></path>
                            {/* The Main U-Curve Path */}
                            <path
                                d="M0,0 C300,150 900,150 1200,0 V120 H0 V0 Z"
                                className="fill-[#eff6ff]" // Matches bg-blue-50
                            ></path>
                        </svg>
                    </div>

                    {/* The solid block of color below the curve */}
                    <div className="w-full h-full bg-gradient-to-b from-blue-50 to-white"></div>
                </div>


                {/* ------------------------------------------------------- */}
                {/* BOTTOM SECTION: Cards Grid                              */}
                {/* ------------------------------------------------------- */}
                <div className="relative z-10 flex-grow px-6 pb-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                            {cardData.map((card, idx) => (
                                <motion.div
                                    key={card.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: card.delay, duration: 0.5 }}
                                    whileHover={{ y: -8 }}
                                    className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 cursor-pointer flex flex-col items-center text-center h-full"
                                >
                                    {/* Hover Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                                    {/* Icon */}
                                    <div className="relative mb-6 w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-[#8AC2EB] group-hover:bg-[#8AC2EB] group-hover:text-white transition-all duration-300 shadow-inner">
                                        <card.icon size={32} />
                                    </div>

                                    {/* Content */}
                                    <div className="relative">
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                                            {card.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                            {card.description}
                                        </p>
                                    </div>

                                    {/* Footer Link */}
                                    {/* <div className="relative mt-auto pt-4 border-t border-slate-50 w-full flex justify-center">
                                        <span className="text-xs font-bold text-slate-400 group-hover:text-[#8AC2EB] uppercase tracking-widest flex items-center gap-2 transition-colors">
                                            Explore <ArrowRight size={14} />
                                        </span>
                                    </div> */}
                                </motion.div>
                            ))}

                        </div>
                    </div>
                </div>

            </section>
            <GraduateAdvisement />

            <div id="ms-computer-science">
                <MSProgramSection />
            </div>
            <div id="specializations">
                <GraduateSpecializations />
            </div>

            <div id="double-counting-policy">
                <DoubleCountingPolicy />
            </div>
            <div id="phd-computer-science">
                <PhDProgramSection />
            </div>
        </div>
    );
}