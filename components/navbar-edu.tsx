'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, Phone, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";
import { useSearch } from "@/components/search";

// --- Main Navbar Component ---
export default function NavbarEdu() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const { openSearch } = useSearch();

    // Helper function to get base path (without hash)
    const getBasePath = (path: string) => {
        return path.split('#')[0];
    };

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* --- Single Line Navbar --- */}
            <nav
                aria-label="Main navigation"
                className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 border-b ${
                    isScrolled
                        ? "bg-white/95 backdrop-blur-md border-slate-200 py-2 shadow-sm"
                        : "bg-white border-slate-200 py-3"
                }`}
            >
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between gap-4">

                        {/* Left: Logo */}
                        <Link href="/" className="flex items-center gap-2 group shrink-0">
                            <Image
                                src="/csi-blue-logo.png"
                                alt=""
                                width={32}
                                height={41}
                                className="w-7 h-9 object-contain"
                                aria-hidden="true"
                            />
                            <div className="flex flex-col">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                    Department of
                                </span>
                                <span className="text-base font-bold leading-tight text-slate-900">
                                    Computer Science
                                </span>
                            </div>
                        </Link>

                        {/* Center: Horizontal Navigation Menu */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => {
                                const isCurrentPage = getBasePath(pathname) === item.href ||
                                    (item.href !== '/' && getBasePath(pathname).startsWith(item.href));

                                return (
                                    <Link
                                        key={item.id}
                                        href={item.href}
                                        className={`px-3 py-1.5 rounded-lg text-base
                                             font-semibold transition-colors whitespace-nowrap ${
                                            isCurrentPage
                                                ? "bg-[#0369A1] text-white"
                                                : "text-slate-900 hover:bg-slate-100"
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Right: Contact Info + Search */}
                        <div className="flex items-center gap-2">
                            {/* Compact Contact Info - Desktop only */}
                            <div className="hidden xl:flex items-center gap-2 bg-[#0369A1] text-white px-2 py-1 rounded-lg text-[13px]">
                                <div className="flex items-center gap-1">
                                    <MapPin size={23} className="shrink-0" aria-hidden="true" />
                                    <span className="font-medium">1N-215</span>
                                </div>
                                <div className="h-3 w-px bg-white/30" />
                                <a href="tel:7189822850" className="flex items-center gap-1 hover:text-blue-100">
                                    <Phone size={23} className="shrink-0" aria-hidden="true" />
                                    <span className="font-medium">718.982.2850</span>
                                </a>
                                <div className="h-3 w-px bg-white/30" />
                                <a href="mailto:cs@csi.cuny.edu" className="flex items-center gap-1 hover:text-blue-100">
                                    <Mail size={23} className="shrink-0" aria-hidden="true" />
                                    <span className="font-medium">cs@csi.cuny.edu</span>
                                </a>
                            </div>

                            {/* Search Button */}
                            <button
                                onClick={openSearch}
                                aria-label="Open site search (Cmd+K)"
                                className="p-2 rounded-full border border-slate-200 bg-slate-50 text-slate-900 hover:border-[#0369A1] hover:text-[#0369A1] transition-all shrink-0"
                            >
                                <Search size={16} aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation Menu */}
                    <div className="lg:hidden flex items-center gap-1 mt-2 overflow-x-auto pb-1">
                        {navItems.map((item) => {
                            const isCurrentPage = getBasePath(pathname) === item.href ||
                                (item.href !== '/' && getBasePath(pathname).startsWith(item.href));

                            return (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className={`px-2 py-1 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
                                        isCurrentPage
                                            ? "bg-[#0369A1] text-white"
                                            : "text-slate-900 hover:bg-slate-100"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Contact Info */}
                    <div className="xl:hidden mt-2 bg-[#0369A1] text-white px-2 py-1.5 rounded-lg text-[14px]">
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-1.5">
                                <MapPin size={20} className="shrink-0" aria-hidden="true" />
                                <span className="font-medium">1N-215</span>
                            </div>
                            <a href="tel:7189822850" className="flex items-center gap-1 hover:text-blue-100">
                                <Phone size={20} className="shrink-0" aria-hidden="true" />
                                <span className="font-medium">718.982.2850</span>
                            </a>
                            <a href="mailto:cs@csi.cuny.edu" className="flex items-center gap-1 hover:text-blue-100">
                                <Mail size={20} className="shrink-0" aria-hidden="true" />
                                <span className="font-medium">cs@csi.cuny.edu</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
