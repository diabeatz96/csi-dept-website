'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Target, CheckCircle2, ExternalLink, ArrowRight, FileText, Award, ClipboardCheck } from 'lucide-react';

export default function MSProgramSection() {
    const quickLinks = [
        { name: 'Degree Requirements', href: '#' },
        { name: 'Tuition', href: '#' }
    ];

    const foundationTopics = [
        'Theoretical Computer Science',
        'Advanced Operating Systems',
        'Computer Architecture/Parallel Programming'
    ];

    const knowledgeAreas = [
        'High-Level Programming Language(s), Data Structures, Software Design, Operating Systems',
        'Digital Design, Computer Architecture',
        'Discrete Mathematics, Calculus',
        'Probability or Linear Algebra'
    ];

    return (
        <section className="py-12 ">
            <div className="max-w-8xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto"
                >
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-12"
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                            <div className='flex items-center gap-2 flex-col'>
                                <div className='h-1 w-[50%] self-start bg-blue-600 ' />
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                                    M.S. Program
                                </h2>
                            </div>

                            {/* Quick Links */}
                            <div className="flex items-center gap-4">
                                {quickLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.href}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                                        whileHover={{ scale: 1.05 }}
                                        className="text-blue-600 hover:text-blue-700 font-medium text-sm md:text-base transition-colors flex items-center gap-1"
                                    >
                                        {link.name}
                                        {index < quickLinks.length - 1 && (
                                            <span className="text-slate-300 mx-2">|</span>
                                        )}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Content Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="bg-white rounded-3xl p-8  shadow-lg border border-slate-200"
                    >
                        <div className="space-y-8">
                            {/* Admission Requirements */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.25 }}
                                className="pb-8 border-b border-slate-200"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 bg-blue-50 rounded-xl">
                                        <ClipboardCheck size={24} className="text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-slate-900 mb-6">Admission Requirements</h3>

                                        {/* Requirements Table */}
                                        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
                                            <div className="divide-y divide-slate-200">
                                                {/* Requirement 1 */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: 0.3 }}
                                                    className="p-4 hover:bg-white transition-colors"
                                                >
                                                    <div className="flex gap-4">
                                                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                                                            1
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className="text-slate-700 leading-relaxed">
                                                                A <span className="font-semibold text-slate-900">Bachelor of Science degree in Computer Science or related area</span> with a <span className="font-semibold text-blue-600">B average (3.0 out of 4.0)</span> overall and in the major.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </motion.div>

                                                {/* Requirement 2 */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: 0.35 }}
                                                    className="p-4 hover:bg-white transition-colors"
                                                >
                                                    <div className="flex gap-4">
                                                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                                                            2
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className="text-slate-700 leading-relaxed">
                                                                <span className="font-semibold text-slate-900">Resume or CV</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </motion.div>

                                                {/* Requirement 3 */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: 0.4 }}
                                                    className="p-4 hover:bg-white transition-colors"
                                                >
                                                    <div className="flex gap-4">
                                                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                                                            3
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className="text-slate-700 font-semibold mb-3">
                                                                Demonstrable knowledge of:
                                                            </p>
                                                            <div className="space-y-2 ml-0">
                                                                {knowledgeAreas.map((area, index) => (
                                                                    <motion.div
                                                                        key={index}
                                                                        initial={{ opacity: 0, x: -10 }}
                                                                        whileInView={{ opacity: 1, x: 0 }}
                                                                        viewport={{ once: true }}
                                                                        transition={{ duration: 0.3, delay: 0.45 + (index * 0.1) }}
                                                                        className="flex items-start gap-2 pl-6"
                                                                    >
                                                                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 shrink-0" />
                                                                        <p className="text-slate-700 text-sm leading-relaxed">{area}</p>
                                                                    </motion.div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>

                                        {/* Additional Information */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.5 }}
                                            className="bg-blue-50/50 rounded-xl p-5 border-l-4 border-blue-600 space-y-3"
                                        >
                                            <p className="text-slate-700 leading-relaxed">
                                                <span className="font-semibold text-slate-900">Matriculation Status:</span> Students who satisfy the requirements listed above will be admitted as matriculated graduate students.
                                            </p>
                                            <p className="text-slate-700 leading-relaxed">
                                                <span className="font-semibold text-slate-900">Deficiency Remediation for Transfer Students:</span> Students transferring from other related majors will be permitted to remedy undergraduate course deficiencies as follows: students missing any of the listed subject(s) must take the corresponding undergraduate courses or take a challenge exam.
                                            </p>
                                            <p className="text-slate-700 leading-relaxed">
                                                <span className="font-semibold text-slate-900">Credit Limit:</span> No more than nine graduate credits may be completed before deficiencies have been remedied.
                                            </p>
                                            <p className="text-slate-700 leading-relaxed">
                                                <span className="font-semibold text-slate-900">Coursework Requirement:</span> Undergraduate courses taken to remove deficiencies must be in addition to the regular coursework for the MS degree.
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Program Overview */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="pb-8 border-b border-slate-200"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 bg-blue-50 rounded-xl">
                                        <Target size={24} className="text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">Program Overview</h3>
                                        <p className="text-slate-700 leading-relaxed mb-4">
                                            The program is designed to provide advanced education in this rapidly evolving and challenging discipline. It serves those students who wish to increase their professional competence for business, industry, and research and development laboratories, as well as those students who wish to enter careers in research and teaching.
                                        </p>
                                        <p className="text-slate-700 leading-relaxed">
                                            Students may continue in doctoral programs in computer science including the City University program in which CSI participates.{' '}
                                            <a
                                                href="#"
                                                className="text-blue-600 hover:text-blue-700 underline font-medium inline-flex items-center gap-1"
                                            >
                                                (Ph.D.)
                                                <ExternalLink size={14} />
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Degree Requirements */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="pb-8 border-b border-slate-200"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 bg-blue-50 rounded-xl">
                                        <GraduationCap size={24} className="text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-slate-900 mb-6">Degree Requirements</h3>

                                        <div className="space-y-6">
                                            {/* Program Overview */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.45 }}
                                                className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5 border border-slate-200"
                                            >
                                                <p className="text-slate-700 text-lg leading-relaxed">
                                                    A program of <span className="font-bold text-blue-600">10 courses (30 credits)</span> with at least a <span className="font-bold text-blue-600">3.0 (B) average</span>.
                                                </p>
                                            </motion.div>

                                            {/* Core Courses Section */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 0.5 }}
                                                className="bg-slate-50 rounded-xl border-2 border-slate-200 overflow-hidden"
                                            >
                                                <div className="bg-blue-600 px-6 py-4">
                                                    <p className="text-white font-semibold italic text-sm md:text-base">
                                                        The following core courses are required for all students:
                                                    </p>
                                                </div>

                                                <div className="p-6">
                                                    <div className="overflow-x-auto">
                                                        <table className="w-full">
                                                            <thead>
                                                                <tr className="border-b-2 border-slate-300">
                                                                    <th className="text-left py-3 px-4 font-bold text-slate-900">Course Code</th>
                                                                    <th className="text-left py-3 px-4 font-bold text-slate-900">Course Name</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-slate-200">
                                                                <motion.tr
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    whileInView={{ opacity: 1, x: 0 }}
                                                                    viewport={{ once: true }}
                                                                    transition={{ duration: 0.4, delay: 0.55 }}
                                                                    className="hover:bg-white transition-colors"
                                                                >
                                                                    <td className="py-4 px-4">
                                                                        <span className="font-mono font-bold text-blue-600 text-sm md:text-base">CSC 716</span>
                                                                    </td>
                                                                    <td className="py-4 px-4 text-slate-700">Advanced Operating Systems</td>
                                                                </motion.tr>
                                                                <motion.tr
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    whileInView={{ opacity: 1, x: 0 }}
                                                                    viewport={{ once: true }}
                                                                    transition={{ duration: 0.4, delay: 0.6 }}
                                                                    className="hover:bg-white transition-colors"
                                                                >
                                                                    <td className="py-4 px-4">
                                                                        <span className="font-mono font-bold text-blue-600 text-sm md:text-base">CSC 727</span>
                                                                    </td>
                                                                    <td className="py-4 px-4 text-slate-700">Algorithms and Information Structures</td>
                                                                </motion.tr>
                                                                <motion.tr
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    whileInView={{ opacity: 1, x: 0 }}
                                                                    viewport={{ once: true }}
                                                                    transition={{ duration: 0.4, delay: 0.65 }}
                                                                    className="hover:bg-white transition-colors"
                                                                >
                                                                    <td className="py-4 px-4">
                                                                        <span className="font-mono font-bold text-blue-600 text-sm md:text-base">CSC 740</span>
                                                                        <span className="text-slate-500 mx-2">-or-</span>
                                                                        <span className="font-mono font-bold text-blue-600 text-sm md:text-base">CSC 770</span>
                                                                    </td>
                                                                    <td className="py-4 px-4 text-slate-700">
                                                                        Computer Systems Design
                                                                        <span className="text-slate-500 mx-2">/</span>
                                                                        Parallel Computing
                                                                    </td>
                                                                </motion.tr>
                                                                <motion.tr
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    whileInView={{ opacity: 1, x: 0 }}
                                                                    viewport={{ once: true }}
                                                                    transition={{ duration: 0.4, delay: 0.7 }}
                                                                    className="hover:bg-white transition-colors"
                                                                >
                                                                    <td className="py-4 px-4">
                                                                        <span className="font-mono font-bold text-blue-600 text-sm md:text-base">CSC 759</span>
                                                                        <span className="text-slate-500 mx-2">-or-</span>
                                                                        <span className="font-mono font-bold text-blue-600 text-sm md:text-base">CSC 799</span>
                                                                    </td>
                                                                    <td className="py-4 px-4 text-slate-700">
                                                                        Graduate Research Laboratory
                                                                        <span className="text-slate-500 mx-2">/</span>
                                                                        Thesis Research
                                                                    </td>
                                                                </motion.tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            {/* Elective Courses Information */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.75 }}
                                                className="bg-white rounded-xl p-5 border border-slate-200"
                                            >
                                                <p className="text-slate-700 leading-relaxed">
                                                    The remaining <span className="font-semibold text-slate-900">six courses</span> will be chosen from any of courses listed in the graduate catalog except <span className="font-mono text-sm bg-slate-100 px-1.5 py-0.5 rounded">CSC 602</span>, <span className="font-mono text-sm bg-slate-100 px-1.5 py-0.5 rounded">CSC 702</span>, and <span className="font-mono text-sm bg-slate-100 px-1.5 py-0.5 rounded">CSC 704</span>.{' '}
                                                    <a
                                                        href="#"
                                                        className="text-blue-600 hover:text-blue-700 underline font-medium inline-flex items-center gap-1"
                                                    >
                                                        Click here
                                                        <ExternalLink size={12} />
                                                    </a>
                                                    {' '}for a complete list of graduate courses.
                                                </p>
                                            </motion.div>

                                            {/* Special Policies */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 0.8 }}
                                                className="space-y-4"
                                            >
                                                <div className="bg-blue-50/50 rounded-xl p-5 border-l-4 border-blue-600">
                                                    <p className="text-slate-700 leading-relaxed mb-3">
                                                        <span className="font-semibold text-slate-900">Exceptional Students:</span> Exceptional students may be permitted to satisfy six credits of the total credit requirement with a master's thesis.
                                                    </p>
                                                </div>
                                                <div className="bg-blue-50/50 rounded-xl p-5 border-l-4 border-blue-600">
                                                    <p className="text-slate-700 leading-relaxed">
                                                        <span className="font-semibold text-slate-900">Specialization:</span> For specialization one must take two courses from one area and complete a master's thesis or project.
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Elective Policy */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 rounded-xl">
                                        <BookOpen size={24} className="text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-slate-900 mb-4">Elective Policy and Exceptions</h3>
                                        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                                            <p className="text-slate-700 leading-relaxed mb-3">
                                                Any other registered CSI graduate course in computer science shall be counted as an elective for the purposes of fulfilling the MS in Computer Science degree requirements,
                                            </p>
                                            <p className="text-slate-700 leading-relaxed">
                                                <span className="font-semibold text-slate-900">with the following exceptions:</span> those courses specifically identified as computing for teachers or other computer science teacher education courses or those courses identified as graduate proficiency courses.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

