import React, { useEffect, lazy, Suspense } from 'react';
import ReactGA from 'react-ga4';

// Lazy load the components
const Header = lazy(() => import('./components/Header'));
const MainIntro = lazy(() => import('./components/MainIntro'));
const Footer = lazy(() => import('./components/Footer'));
const CookieConsent = lazy(() => import('./components/CookieConsent'));

function App () {
  useEffect(() => {
    ReactGA.initialize('G-TCZ8FM15EP');
    ReactGA.send('pageview');
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <main>
        <MainIntro />
      </main>
      <Footer />
      <CookieConsent />
    </Suspense>
  );
}

export default App;
