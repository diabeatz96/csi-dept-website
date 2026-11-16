// Home page content, in page order

import type { AboutContent, CampusPhoto, CareerOutcomes } from "./types";

// Photos for the About section's rotating slideshow
export const campusPhotos: CampusPhoto[] = [
  { src: "/home-hero/csi-home-0.jpg", alt: "CSI campus building exterior" },
  { src: "/home-hero/csi-home-1.jpg", alt: "Students walking on CSI campus" },
  { src: "/home-hero/csi-home-2.png", alt: "CSI computer science students in lab" },
  { src: "/home-hero/csi-home-3.jpg", alt: "CSI campus green spaces" },
  { src: "/home-hero/csi-home-4.jpg", alt: "Students studying together" },
  { src: "/home-hero/csi-home-5.jpg", alt: "CSI library and study areas" },
  { src: "/home-hero/csi-home-6.jpg", alt: "Campus life at CSI" },
  { src: "/home-hero/csi-home-7.jpg", alt: "CSI academic buildings" },
  { src: "/home-hero/csi-home-8.jpg", alt: "Students in classroom" },
  { src: "/home-hero/csi-home-9.jpg", alt: "CSI technology facilities" },
  { src: "/home-hero/csi-home-11.jpg", alt: "Campus aerial view" },
  { src: "/home-hero/csi-home-12.jpg", alt: "Student graduation ceremony" },
  { src: "/home-hero/csi-home-13.jpg", alt: "Research facilities at CSI" },
  { src: "/home-hero/csi-home-14.jpg", alt: "CSI campus entrance" },
];

export const aboutContent: AboutContent = {
  eyebrow: "About Us",
  title: "Why Choose",
  titleAccent: "Our Department?",
  description:
    "The Computer Science Department prepares students for careers as computer professionals and for continued study. The major gives a broad background in computer software, computer systems, mathematics, network security and computer hardware, with courses that keep up with changing technologies.",
  // Rendered as "<statement>, abet.org." with abet.org linked
  abetStatement:
    "The BS in Computer Science is accredited by the Computing Accreditation Commission of ABET",
  abetHref: "https://www.abet.org",
  highlights: [
    "Small class sizes with personalized attention",
    "Hands-on research opportunities with faculty",
    "Affordable CUNY tuition rates",
    "Located on NYC's largest campus (204 acres)",
  ],
  stats: [
    { value: "ABET", label: "Accredited BS", iconName: "Award" },
    { value: "500+", label: "Students", iconName: "GraduationCap" },
    { value: "40+", label: "Courses", iconName: "BookOpen" },
  ],
  primaryCta: { label: "Explore Programs", href: "/undergraduate" },
  secondaryCta: {
    label: "Apply Now",
    href: "https://www.csi.cuny.edu/admissions",
    external: true,
  },
};

// Confirm these numbers with the department before each update
export const careerOutcomes: CareerOutcomes = {
  title: "Where Our Students Build Their Careers",
  description:
    "Our graduates are highly sought after by leading technology companies, securing positions at Fortune 500 firms, innovative startups, and cutting-edge research institutions.",
  companiesLabel: "Companies our graduates have joined",
  stats: [
    { label: "Graduates Hired", value: "95%" },
    { label: "Top Companies", value: "200+" },
    { label: "Average Starting Salary", value: "$85K+" },
  ],
};
