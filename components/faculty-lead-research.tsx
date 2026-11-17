'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { facultyResearchAreas, researchFilters } from '@/data/research';
import type { FacultyResearchArea } from '@/data/research';
import { cn } from '@/lib/utils';

const FacultyCard = ({ data }: { data: FacultyResearchArea }) => (
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

        <div className="flex flex-grow flex-col gap-2 p-5">
            <span className="text-[13px] font-bold uppercase tracking-widest text-[#0369A1]">
                {data.category}
            </span>
            <h3 className="text-[22px] font-bold leading-tight text-slate-900">{data.name}</h3>
            <p className="text-[17px] font-semibold text-slate-800">{data.area}</p>
            <p className="text-base leading-relaxed text-slate-700">{data.description}</p>

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

export default function FacultyResearch() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredFaculty =
        activeFilter === 'All'
            ? facultyResearchAreas
            : facultyResearchAreas.filter((f) => f.category === activeFilter);

    return (
        <section className="bg-white py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                    <div>
                        <h2 className="mb-1.5 text-3xl font-bold text-slate-900">Faculty Directory</h2>
                        <p className="text-lg text-slate-700">
                            Faculty research areas. Select a professor to view their profile.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter faculty by research area">
                        {researchFilters.map((filter) => (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => setActiveFilter(filter)}
                                aria-pressed={activeFilter === filter}
                                className={cn(
                                    'min-h-11 rounded-full border px-4 text-base font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#0369A1] focus-visible:ring-offset-2',
                                    activeFilter === filter
                                        ? 'border-slate-900 bg-slate-900 text-white'
                                        : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50'
                                )}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
                    {filteredFaculty.map((faculty) => (
                        <FacultyCard key={faculty.id} data={faculty} />
                    ))}
                </div>

                {filteredFaculty.length === 0 && (
                    <p className="py-16 text-center text-lg text-slate-700">No faculty found in this category.</p>
                )}
            </div>
        </section>
    );
}
