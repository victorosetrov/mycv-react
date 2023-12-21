// ProfessionalTitle.jsx

import React from "react";
import "../../styles/ProfessionalTitle.css"; // Importing the CSS file

const ProfessionalTitle = () => {
  return (
    <section className="professional-title">
      <div className="container">
        <h2>Behind The Scenes</h2>
        <p>
          This website is a showcase of my skills, powered by{" "}
          <strong>JavaScript, HTML5, CSS3 and React</strong>.
        </p>
        <p>
          Additionally, I have a keen interest in{" "}
          <strong>Math and Big Data</strong>, which plays a significant role in
          my work.
        </p>
      </div>
    </section>
  );
};

export default ProfessionalTitle;
