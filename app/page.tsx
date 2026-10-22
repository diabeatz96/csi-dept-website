import HeroSection from '@/components/home/hero-section';
import FeaturedPrograms from '@/components/home/featured-programs';
import { AboutSection } from '@/components/home/about-section';
import WhyChooseUsSection from '@/components/home/why-choose-us';
import DepartmentNewsSection from '@/components/news';

// --- Main Page Layout ---
export default function CSIDepartmentPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#2d2f31] max-w-8xl mx-auto">
      <div className='pt-20 md:pt-24'>
        {/* 1. Hero - First Impression */}
        <HeroSection />

        {/* 2. Featured Programs - Most Important for Prospective Students */}
        <FeaturedPrograms />

        {/* 3. About Section - Department Overview */}
        <AboutSection />

        {/* 4. Why Choose Us - Value Proposition */}
        <WhyChooseUsSection />



        {/* 5. News - Current Happenings */}
        <DepartmentNewsSection />
      </div>
    </div>
  );
}
