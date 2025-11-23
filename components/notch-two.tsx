"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    GraduationCap,
    Rocket,
    Award,
    X,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const items = [
    [{
        name: "DEGREES",
        color: "bg-blue-600",
        items: [
            { name: "AAS in Computer Technology" },
            { name: "BS in Computer Science" },
            { name: "Specializations", isSubItem: true },
            { name: "Graduation with Honors", isSubItem: true },
            { name: "Career Milestones", isSubItem: true },
            { name: "BS in Computer Science-Mathematics" },
            { name: "BS in Information Systems and Informatics" },
            { name: "Computer Science Minor" },
            { name: "Cyber Security Minor" },
            { name: "Data Science Minor" },
            { name: "Computational Linguistics Minor" },
        ],
    }],
    [{
        name: "BS/MS ACCELERATED",
        color: "bg-orange-500",
        items: [
            { name: "Double Counting Policy" },
        ],
    }],
    [{
        name: "ABET ACCREDITATION",
        color: "bg-slate-700",
        items: [
            { name: "Program Educational Objectives" },
            { name: "Student Outcomes" },
            { name: "BS Program Enrollment" },
        ],
    }]
];

const Icons = [
    {
        name: "DEGREES",
        icon: GraduationCap,
    },
    {
        name: "BS/MS ACCELERATED",
        icon: Rocket,
    },
    {
        name: "ABET ACCREDITATION",
        icon: Award,
    },
];

const NotchTwo = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);

    const handleIconClick = (index: any) => {
        setSelectedItem(index);
        setIsExpanded(!isExpanded);
    };

    const containerVariants = {
        collapsed: { height: 60, width: 300 },
        expanded: { height: "100%", width: 600 },
    };

    const contentVariants = {
        collapsed: { opacity: 0 },
        expanded: { opacity: 1, transition: { delay: 0.3 } },
    };

    const iconsContainerVariants = {
        collapsed: { y: 0 },
        expanded: { y: "100%", transition: { delay: 0.2 } },
    };

    const iconVariants = {
        collapsed: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.05 },
        }),
        expanded: (i: number) => ({
            opacity: 0,
            y: 20,
            transition: { delay: i * 0.05 },
        }),
    };

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4"
        >
            <div className="h-3/4 w-3/4 flex items-end justify-center">
                <motion.div
                    initial="collapsed"
                    animate={isExpanded ? "expanded" : "collapsed"}
                    variants={containerVariants}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="rounded-[30px] overflow-hidden relative"
                    style={{
                        background: "rgba(255, 255, 255, 0.85)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
                    }}
                >
                    {/* Liquid glass background effect */}
                    <div className="absolute inset-0 bg-linear-to-br from-white/50 via-white/30 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent)] pointer-events-none" />
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                key="content"
                                initial="collapsed"
                                animate="expanded"
                                exit="collapsed"
                                variants={contentVariants}
                                className="relative z-10 mt-6 px-10 pb-6 flex flex-col gap-6 max-h-[70vh] overflow-y-auto"
                            >
                                {items[selectedItem].map((section, sectionIndex) => (
                                    <div key={sectionIndex} className="flex flex-col gap-3">
                                        {/* Section Header with Colored Line */}
                                        {/* <div className="space-y-2">
                                            <div className={`h-1 ${section.color} rounded-full`} />
                                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                                                {section.name}
                                            </h3>
                                        </div> */}
                                        <div className={`h-1 ${section.color} rounded-full`} />
                                        <motion.div className="flex items-center justify-between mb-2">

                                            <h2 className="text-lg font-bold text-gray-900">{section.name}</h2>
                                            <button
                                                onClick={() => setIsExpanded(false)}
                                                className="p-2 rounded-lg text-gray-600 hover:bg-white/50 hover:text-gray-900 transition-all duration-200"
                                            >
                                                <X size={20} />
                                            </button>
                                        </motion.div>

                                        {/* Section Items */}
                                        <ul className="space-y-0">
                                            {section.items.map((item, itemIndex) => (
                                                <li key={itemIndex}>
                                                    <a
                                                        href="#"
                                                        className={`block py-3 px-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all duration-200 border-b border-gray-100 last:border-b-0 ${item.isSubItem ? "pl-6 text-gray-600" : "font-medium"
                                                            }`}
                                                    >
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.div
                        variants={iconsContainerVariants}
                        className="h-[60px] flex items-center w-fit gap-4 justify-between px-10 cursor-pointer absolute bottom-0 left-0 right-0 mx-auto z-10"
                    >
                        {Icons.map((item, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                onClick={() => handleIconClick(index)}
                                variants={iconVariants}
                                className="h-10 w-10 flex flex-col items-center justify-center text-gray-700 hover:text-gray-900 transition-all hover:scale-110 "
                                title={item.name}
                            >
                                <Tooltip>
                                    <TooltipTrigger><item.icon className="h-5 w-5 hover:cursor-pointer" /></TooltipTrigger>
                                    <TooltipContent>{item.name}</TooltipContent>
                                </Tooltip>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotchTwo;
