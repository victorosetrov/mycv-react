// WebDeveloperProjectsSection.jsx

import React from "react";
import "../../styles/WebDeveloperProjectsSection.css"; // Ensure this path is correct for your project

const projects = [
  {
    title: "Travel App / Bookstore App",
    technologies: "NodeJS, MongoDB, Stripe API, GraphQL, Heroku",
    links: [
      {
        text: "Travel App Link",
        url: "https://floating-waters-24985.herokuapp.com/",
      },
      {
        text: "Travel App Code",
        url: "https://github.com/victorosetrov/natours",
      },
      { text: "Bookstore Link", url: "https://node-mybook.herokuapp.com/" },
    ],
  },
  {
    title: "To-Do List App / Compare Yourself App",
    technologies:
      "React, AWS (EC2, ECS, Cognito, Lambda, API Gateway, IAM, S3, CloudFront), MongoDB, Angular, NodeJS, Docker",
    links: [
      {
        text: "To-Do List Link",
        url: "http://goals-react-lb-824410420.eu-west-1.elb.amazonaws.com/",
      },
      {
        text: "Compare Yourself Link",
        url: "http://d1b9adtxte5ckb.cloudfront.net/",
      },
    ],
  },
  {
    title: "E-commerce App",
    technologies:
      "Braintree SDK, PayPal API, React, MongoDB, NodeJS, Digital Ocean",
    links: [
      { text: "E-commerce App Link", url: "http://161.35.42.71/" },
      {
        text: "Backend Code",
        url: "https://github.com/victorosetrov/ecommerce-backend",
      },
      {
        text: "Frontend Code",
        url: "https://github.com/victorosetrov/ecommerce",
      },
    ],
  },
  {
    title: "Find a Coach App / My Burger App / Recipe Book App",
    technologies: "Vue, React, Angular, Firebase",
    links: [
      {
        text: "Find A Coach Link",
        url: "https://vuejs-coach-project.web.app/coaches",
      },
      { text: "My Burger Link", url: "https://react-my-burger-4ab31.web.app/" },
      {
        text: "Recipe Book Link",
        url: "https://ng-recipe-book-e6065.firebaseapp.com/",
      },
    ],
  },
  // Add other projects as needed
];

const ProjectItem = ({ title, technologies, links }) => {
  return (
    <div className="new-feature-item">
      <h3>{title}</h3>
      <p>{technologies}</p>
      <p>
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
            {index < links.length - 1 ? " / " : ""}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

const WebDeveloperProjectsSection = () => {
  return (
    <div className="new-website-wrapper">
      <h2 className="new-section-title">
        I'm a <strong>Web Developer</strong>
      </h2>
      <div className="new-row-container">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default WebDeveloperProjectsSection;
