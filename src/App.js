import React from 'react';
import './styles/App.css'; // If you have a general stylesheet

// Import your components
import Header from './components/header/Header'; // Adjust if you have a specific file for Header
import Footer from './components/footer/Footer';
import HomeSection from './components/sections/HomeSection';
import ProfessionalTitle from './components/sections/ProfessionalTitle';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import EducationSection from './components/sections/EducationSection';
import TestimonialSection from './components/sections/TestimonialSection';
import MyjourneySection from './components/sections/MyjourneySection';
import WorkExperienceSection from './components/sections/WorkExperienceSection';

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* Main Page Content */}
      <main>
        {/* <HomeSection /> */}
        <ProfessionalTitle />
        <EducationSection />
        <TestimonialSection />
        <MyjourneySection />
        <WorkExperienceSection />
        {/* <AboutSection />
        <ContactSection /> */}
        {/* Add more sections as needed */}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
