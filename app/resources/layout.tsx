import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Student Resources - CSI Computer Science',
    description: 'Access academic resources, tutoring, advisement, and support services for computer science students at CSI.',
};

export default function ResourcesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
