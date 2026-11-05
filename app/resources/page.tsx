import ResourcesHero from '@/components/resources/resources-hero';
import AdvisingSection from '@/components/resources/advising-section';
import DegreeSection from '@/components/resources/degree-section';
import CalendarSection from '@/components/resources/calendar-section';
import TutoringSection from '@/components/resources/tutoring-section';
import CareersSection from '@/components/resources/careers-section';
import CommunitySection from '@/components/resources/community-section';
import ContactsSection from '@/components/resources/contacts-section';

export default function StudentResources() {
    return (
        // Top padding clears the fixed navbar, which wraps to more rows below lg
        <div className="bg-white pt-32 lg:pt-18">
            {/* Visually hidden H1 for accessibility */}
            <h1 className="sr-only">Student Resources - CSI Computer Science</h1>

            <ResourcesHero />
            <AdvisingSection />
            <DegreeSection />
            <CalendarSection />
            <TutoringSection />
            <CareersSection />
            <CommunitySection />
            <ContactsSection />
        </div>
    );
}
