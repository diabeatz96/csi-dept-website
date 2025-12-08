// Faculty Research Areas Data

export type ResearchCategory =
  | "AI"
  | "Networks"
  | "Security"
  | "Data Science"
  | "Imaging"
  | "HPC"
  | "Theory";

export interface FacultyResearchArea {
  id: string;
  name: string;
  area: string;
  description: string;
  image: string;
  category: ResearchCategory;
  profile?: string;
}

export const facultyResearchAreas: FacultyResearchArea[] = [
  {
    id: "agaian",
    name: "Prof. Sos Agaian",
    area: "Computational Vision & ML",
    description:
      "Big and Small Data Analytics, Multimodal Biometric and Digital Forensics, Information Processing and Fusion.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop",
    category: "AI",
    profile: "https://www.cs.csi.cuny.edu/~agaian/",
  },
  {
    id: "gu",
    name: "Prof. Feng Gu",
    area: "Modeling & Simulation",
    description:
      "Complex Systems, High Performance Computing, and Bioinformatics research focusing on large-scale simulations.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
    category: "HPC",
    profile: "https://www.cs.csi.cuny.edu/~gu/",
  },
  {
    id: "huo",
    name: "Prof. Yumei Huo",
    area: "Algorithms & Complexity",
    description:
      "Design and Analysis of Algorithms, Sequence Scheduling, Combinatorial Optimization, and Operations Research.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    category: "Theory",
    profile: "https://www.cs.csi.cuny.edu/~yumei/",
  },
  {
    id: "gordonov",
    name: "Prof. Anatoliy Gordonov",
    area: "Real-Time Networks",
    description:
      "Graph Theory and Network Structure Optimization, Real Time Control Systems, and Formal Languages.",
    image: "/faculty-research/graph-theory.png",
    category: "Networks",
  },
  {
    id: "petingi",
    name: "Prof. Louis Petingi",
    area: "Network Reliability",
    description:
      "Extremal Graph Theory and its applications to the reliability and performance of communication networks.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop",
    category: "Networks",
    profile: "https://www.cs.csi.cuny.edu/~petingi/main.html",
  },
  {
    id: "gueorguieva",
    name: "Prof. Natacha Gueorguieva",
    area: "Neural Networks",
    description:
      "Pattern Recognition, Clustering, and Brain Modeling. Simulations of Spiking Neurons and Self-Organizing Maps.",
    image: "/faculty-research/ai.png",
    category: "AI",
    profile: "https://www.cs.csi.cuny.edu/~natacha/",
  },
  {
    id: "imberman",
    name: "Prof. Susan Imberman",
    area: "Data Mining & Robotics",
    description:
      "Focus on educational data mining and the application of machine learning to robotics control systems.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop",
    category: "Data Science",
    profile: "https://www.cs.csi.cuny.edu/~imberman/",
  },
  {
    id: "sturm",
    name: "Prof. Deborah Sturm",
    area: "Medical Imaging",
    description:
      "Image Processing, Visualization, and Root Cause Analysis of Errors. Also focuses on Game Development education.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
    category: "Imaging",
    profile: "https://www.cs.csi.cuny.edu/~sturm/",
  },
  {
    id: "zelikovitz",
    name: "Prof. Sarah Zelikovitz",
    area: "Machine Learning",
    description:
      "Semi-Supervised Machine Learning, Text Classification/Categorization, and Information Retrieval systems.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    category: "AI",
    profile: "https://www.cs.csi.cuny.edu/~zelikovi/",
  },
  {
    id: "zhang_s",
    name: "Prof. Shuqun Zhang",
    area: "Optical Computing",
    description:
      "Image and Video Processing, Computer Vision, Pattern Recognition, and Digital Holography.",
    image: "/faculty-research/image-processing.png",
    category: "Imaging",
    profile: "https://www.cs.csi.cuny.edu/~zhangs/",
  },
  {
    id: "zhang_x",
    name: "Prof. Xiaowen Zhang",
    area: "Cryptography",
    description:
      "Information Security, Quantum Computing, Wireless Communications, and Network Security protocols.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2670&auto=format&fit=crop",
    category: "Security",
    profile: "https://www.cs.csi.cuny.edu/~zhangx/",
  },
  {
    id: "zhang_z",
    name: "Prof. Zhanyang Zhang",
    area: "Wireless Networks",
    description:
      "Database Theory, Business Intelligence, RFID applications, and Underwater Wireless Sensor Networks.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
    category: "Networks",
    profile: "https://www.cs.csi.cuny.edu/~zhangz/",
  },
];

// Filter categories for the UI
export const researchFilters: string[] = [
  "All",
  "AI",
  "Networks",
  "Security",
  "Data Science",
  "Imaging",
  "HPC",
];

// Helper functions
export const getFacultyResearchById = (
  id: string
): FacultyResearchArea | undefined => {
  return facultyResearchAreas.find((f) => f.id === id);
};

export const getFacultyResearchByCategory = (
  category: ResearchCategory
): FacultyResearchArea[] => {
  return facultyResearchAreas.filter((f) => f.category === category);
};
