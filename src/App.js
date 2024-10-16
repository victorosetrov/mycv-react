import React, { useEffect, lazy, Suspense } from 'react';
import ReactGA from 'react-ga4';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <main>
          <Routes>
            {/* Main Page Route */}
            <Route path="/" element={<MainIntro />} />

            {/* Privacy Policy Route and Terms of Use */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
            <Route path="/terms-of-use" element={<TermsOfUse />} />

            {/* Catch-all route for 404 */}
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
