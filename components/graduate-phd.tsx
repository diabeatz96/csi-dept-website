'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Building2,
    MapPin,
    Phone,
    Mail,
    ExternalLink,
    GraduationCap,
    Printer,
    BrainCircuit,
    Network,
    Database,
    Code2
} from 'lucide-react';
import Image from 'next/image';
// --- Data: Specialization Pills ---
const researchAreas = [
    { label: "Artificial Intelligence", icon: BrainCircuit },
    { label: "Data Mining & Analytics", icon: Database },
    { label: "Multimedia & Image Processing", icon: Network },
    { label: "Software Engineering", icon: Code2 },
    { label: "Management Info Systems", icon: Building2 },
    { label: "Networks & Telecom", icon: Network },
];

export default function PhDProgramSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">

            {/* Background Decor: Subtle Gradient Mesh */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 via-white to-white pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className='text-start max-w-7xl mx-auto flex flex-row items-stretch justify-between gap-4 mb-16 '>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl rounded-lg p-4"
                    >
                        <div className="flex items-center gap-2 text-[#0369A1] font-bold uppercase tracking-widest text-xs mb-4">
                            <GraduationCap size={16} />
                            Doctoral Studies
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
                            PhD in Computer Science
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Conduct groundbreaking research in partnership with the <span className="text-blue-700 font-semibold">CUNY Graduate Center</span>.
                        </p>
                    </motion.div>
                    <div className="flex items-center w-1/2 relative rounded-lg overflow-hidden h-50">
                        <Image src="/csi-blue-logo.png" alt="CUNY and CSI Logos" fill className="object-contain drop-shadow-sm" />
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* LEFT COLUMN: Academic/Research Context */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="prose prose-lg text-slate-600 mb-10"
                        >
                            <p className="mb-6">
                                The College of Staten Island participates in the CUNY Graduate School and University Center's Ph.D. program in Computer Science. This unique structure allows students to leverage the resources of a major research institution while working closely with faculty mentors at CSI.
                            </p>
                            <p>
                                Students wishing to specialize in high-impact areas may complete much of their coursework and research right here at the College of Staten Island, benefiting from our state-of-the-art labs and dedicated mentorship.
                            </p>
                        </motion.div>

                        {/* Research Areas Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                                Research Concentrations
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {researchAreas.map((area, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-slate-700 text-sm font-medium hover:bg-white hover:border-blue-200 hover:text-blue-700 hover:shadow-sm transition-all cursor-default"
                                    >
                                        <area.icon size={14} className="text-blue-500" />
                                        {area.label}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: The "Business Card" for CUNY Grad Center */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-slate-900 rounded-2xl p-8 md:p-10 shadow-2xl text-white relative overflow-hidden"
                        >
                            {/* Decorative Background Circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8AC2EB]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="mb-8 border-b border-slate-700 pb-6">
                                    <h3 className="text-2xl font-bold mb-2">The Graduate Center</h3>
                                    <p className="text-blue-200">City University of New York</p>
                                </div>

                                {/* Contact Details List */}
                                <div className="space-y-5 mb-10">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="text-blue-500 shrink-0 mt-1" size={20} />
                                        <div>
                                            <p className="font-medium text-slate-200">365 5th Ave</p>
                                            <p className="text-sm text-slate-400">New York, NY 10016</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Phone className="text-blue-500 shrink-0" size={20} />
                                        <a href="tel:2128178190" className="text-slate-200 hover:text-white transition-colors">
                                            (212) 817-8190
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Printer className="text-blue-500 shrink-0" size={20} />
                                        <span className="text-slate-400">
                                            (212) 817-1510 (Fax)
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Mail className="text-blue-500 shrink-0" size={20} />
                                        <a href="mailto:admissions@gc.cuny.edu" className="text-slate-200 hover:text-white transition-colors">
                                            admissions@gc.cuny.edu
                                        </a>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <a
                                        href="https://www.gc.cuny.edu/computer-science"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 group"
                                    >
                                        Program Details
                                        <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <a
                                        href="https://www.gc.cuny.edu/admissions-aid/how-apply"
                                        className="flex-1 bg-transparent border border-slate-600 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center"
                                    >
                                        Admissions
                                    </a>
                                </div>

                            </div>
                        </motion.div>

                        {/* Visual Connector: CSI Advisory Note */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-6 flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100 text-sm text-slate-600"
                        >
                            <div className="bg-white p-1 rounded-full text-[#0369A1] shrink-0 mt-0.5">
                                <Building2 size={14} />
                            </div>
                            <p>
                                <span className="font-bold text-blue-800">CSI Department Note:</span> Students are advised to contact the CSI Computer Science department for specific guidance on taking courses at the Staten Island campus.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}