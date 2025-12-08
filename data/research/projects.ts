// Research Projects Data (Hero section rotating cards)

export interface ResearchProject {
  id: string;
  title: string;
  abstract: string;
  citation: string;
  professor: string;
  tags: string[];
  icon: string; // Icon name from lucide-react
  link: string;
}

export const researchProjects: ResearchProject[] = [
  {
    id: "p1",
    title: "Deep Learning for Malware Detection",
    abstract:
      "A novel multi-level system to identify and classify malware with higher accuracy than heuristic methods.",
    citation: "Zhong, W., & Gu, F. (2019). Expert Systems with Applications.",
    professor: "Prof. Feng Gu",
    tags: ["Cybersecurity", "AI"],
    icon: "ShieldCheck",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0957417419303008",
  },
  {
    id: "p2",
    title: "Graph Partitioning of RNA Structures",
    abstract:
      "Applying extremal graph theory to partition RNA secondary structures and predict biological pseudoknots.",
    citation: "Petingi, L. (2019). Algorithms for Computational Biology.",
    professor: "Prof. Louis Petingi",
    tags: ["Bioinformatics", "Graph Theory"],
    icon: "Network",
    link: "https://arxiv.org/abs/2109.03236",
  },
  {
    id: "p3",
    title: "Perception-Driven Image Quality",
    abstract:
      "Creating bio-inspired computer vision models that mimic human visual perception to predict digital media quality.",
    citation: "Agaian, S. (2021). IEEE Int. Conf. on Imaging Systems.",
    professor: "Prof. Sos Agaian",
    tags: ["Computer Vision", "AI"],
    icon: "Activity",
    link: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13033/130330K/An-impact-study-of-deep-learning-based-low-light-image/10.1117/12.3014452.short",
  },
  {
    id: "p4",
    title: "Real-Time Weighted Sum Filtering",
    abstract:
      "GPU-accelerated optimization of digital holographic reconstruction for real-time image segmentation.",
    citation: "Zhang, S. (2014). Proceedings of SPIE.",
    professor: "Prof. Shuqun Zhang",
    tags: ["Optical Computing", "HPC"],
    icon: "Cpu",
    link: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/9217/921723/Real-time-soft-partition-based-weighted-sum-filtering-with-GPU/10.1117/12.2062478.short",
  },
  {
    id: "p5",
    title: "Hash Collisions via HPC Clusters",
    abstract:
      "Utilizing MPI on high-performance clusters to perform parallel collision searches on cryptographic functions.",
    citation: "Zhang, X. (2017). IEEE LISAT Conference.",
    professor: "Prof. Xiaowen Zhang",
    tags: ["Cryptography", "HPC"],
    icon: "ShieldCheck",
    link: "https://ieeexplore.ieee.org/document/8001961",
  },
  {
    id: "p6",
    title: "Wildfire Spread Simulation",
    abstract:
      "Integrating real-time sensor data into dynamic wildfire simulations using sequential Monte Carlo methods.",
    citation: "Gu, F. (2010). Int. Journal of Modeling & Simulation.",
    professor: "Prof. Feng Gu",
    tags: ["Simulation", "Data Science"],
    icon: "FileText",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=RZ7Z6GMAAAAJ&citation_for_view=RZ7Z6GMAAAAJ:u5HHmVD_uO8C",
  },
  {
    id: "p7",
    title: "Secure Secret Sharing Schemes",
    abstract:
      "Designing protocols to secure sensitive data across distributed IT infrastructures. Google Cyber NYC Research.",
    citation: "Zhang, X. (2013). Security and Comm. Networks.",
    professor: "Prof. Xiaowen Zhang",
    tags: ["Security", "Distributed Sys"],
    icon: "Network",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=vX1p5wIAAAAJ&citation_for_view=vX1p5wIAAAAJ:ufrVoPGSRksC",
  },
  {
    id: "p8",
    title: "Neural Topologies for Brain Modeling",
    abstract:
      "Studying neural network architectures to model brain functions and fuzzy clustering criteria.",
    citation: "Gueorguieva, N. (2020). Theoretical CS Research.",
    professor: "Prof. Natacha Gueorguieva",
    tags: ["Neural Networks", "Modeling"],
    icon: "Activity",
    link: "https://asmedigitalcollection.asme.org/ebooks/book/145/chapter-abstract/28872/Simulation-of-Synaptic-Responses-in-an-Active?redirectedFrom=PDF",
  },
];

// Helper functions
export const getProjectById = (id: string): ResearchProject | undefined => {
  return researchProjects.find((p) => p.id === id);
};

export const getProjectsByTag = (tag: string): ResearchProject[] => {
  return researchProjects.filter((p) =>
    p.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase()))
  );
};

export const getProjectsByProfessor = (name: string): ResearchProject[] => {
  return researchProjects.filter((p) =>
    p.professor.toLowerCase().includes(name.toLowerCase())
  );
};
