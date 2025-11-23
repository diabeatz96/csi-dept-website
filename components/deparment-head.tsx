'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Printer, Mail } from 'lucide-react';

const DepartmentHeadSection = () => {
  // Data extracted from Image 2 and enhanced for the layout
  const profile = {
    name: "Professor Shuqun Zhang",
    title: "Chairperson of the Department",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2670&auto=format&fit=crop", // Professional placeholder
    bio: "Professor Zhang leads the Department of Computer Science with a focus on academic excellence and research innovation. His leadership ensures that the curriculum remains rigorous and relevant to the evolving tech landscape.",
    quote: "Our mission is to provide a broad-based background in computer software, systems, and mathematics, preparing students not just for their first job, but for a lifelong career in technology.",
    contact: {
      address: "2800 Victory Blvd, 1N-215, Staten Island, NY 10314",
      phone: "718.982.2850",
      fax: "718.982.2856",
      email: "shuqun.zhang@csi.cuny.edu"
    }
  };

  return (
    <section className="py-20 bg-[#f0f4f8] text-slate-800 overflow-hidden">
      <div className="max-w-8xl mx-auto ">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Department Leadership
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Meet the faculty guiding the vision of Computer Science at CSI. 
            Our leadership is dedicated to fostering an environment of research, 
            innovation, and student success.
          </p>
        </motion.div>

        {/* Main Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className=" border border-t border-gray-200 flex flex-col lg:flex-row min-h-[600px]"
        >
          
          {/* LEFT COLUMN: Text Info */}
          <div className="lg:w-1/2 relative p-8 md:p-12 flex flex-col justify-between border border-b-0 border-l-0 border-t-0 lg:border-r border-dashed border-gray-300">
            
            <div>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
              >
                {profile.name}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-8"
              >
                {profile.title}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-6 text-gray-600 leading-relaxed text-lg"
              >
                <p>{profile.bio}</p>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-800 font-medium">
                  "{profile.quote}"
                </blockquote>
              </motion.div>
            </div>

            {/* Contact Info Area (Bottom of Left Col) */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 pt-8 border-t border-gray-100"
            >
              <h4 className="font-bold text-gray-900 mb-4">Contact Information</h4>
              <div className="space-y-3 text-sm text-gray-600">
                
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-600 shrink-0 mt-1" size={18} />
                  <span>{profile.contact.address}</span>
                </div>

                <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-3">
                    <Phone className="text-blue-600 shrink-0" size={18} />
                    <span>Phone: {profile.contact.phone}</span>
                    </div>

                    <div className="flex items-center gap-3">
                    <Printer className="text-blue-600 shrink-0" size={18} />
                    <span>Fax: {profile.contact.fax}</span>
                    </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="lg:w-1/2 relative bg-gray-100 overflow-hidden ">
             {/* Grayscale Filter + Image */}
            <motion.div 
                initial={{ scale: 1.1, filter: "grayscale(100%)" }}
                whileInView={{ scale: 1, filter: "grayscale(100%)" }}
                whileHover={{ filter: "grayscale(0%)" }} // Cool interactive effect: color on hover
                transition={{ duration: 0.8 }}
                className="w-full h-full relative"
            >
                {/* <img 
                  src={profile.image} 
                  alt={profile.name}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                /> */}
                
                {/* Gradient Overlay for smooth fade at bottom (optional aesthetic touch) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </motion.div>
          </div>

        </motion.div>

        {/* Decorative Sidebar Elements (Mimicking the layout lines in original image) */}
        <div className="hidden lg:block absolute left-0 top-1/2 w-8 h-[2px] bg-gray-300"></div>
        <div className="hidden lg:block absolute right-0 top-1/2 w-8 h-[2px] bg-gray-300"></div>

      </div>
    </section>
  );
};

export default DepartmentHeadSection;