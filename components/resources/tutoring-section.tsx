import { ArrowUpRight } from 'lucide-react';
import { academicSupportOffice, resourceSections, tutoringLab } from '@/data/resources';
import ExternalLink from './external-link';
import ResourceIcon from './resource-icon';
import ResourceSection from './resource-section';

export default function TutoringSection() {
  return (
    <ResourceSection section={resourceSections.tutoring}>
      <div className="flex flex-wrap items-stretch gap-6">
        {/* The schedule link's ::after covers the card, so clicking anywhere opens the schedule.
            @container lets the equipment list move beside the text when the card itself is wide. */}
        <div className="@container relative min-w-0 flex-[2_1_480px] rounded-3xl bg-[#0369A1] p-8 text-white transition-colors hover:bg-sky-800">
          <div className="grid h-full gap-7 @2xl:grid-cols-[minmax(0,1fr)_minmax(0,13rem)] @2xl:gap-8">
            <div className="flex flex-col justify-between gap-7">
              <div className="flex flex-col gap-2">
                <h3 className="text-5xl font-bold leading-none tracking-tight">{tutoringLab.title}</h3>
                <p className="text-[32px] font-bold leading-none tracking-tight text-sky-100">
                  {tutoringLab.room}
                </p>
                <p className="mt-3 text-pretty text-lg leading-relaxed text-white">
                  {tutoringLab.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ExternalLink
                  href={tutoringLab.href}
                  className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-base font-bold text-[#0369A1] after:absolute after:inset-0 after:rounded-3xl"
                >
                  <ResourceIcon name={tutoringLab.iconName} size={18} />
                  {tutoringLab.ctaLabel}
                </ExternalLink>
                <ExternalLink
                  href={tutoringLab.secondaryLink.href}
                  className="relative z-10 flex items-center gap-2 rounded-xl border border-white px-5 py-3 text-base font-bold text-white transition-colors hover:bg-white/10"
                >
                  {tutoringLab.secondaryLink.label}
                  <ArrowUpRight aria-hidden="true" size={18} />
                </ExternalLink>
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-sky-100">
                In the lab
              </h4>
              <ul className="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-2">
                {tutoringLab.equipment.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-base font-semibold"
                  >
                    <ResourceIcon name={item.iconName} size={20} className="flex-none" />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <ExternalLink
          href={academicSupportOffice.href}
          className="flex flex-[1_1_280px] flex-col justify-between gap-6 rounded-3xl border border-slate-300 bg-white p-8 text-slate-900 transition-all duration-300 hover:border-[#0369A1] hover:shadow-xl"
        >
          <div className="flex flex-col gap-3.5">
            <span className="flex self-start rounded-xl bg-slate-100 p-3 text-slate-700">
              <ResourceIcon name={academicSupportOffice.iconName} size={24} />
            </span>
            <h3 className="text-2xl font-bold leading-tight">{academicSupportOffice.title}</h3>
            <p className="text-pretty text-lg leading-relaxed text-slate-700">
              {academicSupportOffice.description}
            </p>
          </div>
          <span className="flex items-center gap-2 text-base font-bold text-[#0369A1]">
            {academicSupportOffice.ctaLabel}
            <ArrowUpRight aria-hidden="true" size={18} />
          </span>
        </ExternalLink>
      </div>
    </ResourceSection>
  );
}
