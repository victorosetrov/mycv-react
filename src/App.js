// App.js
import React from 'react';
import './styles/App.css';

// Import header and footer components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Import section components
import ProfessionalTitle from './components/sections/ProfessionalTitle';
import EducationSection from './components/sections/EducationSection';
import TestimonialSection from './components/sections/TestimonialSection';
import MyjourneySection from './components/sections/MyjourneySection';
import DonutChartSection from './components/sections/DonutChartSection';
import WorkExperienceSection from './components/sections/WorkExperienceSection';
import MyProfessionalJourneySection from './components/sections/MyProfessionalJourneySection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import MyProjectsSection from './components/sections/MyProjectsSection';
import WebDeveloperProjectsSection from './components/sections/WebDeveloperProjectsSection';
import QuizAboutMe from './components/sections/QuizAboutMe';
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
  },
  {
    label: "Intellync (AB Agri) - Senior Support Engineer",
    value: 6,
    color: "#9370db"
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent chartData={chartData}/>
      <Footer />
    </div>
  );
}

function MainContent({ chartData }) {
  return (
    <main>
      <ProfessionalTitle />
      <EducationSection />
      <TestimonialSection />
      <MyjourneySection />
      <DonutChartSection data={chartData} />
      <WorkExperienceSection />
      <MyProfessionalJourneySection />
      <TestimonialsSection />
      <MyProjectsSection />
      <WebDeveloperProjectsSection />
      <AchievementsTimeline />
      <QuizAboutMe />
    </main>
  );
}

export default App;
