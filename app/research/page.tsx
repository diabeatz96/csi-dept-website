import FacultyResearch from '@/components/faculty-lead-research';
import StudentResearch from '@/components/student-lead-research';

export default function ResearchPage() {
    return (
        <div className="pt-16 md:pt-18">
            <section className="border-b border-slate-200 bg-slate-50">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 pb-10 pt-12">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#0369A1]">Research</p>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-[44px] md:leading-tight">
                        Faculty and Student Research
                    </h1>
                    <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
                        From artificial intelligence to cybersecurity, explore the research conducted by CSI Computer
                        Science faculty and students.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                        <a
                            href="#faculty-research"
                            className="inline-flex min-h-11 items-center rounded-lg bg-[#0369A1] px-5 text-base font-semibold text-white hover:bg-sky-800 focus-visible:ring-2 focus-visible:ring-[#0369A1] focus-visible:ring-offset-2"
                        >
                            Faculty Directory
                        </a>
                        <a
                            href="#student-research"
                            className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-5 text-base font-semibold text-slate-900 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-[#0369A1] focus-visible:ring-offset-2"
                        >
                            Student Research
                        </a>
                    </div>
                </div>
            </section>

            <div id="faculty-research" className="scroll-mt-20">
                <FacultyResearch />
            </div>
            <div id="student-research" className="scroll-mt-20">
                <StudentResearch />
            </div>
        </div>
    );
}
