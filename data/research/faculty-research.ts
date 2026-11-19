// Faculty Research Areas Data

export type ResearchCategory =
  | "AI"
  | "Networks"
  | "Security"
  | "Imaging"
  | "HPC"
  | "Theory";

export interface FacultyResearchArea {
  id: string;
  name: string;
  area: string;
  description: string;
  image: string;
  imageAlt: string; // describes the picture itself, for screen readers
  category: ResearchCategory;
  profile?: string;
}

export const facultyResearchAreas: FacultyResearchArea[] = [
  {
    id: "agaian",
    name: "Prof. Sos Agaian",
    area: "Computational Vision & ML",
    description:
      "Computational Vision and Machine Learning, Big and Small Data Analytics, Multimodal Biometric and Digital Forensics, Information Processing and Fusion. Applications in Healthcare, Biomedical Data Mining, Object Recognition, Finance, Signal Processing, Computer-Aided Food Quality Inspection, 3D Imaging Sensors, Computational Photography, Multimedia Security, etc.",
    image:
      "https://images.unsplash.com/photo-1760022371162-365e89f21908?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: "Lines of program code on a screen",
    category: "AI",
    profile: "https://www.cs.csi.cuny.edu/~agaian/",
  },
  {
    id: "edemacu",
    name: "Prof. Kennedy Edemacu",
    area: "ML Security & Privacy",
    description: "Machine Learning, Security and Privacy.",
    image:
      "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2670&auto=format&fit=crop",
    imageAlt: "Combination padlock and bank cards resting on a keyboard",
    category: "Security",
    profile: "https://www.cs.csi.cuny.edu/~edemacu/",
  },
  {
    id: "gu",
    name: "Prof. Feng Gu",
    area: "Modeling & Simulation",
    description:
      "Modeling and Simulation, Complex Systems, High Performance Computing, Bioinformatics.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
    imageAlt: "Close-up of a computer circuit board",
    category: "HPC",
    profile: "https://www.cs.csi.cuny.edu/~gu/",
  },
  {
    id: "huo",
    name: "Prof. Yumei Huo",
    area: "Algorithms & Complexity",
    description:
      "Design and Analysis of Algorithms, Sequence and Scheduling, Computation and Complexity, Combinatorial Optimization, Operations Research, Computer Architecture, Pattern Recognition.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    imageAlt: "A toy robot sitting on a bench",
    category: "Theory",
    profile: "https://www.cs.csi.cuny.edu/~yumei/",
  },
  {
    id: "petingi",
    name: "Prof. Louis Petingi",
    area: "Network Reliability",
    description: "Network Reliability, Extremal Graph Theory.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop",
    imageAlt: "Green code characters streaming down a dark screen",
    category: "Networks",
    profile: "https://www.cs.csi.cuny.edu/~petingi/main.html",
  },
  {
    id: "zelikovitz",
    name: "Prof. Sarah Zelikovitz",
    area: "Machine Learning",
    description:
      "Semi-Supervised Machine Learning, Text Classification/Categorization, Information Retrieval.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    imageAlt: "Data charts on a laptop screen",
    category: "AI",
    profile: "https://www.cs.csi.cuny.edu/~zelikovi/",
  },
  {
    id: "zhang_s",
    name: "Prof. Shuqun Zhang",
    area: "Image Processing & Computer Vision",
    description:
      "Machine Learning, Image Processing, Computer Vision, Pattern Recognition, Digital Holography, Optical Computing and Information Processing.",
    image: "/faculty-research/image-processing.png",
    imageAlt: "Diagram of a multi-scale transformer model for images",
    category: "Imaging",
    profile: "https://www.cs.csi.cuny.edu/~zhangs/",
  },
  {
    id: "zhang_t",
    name: "Prof. Tianxiao Zhang",
    area: "Computer Vision & Deep Learning",
    description:
      "Computer Vision, Machine Learning, Deep Learning, Multimodal Learning.",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2670&auto=format&fit=crop",
    imageAlt: "White humanoid robot with a camera for a head",
    category: "AI",
    profile: "https://www.cs.csi.cuny.edu/~zhangt/",
  },
  {
    id: "zhang_x",
    name: "Prof. Xiaowen Zhang",
    area: "Cryptography",
    description:
      "Information Security, Cryptography, Quantum Computing, Wireless Communications and Applications. In particular, Cipher Designs and Implementation, Crypto Analysis, Network Security, Spread-Spectrum Communication, Radio Frequency Identification (RFID), Security and Privacy Issues.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2670&auto=format&fit=crop",
    imageAlt: "Padlock on a laptop keyboard",
    category: "Security",
    profile: "https://www.cs.csi.cuny.edu/~zhangx/",
  },
  {
    id: "zhang_y",
    name: "Prof. Yuji Zhang",
    area: "Natural Language Processing",
    description:
      "Natural Language Processing, Interpretable, Reliable, and Robust AI/ML, Knowledge Lifecycle of Foundation Models.",
    image: "/faculty-research/ai.png",
    imageAlt: "Illustration of an artificial intelligence concept",
    category: "AI",
    profile: "https://www.cs.csi.cuny.edu/~zhangy/",
  },
  {
    id: "zhang_z",
    name: "Prof. Zhanyang Zhang",
    area: "Wireless Networks",
    description:
      "Database Theory and Business Intelligence, Mobile Database/Mobile Computing, RFID and Its Applications, Wireless Ad-hoc and Sensor Networks, Wireless Communication Networks and Security, Underwater Wireless Sensor Networks.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
    imageAlt: "Earth at night with glowing network connections",
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
  "Imaging",
  "HPC",
  "Theory",
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
