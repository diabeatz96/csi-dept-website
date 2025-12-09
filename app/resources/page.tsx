'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Briefcase,
    Users,
    Code2,
    Laptop,
    Building2,
    BookOpen,
    Info,
    ArrowUpRight,
    Search,
    Monitor,
    Rocket,
    LucideIcon
} from 'lucide-react';
import Image from 'next/image';
import StudentSpotlights from '@/components/student-spotlight';
import { resourceCategories } from '@/data/resources';
import type { ResourceCategory } from '@/data/resources';

// Map icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
    Briefcase,
    Users,
    Code2,
    Laptop,
    Building2,
    BookOpen,
    Info,
    Search,
    Rocket,
    Monitor,
};

// --- Components ---

const ResourceCard = ({ category, index }: { category: ResourceCategory, index: number }) => {
    const IconComponent = iconMap[category.iconName] || BookOpen;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="flex flex-col h-full p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
        >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-slate-50 text-slate-600 group-hover:bg-[#8AC2EB] group-hover:text-white transition-colors duration-300">
                    <IconComponent size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-700 transition-colors">
                        {category.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 leading-snug">
                        {category.description}
                    </p>
                </div>
            </div>

            {/* Links List */}
            <ul className="space-y-3 mt-auto pt-4 border-t border-slate-50">
                {category.links.map((link) => (
                    <li key={link.id}>
                        <a
                            href={link.url}
                            className="text-sm text-slate-600 hover:text-[#8AC2EB] font-medium flex items-center justify-between group/link transition-colors"
                        >
                            <span className="truncate pr-2">{link.label}</span>
                            <ArrowUpRight
                                size={14}
                                className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-blue-400"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default function StudentResources() {
    return (
        <div className='bg-white pt-28 md:pt-32'>
            <div className='' id='student-spotlights'><StudentSpotlights /></div>
            <section className="py-24 bg-slate-50" id='resources-tools'>
                <div className="max-w-7xl mx-auto px-6">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 flex flex-row items-stretch justify-between gap-4"
                    >
                        <div className='max-w-4xl'>
                            <span className="text-[#8AC2EB] font-bold tracking-widest uppercase text-xs mb-2 block">
                                Student Portal
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                                Resources & Tools
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl">
                                Everything you need to navigate your academic journey, find career opportunities,
                                and access technical support, all in one place.
                            </p>
                        </div>
                        <div className="flex items-center w-1/2 relative rounded-lg overflow-hidden h-42">
                            <Image src="/csi-blue-logo.png" alt="CUNY and CSI Logos" fill className="object-contain drop-shadow-sm" />
                        </div>
                    </motion.div>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resourceCategories.map((category, idx) => (
                            <ResourceCard key={category.id} category={category} index={idx} />
                        ))}
                    </div>

                    {/* Footer Help Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-16 p-8 bg-slate-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
                    >
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                                <Monitor size={32} className="text-blue-300" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Need Technical Assistance?</h3>
                                <p className="text-slate-300 text-sm">The Student Technology Help Desk is available 24/7.</p>
                            </div>
                        </div>
                        <button className="px-6 py-3 bg-[#8AC2EB] hover:bg-blue-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-900/50 whitespace-nowrap">
                            Contact Help Desk
                        </button>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
