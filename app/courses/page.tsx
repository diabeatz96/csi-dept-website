'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Search, Filter, BookOpen, Hash, X, Layers, Calendar, FileText, ExternalLink, ArrowRight } from 'lucide-react';

// --- 1. Complete Data Extraction ---

const coursesDB = [
    // --- Undergraduate: Level 100 ---
    { code: "CSC 102", title: "Computers for Today", level: "100", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0626441' },
    { code: "CSC 115", title: "Introduction to Computer Technology", level: "100", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0626511' },
    { code: "CSC 117", title: "Computer Technology Lab", level: "100", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1208961' },
    { code: "CSC 119", title: "Computer Technology Concepts", level: "100", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1186771' },
    { code: "CSC 126", title: "Introduction to Computer Science", level: "100", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0626561' },
    { code: "CSC 135", title: "Introduction to Information Systems", level: "100", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0621232' },
    { code: "CSC 140", title: "Computational Problem Solving in Python", level: "100", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1209211' },

    // --- Undergraduate: Level 200 ---
    { code: "CSC 211", title: "Intermediate Programming", level: "200", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0626631' },
    { code: "CSC 215", title: "Assistive Technology for Universal Applications", level: "200", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1186881' },
    { code: "CSC 220", title: "Computer Organization", level: "200", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0626651' },
    { code: "CSC 221", title: "Networking and Security", level: "200", type: "undergraduate", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1545761" },
    { code: "CSC 223", title: "Cybersecurity Fundamentals", level: "200", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0626661' },
    { code: "CSC 225", title: "Intro to Web Development and the Internet", level: "200", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0626681' },
    { code: "CSC 226", title: "Web Database Applications", level: "200", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0626691' },
    { code: "CSC 227", title: "Introductory Computer Game Programming", level: "200", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0626701' },
    { code: "CSC 228", title: "Discrete Mathematical Structures for Computer Science", level: "200", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0626711' },
    { code: "CSC 229", title: "Introduction to High Performance Computing", level: "200", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1087091' },
    { code: "CSC 235", title: "Robotic Explorations", level: "200", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1238371' },
    { code: "CSC 245", title: "Introduction to Data Science", level: "200", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1504171' },
    { code: "CSC 250", title: "Serious Game Development", level: "200", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1522221' },
    { code: "CSC 270", title: "Introduction to Scientific Computing", level: "200", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0626781' },

    // --- Undergraduate: Level 300 ---
    { code: "CSC 305", title: "Operating Systems Programming Laboratory", level: "300", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1209231' },
    { code: "CSC 315", title: "Introduction to Database Systems", level: "300", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1300971' },
    { code: "CSC 326", title: "Data Structures", level: "300", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0626831' },
    { code: "CSC 330", title: "Object-Oriented Software Design", level: "300", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0626851' },
    { code: "CSC 332", title: "Operating Systems I", level: "300", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0626871' },
    { code: "CSC 346", title: "Digital Systems Design", level: "300", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0626921' },
    { code: "CSC 347", title: "Digital Systems Design Laboratory", level: "300", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0626931' },
    { code: "CSC 382", title: "Analysis of Algorithms", level: "300", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0626991' },

    // --- Undergraduate: Level 400 ---
    { code: "CSC 401", title: "Virtual and Augmented Reality", level: "400", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1572991' },
    { code: "CSC 412", title: "Machine Learning and Knowledge Discovery", level: "400", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1471021' },
    { code: "CSC 420", title: "Concepts of Programming Languages", level: "400", type: "undergraduate", href: 'http://csicuny.smartcatalogiq.com/current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-420' },
    { code: "CSC 421", title: "Internet Data Communications", level: "400", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0627051' },
    { code: "CSC 424", title: "Advanced Database Management Systems", level: "400", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0627061' },
    { code: "CSC 425", title: "Shared Memory Parallel Computing", level: "400", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1371751' },
    { code: "CSC 426", title: "Applied Cryptography", level: "400", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1371611' },
    { code: "CSC 427", title: "Advanced Computer Game Programming", level: "400", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0627071' },
    { code: "CSC 429", title: "Advanced High Performance Computing", level: "400", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1090481' },
    { code: "CSC 430", title: "Software Engineering", level: "400", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0627081' },
    { code: "CSC 435", title: "Advanced Data Communications", level: "400", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0627111' },
    { code: "CSC 436", title: "Modern Web Development", level: "400", type: "undergraduate", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1522231" },
    { code: "CSC 438", title: "Mobile Application Development", level: "400", type: "undergraduate", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1186111" },
    { code: "CSC 446", title: "Computer Architecture", level: "400", type: "undergraduate", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0627131" },
    { code: "CSC 450", title: "Honors Workshop", level: "400", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0627141' },
    { code: "CSC 455", title: "Neuromorphic Computing", level: "400", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1553381' },
    { code: "CSC 462", title: "Microcontrollers", level: "400", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0643652' },
    { code: "CSC 470", title: "Introductory Computer Graphics", level: "400", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0627181' },
    { code: "CSC 475", title: "Image Processing in Computer Science", level: "400", type: "undergraduate", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0627191" },
    { code: "CSC 480", title: "Artificial Intelligence", level: "400", type: "undergraduate", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0627201" },
    { code: "CSC 482", title: "Discrete Simulation", level: "400", type: "undergraduate", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0627211" },
    { code: "CSC 484", title: "Theory of Computation", level: "400", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0627221' },
    { code: "CSC 490", title: "Seminar in Computer Science", level: "400", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/0627231' },

    // --- Undergraduate: ISI (Information Systems) ---
    { code: "ISI 205", title: "Data Communications and IT Infrastructure", level: "ISI", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1303251' },
    { code: "ISI 300", title: "Information Structures for Business", level: "ISI", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1300991' },
    { code: "ISI 315", title: "Information Security and Risk Management", level: "ISI", type: "undergraduate", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1303261" },
    { code: "ISI 334", title: "Business Intelligence and Analytics", level: "ISI", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1303291' },
    { code: "ISI 352", title: "Introduction to Systems Analysis", level: "ISI", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1303271' },
    { code: "ISI 364", title: "Enterprise Computing Strategies", level: "ISI", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1300961' },
    { code: "ISI 374", title: "Information Systems Project Management", level: "ISI", type: "undergraduate", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1301001" },
    { code: "ISI 490", title: "Project in Information Systems and Informatics", level: "ISI", type: "undergraduate", href: 'https://csi-undergraduate.catalog.cuny.edu/courses/1301011' },

    // --- Graduate: Level 700 ---
    { code: "CSC 704", title: "Tech-Infused Curriculum Dev (Teachers)", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/0627711' },
    { code: "CSC 706", title: "Computer Graphics", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0627731" },
    { code: "CSC 710", title: "Software Engineering", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0627761" },
    { code: "CSC 711", title: "Computational Thinking for Teachers", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/1299601' },
    { code: "CSC 714", title: "Software Systems Analysis Design", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/1299611' },
    { code: "CSC 715", title: "Database Theory", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/0627801' },
    { code: "CSC 716", title: "Advanced Operating Systems", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/0627811' },
    { code: "CSC 724", title: "Formal Language Theory", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/0627871' },
    { code: "CSC 725", title: "Computer Vision", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/1485221' },
    { code: "CSC 727", title: "Algorithms and Information Structures", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/0627881' },
    { code: "CSC 731", title: "Artificial Intelligence and Knowledge Engineering", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/0627891' },
    { code: "CSC 732", title: "Pattern Recognition and Neural Networks", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/0627901' },
    { code: "CSC 733", title: "Natural Language Processing", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/0627911' },
    { code: "CSC 735", title: "Machine Learning and Data Mining", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/0627921' },
    { code: "CSC 740", title: "Computer System Design", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/0627931' },
    { code: "CSC 741", title: "Digital Image Processing", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/0627941' },
    { code: "CSC 747", title: "Digital Signal Processing", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/0627971' },
    { code: "CSC 754", title: "Topics in System Simulation", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/0628011' },
    { code: "CSC 756", title: "Network Security", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/0628031' },
    { code: "CSC 757", title: "Telecommunication Networks", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/0628041' },
    { code: "CSC 759", title: "Graduate Research Laboratory", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/0628061' },
    { code: "CSC 762", title: "Fundamentals of Wireless Communications", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/0628081' },
    { code: "CSC 767", title: "Neural Networks and Deep Learning", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/1371761' },
    { code: "CSC 768", title: "Cryptography", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/1371771' },
    { code: "CSC 769", title: "Graph-Based Analysis for Big Data", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/1372531' },
    { code: "CSC 770", title: "Parallel Computing", level: "700", type: "graduate", href: 'https://csi-graduate.catalog.cuny.edu/courses/0628111' },

    // --- Graduate: PhD (Grouped by topic for display, code is generalized) ---
    { code: "DS 801", title: "Big Data Analytics", level: "PhD", type: "graduate", href: '#' },
    { code: "DS 802", title: "Data Mining & Visualization", level: "PhD", type: "graduate", href: '#' },
    { code: "ML 810", title: "Machine Learning in Quant Finance", level: "PhD", type: "graduate", href: '#' },
    { code: "ML 815", title: "Graphical Models & Optimization", level: "PhD", type: "graduate", href: '#' },
    { code: "TH 820", title: "Advanced Data Structures", level: "PhD", type: "graduate", href: '#' },
    { code: "TH 825", title: "Combinatorial Algorithms", level: "PhD", type: "graduate", href: '#' },
    { code: "CP 830", title: "Parallel Scientific Computing", level: "PhD", type: "graduate", href: '#' },
    { code: "NLP 840", title: "Natural Language Processing", level: "PhD", type: "graduate", href: '#' },
    { code: "NLP 845", title: "Web Information Retrieval", level: "PhD", type: "graduate", href: '#' },
    { code: "VIS 850", title: "Computer Vision & 3D Photo", level: "PhD", type: "graduate", href: '#' },
    { code: "SOC 860", title: "Social Network Analysis", level: "PhD", type: "graduate", href: '#' },
];

// --- 2. Components ---

const CourseCard = ({ course }: { course: typeof coursesDB[0] }) => {
    // Generate a subtle gradient based on the level/type
    const getGradient = () => {
        if (course.level === "PhD") return "from-purple-900 to-slate-900";
        if (course.type === "graduate") return "from-slate-800 to-slate-950";
        if (course.level === "ISI") return "from-teal-900 to-slate-900";
        return "from-blue-900 to-slate-900"; // Default Undergraduate
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group flex flex-col h-full cursor-pointer"
        >
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
        </motion.div>
    );
};

const FilterPill = ({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 whitespace-nowrap flex items-center gap-2 border ${isActive
            ? 'bg-slate-900 text-white border-slate-900 shadow-sm shadow-slate-900/20'
            : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
            }`}
    >
        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />}
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
        return coursesDB.filter(course => {
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
                                <BookOpen size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold">Course Resources</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* CS Class Schedule Link */}
                            <motion.a
                                href="https://globalsearch.cuny.edu/CFGlobalSearchTool/search.jsp"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                whileHover={{ scale: 1.02, y: -4 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-300 overflow-hidden"
                            >
                                {/* Background gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-10 flex items-start gap-4">
                                    <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors shrink-0">
                                        <Calendar size={24} className="text-white" />
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
                                            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                    <ArrowRight size={20} className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                                </div>
                            </motion.a>

                            {/* Overtally Policy Link */}
                            <motion.a
                                href="https://www.cs.csi.cuny.edu/content/overtally.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                whileHover={{ scale: 1.02, y: -4 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-300 overflow-hidden"
                            >
                                {/* Background gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-10 flex items-start gap-4">
                                    <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors shrink-0">
                                        <FileText size={24} className="text-white" />
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
                                            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                    <ArrowRight size={20} className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
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
                                <div className="flex p-1.5 bg-slate-100 rounded-xl w-fit border border-slate-200">
                                    {['all', 'undergraduate', 'graduate'].map((filter) => (
                                        <button
                                            key={filter}
                                            onClick={() => setMainFilter(filter as any)}
                                            className={`px-5 py-2 rounded-lg text-sm font-bold capitalize transition-all duration-300 ${mainFilter === filter
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
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#7abde8] transition-colors">
                                    <Search size={18} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search by code or name..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#7abde8]/20 focus:border-[#7abde8] transition-all shadow-inner"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-slate-200 text-slate-400 transition-colors"
                                    >
                                        <X size={14} />
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
                                    <Filter size={12} /> Section:
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
            <main className="max-w-[1600px] mx-auto px-6 py-12">

                {/* Results Header */}
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 shadow-sm">
                            <Hash size={18} />
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
                            className="mt-6 text-[#7abde8] font-bold hover:underline"
                        >
                            Clear all filters
                        </button>
                    </motion.div>
                )}

            </main>
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