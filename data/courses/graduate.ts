import type { Course } from "../types";

// Level 700 (Master's) Courses
export const level700Courses: Course[] = [
  { code: "CSC 704", title: "Tech-Infused Curriculum Dev (Teachers)", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0627711" },
  { code: "CSC 706", title: "Computer Graphics", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0627731" },
  { code: "CSC 710", title: "Software Engineering", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0627761" },
  { code: "CSC 711", title: "Computational Thinking for Teachers", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/1299601" },
  { code: "CSC 714", title: "Software Systems Analysis Design", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/1299611" },
  { code: "CSC 715", title: "Database Theory", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0627801" },
  { code: "CSC 716", title: "Advanced Operating Systems", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0627811" },
  { code: "CSC 724", title: "Formal Language Theory", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0627871" },
  { code: "CSC 725", title: "Computer Vision", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/1485221" },
  { code: "CSC 727", title: "Algorithms and Information Structures", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0627881" },
  { code: "CSC 731", title: "Artificial Intelligence and Knowledge Engineering", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0627891" },
  { code: "CSC 732", title: "Pattern Recognition and Neural Networks", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0627901" },
  { code: "CSC 733", title: "Natural Language Processing", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0627911" },
  { code: "CSC 735", title: "Machine Learning and Data Mining", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0627921" },
  { code: "CSC 740", title: "Computer System Design", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0627931" },
  { code: "CSC 741", title: "Digital Image Processing", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0627941" },
  { code: "CSC 747", title: "Digital Signal Processing", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0627971" },
  { code: "CSC 754", title: "Topics in System Simulation", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0628011" },
  { code: "CSC 756", title: "Network Security", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0628031" },
  { code: "CSC 757", title: "Telecommunication Networks", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0628041" },
  { code: "CSC 759", title: "Graduate Research Laboratory", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0628061" },
  { code: "CSC 762", title: "Fundamentals of Wireless Communications", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0628081" },
  { code: "CSC 767", title: "Neural Networks and Deep Learning", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/1371761" },
  { code: "CSC 768", title: "Cryptography", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/1371771" },
  { code: "CSC 769", title: "Graph-Based Analysis for Big Data", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/1372531" },
  { code: "CSC 770", title: "Parallel Computing", level: "700", type: "graduate", href: "https://csi-graduate.catalog.cuny.edu/courses/0628111" },
];

// PhD Level Courses
export const phdCourses: Course[] = [
  { code: "DS 801", title: "Big Data Analytics", level: "PhD", type: "graduate", href: "#" },
  { code: "DS 802", title: "Data Mining & Visualization", level: "PhD", type: "graduate", href: "#" },
  { code: "ML 810", title: "Machine Learning in Quant Finance", level: "PhD", type: "graduate", href: "#" },
  { code: "ML 815", title: "Graphical Models & Optimization", level: "PhD", type: "graduate", href: "#" },
  { code: "TH 820", title: "Advanced Data Structures", level: "PhD", type: "graduate", href: "#" },
  { code: "TH 825", title: "Combinatorial Algorithms", level: "PhD", type: "graduate", href: "#" },
  { code: "CP 830", title: "Parallel Scientific Computing", level: "PhD", type: "graduate", href: "#" },
  { code: "NLP 840", title: "Natural Language Processing", level: "PhD", type: "graduate", href: "#" },
  { code: "NLP 845", title: "Web Information Retrieval", level: "PhD", type: "graduate", href: "#" },
  { code: "VIS 850", title: "Computer Vision & 3D Photo", level: "PhD", type: "graduate", href: "#" },
  { code: "SOC 860", title: "Social Network Analysis", level: "PhD", type: "graduate", href: "#" },
];

// All graduate courses combined
export const graduateCourses: Course[] = [...level700Courses, ...phdCourses];

// Helper functions
export const getGraduateCoursesByLevel = (level: string): Course[] => {
  return graduateCourses.filter((c) => c.level === level);
};

export const searchGraduateCourses = (query: string): Course[] => {
  const lowerQuery = query.toLowerCase();
  return graduateCourses.filter(
    (c) =>
      c.code.toLowerCase().includes(lowerQuery) ||
      c.title.toLowerCase().includes(lowerQuery)
  );
};
