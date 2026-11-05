import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { careerLinks, featuredCareerLinks, resourceSections } from '@/data/resources';
import ExternalLink from './external-link';
import ResourceIcon from './resource-icon';
import ResourceSection from './resource-section';

export default function CareersSection() {
  return (
    <ResourceSection section={resourceSections.careers}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
        {featuredCareerLinks.map((link) => (
          <ExternalLink
            key={link.id}
            href={link.href}
            className="col-span-full flex flex-wrap items-center justify-between gap-5 rounded-3xl bg-slate-900 px-8 py-7 text-white shadow-2xl shadow-slate-900/30"
          >
            <div className="flex flex-[1_1_360px] items-center gap-5">
              <span className="flex rounded-2xl bg-white/10 p-3.5 text-blue-300">
                <ResourceIcon name={link.iconName} size={28} />
              </span>
              <div>
                <p className="mb-1 text-[22px] font-bold">{link.title}</p>
                <p className="text-sm leading-normal text-slate-300">{link.description}</p>
              </div>
            </div>
            <span className="flex items-center gap-2 whitespace-nowrap rounded-xl bg-[#0369A1] px-6 py-3 text-[15px] font-bold shadow-lg shadow-blue-900/50">
              {link.ctaLabel}
              <ArrowUpRight aria-hidden="true" size={16} />
            </span>
          </ExternalLink>
        ))}

        {careerLinks.map((link) => (
          <ExternalLink
            key={link.id}
            href={link.href}
            className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white pb-[22px] text-slate-900 transition-all duration-300 hover:border-blue-100 hover:shadow-xl"
          >
            <div className="relative mb-[18px] h-[150px] bg-slate-100">
              <Image
                src={link.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 400px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1.5 px-[22px]">
              <div className="flex justify-between gap-3">
                <h3 className="text-[17px] font-bold">{link.title}</h3>
                <ArrowUpRight aria-hidden="true" size={16} className="flex-none text-blue-400" />
              </div>
              <p className="text-sm leading-snug text-slate-500">{link.description}</p>
            </div>
          </ExternalLink>
        ))}
      </div>
    </ResourceSection>
  );
}
