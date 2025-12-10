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
import Image from 'next/image';
import DepartmentStaff from '@/components/staff-directory';
import { faculty } from '@/data/people';
import type { FacultyMember } from '@/data/types';

// --- Components ---

const FacultyCard = ({ member, index }: { member: FacultyMember, index: number }) => {
    const hasLink = member.website && member.website.trim() !== '';

    // Contact info component - uses spans when card is a link (to avoid nested <a> tags)
    const ContactInfo = ({ isInsideLink }: { isInsideLink: boolean }) => (
        <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-500 mt-auto grow">
            {isInsideLink ? (
                <div className="flex items-center gap-2 sm:gap-3 min-h-11">
                    <div className="p-1.5 rounded-md bg-slate-50 text-slate-400 shrink-0">
                        <Mail size={14} />
                    </div>
                    <span className="truncate">{member.email}</span>
                </div>
            ) : (
                <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 sm:gap-3 hover:text-[#0369A1] transition-colors group/link min-h-11"
                >
                    <div className="p-1.5 rounded-md bg-slate-50 text-slate-400 group-hover/link:bg-blue-100 group-hover/link:text-[#0369A1] transition-colors shrink-0">
                        <Mail size={14} />
                    </div>
                    <span className="truncate">{member.email}</span>
                </a>
            )}

            <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 rounded-md bg-slate-50 text-slate-400 shrink-0">
                    <MapPin size={14} />
                </div>
                <span>Office: {member.office}</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 rounded-md bg-slate-50 text-slate-400 shrink-0">
                    <Phone size={14} />
                </div>
                <span>{member.phone}</span>
            </div>
        </div>
    );

    const CardContent = ({ isInsideLink }: { isInsideLink: boolean }) => (
        <>
            {/* Avatar Section */}
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-slate-100 border-b border-slate-100">
                {member.image ? (
                    <>
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-50 group-hover:bg-blue-50 transition-colors">
                        <User size={48} className="text-slate-300 group-hover:text-blue-300 transition-colors sm:w-16 sm:h-16" />
                    </div>
                )}

                {/* Hover Action - Only show if link exists */}
                {hasLink && (
                    <div className="absolute bottom-4 right-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="bg-white text-[#0369A1] p-2 rounded-full shadow-lg">
                            <ArrowRight size={20} />
                        </div>
                    </div>
                )}
            </div>

            {/* Info Section */}
            <div className="p-4 sm:p-5 md:p-6 flex flex-col grow">
                <div className="mb-3 md:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">
                        {member.name}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                        {member.title.includes('Distinguished') && <GraduationCap size={12} />}
                        {member.title}
                    </div>
                </div>

                {/* Contact Grid */}
                <ContactInfo isInsideLink={isInsideLink} />
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
                    <CardContent isInsideLink={true} />
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
            <CardContent isInsideLink={false} />
        </motion.div>
    );
};

export default function FacultyDirectory() {
    return (
        <div className='max-w-8xl mx-auto'>
            <section id="professors" className="bg-slate-50 pt-28 md:pt-32 pb-16 md:pb-24 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 md:px-6">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 mb-4 md:mb-6">
                            Meet Our Professors
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                            Our faculty are dedicated scholars and mentors, bringing decades of experience
                            in research and industry to the classroom.
                        </p>
                    </motion.div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                        {faculty.map((member, idx) => (
                            <FacultyCard key={member.name} member={member} index={idx} />
                        ))}
                    </div>

                </div>
            </section>
            <div id='staff-directory'><DepartmentStaff /></div>
        </div>
    );
}