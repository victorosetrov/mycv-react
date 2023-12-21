// TestimonialSection.jsx

import React from "react";
import "../../styles/TestimonialSection.css"; // Make sure to create and import the corresponding CSS file

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="grid-3-cols">
        <div className="testimonial-box">
          <h2>My Journey Begins</h2>
          <blockquote className="testimonial-text">
            My academic path started at Mari State University in Russia, where I
            graduated with honors in History. Even back then, my curiosity was
            drawn towards data processing and web development.
          </blockquote>
          <p className="testimonial-author">&mdash; Viktor Osetrov</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
