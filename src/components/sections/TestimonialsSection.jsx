// TestimonialsSection.jsx

import React from "react";
import {
  StarIcon,
  BadgeCheckIcon,
  LightBulbIcon,
} from "@heroicons/react/outline"; // Import different icons
import "../../styles/TestimonialsSection.css"; // Ensure this path is correct for your project

// Mapping the details to specific icons for demonstration
const testimonialIcons = {
  Zendesk: StarIcon,
  "DV360 / Google": BadgeCheckIcon,
  Python: LightBulbIcon,
};

const TestimonialCard = ({ company, title, testimonial }) => {
  const Icon = testimonialIcons[company] || StarIcon; // Fallback to a default icon
  return (
    <div className="testimonial-card">
      <Icon className="detail-icon" aria-hidden="true" />
      <h3>{company}</h3>
      <h4>{title}</h4>
      <p>{testimonial}</p>
    </div>
  );
};

const testimonialsData = [
  {
    company: "Zendesk",
    title: "The Highest CSAT in EMEA - 2022",
    testimonial:
      "Leading the way with a stellar 98.2% CSAT score, my journey at Zendesk has been about mastering the art of B2B client issue resolution. As a subject matter expert in chatbots and Explore Analytics, I've transformed challenges into triumphs, ensuring seamless integration in omnichannel ticketing CRM systems.",
  },
  {
    company: "DV360 / Google",
    title: "The Best Performer Q4'20 - Contractor via Accenture",
    testimonial:
      "Analysis of web advertisement data, working with B2B clients for tech troubleshooting. Extensive knowledge in online advertisement, API structures, programming, math, statistics, and data visualization.",
  },
  {
    company: "Python",
    title: 'My Path from Excel to Python via "R Studio"',
    testimonial:
      'Transition from MS Excel to "R Studio" and Python for data analytics. Proficient in NumPy, SciPy, MatPlotLib, Plotly, with a focus on community collaboration in data science.',
  },
  // Add more testimonials as needed
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">
        I'm a <strong>Tech Support Analyst</strong>
      </h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimony, index) => (
          <TestimonialCard key={index} {...testimony} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
