import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// Import your components
import Header from './components/header/Header'; // Adjust if you have a specific file for Header
import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation';
import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import './styles/App.css'; // If you have a general stylesheet


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />

        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<ContactSection />} />
          {/* Add more <Route> for other sections as needed */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;


