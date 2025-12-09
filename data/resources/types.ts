// Resource Types

export interface ResourceLink {
  id: string;
  label: string;
  url: string;
  description?: string;
}

export interface ResourceCategory {
  id: string;
  title: string;
  iconName: string; // Lucide icon name
  description: string;
  links: ResourceLink[];
}

export type ResourceCategoryId =
  | "career-internships"
  | "research-innovation"
  | "cuny-2x-tech"
  | "cuny-tech-prep"
  | "academic-support"
  | "software-tools"
  | "campus-resources"
  | "special-programs"
  | "department-info";
