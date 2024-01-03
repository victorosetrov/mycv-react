// WebDeveloperProjectsSection.jsx

import React from "react";
import "../../styles/WebDeveloperProjectsSection.css"; // Ensure this path is correct for your project

const projects = [
  {
    title:
      "RealtorApp / ShopApp / 123App / Bootstrap / 99Bottles / Diary / ToponymicsApp / NewsWorthyApp",
    technologies:
      "NodeJS, MongoDB, Stripe API, GraphQL, Heroku, HTML5, CSS3, JavaScript, SCSS, Bootstrap, MERN, ReactJS, ExpressJS, APIs",
    links: [
      {
        text: "RealtorApp",
        url: "https://victorosetrov.github.io/nexter/",
      },
      {
        text: "ShopApp",
        url: "https://victorosetrov.github.io/dublinchairs/",
      },
      {
        text: "123App",
        url: "https://victorosetrov.github.io/rock-paper-scissors/",
      },
      {
        text: "Bootstrap",
        url: "https://victorosetrov.github.io/CV/",
      },
      {
        text: "99Bottles",
        url: "https://victorosetrov.github.io/99bottles/",
      },
      {
        text: "Diary",
        url: "https://victorosetrov.github.io/SubjectAndScore/",
      },
      {
        text: "ToponymicsApp",
        url: "https://drive.google.com/file/d/1iOu-K7ZONSZvsYDFcpnR4rzUnS_kEl17/view?usp=sharing",
      },
      {
        text: "NewsWorthyApp",
        url: "https://drive.google.com/file/d/1ieMFkKhjBAKAG1EmF_1RDtewp61IBNt_/view?usp=sharing",
      },
    ],
  },
  {
    title:
      "To-DoList / CompareYourself / WeatherScrapper / ForkApp / TravelApp",
    technologies:
      "ReactJS, AWS (EC2, ECS, Cognito, Lambda, API Gateway, IAM, S3, CloudFront, Cloud9), MongoDB, AngularJS, NodeJS, Docker, PHP, MySQL, API, HTML5, CSS3, JavaScript, Netlify",
    links: [
      {
        text: "To-DoList",
        url: "http://goals-react-lb-824410420.eu-west-1.elb.amazonaws.com/",
      },
      {
        text: "CompareYourself",
        url: "http://d1b9adtxte5ckb.cloudfront.net/",
      },
      {
        text: "WeatherScrapper",
        url: "https://victorosetrov.github.io/weather-scraper-php-api-app/",
      },
      {
        text: "ForkApp",
        url: "https://stupefied-bardeen-87446e.netlify.app/",
      },
      {
        text: "TravelApp",
        url: "https://victorosetrov.github.io/travelapp/",
      },
    ],
  },
  {
    title: "E-commerceApp / BankApp / MapApp / LoginLogout",
    technologies:
      "Braintree SDK, PayPal API, ReactJS, MongoDB, NodeJS, Digital Ocean, HTML5, CSS3, JavaScript, Blockchain, Geo API, PHP, MySQL",
    links: [
      { text: "E-commerce App Link", url: "http://161.35.42.71/" },
      {
        text: "Backend Code",
        url: "https://github.com/victorosetrov/ecommerce-backend",
      },
      {
        text: "Frontend Code",
        url: "https://victorosetrov.github.io/ecommerce/",
      },
      {
        text: "BankApp Core",
        url: "https://victorosetrov.github.io/bank-app/",
      },
      {
        text: "BankApp Frontend",
        url: "https://victorosetrov.github.io/bank-lp/",
      },
      {
        text: "MapApp",
        url: "https://victorosetrov.github.io/mapapp/",
      },
      {
        text: "LoginLogout",
        url: "https://victorosetrov.github.io/signup-login-logout-php-mysql-page/",
      },
    ],
  },
  {
    title: "FindACoach / MyBurger / RecipeBook / PigGame / GuessMyNumber",
    technologies:
      "VueJS, ReactJS, AngularJS, Firebase, HTML5, CSS3, JavaScript",
    links: [
      {
        text: "FindACoach",
        url: "https://vuejs-coach-project.web.app/coaches",
      },
      { text: "MyBurger", url: "https://react-my-burger-4ab31.web.app/" },
      {
        text: "RecipeBook",
        url: "https://ng-recipe-book-e6065.firebaseapp.com/",
      },
      {
        text: "PigGame",
        url: "https://victorosetrov.github.io/pig-game/",
      },
      {
        text: "GuessMyNumber",
        url: "https://victorosetrov.github.io/guess-my-number/",
      },
    ],
  },
  {
    title: "BookingApp / ShowModal / DonutChart / JobChart / FitnessChart",
    technologies:
      "NodeJS, ExpressJS, MongoDB, Mongoose, HTML5, CSS3, JavaScript, D3JS, SCSS, APIs",
    links: [
      {
        text: "BookingApp",
        url: "https://victorosetrov.github.io/trillo/",
      },
      {
        text: "ShowModal",
        url: "https://victorosetrov.github.io/show-modal/",
      },
      {
        text: "DonutChart",
        url: "https://victorosetrov.github.io/donutchart/",
      },
      {
        text: "JobChart",
        url: "https://victorosetrov.github.io/jobchart/",
      },
      {
        text: "FitnessChart",
        url: "https://victorosetrov.github.io/fitnesschart/",
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
