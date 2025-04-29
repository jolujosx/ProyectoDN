import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsShowcase from './components/ProjectsShowcase';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <ProfileSection />
      <SkillsSection />
      <ExperienceTimeline />
      <ProjectsShowcase />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;

// DONE