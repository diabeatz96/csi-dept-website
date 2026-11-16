'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, BookOpen, CheckCircle2, GraduationCap, type LucideIcon } from 'lucide-react';
import { aboutContent } from '@/data/home';
import ExternalLink from '@/components/resources/external-link';
import CampusCarousel from './campus-carousel';

// Map icon names used in data/home to Lucide components
const statIcons: Record<string, LucideIcon> = { Award, BookOpen, GraduationCap };

const ctaClass =
  'flex min-h-11 flex-1 items-center justify-center rounded-lg px-5 py-3 text-center text-base font-bold text-white transition-colors';

// About Us + Why Choose Us, with the campus photo slideshow beside it
export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  const { primaryCta, secondaryCta } = aboutContent;

  return (
    <section aria-labelledby="about-heading" className="mx-auto mb-6 max-w-[1600px] px-4 md:mb-8 md:px-6">
      <div className="grid gap-6 rounded-2xl border border-slate-200 bg-linear-to-br from-slate-50 to-slate-100 p-4 md:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8">
        {/* Stretches to the height of the text column on large screens */}
        <div className="relative min-h-[300px] sm:min-h-[420px]">
          <CampusCarousel />
        </div>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          <div className="flex items-center gap-3">
            <Image
              src="/csi-blue-logo.png"
              alt=""
              width={31}
              height={32}
              className="h-8 w-auto object-contain"
            />
            <span className="text-sm font-bold uppercase tracking-widest text-slate-600">
              {aboutContent.eyebrow}
            </span>
          </div>

          <h2 id="about-heading" className="text-3xl font-bold text-[#5F6368] md:text-4xl">
            {aboutContent.title} <span className="text-[#0369A1]">{aboutContent.titleAccent}</span>
          </h2>

          <p className="text-base leading-relaxed text-slate-900 md:text-lg">{aboutContent.description}</p>

          <p className="flex items-start gap-3 rounded-xl border border-[#0369A1]/25 bg-white p-4 text-base font-medium text-slate-900">
            <Award size={22} className="mt-0.5 flex-none text-[#0369A1]" aria-hidden="true" />
            <span>
              {aboutContent.abetStatement},{' '}
              <ExternalLink
                href={aboutContent.abetHref}
                className="font-semibold text-[#0369A1] underline underline-offset-4"
              >
                abet.org
              </ExternalLink>
              .
            </span>
          </p>

          <ul className="grid gap-3 sm:grid-cols-2">
            {aboutContent.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-700" aria-hidden="true" />
                <span className="text-base text-slate-900">{item}</span>
              </li>
            ))}
          </ul>

          <ul className="grid grid-cols-3 gap-2 border-y border-slate-300 py-4">
            {aboutContent.stats.map((stat) => {
              const Icon = statIcons[stat.iconName] ?? Award;
              return (
                <li key={stat.label} className="flex flex-col items-center text-center">
                  <Icon size={20} className="mb-1 text-[#0369A1]" aria-hidden="true" />
                  <span className="text-xl font-bold text-[#5F6368] md:text-2xl">{stat.value}</span>
                  <span className="text-xs uppercase tracking-wide text-slate-700 sm:text-sm">
                    {stat.label}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={primaryCta.href} className={`${ctaClass} bg-[#0369A1] hover:bg-[#025a8a]`}>
              {primaryCta.label}
            </Link>
            <ExternalLink href={secondaryCta.href} className={`${ctaClass} bg-[#5F6368] hover:bg-black`}>
              {secondaryCta.label}
            </ExternalLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
