import React, { useEffect, Suspense } from 'react';
import ReactGA from 'react-ga4';

// Lazy load components
const Header = React.lazy(() => import('./components/Header'));
const MainIntro = React.lazy(() => import('./components/MainIntro'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
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
    </Suspense>
  );
}

export default App;
