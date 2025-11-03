import React, { lazy, Suspense } from 'react';

const DonutChartSection = lazy(() => import('./DonutChartSection'));
const EmailSubscription = lazy(() => import('./EmailSubscription'));

const chartData = [
  { label: "Intellync (AB Agri) - Senior Support Engineer", value: 19, color: "#9370db" },
  { label: "Zendesk - Technical Support Engineer", value: 31, color: "#f76c6c" },
  { label: "Google - Technical Support Analyst", value: 20, color: "#1bc98e" },
  { label: "Hewlett Packard - IT Roll-up/out Engineer", value: 2, color: "#5bc0de" },
  { label: "RealSpeaker LTD - IT Manager and web-developer", value: 32, color: "#f0ad4e" },
  { label: "RealSpeaker Lab - IT Manager and software-developer", value: 55, color: "#d9534f" },
];

const MainIntro = ({ isDarkMode }) => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-8 px-6 pt-4 pb-8 lg:py-10 min-h-screen">
      {/* Left Side - Intro Section */}
      <div className="flex flex-col gap-6 lg:gap-14 lg:w-1/2 min-w-[300px]">
        <div className="flex flex-col gap-4 items-center text-center lg:text-left lg:items-start">
          <h1 className="heading-style">
            Hey. It's Viktor Osetrov 👋
          </h1>
          <h1 className="text-lg leading-relaxed">
            Senior Engineer with 13 years of IT experience
          </h1>
          <h1 className="text-md leading-relaxed">
            Including RealSpeaker, Google, Zendesk, and Intellync
          </h1>
        </div>
        <Suspense fallback={<div>Loading Email Subscription...</div>}>
          <EmailSubscription isDarkMode={isDarkMode} />
        </Suspense>
      </div>

      {/* DonutChart Section */}
      <div className="lg:w-1/3 flex justify-center lg:justify-start min-w-[300px] donut-chart-wrapper">
        <Suspense fallback={<div>Loading Donut Chart...</div>}>
          <DonutChartSection chartData={chartData} />
        </Suspense>
      </div>
    </section>
  );
};

export default MainIntro;
