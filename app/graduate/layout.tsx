import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Graduate Programs - CSI Computer Science',
    description: 'Advance your career with graduate computer science programs at CSI. Master\'s degree, PhD program, and specialization tracks.',
};

export default function GraduateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
