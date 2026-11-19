'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { facultyResearchAreas } from '@/data/research';
import type { FacultyResearchArea } from '@/data/research';
import { cn } from '@/lib/utils';

const FacultyCard = ({ data }: { data: FacultyResearchArea }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    // Only descriptions that actually overflow the clamp get a Show more button
    const [isClamped, setIsClamped] = useState(false);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const descriptionId = useId();

    useEffect(() => {
        const el = descriptionRef.current;
        if (!el || isExpanded) return;
        const check = () => setIsClamped(el.scrollHeight > el.clientHeight + 1);
        check();
        // Re-check when the card width changes (e.g. resizing between breakpoints)
        const observer = new ResizeObserver(check);
        observer.observe(el);
        return () => observer.disconnect();
    }, [isExpanded]);

    return (
        <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {/* Photo sits above the text (not behind it) so text contrast never depends on the image */}
            <div className="relative h-44 w-full bg-slate-200">
                <Image
                    src={data.image}
                    alt={data.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                />
            </div>

            <div className="flex grow flex-col gap-2 p-5">
                <h3 className="text-[22px] font-bold leading-tight text-slate-900">{data.name}</h3>
                <p className="text-[17px] font-semibold text-slate-800">{data.area}</p>
                <p
                    id={descriptionId}
                    ref={descriptionRef}
                    className={cn('text-base leading-relaxed text-slate-700', !isExpanded && 'line-clamp-3')}
                >
                    {data.description}
                </p>

                {isClamped && (
                    <button
                        type="button"
                        onClick={() => setIsExpanded(!isExpanded)}
                        aria-expanded={isExpanded}
                        aria-controls={descriptionId}
                        className="inline-flex items-center gap-1 self-start rounded text-sm font-semibold text-[#0369A1] hover:text-sky-800 hover:underline focus-visible:ring-2 focus-visible:ring-[#0369A1] focus-visible:ring-offset-2"
                    >
                        {isExpanded ? 'Show less' : 'Show more'}
                        <ChevronDown
                            size={16}
                            aria-hidden="true"
                            className={cn('transition-transform', isExpanded && 'rotate-180')}
                        />
                    </button>
                )}

                {data.profile && (
                    <a
                        href={data.profile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center gap-1.5 self-start pt-2 text-base font-semibold text-[#0369A1] hover:text-sky-800 hover:underline focus-visible:ring-2 focus-visible:ring-[#0369A1] focus-visible:ring-offset-2 rounded"
                    >
                        View profile
                        <span className="sr-only"> of {data.name} (opens in new tab)</span>
                        <ArrowRight size={16} aria-hidden="true" />
                    </a>
                )}
            </div>
        </article>
    );
};

export default function FacultyResearch() {
    return (
        <section className="bg-white py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-7 text-center">
                    <h2 className="mb-1.5 text-3xl font-bold text-slate-900">Faculty Directory</h2>
                    <p className="text-lg text-slate-700">
                        Faculty research areas. Select a professor to view their profile.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {facultyResearchAreas.map((faculty) => (
                        <FacultyCard key={faculty.id} data={faculty} />
                    ))}
                </div>
            </div>
        </section>
    );
}
