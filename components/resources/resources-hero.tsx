import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { resourcesIntro, resourceSections } from '@/data/resources';
import ResourceIcon from './resource-icon';

export default function ResourcesHero() {
  return (
    <section className="bg-slate-50 pb-14 pt-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-wrap items-stretch justify-between gap-4">
          <div className="max-w-4xl flex-[1_1_420px]">
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#0369A1]">
              {resourcesIntro.eyebrow}
            </span>
            <h2 className="mb-5 text-[clamp(36px,5vw,48px)] font-bold leading-[1.1] text-slate-900">
              {resourcesIntro.title}
            </h2>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-slate-600">
              {resourcesIntro.description}
            </p>
          </div>
          <div className="relative h-[168px] flex-[0_1_360px] self-center">
            <Image
              src="/csi-blue-logo.png"
              alt="CUNY and CSI Logos"
              fill
              sizes="360px"
              className="object-contain drop-shadow-sm"
            />
          </div>
        </div>

        <nav
          aria-label="Jump to a resource section"
          className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-3"
        >
          {Object.values(resourceSections).map(({ id, tile }, index) => (
            <Link
              key={id}
              href={`#${id}`}
              className="flex flex-col gap-3.5 rounded-2xl border border-slate-100 bg-white p-[18px] text-slate-900 transition-all duration-300 hover:border-blue-100 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-[#0369A1]">{index + 1}</span>
                <span className="flex rounded-xl bg-slate-50 p-2.5 text-slate-600">
                  <ResourceIcon name={tile.iconName} size={22} />
                </span>
                <ArrowDown aria-hidden="true" size={16} className="text-slate-400" />
              </div>
              <div>
                <p className="font-bold">{tile.label}</p>
                <p className="mt-1 text-[13px] leading-snug text-slate-500">{tile.subtitle}</p>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
