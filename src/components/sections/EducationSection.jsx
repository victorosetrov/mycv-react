// EducationSection.jsx

import React from "react";
import {
  AcademicCapIcon,
  LightBulbIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import "../../styles/EducationSection.css"; // Ensure this path is correct for your project

// Mapping the details to specific icons for demonstration
const detailIcons = {
  "Web Development": AcademicCapIcon,
  Databases: LightBulbIcon,
  "Innovative Thinking": LightBulbIcon,
  Leadership: UserGroupIcon,
  History: AcademicCapIcon,
  "Academic Excellence": UserGroupIcon,
};

const EducationCard = ({ institution, degree, year, details = [] }) => {
  return (
    <div className="education-card">
      <h3>{institution}</h3>
      <p>{degree}</p>
      <p>{year}</p>
      <ul>
        {details.map((detail, index) => {
          const Icon = detailIcons[detail] || AcademicCapIcon; // Fallback to a default icon
          return (
            <li key={index}>
              <Icon className="detail-icon" aria-hidden="true" />
              <span>{detail}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const educationData = [
  {
    institution: "National College of Ireland",
    degree: "Computer Science",
    year: "2022-2023",
    details: ["Web Development", "Databases"],
  },
  {
    institution: "Draper University of Heroes",
    degree: "Entrepreneurship",
    year: "2016",
    details: ["Innovative Thinking", "Leadership"],
  },
  {
    institution: "Mari State University",
    degree: "Historian",
    year: "2005-2011",
    details: ["History", "Academic Excellence"],
  },
];

const EducationSection = () => {
  return (
    <section className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
