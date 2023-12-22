// WorkExperienceSection.jsx

import React from "react";
import DonutChart from "./DonutChart";
import {
  BriefcaseIcon,
  CodeIcon,
  CogIcon,
  ServerIcon,
  SupportIcon,
} from "@heroicons/react/outline";
import "../../styles/WorkExperienceSection.css"; // Ensure you create and import the corresponding CSS file

// Mapping the details to specific icons for demonstration
const achievementIcons = {
  "JavaScript, APIs, Integrations": CodeIcon,
  "Technical Support for B2B Clients": SupportIcon,
  "Support for DV360, Google Marketing Platform": ServerIcon,
  "Client Issue Resolution and Data Analytics": CogIcon,
  "Lifecycle Refresh and Updates for PCs": BriefcaseIcon,
  // Add other key achievements and their corresponding icons here as needed
};

const workExperiences = [
  {
    company: "New Exciting Journey [Your New Role]",
    role: "[Your New Role]",
    period: "Jan 2024 – ∞",
    achievements: [
      "[Key Achievement or Focus Area 1]",
      "[Key Achievement or Focus Area 2]",
    ],
  },
  {
    company: "Zendesk",
    role: "Technical Support Engineer",
    period: "May 2021 – Dec 2023",
    achievements: [
      "JavaScript, APIs, Integrations",
      "Technical Support for B2B Clients",
    ],
  },
  {
    company: "Accenture",
    role: "Technical Support Analyst",
    period: "Aug 2019 – April 2021",
    achievements: [
      "Support for DV360, Google Marketing Platform",
      "Client Issue Resolution and Data Analytics",
    ],
  },
  {
    company: "Hewlett Packard",
    role: "IT Roll-up/out Engineer",
    period: "Jun 2019 – Aug 2019",
    achievements: ["Lifecycle Refresh and Updates for PCs"],
  },
  {
    company: "RealSpeaker LTD",
    role: "IT Manager and web-developer",
    period: "Aug 2016 – April 2019",
    achievements: [
      "Managed IT operations and web development",
      "Handled research and client interactions",
    ],
  },
  {
    company: "RealSpeaker Lab",
    role: "IT Manager and software-developer",
    period: "Jan 2012 – Aug 2016",
    achievements: [
      "Played a crucial role from inception, launching a software product",
      "Managed a team of 5 engineers",
    ],
  },
  // Add more experiences as needed
];

const ExperienceCard = ({ company, role, period, achievements }) => (
  <div className="experience-card">
    <div className="experience-content">
      <h3>
        {company} <br /> {role}
      </h3>
      <p>{period}</p>
      <ul className="experience-details">
        {achievements.map((achievement, index) => {
          const Icon = achievementIcons[achievement] || BriefcaseIcon; // Fallback to a default icon
          return (
            <li key={index}>
              <Icon className="achievement-icon" aria-hidden="true" />
              <span>{achievement}</span>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);

const WorkExperienceSection = () => {
  return (
    <section className="work-experience-section">
      <h2 className="new-section-title">Work Experience</h2>
      <div className="grid-3-cols">
        {workExperiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperienceSection;
