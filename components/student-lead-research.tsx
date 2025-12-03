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
  ArrowUpRight,
  FileText
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
    description: "Advanced algorithms for clarifying low-light tunnel imagery for safety systems.",
    pdfUrl: "https://www.cs.csi.cuny.edu/poster/Konstantin-Novichenko-CSC-01-Presentation-RESUBMISSION.pdf",
    pdfPreview: "/student-research/optimized-tunnel.png"
  },
  {
    id: 2,
    title: "Searchable Symmetric Encryption Scheme",
    category: "Cryptography",
    icon: Lock,
    size: "md",
    color: "slate",
    description: "Implementation of a secure index for encrypted database querying.",
    pdfUrl: "https://www.cs.csi.cuny.edu/poster/Jacob-Chen-CSC-05-Poster.pdf",
    pdfPreview: "/student-research/searchable-symm.png"
  },
  {
    id: 3,
    title: "Haunted Decoder: Binary Conversion Game",
    category: "Game Dev",
    icon: Gamepad2,
    size: "sm",
    color: "purple",
    description: "Gamifying computer science fundamentals for ed-tech.",
    pdfUrl: "https://www.cs.csi.cuny.edu/poster/Alan-Eappen-CSC-04-Poster.pdf",
    pdfPreview: "/student-research/haunted-decoder.png"
  },
  {
    id: 4,
    title: "Meducation: A Different Approach to Learning",
    category: "EdTech",
    icon: BookOpen,
    size: "md",
    color: "emerald",
    description: "Interactive medical education platform for students.",
    pdfUrl: "https://www.cs.csi.cuny.edu/poster/Jasper-Caballero-CSC-03-Presentation.pdf",
    pdfPreview: "/student-research/meducation.png"
  },
  {
    id: 5,
    title: "COVID-19 Virtual Test",
    category: "Health Tech",
    icon: Activity,
    size: "sm",
    color: "rose",
    description: "Simulation software for pandemic response tracking.",
    pdfUrl: "https://www.cs.csi.cuny.edu/poster/Victoria-Fischer-CSC-02-Poster.pdf",
    pdfPreview: "/student-research/covid-19-virtual.png"
  },
  {
    id: 6,
    title: "Finter: Social Network for Int'l Students",
    category: "Social Computing",
    icon: Globe,
    size: "lg",
    color: "indigo",
    description: "Connecting students across borders to ease cultural transition.",
    pdfUrl: "https://www.cs.csi.cuny.edu/poster/Chukwurado-Umeaka-CSC-06-Poster.pdf",
    pdfPreview: "/student-research/finter.png"
  },
  {
    id: 7,
    title: "User Density & Spatial Cloaking Algorithms",
    category: "Privacy",
    icon: Smartphone,
    size: "md",
    color: "slate",
    description: "Improving privacy protection for mobile users in location-based services.",
    pdfUrl: "https://www.cs.csi.cuny.edu/poster/poster_IEEE_Sarnoff2016.pdf",
    pdfPreview: "/student-research/user-density.png"
  },
  {
    id: 8,
    title: "Modern Network Security Practices",
    category: "Cybersecurity",
    icon: ShieldCheck,
    size: "md",
    color: "blue",
    description: "Using Rainbow Tables to solve organizational password security issues.",
    pdfUrl: "https://www.cs.csi.cuny.edu/poster/McMahon_Rainbow_Tables_Poster.pdf",
    pdfPreview: "/student-research/modern-network.png"
  },
  {
    id: 9,
    title: "QR Code Assisted OTP Authentication",
    category: "Security",
    icon: ScanLine,
    size: "sm",
    color: "slate",
    description: "A mutual authentication scheme for secure logins.",
    pdfUrl: "https://www.cs.csi.cuny.edu/poster/poster_QRCode.pdf",
    pdfPreview: "/student-research/qr-otp-auth.png"
  },
  {
    id: 10,
    title: "RFID Authentication Protocols Study",
    category: "Wireless",
    icon: Wifi,
    size: "md",
    color: "indigo",
    description: "Analysis of radio frequency identification security vulnerabilities.",
    pdfUrl: "https://www.cs.csi.cuny.edu/poster/Sidhartha_Mishra_Poster_CSI_URC17.pdf",
    pdfPreview: "/student-research/a-study-radio-frequency.png"
  },
  {
    id: 11,
    title: "Secure Deletion File System",
    category: "Systems",
    icon: FileCode,
    size: "md",
    color: "emerald",
    description: "Designing storage systems that ensure permanent data erasure.",
    pdfUrl: "https://www.cs.csi.cuny.edu/poster/poster_ahmed_filesystem.pdf",
    pdfPreview: "/student-research/desiging-a-file-system.png"
  },
  {
    id: 12,
    title: "Bypassing Wireless Authentication",
    category: "Ethical Hacking",
    icon: Cpu,
    size: "lg",
    color: "purple",
    description: "Vulnerability assessment of web-based wireless gateway systems.",
    pdfUrl: "https://www.cs.csi.cuny.edu/poster/poster_ahmed_wireless_bypassing.pdf",
    pdfPreview: "/student-research/bypassing-web-based-wireless-auth.png"
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
    blue: "text-[#7abde8] bg-white",
    slate: "text-slate-600 bg-white",
    purple: "text-purple-600 bg-white",
    emerald: "text-emerald-600 bg-white",
    rose: "text-rose-600 bg-white",
    indigo: "text-indigo-600 bg-white",
  }[project.color];

  return (
    <motion.a
      href={project.pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "group relative rounded-3xl border border-transparent transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer overflow-hidden flex flex-col",
        spanClass,
        colorStyles
      )}
    >
      {/* PDF Preview Background with Frosted Glass Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={project.pdfPreview}
          alt={project.title}
          className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
        />
        {/* Frosted Glass Overlay */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[4px] group-hover:bg-white/40 group-hover:backdrop-blur-[0px] transition-all duration-500" />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        {/* Top: Icon & PDF Badge */}
        <div className="flex justify-between items-start mb-4">
          <div className={cn("p-3 rounded-2xl shadow-lg backdrop-blur-sm bg-white/90", iconColor)}>
            <project.icon size={24} />
          </div>
        </div>

        {/* Middle: Content */}
        <div className="flex-1 flex flex-col justify-end">
          <span className="text-[10px] font-bold uppercase tracking-wider opacity-70 mb-2 block text-slate-700">
            {project.category}
          </span>
          <h3 className={cn(
            "font-bold leading-tight mb-2 text-slate-900",
            project.size === 'lg' ? "text-2xl" : "text-lg"
          )}>
            {project.title}
          </h3>
          <p className="text-sm opacity-80 leading-relaxed text-slate-700 mb-4">
            {project.description}
          </p>
        </div>

        {/* Bottom: CTA Button */}
        <div className="mt-auto pt-4 border-t border-white/30">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
              View Research
            </span>
            <div className="p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md group-hover:bg-[#7abde8] group-hover:text-white transition-all duration-300">
              <ArrowUpRight size={18} className="text-slate-700 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Hover Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" />
    </motion.a>
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