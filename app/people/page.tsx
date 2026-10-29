'use client';

import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import FacultyCard from '@/components/people/faculty-card';
import DepartmentStaff from '@/components/people/staff-directory';
import { faculty } from '@/data/people';

export default function FacultyDirectory() {
    return (
        // reducedMotion="user" turns off movement animations for visitors with "reduce motion" enabled in their OS
        <MotionConfig reducedMotion="user">
            <div>
                <h1 className="sr-only">Faculty & Staff</h1>

                {/* Top padding includes space for the fixed navbar (pt-16 md:pt-18 like other pages) */}
                <section id="professors" className="bg-slate-50 pt-24 md:pt-30 pb-12 md:pb-16 min-h-screen">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">

                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 mb-4 md:mb-6">
                                Meet Our Professors
                            </h2>
                            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                                Our faculty are dedicated scholars and mentors, bringing decades of experience
                                in research and industry to the classroom.
                            </p>
                        </motion.div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                            {faculty.map((member, idx) => (
                                <FacultyCard key={member.id} member={member} index={idx} />
                            ))}
                        </div>

                    </div>
                </section>
                <div id='staff-directory'><DepartmentStaff /></div>
            </div>
        </MotionConfig>
    );
}
