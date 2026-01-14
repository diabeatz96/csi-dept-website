'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Printer, Mail, Award, Users, BookOpen, GraduationCap } from 'lucide-react';
import Image from 'next/image';

const DepartmentHeadSection = () => {
  const profile = {
    name: "Professor Shuqun Zhang",
    title: "Chairperson of the Department",
    image: "/shuquan-zhang.png",
    bio: "Professor Zhang leads the Department of Computer Science with a focus on academic excellence and research innovation. His leadership ensures that the curriculum remains rigorous and relevant to the evolving tech landscape.",
    quote: "Our mission is to provide a broad-based background in computer software, systems, and mathematics, preparing students not just for their first job, but for a lifelong career in technology.",
    contact: {
      address: "2800 Victory Blvd, 1N-215, Staten Island, NY 10314",
      phone: "718.982.2850",
      fax: "718.982.2856",
      email: "shuqun.zhang@csi.cuny.edu"
    }
  };

  const stats = [
    { icon: Users, value: "15+", label: "Faculty Members" },
    { icon: GraduationCap, value: "500+", label: "Students Enrolled" },
    { icon: BookOpen, value: "40+", label: "Courses Offered" },
    { icon: Award, value: "ABET", label: "Accredited" },
  ];

  return (
    <section className="py-8 md:py-12 bg-white text-slate-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Section Header - Styled like CSI logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
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
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Meet Our Chair
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#73797C] mb-3">
            Department <span className="text-[#0369A1]">Leadership</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Guiding the vision of Computer Science at CSI with dedication to research, innovation, and student success.
          </p>
        </motion.div>

        {/* Main Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">

            {/* LEFT COLUMN: Image Area */}
            <div className="lg:w-2/5 relative bg-[#F8FAFB] p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200">

              {/* Profile Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-10 mb-6"
              >
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    sizes="240px"
                    className="object-cover object-top"
                  />
                </div>
                {/* Corner accent */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-[#8AC2EB]/10 rounded-xl -z-10" aria-hidden="true" />
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-[#8AC2EB]/5 rounded-xl -z-10" aria-hidden="true" />
              </motion.div>

              {/* Name & Title */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center relative z-10"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-[#73797C] mb-1">
                  {profile.name}
                </h3>
                <p className="text-[#0369A1] font-semibold text-sm tracking-wide">
                  {profile.title}
                </p>
              </motion.div>

              {/* Contact Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-3 mt-6 relative z-10"
              >
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="w-11 h-11 rounded-xl bg-white hover:bg-[#0369A1] flex items-center justify-center text-[#0369A1] hover:text-white transition-all duration-300 shadow-sm border border-slate-200 hover:border-[#0369A1] hover:shadow-md"
                  aria-label={`Email ${profile.name}`}
                >
                  <Mail size={18} />
                </a>
                <a
                  href={`tel:${profile.contact.phone.replace(/\./g, '')}`}
                  className="w-11 h-11 rounded-xl bg-white hover:bg-[#0369A1] flex items-center justify-center text-[#0369A1] hover:text-white transition-all duration-300 shadow-sm border border-slate-200 hover:border-[#0369A1] hover:shadow-md"
                  aria-label={`Call ${profile.name}`}
                >
                  <Phone size={18} />
                </a>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Content */}
            <div className="lg:w-3/5 p-6 sm:p-8 md:p-10 flex flex-col">

              {/* Bio Section */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mb-6"
              >
                <p className="text-[#4A4A4A] leading-relaxed text-base md:text-lg mb-6">
                  {profile.bio}
                </p>

                {/* Quote - WCAG AA compliant colors */}
                <div className="relative bg-[#F0F9FF] rounded-xl p-5 border-l-4 border-[#8AC2EB]">
                  <span className="absolute -top-1 left-4 text-4xl text-[#0369A1]/30 font-serif leading-none" aria-hidden="true">"</span>
                  <blockquote className="italic text-[#374151] text-sm md:text-base relative z-10 pl-3">
                    {profile.quote}
                  </blockquote>
                </div>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6"
              >
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="text-center p-4 rounded-xl bg-[#F8FAFB] hover:bg-[#E8F7FD] border border-transparent hover:border-[#0369A1]/20 transition-all duration-300 group"
                  >
                    <stat.icon className="w-5 h-5 mx-auto mb-2 text-[#0369A1] group-hover:scale-110 transition-transform" aria-hidden="true" />
                    <div className="text-lg sm:text-xl font-bold text-[#73797C]">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-[#6B7280] uppercase tracking-wider font-medium">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Contact Details - WCAG AA compliant */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-auto pt-6 border-t border-slate-100"
              >
                <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#4B5563]">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#0369A1] shrink-0" aria-hidden="true" />
                    <span>{profile.contact.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-[#0369A1] shrink-0" aria-hidden="true" />
                    <span>{profile.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Printer size={16} className="text-[#0369A1] shrink-0" aria-hidden="true" />
                    <span>Fax: {profile.contact.fax}</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DepartmentHeadSection;
