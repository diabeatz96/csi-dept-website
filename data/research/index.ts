// Research data exports

// Main research projects (hero section)
export {
  researchProjects,
  getProjectById,
  getProjectsByTag,
  getProjectsByProfessor,
  type ResearchProject,
} from "./projects";

// Faculty research areas
export {
  facultyResearchAreas,
  researchFilters,
  getFacultyResearchById,
  getFacultyResearchByCategory,
  type FacultyResearchArea,
  type ResearchCategory,
} from "./faculty-research";

// Student research projects
export {
  studentResearchProjects,
  getStudentProjectById,
  getStudentProjectsByCategory,
  getStudentProjectsBySize,
  type StudentResearchProject,
  type CardSize,
  type CardColor,
} from "./student-research";
