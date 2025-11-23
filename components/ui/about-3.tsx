import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";
import { CompaniesMarquee } from "../companies-marquee";

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
    <section className="py-32">
      <div className="container mx-auto">
        <motion.div
          className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            initial: {},
            whileInView: {},
          }}
        >
          <motion.h1
            className="text-5xl font-semibold"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            transition={defaultTransition}
          >
            {title}
          </motion.h1>
          <motion.div
            className="text-muted-foreground"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            transition={defaultTransition}
          >
            {description}
          </motion.div>
        </motion.div>

        <div className="grid gap-7 lg:grid-cols-3">
          <motion.img
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOptions}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <motion.div
              className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOptions}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            >
              <motion.img
                src={breakout.src}
                alt={breakout.alt}
                className="mr-auto h-12"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
              <div>
                <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                <p className="text-muted-foreground">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto" asChild>
                <a href={breakout.buttonUrl} target="_blank">
                  {breakout.buttonText}
                </a>
              </Button>
            </motion.div>
            <motion.img
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOptions}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
            />
          </div>
        </div>

        <motion.div
          className="py-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOptions}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          <motion.p
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
          >
            {companiesTitle}
          </motion.p>
          {/* <motion.div
            className="mt-8 flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOptions}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {companies.map((company, idx) => (
              <motion.div
                className="flex items-center gap-3"
                key={company.src + idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ duration: 0.5, ease: "easeOut" as const, delay: idx * 0.1 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              >
                <img
                  src={company.src}
                  alt={company.alt}
                  className="h-6 w-auto md:h-8"
                />
              </motion.div>
            ))}
          </motion.div> */}
          <CompaniesMarquee />
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
        >
          <motion.div
            className="flex flex-col gap-4 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-semibold">{achievementsTitle}</h2>
            <p className="max-w-screen-sm text-muted-foreground">
              {achievementsDescription}
            </p>
          </motion.div>
          <motion.div
            className="mt-10 flex flex-wrap justify-between gap-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOptions}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {achievements.map((item, idx) => (
              <motion.div
                className="flex flex-col gap-4"
                key={item.label + idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ duration: 0.5, ease: "easeOut" as const, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <p>{item.label}</p>
                <motion.span
                  className="text-4xl font-semibold md:text-5xl"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOptions}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {item.value}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
        </motion.div>
      </div>
    </section>
  );
};
