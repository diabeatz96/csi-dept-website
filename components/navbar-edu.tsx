'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import TopBanner from "./top-banner";
import { navItems, footerQuickLinks } from "@/data/navigation";

// --- Sub-Component: Background Image Layer ---
const BackgroundLayer = ({ image, isOpen }: { image?: string, isOpen: boolean }) => (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900 pointer-events-none">
        <AnimatePresence mode="wait">
            {isOpen && image && (
                <motion.div
                    key={image}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.3, scale: 1 }} // Low opacity to blend with blue background
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={image}
                        alt="Menu Background"
                        fill
                        className="object-cover object-center grayscale"
                        priority
                    />
                    {/* CSI Blue Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900/80 to-blue-900/40" />
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

// --- Main Navbar Component ---
export default function NavbarEdu() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(navItems[0]);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const [previousPathname, setPreviousPathname] = useState(pathname);

    // Helper function to get base path (without hash)
    const getBasePath = (path: string) => {
        return path.split('#')[0];
    };

    // Helper function to find active item based on pathname
    const findActiveItem = (path: string) => {
        const basePath = getBasePath(path);
        // Find exact match first
        const exactMatch = navItems.find(item => item.href === basePath);
        if (exactMatch) return exactMatch;

        // Find partial match (e.g., /undergraduate/something matches /undergraduate)
        const partialMatch = navItems.find(item =>
            item.href !== '/' && basePath.startsWith(item.href)
        );
        if (partialMatch) return partialMatch;

        // Default to home
        return navItems[0];
    };

    // Set active item based on pathname
    useEffect(() => {
        const active = findActiveItem(pathname);
        setActiveItem(active);
    }, [pathname]);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close on any route change (including hash changes)
    useEffect(() => {
        // Close navbar whenever pathname changes
        if (pathname !== previousPathname) {
            setIsOpen(false);
        }
        setPreviousPathname(pathname);
    }, [pathname, previousPathname]);

    // Lock body scroll
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [isOpen]);

    return (
        <>
            {/* --- Sticky Top Bar --- */}
            <nav
                className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 border-b ${isOpen
                    ? "bg-transparent border-transparent text-white py-5"
                    : isScrolled
                        ? "bg-white/95 backdrop-blur-md border-slate-200 text-slate-900 py-3 shadow-sm"
                        : "bg-white border-slate-200 text-slate-900 py-5"
                    }`}
            >
                <div className="max-w-[1600px] mx-auto px-6 flex items-center justify-between">

                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center gap-3 group z-50 relative">
                        <div className="relative">
                            <div className="w-10 h-10 md:w-12 md:h-12  rounded-lg flex items-center justify-center ">
                                {/* <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="w-6 h-6 md:w-7 md:h-7 text-white"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        d="M12 2L2 7L12 12L22 7L12 2Z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2 17L12 22L22 17"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2 12L12 17L22 12"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg> */}
                                <Image src={isOpen ? "/cunycsiwhite.png" : "/cunycsi.png"} alt="Logo" width={40} height={40} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-[10px] font-bold uppercase tracking-wider ${isOpen ? "text-blue-200" : "text-slate-500"
                                }`}>
                                Department of
                            </span>
                            <span className={`text-sm font-bold leading-none ${isOpen ? "text-white" : "text-slate-900"
                                }`}>
                                Computer Science
                            </span>
                        </div>
                    </Link>

                    <TopBanner />

                    {/* Right Actions */}
                    <div className="flex items-center gap-4 z-50 relative">
                        {/* Menu Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center gap-3 group focus:outline-none"
                        >
                            <span className={`hidden md:block text-sm font-bold uppercase tracking-widest transition-colors ${isOpen ? "text-white group-hover:text-blue-200" : "text-slate-900 group-hover:text-blue-600"
                                }`}>
                                {isOpen ? "Close" : "Menu"}
                            </span>
                            <div className={`p-2.5 rounded-full border transition-all duration-300 ${isOpen
                                ? "border-white bg-white text-blue-900 rotate-90"
                                : "border-slate-200 bg-slate-50 text-slate-900 group-hover:border-blue-600 group-hover:text-blue-600"
                                }`}>
                                {isOpen ? <X size={20} /> : <Menu size={20} />}
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- Full Screen Mega Menu --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-999 bg-slate-900 pt-24 pb-10 overflow-hidden"
                    >
                        {/* Interactive Background */}
                        <BackgroundLayer image={activeItem.image} isOpen={isOpen} />

                        {/* Content Container */}
                        <div className="relative z-10 max-w-[1600px] mx-auto px-6 h-full flex flex-col">

                            <div className="flex flex-col lg:flex-row h-full">

                                {/* LEFT: Main Navigation Links (Now Clickable Tabs) */}
                                <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-1">
                                    {navItems.map((item, idx) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + idx * 0.05, duration: 0.5 }}
                                        >
                                            <button
                                                onClick={() => setActiveItem(item)}
                                                className={`group flex items-center gap-4 text-4xl md:text-6xl font-bold tracking-tight transition-all duration-300 w-full text-left outline-none ${activeItem.id === item.id || getBasePath(pathname) === item.href
                                                    ? "text-white translate-x-4"
                                                    : "text-slate-500 hover:text-slate-300"
                                                    }`}
                                            >
                                                {/* Active Indicator Line */}
                                                <span className={`h-px bg-current transition-all duration-300 ${activeItem.id === item.id || getBasePath(pathname) === item.href
                                                    ? "w-12 opacity-100"
                                                    : "w-0 opacity-0"
                                                    }`} />

                                                {item.label}
                                            </button>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* RIGHT: Dynamic Contextual Content */}
                                <div className="hidden lg:flex w-full lg:w-7/12 flex-col justify-center pl-24 border-l border-white/10">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeItem.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 10 }}
                                            transition={{ duration: 0.3 }}
                                            className="space-y-8"
                                        >
                                            {/* Section Description */}
                                            <div>

                                                <h3 className="text-3xl text-white font-serif italic mb-2">
                                                    {activeItem.description}
                                                </h3>
                                            </div>

                                            {/* Sublinks Grid */}
                                            {activeItem.subLinks && activeItem.subLinks.length > 0 && (
                                                <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                                                    {activeItem.subLinks?.map((sub) => (
                                                        <Link
                                                            key={sub.name}
                                                            href={sub.href}
                                                            onClick={() => setIsOpen(false)}
                                                            className="group/link flex items-center justify-between py-3 border-b border-white/10 text-slate-300 hover:text-white hover:border-blue-400 transition-all"
                                                        >
                                                            <span className="text-lg font-medium">{sub.name}</span>
                                                            <ChevronRight size={18} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-blue-400" />
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Main Page Button: Always shows to allow nav to parent (e.g., /undergraduate) */}
                                            <div className="pt-4">
                                                <Link
                                                    href={activeItem.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 hover:scale-105 transition-all shadow-lg shadow-white/10"
                                                >
                                                    Go to {activeItem.label}
                                                    <ArrowRight size={20} className="text-blue-600" />
                                                </Link>
                                            </div>

                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                            </div>

                            {/* Mobile View (Accordion Style) */}
                            <div className="lg:hidden mt-8 flex-1 overflow-y-auto">
                                {navItems.map((item) => {
                                    const isActive = activeItem.id === item.id || getBasePath(pathname) === item.href;
                                    return (
                                        <div key={item.id} className="border-b border-white/10">
                                            <button
                                                onClick={() => setActiveItem(item)}
                                                className={`w-full text-left py-4 text-2xl font-bold transition-colors ${isActive ? "text-white" : "text-slate-500"
                                                    }`}
                                            >
                                                {item.label}
                                            </button>

                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden pb-4 pl-4"
                                                    >
                                                        <div className="flex flex-col gap-3">
                                                            {item.subLinks?.map(sub => (
                                                                <Link
                                                                    key={sub.name}
                                                                    href={sub.href}
                                                                    onClick={() => setIsOpen(false)}
                                                                    className="text-slate-300 hover:text-blue-400 text-lg"
                                                                >
                                                                    {sub.name}
                                                                </Link>
                                                            ))}
                                                            <Link
                                                                href={item.href}
                                                                onClick={() => setIsOpen(false)}
                                                                className="text-blue-400 font-bold mt-2 flex items-center gap-2"
                                                            >
                                                                Visit Main Page <ArrowRight size={16} />
                                                            </Link>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Footer Links */}
                            <div className="mt-auto pt-8 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                {footerQuickLinks.map((link, idx) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`hover:text-white ${link.highlight ? "ml-auto text-blue-400" : ""}`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}