'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, BookOpen, ExternalLink } from 'lucide-react';

export default function GraduateAdvisement() {
    return (
        <section className="py-8 bg-white">
            <div className="max-w-8xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Banner/Flyer Style Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="bg-gradient-to-r from-slate-50 to-blue-50/30 rounded-xl p-4 md:p-6 border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                            {/* Professor Image - Smaller */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="shrink-0"
                            >
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                                    <img
                                        src="/prof-xiaowen-zheng.png"
                                        alt="Prof. Xiaowen Zhang"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>

                            {/* Content - Horizontal Layout */}
                            <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6">
                                {/* Left: Contact Info */}
                                <div className="flex-1">
                                    <p className="text-slate-700 text-sm md:text-base mb-2">
                                        <span className="font-semibold text-slate-900">Advisement:</span>{' '}
                                        Please contact <span className="font-bold text-slate-900">Prof. Xiaowen Zhang</span>
                                        {', '}<span className="font-semibold italic text-slate-700">1N-213</span>
                                    </p>
                                    <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm">
                                        <a
                                            href="mailto:Xiaowen.Zhang@csi.cuny.edu"
                                            className="text-[#0369A1] hover:text-blue-700 font-medium transition-colors inline-flex items-center gap-1.5"
                                        >
                                            <Mail size={14} />
                                            <span>Xiaowen.Zhang@csi.cuny.edu</span>
                                        </a>
                                        <span className="text-slate-300">•</span>
                                        <div className="flex items-center gap-1.5 text-slate-600">
                                            <MapPin size={14} />
                                            <span>1N-213</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Catalog Link */}
                                <div className="flex-shrink-0 pt-2 md:pt-0 md:border-l md:border-slate-200 md:pl-6">
                                    <a
                                        href="https://www.cs.csi.cuny.edu/content/abet_table.pdf"
                                        className="text-[#0369A1] hover:text-blue-700 underline font-medium text-sm inline-flex items-center gap-1.5 transition-colors"
                                    >
                                        <BookOpen size={14} />
                                        <span>Graduate Catalog</span>
                                        <ExternalLink size={12} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

