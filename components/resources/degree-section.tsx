import { ArrowUpRight } from 'lucide-react';
import { degreeLinks, resourceSections } from '@/data/resources';
import ExternalLink from './external-link';
import ResourceIcon from './resource-icon';
import ResourceSection from './resource-section';

export default function DegreeSection() {
  return (
    <ResourceSection section={resourceSections.degree}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4">
        {degreeLinks.map((link) => (
          <ExternalLink
            key={link.id}
            href={link.href}
            className="flex flex-col gap-3 rounded-2xl border border-slate-300 bg-white p-6 text-slate-900 transition-all duration-300 hover:border-blue-100 hover:shadow-xl"
          >
            <div className="flex items-start justify-between">
              <span className="flex rounded-xl bg-slate-50 p-3 text-slate-600">
                <ResourceIcon name={link.iconName} size={24} />
              </span>
              <ArrowUpRight aria-hidden="true" size={16} className="text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{link.title}</h3>
              <p className="mt-1 text-sm leading-snug text-slate-500">{link.description}</p>
            </div>
          </ExternalLink>
        ))}
      </div>
    </ResourceSection>
  );
}
