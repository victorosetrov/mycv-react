import React from "react";
import "../../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        {/* Add your footer content here */}
        <p>
          Copyright © 2024 by Viktor Osetrov. Thank you for the time reviewing
          my Curriculum Vitae. If needed I am more than happy to provide
          references upon request.
        </p>

        {/* Social Media Links or other links */}
        <div className="social-links">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          {/* Add other social media links */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
