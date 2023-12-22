// AchievementsSection.jsx

import React from "react";
import "../../styles/AchievementsSection.css"; // Ensure this path is correct for your project

const achievements = [
  {
    year: 2014,
    text: "Winner, Startup Sauna Spring Batch – Helsinki, Finland",
  },
  {
    year: 2015,
    text: "3rd Place, 11th Generation Demo Day – Startup Chile, Santiago, Chile",
  },
  { year: 2016, text: "Selected Company, StartupBootcamp – Barcelona, Spain" },
  { year: 2016, text: "Finalist, K-Startup Grand Challenge – Seoul, S. Korea" },
  { year: 2017, text: "Selected Team, French Tech Ticket – Paris, France" },
  {
    year: 2017,
    text: "Acceleration Program Participant, NDRC Portershed – Galway, Ireland",
  },
  { year: 2019, text: "Awarded best KPI for Q4 2019 – Google DV360" },
  { year: 2022, text: "The highest CSAT in EMEA in 2022 (98.2%) - Zendesk" },
  // Add more achievements as needed
];

const AchievementsSection = () => {
  return (
    <section className="professional-achievements">
      <div className="container">
        <h2 className="new-section-title">My Achievements</h2>
        <ul className="achievements-list">
          {achievements.map((achievement, index) => (
            <li key={index} className="achievement-item">
              <span className="achievement-year">{achievement.year}</span>:{" "}
              {achievement.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AchievementsSection;
