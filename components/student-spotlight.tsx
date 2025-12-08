'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Trophy,
    Briefcase,
    Code2,
    GraduationCap,
    ArrowUpRight,
    Sparkles,
    Newspaper,
    Gamepad2,
    Users,
    Award,
    LucideIcon
} from 'lucide-react';
import {
    studentSpotlights,
    getFeaturedSpotlight,
    getNonFeaturedSpotlights,
    type StudentSpotlight
} from '@/data/spotlights';

// Icon mapping from string names to components
const iconMap: Record<string, LucideIcon> = {
    Trophy,
    Briefcase,
    Code2,
    GraduationCap,
    Gamepad2,
    Award
};

// Transform data to include icon components
const spotlights = studentSpotlights.map(spotlight => ({
    ...spotlight,
    icon: iconMap[spotlight.icon] || Trophy
}));

// --- Components ---

const FeaturedSpotlight = ({ story }: { story: typeof spotlights[0] }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative h-full min-h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl"
    >
        {/* Background Image */}
        <img
            src={story.image}
            alt={story.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-8 text-white z-10">
            <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 text-xs font-bold uppercase tracking-wider border border-yellow-400/30 backdrop-blur-md flex items-center gap-1.5">
                    <Trophy size={12} /> Featured Story
                </span>
            </div>

            <h3 className="text-3xl font-serif font-bold mb-4 leading-tight group-hover:text-blue-300 transition-colors">
                {story.title}
            </h3>

            <p className="text-slate-300 mb-6 line-clamp-3 leading-relaxed">
                {story.description}
            </p>

            <div className="flex items-center gap-2 text-sm font-bold text-white group/btn">
                Read Full Story
                <div className="bg-white/20 p-1.5 rounded-full group-hover/btn:bg-white group-hover/btn:text-slate-900 transition-all">
                    <ArrowUpRight size={16} />
                </div>
            </div>
        </div>
    </motion.div>
);

const SpotlightItem = ({ story, index }: { story: typeof spotlights[0], index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{
            duration: 0.2,
            ease: "easeOut"
        }}
        layout
        className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group border border-transparent hover:border-slate-100"
    >
        <div className="shrink-0 mt-1">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#7abde8] group-hover:bg-[#7abde8] group-hover:text-white transition-all duration-300 shadow-sm">
                <story.icon size={20} />
            </div>
        </div>

        <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {story.category}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                    {story.date}
                </span>
            </div>
            <h4 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-blue-700 transition-colors">
                {story.title}
            </h4>
        </div>

        <div className="shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
            <ArrowUpRight size={16} className="text-slate-400" />
        </div>
    </motion.div>
);

// --- Main Component ---

export default function StudentSpotlights() {
    const [showAllNews, setShowAllNews] = useState(false);
    const featuredStory = spotlights.find(s => s.featured) || spotlights[0];
    const otherStories = spotlights.filter(s => !s.featured);
    const initialStories = otherStories.slice(0, 6);
    const remainingStories = otherStories.slice(6);
    const displayedStories = showAllNews ? otherStories : initialStories;

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-[#7abde8] font-bold uppercase tracking-widest text-xs mb-2">
                            <Sparkles size={14} />
                            Student Success
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">
                            Student Spotlights
                        </h2>
                    </div>

                    <button
                        onClick={() => setShowAllNews(!showAllNews)}
                        className="text-slate-500 hover:text-slate-900 font-bold text-sm flex items-center gap-2 group transition-colors"
                    >
                        {showAllNews ? 'Show Less' : 'View All News'}
                        <ArrowUpRight
                            size={16}
                            className={`group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform ${showAllNews ? 'rotate-180' : ''}`}
                        />
                    </button>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Left: Featured Story (Takes up 7 columns) */}
                    <div className={`lg:col-span-7 max-h-[700px]`}>
                        <FeaturedSpotlight story={featuredStory} />
                    </div>

                    {/* Right: Recent Stories List (Takes up 5 columns) */}
                    <div className="lg:col-span-5 flex flex-col h-full">
                        <div className="mb-4 flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                            <Newspaper size={14} /> Recent Highlights
                        </div>

                        {/* Scrollable Container if needed, or static list */}
                        <div className="space-y-2">
                            <AnimatePresence initial={false}>
                                {displayedStories.map((story, idx) => (
                                    <SpotlightItem key={story.id} story={story} index={idx} />
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* "See More" integrated as a final list item style */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="mt-6 pt-6 border-t border-slate-100 text-center"
                        >
                            <p className="text-xs text-slate-400 italic">
                                Celebrating the achievements of our incredible student community.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}