'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    User,
    ArrowRight,
    GraduationCap
} from 'lucide-react';
import Link from 'next/link';
import DepartmentStaff from '@/components/staff-directory';
import { faculty } from '@/data/people';
import type { FacultyMember } from '@/data/types';

// --- Components ---

const FacultyCard = ({ member, index }: { member: FacultyMember, index: number }) => {
    const hasLink = member.website && member.website.trim() !== '';
    const CardContent = (
        <>
            {/* Avatar Section */}
            <div className="relative h-64 overflow-hidden bg-slate-100 border-b border-slate-100">
                {member.image ? (
                    <>
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-50 group-hover:bg-blue-50 transition-colors">
                        <User size={64} className="text-slate-300 group-hover:text-blue-300 transition-colors" />
                    </div>
                )}

                {/* Hover Action - Only show if link exists */}
                {hasLink && (
                    <div className="absolute bottom-4 right-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="bg-white text-[#7abde8] p-2 rounded-full shadow-lg">
                            <ArrowRight size={20} />
                        </div>
                    </div>
                )}
            </div>

            {/* Info Section */}
            <div className="p-6 flex flex-col grow">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">
                        {member.name}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider">
                        {member.title.includes('Distinguished') && <GraduationCap size={12} />}
                        {member.title}
                    </div>
                </div>

                {/* Contact Grid */}
                <div className="space-y-3 text-sm text-slate-500 mt-auto grow">
                    <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-3 hover:text-[#7abde8] transition-colors group/link"
                    >
                        <div className="p-1.5 rounded-md bg-slate-50 text-slate-400 group-hover/link:bg-blue-100 group-hover/link:text-[#7abde8] transition-colors">
                            <Mail size={14} />
                        </div>
                        <span className="truncate">{member.email}</span>
                    </a>

                    <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-md bg-slate-50 text-slate-400">
                            <MapPin size={14} />
                        </div>
                        <span>Office: {member.office}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-md bg-slate-50 text-slate-400">
                            <Phone size={14} />
                        </div>
                        <span>{member.phone}</span>
                    </div>
                </div>
            </div>
        </>
    );

    if (hasLink) {
        return (
            <Link href={member.website!} target="_blank" rel="noopener noreferrer">
                <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col h-full cursor-pointer"
                >
                    {CardContent}
                </motion.div>
            </Link>
        );
    }

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -8 }}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col h-full"
        >
            {CardContent}
        </motion.div>
    );
};

export default function FacultyDirectory() {
    return (
        <main className='max-w-8xl mx-auto'>
            <section id="professors" className="bg-slate-50 py-24 min-h-screen">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
                            Meet Our Professors
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Our faculty are dedicated scholars and mentors, bringing decades of experience
                            in research and industry to the classroom.
                        </p>
                    </motion.div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
                        {faculty.map((member, idx) => (
                            <FacultyCard key={member.name} member={member} index={idx} />
                        ))}
                    </div>

                </div>
            </section>
            <div className='' id='staff-directory'><DepartmentStaff /></div>
        </main>
    );
}