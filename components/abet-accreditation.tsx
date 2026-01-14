'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Target, Users, BookOpen, TrendingUp } from 'lucide-react';

export default function ABETAccreditation() {
    const educationalObjectives = [
        "Hold responsible positions in computing related fields and/or be pursuing an advanced computing related degree",
        "Remain current in their field through the pursuit of life-long learning",
        "Use their core computing and problem solving knowledge"
    ];

    const studentOutcomes = [
        "Analyze a complex computing problem and to apply principles of computing and other relevant disciplines to identify solutions.",
        "Design, implement, and evaluate a computing-based solution to meet a given set of computing requirements in the context of the program's discipline.",
        "Communicate effectively in a variety of professional contexts.",
        "Recognize professional responsibilities and make informed judgments in computing practice based on legal and ethical principles.",
        "Function effectively as a member or leader of a team engaged in activities appropriate to the program's discipline.",
        "Apply computer science theory and software development fundamentals to produce computing-based solutions."
    ];

    return (
        <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-8xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Accreditation Header with Enrollment Data Combined */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-gradient-to-br from-[#0369A1] to-blue-800 rounded-2xl p-6 md:p-8 text-white mb-8 shadow-lg"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                <Award size={28} className="text-white" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                                    ABET Accredited Program
                                </h2>
                                <p className="text-blue-100 text-sm md:text-base mb-3">
                                    Our B.S. in Computer Science is accredited by the Computing Accreditation Commission of{' '}
                                    <a
                                        href="http://www.abet.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline hover:text-white transition-colors font-semibold"
                                    >
                                        ABET
                                    </a>
                                </p>
                                <div className="grid md:grid-cols-2 gap-4 text-blue-100 text-sm">
                                    <div>
                                        <p className="font-semibold text-white mb-1">ABET Contact</p>
                                        <p>111 Market Place, Suite 1050</p>
                                        <p>Baltimore, MD 21202-4012</p>
                                        <p>Tel: (410) 347-7700</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white mb-1">Enrollment Data</p>
                                        <a
                                            href="https://www.cs.csi.cuny.edu/content/abet_table.pdf"
                                            className="inline-flex items-center gap-2 text-white hover:text-blue-200 font-semibold transition-colors underline"
                                        >
                                            View Enrollment & Degree Data
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Combined Educational Objectives (Left) and Student Outcomes (Right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200"
                    >
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Left: Program Educational Objectives */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-[#0369A1] rounded-lg">
                                        <Target size={20} className="text-white" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                                        Educational Objectives
                                    </h3>
                                </div>
                                <p className="text-slate-900 mb-4 text-sm font-medium">
                                    A few years after graduation, graduates will:
                                </p>
                                <div className="space-y-3">
                                    {educationalObjectives.map((objective, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                            className="flex gap-3 p-3 bg-slate-50 rounded-lg border-l-4 border-[#0369A1]"
                                        >
                                            <div className="shrink-0 w-5 h-5 bg-[#0369A1] text-white rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                                                {index + 1}
                                            </div>
                                            <p className="text-slate-900 leading-relaxed text-sm">{objective}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Student Outcomes */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-[#0369A1] rounded-lg">
                                        <Users size={20} className="text-white" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                                        Student Outcomes
                                    </h3>
                                </div>
                                <div className="space-y-3">
                                    {studentOutcomes.map((outcome, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.4 + (index * 0.08) }}
                                            className="flex gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200"
                                        >
                                            <div className="shrink-0 w-5 h-5 bg-[#0369A1] text-white rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                                                {index + 1}
                                            </div>
                                            <p className="text-slate-900 leading-relaxed text-sm">{outcome}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

