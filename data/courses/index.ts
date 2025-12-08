import type { Course } from "../types";

// Re-export undergraduate courses
export {
  level100Courses,
  level200Courses,
  level300Courses,
  level400Courses,
  isiCourses,
  undergraduateCourses,
  getCoursesByLevel,
  searchUndergraduateCourses,
} from "./undergraduate";

// Re-export graduate courses
export {
  level700Courses,
  phdCourses,
  graduateCourses,
  getGraduateCoursesByLevel,
  searchGraduateCourses,
} from "./graduate";

// Import for combined exports
import { undergraduateCourses } from "./undergraduate";
import { graduateCourses } from "./graduate";

// All courses combined (matching the original coursesDB structure)
export const allCourses: Course[] = [
  ...undergraduateCourses,
  ...graduateCourses,
];

// Universal search across all courses
export const searchAllCourses = (query: string): Course[] => {
  const lowerQuery = query.toLowerCase();
  return allCourses.filter(
    (c) =>
      c.code.toLowerCase().includes(lowerQuery) ||
      c.title.toLowerCase().includes(lowerQuery)
  );
};

// Filter by type
export const getCoursesByType = (type: "undergraduate" | "graduate"): Course[] => {
  return allCourses.filter((c) => c.type === type);
};

// Filter by level across all courses
export const getAllCoursesByLevel = (level: string): Course[] => {
  return allCourses.filter((c) => c.level === level);
};
