'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Terminal,
    Database,
    Cloud,
    Cpu,
    Github,
    Code2,
    Server,
    Globe,
    CheckCircle2,
    BookOpen,
    Network,
    Lock,
    ShieldCheck,
    Laptop,
    Plus,
    GraduationCap
} from 'lucide-react';
import { FloatingIconsHero } from '@/components/ui/floating-icons-hero-section';
import FloatingIconsHeroDemo from '@/components/floating-icons';
import { Icon } from '@/components/ui/floating-icons-hero-section';
import { demoIcons } from '@/components/floating-icons';
import NotchTwo from '@/components/notch-two';
import ResourcesAccordion from '@/components/resouces-accordion';
import AASProgramSection, { BSComputerScienceSection, BSInformaticsSection, BSMathematicsSection } from '@/components/program-cards';
import SpecializationsAccordion from '@/components/specializations-accordion';
import CareerMilestones from '@/components/career-milestones';
import CareerMilestonesHero from '@/components/career-milestones';
import MinorsAccordion from '@/components/cs-minors';
import DoubleCountingPolicy from '@/components/double-counting-policy';
import ABETAccreditation from '@/components/abet-accreditation';
import Link from 'next/link';
// --- Floating Icon Component ---
// Accepts top/left/right props to position specifically in an arc
const FloatingIcon = ({ icon: Icon, top, left, right, delay, color }: any) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0], // Gentle float
        }}
        transition={{
            opacity: { duration: 0.5, delay: delay },
            scale: { duration: 0.5, delay: delay },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }
        }}
        className={`absolute hidden lg:flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-md border border-blue-50 z-20 ${color}`}
        style={{ top, left, right }}
    >
        <Icon size={22} strokeWidth={1.5} />
    </motion.div>
);

// --- Year Card Component ---
const YearCard = ({ year, title, subtitle, icon: Icon, isLast = false }: any) => {
    return (
        <div className="relative z-10 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative w-72 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all p-5 flex items-start gap-4"
            >
                <div className="bg-slate-50 p-2.5 rounded-md text-slate-600 shrink-0 border border-slate-100">
                    <Icon size={20} />
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 bg-slate-50 px-2 py-0.5 rounded-sm border border-slate-100">
                            Year 0{year}
                        </span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">{title}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{subtitle}</p>
                </div>

                {/* Connector Line */}
                {!isLast && (
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-[1px] h-8 bg-slate-200"></div>
                )}
            </motion.div>
        </div>
    );
};
const PlusConnector = () => (
    <div className="relative z-20 my-2 flex justify-center">
        <div className="bg-white p-1 rounded-full border border-blue-100 shadow-sm z-20">
            <Plus size={16} className="text-[#8AC2EB]" />
        </div>
    </div>
);
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
                <Icon size={20} className={`text-white`} />
            </div>
            <div className="bg-slate-50 px-2 py-1 rounded text-[10px] font-bold uppercase text-slate-600">
                Career Track
            </div>
        </div>

        <div>
            <h3 className="font-bold text-slate-900 text-sm">{title}</h3>
            <p className="text-xs text-slate-500 mt-1">{role}</p>
        </div>
    </motion.div>
);

