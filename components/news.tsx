'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Award, ArrowRight, FileText, Users } from 'lucide-react';

// --- Data Configuration ---

type NewsItem = {
    id: string;
    title: string;
    category: 'Grant' | 'Award' | 'Research' | 'Event';
    date: string;
    image: string;
    author?: string;
};

const newsData: Record<string, NewsItem[]> = {
    "2025": [
        {
            id: "25-1",
            title: "Spring 2025 Registration & Advising Now Open",
            category: "Event",
            date: "January 2025",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop",
            author: "Department Office"
        },
        {
            id: "25-2",
            title: "Upcoming Research Symposium: AI in Urban Environments",
            category: "Research",
            date: "March 2025",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
            author: "CSI Research Center"
        }
    ],
    "2024": [
        {
            id: "24-1",
            title: "NSF REU Grant: Computational Methods in High Performance Computing",
            category: "Grant",
            date: "January 2024",
            image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2670&auto=format&fit=crop",
            author: "Prof. Louis Petingi"
        }
    ],
    "2023": [
        {
            id: "23-1",
            title: "Receipient of the Google CyberNYC Grant",
            category: "Grant",
            date: "July 2023",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
            author: "Prof. Xiaowen Zhang"
        },
        {
            id: "23-2",
            title: "Best Presentation Award at LaGuardia CRSP Symposium",
            category: "Award",
            date: "May 2023",
            image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2670&auto=format&fit=crop",
            author: "Student Maxim Voyevoda"
        },
        {
            id: "23-3",
            title: "Dolphin Award for Outstanding Teaching",
            category: "Award",
            date: "May 2023",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop",
            author: "Prof. Sarah Zelikovitz"
        }
    ],
    "2022": [
        {
            id: "22-1",
            title: "Best Paper Award: 2022 Intl Conference on Systems Biology",
            category: "Award",
            date: "September 2022",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop",
            author: "Prof. Louis Petingi"
        },
        {
            id: "22-2",
            title: "Elected as Academia Europaea (AE) Member",
            category: "Award",
            date: "July 2022",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
            author: "Prof. S. Agaian"
        },
        {
            id: "22-3",
            title: "Top 300 Scholar in Regeneron Science Talent Search",
            category: "Research",
            date: "January 2022",
            image: "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?q=80&w=2670&auto=format&fit=crop",
            author: "Samuel Iskhakov (Mentee)"
        }
    ],
    "2021": [
        {
            id: "21-1",
            title: "Elected Fellow of Asia-Pacific Artificial Intelligence Association",
            category: "Award",
            date: "October 2021",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop",
            author: "Prof. S. Agaian"
        },
        {
            id: "21-2",
            title: "CSI Today Article: Research on COVID-19",
            category: "Research",
            date: "February 2021",
            image: "https://images.unsplash.com/photo-1584036561566-b93241b4e16b?q=80&w=2670&auto=format&fit=crop",
            author: "Prof. Sos Agaian"
        }
    ]
};

const years = ["2025", "2024", "2023", "2022", "2021"];

// --- Components ---

const NewsCard = ({ item }: { item: NewsItem }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group flex flex-col h-full bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
            {/* Image Section */}
            <div className="relative h-40 overflow-hidden bg-gray-100">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-bold uppercase tracking-wide text-blue-600 rounded-sm">
                    {item.category}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-grow">
                <div className="mb-2">
                    <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-blue-700 transition-colors h-[3.5rem]">
                        {item.title}
                    </h3>
                </div>

                <div className="text-xs text-gray-500 mb-4 flex items-center gap-1">
                    <Users size={14} />
                    {item.author}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-400 font-medium">
                        <Calendar size={14} className="mr-1" />
                        {item.date}
                    </div>
                    <div className="bg-gray-50 p-1 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <ArrowRight size={16} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const LogoTicker = () => {
    const partners = [
        { name: "NSF", label: "National Science Foundation" },
        { name: "Google", label: "Google CyberNYC" },
        { name: "CUNY", label: "City University of New York" },
        { name: "IEEE", label: "IEEE Society" },
        { name: "AAIA", label: "Asia-Pacific AI Association" },
        { name: "Regeneron", label: "Regeneron STS" },
    ];

    return (
        <div className="bg-gray-50 py-10 mt-16 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-gray-500 text-sm font-semibold mb-8 uppercase tracking-widest">
                    Research Partners & Sponsors
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((p, i) => (
                        <div key={i} className="text-xl md:text-2xl font-bold text-gray-400 font-serif flex items-center gap-2">
                            {/* Placeholder for logos using text/icons for this demo */}
                            <Award size={24} />
                            <span>{p.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- Main Component ---

export default function DepartmentNewsSection() {
    const [activeYear, setActiveYear] = useState("2023");

    return (
        <section className="py-16 bg-white text-[#2d2f31]">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 font-serif tracking-tight text-gray-900">
                        Department News & Achievements
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Celebrating the grants, awards, and groundbreaking research of our faculty and students.
                    </p>
                </motion.div>

                {/* Tabs (Years) */}
                <div className="mb-8 border-b border-gray-200">
                    <div className="flex space-x-6 overflow-x-auto pb-1 no-scrollbar">
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setActiveYear(year)}
                                className={`text-lg font-bold whitespace-nowrap pb-2 transition-all relative ${activeYear === year
                                        ? "text-black"
                                        : "text-gray-500 hover:text-gray-800"
                                    }`}
                            >
                                {year}
                                {activeYear === year && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Grid */}
                <div className="min-h-[400px]">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        <AnimatePresence mode='popLayout'>
                            {newsData[activeYear] ? (
                                newsData[activeYear].map((item) => (
                                    <NewsCard key={item.id} item={item} />
                                ))
                            ) : (
                                <div className="col-span-full py-20 text-center text-gray-400 italic">
                                    No news archives available for this period.
                                </div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* "Show all" Link (Udemy style) */}
                    <div className="mt-8">
                        <a href="#" className="inline-flex items-center text-blue-600 font-bold border border-blue-600 px-4 py-2 hover:bg-blue-50 transition-colors">
                            View all archives <ArrowRight size={16} className="ml-2" />
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Logo Section */}
            <LogoTicker />
        </section>
    );
}