// In Header.js
import React from "react";
import "../../styles/Header.css";

function Header() {
  return (
    <header>
      {/* Navigation */}
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">#OpenToWork</span>
      </nav>

      {/* Header Content */}
      <div className="header-text-box">
        <h1>Hey, I'm Viktor</h1>
        <h2>Senior Full Stack Software Engineer ❤️❤️❤️</h2>
        <p className="header-text">
          Explore my 12-year IT adventure, where I've grown between tech
          start-ups and corporates. Skilled in DevOps, Tech Analysis and Support
          Engineering. <br />
          With notable experience working for RealSpeaker, Google via Accenture,
          and recently, Zendesk.
        </p>

        {/* Form (simplified for React) */}
        <form className="form-inline">
          <p className="features-text">
            Please enter your Email address:
            <br />
            <input className="form-control mr-sm-2" type="text" id="myEmail" />
          </p>
          <button
            type="button"
            className="btn btn-outline-success btn-lg"
            onClick={() => alert("Functionality to be implemented")}
          >
            Get in touch with me for more information
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
