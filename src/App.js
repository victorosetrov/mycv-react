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
import MyProfessionalJourneySection from './components/sections/MyProfessionalJourneySection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import MyProjectsSection from './components/sections/MyProjectsSection';
import WebDeveloperProjectsSection from './components/sections/WebDeveloperProjectsSection';
import QuizAboutMe from './components/sections/QuizAboutMe';

// Import the new DonutChartSection
import DonutChartSection from './components/sections/DonutChartSection'; // Adjust the path as needed
import AchievementsTimeline from './components/sections/AchievementsTimeline';

// Dummy data for the Donut Chart, replace with your actual data
const chartData = [
  {
    label: "Zendesk - Technical Support Engineer",
    value: 31,
    color: "#f76c6c"
  },
  {
    label: "Accenture - Technical Support Analyst",
    value: 20,
    color: "#1bc98e"
  },
  {
    label: "Hewlett Packard - IT Roll-up/out Engineer",
    value: 2,
    color: "#5bc0de"
  },
  {
    label: "RealSpeaker LTD - IT Manager and web-developer",
    value: 32,
    color: "#f0ad4e"
  },
  {
    label: "RealSpeaker Lab - IT Manager and software-developer",
    value: 55,
    color: "#d9534f"
  }
];



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
        <DonutChartSection data={chartData} /> {/* Add the DonutChartSection here */}
        <WorkExperienceSection />
        <MyProfessionalJourneySection/>
        <TestimonialsSection/>
        <MyProjectsSection/>
        <WebDeveloperProjectsSection/>
        <AchievementsTimeline/>
        <QuizAboutMe/>
        
        {/* <AboutSection />
        <ContactSection /> */}
        {/* Add more sections as needed */}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
