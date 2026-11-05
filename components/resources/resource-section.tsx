import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import type { ResourceSection as ResourceSectionData } from '@/data/resources';

// Shared wrapper for each numbered section: anchor id, eyebrow, heading, description
export default function ResourceSection({
  section,
  className,
  children,
}: {
  section: ResourceSectionData;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={section.id} className={cn('scroll-mt-36 py-8 lg:scroll-mt-20', className)}>
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6">
        <div>
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#0369A1]">
            {section.eyebrow}
          </span>
          <h2 className="text-[clamp(26px,3vw,32px)] font-bold text-slate-900">
            {section.title}
          </h2>
          {section.description && (
            <p className="mt-2 max-w-2xl text-pretty leading-relaxed text-slate-600">
              {section.description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
