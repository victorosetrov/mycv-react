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
            href="https://twitter.com/ViktorOsetrov"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.hackerrank.com/profile/victorosetrov"
            target="_blank"
            rel="noopener noreferrer"
          >
            HackerRank
          </a>
          <a
            href="https://github.com/victorosetrov"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
