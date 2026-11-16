import { ArrowUpRight } from 'lucide-react';
import { degreeLinks, resourceSections } from '@/data/resources';
import ExternalLink from './external-link';
import ResourceIcon from './resource-icon';
import ResourceSection from './resource-section';

export default function DegreeSection() {
  return (
    <ResourceSection section={resourceSections.degree}>
      {/* Flex-wrap with grow so a short last row stretches instead of leaving a gap */}
      <div className="flex flex-wrap gap-4">
        {degreeLinks.map((link) => (
          <ExternalLink
            key={link.id}
            href={link.href}
            className="flex flex-[1_1_210px] flex-col gap-3 rounded-2xl border border-slate-300 bg-white p-6 text-slate-900 transition-all duration-300 hover:border-[#0369A1] hover:shadow-xl"
          >
            <div className="flex items-start justify-between">
              <span className="flex rounded-xl bg-slate-100 p-3 text-slate-700">
                <ResourceIcon name={link.iconName} size={24} />
              </span>
              <ArrowUpRight aria-hidden="true" size={18} className="text-[#0369A1]" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{link.title}</h3>
              <p className="mt-1 text-base leading-snug text-slate-700">{link.description}</p>
            </div>
          </ExternalLink>
        ))}
      </div>
    </ResourceSection>
  );
}
