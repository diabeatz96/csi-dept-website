'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Smartphone, 
  Gamepad2, 
  BookOpen, 
  Activity, 
  Globe, 
  Eye, 
  Lock, 
  Wifi, 
  FileCode, 
  ScanLine, 
  Cpu,
  ArrowUpRight
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utility for merging classes ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data Configuration ---
// I fixed the typos from the source image and assigned categories/sizes
const projects = [
  {
    id: 1,
    title: "Optimized Tunel Image Enhancement",
    category: "Computer Vision",
    icon: Eye,
    size: "lg", // Large card
    color: "blue",
    description: "Advanced algorithms for clarifying low-light tunnel imagery for safety systems."
  },
  {
    id: 2,
    title: "Searchable Symmetric Encryption Scheme",
    category: "Cryptography",
    icon: Lock,
    size: "md",
    color: "slate",
    description: "Implementation of a secure index for encrypted database querying."
  },
  {
    id: 3,
    title: "Haunted Decoder: Binary Conversion Game",
    category: "Game Dev",
    icon: Gamepad2,
    size: "sm",
    color: "purple",
    description: "Gamifying computer science fundamentals for ed-tech."
  },
  {
    id: 4,
    title: "Meducation: A Different Approach to Learning",
    category: "EdTech",
    icon: BookOpen,
    size: "md",
    color: "emerald",
    description: "Interactive medical education platform for students."
  },
  {
    id: 5,
    title: "COVID-19 Virtual Test",
    category: "Health Tech",
    icon: Activity,
    size: "sm",
    color: "rose",
    description: "Simulation software for pandemic response tracking."
  },
  {
    id: 6,
    title: "Finter: Social Network for Int'l Students",
    category: "Social Computing",
    icon: Globe,
    size: "lg",
    color: "indigo",
    description: "Connecting students across borders to ease cultural transition."
  },
  {
    id: 7,
    title: "User Density & Spatial Cloaking Algorithms",
    category: "Privacy",
    icon: Smartphone,
    size: "md",
    color: "slate",
    description: "Improving privacy protection for mobile users in location-based services."
  },
  {
    id: 8,
    title: "Modern Network Security Practices",
    category: "Cybersecurity",
    icon: ShieldCheck,
    size: "md",
    color: "blue",
    description: "Using Rainbow Tables to solve organizational password security issues."
  },
  {
    id: 9,
    title: "QR Code Assisted OTP Authentication",
    category: "Security",
    icon: ScanLine,
    size: "sm",
    color: "slate",
    description: "A mutual authentication scheme for secure logins."
  },
  {
    id: 10,
    title: "RFID Authentication Protocols Study",
    category: "Wireless",
    icon: Wifi,
    size: "md",
    color: "indigo",
    description: "Analysis of radio frequency identification security vulnerabilities."
  },
  {
    id: 11,
    title: "Secure Deletion File System",
    category: "Systems",
    icon: FileCode,
    size: "md",
    color: "emerald",
    description: "Designing storage systems that ensure permanent data erasure."
  },
  {
    id: 12,
    title: "Bypassing Wireless Authentication",
    category: "Ethical Hacking",
    icon: Cpu,
    size: "lg",
    color: "purple",
    description: "Vulnerability assessment of web-based wireless gateway systems."
  }
];

// --- Components ---

const BentoCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  // Dynamic Grid Spans
  const spanClass = {
    sm: "col-span-1 row-span-1",
    md: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1",
    lg: "col-span-1 md:col-span-2 row-span-2", // Tall/Wide card
  }[project.size];

  // Dynamic Color Themes
  const colorStyles = {
    blue: "bg-blue-50 hover:border-blue-300 text-blue-900",
    slate: "bg-slate-50 hover:border-slate-300 text-slate-900",
    purple: "bg-purple-50 hover:border-purple-300 text-purple-900",
    emerald: "bg-emerald-50 hover:border-emerald-300 text-emerald-900",
    rose: "bg-rose-50 hover:border-rose-300 text-rose-900",
    indigo: "bg-indigo-50 hover:border-indigo-300 text-indigo-900",
  }[project.color] || "bg-slate-50 hover:border-slate-300 text-slate-900";

  const iconColor = {
    blue: "text-blue-600 bg-white",
    slate: "text-slate-600 bg-white",
    purple: "text-purple-600 bg-white",
    emerald: "text-emerald-600 bg-white",
    rose: "text-rose-600 bg-white",
    indigo: "text-indigo-600 bg-white",
  }[project.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "group relative p-6 rounded-3xl border border-transparent transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer overflow-hidden flex flex-col justify-between",
        spanClass,
        colorStyles
      )}
    >
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity" />

      {/* Top: Icon & Arrow */}
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className={cn("p-3 rounded-2xl shadow-sm", iconColor)}>
          <project.icon size={24} />
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
          <div className="p-2 rounded-full bg-white/50 hover:bg-white transition-colors">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>

      {/* Middle: Content */}
      <div className="relative z-10">
        <span className="text-[10px] font-bold uppercase tracking-wider opacity-60 mb-2 block">
          {project.category}
        </span>
        <h3 className={cn(
          "font-bold leading-tight mb-2", 
          project.size === 'lg' ? "text-2xl" : "text-lg"
        )}>
          {project.title}
        </h3>
        <p className="text-sm opacity-70 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Decorative Background Pattern (Optional) */}
      {project.size === 'lg' && (
        <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
          <project.icon size={200} />
        </div>
      )}
    </motion.div>
  );
};

export default function StudentResearch() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
              Student Innovation
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              From cybersecurity algorithms to social computing, our undergraduate and graduate students are publishing work that solves real-world problems.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
          {projects.map((project, index) => (
            <BentoCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 text-sm mb-4">
            Interested in getting involved?
          </p>
          <button className="px-8 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-lg">
            Find a Faculty Mentor
          </button>
        </motion.div>

      </div>
    </section>
  );
}