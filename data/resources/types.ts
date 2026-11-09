// Resource Types

export type ResourceSectionId =
  | "advising"
  | "degree"
  | "calendar"
  | "tutoring"
  | "careers"
  | "community"
  | "support";

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
  ctaLabel?: string;
  starred?: boolean; // Shows a gold star on each side of the title on featured career cards
}

export interface ResourceLink extends ResourceItem {
  href: string;
}

export interface FeaturedCareerLink extends ResourceLink {
  image?: string; // Logo path under public/; replaces the icon when set
}

export interface CareerLink extends ResourceLink {
  image: string; // Path under public/ or a URL on a host allowed in next.config.ts
}

// `href` is the club's CSI Connect page; the link is hidden until it's set
export interface Club extends ResourceItem {
  meetingTime: string;
  location: string;
  email?: string; // Membership contact
  image?: string; // Logo or photo under public/; replaces the icon when set
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
