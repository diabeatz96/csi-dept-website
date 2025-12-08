// Student Spotlights Data

export type SpotlightCategory =
  | "Competition Win"
  | "Event"
  | "Career Success"
  | "Alumni Story"
  | "Industry Partnership"
  | "Hackathon";

export interface StudentSpotlight {
  id: string;
  title: string;
  category: SpotlightCategory;
  icon: string; // Icon name from lucide-react
  featured?: boolean;
  date: string;
  image?: string;
  description?: string;
}

export const studentSpotlights: StudentSpotlight[] = [
  {
    id: "women-tech",
    title: "CS Student Team Wins 'Women in Tech' Incubator Competition",
    category: "Competition Win",
    icon: "Trophy",
    featured: true,
    date: "Fall 2024",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
    description:
      "Our talented team of computer science students took home the grand prize, showcasing innovation and technical excellence on a national stage.",
  },
  {
    id: "game-jam",
    title: "First-Ever Game Jam Event Showcases Talent",
    category: "Event",
    icon: "Gamepad2",
    date: "Spring 2024",
  },
  {
    id: "internships",
    title: "Students Offered Full-Time Positions After Summer Internship",
    category: "Career Success",
    icon: "Briefcase",
    date: "Summer 2024",
  },
  {
    id: "eric-benedetto",
    title:
      "For Eric Benedetto, Remote Learning Was Perfect For Pot-Bellied Pigs",
    category: "Alumni Story",
    icon: "GraduationCap",
    date: "Winter 2023",
  },
  {
    id: "lowes",
    title: "Lowe's Laying Pipeline For CS Students",
    category: "Industry Partnership",
    icon: "Briefcase",
    date: "Fall 2023",
  },
  {
    id: "megan-mcnamee",
    title: "Grad Megan Mcnamee Lands Pair Of Internships In Gaming",
    category: "Career Success",
    icon: "Gamepad2",
    date: "Summer 2023",
  },
  {
    id: "hack-csi",
    title: '"Hack: CSI" Puts Computer Science Students in Competitive Arena',
    category: "Hackathon",
    icon: "Code2",
    date: "Spring 2023",
  },
  {
    id: "ibm-watson",
    title: "CSI Team Wins 1st Place at CUNY-IBM Watson Challenge",
    category: "Competition Win",
    icon: "Trophy",
    date: "Winter 2022",
  },
  {
    id: "developforgood",
    title:
      "CS Students Mohammed Othman & Ramiz Faragalla Highlighted in Developforgood Newsletter",
    category: "Career Success",
    icon: "Briefcase",
    date: "Summer 2021",
    description:
      "Mohammed Othman (Class of 2021), Mobile Developer at Invonto, and Ramiz Faragalla, Intern at Success Factors, are featured in the summer newsletter for Developforgood.",
  },
  {
    id: "omar-barragan",
    title:
      "Omar Barragan CS Graduate Featured in NY Jobs CEO Council Annual Report",
    category: "Alumni Story",
    icon: "GraduationCap",
    date: "2021",
    description:
      "Omar Barragan, CS graduate, is featured on the New York Jobs CEO Council's 2021 Annual Report (page 12).",
  },
  {
    id: "codepath-club",
    title:
      "CodePath Club Provides New Grounds for Computer Science Student Exploration",
    category: "Event",
    icon: "Code2",
    date: "2023",
  },
  {
    id: "ttp-ceremony",
    title: "TTP Post-Internship Ceremony",
    category: "Event",
    icon: "Award",
    date: "2023",
  },
  {
    id: "csi-first-place",
    title: "CSI Team Wins First Place",
    category: "Competition Win",
    icon: "Trophy",
    date: "2022",
  },
];

// Helper functions
export const getFeaturedSpotlight = (): StudentSpotlight | undefined => {
  return studentSpotlights.find((s) => s.featured);
};

export const getNonFeaturedSpotlights = (): StudentSpotlight[] => {
  return studentSpotlights.filter((s) => !s.featured);
};

export const getSpotlightById = (id: string): StudentSpotlight | undefined => {
  return studentSpotlights.find((s) => s.id === id);
};

export const getSpotlightsByCategory = (
  category: SpotlightCategory
): StudentSpotlight[] => {
  return studentSpotlights.filter((s) => s.category === category);
};

export const getRecentSpotlights = (count: number = 6): StudentSpotlight[] => {
  return getNonFeaturedSpotlights().slice(0, count);
};
