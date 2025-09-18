import React from 'react';
import NavbarDue from './components/NavbarDue';
import AboutSection from './components/AboutSection';
import StatsBar from './components/StatsBar';

const AboutPage = () => {
    return (
        <div>
            <NavbarDue />
            <div className="about-page">
                <AboutSection />
                <StatsBar />

                
            </div>
        </div>
    );
};

export default AboutPage;