import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Header from './components/Header';
import MainIntro from './components/MainIntro';
import Footer from './components/Footer';

function App () {
  useEffect(() => {
    // Initialize Google Analytics with your GA4 measurement ID
    ReactGA.initialize('G-TCZ8FM15EP');
    
    // Send initial pageview event
    ReactGA.send('pageview');
  }, []);
  return (
    <>
      <Header />
      <main>
        <MainIntro />
      </main>
      <Footer />
    </>
  );
};

export default App;
