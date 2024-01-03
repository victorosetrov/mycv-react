// Header.jsx
import React, { useState } from "react";
import "../../styles/Header.css"; // Ensure this path is correct to your Header.css file
import Modal from "./Modal"; // Ensure this path is correct to your Modal component

function Header() {
  // State to control the visibility of the modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to handle the button click and show the modal
  const handleButtonClick = () => {
    setIsModalVisible(true);
  };

  return (
    <header>
      {/* Navigation Bar */}
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">#OpenToWork</span>
      </nav>

      {/* Header Content */}
      <div className="header-text-box">
        <h1>Hey, I'm Viktor</h1>
        <h2>Senior Full Stack Software Engineer ❤️</h2>
        <p className="header-text">
          Explore my 12-year IT adventure, where I've grown between tech
          start-ups and corporates. Skilled in DevOps, Tech Analysis and Support
          Engineering. <br />
          With notable experience working for RealSpeaker, Google via Accenture,
          and recently, Zendesk.
        </p>

        {/* Button to Open Modal */}
        <button
          type="button"
          className="btn btn-outline-success btn-lg"
          onClick={handleButtonClick}
        >
          Get in touch with me for more information
        </button>
      </div>

      {/* Conditional rendering of Modal Component */}
      {isModalVisible && <Modal closeModal={() => setIsModalVisible(false)} />}
    </header>
  );
}

export default Header;
