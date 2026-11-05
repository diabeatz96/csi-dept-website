import Image from 'next/image';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { csAdvisor, resourceSections } from '@/data/resources';
import ExternalLink from './external-link';
import ResourceSection from './resource-section';

const chipClass =
  'flex items-center gap-2 rounded-[10px] bg-white/10 px-3 py-2 text-[13px] font-medium text-white';
const chipIconClass = 'text-blue-300';

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('');
}

export default function AdvisingSection() {
  return (
    <ResourceSection section={resourceSections.advising} className="pb-8 pt-16">
      <div className="flex flex-wrap items-center gap-7 rounded-3xl bg-slate-900 p-8 text-white shadow-2xl shadow-slate-900/35">
        {csAdvisor.image ? (
          <Image
            src={csAdvisor.image}
            alt={csAdvisor.name}
            width={136}
            height={136}
            className="size-[136px] flex-none rounded-full object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex size-[136px] flex-none items-center justify-center rounded-full bg-white/10 text-4xl font-bold text-blue-300"
          >
            {getInitials(csAdvisor.name)}
          </div>
        )}

        <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-1.5">
          <span className="text-[11px] font-bold uppercase tracking-widest text-blue-300">
            {csAdvisor.role}
          </span>
          <h3 className="text-[28px] font-bold">{csAdvisor.name}</h3>
          <p className="text-pretty text-sm leading-normal text-slate-300">{csAdvisor.description}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {csAdvisor.office && (
              <span className={chipClass}>
                <MapPin aria-hidden="true" size={15} className={chipIconClass} />
                {csAdvisor.office}
              </span>
            )}
            {csAdvisor.phone && (
              <a href={csAdvisor.phoneHref} className={chipClass}>
                <Phone aria-hidden="true" size={15} className={chipIconClass} />
                {csAdvisor.phone}
              </a>
            )}
            <a href={csAdvisor.emailHref} className={chipClass}>
              <Mail aria-hidden="true" size={15} className={chipIconClass} />
              {csAdvisor.email}
            </a>
            <ExternalLink href={csAdvisor.linkedinHref} className={chipClass}>
              <Linkedin aria-hidden="true" size={15} className={chipIconClass} />
              LinkedIn
            </ExternalLink>
          </div>
        </div>

        <a
          href={csAdvisor.emailHref}
          className="flex-none rounded-xl bg-[#0369A1] px-6 py-3 text-[15px] font-bold text-white shadow-lg shadow-blue-900/50 transition-colors hover:bg-blue-700"
        >
          {csAdvisor.ctaLabel}
        </a>
      </div>
    </ResourceSection>
  );
}
