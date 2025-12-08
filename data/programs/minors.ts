// Minor Programs Data

export interface MinorProgram {
  id: string;
  title: string;
  subtitle: string;
  icon: string; // Icon name from lucide-react
  image: string;
  description: string;
  link: string;
  linkText: string;
}

export const minorPrograms: MinorProgram[] = [
  {
    id: "cs-minor",
    title: "Computer Science Minor",
    subtitle: "Foundations of Computing",
    icon: "Binary",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
    description:
      "A solid technical foundation for students in other majors. Requires completion of core math/CS courses plus one specialized track.",
    link: "https://csi-undergraduate.catalog.cuny.edu/programs/CSC-MIN",
    linkText: "View Computer Science Minor",
  },
  {
    id: "data-science",
    title: "Data Science Minor",
    subtitle: "Analytics & Machine Learning",
    icon: "BrainCircuit",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2674&auto=format&fit=crop",
    description:
      "Focuses on extracting knowledge from data. Ideal for Math, Biology, and Business majors looking to add analytical skills.",
    link: "https://csi-undergraduate.catalog.cuny.edu/programs/DATASC-MIN",
    linkText: "View Data Science Minor",
  },
  {
    id: "comp-ling",
    title: "Computational Linguistics",
    subtitle: "Language Processing & AI",
    icon: "Languages",
    image:
      "https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=2832&auto=format&fit=crop",
    description:
      "An interdisciplinary minor bridging Computer Science and Linguistics. Perfect for interest in NLP, Speech Recognition, and AI.",
    link: "https://csi-undergraduate.catalog.cuny.edu/programs/CMPLNG-MIN",
    linkText: "View Computational Linguistics Minor",
  },
  {
    id: "cyber-sec",
    title: "Cyber Security Minor",
    subtitle: "Network Defense & InfoSec",
    icon: "ShieldAlert",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    description:
      "Prepare for careers in information assurance. Learn to protect networks, secure data, and understand ethical hacking.",
    link: "https://csi-undergraduate.catalog.cuny.edu/programs/CYBSEC-MIN",
    linkText: "View Cyber Security Minor",
  },
];

// Helper functions
export const getMinorById = (id: string): MinorProgram | undefined => {
  return minorPrograms.find((m) => m.id === id);
};
