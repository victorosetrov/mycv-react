import React from "react";
import "../../styles/AboutSection.css";

function AboutSection() {
  return (
    <section className="about">
      <h2>About Us</h2>
      <p>
        We are a dedicated team committed to providing the best services in our
        industry. Our journey began in [Year], and since then, we have been
        relentlessly pursuing excellence in all our endeavors.
      </p>

      {/* Add more content here as needed */}
      <div className="mission">
        <h3>Our Mission</h3>
        <p>
          To deliver outstanding solutions and services that provide significant
          value to our clients and community. We strive to innovate and lead
          with integrity and passion.
        </p>
      </div>

      <div className="team">
        <h3>Meet the Team</h3>
        {/* Add team members here */}
        <ul>
          <li>Jane Doe - CEO</li>
          <li>John Smith - CTO</li>
          {/* ... other team members */}
        </ul>
      </div>
    </section>
  );
}

export default AboutSection;
