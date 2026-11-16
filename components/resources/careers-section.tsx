import Image from 'next/image';
import { ArrowUpRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { careerLinks, featuredCareerLinks, resourceSections } from '@/data/resources';
import ExternalLink from './external-link';
import ResourceIcon from './resource-icon';
import ResourceSection from './resource-section';

function TitleStar({ className }: { className: string }) {
  return (
    <Star
      aria-hidden="true"
      size={20}
      className={cn('inline-block align-[-2px] fill-amber-400 text-amber-400', className)}
    />
  );
}

export default function CareersSection() {
  return (
    <ResourceSection section={resourceSections.careers}>
      <div className="flex flex-col gap-4">
        {featuredCareerLinks.map((link) => (
          <ExternalLink
            key={link.id}
            href={link.href}
            className="flex flex-wrap items-center justify-between gap-5 rounded-3xl bg-slate-900 px-8 py-7 text-white shadow-2xl shadow-slate-900/30"
          >
            <div className="flex flex-[1_1_360px] items-center gap-5">
              {link.image ? (
                <Image
                  src={link.image}
                  alt=""
                  width={56}
                  height={56}
                  className="size-14 flex-none rounded-2xl object-cover"
                />
              ) : (
                <span className="flex flex-none rounded-2xl bg-white/10 p-3.5 text-blue-300">
                  <ResourceIcon name={link.iconName} size={28} />
                </span>
              )}
              <div>
                <p className="mb-1 text-[22px] font-bold">
                  {link.starred && <TitleStar className="mr-2" />}
                  {link.title}
                  {link.starred && <TitleStar className="ml-2" />}
                </p>
                <p className="text-base leading-relaxed text-slate-200">{link.description}</p>
              </div>
            </div>
            <span className="flex items-center gap-2 whitespace-nowrap rounded-xl bg-[#0369A1] px-6 py-3 text-base font-bold shadow-lg shadow-blue-900/50">
              {link.ctaLabel}
              <ArrowUpRight aria-hidden="true" size={18} />
            </span>
          </ExternalLink>
        ))}

        {/* Flex-wrap with grow: a card left alone on the last row stretches to full width,
            and the @container query switches it to an image-left layout once it's that wide */}
        <div className="flex flex-wrap gap-4">
          {careerLinks.map((link) => (
            <ExternalLink
              key={link.id}
              href={link.href}
              className="@container flex flex-[1_1_260px] overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 transition-all duration-300 hover:border-[#0369A1] hover:shadow-xl"
            >
              <div className="flex w-full flex-col @2xl:flex-row">
                <div className="relative h-[150px] flex-none bg-slate-100 @2xl:h-auto @2xl:min-h-[180px] @2xl:w-2/5">
                  <Image
                    src={link.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 500px, 100vw"
                    className={link.image.startsWith('/logos/') ? 'object-contain' : 'object-cover'}
                  />
                </div>
                <div className="flex flex-col gap-1.5 px-[22px] pb-[22px] pt-[18px] @2xl:flex-1 @2xl:justify-center @2xl:p-8">
                  <div className="flex justify-between gap-3">
                    <h3 className="text-lg font-bold @2xl:text-xl">{link.title}</h3>
                    <ArrowUpRight aria-hidden="true" size={18} className="flex-none text-[#0369A1]" />
                  </div>
                  <p className="text-base leading-snug text-slate-700">{link.description}</p>
                </div>
              </div>
            </ExternalLink>
          ))}
        </div>
      </div>
    </ResourceSection>
  );
}
