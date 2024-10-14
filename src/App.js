import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import MainIntro from './components/MainIntro';
import Footer from './components/Footer';

function App() {
  const [gtmLoaded, setGtmLoaded] = useState(false);

  useEffect(() => {
    // Load GTM after the user scrolls or interacts with the page
    const loadGTM = () => {
      if (!gtmLoaded) {
        const script = document.createElement('script');
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-TCZ8FM15EP";
        script.async = true;
        document.head.appendChild(script);

        const inlineScript = document.createElement('script');
        inlineScript.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-TCZ8FM15EP');
        `;
        document.head.appendChild(inlineScript);

        setGtmLoaded(true);
      }
    };

    // Event listener for user interaction
    window.addEventListener('scroll', loadGTM);
    window.addEventListener('click', loadGTM);

    return () => {
      window.removeEventListener('scroll', loadGTM);
      window.removeEventListener('click', loadGTM);
    };
  }, [gtmLoaded]);

  return (
    <>
      <Header />
      <main>
        <MainIntro />
      </main>
      <Footer />
    </>
  );
}

export default App;
