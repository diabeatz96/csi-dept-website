// Graduate Program Data

export interface GraduateSpecializationCourse {
  code: string;
  title: string;
  icon: string; // Icon name from lucide-react
}

export interface GraduateSpecialization {
  id: string;
  title: string;
  subtitle: string;
  icon: string; // Icon name from lucide-react
  color: string;
  description: string;
  courses: GraduateSpecializationCourse[];
}

export const graduateSpecializations: GraduateSpecialization[] = [
  {
    id: "ai-data",
    title: "Artificial Intelligence & Data Analytics",
    subtitle: "Master intelligent systems and big data patterns.",
    icon: "BrainCircuit",
    color: "blue",
    description:
      "Focus on the theoretical and practical aspects of machine learning, computer vision, and advanced data processing.",
    courses: [
      { code: "CSC 706", title: "Computer Graphics", icon: "Layers" },
      { code: "CSC 725", title: "Computer Vision", icon: "Sparkles" },
      { code: "CSC 731", title: "AI & Knowledge Engineering", icon: "BrainCircuit" },
      { code: "CSC 732", title: "Neural Networks & Pattern Rec", icon: "Network" },
      { code: "CSC 733", title: "Natural Language Processing", icon: "Code2" },
      { code: "CSC 735", title: "Machine Learning & Data Mining", icon: "Database" },
      { code: "CSC 741", title: "Digital Image Processing", icon: "Layers" },
      { code: "CSC 747", title: "Digital Signal Processing", icon: "Cpu" },
      { code: "CSC 767", title: "Neural Networks & Deep Learning", icon: "BrainCircuit" },
      { code: "CSC 769", title: "Graph-Based Analysis for Big Data", icon: "Network" },
    ],
  },
  {
    id: "cloud-se",
    title: "Cloud Computing & Software Engineering",
    subtitle: "Architect scalable, robust enterprise systems.",
    icon: "Cloud",
    color: "indigo",
    description:
      "Learn to design, develop, and deploy large-scale software systems on distributed cloud infrastructures.",
    courses: [
      { code: "CSC 710", title: "Software Engineering", icon: "Code2" },
      { code: "CSC 714", title: "Software Systems Analysis", icon: "Layers" },
      { code: "CSC 715", title: "Data Base Theory", icon: "Database" },
      { code: "CSC 754", title: "Topics in System Simulation", icon: "Cpu" },
      { code: "CSC 770", title: "Parallel Computing", icon: "Layers" },
    ],
  },
  {
    id: "cyber",
    title: "Cybersecurity & Networks",
    subtitle: "Defend infrastructure and secure communications.",
    icon: "ShieldCheck",
    color: "slate",
    description:
      "Study the protocols, encryption methods, and defensive strategies needed to protect modern networks.",
    courses: [
      { code: "CSC 747", title: "Digital Signal Processing", icon: "Cpu" },
      { code: "CSC 756", title: "Network Security", icon: "Lock" },
      { code: "CSC 762", title: "Fundamentals of Wireless Comm", icon: "Network" },
      { code: "CSC 768", title: "Cryptography", icon: "ShieldCheck" },
    ],
  },
];

// MS Program Requirements
export interface MSRequirement {
  number: number;
  description: string;
  details?: string[];
}

export interface CoreCourse {
  code: string;
  title: string;
  alternative?: {
    code: string;
    title: string;
  };
}

export const msProgramData = {
  quickLinks: [
    {
      name: "Degree Requirements",
      href: "https://csi-graduate.catalog.cuny.edu/programs/CSC-MS",
    },
    {
      name: "Tuition",
      href: "https://csi-graduate.catalog.cuny.edu/financial-aid-and-tuition/tuition-and-fees",
    },
  ],
  admissionRequirements: {
    gpa: "3.0 out of 4.0",
    degreeRequired: "Bachelor of Science degree in Computer Science or related area",
    knowledgeAreas: [
      "High-Level Programming Language(s), Data Structures, Software Design, Operating Systems",
      "Digital Design, Computer Architecture",
      "Discrete Mathematics, Calculus",
      "Probability or Linear Algebra",
    ],
  },
  degreeRequirements: {
    totalCredits: 30,
    totalCourses: 10,
    minimumGPA: 3.0,
    coreCourses: [
      { code: "CSC 716", title: "Advanced Operating Systems" },
      { code: "CSC 727", title: "Algorithms and Information Structures" },
      {
        code: "CSC 740",
        title: "Computer Systems Design",
        alternative: { code: "CSC 770", title: "Parallel Computing" },
      },
      {
        code: "CSC 759",
        title: "Graduate Research Laboratory",
        alternative: { code: "CSC 799", title: "Thesis Research" },
      },
    ],
    electiveCount: 6,
    excludedCourses: ["CSC 602", "CSC 702", "CSC 704"],
  },
  foundationTopics: [
    "Theoretical Computer Science",
    "Advanced Operating Systems",
    "Computer Architecture/Parallel Programming",
  ],
};

// Helper functions
export const getSpecializationById = (id: string): GraduateSpecialization | undefined => {
  return graduateSpecializations.find((s) => s.id === id);
};

export const getSpecializationCourses = (specId: string): GraduateSpecializationCourse[] => {
  const spec = getSpecializationById(specId);
  return spec?.courses || [];
};
