import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Faculty & Staff - CSI Computer Science',
    description: 'Meet the professors and staff of the Computer Science Department at the College of Staten Island. View contact information and research areas.',
};

export default function PeopleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
