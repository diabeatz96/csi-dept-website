'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle2, GraduationCap, Users, Award } from 'lucide-react';

export default function DoubleCountingPolicy() {
    const criteria = [
        {
            number: 1,
            text: "Current enrollment in bachelor's degree in Computer Science or Computer Science / Mathematics at CSI and successful completion of three years of study with 90 or more earned credits."
        },
        {
            number: 2,
            text: "Cumulative GPA 3.3 or above."
        },
        {
            number: 3,
            text: "Two letters of recommendation, at least one from a fulltime CSI Computer Science faculty under whom the applicant has studied."
        },
        {
            number: 4,
            text: "Permissions from the course instructor, the coordinator of the graduate program, and the department chairperson."
        },
        {
            number: 5,
            text: "Application for admission and conditional acceptance to the Computer Science graduate program."
        },
        {
            number: 6,
            text: "All graduate elective courses can be taken as double-counting courses, except the required core courses: CSC 716, CSC 727, CSC 740 and CSC 770."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-8xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                            <GraduationCap size={14} />
                            <span>BS/MS Accelerated Program</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Computer Science Graduate Course<br />
                            <span className="text-[#0369A1]">Double-Counting Policy</span>
                        </h2>
                    </div>

                    {/* Main Content Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-lg border border-slate-200"
                    >
                        {/* PDF Link */}
                        <div className="mb-8 pb-8 border-b border-slate-200">
                            <a
                                href="https://www.cs.csi.cuny.edu/content/BS_MS_Accelerated_Poster.pdf"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-[#0369A1] text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
                            >
                                <FileText size={20} />
                                Open PDF Flyer
                                <Download size={18} />
                            </a>
                        </div>

                        {/* Policy Description */}
                        <div className="mb-10">
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                Undergraduate students majoring in Computer Science or CS/Mathematics and satisfying the following criteria may be granted permission to take up to <span className="font-semibold text-slate-900">three graduate courses</span> at undergraduate tuition to be counted towards their bachelor's degree. These courses may be used only to substitute for <span className="font-semibold text-slate-900">400 level Computer Science elective courses (CSC designation)</span>. These graduate courses will be <span className="font-semibold text-slate-900">double-counted toward their master's degree</span>. This allows students to earn both the bachelor's and the master's degrees in <span className="font-semibold text-[#0369A1]">five years</span>.
                            </p>
                        </div>

                        {/* Criteria Section */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-[#0369A1] rounded-lg">
                                    <CheckCircle2 size={24} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Criteria:</h3>
                            </div>

                            <div className="space-y-4">
                                {criteria.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                        className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
                                    >
                                        <div className="flex-shrink-0 w-8 h-8 bg-[#0369A1] text-white rounded-full flex items-center justify-center font-bold text-sm">
                                            {item.number}
                                        </div>
                                        <p className="text-slate-700 leading-relaxed pt-1">{item.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

