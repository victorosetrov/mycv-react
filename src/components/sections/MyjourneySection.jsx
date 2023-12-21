// MyjourneySection.jsx

import React from "react";
import "../../styles/MyjourneySection.css"; // Ensure you create and import the corresponding CSS file

const MyjourneySection = () => {
  return (
    <section className="my-journey-section">
      <div className="container">
        <h2 className="new-section-title">
          A Blend of Science, Innovation, and Practical Solutions
        </h2>
        <p>
          My journey began in the academic realm, where I was awarded a grant
          for studying audio-video speech recognition under FASIE, a prestigious
          Russian science fund in 2011. This venture led me to publish over 20
          scientific articles and secure 2 patents in speech recognition
          technology, marking my initial steps as an innovator and researcher.
        </p>
        <p>
          However, my curiosity soon shifted from theoretical pursuits to
          practical problem-solving in the business world, with a special focus
          on coding.
        </p>
      </div>
    </section>
  );
};

export default MyjourneySection;
