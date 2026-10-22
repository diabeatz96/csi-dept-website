'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// --- Program Highlights ---
const programHighlights = [
  {
    title: "Bachelor of Science",
    subtitle: "in Computer Science",
    description: "ABET-accredited program with specializations in Game Development, Security, HPC, and Data Science.",
    href: "/undergraduate#bs-computer-science",
    badge: "Undergraduate",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop",
    color: "from-blue-600 to-cyan-500",
    stats: { duration: "4 Years", credits: "120 Credits" },
    highlights: ["ABET Accredited", "4 Specializations", "Internship Ready"],
  },
  {
    title: "Master of Science",
    subtitle: "in Computer Science",
    description: "Advanced study with tracks in AI, Cloud Computing, and Cybersecurity.",
    href: "/graduate#ms-computer-science",
    badge: "Graduate",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop",
    color: "from-purple-600 to-pink-500",
    stats: { duration: "2 Years", credits: "30 Credits" },
    highlights: ["3 Specializations", "Research Focus", "Industry Partners"],
  },
  {
    title: "Ph.D. Program",
    subtitle: "via CUNY Graduate Center",
    description: "Research-focused doctoral program in partnership with the CUNY Graduate Center.",
    href: "/graduate#phd-computer-science",
    badge: "Doctoral",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop",
    color: "from-amber-500 to-orange-600",
    stats: { duration: "4-5 Years", credits: "Research" },
    highlights: ["CUNY Partnership", "Faculty Mentorship", "Publication Support"],
  },
];

// --- Featured Programs Section ---
const FeaturedPrograms = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-4 md:px-6 mb-6 md:mb-8">
      {/* Bold Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-4 md:mb-6"
      >
        <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-[#0369A1]/10 rounded-full">
          <Image
            src="/csi-blue-logo.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-auto object-contain"
            aria-hidden="true"
          />
          <span className="text-small font-bold uppercase tracking-widest text-[#0369A1]">
            Academic Programs
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5F6368] mb-4">
          Launch Your Career in <span className="text-[#0369A1]">Technology</span>
        </h2>
        <p className="text-slate-900 text-large md:text-xl max-w-3xl mx-auto leading-relaxed">
          From foundational undergraduate courses to advanced doctoral research, our programs prepare you for success in the ever-evolving tech industry.
        </p>
      </motion.div>

      {/* Programs Grid - Large Prominent Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {programHighlights.map((program, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
          >
            <Link href={program.href} className="block group h-full">
              <div className="relative bg-white rounded-3xl border border-slate-200 overflow-hidden h-full hover:shadow-2xl hover:border-transparent transition-all duration-500 hover:-translate-y-2">
                {/* Image Header with Gradient Overlay */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-linear-to-br ${program.color} opacity-80 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                  {/* Badge on Image */}
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-slate-900 text-sm font-bold shadow-lg">
                      <GraduationCap size={14} aria-hidden="true" />
                      {program.badge}
                    </div>
                  </div>

                  {/* Stats on Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <div className="px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-lg text-white text-sm font-semibold">
                      <Clock size={12} className="inline mr-1.5" aria-hidden="true" />
                      {program.stats.duration}
                    </div>
                    <div className="px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-lg text-white text-sm font-semibold">
                      <BookOpen size={12} className="inline mr-1.5" aria-hidden="true" />
                      {program.stats.credits}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                  {/* Title */}
                  <h3 className="text-2xl md:text-2xl font-bold text-[#5F6368] mb-1 group-hover:text-[#0369A1] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-base text-slate-500 mb-4 font-medium">{program.subtitle}</p>

                  {/* Description */}
                  <p className="text-base text-slate-900 mb-5 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Highlight Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full group-hover:bg-[#0369A1]/10 group-hover:text-[#0369A1] transition-colors"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-[#0369A1] font-bold text-small group-hover:text-[#025a8a] transition-colors">
                      Explore Program
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#0369A1]/10 flex items-center justify-center group-hover:bg-[#0369A1] transition-colors">
                      <ArrowRight size={18} className="text-[#0369A1] group-hover:text-white transition-colors" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* View All Programs Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-4 md:mt-6"
      >
        <Link
          href="/courses"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#5F6368] hover:bg-black text-white font-bold rounded-full transition-all hover:shadow-xl hover:scale-105 min-h-11"
        >
          View All Programs & Courses
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </motion.div>
    </section>
  );
};

export default FeaturedPrograms;
