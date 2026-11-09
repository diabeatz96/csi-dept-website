// Resources page intro and section headings

import type {
  ResourceSection,
  ResourceSectionId,
  ResourcesIntro,
} from "./types";

export const resourcesIntro: ResourcesIntro = {
  eyebrow: "Student Portal",
  title: "Resources & Tools",
  description:
    "Get advised, plan your degree, find tutoring and lab access, and land an internship. Pick a task to jump to it.",
};

// Listed in page order, which is also the order of the quick-link tiles
export const resourceSections: Record<ResourceSectionId, ResourceSection> = {
  advising: {
    id: "advising",
    eyebrow: "1 · Get Advised",
    title: "Advising & Registration",
    description: "Meet with an advisor before you register each semester.",
    tile: {
      label: "Get advised",
      subtitle: "Meet your advisor",
      iconName: "GraduationCap",
    },
  },
  degree: {
    id: "degree",
    eyebrow: "2 · Plan My Degree",
    title: "Degree Map & Requirements",
    description:
      "Track what you've completed and what's left, then find open sections.",
    tile: {
      label: "Plan my degree",
      subtitle: "Flowchart & DegreeWorks",
      iconName: "Map",
    },
  },
  calendar: {
    id: "calendar",
    eyebrow: "3 · Key Dates",
    title: "Semester Calendar",
    tile: {
      label: "Key dates",
      subtitle: "Academic calendar",
      iconName: "CalendarDays",
    },
  },
  tutoring: {
    id: "tutoring",
    eyebrow: "4 · Get Help With a Course",
    title: "Tutoring",
    description: "Free tutoring for CS courses and every other subject.",
    tile: {
      label: "Get tutoring",
      subtitle: "Tutoring, labs, software",
      iconName: "BookOpen",
    },
  },
  careers: {
    id: "careers",
    eyebrow: "5 · Find an Internship",
    title: "Internships & Career Programs",
    description:
      "Paid internships, job listings and programs that prepare you for tech roles.",
    tile: {
      label: "Find an internship",
      subtitle: "Handshake & programs",
      iconName: "Briefcase",
    },
  },
  community: {
    id: "community",
    eyebrow: "6 · Join a Club",
    title: "Clubs & Community",
    description: "Meet other CS students, build projects and go to hackathons.",
    tile: {
      label: "Join a club",
      subtitle: "Clubs & community",
      iconName: "Users",
    },
  },
  support: {
    id: "support",
    eyebrow: "7 · Get Support",
    title: "Campus Support",
    description:
      "Counseling, accessibility, financial aid and other campus offices.",
    tile: {
      label: "Get support",
      subtitle: "Campus offices & help desk",
      iconName: "HeartHandshake",
    },
  },
};
