// Central Data Exports
// This file provides a single import point for all data across the application

// =============================================================================
// Types
// =============================================================================
export * from "./types";

// =============================================================================
// Navigation
// =============================================================================
export { navItems, footerQuickLinks } from "./navigation";

// =============================================================================
// People
// =============================================================================
export {
  // Faculty
  faculty,
  getFacultyById,
  getFacultyByDepartment,
  getChairperson,
  // Staff
  officeStaff,
  technicalStaff,
  allStaff,
  getStaffById,
  // Emeritus
  emeritusFaculty,
  getEmeritusById,
  // Adjuncts
  adjunctFaculty,
  getAdjunctById,
  getAdjunctsByDepartment,
} from "./people";

// =============================================================================
// Courses
// =============================================================================
export {
  undergraduateCourses,
  graduateCourses,
  allCourses,
  getCourseByCode,
  getCoursesByLevel,
  getCoursesByType,
  searchCourses,
} from "./courses";

// =============================================================================
// Programs
// =============================================================================
export {
  // Undergraduate Programs
  undergraduatePrograms,
  getProgramById,
  getProgramsByDegreeType,
  // Specializations
  bscsSpecializations,
  getSpecializationById,
  // Minors
  minorPrograms,
  getMinorById,
  // Graduate Programs
  msSpecializations,
  admissionRequirements,
  degreeRequirements,
  getMsSpecializationById,
} from "./programs";

// =============================================================================
// Research
// =============================================================================
export {
  // Research Projects
  researchProjects,
  getProjectById,
  getProjectsByTag,
  getProjectsByProfessor,
  // Faculty Research Areas
  facultyResearchAreas,
  researchFilters,
  getFacultyResearchById,
  getFacultyResearchByCategory,
  // Student Research Projects
  studentResearchProjects,
  getStudentProjectById,
  getStudentProjectsByCategory,
} from "./research";

// =============================================================================
// News
// =============================================================================
export {
  newsData,
  newsYears,
  researchPartners,
  getNewsByYear,
  getNewsByCategory,
  getRecentNews,
  getAllNews,
} from "./news";

// =============================================================================
// Spotlights
// =============================================================================
export {
  studentSpotlights,
  getFeaturedSpotlight,
  getNonFeaturedSpotlights,
  getSpotlightById,
  getSpotlightsByCategory,
  getRecentSpotlights,
} from "./spotlights";
