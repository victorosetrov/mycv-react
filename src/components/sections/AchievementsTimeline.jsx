// AchievementsTimeline.jsx

import React from "react";
import "../../styles/AchievementsTimeline.css"; // Ensure this path is correct for your project

const achievementsData = [
  {
    year: 2014,
    description: "Winner, Startup Sauna Spring Batch – Helsinki, Finland",
  },
  {
    year: 2015,
    description:
      "3rd Place, 11th Generation Demo Day – Startup Chile, Santiago, Chile",
  },
  {
    year: 2016,
    description: "Selected Company, StartupBootcamp – Barcelona, Spain",
  },
  {
    year: 2016,
    description: "Finalist, K-Startup Grand Challenge – Seoul, S. Korea",
  },
  {
    year: 2017,
    description: "Selected Team, French Tech Ticket – Paris, France",
  },
  {
    year: 2017,
    description:
      "Acceleration Program Participant, NDRC Portershed – Galway, Ireland",
  },
  { year: 2019, description: "Awarded best KPI for Q4 – Google DV360" },
  { year: 2022, description: "The highest CSAT in EMEA (98.2%) - Zendesk" },
  // Add more achievements as needed
];

const AchievementsTimeline = () => {
  return (
    <section className="professional-achievements">
      <div className="container">
        <h2 className="new-section-title">My Achievements</h2>
        <ul className="achievements-list">
          {achievementsData.map((achievement, index) => (
            <li key={index} className="achievement-item">
              <span className="achievement-year">{achievement.year}</span>
              <span className="achievement-description">
                {achievement.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AchievementsTimeline;
