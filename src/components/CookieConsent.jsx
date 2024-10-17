import React, { useState, useEffect } from 'react';

// Unique button style for this component
const buttonStyle = {
  backgroundColor: '#ffd700', // Gold button
  color: '#000',
  border: 'none',
  padding: '10px 20px',
  fontSize: '14px',
  borderRadius: '5px',
  cursor: 'pointer',
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
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4 px-6 flex justify-between items-center z-50 shadow-lg">
      <p className="text-sm leading-relaxed text-white"> {/* Ensure the text is always white */}
        By using our website, you agree to our{' '}
        <a href="/privacy-policy" className="text-blue-300 underline">Privacy Policy</a> and{' '}
        <a href="/terms-of-use" className="text-blue-300 underline">Terms of Use</a>.
      </p>
      <button style={buttonStyle} onClick={acceptCookies}>
        Accept and close
      </button>
    </div>
  );
};

export default CookieConsent;