export default function DegreePathHero() {
    const ref = React.useRef<HTMLDivElement>(null);
    const mouseX = React.useRef(0);
    const mouseY = React.useRef(0);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        mouseX.current = event.clientX;
        mouseY.current = event.clientY;
    };
    return (
        <main className='max-w-8xl mx-auto px-6 pt-20 md:pt-24'>
            <NotchTwo />
            <section className="bg-white min-h-screen flex items-center justify-center overflow-hidden relative" ref={ref} onMouseMove={handleMouseMove}>

                {/* Background Decor (Subtle Academic Pattern) */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/40 via-transparent to-transparent pointer-events-none"></div>

                <div className="max-w-[1400px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT COLUMN: Institutional Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl z-20"
                    >
                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 cursor-pointer hover:bg-white hover:border-blue-300 transition-colors group">
                            <span className="w-2 h-2 rounded-full bg-[#8AC2EB] animate-pulse"></span>
                            <span>Spring 2026 Admissions Cycle Open</span>
                            <ArrowRight size={14} className="text-slate-400 group-hover:text-[#8AC2EB] transition-colors ml-1" />
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.15] tracking-tight mb-6 font-sans">
                            Advancing the <br />
                            Frontiers of <span className="text-blue-700">Computing</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg text-justify">
                            The Department of Computer Science at CSI offers a rigorous, ABET-accredited curriculum designed to equip students with theoretical foundations and practical expertise. From algorithm analysis to intelligent systems, we prepare the next generation of innovators.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* <button className="px-8 py-4 bg-[#0f172a] text-white text-sm font-bold tracking-wide uppercase rounded-md hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl">
                                Apply to Program
                            </button> */}
                            <Link href='/courses' className="px-8 py-4 bg-white text-slate-700 border border-slate-300 text-sm font-bold tracking-wide uppercase rounded-md hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 hover:cursor-pointer">
                                <BookOpen size={18} />
                                Academic Catalog
                            </Link>
                        </div>

                        <div className="mt-12 pt-8 border-t border-slate-100 flex items-center gap-8 text-xs font-semibold text-slate-400 uppercase tracking-widest">
                            <span>Excellence in Research</span>
                            <span>•</span>
                            <span>Student Success</span>
                        </div>
                    </motion.div>


                    {/* RIGHT COLUMN: Degree Path Animation */}
                    <div className="relative min-h-[800px] flex flex-col items-center justify-start pt-10">

                        {/* Container for the background floating icons */}
                        <div className="absolute inset-0 w-full h-full">
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
                        {/* The Central Path Line (Animated SVG) */}
                        {/* <svg className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-20 z-0 overflow-visible">
                            <motion.path
                                d="M 40 20 L 40 630"
                                fill="transparent"
                                strokeWidth="2"
                                stroke="#e2e8f0" // slate-200
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </svg> */}
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

                        {/* Vertical Stack of Cards */}
                        <div className="flex flex-col gap-10 relative z-10">
                            <YearCard
                                year="1"
                                title="Foundations & Logic"
                                subtitle="Intro to Computer Science, Calculus, and Discrete Structures."
                                icon={Terminal}
                            />
                            <YearCard
                                year="2"
                                title="Systems & Architecture"
                                subtitle="Object-Oriented Programming, Assembly, and Data Analysis."
                                icon={Cpu}
                            />
                            <YearCard
                                year="3"
                                title="Advanced Specialization"
                                subtitle="Software Engineering, Operating Systems, and Database Mgmt."
                                icon={Network}
                            />
                            {/* Year 4: The Decision Node */}
                            <div className="relative z-20 mb-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="w-72 bg-white border-2 border-[#8AC2EB] rounded-lg shadow-lg p-5 flex items-center gap-4 relative z-20"
                                >
                                    <div className="bg-blue-50 p-2.5 rounded-md text-[#8AC2EB] shrink-0">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-[#0369A1] px-2 py-0.5 rounded-sm">
                                                Year 04
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-slate-900 text-sm">Capstone Projects</h3>
                                        <p className="text-xs text-slate-500 mt-1">Select your graduation track</p>
                                    </div>
                                </motion.div>
                                {/* Final Plus Connector before split */}
                                <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 z-20">
                                    <div className="bg-white p-1 rounded-full border border-blue-100 shadow-sm">
                                        <Plus size={16} className="text-[#8AC2EB]" />
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
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0369A1] text-white text-[9px] font-bold px-2 py-0.5 rounded-full z-20">
                                        Path A
                                    </div>
                                    <CareerPathCard
                                        title="Software Engineering"
                                        role="Full Stack & Systems Architect"
                                        icon={Laptop}
                                        colorClass="bg-[#8AC2EB]"
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
            <section
                className='relative'
                style={{
                    backgroundImage: 'url(/csi-blue-logo.png)',
                    backgroundSize: '60%',
                    backgroundPosition: 'center bottom',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Optional overlay for better content readability */}
                <div className="absolute inset-0 bg-white/60 pointer-events-none" />

                {/* Content that scrolls over the background */}
                <div className="relative z-10">
                    <ResourcesAccordion />

                    <div id="aas-computer-technology">
                        <AASProgramSection />
                    </div>
                    <div id="bs-computer-science">
                        <BSComputerScienceSection />
                    </div>
                    <div id="specializations">
                        <SpecializationsAccordion />
                    </div>
                    <div id="career-milestones">
                        <CareerMilestones />
                    </div>
                    <div id="additional-degrees">
                        <BSMathematicsSection />
                    </div>
                    <div id="bs-information-systems-and-informatics">
                        <BSInformaticsSection />
                    </div>
                    <div id="minors-certificates">
                        <MinorsAccordion />
                    </div>
                    <div id="double-counting-policy">
                        <DoubleCountingPolicy />
                    </div>
                    {/* Graduate with Honors Section */}
                    <section id="graduate-with-honors" className="py-16 bg-white">
                        <div className="max-w-4xl mx-auto px-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-teal-100 shadow-sm"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-teal-600 rounded-xl text-white">
                                        <GraduationCap size={28} />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-teal-900">
                                        Graduate with Honors
                                    </h2>
                                </div>

                                <div className="prose prose-slate max-w-none">
                                    <p className="text-slate-700 leading-relaxed text-lg">
                                        Students may graduate with honors in Computer Science. To receive honors, the student must have at least a <strong className="text-teal-900">3.5 grade point average</strong> in courses taken in the major. The student must also complete an honors project by taking <strong className="text-teal-900">CSC 450</strong>, where the student works closely with a faculty member to define the project, carry out the research and investigation, and write the final report. The project must be approved by the department Chairperson. Students will receive credit through CSC 450 for their work on an honors project. <strong className="text-teal-900">CSC 450 cannot substitute for an elective course.</strong>
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                    <div id="abet-accreditation">
                        <ABETAccreditation />
                    </div>

                </div>
            </section>
        </main>
    );
}


