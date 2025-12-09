import Fuse from 'fuse.js';
import { faculty, allStaff, emeritusFaculty, adjunctFaculty } from '@/data/people';
import { allCourses } from '@/data/courses';
import { undergraduatePrograms, undergradSpecializations, minorPrograms, graduateSpecializations } from '@/data/programs';
import { facultyResearchAreas, studentResearchProjects } from '@/data/research';
import { newsData } from '@/data/news';
import { studentSpotlights } from '@/data/spotlights';
import { resourceCategories } from '@/data/resources';

// Search category types
export type SearchCategory =
  | 'people'
  | 'courses'
  | 'programs'
  | 'research'
  | 'news'
  | 'resources';

// Searchable item interface
export interface SearchableItem {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  category: SearchCategory;
  href: string;
  iconName: string;
  keywords?: string[];
}

// Fuse.js configuration
export const fuseOptions: Fuse.IFuseOptions<SearchableItem> = {
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'subtitle', weight: 0.25 },
    { name: 'description', weight: 0.15 },
    { name: 'keywords', weight: 0.2 },
  ],
  threshold: 0.4,
  distance: 100,
  minMatchCharLength: 2,
  includeScore: true,
  includeMatches: true,
  ignoreLocation: true,
};

// Build the complete search index
export function buildSearchIndex(): SearchableItem[] {
  const items: SearchableItem[] = [];

  // === PEOPLE: Faculty ===
  faculty.forEach(person => {
    items.push({
      id: `faculty-${person.id}`,
      title: person.name,
      subtitle: person.title,
      description: person.email,
      category: 'people',
      href: '/people#professors',
      iconName: 'User',
      keywords: [person.email, person.office, person.phone].filter(Boolean) as string[],
    });
  });

  // === PEOPLE: Staff ===
  allStaff.forEach(person => {
    items.push({
      id: `staff-${person.id}`,
      title: person.name,
      subtitle: person.title,
      description: person.email,
      category: 'people',
      href: '/people#staff-directory',
      iconName: 'Users',
      keywords: [person.email, person.office].filter(Boolean) as string[],
    });
  });

  // === PEOPLE: Emeritus ===
  emeritusFaculty.forEach(person => {
    items.push({
      id: `emeritus-${person.id}`,
      title: person.name,
      subtitle: 'Emeritus Faculty',
      category: 'people',
      href: '/people#professors',
      iconName: 'UserCheck',
      keywords: [],
    });
  });

  // === PEOPLE: Adjuncts ===
  adjunctFaculty.forEach((person, index) => {
    // Generate ID from name since adjuncts don't have id field
    const generatedId = person.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
    items.push({
      id: `adjunct-${generatedId}-${index}`,
      title: person.name,
      subtitle: 'Adjunct Faculty',
      description: person.email,
      category: 'people',
      href: '/people#professors',
      iconName: 'User',
      keywords: person.email ? [person.email] : [],
    });
  });

  // === COURSES ===
  allCourses.forEach(course => {
    items.push({
      id: `course-${course.code.replace(' ', '-').toLowerCase()}`,
      title: course.title,
      subtitle: course.code,
      description: course.description,
      category: 'courses',
      href: course.href || '/courses',
      iconName: 'BookOpen',
      keywords: [course.code, course.level, course.type],
    });
  });

  // === PROGRAMS: Undergraduate ===
  undergraduatePrograms.forEach(program => {
    items.push({
      id: `program-${program.id}`,
      title: program.title,
      subtitle: program.category,
      description: program.description,
      category: 'programs',
      href: '/undergraduate#' + program.id,
      iconName: 'GraduationCap',
      keywords: ['undergraduate', 'degree', program.category],
    });
  });

  // === PROGRAMS: BS CS Specializations ===
  undergradSpecializations.forEach(spec => {
    items.push({
      id: `spec-${spec.id}`,
      title: spec.title,
      subtitle: 'BS CS Specialization',
      description: spec.description,
      category: 'programs',
      href: '/undergraduate#specializations',
      iconName: 'Award',
      keywords: ['specialization', 'bachelor', 'concentration'],
    });
  });

  // === PROGRAMS: Minors ===
  minorPrograms.forEach(minor => {
    items.push({
      id: `minor-${minor.id}`,
      title: minor.title,
      subtitle: 'Minor Program',
      description: minor.description,
      category: 'programs',
      href: '/undergraduate#minors',
      iconName: 'FileText',
      keywords: ['minor', 'undergraduate'],
    });
  });

  // === PROGRAMS: MS Specializations ===
  graduateSpecializations.forEach(spec => {
    items.push({
      id: `ms-${spec.id}`,
      title: spec.title,
      subtitle: 'MS Specialization',
      description: spec.description,
      category: 'programs',
      href: '/graduate#' + spec.id,
      iconName: 'GraduationCap',
      keywords: ['graduate', 'master', 'specialization'],
    });
  });

  // === RESEARCH: Faculty Research Areas ===
  facultyResearchAreas.forEach(research => {
    items.push({
      id: `research-${research.id}`,
      title: research.area,
      subtitle: research.name,
      description: research.description,
      category: 'research',
      href: '/research#faculty-research',
      iconName: 'Microscope',
      keywords: [research.category, research.name],
    });
  });

  // === RESEARCH: Student Projects ===
  studentResearchProjects.forEach(project => {
    items.push({
      id: `student-research-${project.id}`,
      title: project.title,
      subtitle: `Student Research - ${project.category}`,
      description: project.description,
      category: 'research',
      href: '/research#student-research',
      iconName: 'FlaskConical',
      keywords: [project.category, 'student', 'project'],
    });
  });

  // === NEWS ===
  Object.values(newsData).flat().forEach(news => {
    items.push({
      id: `news-${news.id}`,
      title: news.title,
      subtitle: `${news.category} - ${news.date}`,
      description: news.author,
      category: 'news',
      href: news.link || '/#news',
      iconName: 'Newspaper',
      keywords: [news.category, news.author, news.date].filter(Boolean) as string[],
    });
  });

  // === SPOTLIGHTS ===
  studentSpotlights.forEach(spotlight => {
    items.push({
      id: `spotlight-${spotlight.id}`,
      title: spotlight.title,
      subtitle: `${spotlight.category} - ${spotlight.date}`,
      description: spotlight.description,
      category: 'news',
      href: '/resources#student-spotlights',
      iconName: 'Star',
      keywords: [spotlight.category, spotlight.date],
    });
  });

  // === RESOURCES: Categories ===
  resourceCategories.forEach(category => {
    items.push({
      id: `resource-category-${category.id}`,
      title: category.title,
      subtitle: 'Resource Category',
      description: category.description,
      category: 'resources',
      href: '/resources#resources-tools',
      iconName: category.iconName,
      keywords: ['resource', 'student', 'support'],
    });

    // === RESOURCES: Individual Links ===
    category.links.forEach(link => {
      items.push({
        id: `resource-${link.id}`,
        title: link.label,
        subtitle: category.title,
        description: link.description,
        category: 'resources',
        href: link.url !== '#' ? link.url : '/resources#resources-tools',
        iconName: category.iconName,
        keywords: ['resource', category.title.toLowerCase()],
      });
    });
  });

  return items;
}

// Category display configuration
export const categoryConfig: Record<SearchCategory, { label: string; iconName: string }> = {
  people: { label: 'People', iconName: 'Users' },
  courses: { label: 'Courses', iconName: 'BookOpen' },
  programs: { label: 'Programs', iconName: 'GraduationCap' },
  research: { label: 'Research', iconName: 'Microscope' },
  news: { label: 'News & Spotlights', iconName: 'Newspaper' },
  resources: { label: 'Resources', iconName: 'Briefcase' },
};
