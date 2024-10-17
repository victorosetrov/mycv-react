import React, { useEffect, lazy, Suspense } from 'react';
import ReactGA from 'react-ga4';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner'; // Import the spinner component

// Lazy load the components
const Header = lazy(() => import('./components/Header'));
const MainIntro = lazy(() => import('./components/MainIntro'));
const Footer = lazy(() => import('./components/Footer'));
const CookieConsent = lazy(() => import('./components/CookieConsent'));
const NotFound = lazy(() => import('./components/NotFound'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./components/TermsOfUse'));

function App() {
  useEffect(() => {
    ReactGA.initialize('G-TCZ8FM15EP');
    ReactGA.send('pageview');
  }, []);

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainIntro />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </Suspense>
    </Router>
  );
}

export default App;
