

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    ShoppingCart,
    Globe,
    Menu,
    X,
    ArrowRight,
    GraduationCap,
    BookOpen,
    Users,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

interface CardProps {
    title: string;
    badge: string;
    icon: React.ReactNode;
    image: string;
    delay: number;
}
const InfoCard = ({ title, badge, icon, image, delay }: CardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: delay }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group cursor-pointer flex flex-col h-full bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-shadow overflow-hidden rounded-xl"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
            </div>

            <div className="p-4 flex flex-col flex-grow relative">
                {/* Floating Icon Badge */}
                <div className="absolute -top-8 right-4 bg-white p-3 rounded-full shadow-md text-blue-600 group-hover:text-blue-800 transition-colors">
                    {icon}
                </div>

                <div className="mb-2">
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs font-bold px-2 py-1 rounded-sm">
                        {badge}
                    </span>
                </div>

                <h3 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
                    {title}
                </h3>

                <div className="mt-auto pt-4 flex justify-end">
                    <ArrowRight className="text-gray-400 group-hover:text-black transition-colors" size={20} />
                </div>
            </div>
        </motion.div>
    );
};

export const ContentSection = () => {
    const cards = [
        {
            title: "Undergraduate Programs",
            badge: "BS & AAS Degrees",
            icon: <BookOpen size={24} />,
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
            specializations: ["Game Development", "Networking and Security", "High Perfomance Computing", "Data Science"],
        },
        {
            title: "Graduate Programs",
            badge: "MS & PhD Tracks",
            icon: <GraduationCap size={24} />,
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop",
            specializations: ["Artificial Intelligence and Data Analytics", "Cloud Computing and Software Engineering", "Cybersecurity and Networks"],
        },
        {
            title: "Faculty & Staff",
            badge: "Expert Mentorship",
            icon: <Users size={24} />,
            image: "https://images.unsplash.com/photo-1544531320-98e96f667e68?q=80&w=2670&auto=format&fit=crop",
            specializations: ["Computer Science", "Computer Engineering", "Information Systems", "Cybersecurity"],
        }
    ];

    return (
        <section className="max-w-[1600px] mx-auto px-4 md:px-6 mb-20">
            <div className="flex flex-col xl:flex-row gap-12">

                {/* Left Side Text */}
                <div className="xl:w-1/3 pt-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                            Learn essential career and life skills
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            The Department of Computer Science at CSI offers a broad-based background in computer software, systems, mathematics, and network security.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Whether you are starting your journey as an undergraduate or advancing your research as a graduate student, we provide the tools to help you succeed in a changing job market.
                        </p>
                    </motion.div>
                </div>

                {/* Right Side Cards Grid */}
                <div className="xl:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <InfoCard
                            key={index}
                            title={card.title}
                            badge={card.badge}
                            icon={card.icon}
                            image={card.image}
                            delay={index * 0.15}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};