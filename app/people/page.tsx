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
import DepartmentStaff from '@/components/staff-directory';

// --- Faculty Data (From Image 2) ---
const faculty = [
    {
        name: "Sos Agaian",
        title: "Distinguished Professor",
        email: "sos.agaian@csi.cuny.edu",
        office: "1N-203",
        phone: "718-982-2843",
        hasPhoto: true,
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2670&auto=format&fit=crop" // Placeholder for actual headshot
    },
    {
        name: "Tatiana Anderson",
        title: "Lecturer",
        email: "tatiana.anderson@csi.cuny.edu",
        office: "1N-210",
        phone: "718-982-2850",
        hasPhoto: false
    },
    {
        name: "Cong Chen",
        title: "Doctoral Lecturer",
        email: "cong.chen@csi.cuny.edu",
        office: "4N-206",
        phone: "718-982-2975",
        hasPhoto: false
    },
    {
        name: "Kennedy Edemacu",
        title: "Assistant Professor",
        email: "kennedy.edemacu@csi.cuny.edu",
        office: "1N-208",
        phone: "718-982-3273",
        hasPhoto: false
    },
    {
        name: "Feng Gu",
        title: "Professor",
        email: "feng.gu@csi.cuny.edu",
        office: "1N-201",
        phone: "718-982-2847",
        hasPhoto: true,
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
    },
    {
        name: "Yumei Huo",
        title: "Professor",
        email: "yumei.huo@csi.cuny.edu",
        office: "1N-202",
        phone: "718-982-2841",
        hasPhoto: false
    },
    {
        name: "Ali Mohamed",
        title: "Lecturer",
        email: "ali.mohamed@csi.cuny.edu",
        office: "1N-210",
        phone: "718-982-2850",
        hasPhoto: false
    },
    {
        name: "Louis Petingi",
        title: "Professor",
        email: "louis.petingi@csi.cuny.edu",
        office: "1N-211",
        phone: "718-982-2844",
        hasPhoto: true,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
    },
    {
        name: "Jun Rao",
        title: "Doctoral Lecturer",
        email: "jun.rao@csi.cuny.edu",
        office: "5N-220",
        phone: "718-982-2854",
        hasPhoto: false
    },
    {
        name: "Ping Shi",
        title: "Lecturer",
        email: "ping.shi@csi.cuny.edu",
        office: "1N-210",
        phone: "718-982-2850",
        hasPhoto: false
    },
    {
        name: "Sarah Zelikovitz",
        title: "Professor",
        email: "sarah.zelikovitz@csi.cuny.edu",
        office: "1N-212",
        phone: "718-982-2849",
        hasPhoto: false // Image was a silhouette in source
    },
    {
        name: "Shuqun Zhang",
        title: "Professor, Chairperson",
        email: "shuqun.zhang@csi.cuny.edu",
        office: "1N-204",
        phone: "718-982-2852",
        hasPhoto: true,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop"
    },
    {
        name: "Tianxiao Zhang",
        title: "Assistant Professor",
        email: "tianxiao.zhang@csi.cuny.edu",
        office: "1N-205",
        phone: "718-982-3288",
        hasPhoto: true,
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop"
    },
    {
        name: "Xiaowen Zhang",
        title: "Professor",
        email: "xiaowen.zhang@csi.cuny.edu",
        office: "1N-213",
        phone: "718-982-3262",
        hasPhoto: true,
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop"
    },
    {
        name: "Zhanyang Zhang",
        title: "Professor",
        email: "zhanyang.zhang@csi.cuny.edu",
        office: "1N-206",
        phone: "718-982-3175",
        hasPhoto: true,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop"
    }
];

// --- Components ---

const FacultyCard = ({ member, index }: { member: typeof faculty[0], index: number }) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        whileHover={{ y: -8 }}
        className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col h-full"
    >
        {/* Avatar Section */}
        <div className="relative h-64 overflow-hidden bg-slate-100 border-b border-slate-100">
            {member.hasPhoto && member.image ? (
                <>
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </>
            ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-50 group-hover:bg-blue-50 transition-colors">
                    <User size={64} className="text-slate-300 group-hover:text-blue-300 transition-colors" />
                </div>
            )}

            {/* Hover Action */}
            <div className="absolute bottom-4 right-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-white text-blue-600 p-2 rounded-full shadow-lg">
                    <ArrowRight size={20} />
                </div>
            </div>
        </div>

        {/* Info Section */}
        <div className="p-6 flex flex-col flex-grow">
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
            <div className="space-y-3 text-sm text-slate-500 mt-auto">
                <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 hover:text-blue-600 transition-colors group/link"
                >
                    <div className="p-1.5 rounded-md bg-slate-50 text-slate-400 group-hover/link:bg-blue-100 group-hover/link:text-blue-600 transition-colors">
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
    </motion.div>
);

export default function FacultyDirectory() {
    return (
        <main className='max-w-8xl mx-auto'>
            <section className="bg-slate-50 py-24 min-h-screen">
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
            <DepartmentStaff />
        </main>
    );
}