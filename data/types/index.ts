// ============================================
// CSI Department Website - Type Definitions
// ============================================

// Navigation Types
// ============================================

export interface SubLink {
  title: string;
  href: string;
  description?: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  image?: string;
  description?: string;
  subLinks?: SubLink[];
}

// People Types
// ============================================

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  email: string;
  phone?: string;
  office?: string;
  image?: string;
  specializations?: string[];
  website?: string;
  bio?: string;
}

export interface StaffMember {
  id: string;
  name: string;
  title: string;
  email: string;
  phone?: string;
  office?: string;
}

export interface EmeritusFaculty {
  name: string;
}

export interface AdjunctFaculty {
  name: string;
  email?: string;
}

// Course Types
// ============================================

export type CourseLevel = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800";
export type CourseType = "undergraduate" | "graduate";

export interface Course {
  code: string;
  title: string;
  credits?: number;
  level: CourseLevel;
  type: CourseType;
  description?: string;
  prerequisites?: string[];
  catalogUrl: string;
}

// Program Types
// ============================================

export type DegreeType = "AAS" | "BS" | "MS" | "PhD" | "Minor";

export interface Specialization {
  id: string;
  name: string;
  description: string;
  courses?: string[]; // Course codes
}

export interface Program {
  id: string;
  name: string;
  degree: DegreeType;
  description: string;
  requirements?: string[];
  specializations?: Specialization[];
  careers?: string[];
  catalogUrl?: string;
}

// Research Types
// ============================================

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  url?: string;
}

export type ResearchStatus = "active" | "completed";

export interface ResearchProject {
  id: string;
  title: string;
  abstract: string;
  professors: string[]; // Faculty names or IDs
  students?: string[];
  tags: string[];
  publications?: Publication[];
  image?: string;
  startDate?: string;
  status: ResearchStatus;
  citation?: string;
}

// News Types
// ============================================

export type NewsCategory = "announcement" | "event" | "achievement" | "research";

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content?: string;
  date: string;
  category: NewsCategory;
  image?: string;
  link?: string;
  featured?: boolean;
}

// Student Spotlight Types
// ============================================

export interface StudentSpotlight {
  id: string;
  title: string;
  studentName?: string;
  description: string;
  date: string;
  category: string;
  image?: string;
  featured?: boolean;
  icon?: string; // Icon name from lucide-react
}

// Resource Types
// ============================================

export type ResourceCategory = "advisement" | "tutoring" | "career" | "technical";

export interface ResourceContact {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  contact?: ResourceContact;
  hours?: string;
  link?: string;
}

// Career Milestone Types
// ============================================

export interface CareerMilestone {
  year: string;
  title: string;
  description: string;
  highlights: string[];
}

// Company/Partner Types
// ============================================

export interface Company {
  name: string;
  logo?: string;
}
