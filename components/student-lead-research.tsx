import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { studentResearchProjects } from '@/data/research';
import type { StudentResearchProject } from '@/data/research';

const ProjectCard = ({ project }: { project: StudentResearchProject }) => (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white sm:flex-row">
        <div className="relative h-44 w-full shrink-0 border-b border-slate-200 bg-slate-100 sm:h-auto sm:min-h-[168px] sm:w-52 sm:border-b-0 sm:border-r">
            <Image
                src={project.pdfPreview}
                alt={`Poster preview: ${project.title}`}
                fill
                sizes="(min-width: 640px) 208px, 100vw"
                className="object-cover object-top"
            />
        </div>

        <div className="flex min-w-0 flex-grow flex-col gap-1.5 px-5 py-4">
            <span className="text-[13px] font-bold uppercase tracking-widest text-[#0369A1]">
                {project.category}
            </span>
            <h3 className="text-xl font-bold leading-snug text-slate-900">{project.title}</h3>
            <p className="text-base leading-normal text-slate-700">{project.description}</p>
            <a
                href={project.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 self-start pt-1.5 text-base font-semibold text-[#0369A1] hover:text-sky-800 hover:underline focus-visible:ring-2 focus-visible:ring-[#0369A1] focus-visible:ring-offset-2 rounded"
            >
                View poster (PDF)
                <span className="sr-only"> for {project.title} (opens in new tab)</span>
                <ArrowRight size={16} aria-hidden="true" />
            </a>
        </div>
    </article>
);

export default function StudentResearch() {
    return (
        <section className="border-t border-slate-200 bg-slate-50 py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-7 max-w-3xl">
                    <h2 className="mb-1.5 text-3xl font-bold text-slate-900">Student Research</h2>
                    <p className="text-lg leading-relaxed text-slate-700">
                        Posters and presentations from undergraduate and graduate student projects. Each opens as a PDF.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    {studentResearchProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
