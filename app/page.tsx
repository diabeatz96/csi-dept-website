'use client';

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
import { ContentSection } from '@/components/info-card';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { About3 } from '@/components/ui/about-3';
import { LinkPreview } from '@/components/ui/link-preview';
import CSIProgramsPage from '@/components/csi-program-page';
import DepartmentHeadSection from '@/components/deparment-head';
import DepartmentNewsSection from '@/components/news';

// --- Components ---


const HeroSection = () => {
  return (
    <section className="relative w-full max-w-[1600px] mx-auto mt-6 md:px-6 mb-12 group rounded-xl">
      {/* Main Banner Background */}
      <div className="relative w-full h-[400px] md:h-[550px] bg-linear-to-r from-blue-900 to-cyan-600 overflow-hidden md:shadow-lg rounded-xl">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>

        {/* Image (Right Side) */}
        <div className="absolute right-0 top-0 h-full w-1/2 lg:w-2/3">
          {/* Using a placeholder image that resembles a tech student/professional */}
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
            alt="Students collaborating"
            className="w-full h-full object-cover object-center mask-image-gradient"
            style={{ maskImage: 'linear-gradient(to left, black 50%, transparent 100%)' }}
          />
        </div>
      </div>

      {/* Floating Content Card (Left) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-8 left-4 right-4 md:left-16 md:top-1/2 -translate-y-1/2 md:w-[440px] bg-white p-8 shadow-xl z-10 rounded-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Master tomorrow's technology today
        </h2>
        <p className="text-gray-600 mb-6 text-base">
          Join a community of innovators at CSI. From AI to Cybersecurity, build the skills needed for the modern digital landscape.
        </p>

        <div className="flex gap-4">
          <button className="bg-[#2d2f31] text-white font-bold px-6 py-3 hover:bg-black transition-colors rounded-lg">
            View Programs
          </button>
          <button className="bg-white border border-black text-black font-bold px-6 py-3 hover:bg-gray-100 transition-colors rounded-lg">
            Learn AI
          </button>
        </div>
      </motion.div>
    </section>
  );
};




// --- Main Page Layout ---
export default function CSIDepartmentPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#2d2f31]">
  
      <main>
        <HeroSection />
        <ContentSection />
      </main>

      <section className='max-w-8xl mx-auto px-6'>
        <About3
          title="About Us"
          description={
            <>
              The Computer Science Department offers programs that prepare students for careers as computer professionals and/or for continued study. The major provides a broad-based background in computer science and includes courses in computer software, computer systems, mathematics, network security, and computer hardware. We are committed to offering courses that stay current with changing technologies. Our BS in Computer Science degree is accredited by the Computing Accreditation Commission of <strong><LinkPreview url="http://www.abet.org" className="underline">the Computing Accreditation Commission of ABET</LinkPreview></strong>.
            </>
          }
          mainImage={{
            src: "https://shadcnblocks.com/images/block/placeholder-1.svg",
            alt: "placeholder",
          }}
          secondaryImage={{
            src: "https://shadcnblocks.com/images/block/placeholder-2.svg",
            alt: "placeholder",
          }}
          breakout={{
            src: "https://shadcnblocks.com/images/block/block-1.svg",
            alt: "logo",
            title: "Hundreds of blocks at Shadcnblocks.com",
            description:
              "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
            buttonText: "Discover more",
            buttonUrl: "https://shadcnblocks.com",
          }}
          companiesTitle="Our students go on to work at top companies"
          companies={[
            {
              src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-1.svg",
              alt: "Arc",
            },
            {
              src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-2.svg",
              alt: "Descript",
            },
            {
              src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-3.svg",
              alt: "Mercury",
            },
            {
              src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-4.svg",
              alt: "Ramp",
            },
            {
              src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-5.svg",
              alt: "Retool",
            },
            {
              src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-6.svg",
              alt: "Watershed",
            }
          ]}
          achievementsTitle="Our Achievements in Numbers"
          achievementsDescription="Our students consistently excel in national competitions, secure prestigious internships at Fortune 500 companies, and launch successful tech startups. Our globally recognized faculty includes award-winning researchers, published authors in top-tier journals, and industry leaders who bring cutting-edge expertise directly into the classroom. Together, we're shaping the next generation of computer science innovators."
          achievements={
            [
              { label: "Companies Supported", value: "400+" },
              { label: "Projects Finalized", value: "800+" },
              { label: "Recognized Awards", value: "10+" },
            ]
          }
        />
      </section>

      <CSIProgramsPage />

      <div className='my-12'><DepartmentHeadSection /></div>

      <DepartmentNewsSection />

      <Footer />
    </div>
  );
}