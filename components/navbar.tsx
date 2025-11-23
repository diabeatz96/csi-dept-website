'use client';

import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("Home");

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Undergraduate", href: "/undergraduate" },
        { name: "Graduate", href: "/graduate" },
        { name: "Courses", href: "/courses" },
        { name: "Research", href: "/research" },
        { name: "People", href: "/people" },
        { name: "Resources", href: "/resources" },
    ];

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo and Department Name */}
                    <Link href="/" className="flex items-center gap-3 group">
                        {/* Logo - Geometric design */}
                        <div className="relative">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                                <svg
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
                                </svg>
                            </div>
                        </div>
                        {/* Department Name */}
                        <div className="flex flex-col">
                            <span className="text-xs md:text-sm text-gray-600 font-medium leading-tight">
                                Department of
                            </span>
                            <span className="text-sm md:text-base font-semibold text-gray-900 leading-tight">
                                Computer Science
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setActiveLink(link.name)}
                                className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative ${activeLink === link.name
                                    ? "text-blue-600"
                                    : "text-gray-700 hover:text-blue-600"
                                    }`}
                            >
                                {link.name}
                                {activeLink === link.name && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Search and Mobile Menu Button */}
                    <div className="flex items-center gap-3">
                        {/* Search Icon - Desktop */}
                        <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900">
                            <Search size={20} />
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X size={24} />
                            ) : (
                                <Menu size={24} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="lg:hidden border-t border-gray-200 overflow-hidden"
                        >
                            <div className="py-4 space-y-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => {
                                            setActiveLink(link.name);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeLink === link.name
                                            ? "bg-blue-50 text-blue-600"
                                            : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <button className="w-full mt-4 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-2">
                                    <Search size={18} />
                                    Search
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
