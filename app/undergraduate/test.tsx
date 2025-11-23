'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    ArrowRight,
    Terminal,
    Cpu,
    Network,
    CheckCircle2,
    BookOpen,
    Plus,
    ShieldCheck,
    Laptop,
    Code2,
    Database,
    Globe,
    Server,
    Lock
} from 'lucide-react';

// --- Floating Icon Logic (kept from your context) ---
const Icon = ({ mouseX, mouseY, iconData, index }: any) => {
    const { icon: IconComponent, x, y, color } = iconData;
    // Subtle parallax effect based on mouse position
    const xOffset = useTransform(mouseX, [0, 1], [-20, 20]);
    const yOffset = useTransform(mouseY, [0, 1], [-20, 20]);

    return (
        <motion.div
            style={{ x: xOffset, y: yOffset, top: y, left: x }}
            className={`absolute hidden lg:flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-blue-100 z-0 ${color}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
        >
            <IconComponent size={22} strokeWidth={1.5} />
        </motion.div>
    );
};

// --- Components ---

const PlusConnector = () => (
    <div className="relative z-20 my-2 flex justify-center">
        <div className="bg-white p-1 rounded-full border border-blue-100 shadow-sm z-20">
            <Plus size={16} className="text-blue-600" />
        </div>
    </div>
);

const YearCard = ({ year, title, subtitle, icon: Icon, showPlus = true }: any) => {
    return (
        <div className="flex flex-col items-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative w-72 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all p-5 flex items-start gap-4 z-10"
            >
                <div className="bg-slate-50 p-2.5 rounded-md text-slate-600 shrink-0 border border-slate-100">
                    <Icon size={20} />
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-0.5 rounded-sm border border-slate-100">
                            Year 0{year}
                        </span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{subtitle}</p>
                </div>
            </motion.div>
            {showPlus && <PlusConnector />}
        </div>
    );
};

const CareerPathCard = ({ title, role, icon: Icon, colorClass, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="w-64 bg-white rounded-lg border border-slate-200 shadow-md p-4 flex flex-col gap-3 relative z-10"
    >
        <div className="flex items-center justify-between">
             <div className={`p-2 rounded-md ${colorClass} bg-opacity-10`}>
                <Icon size={20} className={colorClass.replace('bg-', 'text-')} />
            </div>
             <div className="bg-slate-50 px-2 py-1 rounded text-[10px] font-bold uppercase text-slate-400">
                Career Track
             </div>
        </div>
       
        <div>
            <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
            <p className="text-xs text-slate-500 mt-1">{role}</p>
        </div>
    </motion.div>
);

export default function DegreePathHero() {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            mouseX.set(x);
            mouseY.set(y);
        }
    };

    // Mock data for background icons
    const demoIcons = [
        { id: 1, icon: Code2, color: "text-blue-500", x: "10%", y: "10%" },
        { id: 2, icon: Database, color: "text-emerald-600", x: "85%", y: "15%" },
        { id: 3, icon: Globe, color: "text-purple-500", x: "5%", y: "50%" },
        { id: 4, icon: Server, color: "text-orange-500", x: "90%", y: "60%" },
        { id: 5, icon: Lock, color: "text-red-500", x: "15%", y: "85%" },
    ];

    return (
        <section 
            className="bg-white min-h-screen flex items-center justify-center overflow-hidden relative py-20" 
            ref={ref} 
            onMouseMove={handleMouseMove}
        >
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/40 via-transparent to-transparent pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">

                {/* LEFT COLUMN: Institutional Copy */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl"
                >
                    {/* Pill Badge */}
                    <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 cursor-pointer hover:bg-white hover:border-blue-300 transition-colors group">
                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                        <span>Spring 2026 Admissions Cycle Open</span>
                        <ArrowRight size={14} className="text-slate-400 group-hover:text-blue-600 transition-colors ml-1" />
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.15] tracking-tight mb-6 font-sans">
                        Advancing the <br />
                        Frontiers of <span className="text-blue-700">Computing</span>
                    </h1>

                    <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg text-justify">
                        The Department of Computer Science at CSI offers a rigorous, ABET-accredited curriculum designed to equip students with theoretical foundations and practical expertise. From algorithm analysis to intelligent systems, we prepare the next generation of innovators.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-4 bg-[#0f172a] text-white text-sm font-bold tracking-wide uppercase rounded-md hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl">
                            Apply to Program
                        </button>
                        <button className="px-8 py-4 bg-white text-slate-700 border border-slate-300 text-sm font-bold tracking-wide uppercase rounded-md hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                            <BookOpen size={18} />
                            Academic Catalog
                        </button>
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-100 flex items-center gap-8 text-xs font-semibold text-slate-400 uppercase tracking-widest">
                        <span>Excellence in Research</span>
                        <span>•</span>
                        <span>Student Success</span>
                    </div>
                </motion.div>

                {/* RIGHT COLUMN: Degree Path Animation */}
                <div className="relative min-h-[800px] flex flex-col items-center justify-start pt-10">

                    {/* Background Icons */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none">
                        {demoIcons.map((iconData, index) => (
                            <Icon
                                key={iconData.id}
                                mouseX={mouseX}
                                mouseY={mouseY}
                                iconData={iconData}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* 1. VERTICAL TRUNK LINE (Animated) */}
                    <svg className="absolute top-10 left-1/2 -translate-x-1/2 h-[580px] w-6 z-0 overflow-visible pointer-events-none">
                         <motion.path
                            d="M 12 0 L 12 600" // Straight line down
                            fill="transparent"
                            strokeWidth="2"
                            stroke="#cbd5e1" // slate-300
                            strokeDasharray="6 4" // Dotted line effect for Zapier feel
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.5, ease: "linear" }}
                        />
                    </svg>

                    {/* 2. STACKED CARDS */}
                    <div className="flex flex-col items-center w-full">
                        <YearCard
                            year="1"
                            title="Foundations & Logic"
                            subtitle="Intro to CS, Calculus, and Discrete Structures."
                            icon={Terminal}
                        />
                        <YearCard
                            year="2"
                            title="Systems & Architecture"
                            subtitle="OOP, Assembly, and Data Analysis."
                            icon={Cpu}
                        />
                        <YearCard
                            year="3"
                            title="Advanced Specialization"
                            subtitle="Software Eng, OS, and Database Mgmt."
                            icon={Network}
                        />
                        
                        {/* Year 4: The Decision Node */}
                        <div className="relative z-20 mb-6">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="w-72 bg-white border-2 border-blue-600 rounded-lg shadow-lg p-5 flex items-center gap-4 relative z-20"
                            >
                                <div className="bg-blue-50 p-2.5 rounded-md text-blue-600 shrink-0">
                                    <CheckCircle2 size={20} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-blue-600 px-2 py-0.5 rounded-sm">
                                            Year 04
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-sm">Capstone Projects</h4>
                                    <p className="text-xs text-slate-500 mt-1">Select your graduation track</p>
                                </div>
                            </motion.div>
                            {/* Final Plus Connector before split */}
                            <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 z-20">
                                <div className="bg-white p-1 rounded-full border border-blue-100 shadow-sm">
                                    <Plus size={16} className="text-blue-600" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. THE SPLIT PATH (SVG + CARDS) */}
                    <div className="relative w-full max-w-lg mt-6">
                         {/* Split Lines SVG */}
                         <svg className="absolute -top-8 left-0 w-full h-20 z-0 pointer-events-none overflow-visible">
                            {/* Left Branch */}
                            <motion.path 
                                d="M 256 0 V 20 H 128 V 40" // Assumes container roughly 512 wide, center 256
                                fill="transparent"
                                stroke="#94a3b8" 
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.5, duration: 0.8 }}
                            />
                            {/* Right Branch */}
                            <motion.path 
                                d="M 256 0 V 20 H 384 V 40"
                                fill="transparent"
                                stroke="#94a3b8" 
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.5, duration: 0.8 }}
                            />
                            {/* Center connector tick */}
                             <motion.path 
                                d="M 256 -10 V 0"
                                fill="transparent"
                                stroke="#94a3b8" 
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                            />
                         </svg>

                         {/* Split Cards */}
                         <div className="flex flex-col md:flex-row justify-between gap-4 pt-8">
                            {/* Path A */}
                            <div className="relative">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full z-20">
                                    Path A
                                </div>
                                <CareerPathCard 
                                    title="Software Engineering"
                                    role="Full Stack & Systems Architect"
                                    icon={Laptop}
                                    colorClass="bg-blue-600"
                                    delay={1.8}
                                />
                            </div>

                            {/* Path B */}
                            <div className="relative">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full z-20">
                                    Path B
                                </div>
                                <CareerPathCard 
                                    title="Cybersecurity Analytics"
                                    role="InfoSec & Network Defense"
                                    icon={ShieldCheck}
                                    colorClass="bg-indigo-600"
                                    delay={2.0}
                                />
                            </div>
                         </div>
                    </div>

                </div>
            </div>
        </section>
    );
}