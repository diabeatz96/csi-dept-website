'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Users, BookOpen, ArrowRight, CheckCircle2, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// --- Key Differentiators ---
const whyChooseUs = [
  "ABET-accredited BS in Computer Science",
  "Small class sizes with personalized attention",
  "Hands-on research opportunities with faculty",
  "95% job placement rate for graduates",
  "Affordable CUNY tuition rates",
  "Located on NYC's largest campus (204 acres)",
];

// --- Why Choose Us Section ---
const WhyChooseUsSection = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-4 md:px-6 mb-4">
      <div className="bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl p-4 md:p-6 border border-slate-200">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/csi-blue-logo.png"
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-auto object-contain"
                  aria-hidden="true"
                />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
                  Why CSI
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5F6368] mb-4">
                Why Choose <span className="text-[#0369A1]">Our Department?</span>
              </h2>
              <p className="text-slate-900 text-base md:text-lg mb-6 leading-relaxed">
                Join a community of learners and innovators at one of CUNY&apos;s premier computer science programs.
              </p>

              {/* Checklist */}
              <ul className="space-y-3">
                {whyChooseUs.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-slate-900 text-sm md:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Content - Quick Actions */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
            >
              <h3 className="font-bold text-[#5F6368] text-lg mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Link
                  href="https://www.csi.cuny.edu/admissions"
                  target="_blank"
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-[#0369A1]/10 transition-colors group min-h-11"
                >
                  <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-[#0369A1]" aria-hidden="true" />
                    <span className="font-medium text-slate-900 group-hover:text-[#0369A1]">Apply for Admission</span>
                  </div>
                  <ArrowRight size={16} className="text-slate-400 group-hover:text-[#0369A1]" aria-hidden="true" />
                </Link>
                <Link
                  href="/undergraduate"
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-[#0369A1]/10 transition-colors group min-h-11"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen size={20} className="text-[#0369A1]" aria-hidden="true" />
                    <span className="font-medium text-slate-900 group-hover:text-[#0369A1]">Undergraduate Programs</span>
                  </div>
                  <ArrowRight size={16} className="text-slate-400 group-hover:text-[#0369A1]" aria-hidden="true" />
                </Link>
                <Link
                  href="/graduate"
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-[#0369A1]/10 transition-colors group min-h-11"
                >
                  <div className="flex items-center gap-3">
                    <GraduationCap size={20} className="text-[#0369A1]" aria-hidden="true" />
                    <span className="font-medium text-slate-900 group-hover:text-[#0369A1]">Graduate Programs</span>
                  </div>
                  <ArrowRight size={16} className="text-slate-400 group-hover:text-[#0369A1]" aria-hidden="true" />
                </Link>
                <Link
                  href="/people"
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-[#0369A1]/10 transition-colors group min-h-11"
                >
                  <div className="flex items-center gap-3">
                    <Users size={20} className="text-[#0369A1]" aria-hidden="true" />
                    <span className="font-medium text-slate-900 group-hover:text-[#0369A1]">Meet Our Faculty</span>
                  </div>
                  <ArrowRight size={16} className="text-slate-400 group-hover:text-[#0369A1]" aria-hidden="true" />
                </Link>
                <Link
                  href="/resources"
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-[#0369A1]/10 transition-colors group min-h-11"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen size={20} className="text-[#0369A1]" aria-hidden="true" />
                    <span className="font-medium text-slate-900 group-hover:text-[#0369A1]">Student Resources</span>
                  </div>
                  <ArrowRight size={16} className="text-slate-400 group-hover:text-[#0369A1]" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
