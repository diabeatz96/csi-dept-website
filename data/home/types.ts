// Home Page Types

export interface CampusPhoto {
  src: string; // Path under public/
  alt: string;
}

export interface DepartmentStat {
  value: string;
  label: string;
  iconName: string; // Key of the icon map in components/home/about-section.tsx
}

export interface HomeLink {
  label: string;
  href: string;
  external?: boolean; // Opens in a new tab
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  titleAccent: string; // Shown in blue after the title
  description: string;
  // ABET has rules on how accreditation is described; check abet.org before rewording.
  // Name only the accredited program (the BS), never "programs" in general.
  abetStatement: string;
  abetHref: string;
  highlights: string[];
  stats: DepartmentStat[];
  primaryCta: HomeLink;
  secondaryCta: HomeLink;
}

export interface CareerOutcomes {
  title: string;
  description: string;
  companiesLabel: string;
  stats: {
    label: string;
    value: string;
  }[];
}
