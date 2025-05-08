import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import TalentCategories from './TalentCategories';
import WhyDifferent from './WhyDifferent';
import KeyBenefits from './KeyBenefits';
import CallToAction from './CallToAction';
import Footer from './Footer';

const LandingPage: React.FC = () => {
    return (
        <div className="font-sans">
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.2/dist/tailwind.min.css" rel="stylesheet"></link>
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <HeroSection />

            {/* Talent Categories */}
            <section className="py-16 bg-gray-50">
                <TalentCategories />
            </section>

            {/* Why Different */}
            <section className="py-16 bg-white">
                <WhyDifferent />
            </section>

            {/* Key Benefits */}
            <section className="py-16 bg-gray-50">
                <KeyBenefits />
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-blue-600 text-white">
                <CallToAction />
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default LandingPage;