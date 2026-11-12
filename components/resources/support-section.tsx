import { ArrowUpRight } from 'lucide-react';
import { campusLinks, helpDesk, resourceSections } from '@/data/resources';
import ExternalLink from './external-link';
import ResourceIcon from './resource-icon';
import ResourceSection from './resource-section';

export default function SupportSection() {
  return (
    <ResourceSection section={resourceSections.support} className="pb-20">
      <div className="flex flex-wrap gap-2.5">
        {campusLinks.map((link) => (
          <ExternalLink
            key={link.id}
            href={link.href}
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-[#0369A1] hover:text-[#0369A1]"
          >
            <ResourceIcon name={link.iconName} size={16} className="text-[#0369A1]" />
            {link.title}
            <ArrowUpRight aria-hidden="true" size={13} className="text-slate-400" />
          </ExternalLink>
        ))}
      </div>

      <div className="mt-2 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-slate-900 p-8 text-white shadow-2xl">
        <div className="flex items-center gap-6">
          <div className="flex rounded-2xl bg-white/10 p-4 text-blue-300">
            <ResourceIcon name={helpDesk.iconName} size={32} />
          </div>
          <div>
            <h3 className="mb-1 text-xl font-bold">{helpDesk.title}</h3>
            <p className="text-sm text-slate-300">{helpDesk.description}</p>
          </div>
        </div>
        {helpDesk.href && (
          <ExternalLink
            href={helpDesk.href}
            className="whitespace-nowrap rounded-xl bg-[#0369A1] px-6 py-3 text-[15px] font-bold text-white shadow-lg shadow-blue-900/50 transition-colors hover:bg-blue-700"
          >
            {helpDesk.ctaLabel}
          </ExternalLink>
        )}
      </div>
    </ResourceSection>
  );
}
