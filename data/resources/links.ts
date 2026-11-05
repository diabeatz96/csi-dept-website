// Resources page links, grouped by section

import type {
  CareerLink,
  Club,
  FeaturedCareerLink,
  ResourceLink,
  TutoringLab,
} from "./types";

export const degreeLinks: ResourceLink[] = [
  {
    id: "degree-map",
    title: "CS BS Career Degree Map",
    description:
      "Semester-by-semester plan for the BS in Computer Science",
    href: "https://csi-cs-department.gitbook.io/cs-internship-handbook/college-of-staten-island-computer-science-department/college-of-staten-island-computer-science-department",
    iconName: "FileText",
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
    id: "cs-flowchart",
    title: "CS Flowchart",
    description:
      "Semester-by-semester course map and prerequisites for each CS program.",
    href: "http://www.cs.csi.cuny.edu/~flowchart/",
    iconName: "GitFork",
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

export const featuredCareerLinks: FeaturedCareerLink[] = [
  {
    id: "internship-prep-book",
    title: "Internship Prep Book",
    description: "Comprehensive guide to finding and preparing for CS internships.",
    href: "https://csi-cs-department.gitbook.io/cs-internship-handbook",
    iconName: "BookOpenCheck",
    ctaLabel: "Read the guide",
    starred: true,
  },
  {
    id: "handshake",
    title: "Handshake",
    description:
      "Internship and job listings for CSI students. Sign in with your CUNY login.",
    href: "https://joinhandshake.com/",
    image: "/logos/handshake logo.jpeg",
    ctaLabel: "Open Handshake",
  },
];

// Stock photos for now; replace with real program photos as they become available
export const careerLinks: CareerLink[] = [
  {
    id: "freshmen-start-up-guide",
    title: "Freshmen Start-up Guide",
    description:
      "Set up LinkedIn and GitHub, build a first-year resume and get involved on campus.",
    href: "https://csi-cs-department.gitbook.io/cs-internship-handbook/internship-and-research/freshmen-start-up-guide",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "internship-hiring-cycle",
    title: "Internship Hiring Cycle",
    description:
      "When internship applications open and close, and how the tech hiring process works.",
    href: "https://csi-cs-department.gitbook.io/cs-internship-handbook/internship-and-research/internship-hiring-cycle",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
  },
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
      "Free courses in technical interview prep, software engineering, and more.",
    href: "https://www.codepath.org/courses",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "break-through-tech",
    title: "Break Through Tech",
    description:
      "Paid micro-internships and an AI program connecting undergraduates to tech careers.",
    href: "https://www.breakthroughtech.org/",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "colorstack",
    title: "ColorStack",
    description:
      "National community helping Black and Latinx CS students get degreed and hired.",
    href: "https://www.colorstack.org/",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "rewriting-the-code",
    title: "Rewriting the Code",
    description:
      "Free community centered on women in tech, from university through early career.",
    href: "https://rewritingthecode.org/",
    image:
      "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "develop-for-good",
    title: "Develop for Good",
    description:
      "Free volunteer program where student teams build software for nonprofits.",
    href: "https://www.developforgood.org/",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "cuny-paid-internships",
    title: "CUNY Paid Internships",
    description:
      "Paid internship programs for CUNY students on all campuses, grouped by field.",
    href: "https://www.cuny.edu/about/administration/offices/ocip/faculty/paid-internship-opportunities/",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
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

export const clubs: Club[] = [
  {
    id: "women-in-technology",
    title: "Women In Technology Club",
    description:
      "A supportive community for women pursuing STEM degrees and tech careers, with skill-sharing, networking and team-building events.",
    href: "https://connect.csi.cuny.edu/feeds?type=club&type_id=35519&tab=about",
    iconName: "HeartHandshake",
    image: "/logos/WomenInTechLogo.png",
    meetingTime: "Tuesdays, 2:30–4:30 PM",
    location: "1N-114",
    email: "wit.club.csi@gmail.com",
  },
  {
    id: "computer-science-club",
    title: "Computer Science Club",
    description:
      "An inclusive space to explore CS projects, compete and meet like-minded students.",
    href: "https://connect.csi.cuny.edu/feeds?type=club&type_id=35483&tab=about",
    iconName: "Code2",
    image: "/logos/CSClubLogo.jpeg",
    meetingTime: "Thursdays, 2:30–4:30 PM",
    location: "1N-114",
    email: "hackaprojectcsi@gmail.com",
  },
  {
    id: "color-stack",
    title: "Color Stack Club",
    description:
      "Supporting and growing the number of Black and Latinx students in computer science.",
    href: "https://connect.csi.cuny.edu/feeds?type=club&type_id=35482&tab=about",
    iconName: "Users",
    image: "/logos/colorStackLogo.png",
    meetingTime: "Thursdays, 2:30–4:30 PM",
    location: "1N-111",
    email: "colorstackcsi@outlook.com",
  },
  {
    id: "video-game-development",
    title: "Video Game Development Club",
    description:
      "Explore game development and build skills through projects and friendly competitions.",
    href: "https://connect.csi.cuny.edu/feeds?type=club&type_id=35517&tab=about",
    iconName: "Gamepad2",
    image: "/logos/VideoGameDevClub.jpg",
    meetingTime: "Tuesdays, 2:30–4:30 PM",
    location: "1N-111",
  },
];

export const clubJoinNote =
  "To join, email the club with your full name, CUNY email address and EMPLID.";

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
