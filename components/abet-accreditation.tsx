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
        <section className="py-24 bg-slate-50">
            <div className="max-w-8xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Accreditation Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white mb-12 shadow-xl"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                                <Award size={32} className="text-white" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                    Our B.S. in Computer Science is accredited by the Computing Accreditation Commission of{' '}
                                    <a
                                        href="http://www.abet.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline hover:text-blue-200 transition-colors"
                                    >
                                        ABET
                                    </a>
                                </h2>
                                <div className="space-y-1 text-blue-100 text-sm">
                                    <p>111 Market Place, Suite 1050</p>
                                    <p>Baltimore, Maryland 21202-4012</p>
                                    <p>Telephone: (410) 347-7700</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Program Educational Objectives */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-200 mb-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-600 rounded-lg">
                                <Target size={24} className="text-white" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                                Program Educational Objectives
                            </h3>
                        </div>
                        <p className="text-slate-600 mb-6 text-lg">
                            A few years after graduation, graduates will:
                        </p>
                        <div className="space-y-4">
                            {educationalObjectives.map((objective, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                    className="flex gap-4 p-4 bg-slate-50 rounded-xl border-l-4 border-blue-600"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                                        {index + 1}
                                    </div>
                                    <p className="text-slate-700 leading-relaxed">{objective}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Student Outcomes */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-200 mb-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-600 rounded-lg">
                                <Users size={24} className="text-white" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                                Student Outcomes
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {studentOutcomes.map((outcome, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                                    className="p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
                                >
                                    <div className="flex gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                                            {index + 1}
                                        </div>
                                        <p className="text-slate-700 leading-relaxed text-sm">{outcome}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* BS Program Enrollment */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-200"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-600 rounded-lg">
                                <TrendingUp size={24} className="text-white" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                                BS Program Enrollment
                            </h3>
                        </div>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
                        >
                            BS Program Enrollment and Degree Data
                            <ExternalLink size={18} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

