'use client';

import { Button } from "@/components/ui/button";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { motion } from "framer-motion";
import { CompaniesMarquee } from "../companies-marquee";
import Image from "next/image";

interface About3Props {
  title?: string;
  description?: React.ReactNode;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}


export const About3 = ({
title = "About Us",
  description = (
    <>The Computer Science Department offers programs that prepare students for careers as computer professionals and/or for continued study. The major
      provides a broad-based background in computer science and includes courses in computer software, computer systems, mathematics, network security, and
      computer hardware. We are committed to offering courses that stay current with changing technologies. Our BS in Computer Science degree is
      accredited by the Computing Accreditation Commission of{" "}
      <strong> <LinkPreview url="http://www.abet.org" className="underline">ABET</LinkPreview></strong>.</>
  ),
  mainImage = {
    src: "/csi1n.png",
    alt: "CSI Computer Science building and facilities",
  },
  secondaryImage = {
    src: "/csi-graduation.jpg",
    alt: "CSI Computer Science students at graduation ceremony",
  },
  breakout = {
    src: "/csi-blue-logo.png",
    alt: "CUNY College of Staten Island Logo",
    title: "ABET-Accredited Computer Science Programs",
    description:
      "Our Bachelor of Science in Computer Science is accredited by ABET, ensuring the highest standards in computer science education. Join a program that prepares you for successful careers in technology, research, and innovation.",
    buttonText: "Explore Our Programs",
    buttonUrl: "/undergraduate",
  },
  achievementsTitle = "Where Our Students Build Their Careers",
  achievementsDescription = "Our graduates are highly sought after by leading technology companies, securing positions at Fortune 500 firms, innovative startups, and cutting-edge research institutions.",
  achievements = [
    { label: "Graduates Hired", value: "95%" },
    { label: "Top Companies", value: "200+" },
    { label: "Average Starting Salary", value: "$85K+" },
  ],
}: About3Props = {}) => {
  const viewportOptions = { once: true, margin: "-100px" };
  const defaultTransition = { duration: 0.6, ease: "easeOut" as const };

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-8 md:mb-10 grid gap-4 md:gap-3 text-center grid-cols-[1fr_2fr] md:text-left"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            transition={defaultTransition}
          >
            {title}
          </motion.h2>
          <motion.div
            className="text-lg md:text-xl text-slate-1000 "
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            transition={defaultTransition}
          >
            {description}
          </motion.div>
        </motion.div>
        {/* Images & Breakout Grid */}
        <div className="grid gap-4 md:gap-7 lg:grid-cols-[1.3fr_1fr]">
          <motion.div
            className="relative w-full aspect-[3/2] rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOptions}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          >
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
          </motion.div>
          <div className="flex flex-col gap-4 md:gap-7 md:flex-row lg:flex-col">
            <motion.div
              className="flex flex-col justify-between gap-4 md:gap-6 rounded-xl bg-muted p-5 md:p-7 md:w-1/2 lg:w-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOptions}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            >
              <motion.div
                className="relative h-10 md:h-12 w-24 md:w-32"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image
                  src={breakout.src}
                  alt={breakout.alt}
                  fill
                  sizes="128px"
                  className="object-contain object-left"
                />
              </motion.div>
              <div>
                <p className="mb-2 text-base md:text-lg font-semibold">{breakout.title}</p>
                <p className="text-base md:text-lg text-slate-800">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto bg-[#0369A1] hover:bg-[#025a8a] text-white px-8 py-6 text-lg transition-colors" asChild >
                <a href={breakout.buttonUrl} target="_blank" rel="noopener noreferrer">
                  {breakout.buttonText}
                </a>
              </Button>
            </motion.div>
            <motion.div
              className="relative h-[200px] md:h-[250px] lg:h-auto lg:grow rounded-xl overflow-hidden md:w-1/2 lg:w-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOptions}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
            >
              <Image
                src={secondaryImage.src}
                alt={secondaryImage.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </div>

        <div className="py-6 md:py-10" />
        <motion.div
          className="relative overflow-hidden rounded-xl bg-muted p-6 md:p-10 lg:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
        >
          <motion.div
            className="flex flex-col gap-6 md:gap-8 md:flex-row md:items-center md:justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-start md:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-4">{achievementsTitle}</h2>
              <p className="text-base md:text-lg text-slate-900 mb-4 md:mb-6">
                {achievementsDescription}
              </p>
              <motion.div
                className="flex flex-wrap gap-4 md:gap-6 lg:gap-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportOptions}
                transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
              >
                {achievements.map((item, idx) => (
                  <motion.div
                    className="flex flex-col gap-1 md:gap-2"
                    key={item.label + idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOptions}
                    transition={{ duration: 0.5, ease: "easeOut" as const, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <p className="text-small md:text-base text-slate-700">{item.label}</p>
                    <motion.span
                      className="text-2xl sm:text-3xl md:text-4xl font-semibold"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={viewportOptions}
                      transition={{
                        duration: 0.5,
                        delay: idx * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      {item.value}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="w-full">
                <motion.p
                  className="text-center text-small md:text-base font-medium text-slate-800 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Where our graduates build their careers
                </motion.p>
                <CompaniesMarquee />
              </div>
            </div>
          </motion.div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full 
          bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)]
          bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
        </motion.div>
      </div>
    </section>
  );
};
