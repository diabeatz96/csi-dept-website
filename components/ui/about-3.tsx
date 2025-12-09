'use client';

import { Button } from "@/components/ui/button";
import React from "react";
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

const defaultCompanies = [
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
  },
];

const defaultAchievements = [
  { label: "Companies Supported", value: "300+" },
  { label: "Projects Finalized", value: "800+" },
  { label: "Happy Customers", value: "99%" },
  { label: "Recognized Awards", value: "10+" },
];

export const About3 = ({
  title = "About Us",
  description = "Shadcnblocks is a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age.",
  mainImage = {
    src: "https://shadcnblocks.com/images/block/placeholder-1.svg",
    alt: "placeholder",
  },
  secondaryImage = {
    src: "https://shadcnblocks.com/images/block/placeholder-2.svg",
    alt: "placeholder",
  },
  breakout = {
    src: "https://shadcnblocks.com/images/block/block-1.svg",
    alt: "logo",
    title: "Hundreds of blocks at Shadcnblocks.com",
    description:
      "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
    buttonText: "Discover more",
    buttonUrl: "https://shadcnblocks.com",
  },
  companiesTitle = "Valued by clients worldwide",
  companies = defaultCompanies,
  achievementsTitle = "Our Achievements in Numbers",
  achievementsDescription = "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  const viewportOptions = { once: true, margin: "-100px" };
  const defaultTransition = { duration: 0.6, ease: "easeOut" as const };

  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-8 md:mb-14 grid gap-4 md:gap-5 text-center md:grid-cols-2 md:text-left"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            initial: {},
            whileInView: {},
          }}
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
            className="text-sm md:text-base text-muted-foreground"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            transition={defaultTransition}
          >
            {description}
          </motion.div>
        </motion.div>

        <div className="grid gap-4 md:gap-7 lg:grid-cols-3">
          <motion.div
            className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[620px] rounded-xl overflow-hidden lg:col-span-2"
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
                <p className="text-sm md:text-base text-muted-foreground">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto" asChild>
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
              <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
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
                    <p className="text-xs md:text-sm text-muted-foreground">{item.label}</p>
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
                  className="text-center text-xs md:text-sm font-medium text-muted-foreground mb-4"
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
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
        </motion.div>
      </div>
    </section>
  );
};
