// Programs data exports

// Undergraduate programs
export {
  undergraduatePrograms,
  getProgramById,
  getAbetAccreditedPrograms,
  type UndergraduateProgram,
  type ResourceLink,
} from "./undergraduate";

// Undergraduate specializations (BS CS tracks)
export {
  undergradSpecializations,
  specializationsFlyerUrl,
  type UndergradSpecialization,
  type SpecializationSequence,
  type CourseStep,
  type ElectiveOption,
} from "./specializations";

// Minor programs
export {
  minorPrograms,
  getMinorById,
  type MinorProgram,
} from "./minors";

// Graduate programs
export {
  graduateSpecializations,
  msProgramData,
  getSpecializationById,
  getSpecializationCourses,
  type GraduateSpecialization,
  type GraduateSpecializationCourse,
  type MSRequirement,
  type CoreCourse,
} from "./graduate";
