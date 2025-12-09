// Resource Categories Data

import type { ResourceCategory } from "./types";

export const resourceCategories: ResourceCategory[] = [
  {
    id: "career-internships",
    title: "Career & Internships",
    iconName: "Briefcase",
    description:
      "Launch your career with internships, job listings, and professional development tools.",
    links: [
      {
        id: "scholarships-cs",
        label: "Scholarships for CS & Women in CS",
        url: "#",
        description: "Financial aid opportunities for CS students",
      },
      {
        id: "handshake",
        label: "Handshake: Internship & Job Opportunities",
        url: "#",
        description: "Platform for finding internships and jobs",
      },
      {
        id: "internship-prep",
        label: "Internship Prep Book",
        url: "#",
        description: "Guide to preparing for technical internships",
      },
      {
        id: "nyc-ttp",
        label: "NYC Tech Talent Pipeline",
        url: "#",
        description: "City-wide tech workforce initiative",
      },
      {
        id: "cuny-internship",
        label: "CUNY Internship Program",
        url: "#",
        description: "University-sponsored internship opportunities",
      },
      {
        id: "career-center",
        label: "Center for Career & Professional Development",
        url: "#",
        description: "Career counseling and job placement services",
      },
    ],
  },
  {
    id: "research-innovation",
    title: "Research & Innovation",
    iconName: "Search",
    description:
      "Engage in groundbreaking research like the REU program and collaborative projects.",
    links: [
      {
        id: "reu",
        label: "Research Experiences for Undergraduates (REU)",
        url: "#",
        description: "NSF-funded undergraduate research program",
      },
      {
        id: "hpcc",
        label: "CUNY High Performance Computing Center",
        url: "#",
        description: "Access to supercomputing resources",
      },
      {
        id: "cisdd",
        label: "CUNY Institute for Software Design (CISDD)",
        url: "#",
        description: "Software design research institute",
      },
      {
        id: "virtual-work",
        label: "Virtual Work Experiences",
        url: "#",
        description: "Remote research and work opportunities",
      },
    ],
  },
  {
    id: "cuny-2x-tech",
    title: "CUNY 2X Tech",
    iconName: "Code2",
    description:
      "A $2M initiative to double the number of tech graduates from CUNY.",
    links: [
      {
        id: "about-2x",
        label: "About CUNY 2X",
        url: "#",
        description: "Learn about the CUNY 2X Tech initiative",
      },
      {
        id: "benefits-2x",
        label: "Benefits of Joining",
        url: "#",
        description: "Advantages of participating in CUNY 2X",
      },
      {
        id: "ttp-residency",
        label: "TTP Residency",
        url: "#",
        description: "Tech Talent Pipeline residency program",
      },
      {
        id: "vwe-clue",
        label: "Virtual Work Experiences for CLUE",
        url: "#",
        description: "Remote work experiences through CLUE program",
      },
    ],
  },
  {
    id: "cuny-tech-prep",
    title: "CUNY Tech Prep",
    iconName: "Rocket",
    description:
      "A year long program to help students get hands on experience working on technical projects in teams.",
    links: [
      {
        id: "about-ctp",
        label: "About CUNY Tech Prep",
        url: "#",
        description: "Overview of the CUNY Tech Prep program",
      },
      {
        id: "apply-ctp",
        label: "How to Apply",
        url: "#",
        description: "Application process and requirements",
      },
      {
        id: "benefits-ctp",
        label: "Program Benefits",
        url: "#",
        description: "What you gain from CUNY Tech Prep",
      },
      {
        id: "projects-ctp",
        label: "Current Projects",
        url: "#",
        description: "Ongoing projects and opportunities",
      },
      {
        id: "testimonials-ctp",
        label: "Student Testimonials",
        url: "#",
        description: "Success stories from past participants",
      },
    ],
  },
  {
    id: "academic-support",
    title: "Academic Support",
    iconName: "BookOpen",
    description: "Get the help you need to succeed in your coursework.",
    links: [
      {
        id: "tutoring",
        label: "CS Tutoring Schedule",
        url: "#",
        description: "Free tutoring sessions for CS courses",
      },
      {
        id: "academic-office",
        label: "Office of Academic Support",
        url: "#",
        description: "Academic advising and support services",
      },
      {
        id: "registrar",
        label: "Registrar",
        url: "#",
        description: "Course registration and academic records",
      },
      {
        id: "financial-aid",
        label: "Financial Aid",
        url: "#",
        description: "Financial assistance and scholarships",
      },
    ],
  },
  {
    id: "software-tools",
    title: "Software & Tools",
    iconName: "Laptop",
    description: "Access essential software and technical documentation.",
    links: [
      {
        id: "microsoft-imagine",
        label: "Microsoft Imagine Access",
        url: "#",
        description: "Free Microsoft software for students",
      },
      {
        id: "linux-setup",
        label: "Linux Environment Setup",
        url: "#",
        description: "Guide to setting up Linux for coursework",
      },
      {
        id: "software-guides",
        label: "Software Setup Guides",
        url: "#",
        description: "Installation guides for development tools",
      },
      {
        id: "help-desk",
        label: "Student Technology Help Desk",
        url: "#",
        description: "Technical support for students",
      },
    ],
  },
  {
    id: "campus-resources",
    title: "Campus Resources",
    iconName: "Building2",
    description:
      "Navigate campus life, from accessibility services to counseling.",
    links: [
      {
        id: "student-life",
        label: "Student Life / CLUE Program",
        url: "#",
        description: "Student activities and CLUE program info",
      },
      {
        id: "accessibility",
        label: "Accessibility Services",
        url: "#",
        description: "Support for students with disabilities",
      },
      {
        id: "counseling",
        label: "Counseling Center",
        url: "#",
        description: "Mental health and counseling services",
      },
      {
        id: "bursar",
        label: "Bursar / Student Accounts",
        url: "#",
        description: "Tuition payments and financial accounts",
      },
    ],
  },
  {
    id: "special-programs",
    title: "Special Programs",
    iconName: "Users",
    description: "Join specialized communities for accelerated growth.",
    links: [
      {
        id: "asap",
        label: "ASAP",
        url: "#",
        description: "Accelerated Study in Associate Programs",
      },
      {
        id: "cstep",
        label: "CSTEP",
        url: "#",
        description: "Collegiate Science and Technology Entry Program",
      },
      {
        id: "seek",
        label: "SEEK Program",
        url: "#",
        description: "Search for Education, Elevation and Knowledge",
      },
      {
        id: "macaulay",
        label: "Macaulay Honors College",
        url: "#",
        description: "CUNY's prestigious honors program",
      },
      {
        id: "verrazano",
        label: "Verrazano School",
        url: "#",
        description: "CSI's honors school program",
      },
    ],
  },
  {
    id: "department-info",
    title: "Department Info",
    iconName: "Info",
    description: "Key documents and videos about the CS department.",
    links: [
      {
        id: "fact-sheet",
        label: "Computer Science Fact Sheet",
        url: "#",
        description: "Overview and statistics about the CS department",
      },
      {
        id: "info-session",
        label: "Info Session (PPT/Video)",
        url: "#",
        description: "Presentation about the CS program",
      },
      {
        id: "lab-tours",
        label: "Lab Tours Video",
        url: "#",
        description: "Virtual tour of CS labs and facilities",
      },
    ],
  },
];
