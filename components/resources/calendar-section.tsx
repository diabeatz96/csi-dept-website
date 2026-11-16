import { ArrowUpRight } from 'lucide-react';
import { academicCalendar, resourceSections } from '@/data/resources';
import ExternalLink from './external-link';
import ResourceIcon from './resource-icon';
import ResourceSection from './resource-section';

export default function CalendarSection() {
  return (
    <ResourceSection section={resourceSections.calendar}>
      <ExternalLink
        href={academicCalendar.href}
        className="flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-blue-200 bg-blue-50 px-7 py-6 text-slate-900 transition-colors hover:border-[#0369A1]"
      >
        <div className="flex flex-[1_1_320px] items-center gap-4">
          <span className="flex rounded-xl bg-[#0369A1] p-3 text-white">
            <ResourceIcon name={academicCalendar.iconName} size={24} />
          </span>
          <div>
            <p className="text-xl font-bold">{academicCalendar.title}</p>
            <p className="mt-1 text-base text-slate-700">{academicCalendar.description}</p>
          </div>
        </div>
        <span className="flex items-center gap-2 whitespace-nowrap rounded-xl bg-[#0369A1] px-5 py-3 text-base font-bold text-white">
          {academicCalendar.ctaLabel}
          <ArrowUpRight aria-hidden="true" size={18} />
        </span>
      </ExternalLink>
    </ResourceSection>
  );
}
