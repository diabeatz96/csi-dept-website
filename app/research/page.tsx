import FacultyResearch from '@/components/faculty-lead-research';
import StudentResearch from '@/components/student-lead-research';

export default function ResearchPage() {
    return (
        <div className="pt-16 md:pt-18">
            
            <div id="faculty-research" className="scroll-mt-20">
                <FacultyResearch />
            </div>
            <div id="student-research" className="scroll-mt-20">
                <StudentResearch />
            </div>
        </div>
    );
}
