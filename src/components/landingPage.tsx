import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import TalentCategories from './TalentCategories';
import WhyDifferent from './WhyDifferent';
import KeyBenefits from './KeyBenefits';
import CallToAction from './CallToAction';
import Footer from './Footer';

// Define the type for the LandingPage component (React.FC is used for functional components)
const LandingPage: React.FC = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <TalentCategories />
            <WhyDifferent />
            <KeyBenefits />
            <CallToAction />
            <Footer />
        </>
    );
};

export default LandingPage;

/*
Landing Page Structure:
1. Header - Logo and Navigation Links
2. Hero Section - Main headline, subheading, CTA button, background image
3. Talent Categories - List of talent categories with ratings
4. Why Different - Highlighting unique features
5. Key Benefits - Showcase of primary benefits
6. Call to Action - Final push to create an account
7. Footer - Additional navigation links and company info
*/