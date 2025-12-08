'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    ExternalLink,
    GraduationCap,
    ArrowRight
} from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        programs: [
            { name: 'Undergraduate Programs', href: '/undergraduate' },
            { name: 'Graduate Programs', href: '/graduate' },
            { name: 'Courses', href: '/courses' },
            { name: 'Research', href: '/research' },
        ],
        resources: [
            { name: 'People', href: '/people' },
            { name: 'Resources', href: '/resources' },
            { name: 'Student Spotlights', href: '/resources#student-spotlights' },
            { name: 'Career Services', href: '/resources#resources-tools' },
        ],
        quickLinks: [
            { name: 'CUNY First', href: 'https://www.cuny.edu/about/administration/offices/cis/cunyfirst/', external: true },
            { name: 'Blackboard', href: '#', external: true },
            { name: 'DegreeWorks', href: '#', external: true },
            { name: 'Directory', href: '#', external: true },
        ],
    };

    return (
        <footer className="bg-slate-900 text-white border-t border-slate-800" role="contentinfo" aria-label="Site footer">
            <div className="max-w-[1600px] mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-6 group" aria-label="CSI Computer Science Department - Home">
                            <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                                <Image src="/cunycsiwhite.png" alt="CUNY College of Staten Island logo" width={40} height={40} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                    Department of
                                </span>
                                <span className="text-lg font-bold leading-none text-white">
                                    Computer Science
                                </span>
                            </div>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md">
                            Advancing the frontiers of computing through excellence in education, research, and innovation.
                        </p>
                        {/* Contact Info */}
                        <address className="space-y-3 not-italic">
                            <div className="flex items-start gap-3 text-sm text-slate-300">
                                <MapPin size={16} className="text-[#7abde8] mt-0.5 shrink-0" aria-hidden="true" />
                                <span>2800 Victory Blvd, Staten Island, NY 10314</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-300">
                                <Phone size={16} className="text-[#7abde8] shrink-0" aria-hidden="true" />
                                <a href="tel:+17189822800" className="hover:text-[#7abde8] transition-colors" aria-label="Call us at (718) 982-2800">
                                    (718) 982-2800
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-300">
                                <Mail size={16} className="text-[#7abde8] shrink-0" aria-hidden="true" />
                                <a href="mailto:cs@csi.cuny.edu" className="hover:text-[#7abde8] transition-colors" aria-label="Email us at cs@csi.cuny.edu">
                                    cs@csi.cuny.edu
                                </a>
                            </div>
                        </address>
                    </div>

                    {/* Programs Column */}
                    <nav aria-label="Programs navigation">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
                            Programs
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.programs.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-300 hover:text-[#7abde8] transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" aria-hidden="true" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Resources Column */}
                    <nav aria-label="Resources navigation">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-300 hover:text-[#7abde8] transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" aria-hidden="true" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Quick Links Column */}
                    <nav aria-label="Quick links">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.quickLinks.map((link) => (
                                <li key={link.name}>
                                    {link.external ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-300 hover:text-[#7abde8] transition-colors text-sm flex items-center gap-2 group"
                                            aria-label={`${link.name} (opens in new tab)`}
                                        >
                                            {link.name}
                                            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                                        </a>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-slate-300 hover:text-[#7abde8] transition-colors text-sm flex items-center gap-2 group"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <div className="text-sm text-slate-400">
                            <p>© {currentYear} College of Staten Island, CUNY. All rights reserved.</p>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4" role="list" aria-label="Social media links">
                            <a
                                href="https://www.facebook.com/computerscienceatcsi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#7abde8] flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 group"
                                aria-label="Visit our Facebook page (opens in new tab)"
                            >
                                <Facebook size={18} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                            </a>
                            <a
                                href="https://www.csi.cuny.edu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-[#7abde8] text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
                                aria-label="Visit CSI main website (opens in new tab)"
                            >
                                Visit CSI <ExternalLink size={14} aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}