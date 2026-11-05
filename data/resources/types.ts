// Resource Types

export type ResourceSectionId =
  | "advising"
  | "degree"
  | "calendar"
  | "tutoring"
  | "careers"
  | "community"
  | "contacts";

export interface ResourcesIntro {
  eyebrow: string;
  title: string;
  description: string;
}

export interface ResourceSection {
  id: ResourceSectionId;
  eyebrow: string;
  title: string;
  description?: string;
  // Quick-link tile for this section at the top of the page
  tile: {
    label: string;
    subtitle: string;
    iconName: string; // Key of the icon map in components/resources/resource-icon.tsx
  };
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  href?: string; // Leave out until the real URL is known; the item renders without a link
  iconName?: string; // Key of the icon map in components/resources/resource-icon.tsx
  image?: string; // Path under public/
  ctaLabel?: string;
}

export interface ResourceLink extends ResourceItem {
  href: string;
}

export interface TutoringLab extends ResourceLink {
  room: string;
  secondaryLink: {
    label: string;
    href: string;
  };
}

export interface ResourceContact {
  role: string;
  name: string;
  title: string;
  email: string;
  emailHref: string;
  office?: string;
  phone?: string;
  phoneHref?: string;
}

export interface ResourceAdvisor extends ResourceContact {
  description: string;
  linkedinHref: string;
  ctaLabel: string;
  image?: string; // Path under public/; initials are shown when left out
}
