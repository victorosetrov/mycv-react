// MyProjectsSection.jsx

import React from "react";
import "../../styles/MyProjectsSection.css"; // Ensure you create and import the corresponding CSS file

const MyProjectsSection = () => {
  return (
    <section className="my-projects-section">
      <div className="container">
        <div>
          <h2 className="new-section-title">Exploring Creative Horizons</h2>
        </div>

        <p>
          Alongside my professional journey, I have been at the helm of
          RealSpeaker, a venture that's as challenging as it is rewarding. My
          role here transcends the conventional, blending creativity with
          technical expertise. This endeavor, along with several other projects,
          showcases my versatility. Some projects were born out of sheer
          curiosity and fun, while others were designed to solve specific
          business problems.
        </p>
        <p>
          Each project in my portfolio is a unique story of innovation and
          problem-solving. I invite you to view my portfolio to get a glimpse
          into the diverse range of projects that I have nurtured, each
          reflecting a facet of my professional expertise and personal passion.
        </p>
      </div>
    </section>
  );
};

export default MyProjectsSection;
