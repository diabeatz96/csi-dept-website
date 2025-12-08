// Undergraduate Program Data

export interface ResourceLink {
  label: string;
  href: string;
  type: "pdf" | "link" | "flowchart" | "checklist" | "video";
}

export interface UndergraduateProgram {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  links: ResourceLink[];
  isAbetAccredited?: boolean;
}

export const undergraduatePrograms: UndergraduateProgram[] = [
  {
    id: "aas-computer-technology",
    category: "Undergraduate Degree",
    title: "Associate in Applied Science (AAS) in Computer Technology",
    description:
      "The Computer Science department offers a Computer Technology program that focuses on general applications programming. Students can choose either the programming sequence or the information science sequence. This program is designed to provide a seamless transition for those seeking a Bachelor's degree.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
    links: [
      {
        label: "Sample 2-Year Plan",
        href: "https://www.cs.csi.cuny.edu/content/Sample_cs_2_yr_plan.pdf",
        type: "pdf",
      },
      {
        label: "Prerequisite Flowchart",
        href: "https://www.cs.csi.cuny.edu/content/CSC_BS_PreRequisite_Flow_Chart_AAS.pdf",
        type: "flowchart",
      },
      {
        label: "Degree Requirements",
        href: "https://csi-undergraduate.catalog.cuny.edu/programs/CSCTEC-AAS",
        type: "link",
      },
      {
        label: "Checklist: Programming Seq",
        href: "https://www.cs.csi.cuny.edu/content/checklist_aascs.pdf",
        type: "checklist",
      },
      {
        label: "Checklist: Info Science Seq",
        href: "https://www.cs.csi.cuny.edu/content/checklist_aasis.pdf",
        type: "checklist",
      },
    ],
  },
  {
    id: "bs-computer-science",
    category: "Undergraduate Degree",
    title: "Bachelor of Science (BS) in Computer Science",
    description:
      "The Computer Science program offers a full four-year curriculum in computer science that prepares students for careers as computer professionals and/or for graduate study. The major provides a broad-based background in computer science and includes courses in computer software, systems, mathematics, and computer engineering. A student, under the guidance of a computer science adviser, may also select additional courses to pursue particular interests. Students interested in transferring into the program from the two-year Computer Technology program should consult the department chairperson.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop",
    isAbetAccredited: true,
    links: [
      {
        label: "Sample 4-year Degree/Career Map",
        href: "https://www.cs.csi.cuny.edu/content/Sample_cs_4_yr_degree-career-map.pdf",
        type: "pdf",
      },
      {
        label: "Video",
        href: "https://www.youtube.com/watch?v=bWYc-P4yyBs",
        type: "video",
      },
      {
        label: "Prerequisite Flowchart",
        href: "https://www.cs.csi.cuny.edu/content/CSC_BS_PreRequisite_Flow_Chart_2023-24_major_catalog.pdf",
        type: "flowchart",
      },
      {
        label: "Degree Requirements",
        href: "https://csi-undergraduate.catalog.cuny.edu/programs/CSC-BS",
        type: "link",
      },
      {
        label: "Degree checklist (2023-2024 major catalog)",
        href: "https://www.cs.csi.cuny.edu/content/CSC_BS_Pathways_checklist_2023-24-major-catalog.pdf",
        type: "checklist",
      },
      {
        label: "Degree checklist (2021-2023 major catalog)",
        href: "https://www.cs.csi.cuny.edu/content/CSC_BS_Pathways_checklist_2021-23-major-catalog.pdf",
        type: "checklist",
      },
    ],
  },
  {
    id: "bs-cs-math",
    category: "Joint Degree Program",
    title: "Bachelor of Science (BS) in Computer Science-Mathematics",
    description:
      "This joint degree program provides a balance between Computer Science and Mathematics with an emphasis on their applied aspects and their relationship to each other. A grade of C or above in CSC 126 is required for admission. This program is ideal for students interested in algorithms, theoretical computing, and scientific modeling.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop",
    links: [
      {
        label: "Degree Checklist",
        href: "https://www.cs.csi.cuny.edu/content/CSMTHchecklist.pdf",
        type: "checklist",
      },
      {
        label: "Degree Requirements",
        href: "https://csi-undergraduate.catalog.cuny.edu/programs/CSCMTH-BS",
        type: "link",
      },
    ],
  },
  {
    id: "bs-isi",
    category: "Interdisciplinary Degree",
    title: "Bachelor of Science (BS) in Information Systems and Informatics",
    description:
      "Offered as a collaboration between the Departments of Marketing and Computer Science, the ISI program prepares students to design, develop, and implement state-of-the-art information systems. Students gain core business and technical competencies to become systems analysts, consultants, and IT managers. The curriculum follows guidelines from AACSB, ABET, and ACM.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    links: [
      {
        label: "Sample 4-Year Plan",
        href: "https://www.cs.csi.cuny.edu/content/Plan.pdf",
        type: "pdf",
      },
      {
        label: "Prerequisite Flowchart",
        href: "https://www.cs.csi.cuny.edu/content/ISIMap.pdf",
        type: "flowchart",
      },
      {
        label: "Degree Requirements",
        href: "https://csi-undergraduate.catalog.cuny.edu/programs/INFOSYS-BS",
        type: "link",
      },
    ],
  },
];

// Helper functions
export const getProgramById = (id: string): UndergraduateProgram | undefined => {
  return undergraduatePrograms.find((p) => p.id === id);
};

export const getAbetAccreditedPrograms = (): UndergraduateProgram[] => {
  return undergraduatePrograms.filter((p) => p.isAbetAccredited);
};
