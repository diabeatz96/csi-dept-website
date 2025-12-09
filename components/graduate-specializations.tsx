'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  BrainCircuit,
  Cloud,
  ShieldCheck,
  Code2,
  Database,
  Network,
  Cpu,
  Lock,
  Layers,
  Sparkles
} from 'lucide-react';

// --- Data Configuration (From Image) ---

const specializations = [
  {
    id: 'ai-data',
    title: 'Artificial Intelligence & Data Analytics',
    subtitle: 'Master intelligent systems and big data patterns.',
    icon: BrainCircuit,
    color: 'blue',
    description: 'Focus on the theoretical and practical aspects of machine learning, computer vision, and advanced data processing.',
    courses: [
      { code: "CSC 706", title: "Computer Graphics", icon: Layers },
      { code: "CSC 725", title: "Computer Vision", icon: Sparkles },
      { code: "CSC 731", title: "AI & Knowledge Engineering", icon: BrainCircuit },
      { code: "CSC 732", title: "Neural Networks & Pattern Rec", icon: Network },
      { code: "CSC 733", title: "Natural Language Processing", icon: Code2 },
      { code: "CSC 735", title: "Machine Learning & Data Mining", icon: Database },
      { code: "CSC 741", title: "Digital Image Processing", icon: Layers },
      { code: "CSC 747", title: "Digital Signal Processing", icon: Cpu },
      { code: "CSC 767", title: "Neural Networks & Deep Learning", icon: BrainCircuit },
      { code: "CSC 769", title: "Graph-Based Analysis for Big Data", icon: Network },
    ]
  },
  {
    id: 'cloud-se',
    title: 'Cloud Computing & Software Engineering',
    subtitle: 'Architect scalable, robust enterprise systems.',
    icon: Cloud,
    color: 'indigo',
    description: 'Learn to design, develop, and deploy large-scale software systems on distributed cloud infrastructures.',
    courses: [
      { code: "CSC 710", title: "Software Engineering", icon: Code2 },
      { code: "CSC 714", title: "Software Systems Analysis", icon: Layers },
      { code: "CSC 715", title: "Data Base Theory", icon: Database },
      { code: "CSC 754", title: "Topics in System Simulation", icon: Cpu },
      { code: "CSC 770", title: "Parallel Computing", icon: Layers },
    ]
  },
  {
    id: 'cyber',
    title: 'Cybersecurity & Networks',
    subtitle: 'Defend infrastructure and secure communications.',
    icon: ShieldCheck,
    color: 'slate',
    description: 'Study the protocols, encryption methods, and defensive strategies needed to protect modern networks.',
    courses: [
      { code: "CSC 747", title: "Digital Signal Processing", icon: Cpu },
      { code: "CSC 756", title: "Network Security", icon: Lock },
      { code: "CSC 762", title: "Fundamentals of Wireless Comm", icon: Network },
      { code: "CSC 768", title: "Cryptography", icon: ShieldCheck },
    ]
  }
];

// --- Components ---

const CourseModule = ({ code, title, icon: Icon, delay }: { code: string, title: string, icon: any, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, delay: delay }}
    whileHover={{ y: -4, shadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
    className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm flex items-center gap-4 group cursor-default"
  >
    <div className="h-10 w-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#8AC2EB] group-hover:text-white transition-all duration-300">
      <Icon size={18} />
    </div>
    <div>
      <div className="text-xs font-bold text-[#8AC2EB] uppercase tracking-wider mb-0.5">
        {code}
      </div>
      <div className="text-sm font-semibold text-slate-800 leading-tight">
        {title}
      </div>
    </div>
  </motion.div>
);

const SpecializationCard = ({ data, index }: { data: typeof specializations[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-slate-50/50 rounded-3xl p-6 md:p-10 border border-slate-200"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

        {/* Left: Info Header */}
        <div className="lg:w-1/3 flex flex-col items-start">
          <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 mb-6 text-[#8AC2EB]">
            <data.icon size={32} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            {data.title}
          </h3>
          <p className="text-[#8AC2EB] font-medium text-sm mb-4">
            {data.subtitle}
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            {data.description}
          </p>
          <div className="mt-auto pt-6 border-t border-slate-200 w-full">
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest">
              Available Courses
            </p>
          </div>
        </div>

        {/* Right: Course Grid */}
        <div className="lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.courses.map((course, idx) => (
              <CourseModule
                key={course.code}
                {...course}
                delay={0.2 + (idx * 0.05)} // Staggered animation
              />
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default function GraduateSpecializations() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-start max-w-7xl mx-auto mb-10">
          <div className='h-1 w-[14%] self-start bg-[#8AC2EB] mb-2' />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl  text-slate-900 mb-6 font-bold"
          >
            Master Your Craft
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-2"
          >
            Our department faculty research interests are well represented in these specialization areas.
            Students are advised to select courses from these tracks to build deep expertise.
          </motion.p>

        </div>

        {/* Specialization Cards Stack */}
        <div className="flex flex-col gap-12 md:gap-20">
          {specializations.map((spec, idx) => (
            <SpecializationCard key={spec.id} data={spec} index={idx} />
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 text-sm">
            For additional CUNY Graduate Center courses in a specialization area, please consult the graduate program coordinator.
          </p>
        </motion.div>

      </div>
    </section>
  );
}