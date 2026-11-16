import DepartmentNewsSection from '@/components/news';
import { AboutSection } from '@/components/home/about-section';
import FeaturedPrograms from '@/components/home/featured-programs';
import CareerOutcomesSection from '@/components/home/career-outcomes';

// --- Main Page Layout ---
export default function CSIDepartmentPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#2d2f31] max-w-8xl mx-auto">
      {/* Top padding clears the fixed navbar, which wraps to two rows below lg */}
      <div className='pt-36 lg:pt-16'>
        {/* Visually hidden H1 for accessibility */}
        <h1 className="sr-only">Department of Computer Science - CUNY College of Staten Island</h1>

        {/* 1. News - Current Happenings */}
        <DepartmentNewsSection />

        {/* 2. Featured Programs */}
        <FeaturedPrograms />

        {/* 3. About - Campus slideshow, ABET, why choose us */}
        <AboutSection />

        {/* 4. Career Outcomes - Graduate stats and employers */}
        <CareerOutcomesSection />
      </div>
    </div>
  );
}
