// Student Research Projects Data

export type CardSize = "sm" | "md" | "lg";
export type CardColor = "blue" | "slate" | "purple" | "emerald" | "rose" | "indigo";

export interface StudentResearchProject {
  id: number;
  title: string;
  category: string;
  icon: string; // Icon name from lucide-react
  size: CardSize;
  color: CardColor;
  description: string;
  pdfUrl: string;
  pdfPreview: string;
}

export const studentResearchProjects: StudentResearchProject[] = [
  {
    id: 1,
    title: "Optimized Tunel Image Enhancement",
    category: "Computer Vision",
    icon: "Eye",
    size: "lg",
    color: "blue",
    description:
      "Advanced algorithms for clarifying low-light tunnel imagery for safety systems.",
    pdfUrl:
      "https://www.cs.csi.cuny.edu/poster/Konstantin-Novichenko-CSC-01-Presentation-RESUBMISSION.pdf",
    pdfPreview: "/student-research/optimized-tunnel.png",
  },
  {
    id: 2,
    title: "Searchable Symmetric Encryption Scheme",
    category: "Cryptography",
    icon: "Lock",
    size: "md",
    color: "slate",
    description: "Implementation of a secure index for encrypted database querying.",
    pdfUrl: "https://www.cs.csi.cuny.edu/poster/Jacob-Chen-CSC-05-Poster.pdf",
    pdfPreview: "/student-research/searchable-symm.png",
  },
  {
    id: 3,
    title: "Haunted Decoder: Binary Conversion Game",
    category: "Game Dev",
    icon: "Gamepad2",
    size: "sm",
    color: "purple",
    description: "Gamifying computer science fundamentals for ed-tech.",
    pdfUrl: "https://www.cs.csi.cuny.edu/poster/Alan-Eappen-CSC-04-Poster.pdf",
    pdfPreview: "/student-research/haunted-decoder.png",
  },
  {
    id: 4,
    title: "Meducation: A Different Approach to Learning",
    category: "EdTech",
    icon: "BookOpen",
    size: "md",
    color: "emerald",
    description: "Interactive medical education platform for students.",
    pdfUrl:
      "https://www.cs.csi.cuny.edu/poster/Jasper-Caballero-CSC-03-Presentation.pdf",
    pdfPreview: "/student-research/meducation.png",
  },
  {
    id: 5,
    title: "COVID-19 Virtual Test",
    category: "Health Tech",
    icon: "Activity",
    size: "sm",
    color: "rose",
    description: "Simulation software for pandemic response tracking.",
    pdfUrl: "https://www.cs.csi.cuny.edu/poster/Victoria-Fischer-CSC-02-Poster.pdf",
    pdfPreview: "/student-research/covid-19-virtual.png",
  },
  {
    id: 6,
    title: "Finter: Social Network for Int'l Students",
    category: "Social Computing",
    icon: "Globe",
    size: "lg",
    color: "indigo",
    description: "Connecting students across borders to ease cultural transition.",
    pdfUrl:
      "https://www.cs.csi.cuny.edu/poster/Chukwurado-Umeaka-CSC-06-Poster.pdf",
    pdfPreview: "/student-research/finter.png",
  },
  {
    id: 7,
    title: "User Density & Spatial Cloaking Algorithms",
    category: "Privacy",
    icon: "Smartphone",
    size: "md",
    color: "slate",
    description:
      "Improving privacy protection for mobile users in location-based services.",
    pdfUrl: "https://www.cs.csi.cuny.edu/poster/poster_IEEE_Sarnoff2016.pdf",
    pdfPreview: "/student-research/user-density.png",
  },
  {
    id: 8,
    title: "Modern Network Security Practices",
    category: "Cybersecurity",
    icon: "ShieldCheck",
    size: "md",
    color: "blue",
    description:
      "Using Rainbow Tables to solve organizational password security issues.",
    pdfUrl: "https://www.cs.csi.cuny.edu/poster/McMahon_Rainbow_Tables_Poster.pdf",
    pdfPreview: "/student-research/modern-network.png",
  },
  {
    id: 9,
    title: "QR Code Assisted OTP Authentication",
    category: "Security",
    icon: "ScanLine",
    size: "sm",
    color: "slate",
    description: "A mutual authentication scheme for secure logins.",
    pdfUrl: "https://www.cs.csi.cuny.edu/poster/poster_QRCode.pdf",
    pdfPreview: "/student-research/qr-otp-auth.png",
  },
  {
    id: 10,
    title: "RFID Authentication Protocols Study",
    category: "Wireless",
    icon: "Wifi",
    size: "md",
    color: "indigo",
    description:
      "Analysis of radio frequency identification security vulnerabilities.",
    pdfUrl:
      "https://www.cs.csi.cuny.edu/poster/Sidhartha_Mishra_Poster_CSI_URC17.pdf",
    pdfPreview: "/student-research/a-study-radio-frequency.png",
  },
  {
    id: 11,
    title: "Secure Deletion File System",
    category: "Systems",
    icon: "FileCode",
    size: "md",
    color: "emerald",
    description: "Designing storage systems that ensure permanent data erasure.",
    pdfUrl: "https://www.cs.csi.cuny.edu/poster/poster_ahmed_filesystem.pdf",
    pdfPreview: "/student-research/desiging-a-file-system.png",
  },
  {
    id: 12,
    title: "Bypassing Wireless Authentication",
    category: "Ethical Hacking",
    icon: "Cpu",
    size: "lg",
    color: "purple",
    description: "Vulnerability assessment of web-based wireless gateway systems.",
    pdfUrl:
      "https://www.cs.csi.cuny.edu/poster/poster_ahmed_wireless_bypassing.pdf",
    pdfPreview: "/student-research/bypassing-web-based-wireless-auth.png",
  },
];

// Helper functions
export const getStudentProjectById = (
  id: number
): StudentResearchProject | undefined => {
  return studentResearchProjects.find((p) => p.id === id);
};

export const getStudentProjectsByCategory = (
  category: string
): StudentResearchProject[] => {
  return studentResearchProjects.filter((p) =>
    p.category.toLowerCase().includes(category.toLowerCase())
  );
};

export const getStudentProjectsBySize = (
  size: CardSize
): StudentResearchProject[] => {
  return studentResearchProjects.filter((p) => p.size === size);
};
