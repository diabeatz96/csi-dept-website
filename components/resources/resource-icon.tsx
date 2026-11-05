import {
  Accessibility,
  BookMarked,
  BookOpen,
  BookOpenCheck,
  Briefcase,
  CalendarDays,
  FileText,
  GitFork,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  ListChecks,
  Map,
  Monitor,
  Phone,
  School,
  Search,
  Users,
  Wallet,
  type LucideIcon,
  type LucideProps,
} from 'lucide-react';

// Map icon names used in data/resources to Lucide components
const iconMap: Record<string, LucideIcon> = {
  Accessibility,
  BookMarked,
  BookOpen,
  BookOpenCheck,
  Briefcase,
  CalendarDays,
  FileText,
  GitFork,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  ListChecks,
  Map,
  Monitor,
  Phone,
  School,
  Search,
  Users,
  Wallet,
};

export default function ResourceIcon({ name, ...props }: LucideProps & { name?: string }) {
  const Icon = (name && iconMap[name]) || BookOpen;
  return <Icon aria-hidden="true" {...props} />;
}
