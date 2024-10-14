import React, { useState, useEffect } from 'react';

// CSS styles for the banner (optional)
const bannerStyle = {
  position: 'fixed',
  bottom: '0',
  left: '0',
  width: '100%',
  backgroundColor: '#1a1a2e', // Dark background for dark mode
  color: '#fff',
  padding: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: '999',
  boxShadow: '0px -2px 10px rgba(0,0,0,0.3)',
};

const buttonStyle = {
  backgroundColor: '#ffd700', // Gold button
  color: '#000',
  border: 'none',
  padding: '10px 20px',
  fontSize: '14px',
  borderRadius: '5px',
  cursor: 'pointer',
};

const linkStyle = {
  color: '#b3c7ff', // Light blue for links in dark mode
  textDecoration: 'underline',
};

const CookieConsent = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  // Check if the user has already accepted cookies
  useEffect(() => {
    const isAccepted = localStorage.getItem('cookieConsent');
    if (!isAccepted) {
      setIsBannerVisible(true);
    }
  }, []);

  // Handle cookie consent
  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true'); // Store consent in localStorage
    setIsBannerVisible(false); // Hide banner after acceptance
  };

  if (!isBannerVisible) {
    return null; // Don't render the component if the banner isn't visible
  }

  return (
    <div style={bannerStyle}>
      <p style={{ margin: '0', fontSize: '14px' }}>
        By using our website, you agree to our{' '}
        <a href="/privacy-policy" style={linkStyle}>Policy</a> and{' '}
        <a href="/terms-of-use" style={linkStyle}>Terms</a>.
      </p>
      <button style={buttonStyle} onClick={acceptCookies}>
        Accept and close
      </button>
    </div>
  );
};

export default CookieConsent;
