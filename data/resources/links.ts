// Resources page links, grouped by section

import type { ResourceItem, ResourceLink, TutoringLab } from "./types";

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

// Add an `image` path to show a photo at the top of a card
export const careerLinks: ResourceLink[] = [
  {
    id: "cuny-tech-prep",
    title: "CUNY Tech Prep",
    description: "Year-long program building technical projects in teams.",
    href: "https://cunytechprep.org/",
  },
  {
    id: "codepath",
    title: "CodePath",
    description:
      "Free courses in technical interview prep and software engineering.",
    href: "https://www.codepath.org/courses",
  },
  {
    id: "career-development",
    title: "Career & Professional Development",
    description: "Resume reviews, mock interviews and career counseling.",
    href: "http://www.csi.cuny.edu/career/",
  },
  {
    id: "forage",
    title: "Virtual Work Experiences (Forage)",
    description: "Free, self-paced job simulations from real companies.",
    href: "https://enterprise.theforage.com/landing/CUNY%20College%20of%20Staten%20Island/W2hMDdhcqPytgs3Nk/CUNY%20CSI%20Computer%20Science",
  },
  {
    id: "nyc-tech-resources",
    title: "NYC Tech Resources (PDF)",
    description:
      "Programs and organizations for NYC tech jobs and internships.",
    href: "http://www.cs.csi.cuny.edu/content/NYC-Tech-Resources.pdf",
  },
  {
    id: "cs-scholarships",
    title: "Scholarships for CS Students (PDF)",
    description: "Scholarships open to computer science majors.",
    href: "http://www.cs.csi.cuny.edu/content/ComputerScholarships.pdf",
  },
  {
    id: "women-in-cs-scholarships",
    title: "Scholarships for Women in CS",
    description: "Funding opportunities for women studying computer science.",
    href: "https://www.computerscience.org/scholarships-women/",
  },
];

// Add `href` and `image` (logo) as they become available
export const clubs: ResourceItem[] = [
  {
    id: "acm-student-chapter",
    title: "ACM Student Chapter",
    description: "Coding nights, talks and hackathons",
  },
  {
    id: "women-in-tech",
    title: "Women in Tech",
    description: "Community and mentorship",
  },
  {
    id: "csi-connect",
    title: "CSI Connect",
    description: "Browse every CSI club and event",
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
