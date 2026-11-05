// Resources page links, grouped by section

import type { CareerLink, Club, ResourceLink, TutoringLab } from "./types";

export const degreeLinks: ResourceLink[] = [
  {
    id: "degree-map",
    title: "CS BS Career Degree Map",
    description:
      "Semester-by-semester plan for the BS in Computer Science (PDF).",
    href: "https://www.csi.cuny.edu/sites/default/files/pdf/academciadvisement/PathwaysAcadPlans/ComputerScienceBS_DegreeMap.pdf",
    iconName: "FileText",
  },
  {
    id: "cs-flowchart",
    title: "CS Flowchart",
    description:
      "Semester-by-semester course map and prerequisites for each CS program.",
    href: "http://www.cs.csi.cuny.edu/~flowchart/",
    iconName: "GitFork",
  },
  {
    id: "degreeworks",
    title: "DegreeWorks",
    description:
      "Run your degree audit to see completed and remaining requirements.",
    href: "https://degreeworks.cuny.edu/",
    iconName: "ListChecks",
  },
  {
    id: "global-search",
    title: "CUNY Global Search",
    description: "Find open sections, times and instructors across CUNY.",
    href: "https://globalsearch.cuny.edu",
    iconName: "Search",
  },
  {
    id: "undergraduate-catalog",
    title: "Undergraduate Catalog",
    description: "Official program requirements and course descriptions.",
    href: "https://csi-undergraduate.catalog.cuny.edu",
    iconName: "BookMarked",
  },
];

export const academicCalendar: ResourceLink = {
  id: "academic-calendar",
  title: "CSI Academic Calendar",
  description: "Registration, add/drop, withdrawal and final exam dates.",
  href: "https://www.csi.cuny.edu/academics-and-research/academic-calendars-and-final-examination-schedule",
  iconName: "CalendarDays",
  ctaLabel: "View calendar",
};

export const tutoringLab: TutoringLab = {
  id: "cs-tutoring-lab",
  title: "CS Tutoring Lab",
  room: "1N-113",
  description:
    "Free walk-in tutoring for all CSI students. The lab has computers, a printer, breadboards, Raspberry Pis and FPGA boards. Stop by to get help or work on assignments.",
  href: "http://www.cs.csi.cuny.edu/content/tutoring.pdf",
  iconName: "FileText",
  ctaLabel: "View tutoring schedule (PDF)",
  secondaryLink: {
    label: "CSI Tutoring",
    href: "https://www.csi.cuny.edu/students/academic-assistance/tutoring",
  },
};

export const academicSupportOffice: ResourceLink = {
  id: "office-of-academic-support",
  title: "Office of Academic Support",
  description:
    "Free tutoring in math, writing, study skills and other subjects.",
  href: "https://www.csi.cuny.edu/students/academic-assistance/office-academic-support",
  iconName: "School",
  ctaLabel: "Visit site",
};

export const featuredCareerLinks: ResourceLink[] = [
  {
    id: "internship-prep-book",
    title: "Internship Prep Book",
    description: "Guide to finding and preparing for CS internships.",
    href: "https://csi-cs-department.gitbook.io/cs-internship-handbook",
    iconName: "BookOpenCheck",
    ctaLabel: "Read the guide",
  },
  {
    id: "handshake",
    title: "Handshake",
    description:
      "Internship and job listings for CSI students. Sign in with your CUNY login.",
    href: "https://joinhandshake.com/",
    iconName: "Briefcase",
    ctaLabel: "Open Handshake",
  },
];

// Stock photos for now; replace with real program photos as they become available
export const careerLinks: CareerLink[] = [
  {
    id: "cuny-tech-prep",
    title: "CUNY Tech Prep",
    description: "Year-long program building technical projects in teams.",
    href: "https://cunytechprep.org/",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "codepath",
    title: "CodePath",
    description:
      "Free courses in technical interview prep and software engineering.",
    href: "https://www.codepath.org/courses",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "career-development",
    title: "Career & Professional Development",
    description: "Resume reviews, mock interviews and career counseling.",
    href: "http://www.csi.cuny.edu/career/",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "forage",
    title: "Virtual Work Experiences (Forage)",
    description: "Free, self-paced job simulations from real companies.",
    href: "https://enterprise.theforage.com/landing/CUNY%20College%20of%20Staten%20Island/W2hMDdhcqPytgs3Nk/CUNY%20CSI%20Computer%20Science",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "nyc-tech-resources",
    title: "NYC Tech Resources (PDF)",
    description:
      "Programs and organizations for NYC tech jobs and internships.",
    href: "http://www.cs.csi.cuny.edu/content/NYC-Tech-Resources.pdf",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "cs-scholarships",
    title: "Scholarships for CS Students (PDF)",
    description: "Scholarships open to computer science majors.",
    href: "http://www.cs.csi.cuny.edu/content/ComputerScholarships.pdf",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "women-in-cs-scholarships",
    title: "Scholarships for Women in CS",
    description: "Funding opportunities for women studying computer science.",
    href: "https://www.computerscience.org/scholarships-women/",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  },
];

// Stock photos for now; replace with each club's logo. Add `href` once a club's URL is known.
export const clubs: Club[] = [
  {
    id: "acm-student-chapter",
    title: "ACM Student Chapter",
    description: "Coding nights, talks and hackathons",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "women-in-tech",
    title: "Women in Tech",
    description: "Community and mentorship",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "csi-connect",
    title: "CSI Connect",
    description: "Browse every CSI club and event",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=200&auto=format&fit=crop",
  },
];

export const campusLinks: ResourceLink[] = [
  {
    id: "counseling-center",
    title: "Counseling Center",
    description: "Mental health and counseling services.",
    href: "http://www.csi.cuny.edu/counseling/",
    iconName: "HeartHandshake",
  },
  {
    id: "accessibility-services",
    title: "Accessibility Services",
    description: "Support for students with disabilities.",
    href: "http://www.csi.cuny.edu/csa/",
    iconName: "Accessibility",
  },
  {
    id: "financial-aid",
    title: "Financial Aid",
    description: "Financial assistance and scholarships.",
    href: "http://www.csi.cuny.edu/finaid/",
    iconName: "HandCoins",
  },
  {
    id: "registrar",
    title: "Registrar",
    description: "Course registration and academic records.",
    href: "https://www.csi.cuny.edu/students/registrar",
    iconName: "FileText",
  },
  {
    id: "bursar",
    title: "Bursar / Student Accounts",
    description: "Tuition payments and financial accounts.",
    href: "http://www.csi.cuny.edu/bursar/",
    iconName: "Wallet",
  },
];
