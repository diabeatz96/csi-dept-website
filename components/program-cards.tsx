'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Map,
  CheckSquare,
  ArrowRight,
  Download,
  GraduationCap,
  PlayCircle
} from 'lucide-react';
import { LinkPreview } from './ui/link-preview';
// --- Types for Reusability ---
interface ResourceLink {
  label: string;
  href: string;
  type: 'pdf' | 'link' | 'flowchart' | 'checklist' | 'video';
}

interface ProgramCardProps {
  category?: string;
  title: string;
  description: string;
  image: string;
  links: ResourceLink[];
  imagePosition?: 'left' | 'right';
}

// --- Icons Helper ---
const getIcon = (type: string) => {
  switch (type) {
    case 'pdf': return <Download size={16} />;
    case 'flowchart': return <Map size={16} />;
    case 'checklist': return <CheckSquare size={16} />;
    case 'video': return <PlayCircle size={16} />;
    default: return <FileText size={16} />;
  }
};

const ProgramCard = ({
  category = "Academic Program",
  title,
  description,
  image,
  links,
  imagePosition = 'left'
}: ProgramCardProps) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <section className="py-24 flex items-center justify-center">
      <div className="max-w-8xl mx-auto px-6 w-full">

        {/* Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-slate-50 rounded-3xl shadow-xl border border-slate-200 flex flex-col lg:flex-row items-center lg:items-stretch justify-evenly "
        >

          {/* Image Section - Position controlled by imagePosition prop */}
          <div className={`w-full lg:w-4/12 relative group z-10 p-6 lg:p-0 ${isImageLeft
            ? 'order-2 lg:order-1 lg:my-[-40px] lg:ml-[-20px] lg:mr-0'
            : 'order-2 lg:order-2 lg:my-[-40px] lg:mr-[-20px] lg:ml-0'
            }`}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-full min-h-[300px] lg:min-h-[500px] relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>

              {/* Floating Badge */}
              <div className={`absolute bottom-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2 text-blue-800 font-bold text-sm shadow-lg ${isImageLeft ? 'left-6' : 'right-6'
                }`}>
                <GraduationCap size={18} />
                <span>Accredited Program</span>
              </div>
            </motion.div>
          </div>

          {/* Content Area - Position controlled by imagePosition prop */}
          <div className={`w-full lg:w-7/12 p-8 lg:p-16 flex flex-col justify-center ${isImageLeft
            ? 'order-1 lg:order-2 lg:pl-20'
            : 'order-1 lg:order-1 lg:pr-20'
            }`}>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-[#8AC2EB] font-bold tracking-widest uppercase text-xs mb-2 block bg-blue-200/50 rounded-full w-fit p-2">
                {category}
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 font-sans leading-tight">
                {title}
              </h2>

              {/* ABET Accreditation Note */}
              {title.includes("Computer Science") && title.includes("BS") && (
                <p className="text-slate-600 text-sm mb-6">
                  - accredited by the Computing Accreditation Commission of{' '}
                  <a
                    href="http://www.abet.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8AC2EB] hover:text-blue-700 underline"
                  >
                    ABET
                  </a>
                </p>
              )}

              <p className="text-slate-600 text-lg leading-relaxed mb-10 border-l-4 border-blue-200 pl-4">
                {description}
              </p>

              {/* Resource Links Grid */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Program Resources & Checklists
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {links.map((link, idx) => (
                    <motion.a
                      key={idx}
                      href={link.href}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + (idx * 0.1) }}
                      className="group flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className="bg-blue-50 text-[#8AC2EB] p-2 rounded-md group-hover:bg-[#8AC2EB] group-hover:text-white transition-colors">
                        {getIcon(link.type)}
                      </div>
                      <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700 transition-colors line-clamp-1">
                        {link.label}
                      </span>
                      <ArrowRight size={14} className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-400" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex gap-4">
                <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg">
                  View Degree Details
                </button>
                <button className="text-slate-600 font-bold px-6 py-3 hover:text-[#8AC2EB] transition-colors flex items-center gap-2">
                  Contact Advisor <ArrowRight size={18} />
                </button>
              </div>

            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

// --- Example Usage Component ---

export default function AASProgramSection() {
  // Data derived from your second image
  const programData = {
    category: "Undergraduate Degree",
    title: "Associate in Applied Science (AAS) in Computer Technology",
    description: "The Computer Science department offers a Computer Technology program that focuses on general applications programming. Students can choose either the programming sequence or the information science sequence. This program is designed to provide a seamless transition for those seeking a Bachelor's degree.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
    links: [
      { label: "Sample 2-Year Plan", href: "https://www.cs.csi.cuny.edu/content/Sample_cs_2_yr_plan.pdf", type: "pdf" as const },
      { label: "Prerequisite Flowchart", href: "https://www.cs.csi.cuny.edu/content/CSC_BS_PreRequisite_Flow_Chart_AAS.pdf", type: "flowchart" as const },
      { label: "Degree Requirements", href: "https://csi-undergraduate.catalog.cuny.edu/programs/CSCTEC-AAS", type: "link" as const },
      { label: "Checklist: Programming Seq", href: "https://www.cs.csi.cuny.edu/content/checklist_aascs.pdf", type: "checklist" as const },
      { label: "Checklist: Info Science Seq", href: "https://www.cs.csi.cuny.edu/content/checklist_aasis.pdf", type: "checklist" as const },
    ]
  };

  return (
    <div className=" min-h-screen">
      <ProgramCard {...programData} imagePosition="left" />
      {/* Example with image on right */}
      {/* <ProgramCard {...programData} imagePosition="right" /> */}
    </div>
  );
}

// --- BS Computer Science Program Section ---

export function BSComputerScienceSection() {
  const programData = {
    category: "Undergraduate Degree",
    title: "Bachelor of Science (BS) in Computer Science",
    description: "The Computer Science program offers a full four-year curriculum in computer science that prepares students for careers as computer professionals and/or for graduate study. The major provides a broad-based background in computer science and includes courses in computer software, systems, mathematics, and computer engineering. A student, under the guidance of a computer science adviser, may also select additional courses to pursue particular interests. Students interested in transferring into the program from the two-year Computer Technology program should consult the department chairperson.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop",
    links: [
      { label: "Sample 4-year Degree/Career Map", href: "https://www.cs.csi.cuny.edu/content/Sample_cs_4_yr_degree-career-map.pdf", type: "pdf" as const },
      { label: "Video", href: "https://www.youtube.com/watch?v=bWYc-P4yyBs", type: "video" as const },
      { label: "Prerequisite Flowchart", href: "https://www.cs.csi.cuny.edu/content/CSC_BS_PreRequisite_Flow_Chart_2023-24_major_catalog.pdf", type: "flowchart" as const },
      { label: "Degree Requirements", href: "https://csi-undergraduate.catalog.cuny.edu/programs/CSC-BS", type: "link" as const },
      { label: "Degree checklist (2023-2024 major catalog)", href: "https://www.cs.csi.cuny.edu/content/CSC_BS_Pathways_checklist_2023-24-major-catalog.pdf", type: "checklist" as const },
      { label: "Degree checklist (2021-2023 major catalog)", href: "https://www.cs.csi.cuny.edu/content/CSC_BS_Pathways_checklist_2021-23-major-catalog.pdf", type: "checklist" as const },
    ]
  };

  return (
    <div className=" ">
      <ProgramCard {...programData} imagePosition="right" />
    </div>
  );
}



export function BSMathematicsSection() {

  // Data for BS in CS-Math
  const mathCSData = {
    category: "Joint Degree Program",
    title: "Bachelor of Science (BS) in Computer Science-Mathematics",
    description: "This joint degree program provides a balance between Computer Science and Mathematics with an emphasis on their applied aspects and their relationship to each other. A grade of C or above in CSC 126 is required for admission. This program is ideal for students interested in algorithms, theoretical computing, and scientific modeling.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop", // Math/Abstract image
    links: [
      { label: "Degree Checklist", href: "https://www.cs.csi.cuny.edu/content/CSMTHchecklist.pdf", type: "checklist" as const },
      { label: "Degree Requirements", href: "https://csi-undergraduate.catalog.cuny.edu/programs/CSCMTH-BS", type: "link" as const },
    ]
  };

  return (
    <div className=" min-h-screen">
      {/* First Card: Math-CS (Standard Layout) */}
      <ProgramCard {...mathCSData} imagePosition="left" />

    </div>
  );
}

export function BSInformaticsSection() {
  // Data for BS in ISI
  const isiData = {
    category: "Interdisciplinary Degree",
    title: "Bachelor of Science (BS) in Information Systems and Informatics",
    description: "Offered as a collaboration between the Departments of Marketing and Computer Science, the ISI program prepares students to design, develop, and implement state-of-the-art information systems. Students gain core business and technical competencies to become systems analysts, consultants, and IT managers. The curriculum follows guidelines from AACSB, ABET, and ACM.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", // Data/Analytics image
    links: [
      { label: "Sample 4-Year Plan", href: "https://www.cs.csi.cuny.edu/content/Plan.pdf", type: "pdf" as const },
      { label: "Prerequisite Flowchart", href: "https://www.cs.csi.cuny.edu/content/ISIMap.pdf", type: "flowchart" as const },
      { label: "Degree Requirements", href: "https://csi-undergraduate.catalog.cuny.edu/programs/INFOSYS-BS", type: "link" as const },
    ]
  };

  return (
    <div className=" min-h-screen">
      <ProgramCard {...isiData} imagePosition="right" />
    </div>
  );
}