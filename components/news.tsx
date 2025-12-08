'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Award, ArrowRight, FileText, Users } from 'lucide-react';
import Image from 'next/image';
import { allIcons } from './floating-icons';
import { newsData, newsYears, type NewsItem } from '@/data/news';

// --- Components ---

const NewsCard = ({ item }: { item: NewsItem }) => {
    const isExternalLink = item.link?.startsWith('http://') || item.link?.startsWith('https://');
    const cardContent = (
        <>
            {/* Image Section */}
            <div className="relative h-40 overflow-hidden bg-gray-100">
                <img
                    src={item.image}
                    alt="" // Decorative, title is in heading
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-bold uppercase tracking-wide text-blue-600 rounded-sm">
                    {item.category}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col grow">
                <div className="mb-2">
                    <h3 className="font-bold text-gray-900 line-clamp-3 group-hover:text-blue-700 transition-colors h-fit min-h-14">
                        {item.title}
                    </h3>
                </div>

                <div className="text-xs text-gray-500 mb-4 flex items-center gap-1">
                    <Users size={14} aria-hidden="true" />
                    <span className="sr-only">Author: </span>{item.author}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-400 font-medium">
                        <Calendar size={14} className="mr-1" aria-hidden="true" />
                        <time dateTime={item.date}>{item.date}</time>
                    </div>
                    {item.link && (
                        <div className="bg-gray-50 p-1 rounded-full group-hover:bg-[#7abde8] group-hover:text-white transition-colors" aria-hidden="true">
                            <ArrowRight size={16} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );

    const cardClassName = "group flex flex-col h-full bg-white border border-gray-200 hover:shadow-xl transition-all duration-300" + (item.link ? " cursor-pointer" : "");

    return (
        <motion.article
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={cardClassName}
        >
            {item.link ? (
                isExternalLink ? (
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col h-full"
                        aria-label={`Read more about: ${item.title} (opens in new tab)`}
                    >
                        {cardContent}
                    </a>
                ) : (
                    <Link href={item.link} className="flex flex-col h-full" aria-label={`Read more about: ${item.title}`}>
                        {cardContent}
                    </Link>
                )
            ) : (
                cardContent
            )}
        </motion.article>
    );
};

const LogoTicker = () => {
    // Get Google and AWS icons from allIcons
    const googleIconData = allIcons.find(icon => icon.id === 1);
    const awsIconData = allIcons.find(icon => icon.id === 16);
    const IconGoogle = googleIconData?.icon;
    const IconAWS = awsIconData?.icon;

    const partners = [
        {
            name: "NSF",
            label: "National Science Foundation",
            type: "image",
            src: "/nsf.png"
        },
        {
            name: "Google",
            label: "Google CyberNYC",
            type: "icon",
            icon: IconGoogle
        },
        {
            name: "Amazon",
            label: "Amazon Web Services",
            type: "icon",
            icon: IconAWS
        },
        {
            name: "CUNY",
            label: "City University of New York",
            type: "image",
            src: "/cuny.png"
        },

    ];

    return (
        <div className="bg-gray-50 py-10 mt-16 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-gray-500 text-sm font-semibold mb-8 uppercase tracking-widest">
                    Research Partners & Sponsors
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
                    {partners.map((p, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center h-20 w-40 md:h-24 md:w-48 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 group"
                            title={p.label}
                        >
                            {p.type === "image" && p.src ? (
                                <div className="relative w-full h-full">
                                    <Image
                                        src={p.src}
                                        alt={p.label}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 160px, 192px"
                                    />
                                </div>
                            ) : p.type === "icon" && p.icon ? (
                                <div className="flex items-center justify-center h-20 w-20">
                                    {React.createElement(p.icon, {
                                        className: " text-gray-400 group-hover:text-gray-600 transition-colors",
                                        style: { fill: 'currentColor' }
                                    })}
                                </div>
                            ) : (
                                <div className="text-xl md:text-2xl font-bold text-gray-400 font-serif flex items-center gap-2">
                                    <Award size={24} />
                                    <span>{p.name}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- Main Component ---

export default function DepartmentNewsSection() {
    const [activeYear, setActiveYear] = useState("2024");

    return (
        <section className="py-16 bg-white text-[#2d2f31]" aria-labelledby="news-heading">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h2 id="news-heading" className="text-3xl md:text-4xl font-bold mb-3 font-serif tracking-tight text-gray-900">
                        Department News & Achievements
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Celebrating the grants, awards, and groundbreaking research of our faculty and students.
                    </p>
                </motion.div>

                {/* Tabs (Years) */}
                <div className="mb-8 border-b border-gray-200" role="tablist" aria-label="News by year">
                    <div className="flex space-x-6 overflow-x-auto pb-1 no-scrollbar">
                        {newsYears.map((year) => (
                            <button
                                key={year}
                                role="tab"
                                aria-selected={activeYear === year}
                                aria-controls={`news-panel-${year}`}
                                id={`news-tab-${year}`}
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
                <div
                    className="min-h-[400px]"
                    role="tabpanel"
                    id={`news-panel-${activeYear}`}
                    aria-labelledby={`news-tab-${activeYear}`}
                >
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
                            View all archives <ArrowRight size={16} className="ml-2" aria-hidden="true" />
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Logo Section */}
            <LogoTicker />
        </section>
    );
}