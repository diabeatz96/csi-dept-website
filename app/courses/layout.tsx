import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Course Catalog - CSI Computer Science',
    description: 'Browse undergraduate and graduate computer science courses at the College of Staten Island. Search by course code, name, or level.',
};

export default function CoursesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
