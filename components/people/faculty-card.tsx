'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    User,
    ArrowRight,
    GraduationCap
} from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { FacultyMember } from '@/data/types';

// <wbr> marks the spot after "@" as the preferred place to wrap a long email
const EmailText = ({ email }: { email: string }) => {
    const [user, domain] = email.split('@');
    return <>{user}<wbr />@{domain}</>;
};

// Contact info - uses spans when the card is a link (to avoid nested <a> tags)
const ContactInfo = ({ member, isInsideLink }: { member: FacultyMember, isInsideLink: boolean }) => (
    // xl:text-sm keeps long emails fitting in the narrower 4-column cards
    <div className="space-y-2 sm:space-y-3 text-sm sm:text-base xl:text-sm text-slate-700 mt-auto grow">
        {isInsideLink ? (
            <div className="flex items-center gap-2 sm:gap-3 xl:gap-2 min-h-11">
                <div className="p-1.5 rounded-md bg-slate-50 text-slate-500 shrink-0">
                    <Mail size={14} />
                </div>
                <span className="min-w-0 wrap-anywhere"><EmailText email={member.email} /></span>
            </div>
        ) : (
            <a
                href={`mailto:${member.email}`}
                className="flex items-center gap-2 sm:gap-3 xl:gap-2 hover:text-[#0369A1] transition-colors group/link min-h-11"
            >
                <div className="p-1.5 rounded-md bg-slate-50 text-slate-500 group-hover/link:bg-blue-100 group-hover/link:text-[#0369A1] transition-colors shrink-0">
                    <Mail size={14} />
                </div>
                <span className="min-w-0 wrap-anywhere"><EmailText email={member.email} /></span>
            </a>
        )}

        {member.office && (
            <div className="flex items-center gap-2 sm:gap-3 xl:gap-2">
                <div className="p-1.5 rounded-md bg-slate-50 text-slate-500 shrink-0">
                    <MapPin size={14} />
                </div>
                <span>Office: {member.office}</span>
            </div>
        )}

        {member.phone && (
            <div className="flex items-center gap-2 sm:gap-3 xl:gap-2">
                <div className="p-1.5 rounded-md bg-slate-50 text-slate-500 shrink-0">
                    <Phone size={14} />
                </div>
                <span>{member.phone}</span>
            </div>
        )}
    </div>
);

const CardContent = ({ member, isInsideLink }: { member: FacultyMember, isInsideLink: boolean }) => (
    <>
        {/* Avatar Section */}
        {/* Same 4:5 box for every card so heights match; object-top keeps faces in view when cropping */}
        <div className="relative aspect-4/5 overflow-hidden bg-slate-100 border-b border-slate-100">
            {member.image ? (
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 290px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-50 group-hover:bg-blue-50 transition-colors">
                    <User size={48} className="text-slate-300 group-hover:text-blue-300 transition-colors sm:w-16 sm:h-16" />
                </div>
            )}

            {/* Hover Action - Only show if link exists */}
            {isInsideLink && (
                <div className="absolute bottom-4 right-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white text-[#0369A1] p-2 rounded-full shadow-lg">
                        <ArrowRight size={20} />
                    </div>
                </div>
            )}
        </div>

        {/* Info Section */}
        <div className="p-4 sm:p-5 md:p-6 xl:p-5 flex flex-col grow">
            <div className="mb-3 md:mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">
                    {member.name}
                    {isInsideLink && <span className="sr-only"> (opens in new tab)</span>}
                </h3>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                    {member.title.includes('Distinguished') && <GraduationCap size={12} />}
                    {member.title}
                </div>
            </div>

            {/* Contact Grid */}
            <ContactInfo member={member} isInsideLink={isInsideLink} />
        </div>
    </>
);

const cardClassName = "group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col h-full";

const FacultyCard = ({ member, index }: { member: FacultyMember, index: number }) => {
    const website = member.website?.trim();

    const motionProps = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.5, delay: index * 0.05 },
        whileHover: { y: -8 },
    };

    // External site, so a plain <a> instead of next/link (which is for internal routes)
    if (website) {
        return (
            <motion.a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                {...motionProps}
                className={cn(cardClassName, "cursor-pointer")}
            >
                <CardContent member={member} isInsideLink={true} />
            </motion.a>
        );
    }

    return (
        <motion.div {...motionProps} className={cardClassName}>
            <CardContent member={member} isInsideLink={false} />
        </motion.div>
    );
};

export default FacultyCard;
