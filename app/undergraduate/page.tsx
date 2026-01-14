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
                    <p className="font-bold text-slate-900 text-sm">{title}</p>
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
            <Plus size={16} className="text-[#0369A1]" />
        </div>
    </div>
);
const CareerPathCard = ({ title, role, icon: Icon, colorClass, textColorClass, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="w-64 bg-white rounded-lg border border-slate-200 shadow-md p-4 flex flex-col gap-3 relative z-10"
    >
        <div className="flex items-center justify-between">
            <div className={`p-2 rounded-md ${colorClass}`}>
                <Icon size={20} className={textColorClass} aria-hidden="true" />
            </div>
            <div className="bg-slate-50 px-2 py-1 rounded text-[10px] font-bold uppercase text-slate-600">
                Career Track
            </div>
        </div>

        <div>
            <p className="font-bold text-slate-900 text-sm">{title}</p>
            <p className="text-xs text-slate-500 mt-1">{role}</p>
        </div>
    </motion.div>
);

export default function DegreePathHero() {
    const ref = React.useRef<HTMLDivElement>(null);
    const mouseX = React.useRef(0);
    const mouseY = React.useRef(0);
    const [activeTab, setActiveTab] = React.useState('bachelors');

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        mouseX.current = event.clientX;
        mouseY.current = event.clientY;
    };

    const programTabs = [
        { id: 'associate', label: 'Associate Degrees', href: '#associate-degrees' },
        { id: 'bachelors', label: "Bachelor's Degrees", href: '#bachelors-degrees' },
        { id: 'minors', label: 'Minors', href: '#minors-certificates' },
        { id: 'career', label: 'Career Path', href: '#career-milestones' }
    ];

    return (
        <div className='max-w-8xl mx-auto px-6 xl:pl-72 pt-12 md:pt-14'>
            <NotchTwo />

            <section className="bg-white min-h-[600px] flex items-center justify-center overflow-hidden relative py-8 md:py-12" ref={ref} onMouseMove={handleMouseMove}>

                {/* Background Decor (Subtle Academic Pattern) */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/40 via-transparent to-transparent pointer-events-none"></div>

                <div className="max-w-[1400px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT COLUMN: Institutional Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl relative z-0"
                    >
                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 cursor-pointer hover:bg-white hover:border-blue-300 transition-colors group">
                            <span className="w-2 h-2 rounded-full bg-[#0369A1] animate-pulse"></span>
                            <span>Spring 2026 Admissions Cycle Open</span>
                            <ArrowRight size={14} className="text-slate-400 group-hover:text-[#0369A1] transition-colors ml-1" />
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.15] tracking-tight mb-6 font-sans">
                            Advancing the <br />
                            Frontiers of <span className="text-blue-700">Computing</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg text-slate-900 leading-relaxed mb-10 max-w-lg">
                            The Department of Computer Science at CSI offers a rigorous, ABET-accredited curriculum designed to equip students with theoretical foundations and practical expertise. From algorithm analysis to intelligent systems, we prepare the next generation of innovators.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            {/* <button className="px-8 py-4 bg-[#0f172a] text-white text-sm font-bold tracking-wide uppercase rounded-md hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl">
                                Apply to Program
                            </button> */}
                            <Link href='/courses' className="px-8 py-4 bg-white text-slate-700 border border-slate-300 text-sm font-bold tracking-wide uppercase rounded-md hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 hover:cursor-pointer">
                                <BookOpen size={18} />
                                Academic Catalog
                            </Link>
                        </div>

                        {/* Program Tabs - Integrated */}
                        <div className="mb-8">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Explore Programs</p>
                            <div className="flex flex-wrap gap-2">
                                {programTabs.map((tab) => (
                                    <a
                                        key={tab.id}
                                        href={tab.href}
                                        onClick={(e) => {
                                            setActiveTab(tab.id);
                                            // Smooth scroll to section
                                            e.preventDefault();
                                            const element = document.querySelector(tab.href);
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }
                                        }}
                                        className={`px-5 py-2.5 rounded-lg text-sm font-bold whitespace-nowrap transition-all ${
                                            activeTab === tab.id
                                                ? 'bg-[#0369A1] text-white shadow-md'
                                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:shadow-sm'
                                        }`}
                                    >
                                        {tab.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-100 flex items-center gap-8 text-xs font-semibold text-slate-400 uppercase tracking-widest">
                            <span>Excellence in Research</span>
                            <span>•</span>
                            <span>Student Success</span>
                        </div>
                    </motion.div>


                    {/* RIGHT COLUMN: Degree Path Animation */}
                    <div className="relative min-h-[800px] flex flex-col items-center justify-start pt-10">

                        {/* Container for the background floating icons - hidden on mobile */}
                        <div className="absolute inset-0 w-full h-full hidden lg:block">
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
                                    className="w-72 bg-white border-2 border-[#0369A1] rounded-lg shadow-lg p-5 flex items-center gap-4 relative z-20"
                                >
                                    <div className="bg-blue-50 p-2.5 rounded-md text-[#0369A1] shrink-0">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-[#0369A1] px-2 py-0.5 rounded-sm">
                                                Year 04
                                            </span>
                                        </div>
                                        <p className="font-bold text-slate-900 text-sm">Capstone Projects</p>
                                        <p className="text-xs text-slate-500 mt-1">Select your graduation track</p>
                                    </div>
                                </motion.div>
                                {/* Final Plus Connector before split */}
                                <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 z-20">
                                    <div className="bg-white p-1 rounded-full border border-blue-100 shadow-sm">
                                        <Plus size={16} className="text-[#0369A1]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 3. THE SPLIT PATH (SVG + CARDS) */}
                        <div className="relative w-full max-w-lg mt-6">
                            {/* Split Lines SVG - Desktop only */}
                            <svg className="absolute -top-8 left-0 w-full h-20 z-0 pointer-events-none overflow-visible hidden md:block" viewBox="0 0 512 50" preserveAspectRatio="xMidYMin meet">
                                {/* Left Branch */}
                                <motion.path
                                    d="M 256 0 V 20 H 128 V 40"
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

                            {/* Mobile vertical connector line */}
                            <div className="md:hidden flex justify-center -mt-2 mb-2">
                                <motion.div
                                    className="w-0.5 h-8 bg-slate-300"
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.5, duration: 0.5 }}
                                    style={{ transformOrigin: 'top' }}
                                />
                            </div>

                            {/* Split Cards */}
                            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-4 md:pt-8 items-center md:items-start">
                                {/* Path A */}
                                <div className="relative">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0369A1] text-white text-[9px] font-bold px-2 py-0.5 rounded-full z-20">
                                        Path A
                                    </div>
                                    <CareerPathCard
                                        title="Software Engineering"
                                        role="Full Stack & Systems Architect"
                                        icon={Laptop}
                                        colorClass="bg-blue-50"
                                        textColorClass="text-[#0369A1]"
                                        delay={1.8}
                                    />
                                </div>

                                {/* Mobile "OR" divider */}
                                <div className="md:hidden flex items-center gap-2 py-2">
                                    <div className="w-8 h-0.5 bg-slate-200"></div>
                                    <span className="text-xs font-bold text-slate-400 uppercase">or</span>
                                    <div className="w-8 h-0.5 bg-slate-200"></div>
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
                                        colorClass="bg-indigo-50"
                                        textColorClass="text-indigo-600"
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
                <div className="relative z-10 flex">
                    {/* Side Navigation - Desktop Only */}
                    <aside className="hidden xl:block fixed left-6 top-32 w-52 h-[calc(100vh-10rem)] overflow-y-auto z-[100]">
                        <nav className="bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 p-3 shadow-lg sticky top-32">
                            <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">Sections</h3>
                            <ul className="space-y-0.5 text-xs">
                                {[
                                    { id: 'associate-degrees', label: 'Associate Degrees' },
                                    { id: 'bachelors-degrees', label: "Bachelor's Degrees" },
                                    { id: 'career-milestones', label: 'Career Milestones' },
                                    { id: 'minors-certificates', label: 'Minors & Certificates' },
                                    { id: 'graduate-with-honors', label: 'Graduate with Honors' },
                                    { id: 'abet-accreditation', label: 'ABET Accreditation' }
                                ].map((section) => (
                                    <li key={section.id}>
                                        <a
                                            href={`#${section.id}`}
                                            className="block py-1.5 px-2.5 rounded-md text-slate-700 hover:bg-[#0369A1]/10 hover:text-[#0369A1] transition-colors font-medium border-l-2 border-transparent hover:border-[#0369A1]"
                                        >
                                            {section.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        <ResourcesAccordion />

                    {/* Associate Degrees Section */}
                    <section id="associate-degrees" className="py-8 md:py-12 bg-white">
                        <div className="max-w-8xl mx-auto px-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-8"
                            >
                                <span className="text-[#0369A1] font-bold tracking-widest uppercase text-xs mb-2 block">
                                    Two-Year Degree Programs
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                                    Associate Degrees
                                </h2>
                                <p className="text-slate-900 max-w-3xl text-sm md:text-base">
                                    Start your computer science journey with our associate degree program, designed to provide foundational skills and seamless transfer opportunities to bachelor's programs.
                                </p>
                            </motion.div>
                            <AASProgramSection />
                        </div>
                    </section>

                    {/* Bachelor's Degrees Section - All combined */}
                    <section id="bachelors-degrees" className="py-8 md:py-12 bg-slate-50">
                        <div className="max-w-8xl mx-auto px-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-8"
                            >
                                <span className="text-[#0369A1] font-bold tracking-widest uppercase text-xs mb-2 block">
                                    Four-Year Degree Programs
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                                    Bachelor's Degrees
                                </h2>
                                <p className="text-slate-900 max-w-3xl text-sm md:text-base mb-8">
                                    Our ABET-accredited bachelor's programs provide comprehensive education in computer science, preparing you for careers in software development, research, data science, and more.
                                </p>
                            </motion.div>

                            {/* BS Computer Science */}
                            <BSComputerScienceSection />

                            {/* Specializations within BS CS */}
                            <div className="mt-8">
                                <SpecializationsAccordion />
                            </div>

                            {/* BS Computer Science-Mathematics */}
                            <div className="mt-8">
                                <BSMathematicsSection />
                            </div>

                            {/* BS Information Systems and Informatics */}
                            <div className="mt-8">
                                <BSInformaticsSection />
                            </div>
                        </div>
                    </section>

                    <div id="career-milestones">
                        <CareerMilestones />
                    </div>

                    <div id="minors-certificates">
                        <MinorsAccordion />
                    </div>

                    <div id="double-counting-policy">
                        <DoubleCountingPolicy />
                    </div>
                    {/* Graduate with Honors Section - Compact */}
                    <section id="graduate-with-honors" className="py-8 bg-white">
                        <div className="max-w-6xl mx-auto px-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-linear-to-r from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-100 shadow-sm"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-teal-600 rounded-lg text-white shrink-0">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-3">
                                            Graduate with Honors
                                        </h2>
                                        <p className="text-slate-900 leading-relaxed text-sm md:text-base">
                                            Students may graduate with honors in Computer Science. To receive honors, the student must have at least a <strong className="text-teal-900">3.5 GPA</strong> in major courses and complete an honors project via <strong className="text-teal-900">CSC 450</strong>, working closely with a faculty member. The project requires department Chairperson approval. <strong className="text-teal-900">CSC 450 cannot substitute for an elective course.</strong>
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                    <div id="abet-accreditation">
                        <ABETAccreditation />
                    </div>

                    </div> {/* End Main Content */}
                </div> {/* End Flex Container */}
            </section>
        </div>
    );
}


