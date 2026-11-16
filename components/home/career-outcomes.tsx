'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { CompaniesMarquee } from '@/components/companies-marquee';
import { careerOutcomes } from '@/data/home';

// Graduate outcome stats beside the scrolling company logos
export default function CareerOutcomesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="careers-heading" className="mx-auto mb-8 max-w-[1600px] px-4 md:px-6">
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:flex-row md:items-center md:justify-between md:gap-8 md:p-10 lg:p-16"
      >
        <div className="md:w-1/2">
          <h2 id="careers-heading" className="mb-3 text-2xl font-bold text-[#5F6368] sm:text-3xl md:mb-4 md:text-4xl">
            {careerOutcomes.title}
          </h2>
          <p className="mb-4 text-base text-slate-900 md:mb-6 md:text-lg">{careerOutcomes.description}</p>
          <ul className="flex flex-wrap gap-4 md:gap-6 lg:gap-8">
            {careerOutcomes.stats.map((item) => (
              <li key={item.label} className="flex flex-col gap-1 md:gap-2">
                <span className="text-sm text-slate-700 md:text-base">{item.label}</span>
                <span className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <p className="mb-4 text-center text-sm font-medium text-slate-800 md:text-base">
            {careerOutcomes.companiesLabel}
          </p>
          <CompaniesMarquee />
        </div>
      </motion.div>
    </section>
  );
}
