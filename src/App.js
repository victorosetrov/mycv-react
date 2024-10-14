import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Header from './components/Header';
import MainIntro from './components/MainIntro';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

function App () {
  useEffect(() => {
    ReactGA.initialize('G-TCZ8FM15EP');
    ReactGA.send('pageview');
  }, []);

  return (
    <>
      <Header />
      <main>
        <MainIntro />
      </main>
      <Footer />
      <CookieConsent /> {/* Add the CookieConsent component here */}
    </>
  );
}

export default App;
