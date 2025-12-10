'use client';

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight, ChevronRight, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import TopBanner from "./top-banner";
import { navItems, footerQuickLinks } from "@/data/navigation";
import { useSearch } from "@/components/search";

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
                        alt="" // Decorative image
                        role="presentation"
                        fill
                        sizes="100vw"
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
    const shouldReduceMotion = useReducedMotion();
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const firstNavItemRef = useRef<HTMLButtonElement>(null);
    const { openSearch } = useSearch();

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

    // Keyboard accessibility - Escape key closes menu
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
                // Return focus to menu button when closing
                menuButtonRef.current?.focus();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    // Focus management - move focus to first nav item when menu opens
    useEffect(() => {
        if (isOpen && firstNavItemRef.current) {
            // Small delay to allow animation to start
            const timer = setTimeout(() => {
                firstNavItemRef.current?.focus();
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <>
            {/* --- Sticky Top Bar --- */}
            <nav
                aria-label="Main navigation"
                className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 border-b ${isOpen
                    ? "bg-transparent border-transparent text-white py-5"
                    : isScrolled
                        ? "bg-white/95 backdrop-blur-md border-slate-200 text-slate-900 py-3 shadow-sm"
                        : "bg-white border-slate-200 text-slate-900 py-5"
                    }`}
            >
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 flex items-center justify-between">

                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center gap-2 sm:gap-3 group z-50 relative shrink-0">
                        <div className="relative">
                            <div className="w-9 h-11 sm:w-10 sm:h-12 md:w-11 md:h-14 rounded-lg flex items-center justify-center">
                                <Image
                                    src={isOpen ? "/cunycsiwhite.png" : "/csi-blue-logo.png"}
                                    alt=""
                                    width={32}
                                    height={41}
                                    className="w-7 h-9 sm:w-8 sm:h-10 md:w-9 md:h-11 object-contain"
                                    aria-hidden="true"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-[10px] sm:text-[11px] md:text-xs font-bold uppercase tracking-wider ${isOpen ? "text-blue-200" : "text-slate-500"
                                }`}>
                                Department of
                            </span>
                            <span className={`text-sm sm:text-base md:text-lg font-bold leading-tight ${isOpen ? "text-white" : "text-slate-900"
                                }`}>
                                Computer Science
                            </span>
                        </div>
                    </Link>

                    {/* Top Banner - Hidden on mobile */}
                    <div className="hidden lg:block">
                        <TopBanner />
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-2 sm:gap-4 z-50 relative shrink-0">
                        {/* Search Button */}
                        <button
                            onClick={openSearch}
                            aria-label="Open site search (Cmd+K)"
                            className={`p-2 sm:p-2.5 rounded-full border transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${isOpen
                                ? "border-white/30 bg-white/10 text-white hover:bg-white/20"
                                : "border-slate-200 bg-slate-50 text-slate-900 hover:border-[#0369A1] hover:text-[#0369A1]"
                                }`}
                        >
                            <Search size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
                        </button>

                        {/* Menu Toggle */}
                        <button
                            ref={menuButtonRef}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            aria-controls="mega-menu"
                            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                            className="flex items-center gap-2 sm:gap-3 group focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-full min-h-11"
                        >
                            <span className={`hidden sm:block text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors ${isOpen ? "text-white group-hover:text-blue-200" : "text-slate-900 group-hover:text-blue-600"
                                }`} aria-hidden="true">
                                {isOpen ? "Close" : "Menu"}
                            </span>
                            <div className={`p-2 sm:p-2.5 rounded-full border transition-all duration-300 ${isOpen
                                ? "border-white bg-white text-blue-900 rotate-90"
                                : "border-slate-200 bg-slate-50 text-slate-900 group-hover:border-blue-600 group-hover:text-blue-600"
                                }`}>
                                {isOpen ? <X size={18} className="sm:w-5 sm:h-5" aria-hidden="true" /> : <Menu size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />}
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- Full Screen Mega Menu --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mega-menu"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Site navigation menu"
                        initial={shouldReduceMotion ? false : { y: "-100%" }}
                        animate={shouldReduceMotion ? false : { y: "0%" }}
                        exit={shouldReduceMotion ? false : { y: "-100%" }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-999 bg-slate-900 pt-24 pb-10 overflow-hidden"
                    >
                        {/* Interactive Background */}
                        <BackgroundLayer image={activeItem.image} isOpen={isOpen} />

                        {/* Content Container */}
                        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 h-full flex flex-col overflow-y-auto">

                            {/* Desktop Layout */}
                            <div className="hidden lg:flex flex-row h-full">

                                {/* LEFT: Main Navigation Links (Now Clickable Tabs) */}
                                <div className="flex w-5/12 flex-col justify-center space-y-1" role="tablist" aria-label="Main navigation sections">
                                    {navItems.map((item, idx) => {
                                        const isExpanded = activeItem.id === item.id;
                                        const isCurrentPage = getBasePath(pathname) === item.href;
                                        return (
                                            <motion.div
                                                key={item.id}
                                                initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
                                                animate={shouldReduceMotion ? false : { opacity: 1, x: 0 }}
                                                transition={{ delay: shouldReduceMotion ? 0 : 0.2 + idx * 0.05, duration: shouldReduceMotion ? 0 : 0.5 }}
                                            >
                                                <button
                                                    ref={idx === 0 ? firstNavItemRef : undefined}
                                                    onClick={() => setActiveItem(item)}
                                                    role="tab"
                                                    aria-selected={isExpanded}
                                                    aria-controls={`panel-${item.id}`}
                                                    className={`group flex items-center gap-4 text-4xl md:text-6xl font-bold tracking-tight transition-all duration-300 w-full text-left focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded ${
                                                        isCurrentPage
                                                            ? "text-white translate-x-4"
                                                            : isExpanded
                                                                ? "text-white translate-x-4"
                                                                : "text-slate-500 hover:text-slate-300"
                                                    }`}
                                                >
                                                    {/* Active Indicator Line */}
                                                    <span className={`h-px transition-all duration-300 ${
                                                        isCurrentPage
                                                            ? "w-16 opacity-100 bg-blue-400"
                                                            : isExpanded
                                                                ? "w-12 opacity-100 bg-white"
                                                                : "w-0 opacity-0 bg-current"
                                                    }`} aria-hidden="true" />

                                                    <span className="relative">
                                                        {item.label}
                                                        {/* Current page indicator - subtle dot */}
                                                        {isCurrentPage && (
                                                            <motion.span
                                                                initial={{ scale: 0, opacity: 0 }}
                                                                animate={{ scale: 1, opacity: 1 }}
                                                                className="absolute -top-1 -right-4 flex items-center justify-center"
                                                            >
                                                                <span className="w-2 h-2 bg-blue-400 rounded-full" />
                                                                <span className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping" />
                                                            </motion.span>
                                                        )}
                                                    </span>
                                                </button>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* RIGHT: Dynamic Contextual Content */}
                                <div className="flex w-7/12 flex-col justify-center pl-24 border-l border-white/10">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeItem.id}
                                            id={`panel-${activeItem.id}`}
                                            role="tabpanel"
                                            aria-labelledby={`tab-${activeItem.id}`}
                                            initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
                                            animate={shouldReduceMotion ? false : { opacity: 1, x: 0 }}
                                            exit={shouldReduceMotion ? false : { opacity: 0, x: 10 }}
                                            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
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
                                                            className="group/link flex items-center justify-between py-3 border-b border-white/10 text-slate-300 hover:text-white hover:border-blue-400 transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
                                                        >
                                                            <span className="text-lg font-medium">{sub.name}</span>
                                                            <ChevronRight size={18} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-blue-400" aria-hidden="true" />
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Main Page Button: Always shows to allow nav to parent (e.g., /undergraduate) */}
                                            <div className="pt-4">
                                                {getBasePath(pathname) === activeItem.href ? (
                                                    <span className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium border border-white/20">
                                                        <span className="relative flex items-center justify-center">
                                                            <span className="w-2 h-2 bg-blue-400 rounded-full" aria-hidden="true" />
                                                            <span className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping" aria-hidden="true" />
                                                        </span>
                                                        Currently viewing this page
                                                    </span>
                                                ) : (
                                                    <Link
                                                        href={activeItem.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 hover:scale-105 transition-all shadow-lg shadow-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                                                    >
                                                        Go to {activeItem.label}
                                                        <ArrowRight size={20} className="text-blue-600" aria-hidden="true" />
                                                    </Link>
                                                )}
                                            </div>

                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                            </div>

                            {/* Mobile View (Accordion Style) - Only visible on mobile/tablet */}
                            <div className="flex lg:hidden flex-col flex-1 overflow-y-auto">
                                {navItems.map((item, idx) => {
                                    const isExpanded = activeItem.id === item.id;
                                    const isCurrentPage = getBasePath(pathname) === item.href;
                                    return (
                                        <motion.div
                                            key={item.id}
                                            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                                            animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
                                            transition={{ delay: shouldReduceMotion ? 0 : 0.1 + idx * 0.05 }}
                                            className={`border-b border-white/10 ${isCurrentPage ? "bg-white/5 -mx-4 px-4" : ""}`}
                                        >
                                            <button
                                                ref={idx === 0 ? firstNavItemRef : undefined}
                                                onClick={() => setActiveItem(item)}
                                                aria-expanded={isExpanded}
                                                className={`w-full text-left py-3 sm:py-4 text-xl sm:text-2xl font-bold transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded min-h-11 flex items-center ${
                                                    isCurrentPage
                                                        ? "text-blue-400"
                                                        : isExpanded
                                                            ? "text-white"
                                                            : "text-slate-400 hover:text-slate-200"
                                                }`}
                                            >
                                                <ChevronRight
                                                    size={20}
                                                    className={`mr-2 shrink-0 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""} ${isCurrentPage ? "text-blue-400" : isExpanded ? "text-blue-400" : "text-slate-500"}`}
                                                    aria-hidden="true"
                                                />
                                                <span className="relative flex-1">
                                                    {item.label}
                                                    {/* Current page indicator - subtle animated dot */}
                                                    {isCurrentPage && (
                                                        <motion.span
                                                            initial={{ scale: 0, opacity: 0 }}
                                                            animate={{ scale: 1, opacity: 1 }}
                                                            className="absolute -top-0.5 -right-3 flex items-center justify-center"
                                                        >
                                                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                                            <span className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" />
                                                        </motion.span>
                                                    )}
                                                </span>
                                            </button>

                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                                                        animate={shouldReduceMotion ? false : { height: "auto", opacity: 1 }}
                                                        exit={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                                                        className="overflow-hidden pb-4 pl-7"
                                                    >
                                                        <div className="flex flex-col gap-1">
                                                            {item.subLinks?.map(sub => (
                                                                <Link
                                                                    key={sub.name}
                                                                    href={sub.href}
                                                                    onClick={() => setIsOpen(false)}
                                                                    className="text-slate-300 hover:text-blue-400 active:text-blue-300 text-base sm:text-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded py-2 min-h-11 flex items-center transition-colors"
                                                                >
                                                                    {sub.name}
                                                                </Link>
                                                            ))}
                                                            {isCurrentPage ? (
                                                                <span className="mt-2 flex items-center gap-2 text-slate-300 text-sm py-2 min-h-11">
                                                                    <span className="relative flex items-center justify-center">
                                                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" aria-hidden="true" />
                                                                        <span className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" aria-hidden="true" />
                                                                    </span>
                                                                    Currently viewing
                                                                </span>
                                                            ) : (
                                                                <Link
                                                                    href={item.href}
                                                                    onClick={() => setIsOpen(false)}
                                                                    className="font-bold mt-2 flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded py-2 min-h-11 transition-colors text-blue-400 hover:text-blue-300"
                                                                >
                                                                    Visit Main Page <ArrowRight size={16} aria-hidden="true" />
                                                                </Link>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    )
                                })}
                            </div>

                            {/* Footer Links */}
                            <div className="mt-auto pt-4 sm:pt-8 border-t border-white/10 flex flex-wrap gap-x-4 sm:gap-x-8 gap-y-3 sm:gap-y-4 text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                {footerQuickLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`hover:text-white py-1 min-h-11 flex items-center ${link.highlight ? "sm:ml-auto text-blue-400" : ""}`}
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