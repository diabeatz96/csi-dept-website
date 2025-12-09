'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Users,
  Award
} from 'lucide-react';
import {
  emeritusFacultyNames,
  adjunctFacultyNames,
  officeStaff,
  technicalStaff,
} from '@/data/people';

// --- Components ---

const StaffCard = ({ member, index }: { member: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
  >
    <div className="p-6 flex items-center gap-5 border-b border-slate-100 bg-slate-50/50">
      <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 shrink-0">
        <User size={32} />
      </div>
      <div>
        <h3 className="font-bold text-lg text-slate-900">{member.name}</h3>
        <p className="text-sm text-[#8AC2EB] font-medium">{member.title}</p>
      </div>
    </div>

    <div className="p-6 space-y-3 text-sm text-slate-600">
      <div className="flex items-center gap-3">
        <Mail size={16} className="text-slate-400" />
        <a href={`mailto:${member.email}`} className="hover:text-[#8AC2EB] transition-colors truncate">
          {member.email}
        </a>
      </div>
      <div className="flex items-center gap-3">
        <MapPin size={16} className="text-slate-400" />
        <span>Office: {member.office}</span>
      </div>
      <div className="flex items-center gap-3">
        <Phone size={16} className="text-slate-400" />
        <span>{member.phone}</span>
      </div>
    </div>
  </motion.div>
);

const NameListSection = ({ title, names, icon: Icon }: { title: string, names: string[], icon: any }) => (
  <div className="mb-20">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-8"
    >
      <div className="p-2 bg-blue-100 text-[#8AC2EB] rounded-lg">
        <Icon size={24} />
      </div>
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {names.map((name, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.02 }}
          whileHover={{ x: 5, backgroundColor: "#eff6ff" }} // blue-50
          className="p-3 rounded-lg border border-slate-100 bg-white text-slate-700 text-sm font-medium cursor-default hover:border-blue-100 hover:text-blue-700 transition-all"
        >
          {name}
        </motion.div>
      ))}
    </div>
  </div>
);

// --- Main Component ---

export default function DepartmentStaff() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Department Staff
          </h2>
          <p className="text-lg text-slate-600">
            The dedicated team supporting the Computer Science department's academic and operational excellence.
          </p>
        </motion.div>

        {/* Emeritus & Adjuncts Lists */}
        <div className="border-b border-slate-100 mb-20">
          <NameListSection
            title="Emeritus Faculty"
            names={emeritusFacultyNames}
            icon={Award}
          />
          <NameListSection
            title="Adjunct Faculty"
            names={adjunctFacultyNames}
            icon={Users}
          />
        </div>

        {/* Staff Cards Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="p-2 bg-blue-100 text-[#8AC2EB] rounded-lg">
              <Briefcase size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Office & Technical Staff</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Office Staff */}
            {officeStaff.map((staff, idx) => (
              <StaffCard key={staff.name} member={staff} index={idx} />
            ))}

            {/* Technical Staff */}
            {technicalStaff.map((staff, idx) => (
              <StaffCard key={staff.name} member={staff} index={idx + officeStaff.length} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}