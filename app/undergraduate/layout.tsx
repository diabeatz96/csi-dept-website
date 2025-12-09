import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Undergraduate Programs - CSI Computer Science',
    description: 'Explore ABET-accredited undergraduate computer science programs at CUNY College of Staten Island. Offering BS in Computer Science, AAS in Computer Technology, BS in Information Systems and Informatics, specializations in game development, cybersecurity, and data science, plus minors and career resources.',
};

export default function UndergraduateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
