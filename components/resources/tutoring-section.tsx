import { ArrowUpRight } from 'lucide-react';
import { academicSupportOffice, resourceSections, tutoringLab } from '@/data/resources';
import ExternalLink from './external-link';
import ResourceIcon from './resource-icon';
import ResourceSection from './resource-section';

export default function TutoringSection() {
  return (
    <ResourceSection section={resourceSections.tutoring}>
      <div className="flex flex-wrap items-stretch gap-6">
        {/* The schedule link's ::after covers the card, so clicking anywhere opens the schedule */}
        <div className="relative flex min-w-0 flex-[2_1_480px] flex-col justify-between gap-7 rounded-3xl bg-[#0369A1] p-8 text-white transition-colors hover:bg-sky-800">
          <div className="flex flex-col gap-2">
            <h3 className="text-5xl font-bold leading-none tracking-tight">{tutoringLab.title}</h3>
            <p className="text-[32px] font-bold leading-none tracking-tight text-blue-200">
              {tutoringLab.room}
            </p>
            <p className="mt-2 max-w-[44ch] text-pretty text-[15px] leading-normal text-sky-100">
              {tutoringLab.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ExternalLink
              href={tutoringLab.href}
              className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-[15px] font-bold text-[#0369A1] after:absolute after:inset-0 after:rounded-3xl"
            >
              <ResourceIcon name={tutoringLab.iconName} size={16} />
              {tutoringLab.ctaLabel}
            </ExternalLink>
            <ExternalLink
              href={tutoringLab.secondaryLink.href}
              className="relative z-10 flex items-center gap-2 rounded-xl border border-white/50 px-5 py-3 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
            >
              {tutoringLab.secondaryLink.label}
              <ArrowUpRight aria-hidden="true" size={16} />
            </ExternalLink>
          </div>
        </div>

        <ExternalLink
          href={academicSupportOffice.href}
          className="flex flex-[1_1_280px] flex-col justify-between gap-6 rounded-3xl border border-slate-100 bg-white p-8 text-slate-900 transition-all duration-300 hover:border-blue-100 hover:shadow-xl"
        >
          <div className="flex flex-col gap-3.5">
            <span className="flex self-start rounded-xl bg-slate-50 p-3 text-slate-600">
              <ResourceIcon name={academicSupportOffice.iconName} size={24} />
            </span>
            <h3 className="text-2xl font-bold leading-tight">{academicSupportOffice.title}</h3>
            <p className="text-pretty text-[15px] leading-normal text-slate-600">
              {academicSupportOffice.description}
            </p>
          </div>
          <span className="flex items-center gap-2 text-[15px] font-bold text-[#0369A1]">
            {academicSupportOffice.ctaLabel}
            <ArrowUpRight aria-hidden="true" size={16} />
          </span>
        </ExternalLink>
      </div>
    </ResourceSection>
  );
}
