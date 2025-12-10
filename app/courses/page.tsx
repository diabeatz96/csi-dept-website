'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Search, Filter, BookOpen, Hash, X, Calendar, FileText, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { allCourses } from '@/data/courses';
import type { Course } from '@/data/types';

// --- Components ---

const CourseCard = ({ course }: { course: Course }) => {
    // Generate a subtle gradient based on the level/type
    const getGradient = () => {
        if (course.level === "PhD") return "from-purple-900 to-slate-900";
        if (course.type === "graduate") return "from-slate-800 to-slate-950";
        if (course.level === "ISI") return "from-teal-900 to-slate-900";
        return "from-blue-900 to-slate-900"; // Default Undergraduate
    };

    const CardContent = (
        <>
            {/* Card Container */}
            <div className={`relative aspect-video rounded-xl overflow-hidden shadow-md border border-slate-200/60 group-hover:shadow-2xl group-hover:border-blue-500/30 transition-all duration-300`}>

                {/* Linear Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getGradient()} opacity-95 transition-opacity duration-500`}></div>

                {/* Decorative Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] mix-blend-overlay"></div>

                {/* Content Centered in Card */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 text-center">
                    {/* Course Code Typography */}
                    <div className="flex flex-col items-center">
                        <span className="text-lg font-medium text-blue-200/80 tracking-widest uppercase mb-1">
                            {course.code.split(" ")[0]}
                        </span>
                        <span className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none group-hover:scale-105 transition-transform duration-300 drop-shadow-lg">
                            {course.code.split(" ")[1]}
                        </span>
                    </div>

                    {/* Badge Pill */}
                    <div className="mt-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest shadow-sm group-hover:bg-white/20 transition-colors">
                        {course.level === 'ISI' ? 'Information Systems' : course.level === 'PhD' ? 'Doctoral' : `${course.level} Level`}
                    </div>
                </div>

                {/* Hover Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform"></div>
            </div>

            {/* Title Under Card */}
            <div className="mt-4 px-1">
                <h4 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">
                    {course.title}
                </h4>
                <div className="flex items-center gap-2 mt-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${course.type === 'graduate' ? 'bg-purple-500' : 'bg-blue-500'}`}></div>
                    <p className="text-xs text-slate-500 font-medium capitalize">
                        {course.type}
                    </p>
                </div>
            </div>
        </>
    );

    return (
        <Link href={course.href} target="_blank" rel="noopener noreferrer">
            <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group flex flex-col h-full cursor-pointer"
            >
                {CardContent}
            </motion.div>
        </Link>
    );
};

const FilterPill = ({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) => (
    <button
        onClick={onClick}
        aria-pressed={isActive}
        className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 whitespace-nowrap flex items-center gap-2 border focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${isActive
            ? 'bg-slate-900 text-white border-slate-900 shadow-sm shadow-slate-900/20'
            : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
            }`}
    >
        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />}
        {label}
    </button>
);

// --- 3. Main Page ---

function CoursesPageContent() {
    const searchParams = useSearchParams();

    // Read filter from URL parameter
    const filterParam = searchParams.get('filter');
    const initialFilter = (filterParam === 'undergraduate' || filterParam === 'graduate')
        ? filterParam as 'all' | 'undergraduate' | 'graduate'
        : 'all';

    // State
    const [mainFilter, setMainFilter] = useState<'all' | 'undergraduate' | 'graduate'>(initialFilter);
    const [subFilter, setSubFilter] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    // Update filter when URL parameter changes
    useEffect(() => {
        if (filterParam === 'undergraduate' || filterParam === 'graduate') {
            setMainFilter(filterParam as 'all' | 'undergraduate' | 'graduate');
        }
    }, [filterParam]);

    // Handle Scroll for Sticky Shadow
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Reset subfilter only if the new main category doesn't contain the current subfilter
    // (Logic simplified: We now show all filters in "All", so resetting is less aggressive)
    useEffect(() => {
        if (mainFilter === 'undergraduate' && ['700', 'PhD'].includes(subFilter)) setSubFilter('all');
        if (mainFilter === 'graduate' && ['100', '200', '300', '400', 'ISI'].includes(subFilter)) setSubFilter('all');
    }, [mainFilter]);

    // Filter Logic
    const filteredCourses = useMemo(() => {
        return allCourses.filter(course => {
            // 1. Main Category
            if (mainFilter !== 'all' && course.type !== mainFilter) return false;

            // 2. Sub Category
            if (subFilter !== 'all') {
                if (subFilter === 'ISI' && course.level !== 'ISI') return false;
                if (subFilter === 'PhD' && course.level !== 'PhD') return false;
                if (!['ISI', 'PhD'].includes(subFilter) && course.level !== subFilter) return false;
            }

            // 3. Search
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                const matchesCode = course.code.toLowerCase().includes(query);
                const matchesTitle = course.title.toLowerCase().includes(query);
                return matchesCode || matchesTitle;
            }

            return true;
        });
    }, [mainFilter, subFilter, searchQuery]);

    // Determine visible sub-filters based on main selection
    const getSubFilters = () => {
        const undergradFilters = ['100', '200', '300', '400', 'ISI'];
        const gradFilters = ['700', 'PhD'];

        if (mainFilter === 'undergraduate') return undergradFilters;
        if (mainFilter === 'graduate') return gradFilters;

        // If "All" is selected, show EVERYTHING merged
        return [...undergradFilters, ...gradFilters];
    };

    return (
        <div className="min-h-screen bg-slate-50/50 font-sans text-slate-900 ">
            {/* Visually hidden H1 for accessibility */}
            <h1 className="sr-only">Computer Science Course Catalog - CSI</h1>

            {/* --- Quick Links Section --- */}
            <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 text-white pb-12 md:pb-16 pt-32">
                <div className="max-w-[1600px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-7xl mx-auto"
                    >
                        <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                <BookOpen size={24} aria-hidden="true" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold">Course Resources</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* CS Class Schedule Link */}
                            <motion.a
                                href="https://globalsearch.cuny.edu/CFGlobalSearchTool/search.jsp"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Computer Science Course Schedule (opens in new tab)"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                whileHover={{ scale: 1.02, y: -4 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-300 overflow-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700"
                            >
                                {/* Background gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-10 flex items-start gap-4">
                                    <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors shrink-0">
                                        <Calendar size={24} className="text-white" aria-hidden="true" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-lg mb-2 group-hover:text-blue-100 transition-colors">
                                            Computer Science Course Schedule
                                        </h3>
                                        <p className="text-sm text-blue-100/80 mb-3">
                                            Search for courses across CUNY using Global Search Tool
                                        </p>
                                        <div className="flex items-center gap-2 text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                                            <span>View Schedule</span>
                                            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                        </div>
                                    </div>
                                    <ArrowRight size={20} className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" aria-hidden="true" />
                                </div>
                            </motion.a>

                            {/* Overtally Policy Link */}
                            <motion.a
                                href="https://www.cs.csi.cuny.edu/content/overtally.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Waitlist and Overtally Policy PDF (opens in new tab)"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                whileHover={{ scale: 1.02, y: -4 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-300 overflow-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700"
                            >
                                {/* Background gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-10 flex items-start gap-4">
                                    <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors shrink-0">
                                        <FileText size={24} className="text-white" aria-hidden="true" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-lg mb-2 group-hover:text-blue-100 transition-colors">
                                            Waitlist and Overtally Policy
                                        </h3>
                                        <p className="text-sm text-blue-100/80 mb-3">
                                            Review the department's policy for waitlists and course overtally requests
                                        </p>
                                        <div className="flex items-center gap-2 text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                                            <span>View Policy</span>
                                            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                        </div>
                                    </div>
                                    <ArrowRight size={20} className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" aria-hidden="true" />
                                </div>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- Sticky Header Section --- */}
            <div className={`sticky top-4 z-40 bg-white/90 backdrop-blur-xl transition-all duration-300 border-b border-slate-200 ${isScrolled ? 'shadow-sm py-4' : 'py-6'}`}>
                <div className="max-w-[1600px] mx-auto px-6">

                    <div className="flex flex-col gap-5">

                        {/* Top Row: Main Filters & Search */}
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">

                            <div className="flex items-center gap-4">
                        
                                {/* Main Filter Tabs */}
                                <div className="flex p-1.5 bg-slate-100 rounded-xl w-fit border border-slate-200" role="group" aria-label="Filter courses by program type">
                                    {['all', 'undergraduate', 'graduate'].map((filter) => (
                                        <button
                                            key={filter}
                                            onClick={() => setMainFilter(filter as any)}
                                            aria-pressed={mainFilter === filter}
                                            className={`px-5 py-2 rounded-lg text-sm font-bold capitalize transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${mainFilter === filter
                                                ? 'bg-white text-slate-900 shadow-sm ring-1 ring-black/5'
                                                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                                                }`}
                                        >
                                            {filter}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Search Bar */}
                            <div className="relative w-full lg:w-96 group">
                                <label htmlFor="course-search" className="sr-only">
                                    Search courses by code or name
                                </label>
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0369A1] transition-colors">
                                    <Search size={18} aria-hidden="true" />
                                </div>
                                <input
                                    id="course-search"
                                    type="text"
                                    placeholder="Search by code or name..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    autoComplete="off"
                                    aria-describedby="search-results-count"
                                    className="w-full pl-11 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0369A1]/20 focus:border-[#0369A1] transition-all shadow-inner"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        aria-label="Clear search"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 min-w-11 min-h-11 flex items-center justify-center rounded-full hover:bg-slate-200 text-slate-400 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                                    >
                                        <X size={16} aria-hidden="true" />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Bottom Row: Dynamic Sub-Filters (Level/Dept) */}
                        {/* Now always visible or animated, showing relevant pills */}
                        <motion.div
                            layout
                            className="overflow-x-auto pb-1 no-scrollbar"
                        >
                            <div className="flex flex-nowrap items-center gap-3">
                                <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mr-2 flex items-center gap-1 shrink-0 py-1">
                                    <Filter size={12} aria-hidden="true" /> Section:
                                </span>

                                <FilterPill
                                    label="View All"
                                    isActive={subFilter === 'all'}
                                    onClick={() => setSubFilter('all')}
                                />

                                <div className="w-px h-6 bg-slate-200 mx-1 shrink-0"></div>

                                {getSubFilters().map((lvl) => (
                                    <FilterPill
                                        key={lvl}
                                        label={lvl === 'ISI' ? 'ISI Dept' : lvl === 'PhD' ? 'PhD' : `${lvl} Level`}
                                        isActive={subFilter === lvl}
                                        onClick={() => setSubFilter(lvl)}
                                    />
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* --- Course Grid Section --- */}
            <div className="max-w-[1600px] mx-auto px-6 py-12">

                {/* Results Header */}
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-2" aria-live="polite" aria-atomic="true" id="search-results-count">
                        <div className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 shadow-sm">
                            <Hash size={18} aria-hidden="true" />
                        </div>
                        <span className="font-bold text-slate-700">
                            {filteredCourses.length}
                            <span className="font-normal text-slate-500 ml-1">courses available</span>
                        </span>
                    </div>
                </div>

                {filteredCourses.length > 0 ? (
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredCourses.map((course) => (
                                <CourseCard key={course.code} course={course} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="py-32 text-center flex flex-col items-center justify-center"
                    >
                        <div className="inline-flex p-6 bg-slate-100 rounded-full mb-6 text-slate-300 shadow-inner">
                            <BookOpen size={64} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">No courses found</h3>
                        <p className="text-slate-500 max-w-md mx-auto">
                            We couldn't find any courses matching "{searchQuery}" in the {subFilter === 'all' ? 'current catalog' : `${subFilter} section`}.
                        </p>
                        <button
                            onClick={() => { setSearchQuery(''); setSubFilter('all'); setMainFilter('all'); }}
                            className="mt-6 text-[#0369A1] font-bold hover:underline"
                        >
                            Clear all filters
                        </button>
                    </motion.div>
                )}

            </div>
        </div>
    );
}

export default function CoursesPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-slate-50/50 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-flex p-6 bg-slate-100 rounded-full mb-6 text-slate-300">
                        <BookOpen size={64} strokeWidth={1.5} />
                    </div>
                    <p className="text-slate-600">Loading courses...</p>
                </div>
            </div>
        }>
            <CoursesPageContent />
        </Suspense>
    );
}