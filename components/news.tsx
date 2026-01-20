'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, ArrowRight, Users, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import Image from 'next/image';
import { allIcons } from './floating-icons';
import { getAllNews, type NewsItem } from '@/data/news';

// --- Components ---

const TimelineCard = ({ item, index }: { item: NewsItem; index: number }) => {
    const isExternalLink = item.link?.startsWith('http://') || item.link?.startsWith('https://');

    const cardContent = (
        <>
            {/* Image Section - Larger for timeline */}
            <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-100">
                <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="400px"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#0369A1] rounded-md shadow-sm">
                    {item.category}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col grow">
                {/* Date with larger styling */}
                <div className="flex items-center text-sm text-gray-600 font-semibold mb-3">
                    <Calendar size={16} className="mr-2 text-[#0369A1]" aria-hidden="true" />
                    <time dateTime={item.date}>{item.date}</time>
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0369A1] transition-colors min-h-14">
                    {item.title}
                </h3>

                {/* Author */}
                {item.author && (
                    <div className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                        <Users size={16} className="text-gray-400" aria-hidden="true" />
                        <span className="sr-only">Author: </span>
                        <span>{item.author}</span>
                    </div>
                )}

                {/* Link indicator */}
                {item.link && (
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-end">
                        <div className="flex items-center gap-2 text-sm font-semibold text-[#0369A1] group-hover:gap-3 transition-all">
                            <span>Read more</span>
                            <div className="bg-[#0369A1]/10 p-1.5 rounded-full group-hover:bg-[#0369A1] group-hover:text-white transition-colors">
                                <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );

    const cardClassName = "group flex flex-col h-full bg-white border border-gray-200 hover:shadow-2xl hover:border-[#0369A1]/30 transition-all duration-300 rounded-xl overflow-hidden" + (item.link ? " cursor-pointer" : "");

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cardClassName}
        >
            {item.link ? (
                isExternalLink ? (
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col h-full"
                    >
                        {cardContent}
                        <span className="sr-only">(opens in new tab)</span>
                    </a>
                ) : (
                    <Link href={item.link} className="flex flex-col h-full">
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
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Get all news items sorted chronologically (most recent first)
    const allNews = getAllNews().sort((a, b) => {
        // Simple date comparison - adjust if needed for more complex date formats
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
    });

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-12 md:py-16 bg-linear-to-b from-white to-gray-50 text-[#2d2f31]" aria-labelledby="news-heading">
            <div className="max-w-[1600px] mx-auto px-4 md:px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 md:mb-10 flex items-end justify-between"
                >
                    <div>
                        <h2 id="news-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 font-serif tracking-tight text-gray-900">
                            Department News & Achievements
                        </h2>
                        <p className="text-lg md:text-xl text-gray-900 max-w-3xl">
                            Celebrating the grants, awards, and groundbreaking research of our faculty and students across the years.
                        </p>
                    </div>

                    {/* Scroll Controls - Desktop */}
                    <div className="hidden md:flex items-center gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="p-3 rounded-full bg-white border border-gray-200 hover:border-[#0369A1] hover:bg-[#0369A1] hover:text-white transition-all shadow-sm"
                            aria-label="Scroll timeline left"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-3 rounded-full bg-white border border-gray-200 hover:border-[#0369A1] hover:bg-[#0369A1] hover:text-white transition-all shadow-sm"
                            aria-label="Scroll timeline right"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </motion.div>

                {/* Horizontal Scrollable Timeline */}
                <div className="relative">
                    {/* Timeline Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory"
                        style={{
                            scrollbarWidth: 'auto',
                            scrollbarColor: '#0369A1 #f1f5f9'
                        }}
                    >
                        {allNews.map((item, index) => (
                            <div
                                key={item.id}
                                className="shrink-0 w-[320px] sm:w-[360px] snap-start"
                            >
                                <TimelineCard item={item} index={index} />
                            </div>
                        ))}
                    </div>

                    {/* Gradient Overlays for visual depth */}
                    <div className="absolute top-0 left-0 bottom-6 w-12 bg-linear-to-r from-white/60 via-white/30 to-transparent pointer-events-none" />
                    <div className="absolute top-0 right-0 bottom-6 w-12 bg-linear-to-l from-gray-50/60 via-gray-50/30 to-transparent pointer-events-none" />
                </div>

                {/* Mobile Scroll Hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="md:hidden mt-4 text-center text-sm text-gray-500"
                >
                    <span className="inline-flex items-center gap-2">
                        <ArrowRight size={14} className="animate-pulse" />
                        Scroll to explore more
                    </span>
                </motion.div>

            </div>

            {/* Bottom Logo Section */}
            {/*<LogoTicker /> */}
        </section>
    );
}