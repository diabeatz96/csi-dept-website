// Undergraduate Specializations (BS in Computer Science tracks)

export interface CourseStep {
  code: string;
  title: string;
}

export interface ElectiveOption {
  optionA: CourseStep;
  optionB: CourseStep;
}

export interface SpecializationSequence {
  step1: CourseStep;
  step2: CourseStep;
  step3: ElectiveOption;
}

export interface UndergradSpecialization {
  id: string;
  title: string;
  subtitle: string;
  icon: string; // Icon name from lucide-react
  image: string;
  description?: string;
  sequence?: SpecializationSequence;
}

export const undergradSpecializations: UndergradSpecialization[] = [
  {
    id: "game-dev",
    title: "Game Development",
    subtitle: "iPhone, Android, Unity3D",
    icon: "Gamepad2",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2670&auto=format&fit=crop",
    sequence: {
      step1: { code: "CSC 227", title: "Intro to Game Programming" },
      step2: { code: "CSC 427", title: "Advanced Game Development" },
      step3: {
        optionA: { code: "CSC 480", title: "Artificial Intelligence" },
        optionB: { code: "CSC 470", title: "Computer Graphics" },
      },
    },
  },
  {
    id: "security",
    title: "Networking & Security",
    subtitle: "Cybersecurity, Cryptography & Defense",
    icon: "ShieldCheck",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop",
    sequence: {
      step1: { code: "CSC 223", title: "Computer Hacking Revealed" },
      step2: { code: "CSC 421", title: "Internet Security" },
      step3: {
        optionA: { code: "CSC 435", title: "Adv Data Communications" },
        optionB: { code: "CSC 426", title: "Applied Cryptography" },
      },
    },
  },
  {
    id: "hpc",
    title: "High Performance Computing",
    subtitle: "Supercomputing & Parallel Processing",
    icon: "Cpu",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
    sequence: {
      step1: { code: "CSC 229", title: "Introduction to HPC" },
      step2: { code: "CSC 429", title: "Advanced HPC" },
      step3: {
        optionA: { code: "CSC 425", title: "Shared Memory Parallel Computing" },
        optionB: { code: "MTH 338", title: "Linear Algebra" },
      },
    },
  },
  {
    id: "data-science",
    title: "Data Science",
    subtitle: "Big Data, Analytics & ML",
    icon: "Database",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    description:
      "The Data Science specialization focuses on extracting knowledge from data through statistical analysis and machine learning. Please consult the department flyer or your advisor for the specific course sequence.",
  },
];

// Specialization flyer URL
export const specializationsFlyerUrl =
  "https://www.cs.csi.cuny.edu/content/CSC_Specializations_flyer_updated_SU18.pdf";
