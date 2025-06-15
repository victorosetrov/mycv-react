import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faSquareYoutube, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-indigo-purple text-white py-6">
      <div className="container mx-auto text-center px-4">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://x.com/ViktorOsetrov" target="_blank" rel="noopener noreferrer" aria-label="X Twitter" className="text-[#B3C7FF]">
            <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6 hover:scale-110 transform transition-transform" />
          </a>
          <a href="https://www.youtube.com/@RealSpeakerTV" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-[#B3C7FF]">
            <FontAwesomeIcon icon={faSquareYoutube} className="w-6 h-6 hover:scale-110 transform transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/realspeaker/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#B3C7FF]">
            <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6 hover:scale-110 transform transition-transform" />
          </a>
          <a href="https://www.instagram.com/viktorosetrov/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#B3C7FF]">
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 hover:scale-110 transform transition-transform" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-[#B3C7FF] text-sm sm:text-base">
          © 2025 Viktor Osetrov. All rights reserved.
        </p>
        <p className="text-[#B3C7FF] text-sm sm:text-base">
          Made with <a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer" className="text-[#B3C7FF] underline hover:text-gray-400">
            Chart.js
          </a>
        </p>

        {/* Privacy Policy and Terms Links with Icons */}
        <div className="mt-2 flex justify-center space-x-4">
          <Link to="/privacy-policy" className="text-[#B3C7FF] flex items-center space-x-2 no-underline">
            {/* Privacy Policy Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B3C7FF" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
            </svg>
            <span>Privacy Policy</span>
          </Link>
          <Link to="/terms-of-use" className="text-[#B3C7FF] flex items-center space-x-2 no-underline">
            {/* Terms of Use Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B3C7FF" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            <span>Terms of Use</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
