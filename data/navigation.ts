import type { NavItem } from "./types";

export const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop",
    description: "Welcome to the Department of Computer Science.",
    subLinks: [],
  },
  {
    id: "undergraduate",
    label: "Undergraduate",
    href: "/undergraduate",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop",
    description: "Build a strong foundation in theory and practice.",
    subLinks: [
      {
        name: "AAS in Computer Technology",
        href: "/undergraduate#aas-computer-technology",
      },
      {
        name: "BS in Computer Science",
        href: "/undergraduate#bs-computer-science",
      },
      { name: "BS in CS & Math", href: "/undergraduate#additional-degrees" },
      {
        name: "BS in ISI",
        href: "/undergraduate#bs-information-systems-and-informatics",
      },
      { name: "Academic Minors", href: "/undergraduate#minors-certificates" },
      { name: "Student Research", href: "/research#student-research" },
    ],
  },
  {
    id: "graduate",
    label: "Graduate",
    href: "/graduate",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
    description: "Advance your career with Master's and PhD programs.",
    subLinks: [
      { name: "MS in Computer Science", href: "/graduate#ms-computer-science" },
      { name: "PhD Program", href: "/graduate#phd-computer-science" },
      { name: "Admissions", href: "/graduate#phd-computer-science" },
      { name: "Degree Requirements", href: "/graduate#phd-computer-science" },
    ],
  },
  {
    id: "courses",
    label: "Courses",
    href: "/courses",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop",
    description: "Explore our comprehensive curriculum.",
    subLinks: [],
  },
  {
    id: "research",
    label: "Research",
    href: "/research",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
    description: "Discover groundbreaking work by our faculty and students.",
    subLinks: [
      { name: "Faculty Research", href: "/research#faculty-research" },
      { name: "Student Led Research", href: "/research#student-research" },
    ],
  },
  {
    id: "people",
    label: "People",
    href: "/people",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2587&auto=format&fit=crop",
    description: "Meet the faculty and staff driving our mission.",
    subLinks: [
      { name: "Faculty Directory", href: "/people#professors" },
      { name: "Staff & Administration", href: "/people#staff-directory" },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    href: "/resources",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2670&auto=format&fit=crop",
    description: "Tools and support for student success.",
    subLinks: [
      { name: "Student Spotlights", href: "/resources#student-spotlights" },
      { name: "Internships & Jobs", href: "/resources#resources-tools" },
      { name: "Tutoring Services", href: "/resources#resources-tools" },
      { name: "Scholarships", href: "/resources#resources-tools" },
      { name: "CUNY 2x Tech", href: "/resources#resources-tools" },
    ],
  },
];

// Footer quick links (external CUNY resources)
export const footerQuickLinks = [
  {
    name: "CUNY First",
    href: "https://www.cuny.edu/about/administration/offices/cis/cunyfirst/",
  },
  {
    name: "Brightspace",
    href: "https://ssologin.cuny.edu/cuny.html?bmctx=D59E04882DF4F80F0E4A64DD59167034&password=secure_string&contextType=external&OverrideRetryLimit=1&ChallengeRedirectMethod=GET&username=string&challenge_url=https://ssologin.cuny.edu/cuny.html&request_id=-8304344052822269525&authn_try_count=0&locale=en_US&resource_url=%252Fuser%252Floginsso",
  },
  {
    name: "DegreeWorks",
    href: "https://ssologin.cuny.edu/cuny.html?bmctx=D59E04882DF4F80F0E4A64DD59167034&password=secure_string&contextType=external&OverrideRetryLimit=1&ChallengeRedirectMethod=GET&username=string&challenge_url=https://ssologin.cuny.edu/cuny.html&request_id=3694992306920918914&authn_try_count=0&locale=en_US&resource_url=https%253A%252F%252Flandingpageprod.cuny.edu%252Fland%252Fmain.jsp",
  },
  {
    name: "Apply Now",
    href: "https://www.csi.cuny.edu/admissions/applying-csi",
    highlight: true,
  },
];
