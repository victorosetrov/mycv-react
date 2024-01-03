// Modal.jsx
import React from "react";
import "../../styles/Modal.css"; // Ensure this path is correct

function Modal({ closeModal }) {
  return (
    <div>
      <div className="modal">
        <button className="close-modal" onClick={closeModal}>
          &times;
        </button>
        <h1>Get in Touch</h1>
        <p>
          Thanks for taking the time to reach out. How can I help you today?
        </p>

        {/* Social Links */}
        <div className="social-links">
          <a
            href="https://twitter.com/ViktorOsetrov" // Replace with your Twitter profile
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://github.com/victorosetrov" // Replace with your GitHub profile
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.hackerrank.com/victorosetrov" // Replace with your HackerRank profile
            target="_blank"
            rel="noopener noreferrer"
          >
            HackerRank
          </a>
          <a
            href="https://www.linkedin.com/in/realspeaker" // Replace with your LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="overlay" onClick={closeModal}></div>
    </div>
  );
}

export default Modal;
