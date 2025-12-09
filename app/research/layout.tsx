import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Research - CSI Computer Science',
    description: 'Explore faculty and student research at CSI Computer Science. AI, cybersecurity, data science, and more.',
};

export default function ResearchLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
